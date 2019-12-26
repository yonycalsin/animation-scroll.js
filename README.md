<p align="center">
  <a href="https://github.com/yonicb/animation-scroll.js" target="blank"><img src="https://i.ibb.co/HPCbW6q/animation-scroll-js.png" width="120" alt="Animation-scroll.js Logo" /></a>
</p>

<p align="center">
🎨 Animation-scroll.js 🌐 is a javascript library that features scroll functionality with modern animation.
</p>
<p align="center" style="max-width: 450px; margin: auto;">
   <a href="https://github.com/yonicb/animation-scroll.js"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" /></a>
   <a href="https://github.com/yonicb/animation-scroll.js"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
   <a href="https://www.npmjs.com/animation-scroll.js" target="_blank">
   <img src="https://img.shields.io/npm/v/animation-scroll.js" alt="NPM Version" /></a>
   <a href="https://www.npmjs.com/animation-scroll.js" target="_blank">
   <img src="https://img.shields.io/npm/l/animation-scroll.js" alt="Package License" /></a>
   <a href="https://www.npmjs.com/animation-scroll.js" target="_blank">
   <img src="https://img.shields.io/npm/dm/animation-scroll.js" alt="NPM Downloads" /></a>
   <a href="https://github.com/yonicb/animation-scroll.js" target="_blank">
   <img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
   <a href="https://github.com/yonicb/animation-scroll.js"><img src="https://img.shields.io/badge/Github%20Page-animation.scroll.js-yellow?style=flat-square&logo=github" /></a>
   <a href="https://github.com/yonicb"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
   <a href="https://twitter.com/yonicalsin" target="_blank">
   <img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>
</p>

## 🎉 Demo
Preview live [Click Here](https://yonicb.github.io/animation-scroll.js)

## 🌐 Description

<p>
Under the hood, animation-scroll.js uses javascript, but also provides compatibility with a wide range of other libraries, such as Eg ReactJs, Vuejs, Angular, which allows the easy use of countless third-party add-ons that are available!
</p>

## 📦 Installation
<p>
To start using animation-scroll.js, you must install it with the npm or yarn package manager, as shown in the next section, or download it directly!
</p>

``` properties
// To install using npm
npm install animation-scroll.js -S

// To install using yarn
yarn add animation-scroll.js
```
<p>
Or you could also use it using a cdn provided by unpkg.com, as shown below!
</p>

``` html
<script src="https://unpkg.com/animation-scroll.js@1.0.12/dist/index.js"></script>
```

<!-- ## Getting started -->
## ▶️ Getting started
<p>
To use the beautiful animation animation-scroll.js is very simple, first we will import the index.js file that contains the code. Example:
</p>

```js
// If you use nodejs, reajs, vuejs or angular
const animationScrollJs = require("animation-scroll.js");

// If you use ES6+
import animationScrollJs from "animation-scroll.js";
```
<p>
As you can see, we already import correctly! Animation-scroll.js, for example:
</p>

```js
/**
 * @Param container: number | element
 * @Param duration: number
 * @Param callback: function
 * */
new AnimationScrollJs(500, 1000, (e) => {
   console.log('Scroll done!');
});
```

<p>
Tambien puedes ejecutar el scroll sobre un contenedor perzonalizado
</p>

```js
/**
 * @Param container: number | element
 * @Param duration: number
 * @Param callback: function
 * */

let container = document.getElementById('chat-container');
let duration = 1000;
var callback = function () {
   console.log('Scroll done!');
}
new AnimationScrollJs(container, duration, callback);
```


## ⭐ Support for

Animation-scroll.js is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).


## 🎩 Stay in touch

* Author [Yoni Calsin](https://github.com/yonicb)
* Twitter [Yoni Calsin](https://twitter.com/yonicalsin)

## 📜 License

Animation-scroll.js is [MIT licensed](LICENSE).

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/yonicalsin"><img src="https://avatars0.githubusercontent.com/u/58490737?v=4" width="60px;" alt=""/><br /><sub><b>Yoni Calsin</b></sub></a><br /><a href="https://github.com/animation-scroll.js/animation-scroll.js/commits?author=yonicb" title="Code">💻</a> <a href="#maintenance-yonicb" title="Maintenance">🚧</a> <a href="#ideas-yonicb" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-yonicb" title="Design">🎨</a> <a href="https://github.com/animation-scroll.js/animation-scroll.js/commits?author=yonicb" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!