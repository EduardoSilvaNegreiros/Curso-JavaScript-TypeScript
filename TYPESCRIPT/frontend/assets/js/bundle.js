/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0019-exercicio/form-control.ts":
/*!*********************************************!*\
  !*** ./src/A0019-exercicio/form-control.ts ***!
  \*********************************************/
/***/ (() => {


var SHOW_ERROR_MESSAGES = 'show-error-message';
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
});
function hideErrorMessages(form) {
    form
        .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
        .forEach(function (item) { return item.classList.remove(SHOW_ERROR_MESSAGES); });
}
function showErrorMessage(input, msg) {
    var formFields = input.parentElement;
    var errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerHTML = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
showErrorMessage(username, 'MENSAGEM');
hideErrorMessages(form);


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/A0019-exercicio/A0019-exercicio.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A0019-exercicio/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map