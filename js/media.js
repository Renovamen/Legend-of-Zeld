window.Media = (function() {

	var Media = function(src, option) {
		this.src = src;
		this.media = null;
		this.option = option;

		this.$volume = $('<p></p>').css({top:0});

		if ('volume' in option) {
			this.defaultVolume = option.volume;
		} else {
			this.defaultVolume = 100;
		}
	};

	Media.extends = function(subConstructor) {
		if (typeof Object.create !== 'function') {
			Object.create = function(o) {
				var F = function(){};
				F.prototype = o;
				return new F();
			};
		}
		subConstructor.prototype = Object.create(Media.prototype);
		subConstructor.prototype.constructor = subConstructor;
		subConstructor.prototype.__super__ = Media.prototype;
		subConstructor.prototype.__super__.constructor = Media;
		subConstructor.prototype['super'] = function(){
			this.__super__.constructor.apply(this, arguments);
		};
		return subConstructor;
	};

	Media.prototype.load = function(onprogress) {
		var def = new jQuery.Deferred();
		var xhr = new XMLHttpRequest();
		var self = this;

		xhr.onload = function(e) {
			if (self.media) {
				self.media.src = self.src;
			}
			self.onload();
			def.resolve();
		};

		xhr.onerror = function() {
			def.resolve();
		};

		xhr.onprogress = onprogress;
			
		xhr.open('GET', this.src);
		xhr.send();

		return def.promise();
	};

	Media.prototype.onload = function() {
	};


	Media.prototype.play = function() {
		this.media.play();
	};

	Media.prototype.pause = function() {
		this.media.pause();
	};

	Media.prototype.mute = function() {
		this.fadeMute(0);
	};

	Media.prototype.unmute = function() {
		this.fadeUnmute(0);
	};

	Media.prototype.seek = function(sec) {
		if (this.media) {
			if (sec === undefined) sec = 0;
			this.media.currentTime = sec;
		}
	};

	Media.prototype.setVolume = function(val) {
		if (this.media) {
			this.media.volume = val / 100;
		}
	};

	Media.prototype.fadeStart = function(duration) {
		this.media.volume = 0;
		this.media.play();

		var media = this.media;

		var step = function(v) {
			media.volume = v / 100;
		};

		this.$volume.stop().css({top:0}).animate({top:this.defaultVolume}, {duration:duration, easing:'linear', step:step});
	};

	Media.prototype.fadePause = function(duration) {
		var media = this.media;

		var step = function(v) {
			media.volume = v / 100;
		};

		var complete = function() {
			media.pause();
		};

		this.$volume.stop().animate({top:0}, {duration:duration, easing:'linear', step:step, complete:complete});
	};

	Media.prototype.fadeMute = function(duration) {
		var media = this.media;

		var step = function(v) {
			media.volume = v / 100;
		};
		var complete = function() {
			media.muted = true;
		};

		this.$volume.stop().animate({top:0}, {duration:duration, easing:'linear', step:step, complete:complete});
	};

	Media.prototype.fadeUnmute = function(duration) {
		this.media.muted = false;

		var media = this.media;

		var step = function(v) {
			media.volume = v / 100;
		};
		this.$volume.stop().css({top:0}).animate({top:this.defaultVolume}, {duration:duration, easing:'linear', step:step});
	};

	Media.prototype.onEnded = function(callback) {
		this.media.addEventListener('ended', callback, false);
	};

	Media.prototype.onPause = function(callback) {
		this.media.addEventListener('pause', callback, false);
	};

	Media.prototype.onTimeupdate = function(callback) {
		this.media.addEventListener('timeupdate', function(e) {
			callback({
				currentTime : e.target.currentTime * 1000,
				duration    : e.target.duration    * 1000
			});
		}, false);
	};

	Media.prototype.beforeEnd = function(msec, callback) {
		var fired = false;

		this.onTimeupdate(function(param) {
			if (param.currentTime > param.duration - msec) {
				if (!fired) {
					fired = true;
					callback();
				}
			} else {
				fired = false;
			}
		});
	};

	return Media;
})();


window.Loader = (function() {

	var Loader = function() {
		this.loadables = [];
	};

	Loader.prototype.addMedia = function(media) {
		if (media && media instanceof Media) {
			this.loadables.push(media);
		}
	};
	
	Loader.prototype.start = function(progress) {
		var total = [];
		var loaded = [];
		var promises = [];
		var length = this.loadables.length;

		this.loadables.forEach(function(media, i) {

			promises.push(media.load(function(e) {
				total[i] = e.total;
				loaded[i] = e.loaded;

				if (total.length === length && progress) {
					var t = total.reduce(function(a, b) { return a + b; }, 0);
					var l = loaded.reduce(function(a, b) { return a + b; }, 0);
					progress(l/t);
				}
			}));

		}, this);

		return jQuery.when.apply(this, promises);
	};

	return Loader;
})();


window.Movie = (function() {

	var Movie = Media.extends(function(src, option) {

		var self = this;

		this.super(src, option);

		this.media = document.createElement('video');

		this.container = $(option.container);

		this.container.append(this.media);

		this.el = $(this.media);

		this.media.loop = !!option.loop;

		if (option.controls) {
			this.media.setAttribute('controls', 'controls');
		}

		if (option.center) {
			Polaris.util.onResize(function(w, h) {
				var ww = Math.max(w, 960);
				var wh = Math.max(h, 768) - 40;

				var aspect = 9 / 16;

				var vw = ww / 2 / (0.5 - Math.abs(option.center.x - 0.5));
				var mx = Math.min(ww - vw, 0);
				var vh = wh / 2 / (0.5 - Math.abs(option.center.y - 0.5));
				var my = Math.min(wh - vh, 0);

				if (vw * aspect >= vh) {
					vh = vw * aspect;
					my = wh / 2 - vh * option.center.y;
				} else {
					vw = vh / aspect;
					mx = ww / 2 - vw * option.center.x;
				}

				self.el.css({
					top : my,
					left : mx,
					width : vw,
					height : vh,
				});
			});
		}
	});

	Movie.prototype.skipLoad = function() {
		this.media.src = this.src;
	};

	return Movie;
})();