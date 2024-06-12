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

/***/ "./public/js/admin/common/pagination.js":
/*!**********************************************!*\
  !*** ./public/js/admin/common/pagination.js ***!
  \**********************************************/
/***/ (() => {

eval("// -----------------------------------Admin------------------------------\n// Pagination\nvar page = document.querySelectorAll(\".page-link\");\npage.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var url2 = new URL(document.location.href);\n    var index = element.getAttribute(\"value\");\n    if (index) {\n      url2.searchParams.set(\"page\", index);\n      document.location.href = url2.href;\n    }\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/common/pagination.js?");

/***/ }),

/***/ "./public/js/admin/pages/product.js":
/*!******************************************!*\
  !*** ./public/js/admin/pages/product.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pagination */ \"./public/js/admin/common/pagination.js\");\n/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_pagination__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validation_hasLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../validation/hasLetters */ \"./public/validation/hasLetters.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n// ++++++++++++++++++++++++++Product-Page+++++++++++++++++++++++++++++++\n// Add new Product\n\n // Assuming validation.js is in the same directory\n\nvar modalElement = document.getElementById(\"productModal\");\nif (modalElement) {\n  var modalToggle = document.querySelector(\".add_Product\"); // Replace with your button ID\n  var modal = new bootstrap.Modal(modalElement);\n  modalToggle.addEventListener(\"click\", function () {\n    modal.show(); // Displays the modal\n    var btnProductThumbnail = document.querySelector(\"#product_thumbnail\");\n    btnProductThumbnail.addEventListener(\"input\", function (e) {\n      var _btnProductThumbnail$ = _slicedToArray(btnProductThumbnail.files, 1),\n        file = _btnProductThumbnail$[0];\n      var preview_thumbnail = document.querySelector(\".preview-thumbnail img\");\n      preview_thumbnail.src = URL.createObjectURL(file);\n    });\n    var btnClose = document.querySelector(\".btnCloseFormAddProduct\"); // Replace with your button ID\n    btnClose.addEventListener(\"click\", function () {\n      var form = document.getElementById(\"cat_form\");\n      console.log(form);\n      form.reset();\n      modal.hide(); // Displays the modal\n    });\n  });\n}\nvar btnDeleteSizeProduct;\nvar btnAddSizeProduct = document.querySelector(\".btnAddSizeProduct\");\nbtnAddSizeProduct.addEventListener(\"click\", function () {\n  var product_size = document.querySelector(\"#product-size\");\n  var product_stock = document.querySelector(\"#product-stock\");\n  var col1 = document.createElement(\"div\");\n  col1.classList.add(\"col-md-5\");\n  var col2 = document.createElement(\"div\");\n  col2.classList.add(\"col-md-5\");\n  var col3 = document.createElement(\"div\");\n  col3.classList.add(\"col-md-2\");\n  var formGroup1 = document.createElement(\"div\");\n  formGroup1.classList.add(\"form-group\");\n  formGroup1.classList.add(\"al\");\n  var formGroup2 = document.createElement(\"div\");\n  formGroup2.classList.add(\"form-group\");\n  var sizeLabel = document.createElement(\"label\");\n  sizeLabel.textContent = \"Size: \";\n  var sizeInput = document.createElement(\"input\");\n  sizeInput.setAttribute(\"name\", \"size\");\n  sizeInput.classList.add(\"form-control\");\n  var stockLabel = document.createElement(\"label\");\n  stockLabel.textContent = \"stock: \";\n  var stockInput = document.createElement(\"input\");\n  stockInput.setAttribute(\"name\", \"stock\");\n  stockInput.classList.add(\"form-control\");\n  var sizeSpan = document.createElement(\"span\");\n  var stockSpan = document.createElement(\"span\");\n  var flag = (0,_validation_hasLetters__WEBPACK_IMPORTED_MODULE_1__.hasLetters)(product_size.value) && (0,_validation_hasLetters__WEBPACK_IMPORTED_MODULE_1__.hasLetters)(product_stock.value);\n  if (flag) {\n    sizeInput.value = product_size.value;\n    stockInput.value = product_stock.value;\n    product_size.value = \"\";\n    product_stock.value = \"\";\n    var _btnDelete = document.createElement(\"button\");\n    _btnDelete.textContent = \"Delete\";\n    _btnDelete.classList.add(\"btn\");\n    _btnDelete.classList.add(\"btn-danger\");\n    _btnDelete.classList.add(\"btnDeleteSizeProduct\");\n    _btnDelete.setAttribute(\"type\", \"button\");\n    formGroup1.appendChild(sizeLabel);\n    formGroup1.appendChild(sizeInput);\n    formGroup1.appendChild(sizeSpan);\n    formGroup2.appendChild(stockLabel);\n    formGroup2.appendChild(stockInput);\n    formGroup2.appendChild(stockSpan);\n    col1.appendChild(formGroup1);\n    col2.appendChild(formGroup2);\n    col3.appendChild(_btnDelete);\n    col3.classList.add(\"pt-4\");\n    var row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n    row.appendChild(col1);\n    row.appendChild(col2);\n    row.appendChild(col3);\n    var sps1 = document.getElementById(\"SizePriceStock\");\n    sps1.insertAdjacentElement(\"afterend\", row);\n    _btnDelete.addEventListener(\"click\", function () {\n      row.remove();\n    });\n  } else {\n    alert(\"Vui lòng nhập đúng định dạng\");\n  }\n});\n// Onchange for price input\nvar btnProductPrice = document.querySelector(\".form-group #product_price\");\nvar spanErrorProductPrice = document.getElementById(\"productPriceError\");\nbtnProductPrice.addEventListener(\"input\", function () {\n  if ((0,_validation_hasLetters__WEBPACK_IMPORTED_MODULE_1__.hasLetters)(btnProductPrice.value) == false) {\n    console.log(\"Vuong\");\n    spanErrorProductPrice.textContent = \"Vui lòng nhập đúng định dạng!\";\n  } else {\n    spanErrorProductPrice.textContent = \"\";\n  }\n});\nvar btnRadios = document.querySelectorAll('input[name=\"flexRadioDefault1\"]');\nbtnRadios.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    console.log(btnRadios); //\n  });\n});\n// Event Search-Status\nvar url = new URL(document.location.href);\nvar selectElement = document.getElementById(\"comboboxChangeStatus\");\nif (selectElement) {\n  selectElement.addEventListener(\"change\", function () {\n    var selectedIndex = selectElement.selectedIndex;\n    var selectedOption = selectElement.options[selectedIndex];\n    if (selectedOption.value != \"\") {\n      url.searchParams.set(\"status\", selectedOption.value);\n    } else {\n      url.searchParams[\"delete\"](\"status\");\n    }\n    document.location.href = url.href;\n  });\n}\n// Event Product Detail\nvar btn2 = document.querySelectorAll(\".product-img\");\nvar siz4;\nbtn2.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var url = new URL(document.location.href);\n    var newPath = element.getAttribute(\"path\");\n\n    // const newPath = url.href + element.getAttribute(\"path\");\n    // form.action = newPath;\n\n    // form.submit();\n    // url.searchParams.set(\"range\", element.value);\n    document.location.href = newPath;\n  });\n});\n// Product Detail\nvar detail_Btn = document.querySelectorAll(\"[btn-data-detail]\");\ndetail_Btn.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var idProduct = element.getAttribute(\"id_product\");\n    // const form = document.querySelector(\"#form_detail\");\n    // const path = form.getAttribute(\"data_path\");\n    // console.log(path);\n    // const newPath = path + `/${idProduct}`;\n    // form.action = newPath;\n    // form.submit();\n    var url3 = new URL(document.location.href);\n    if (idProduct) {\n      url3.searchParams.set(\"idDetail\", idProduct);\n      document.location.href = url3.href;\n    }\n    // const formDetaiProduct = document.querySelector(\".detail_wrapper\");\n    // formDetaiProduct.style.display = \"block\";\n  });\n});\n// Event-close-form-detail\nvar detail_Btn_Close = document.querySelector(\".btnCloseDetail\");\nvar url4 = new URL(document.location.href);\nif (detail_Btn_Close) {\n  detail_Btn_Close.addEventListener(\"click\", function (e) {\n    var tableProduct = document.querySelector(\".tableProduct\");\n    var formDetaiProduct = document.querySelector(\".detail_wrapper\");\n    formDetaiProduct.style.display = \"none\";\n    tableProduct.style.width = \"100%\";\n    url4.searchParams[\"delete\"](\"idDetail\");\n    window.history.pushState({}, \"\", url4);\n\n    // document.location.href = url4.href;\n  });\n}\n// Change status product\nvar btnChangeStatus = document.querySelectorAll(\".btnStatusProduct\");\nbtnChangeStatus.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var idProduct = element.getAttribute(\"id_product\");\n    var status = element.getAttribute(\"status\");\n    var newStatus = status == \"active\" ? \"inactive\" : \"active\";\n    var form = document.querySelector(\"#form_change_status\");\n    var path = form.getAttribute(\"data_path_changestatus\");\n    console.log(path);\n    var newPath = path + \"/\".concat(newStatus, \"/\").concat(idProduct, \"?_method=PATCH\");\n    form.action = newPath;\n    form.submit();\n  });\n});\n//  Delete Products\n\nvar btnDelete = document.querySelectorAll(\"[btn_delete]\");\nvar confirmDialog = document.getElementById(\"confirmDialog\");\nvar confirmBtn = document.getElementById(\"confirmBtn\");\nvar cancelBtn = document.getElementById(\"cancelBtn\");\nconsole.log(\"btnDelete\");\nif (btnDelete.length != 0) {\n  btnDelete.forEach(function (element) {\n    element.addEventListener(\"click\", function (e) {\n      console.log(\"Vogn\");\n      confirmDialog.style.display = \"block\"; // Hiển thị dialog\n      cancelBtn.addEventListener(\"click\", function () {\n        confirmDialog.style.display = \"none\"; // Hiển thị dialog\n      });\n      confirmBtn.addEventListener(\"click\", function () {\n        confirmDialog.style.display = \"none\"; // Hiển thị dialog\n        var idProduct = element.getAttribute(\"id_product\");\n        var form = document.querySelector(\"#form_delete_product\");\n        var path = form.getAttribute(\"data_path_delete\");\n        var newPath = path + \"/\".concat(idProduct, \"?_method=DELETE\");\n        form.action = newPath;\n        form.submit();\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/product.js?");

/***/ }),

/***/ "./public/validation/hasLetters.js":
/*!*****************************************!*\
  !*** ./public/validation/hasLetters.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasLetters: () => (/* binding */ hasLetters)\n/* harmony export */ });\n// export function hasLetters(string) {\n//   const pattern = /^[a-zA-Z]+$/;\n//   return pattern.test(string);\n// }\n\n// module.exports = {\n//   hasLetters: (string) => {\n//     const pattern = /^[a-zA-Z]+$/;\n//     return pattern.test(string);\n//   },\n// };\n// export function validateEmail(email) {\n//   // Your email validation logic\n// }\n\n// export function validatePassword(password) {\n//   // Your password validation logic\n// }\nfunction hasLetters(string) {\n  var pattern = /^[0-9]+$/;\n  return pattern.test(string);\n}\n// export function hasLetters(string) {\n//   const pattern = /^[0-9]+$/;\n//   return pattern.test(string);\n// }\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/validation/hasLetters.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/admin/pages/product.js");
/******/ 	
/******/ })()
;