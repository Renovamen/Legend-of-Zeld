(function() {

	// 视频播放标志
	var useVideo = !Polaris.ua.tablet && !Polaris.ua.mobile && !Polaris.ua.nwiiu;
	var loader = new Loader();
	
	$(function() {

		var movies   = [];
		var current  = -1;
		var animated = false;
		var onmouse  = false;

		// 背景动画
		var movieParams = [{
			// 守护
			vid  : '',
			src  : "https://www.nintendo.co.jp/zelda/assets/movie/guard.mp4",
			el   : '#world_page .video_wrap > div',
			next : 1
		}, {
			// 奔驰
			vid  : 'kBynlwBSSao',
			src  : 'https://www.nintendo.co.jp/zelda/assets/movie/run.mp4',
			el   : '#world_page .video_wrap > div',
			next : 2
		}, {
			// 生存
			vid  : '508HXOMs39E',
			src  : 'https://www.nintendo.co.jp/zelda/assets/movie/live.mp4',
			el   : '#world_page .video_wrap > div',
			next : 0
		}];

		// 背景幻灯片参数
		var backSlideParams = [{
			src : Polaris.util.sequence(1, 21).map(function(i) {
				return 'assets/img/world/guard_' + Polaris.util.zeroPad(i,2) + '.jpg';
			}),
			container : '#world_page .video_wrap > div',
			className : 'slide guard',
			duration  : 2000,
			interval  : 3*1000
		}, {
			src : Polaris.util.sequence(1, 21).map(function(i) {
				return 'assets/img/world/run_' + Polaris.util.zeroPad(i,2) + '.jpg';
			}),
			container : '#world_page .video_wrap > div',
			className : 'slide run',
			duration  : 2000,
			interval  : 3*1000
		}, {
			src : Polaris.util.sequence(1, 21).map(function(i) {
				return 'assets/img/world/live_' + Polaris.util.zeroPad(i,2) + '.jpg';
			}),
			container : '#world_page .video_wrap > div',
			className : 'slide live',
			duration  : 2000,
			interval  : 3*1000
		}];


		if (useVideo) {
			// 电影排列
			movies = movieParams.map(function(param) {

				var movie = null;

				
					movie = new Movie(param.src, {
						container : param.el,
						center : {x:0.5, y:0.5},
						volume : 80
					});
					movie.skipLoad();
				

				// 结束1000ms前到下一个视频
				movie.beforeEnd(1000, function() {
					changeMovie(param.next);
				});

				// 视频结束
				movie.onEnded(function() {
					movie.seek(0);
				});

				return movie;
			});
		} 

		else {
			movies = backSlideParams.map(function(param) {
				var slide = new Slide(param.src, param);

				// 全尺寸
				Polaris.util.onResize(function(w, h) {
					var elW = slide.el.width();
					var elH = slide.el.height();

					var imgW = elW;
					var imgH = elW * 720 / 1280;

					if (imgH < elH) {
						imgH = elH;
						imgW = elH / 720 * 1280;
					}

					var offsetX = (elW - imgW) / 2;
					var offsetY = (elH - imgH) / 2;

					slide.images.forEach(function(img) {
						img.css({width:imgW, height:imgH, top:offsetY, left:offsetX});
					});
				});

				slide.seek(0);
				slide.pause();

				return slide;
			});

			$('html').addClass('no-video');
		}

		function changeCursor(index) {
			$('.thumb_list_01 li').removeClass('current').eq(index).addClass('current');
			$('.thumb_list_02 li').removeClass('current').eq(index).addClass('current');
		}

		function changeMovie(index, head) {
			if (animated || index === current) return false;

			changeCursor(index);

			var titles = $('.movie_title li');

			// 从头开始播放
			if (head) movies[index].seek(0);

			// 开始播放下一个视频
			movies[index].play();

			if (current !== -1) {
				animated = true;

				movies[index].el.stop(true).transit({opacity:1}, 1, 'linear');

				// 播放中的视频
				movies[current].el.css({zIndex:1}).stop(true).transit({opacity:0}, 1000, 'oX2', function() {
					movies[current].el.css({zIndex:''});
					movies[current].pause();

					// 下一个标题
					titles.eq(index).stop().css({display:'block'}).animate({opacity:1}, 1000, 'iX2');

					// 
					movies[index].play();

					current = index;
					animated = false;
				});

				// 删除播放中的标题
				titles.eq(current).stop().animate({opacity:0}, 800, 'oX2', function() {
					$(this).clearStyle();
				});
			} else {
				current = index;

				movies[index].el.transit({opacity:1}, 1200, 'iX2', function() {
					titles.eq(index).css({display:'block'}).delay(1000).animate({opacity:1}, 1000, 'iX2');
				});
			}
			return true;
		}

		$('.play_movie').on('click', function(e) {
			e.preventDefault();

			var index = parseInt(this.href.split('#')[1]);

			if (changeMovie(index)) {
			}
		});
		
		loader.start().then(function() {		

			setTimeout(function() {
				$('.thumb_list_02').transit({opacity:1}, 1000, 'iX2');
			}, 1000);

			changeMovie(0);
		});
	});

})();