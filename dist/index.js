/*!
 * Animation Scroll Js v1.0.3 (https://github.com/yonicb/animation-scroll.js)
 * Copyright 2019 The Animation Scroll Js Authors
 * Copyright 2019 Yoni Calsin <@yonicb>.
 * Licensed under MIT (https://github.com/yonicb/animation-scroll.js/blob/master/LICENSE)
 */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){var i=this;void 0===o&&(o=!1),this._rAF=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},this.getTop=function(e,t){return"HTML"===e.nodeName?-t:e.getBoundingClientRect().top+t},this.easeInOut=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},this.getPosition=function(e,t,n,o){return n>o?t:e+(t-e)*i.easeInOut(n/o)},this._rAF=this._rAF?this._rAF.bind(window):null,t=t||500;var r=(o=o||window).scrollTop||window.pageYOffset,u="number"==typeof e?parseInt(""+e,void 0):this.getTop(e,r),a=(new Date).getTime(),s=function(){var f=(new Date).getTime()-a;o!==window?o.scrollTop=i.getPosition(r,u,f,t):window.scroll(0,i.getPosition(r,u,f,t)),f>t?"function"==typeof n&&n(e):i._rAF(s)};s()};window.AnimationScrollJs=o,t.default=o}]);