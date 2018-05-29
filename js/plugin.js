(function(global, factory) {

	if ( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = factory(global, jQuery);

	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], function(jQuery) {
			return factory(global, jQuery);
		});
	} else {
		global['Polaris'] = factory(global, global.jQuery);
	}

})((this || 0).self || global, function(global, $) {

	var _ua = {},
		_css = {},
		_html = {},
		_util = {},
		_event = {},
		_device = {},
		_easing = {},
		_htmlClasses = global.document ? document.documentElement.className.split(' ') : [];


	/*----------------------------------------------------------------------------------------------------------------
	 	随机数生成器
	 -----------------------------------------------------------------------------------------------------------------*/

	var Random = (function() {

		var Rand = function(seed) {
			this.seeds = [123456789, 362436069, 521288629, 88675123];

			if (typeof seed !== 'number') {
				seed = +new Date();
			}

			this.seeds[2] ^= seed;
			this.seeds[2] ^= this.seeds[2] >> 21;
			this.seeds[2] ^= this.seeds[2] << 35;
			this.seeds[2] ^= this.seeds[2] >> 4;
			this.seeds[2] *= 268582165;
			this.get();
			this.get();
		};

		Rand.prototype.get = function(min, max) {
			var t = (this.seeds[0]^(this.seeds[0]<<11));
			this.seeds[0] = this.seeds[1];
			this.seeds[1] = this.seeds[2];
			this.seeds[2] = this.seeds[3];
				
			var r = ( this.seeds[3]=(this.seeds[3]^(this.seeds[3]>>19))^(t^(t>>8)) );

			if (arguments.length >= 2 && max > min) {
				return min + r % (max-min+1);
			} else {
				return r;
			}
		};

		return Rand;
	})();



	/*--------------------------------------------------------------------------------------------------------*/

	_util = (function() {

		// 外部随机数生成器
		var _o_rand = null;

		// 内部随机数生成器
		var _i_rand = new Random();

		// 唯一字符串
		var _ustock = {};

		// 画面宽
		var _winW = 0;

		// 画面高
		var _winH = 0;

		// 重型拉链函数
		var _resizeListeners = null;

		// 滚动拉链函数
		var _scrollListeners = null;

		// 轮锁函数
		var _wheelListeners = null;

		// 帧拉链函数
		var _frameListeners = null;


		var isObject = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Object]');
		};

		var isArray = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Array]');
		};

		var isFunction = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Function]');
		};

		var isNumber = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Number]');
		};

		var isBoolean = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Boolean]');
		};

		var isString = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object String]');
		};

		var isNull = function(arg) {
			return (arg === null);
		};

		var srand = function(seed) {
			_o_rand = new Random(seed);
		};

		var rand = function(min, max) {
			if (_o_rand === null) {
				_o_rand = new Random();
			}
			return _o_rand.get(min, max);
		};

		var unique = function(len) {
			var str = '';
			var stack = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

			if (len && !isNaN(len)) {
				len = parseInt(len);
			} else {
				len = 10;
			}
			for (var i=0; i<len; i++) {
				str += stack.charAt(_i_rand.get(0, stack.length-1));
			}
			if (str in _ustock) {
				return uniqueString(len+1);
			} else {
				_ustock[str] = 1;
				return str;
			}
		};

		var zeroPad = function(number, digit) {
			if (isNumber(number)) {
				var len = (number+'').length;
				if (len < digit) for (var i=0; i<digit-len; i++) number = '0' + number;
				return number+'';
			} else {
				return number+'';
			}
		};

		var trim = function(str) {
			if (isString(str)) {
				return unescape(escape(str).replace(/^(%u3000|%20|%09)+|(%u3000|%20|%09)+$/g, ""));
			}
		};

		var sequence = function(from , to) {
			var seq = [];

			for (var i=from; i<=to; i++) {
				seq.push(i);
			}
			return seq;
		};

		var visibleAreaRate = function(offsetTop, height, scrollTop, scrollBottom) {
			var rate = (Math.min(scrollBottom, offsetTop+height) - Math.max(scrollTop, offsetTop)) / height;

			return rate > 0 ? rate : 0;
		};

		var search = function(key, data) {
			var keys = key.split('.')

			var _search = function(keys, data) {
				var ckey = keys.shift();

				if (_util.isObject(data)) {
					if (ckey in data) {
						if (keys.length == 0) {
							return data[ckey];
						} else {
							return _search(keys, data[ckey]);
						}
					} else {
						return undefined;
					}
				} else if (_util.isArray(data)) {
					if (isNaN(ckey)) {
						return undefined;
					} else {
						ckey = parseInt(ckey);

						if (keys.length == 0) {
							return data[ckey];
						} else {
							return _search(keys, data[ckey]);
						}
					}
				} else {
					return undefined;
				}
			};
			return _search(keys, data);
		};

		var getWindowSize = function() {
			var w = 0;
			var h = 0;

			if (isNumber(global.innerWidth)) {
				w = Math.min(global.innerWidth, global.document.documentElement.clientWidth);
				h = global.innerHeight;
			} else {
				w = global.document.documentElement.clientWidth;
				h = global.document.documentElement.clientHeight;
			}
			return {w:w, h:h};
		};

		var onResize = function(listener, thisObject) {
			var id = unique(10);

			if (isFunction(listener)) {
				var _this = thisObject !== undefined ? thisObject : global;

				if (_resizeListeners === null) {
					_resizeListeners = {};

					var size = getWindowSize();

					_winW = size.w;
					_winH = size.h;

					var handler = function() {
						var size = getWindowSize();
						_winW = size.w;
						_winH = size.h;

						for (var _id in _resizeListeners) {
							_resizeListeners[_id].callable.call(_resizeListeners[_id].thisObject, _winW, _winH);
						}
					};

					if (global.addEventListener) {
						global.addEventListener('resize', handler, false);
						global.addEventListener('orientationchange', function() {
							setTimeout(handler, 1000);
						}, false);
					} else {
						global.attachEvent('onresize', handler);
					}
				}
				_resizeListeners[id] = {callable:listener, thisObject:_this};

				listener.call(_this, _winW, _winH);
			}
			return id;
		};

		var offResize = function(id) {
			if (_resizeListeners !== null && isString(id) && id in _resizeListeners) {
				delete _resizeListeners[id];
			}
		};

		var onScroll = function(listener, thisObject) {
			var id = unique(10);

			if (isFunction(listener)) {
				var _this = thisObject !== undefined ? thisObject : global;

				if (_scrollListeners === null) {
					_scrollListeners = {};

					var handler = function() {
						var size = getWindowSize();
						var t = global.document.body.scrollTop || global.document.documentElement.scrollTop;
						var l = global.document.body.scrollLeft || global.document.documentElement.scrollLeft;
						var b = t + size.h;
						var r = l + size.w;

						for (var _id in _scrollListeners) {
							_scrollListeners[_id].callable.call(_scrollListeners[_id].thisObject, t, b, l, r);
						}
					};

					if (window.addEventListener) {
						global.addEventListener('resize', handler, false);
						global.addEventListener('scroll', handler, false);
					} else {
						global.attachEvent('onresize', handler);
						global.attachEvent('onscroll', handler);
					}
					if (_device.hasTouch && _ua.ios) {
						global.addEventListener('touchmove', handler, false);
					}
				}
				_scrollListeners[id] = {callable:listener, thisObject:_this};

				if (global.document.body) {
					var t = global.document.body.scrollTop || global.document.documentElement.scrollTop;
					var l = global.document.body.scrollLeft || global.document.documentElement.scrollLeft;
					var b = t + _winH;
					var r = l + _winW;
					listener.call(_this, t, b, l, r);
				}
			}
			return id;
		};

		var offScroll = function(id) {
			if (_scrollListeners !== null && isString(id) && id in _scrollListeners) {
				delete _scrollListeners[id];
			}
		};

		var onWheel = function(element, listener, thisObject) {
			var id = unique(10);

			if (isFunction(listener)) {
				var _this = thisObject !== undefined ? thisObject : global;

				var wheelEvent = {
					type : '',
					wheelDeltaX : 0,
					wheelDeltaY : 0,
					returnValue : true,
					originalEvent : null,

					preventDefault : function(){
						this.returnValue = false;
					}
				};

				if (_wheelListeners === null) {
					_wheelListeners = {};
				}

				_wheelListeners[id] = {target:element, callable:listener, thisObject:_this, off:null};

				if (element.addEventListener) {
					
					if (_device.hasTouch) {
						var timer = null;
						var dx, dy, sx, sy;

						var tick = function(e){
							dx *= 0.9;
							dy *= 0.9;

							wheelEvent.returnValue = true;
							wheelEvent.type = 'touchend';
							wheelEvent.wheelDeltaX = dx;
							wheelEvent.wheelDeltaY = dy;

							for (var _id in _wheelListeners) {
								if (element === _wheelListeners[id].target) {
									_wheelListeners[id].callable.call(thisObject, wheelEvent);
								}
							}

							if(Math.abs(dx) > 1 || Math.abs(dy) > 1){
								timer = setTimeout(tick, 10);
							}
						};

						var touchstart = function(e) {
							clearTimeout(timer);
							sx = e.touches[0].clientX;
							sy = e.touches[0].clientY;
						};

						var touchmove = function(e) {
							dx = e.touches[0].clientX - sx;
							dy = e.touches[0].clientY - sy;
							sx = e.touches[0].clientX;
							sy = e.touches[0].clientY;

							wheelEvent.returnValue = true;
							wheelEvent.type = 'touchmove';
							wheelEvent.wheelDeltaX = dx;
							wheelEvent.wheelDeltaY = dy;
							wheelEvent.originalEvent = e;

							for (var _id in _wheelListeners) {
								if (element === _wheelListeners[id].target) {
									_wheelListeners[id].callable.call(thisObject, wheelEvent);
								}
							}

							if (wheelEvent.returnValue === false) {
								e.preventDefault();
							}
						};

						_wheelListeners[id].off = function() {
							element.removeEventListener('touchstart', touchstart);
							element.removeEventListener('touchmove', touchmove);
							element.removeEventListener('touchend', tick);
							element.removeEventListener('touchcancel', tick);
						};

						element.addEventListener('touchstart', touchstart, false);
						element.addEventListener('touchmove', touchmove, false);
						element.addEventListener('touchend', tick, false);
						element.addEventListener('touchcancel', tick, false);
					} else {

						var mousewheel = function(e) {
							var dx = e.wheelDeltaX ? e.wheelDeltaX : 0;
							var dy = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;

							if(dy%40 == 0){
								dy *= 0.8;
							}else{
								dy *= 0.15;
							}
							if(dx%40 == 0){
								dx *= 0.8;
							}else{
								dx *= 0.15;
							}

							wheelEvent.returnValue = true;
							wheelEvent.type = 'mousewheel';
							wheelEvent.wheelDeltaX = dx;
							wheelEvent.wheelDeltaY = dy;
							wheelEvent.originalEvent = e;

							for (var _id in _wheelListeners) {
								if (element === _wheelListeners[id].target) {
									_wheelListeners[id].callable.call(thisObject, wheelEvent);
								}
							}

							if(wheelEvent.returnValue === false){
								e.preventDefault();
							}
						};

						var MozMousePixelScroll = function(e) {
							var dx = 0;
							var dy = 0;

							if(e.axis === e.VERTICAL_AXIS){
								dy = -e.detail*0.6;
							}else if(e.axis === e.HORIZONTAL_AXIS){
								dx = -e.detail*0.6;
							}

							wheelEvent.returnValue = true;
							wheelEvent.type = 'mousewheel';
							wheelEvent.wheelDeltaX = dx;
							wheelEvent.wheelDeltaY = dy;
							wheelEvent.originalEvent = e;

							for (var _id in _wheelListeners) {
								if (element === _wheelListeners[id].target) {
									_wheelListeners[id].callable.call(thisObject, wheelEvent);
								}
							}

							if(wheelEvent.returnValue === false){
								e.preventDefault();
							}
						};

						_wheelListeners[id].off = function() {
							element.removeEventListener('mousewheel', mousewheel);
							element.removeEventListener('MozMousePixelScroll', MozMousePixelScroll);
						};

						element.addEventListener('mousewheel', mousewheel, false);
						element.addEventListener('MozMousePixelScroll', MozMousePixelScroll, false);
					}
				} else {
					var onmousewheel = function(e) {
						wheelEvent.returnValue = true;
						wheelEvent.type = 'mousewheel';
						wheelEvent.wheelDeltaX = 0;
						wheelEvent.wheelDeltaY = e.wheelDelta*1.5;
						wheelEvent.originalEvent = window.event;

						for (var _id in _wheelListeners) {
							if (element === _wheelListeners[id].target) {
								_wheelListeners[id].callable.call(thisObject, wheelEvent);
							}
						}

						if(wheelEvent.returnValue === false){
							return false;
						}
					};

					_wheelListeners[id].off = function() {
						element.detachEvent('onmousewheel', onmousewheel)
					};

					element.attachEvent('onmousewheel', onmousewheel);
				}
			}
			return id;
		};

		var offWheel = function(id) {
			if (_wheelListeners !== null && isString(id) && id in _wheelListeners) {
				_wheelListeners[id].off();
				delete _wheelListeners[id];
			}
		};

		var onFrame = function(listener, thisObject) {
			var id = unique(10);

			if (isFunction(listener)) {
				var _this = thisObject !== undefined ? thisObject : global;

				if (_frameListeners === null) {
					_frameListeners = {};

					var rf = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || global.mozRequestAnimationFrame || global.setTimeout;
					var cf = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.msCancelAnimationFrame || global.mozCancelAnimationFrame || global.clearTimeout;
					var timer = null;
					var interval = 1000/60;

					var tick = function() {
						var ct = +new Date();
						var dt;
						var pt;
						var cnt = 0;

						for (var _id in _frameListeners) {
							dt = ct - _frameListeners[_id].t1;
							pt = ct - _frameListeners[_id].t0;

							_frameListeners[_id].t1 = ct;

							if (_frameListeners[_id].callable.call(_frameListeners[_id].thisObject, ct, dt, pt) === false) {
								delete _frameListeners[_id];
							}
						}

						for (var _id in _frameListeners) {
							cnt++;
						}

						if (cnt === 0) {
							cf(timer);
							_frameListeners = null;
						} else {
							timer = rf(tick, interval);
						}
					};
					timer = rf(tick, interval);
				}
				_frameListeners[id] = {
					t0 : +new Date(),
					t1 : +new Date(),
					callable : listener,
					thisObject : _this
				};
			}
			return id;
		};

		var offFrame = function(id) {
			if (_frameListeners !== null && isString(id) && id in _frameListeners) {
				delete _frameListeners[id];
			}
		};


		return {
			// 类型判別
			 isObject   : isObject
			,isArray    : isArray
			,isFunction : isFunction
			,isNumber   : isNumber
			,isBoolean  : isBoolean
			,isString   : isString
			,isNull     : isNull

			// 随机数初始化
			,srand : srand

			// 获得随机数
			,rand : rand

			// 
			,zeroPad : zeroPad

			// 除去前后空白
			,trim : trim

			// 获得唯一字符串
			,unique : unique

			// 按顺序生成
			,sequence : sequence

			// 元素显示比例
			,visibleAreaRate : visibleAreaRate

			// 
			,search : search

			,onResize : onResize

			,offResize : offResize

			,onScroll : onScroll

			,offScroll : offScroll

			,onWheel : onWheel

			,offWheel : offWheel

			,onFrame : onFrame

			,offFrame : offFrame
		};
	})();

	/*----------------------------------------------------------------------------------------------*/

	var __cubicBezierParams = {
		linear : null,
		swing : [0.250, 0.100, 0.250, 1.000],
		iX2 : [0.55, 0.085, 0.68, 0.53],
		oX2 : [0.25, 0.460, 0.45, 0.94],
		ioX2 : [0.455, 0.03, 0.515, 0.955],
		iX3 : [0.550, 0.055, 0.675, 0.190],
		oX3 : [0.215, 0.610, 0.355, 1.000],
		ioX3 : [0.645, 0.045, 0.355, 1.000],
		iX4 : [0.895, 0.030, 0.685, 0.220],
		oX4 : [0.165, 0.840, 0.440, 1.000],
		ioX4 : [0.770, 0.000, 0.175, 1.000],
		iX5 : [0.755, 0.050, 0.855, 0.060],
		oX5 : [0.230, 1.000, 0.320, 1.000],
		ioX5 : [0.860, 0.000, 0.070, 1.000],
		iSin : [0.470, 0.000, 0.745, 0.715],
		oSin : [0.390, 0.575, 0.565, 1.000],
		ioSin : [0.445, 0.050, 0.550, 0.950],
		iExp : [0.950, 0.050, 0.795, 0.035],
		oExp : [0.190, 1.000, 0.220, 1.000],
		ioExp : [1.000, 0.000, 0.000, 1.000],
		iCirc : [0.600, 0.040, 0.980, 0.335],
		oCirc : [0.075, 0.820, 0.165, 1.000],
		ioCirc : [0.785, 0.135, 0.150, 0.860],
		iBack : [0.600, -0.280, 0.735, 0.045],
		oBack : [0.175, 0.885, 0.320, 1.275],
		ioBack : [0.680, -0.550, 0.265, 1.550]
	};

	_easing = {

		 iX2  : function(x) { return x*x; }
		,oX2  : function(x) { return -x*(x-2); }
		,ioX2 : function(x) { return (x < 0.5 ? 2*x*x : 1-2*(--x)*x); }
		,oiX2 : function(x) { return (x < 0.5 ? -2*x*(x-1) : 1+2*x*(x-1)); }

		,iX3  : function(x) { return x*x*x; }
		,oX3  : function(x) { return 1+(--x)*x*x; }
		,ioX3 : function(x) { return (x < 0.5 ? 4*x*x*x: 1+4*(--x)*x*x); }

		,iX4  : function(x) { return x*x*x*x; }
		,oX4  : function(x) { return 1-(--x)*x*x*x; }
		,ioX4 : function(x) { return (x < 0.5 ? 8*x*x*x*x : 1-8*(--x)*x*x*x); }

		,iX5  : function(x) { return x*x*x*x*x; }
		,oX5  : function(x) { return 1+(--x)*x*x*x*x; }
		,ioX5 : function(x) { return (x < 0.5 ? 16*x*x*x*x*x : 1+16*(--x)*x*x*x*x); }

		,iExp  : function(x) { return Math.exp(10*(x-1)); }
		,oExp  : function(x) { return 1-Math.exp(-10*x); }
		,ioExp : function(x) { return (x < 0.5 ? 0.5*Math.exp(10*(x*2-1)) : 1-0.5*Math.exp(-10*(x-0.5)*2)); }

		,iSin  : function(x) { return 1-Math.cos(x*Math.PI/2); }
		,oSin  : function(x) { return Math.sin(x*Math.PI/2); }
		,ioSin : function(x) { return 0.5-0.5*Math.cos(x*Math.PI); }

		,iBack  : function(x) { var s=1.8; return x*x*((s+1)*x - s); }
		,oBack  : function(x) { var s=1.8; return 1 + (x-1)*(x-1)*((s+1)*(x-1) + s); }
		,ioBack : function(x) {}

		,iCirc  : function(x,t,b,c,d) { return -c *(Math.sqrt(1 -(t/=d)*t) - 1)+b; }
		,oCirc  : function(x,t,b,c,d) { return c * Math.sqrt(1 -(t=t/d-1)*t)+b; }
		,ioCirc : function(x,t,b,c,d) { if ((t/=d/2)<1) return -c/2 *(Math.sqrt(1 - t*t) - 1)+b;return c/2 *(Math.sqrt(1 -(t-=2)*t)+1)+b; }

		,elastic  : function(x) { return _easing._elastic(x, 3, 0.1, 0.4); }
		,elastic2 : function(x) { return _easing._elastic(x, 2, 0.1, 0.4); }
		,elastic3 : function(x) { return _easing._elastic(x, 3, 0.1, 0.4); }
		,elastic4 : function(x) { return _easing._elastic(x, 4, 0.1, 0.4); }
		,elastic5 : function(x) { return _easing._elastic(x, 5, 0.1, 0.4); }
		,elastic6 : function(x) { return _easing._elastic(x, 6, 0.1, 0.4); }

		,bounce  : function(x) { return _easing._bounce(x,4,5); }
		,bounce2 : function(x) { return _easing._bounce(x,2,2); }
		,bounce3 : function(x) { return _easing._bounce(x,3,4); }
		,bounce4 : function(x) { return _easing._bounce(x,4,5); }
		,bounce5 : function(x) { return _easing._bounce(x,5,7); }
		,bounce6 : function(x) { return _easing._bounce(x,6,9); }

		,_bounce : function(x, n, s) {
			var a = [1];
			var p = 2/n/n;
			for (var i=1; i<n; i++) a[a.length] = 1-p*i*(i+1)/2;
			a[a.length] = -n*p/2;

			for (var i=0; i<a.length; i++) {
				if (x > a[i]) {
					if (i == a.length-1) {
						return x*x/(n*p/2)/(n*p/2);
					} else {
						return s*(x-a[i])*(x-a[i-1])+1;
					}
				}
			}
		}

		,_elastic : function(x, c, a, s) {
			if (x < a) {
				return Math.exp(10*(x/a-1));
			} else {
				return 1 + s*Math.exp((a-x)*5)*Math.sin(360*c*(x-a)/(1-a)*Math.PI/180);
			}
		}

		,bezier : function(name) {
			if (name in __cubicBezierParams) {
				var easing = __cubicBezierParams[name];

				if (easing != null) {
					return 'cubic-bezier('+easing[0]+', '+easing[1]+', '+easing[2]+', '+easing[3]+')';
				} else {
					return 'linear';
				}
			} else {
				return 'linear';
			}
		}
	};

	// jQuery扩展
	if ($) {
		$.extend($.easing, _easing);
	}


	/*---------------------------------------------------------------------------------------------------------------
		Cookie
	 ----------------------------------------------------------------------------------------------------------------*/

	var _cookie = {

		read : function(key, defaultValue) {
			if (!!document.cookie) {
				var sp = document.cookie.split(';');

				for (var i=0; i<sp.length; i++) {
					var pair = sp[i].split('=');

					if (_util.trim(pair[0]) === key) {
						var obj = JSON.parse(decodeURIComponent(_util.trim(pair[1])));

						return obj._v;
					}
				}
			}
			return defaultValue;
		},

		write : function(key ,val, options) {
			var path    = _util.isObject(options) && options.path    ? '; path=' + options.path : '';
	        var domain  = _util.isObject(options) && options.domain  ? '; domain=' + options.domain : '';
	       	var secure  = _util.isObject(options) && options.secure  ? '; secure' : '';
			var expires = _util.isObject(options) && options.expires ? options.expires : '';

			if(expires !== ''){
				var date;

				if (_util.isNumber(expires)) {
					date = new Date();
					date.setTime(date.getTime() + expires*1000);

				} else if (expires.toUTCString ){
					date = expires;

				} else if (_util.isString(expires)) {
					var msec = 0;

					if (expires.match(/^([0-9]+)second(s)?$/)){
						msec = (RegExp.$1-0)*1000;
					} else if (expires.match(/^([0-9]+)minute(s)?$/)) {
						msec = (RegExp.$1-0)*60*1000;
					} else if (expires.match(/^([0-9]+)hour(s)?$/)) {
						msec = (RegExp.$1-0)*60*60*1000;
					} else if (expires.match(/^([0-9]+)day(s)?$/)) {
						msec = (RegExp.$1-0)*24*60*60*1000;
					} else if (expires.match(/^([0-9]+)week(s)?/)) {
						msec = (RegExp.$1-0)*7*24*60*60*1000;
					} else if (expires.match(/^([0-9]+)month(s)?$/)) {
						msec = (RegExp.$1-0)*30*24*60*60*1000;
					} else if (expires.match(/^([0-9]+)year(s)?$/)) {
						msec = (RegExp.$1-0)*365*24*60*60*1000;
					}
					if (msec > 0) {
						date = new Date();
						date.setTime(date.getTime() + msec);
					}
				}
				if (date) expires = '; expires=' + date.toUTCString();
			}

			document.cookie = key + '=' + encodeURIComponent(JSON.stringify({_v : val})) + path + domain + secure + expires;
		}
	};

	
	// jQuery扩展
	if ($) {

		jQuery.fn.extend({

			translate : function(dx, dy) {
				if (dx === undefined) dx = 0;
				if (dy === undefined) dy = 0;

				return this.each(function() {
					if (_css.hasTransition) {
						this.style['transform'] = this.style[_css.prefix+'transform'] = 'translate3d('+dx+'px,'+dy+'px,0)';
					} else {
						this.style.marginLeft = dx + 'px';
						this.style.marginTop  = dy + 'px';
					}
				});
			},

			scale : function(s) {
				return this.each(function() {
					if (_css.hasTransition) {
						this.style['transform'] = this.style[_css.prefix+'transform'] = 'scale('+s+')';
					}
				});
			},

			clearStyle : function() {
				return this.each(function(){
					this.setAttribute('style', '');
					this.removeAttribute('style');
				});
			},

			transition : function(prop, duration, easing, delay){
				if (_css.hasTransition) {
					if(prop){
						if(!duration) duration = 0;
						if(!easing) easing = 'linear';
						if(!delay) delay = 0;
						if(prop == 'filter') prop = _css.prefix+prop;
						if(prop == 'transform') prop = _css.prefix+prop;

						this.css('transition', prop+' '+duration+'ms '+_easing.bezier(easing)+' '+delay+'ms');
						this.css(_css.prefix+'transition', prop+' '+duration+'ms '+_easing.bezier(easing)+' '+delay+'ms');
					}else{
						this.css('transition', 'none');
						this.css(_css.prefix+'transition', 'none');
					}
				}
				return this;
			},

			transit : function(property, duration, easing, callback) {
				if(_css.hasTransition){
					if(typeof property == 'object'){
						duration = (duration ? duration + 'ms' : '0ms');
						easing   = (easing   ? _easing.bezier(easing) : 'linear');

						var transition = [];
						var targetProp = {};

						for(var key in property){
							var cssKey = key;

							if(key == 'transform'){
								targetProp[key] = property[key];
								cssKey = _css.prefix+key;
								targetProp[_css.prefix+key] = property[key];
							}else if(key == 'filter'){
								cssKey = _css.prefix+key;
								targetProp[_css.prefix+key] = property[key];
							}else{
								cssKey = _util.camel2hyphen(key);

								if(typeof property[key] == 'string' || cssKey==='opacity' || cssKey==='zoom' || cssKey==='z-index' || cssKey==='font-weight' || cssKey==='line-height'){
									targetProp[key] = property[key];
								}else{
									targetProp[key] = property[key] + 'px';
								}
							}
							transition[transition.length] = [cssKey, duration, easing].join(' ');
						}
						transition = transition.join(',');

						this.queue(function(){
							function listener(e){
								if(e.target === this){
									if(typeof callback === 'function') callback.call(this, e);
									this.removeEventListener(_css.transitionEnd, listener);
									$(this).dequeue();
								}
							}
							this.addEventListener(_css.transitionEnd, listener, false);

							$(this).css('transition', transition).css(_css.prefix+'transition', transition).css(targetProp);//.dequeue();
						});
					}else{
						this.css('transition', 'none').css(_css.prefix+'transition', 'none').dequeue();
					}
				}else{
					this.animate(property, duration, easing, callback);
				}
				return this;
			}
		});
	}

	return {
		ua     : _ua,
		css    : _css,
		html   : _html,
		util   : _util,
		event  : _event,
		device : _device,
		cookie : _cookie,
		easing : _easing
	};
});

