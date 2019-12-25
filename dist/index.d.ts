/*!
 * Animation Scroll Js v1.0.4 (https://github.com/yonicb/animation-scroll.js)
 * Copyright 2019 The Animation Scroll Js Authors
 * Copyright 2019 Yoni Calsin <@yonicb>.
 * Licensed under MIT (https://github.com/yonicb/animation-scroll.js/blob/master/LICENSE)
 */
declare class AnimationScrollJs {
   private _rAF;
   constructor(el: any, duration: number, callback: Function, context?: any);
   private getTop;
   private easeInOut;
   private getPosition;
}
export default AnimationScrollJs;
