// Videos list in section 'Word'

(function() {

	var loader = new Loader();

	$(function() {

		var movies   = [];
		var current  = -1;
		var animated = false;

		// Videos list
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

		movies = movieParams.map(function(param) {
			var movie = null;
			movie = new Movie(param.src, {
				container : param.el,
				center : {x:0.5, y:0.5},
				volume : 80
			});
			movie.skipLoad();
			
			// play next video 1000ms before current video's end
			movie.beforeEnd(1000, function() {
				changeMovie(param.next);
			});

			// video end
			movie.onEnded(function() {
				movie.seek(0);
			});

			return movie;
		});

		function changeCursor(index) {
			$('.thumb_list li').removeClass('current').eq(index).addClass('current');
		}

		function changeMovie(index, head) {
			if (animated || index === current) return false;

			changeCursor(index);

			var titles = $('.movie_title li');

			movies[index].play();

			if (current !== -1) {
				animated = true;

				movies[index].el.stop(true).transit({opacity:1}, 1, 'linear');

				// current playing video
				movies[current].el.css({zIndex:1}).stop(true).transit({opacity:0}, 1000, 'oX2', function() {
					movies[current].el.css({zIndex:''});
					movies[current].pause();

					// next video title
					titles.eq(index).stop().css({display:'block'}).animate({opacity:1}, 1000, 'iX2');

					// 
					movies[index].play();

					current = index;
					animated = false;
				});

				// clear current video title
				titles.eq(current).stop().animate({opacity:0}, 800, 'oX2', function() {
					$(this).clearStyle();
				});
			} 
			else {
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
				$('.thumb_list').transit({opacity:1}, 1000, 'iX2');
			}, 1000);

			changeMovie(0);
		});
	});

})();