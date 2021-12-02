/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = () => {
  const tabs = document.querySelectorAll('.tabcontent'),
        btnWrapper = document.querySelector('.tabheader__items'),
        btns = document.querySelectorAll('.tabheader__item'); // function createDinamyc() {
  //     const el = document.createElement('div');
  //     el.classList.add('tabcontent');
  //     el.innerHTML = `
  //         <img src="img/tabs/elite.jpg" alt="elite">
  //         <div class="tabcontent__descr">
  //             Меню “Премиум1” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
  //         </div>
  //     `;
  //     document.querySelector('.tabcontainer').append(el);
  // }
  // createDinamyc();

  function hideTabs() {
    tabs.forEach(tab => {
      tab.classList.remove('show');
      tab.classList.add('hide');
    });
    btns.forEach(btn => {
      btn.classList.remove('tabheader__item_active');
    });
  }

  function showTabs() {
    let count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs[count].classList.add('show', 'fade');
    tabs[count].classList.remove('hide');
    btns[count].classList.add('tabheader__item_active');
  }

  hideTabs();
  showTabs();
  btnWrapper.addEventListener('click', function (e) {
    if (e.target.closest('.tabheader__item')) {
      btns.forEach((btn, i) => {
        if (e.target == btn) {
          hideTabs();
          showTabs(i);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const timer = () => {};

/* harmony default export */ __webpack_exports__["default"] = (timer);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");



window.onload = function () {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
}();
/******/ })()
;
//# sourceMappingURL=script.js.map