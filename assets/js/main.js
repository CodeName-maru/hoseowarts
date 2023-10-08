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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/home.png */ \"./src/client/img/home.png\");\n/* harmony import */ var _img_login_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/login.png */ \"./src/client/img/login.png\");\n/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.jpg */ \"./src/client/img/background.jpg\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/client/scss/styles.scss\");\n/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result.js */ \"./src/client/js/result.js\");\n/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_result_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _survey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survey.js */ \"./src/client/js/survey.js\");\n/* harmony import */ var _survey_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_survey_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://hoseowarts/./src/client/js/main.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hoseowarts/./src/client/scss/styles.scss?");

/***/ }),

/***/ "./src/client/img/background.jpg":
/*!***************************************!*\
  !*** ./src/client/img/background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/background.jpg\";\n\n//# sourceURL=webpack://hoseowarts/./src/client/img/background.jpg?");

/***/ }),

/***/ "./src/client/img/home.png":
/*!*********************************!*\
  !*** ./src/client/img/home.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/home.png\";\n\n//# sourceURL=webpack://hoseowarts/./src/client/img/home.png?");

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