"use strict";
var AnimationScrollJs = (function () {
    function AnimationScrollJs(el, duration, callback, context) {
        var _this = this;
        if (context === void 0) { context = false; }
        this._rAF = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };
        this.getTop = function (el, start) {
            if (el.nodeName === 'HTML') {
                return -start;
            }
            return el.getBoundingClientRect().top + start;
        };
        this.easeInOut = function (t) {
            if (t < .5) {
                return 4 * t * t * t;
            }
            else {
                return (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }
        };
        this.getPosition = function (start, end, elapsed, duration) {
            if (elapsed > duration) {
                return end;
            }
            return start + (end - start) * _this.easeInOut(elapsed / duration);
        };
        this._rAF = this._rAF ? this._rAF.bind(window) : null;
        duration = duration || 500;
        context = context || window;
        var start = context.scrollTop || window.pageYOffset;
        var end = typeof el === 'number' ? parseInt("" + el, undefined) : this.getTop(el, start);
        var clock = new Date().getTime();
        var step = function () {
            var elapsed = new Date().getTime() - clock;
            if (context !== window) {
                context.scrollTop = _this.getPosition(start, end, elapsed, duration);
            }
            else {
                window.scroll(0, _this.getPosition(start, end, elapsed, duration));
            }
            if (elapsed > duration) {
                if (typeof callback === 'function') {
                    callback(el);
                }
            }
            else {
                _this._rAF(step);
            }
        };
        step();
    }
    return AnimationScrollJs;
}());
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = AnimationScrollJs;
    }
    exports.AnimationScrollJs = AnimationScrollJs;
}
