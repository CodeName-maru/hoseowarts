/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../img/home.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _img_login_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/login.png */ \"./src/client/img/login.png\");\n/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.jpg */ \"./src/client/img/background.jpg\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result.js */ \"./src/client/js/result.js\");\n/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_result_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _survey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survey.js */ \"./src/client/js/survey.js\");\n/* harmony import */ var _survey_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_survey_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://hoseowarts/./src/client/js/main.js?");

/***/ }),

/***/ "./src/client/js/result.js":
/*!*********************************!*\
  !*** ./src/client/js/result.js ***!
  \*********************************/
/***/ (() => {

eval("history.pushState(null, null, location.href);\nwindow.onpopstate = event => history.go(1);\n\n//# sourceURL=webpack://hoseowarts/./src/client/js/result.js?");

/***/ }),

/***/ "./src/client/js/survey.js":
/*!*********************************!*\
  !*** ./src/client/js/survey.js ***!
  \*********************************/
/***/ (() => {

eval("function onClickPre() {\n  try {\n    document.querySelector('input[name=\"choice\"]:checked').value = 0;\n  } catch {}\n  document.getElementById('submit').submit();\n}\nfunction onClickNext() {\n  var value = document.querySelector('input[name=\"choice\"]:checked').value;\n  document.getElementById('submit').submit();\n}\ndocument.querySelector('#pre').addEventListener('click', onClickPre);\ndocument.querySelector('#next').addEventListener('click', onClickNext);\n\n//# sourceURL=webpack://hoseowarts/./src/client/js/survey.js?");

/***/ }),

/***/ "./src/client/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/client/scss/styles.scss ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Cannot find module '../img/home.jpg'\\n    at tryRunOrWebpackError (/home/maru423/hoseowarts/node_modules/webpack/lib/HookWebpackError.js:88:9)\\n    at __webpack_require_module__ (/home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5067:12)\\n    at __webpack_require__ (/home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5024:18)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5095:20\\n    at symbolIterator (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/maru423/hoseowarts/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3463:5)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:4967:16\\n    at symbolIterator (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/maru423/hoseowarts/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3463:5)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:4935:15\\n    at symbolIterator (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/maru423/hoseowarts/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3463:5)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:4900:14\\n    at processQueue (/home/maru423/hoseowarts/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\\n-- inner error --\\nError: Cannot find module '../img/home.jpg'\\n    at webpackMissingModule (/home/maru423/hoseowarts/node_modules/css-loader/dist/cjs.js!/home/maru423/hoseowarts/node_modules/sass-loader/dist/cjs.js!/home/maru423/hoseowarts/src/client/scss/styles.scss:15:113)\\n    at Module.<anonymous> (/home/maru423/hoseowarts/node_modules/css-loader/dist/cjs.js!/home/maru423/hoseowarts/node_modules/sass-loader/dist/cjs.js!/home/maru423/hoseowarts/src/client/scss/styles.scss:15:203)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\\n    at Hook.eval [as call] (eval at create (/home/maru423/hoseowarts/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5069:39\\n    at tryRunOrWebpackError (/home/maru423/hoseowarts/node_modules/webpack/lib/HookWebpackError.js:83:7)\\n    at __webpack_require_module__ (/home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5067:12)\\n    at __webpack_require__ (/home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5024:18)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:5095:20\\n    at symbolIterator (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/maru423/hoseowarts/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3463:5)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:4967:16\\n    at symbolIterator (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/maru423/hoseowarts/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3463:5)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:4935:15\\n    at symbolIterator (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/maru423/hoseowarts/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/maru423/hoseowarts/node_modules/neo-async/async.js:3463:5)\\n    at /home/maru423/hoseowarts/node_modules/webpack/lib/Compilation.js:4900:14\\n    at processQueue (/home/maru423/hoseowarts/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\\n\\nGenerated code for /home/maru423/hoseowarts/node_modules/css-loader/dist/cjs.js!/home/maru423/hoseowarts/node_modules/sass-loader/dist/cjs.js!/home/maru423/hoseowarts/src/client/scss/styles.scss\\n  1 | __webpack_require__.r(__webpack_exports__);\\n  2 | /* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n  3 | /* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n  4 | /* harmony export */ });\\n  5 | /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \\\"/home/maru423/hoseowarts/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/home/maru423/hoseowarts/node_modules/css-loader/dist/runtime/noSourceMaps.js\\\");\\n  6 | /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\\n  7 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \\\"/home/maru423/hoseowarts/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/home/maru423/hoseowarts/node_modules/css-loader/dist/runtime/api.js\\\");\\n  8 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\\n  9 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \\\"/home/maru423/hoseowarts/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/home/maru423/hoseowarts/node_modules/css-loader/dist/runtime/getUrl.js\\\");\\n 10 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\\n 11 | // Imports\\n 12 | \\n 13 | \\n 14 | \\n 15 | var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\\\"Cannot find module '../img/home.jpg'\\\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\\n 16 | var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/login.png */ \\\"asset/resource|/home/maru423/hoseowarts/src/client/img/login.png\\\"), __webpack_require__.b);\\n 17 | var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ \\\"asset/resource|/home/maru423/hoseowarts/src/client/img/background.jpg\\\"), __webpack_require__.b);\\n 18 | var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\\n 19 | var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\\n 20 | var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\\n 21 | var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\\n 22 | // Module\\n 23 | ___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \\n 24 |    v2.0 | 20110126\\n 25 |    License: none (public domain)\\n 26 | */\\n 27 | html, body, div, span, applet, object, iframe,\\n 28 | h1, h2, h3, h4, h5, h6, p, blockquote, pre,\\n 29 | a, abbr, acronym, address, big, cite, code,\\n 30 | del, dfn, em, img, ins, kbd, q, s, samp,\\n 31 | small, strike, strong, sub, sup, tt, var,\\n 32 | b, u, i, center,\\n 33 | dl, dt, dd, ol, ul, li,\\n 34 | fieldset, form, label, legend,\\n 35 | table, caption, tbody, tfoot, thead, tr, th, td,\\n 36 | article, aside, canvas, details, embed,\\n 37 | figure, figcaption, footer, header, hgroup,\\n 38 | menu, nav, output, ruby, section, summary,\\n 39 | time, mark, audio, video {\\n 40 |   margin: 0;\\n 41 |   padding: 0;\\n 42 |   border: 0;\\n 43 |   font-size: 100%;\\n 44 |   font: inherit;\\n 45 |   vertical-align: baseline;\\n 46 | }\\n 47 | \\n 48 | /* HTML5 display-role reset for older browsers */\\n 49 | article, aside, details, figcaption, figure,\\n 50 | footer, header, hgroup, menu, nav, section {\\n 51 |   display: block;\\n 52 | }\\n 53 | \\n 54 | body {\\n 55 |   line-height: 1;\\n 56 | }\\n 57 | \\n 58 | ol, ul {\\n 59 |   list-style: none;\\n 60 | }\\n 61 | \\n 62 | blockquote, q {\\n 63 |   quotes: none;\\n 64 | }\\n 65 | \\n 66 | blockquote:before, blockquote:after,\\n 67 | q:before, q:after {\\n 68 |   content: \\\"\\\";\\n 69 |   content: none;\\n 70 | }\\n 71 | \\n 72 | table {\\n 73 |   border-collapse: collapse;\\n 74 |   border-spacing: 0;\\n 75 | }\\n 76 | \\n 77 | .home {\\n 78 |   height: 90vh;\\n 79 |   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\\n 80 |   background-size: cover;\\n 81 |   display: flex;\\n 82 |   flex-direction: column;\\n 83 |   justify-content: flex-end;\\n 84 |   align-items: center;\\n 85 |   color: aliceblue;\\n 86 | }\\n 87 | \\n 88 | a {\\n 89 |   color: white;\\n 90 | }\\n 91 | \\n 92 | .login {\\n 93 |   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\\n 94 |   background-size: cover;\\n 95 |   height: 90vh;\\n 96 |   display: flex;\\n 97 |   flex-direction: column;\\n 98 |   align-items: center;\\n 99 |   justify-content: center;\\n100 |   color: white;\\n101 | }\\n102 | \\n103 | .survey {\\n104 |   height: 100vh;\\n105 |   display: flex;\\n106 |   flex-direction: column;\\n107 |   align-items: center;\\n108 |   justify-content: center;\\n109 | }\\n110 | \\n111 | .survey::before {\\n112 |   position: fixed;\\n113 |   top: 0;\\n114 |   left: 0;\\n115 |   right: 0;\\n116 |   bottom: 0;\\n117 |   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\\n118 |   background-size: cover;\\n119 |   -webkit-filter: blur(2px);\\n120 |   -moz-filter: blur(2px);\\n121 |   -o-filter: blur(2px);\\n122 |   -ms-filter: blur(2px);\\n123 |   filter: blur(2px);\\n124 |   z-index: -1;\\n125 |   content: \\\"\\\";\\n126 | }\\n127 | \\n128 | [type=radio] {\\n129 |   vertical-align: middle;\\n130 |   appearance: none;\\n131 |   vertical-align: middle;\\n132 | }\\n133 | \\n134 | span {\\n135 |   display: inline-block;\\n136 |   vertical-align: middle;\\n137 |   width: 80%;\\n138 | }\\n139 | \\n140 | #question {\\n141 |   display: flex;\\n142 |   flex-direction: column;\\n143 |   align-items: center;\\n144 |   justify-content: space-around;\\n145 |   color: white;\\n146 |   height: 50%;\\n147 |   width: 50%;\\n148 | }\\n149 | \\n150 | h1 {\\n151 |   font-size: 1.5rem;\\n152 | }\\n153 | \\n154 | #choices {\\n155 |   display: flex;\\n156 |   flex-direction: column;\\n157 |   align-items: center;\\n158 |   height: 100%;\\n159 |   width: 40%;\\n160 | }\\n161 | \\n162 | #submit {\\n163 |   display: flex;\\n164 |   justify-content: space-around;\\n165 |   width: 100%;\\n166 |   height: 30%;\\n167 |   color: white;\\n168 | }\\n169 | \\n170 | input[type=radio] + label {\\n171 |   display: inline-block;\\n172 |   cursor: pointer;\\n173 |   height: 25%;\\n174 |   width: 100%;\\n175 |   border: 1px solid #333;\\n176 |   background-color: #333;\\n177 |   line-height: 24px;\\n178 |   text-align: center;\\n179 |   font-weight: bold;\\n180 |   font-size: 13px;\\n181 |   display: flex;\\n182 |   align-items: center;\\n183 |   justify-content: center;\\n184 | }\\n185 | \\n186 | input[type=radio]:checked + label {\\n187 |   background-color: #333;\\n188 |   border: 3px solid rgba(123, 132, 255, 0.6);\\n189 |   color: #fff;\\n190 | }\\n191 | \\n192 | input[type=radio]:hover + label {\\n193 |   background-color: #333;\\n194 |   border: 3px solid rgba(123, 132, 255, 0.6);\\n195 |   color: #fff;\\n196 | }\\n197 | \\n198 | input[type=button] {\\n199 |   background-color: #333;\\n200 |   color: white;\\n201 | }\\n202 | \\n203 | a {\\n204 |   color: inherit;\\n205 |   text-decoration: none;\\n206 | }`, \\\"\\\"]);\\n207 | // Exports\\n208 | /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\\n209 | \");\n\n//# sourceURL=webpack://hoseowarts/./src/client/scss/styles.scss?");

/***/ }),

/***/ "./src/client/img/background.jpg":
/*!***************************************!*\
  !*** ./src/client/img/background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/background.jpg\";\n\n//# sourceURL=webpack://hoseowarts/./src/client/img/background.jpg?");

/***/ }),

/***/ "./src/client/img/login.png":
/*!**********************************!*\
  !*** ./src/client/img/login.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/login.png\";\n\n//# sourceURL=webpack://hoseowarts/./src/client/img/login.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/main.js");
/******/ 	
/******/ })()
;