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

/***/ "./public/js/client/pages/products/product-detail.js":
/*!***********************************************************!*\
  !*** ./public/js/client/pages/products/product-detail.js ***!
  \***********************************************************/
/***/ (() => {

eval("function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar img = document.querySelectorAll(\".img__select a\");\nvar imgBtn = _toConsumableArray(img);\nconsole.log(imgBtn);\nvar eleSelected = imgBtn[0].parentNode;\neleSelected.style.border = \"4px solid red\";\nvar imgId = 1;\nimg.forEach(function (item) {\n  item.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    eleSelected.style.border = \"4px solid rgb(170, 157, 157)\";\n    imgId = item.getAttribute(\"data-id\");\n    eleSelected = item.parentNode;\n    eleSelected.style.border = \"4px solid red\";\n    slideImage();\n  });\n});\nfunction slideImage() {\n  var displayWidth = document.querySelector(\".img__showcase:first-child\").clientWidth;\n  console.log(displayWidth);\n  document.querySelector(\".img__showcase\").style.transform = \"translateX(\".concat(-(imgId - 1) * displayWidth, \"px)\");\n}\n\n// seclect size\nvar btnSize = document.querySelectorAll(\".size-item\");\nvar sizeSelected = btnSize[0];\nsizeSelected.style.border = \"3px solid red\";\nvar size_input = document.querySelector(\"#size_input_detail\");\nsize_input.value = parseInt(sizeSelected.innerHTML);\nvar stock = document.querySelector(\".product-stock p\");\nstock.innerHTML = \"Stock: \" + sizeSelected.getAttribute(\"stock\");\nbtnSize.forEach(function (item) {\n  item.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    if (sizeSelected) {\n      sizeSelected.style.border = \"3px solid rgb(36, 34, 34)\";\n    }\n    sizeSelected = item;\n    sizeSelected.style.border = \"3px solid red\";\n    stock.innerHTML = \"Stock: \" + sizeSelected.getAttribute(\"stock\");\n    size_input.value = parseInt(sizeSelected.innerHTML);\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/products/product-detail.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/client/pages/products/product-detail.js"]();
/******/ 	
/******/ })()
;