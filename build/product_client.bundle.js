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

/***/ "./public/js/client/components/rangePrice.js":
/*!***************************************************!*\
  !*** ./public/js/client/components/rangePrice.js ***!
  \***************************************************/
/***/ (() => {

eval("window.onload = function () {\n  slideMin();\n  slideMax();\n};\nvar minVal = document.querySelector(\".min-val\");\nvar maxVal = document.querySelector(\".max-val\");\nvar priceInputMin = document.querySelector(\".min-input\");\nvar priceInputMax = document.querySelector(\".max-input\");\nvar minTooltip = document.querySelector(\".min-tooltip\");\nvar maxTooltip = document.querySelector(\".max-tooltip\");\nvar minGap = 0;\nvar range = document.querySelector(\".slider-track\");\nvar sliderMinValue = parseInt(minVal.min);\nvar sliderMaxValue = parseInt(maxVal.max);\nminVal.addEventListener(\"input\", function () {\n  slideMin();\n});\nmaxVal.addEventListener(\"input\", function () {\n  slideMax();\n});\nfunction slideMin() {\n  var gap = parseInt(maxVal.value) - parseInt(minVal.value);\n  if (gap <= minGap) {\n    minVal.value = parseInt(maxVal.value) - minGap;\n  }\n  minTooltip.innerHTML = \"$\" + minVal.value;\n  //   priceInputMin.value = minVal.value;\n  setArea();\n}\nfunction slideMax() {\n  var gap = parseInt(maxVal.value) - parseInt(minVal.value);\n  if (gap <= minGap) {\n    maxVal.value = parseInt(minVal.value) - minGap;\n  }\n  maxTooltip.innerHTML = \"$\" + maxVal.value;\n  // priceInputMax.value = maxVal.value;\n  setArea();\n}\nfunction setArea() {\n  console.log(\"sd\");\n  range.style.left = \"\".concat((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100, \"%\");\n  range.style.left = minVal.value / sliderMaxValue * 100 + \"%\";\n  minTooltip.style.left = minVal.value / sliderMaxValue * 100 + \"%\";\n  range.style.right = \"\".concat(100 - (maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100, \"%\");\n  maxTooltip.style.right = 100 - maxVal.value / sliderMaxValue * 100 + \"%\";\n}\nfunction setMinInput() {\n  var minPrice = parseInt(priceInputMin.value);\n}\nfunction setMaxInput() {\n  var maxPrice = parseInt(priceInputMax.value);\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/components/rangePrice.js?");

/***/ }),

/***/ "./public/js/client/pages/product.client.js":
/*!**************************************************!*\
  !*** ./public/js/client/pages/product.client.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_rangePrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/rangePrice.js */ \"./public/js/client/components/rangePrice.js\");\n/* harmony import */ var _components_rangePrice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_rangePrice_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n//++++++++++++++++++++++Product-Detail++++++++++++++++++++++++++++=\nvar img = document.querySelectorAll(\".img-select a\");\nvar imgBtn = _toConsumableArray(img);\nconsole.log(imgBtn);\n// let eleSelected = imgBtn[0].parentNode;\neleSelected.style.border = \"4px solid red\";\nvar imgId = 1;\nimg.forEach(function (item) {\n  item.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    eleSelected.style.border = \"4px solid rgb(170, 157, 157)\";\n    imgId = item.getAttribute(\"data-id\");\n    eleSelected = item.parentNode;\n    eleSelected.style.border = \"4px solid red\";\n    slideImage();\n  });\n});\nfunction slideImage() {\n  var displayWidth = document.querySelector(\".img-showcase:first-child\").clientWidth;\n  console.log(displayWidth);\n  document.querySelector(\".img-showcase\").style.transform = \"translateX(\".concat(-(imgId - 1) * displayWidth, \"px)\");\n}\n\n// seclect size\nvar btnSize = document.querySelectorAll(\".size-item\");\nvar sizeSelected = btnSize[0];\nsizeSelected.style.border = \"3px solid red\";\nvar stock = document.querySelector(\".product-stock p\");\nstock.innerHTML = \"Stock: \" + sizeSelected.getAttribute(\"stock\");\nbtnSize.forEach(function (item) {\n  item.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    if (sizeSelected) {\n      sizeSelected.style.border = \"3px solid rgb(36, 34, 34)\";\n    }\n    sizeSelected = item;\n    sizeSelected.style.border = \"3px solid red\";\n    stock.innerHTML = \"Stock: \" + sizeSelected.getAttribute(\"stock\");\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/product.client.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/client/pages/product.client.js");
/******/ 	
/******/ })()
;