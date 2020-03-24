(function(global, factory) {
	
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(global, jQuery);

	} 
	else if (typeof define === 'function' && define.amd) {
		define(['jquery'], function(jQuery) {
			return factory(global, jQuery);
		});
	} 
	else {
		global['Polaris'] = factory(global, global.jQuery);
	}

})((this || 0).self || global, function(global, $) {

	var _css = {}, _util = {}, _easing = {},

	_util = (function() {

		var _winW = 0;
		var _winH = 0;
		var _resizeListeners = null;

		var isFunction = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Function]');
		};

		var isNumber = function(arg) {
			return (Object.prototype.toString.call(arg) === '[object Number]');
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

		var sequence = function(from , to) {
			var seq = [];

			for (var i=from; i<=to; i++) {
				seq.push(i);
			}
			return seq;
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
					} 
					else {
						global.attachEvent('onresize', handler);
					}
				}
				listener.call(_this, _winW, _winH);
			}
		};

		return {
			isNumber: isNumber,
			zeroPad: zeroPad,
			sequence: sequence,
			onResize: onResize
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

	// jQuery extend
	if ($) {
		$.extend($.easing, _easing);
	}

	
	// jQuery extend
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
		css    : _css,
		util   : _util
	};
});