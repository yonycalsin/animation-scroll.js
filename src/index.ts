/*!
 * Animation Scroll Js v1.0.6 (https://github.com/yonicb/animation-scroll.js)
 * Copyright 2019 The Animation Scroll Js Authors
 * Copyright 2019 Yoni Calsin <@yonicb>.
 * Licensed under MIT (https://github.com/yonicb/animation-scroll.js/blob/master/LICENSE)
 */
interface WindowScroll extends Window {
   requestAnimationFrame: any;
   mozRequestAnimationFrame: any;
   webkitRequestAnimationFrame: any;
   msRequestAnimationFrame: any;
   oRequestAnimationFrame: any;
   AnimationScrollJs: any;
}
declare var window: WindowScroll & typeof globalThis;

class AnimationScrollJs {
   private _rAF: Function = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame || function (callback: Function) { window.setTimeout(callback, 1000 / 60); };
   constructor(el: any, duration: number, callback: Function, context: any = false) {
      this._rAF = this._rAF ? this._rAF.bind(window) : null;
      duration = duration || 500;
      context = context || window;

      const start = context.scrollTop || window.pageYOffset;
      const end = typeof el === 'number' ? parseInt(`${el}`, undefined) : this.getTop(el, start);

      const clock = new Date().getTime();

      const step = () => {
         const elapsed = new Date().getTime() - clock;
         if (context !== window) {
            context.scrollTop = this.getPosition(start, end, elapsed, duration);
         } else {
            window.scroll(0, this.getPosition(start, end, elapsed, duration));
         }

         if (elapsed > duration) {
            if (typeof callback === 'function') {
               callback(el);
            }
         } else {
            this._rAF(step);
         }
      };
      step();

   }
   private getTop = (el: any, start: any) => {
      if (el.nodeName === 'HTML') { return -start; }
      return el.getBoundingClientRect().top + start;
   }
   private easeInOut = (t: number): number => {
      if (t < .5) {
         return 4 * t * t * t;
      } else {
         return (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }
   }
   private getPosition = (start: number, end: number, elapsed: number, duration: number) => {
      if (elapsed > duration) {
         return end;
      }
      return start + (end - start) * this.easeInOut(elapsed / duration);
      // return start + (end - start) * (elapsed / duration); // linear
   }
}
if (typeof exports !== 'undefined') {
   if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = AnimationScrollJs;
   }
   exports.Wavescrollbar = AnimationScrollJs;
}
window.AnimationScrollJs = AnimationScrollJs;
export default AnimationScrollJs;
