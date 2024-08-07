/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/dark-mode.js":
/*!********************************!*\
  !*** ./src/utils/dark-mode.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function darkMode() {
  var themeToggleButtons = document.querySelectorAll('#theme-toggle');
  var theme = localStorage.getItem('theme');
  theme && document.body.classList.add(theme);
  function handleThemeToggle() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  }
  ;
  themeToggleButtons.forEach(function (btn) {
    return btn.addEventListener('click', handleThemeToggle);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkMode);

/***/ }),

/***/ "./src/utils/lazy-loading.js":
/*!***********************************!*\
  !*** ./src/utils/lazy-loading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lazyLoading() {
  var lazyImgs = document.querySelectorAll('.lazy');
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  lazyImgs.forEach(function (img) {
    observer.observe(img);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyLoading);

/***/ }),

/***/ "./src/utils/mobile-nav.js":
/*!*********************************!*\
  !*** ./src/utils/mobile-nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mobileNav() {
  var headerBtn = document.querySelector('.header__bars');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileLinks = document.querySelectorAll('.mobile-nav__link');
  var isMobileNavOpen = false;
  headerBtn.addEventListener('click', function () {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      //mobileNav.style.display = 'flex';
      mobileNav.classList.add('mobile-nav__slide-from-top');
      mobileNav.classList.remove('mobile-nav__slide-to-top');
      document.body.style.overflowY = 'hidden';
    } else {
      //mobileNav.style.display = 'none';
      mobileNav.classList.add('mobile-nav__slide-to-top');
      mobileNav.classList.remove('mobile-nav__slide-from-top');
      document.body.style.overflowY = 'auto';
    }
  });
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      isMobileNavOpen = false;
      mobileNav.classList.add('mobile-nav__slide-to-top');
      mobileNav.classList.remove('mobile-nav__slide-from-top');
      //mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileNav);

/***/ }),

/***/ "./src/utils/modal.js":
/*!****************************!*\
  !*** ./src/utils/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal() {
  var modalBtns = document.querySelectorAll('.modal__btn');
  var modal = document.querySelector('.modal');
  var modalContent = document.querySelector('.modal__content');
  modalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modalContent.src = btn.src;
      modalContent.alt = btn.alt;
      modal.classList.add('modal__fade-in');
      modal.classList.remove('modal__fade-out');
      modalContent.classList.add('modal__zoom-in');
      modalContent.classList.remove('modal__zoom-out');
    });
  });
  modal.addEventListener('click', function (event) {
    // if (event.target == modal) {
    modal.classList.add('modal__fade-out');
    modal.classList.remove('modal__fade-in');
    modalContent.classList.add('modal__zoom-out');
    modalContent.classList.remove('modal__zoom-in');
    // }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/utils/project-details.js":
/*!**************************************!*\
  !*** ./src/utils/project-details.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function projectDetails() {
  var viewProjectBtns = document.querySelectorAll('.projects__project-btn');
  var closeBtns = document.querySelectorAll('.project-details__close-btn');
  var projectDetails = null;
  viewProjectBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      projectDetails = document.querySelector('#project-details-' + btn.value);
      projectDetails.classList.add('slide-from-right');
      projectDetails.classList.remove('slide-to-right');
      document.body.style.overflowY = 'hidden';
    });
  });
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (projectDetails) {
        projectDetails.classList.add('slide-to-right');
        projectDetails.classList.remove('slide-from-right');
        document.body.style.overflowY = 'auto';
      }
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectDetails);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/about.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/about.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__title {
  font-size: 1.5rem;
  color: var(--clr-text);
}

.about__description {
  max-width: 60ch;
  font-size: 0.875rem;
  color: var(--clr-text);
}

.about__hr {
  border-color: var(--clr-secondary);
}

.about__subtitle {
  font-size: 0.875rem;
  color: var(--clr-text);
}

.about__ul-container {
  display: flex;
}

.about__ul {
  display: flex;
  flex-direction: column;
  gap: 1em;
  list-style-type: "👍";
  padding-left: 1em;
  flex: 1;
}

.about__list {
  font-size: 0.875rem;
  color: var(--clr-accent);
}
.about__list::before {
  content: "";
  margin-left: 0.5em;
}

@media (min-width: 475px) {
  .about {
    gap: 1.5rem;
  }
  .about__content {
    gap: 1.5rem;
  }
  .about__title {
    font-size: 1.875rem;
  }
  .about__description {
    font-size: 1rem;
  }
  .about__subtitle {
    font-size: 1rem;
  }
  .about__list {
    font-size: 1rem;
  }
}
@media (min-width: 640px) {
  .about__img-wrapper {
    margin: 0 auto;
  }
  .about__img {
    width: 28.6875rem;
  }
}
@media (min-width: 1024px) {
  .about {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .about__title {
    font-size: 2.25rem;
  }
  .about__description {
    font-size: 1.125rem;
  }
  .about__subtitle {
    font-size: 1.125rem;
  }
  .about__list {
    font-size: 1.125rem;
  }
}
@media (min-width: 1280px) {
  .about__content {
    gap: 2rem;
  }
  .about__title {
    font-size: 3rem;
  }
  .about__description {
    font-size: 1.25rem;
  }
  .about__subtitle {
    font-size: 1.25rem;
  }
  .about__list {
    font-size: 1.25rem;
  }
  .about__img {
    width: 30.75rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/about.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAAJ;;AAGA;EACI,iBCTE;EDUF,sBAAA;AAAJ;;AAGA;EACI,eAAA;EACA,mBCnBC;EDoBD,sBAAA;AAAJ;;AAGA;EACI,kCAAA;AAAJ;;AAGA;EACI,mBC5BC;ED6BD,sBAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,qBAAA;EACA,iBAAA;EACA,OAAA;AAAJ;;AAGA;EACI,mBC9CC;ED+CD,wBAAA;AAAJ;AAEI;EACI,WAAA;EACA,kBAAA;AAAR;;AAKA;EACI;IACI,WAAA;EAFN;EAKE;IACI,WAAA;EAHN;EAME;IACI,mBC7DF;EDyDJ;EAOE;IACI,eCrED;EDgEL;EAQE;IACI,eCzED;EDmEL;EASE;IACI,eC7ED;EDsEL;AACF;AAWA;EACI;IACI,cAAA;EATN;EAYE;IACI,iBAAA;EAVN;AACF;AAiBA;EACI;IACI,mBAAA;IACA,8BAAA;IACA,mBAAA;EAfN;EAkBE;IACI,kBCnGF;EDmFJ;EAmBE;IACI,mBC3GH;ED0FH;EAoBE;IACI,mBC/GH;ED6FH;EAqBE;IACI,mBCnHH;EDgGH;AACF;AAuBA;EACI;IACI,SAAA;EArBN;EAwBE;IACI,eCzHF;EDmGJ;EAyBE;IACI,kBCjIH;ED0GH;EA0BE;IACI,kBCrIH;ED6GH;EA2BE;IACI,kBCzIH;EDgHH;EA4BE;IACI,eAAA;EA1BN;AACF","sourcesContent":["@use '../size';\r\n\r\n.about {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.about__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.about__title {\r\n    font-size: size.$xl2;\r\n    color: var(--clr-text);\r\n}\r\n\r\n.about__description {\r\n    max-width: 60ch;\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n}\r\n\r\n.about__hr {\r\n    border-color: var(--clr-secondary);\r\n}\r\n\r\n.about__subtitle {\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n}\r\n\r\n.about__ul-container {\r\n    display: flex;\r\n}\r\n\r\n.about__ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1em;\r\n    list-style-type: '\\1F44D';\r\n    padding-left: 1em;\r\n    flex: 1;\r\n}\r\n\r\n.about__list {\r\n    font-size: size.$sm;\r\n    color: var(--clr-accent);\r\n\r\n    &::before {\r\n        content: '';\r\n        margin-left: 0.5em;\r\n    }\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .about {\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .about__content {\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .about__title {\r\n        font-size: size.$xl3;\r\n    }\r\n\r\n    .about__description {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .about__subtitle {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .about__list {\r\n        font-size: size.$base;\r\n    }\r\n}\r\n\r\n// sm \r\n@media (min-width: 640px) {\r\n    .about__img-wrapper {\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .about__img {\r\n        width: 28.6875rem;\r\n    }\r\n}\r\n\r\n// md\r\n//@media (min-width: 768px) {}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .about {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    .about__title {\r\n        font-size: size.$xl4;\r\n    }\r\n\r\n    .about__description {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .about__subtitle {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .about__list {\r\n        font-size: size.$lg;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .about__content {\r\n        gap: 2rem;\r\n    }\r\n    \r\n    .about__title {\r\n        font-size: size.$xl5;\r\n    }\r\n\r\n    .about__description {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .about__subtitle {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .about__list {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .about__img {\r\n        width: 30.75rem;\r\n    }\r\n}\r\n\r\n// 2xl\r\n//@media (min-width: 1536px) {}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/contact.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/contact.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.contact__title {
  font-size: 1.5rem;
  color: var(--clr-text);
  text-transform: capitalize;
}

.contact__description {
  font-size: 0.875rem;
  color: var(--clr-text);
  max-width: 60ch;
}

.contact__btn {
  font-size: 0.875rem;
}

@media (min-width: 475px) {
  .contact {
    gap: 1.5rem;
  }
  .contact__title {
    font-size: 1.875rem;
  }
  .contact__description {
    font-size: 1rem;
  }
  .contact__btn {
    font-size: 1rem;
  }
}
@media (min-width: 1024px) {
  .contact__title {
    font-size: 2.25rem;
  }
  .contact__description {
    font-size: 1.125rem;
  }
  .contact__btn {
    font-size: 1.125rem;
  }
}
@media (min-width: 1280px) {
  .contact {
    gap: 2rem;
  }
  .contact__title {
    font-size: 3rem;
  }
  .contact__description {
    font-size: 1.25rem;
  }
  .contact__btn {
    font-size: 1.25rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/contact.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AADJ;;AAIA;EACI,iBCNE;EDOF,sBAAA;EACA,0BAAA;AADJ;;AAIA;EACI,mBChBC;EDiBD,sBAAA;EACA,eAAA;AADJ;;AAIA;EACI,mBCtBC;ADqBL;;AAKA;EACI;IACI,WAAA;EAFN;EAKE;IACI,mBC3BF;EDwBJ;EAME;IACI,eCnCD;ED+BL;EAOE;IACI,eCvCD;EDkCL;AACF;AAeA;EACI;IACI,kBC/CF;EDkCJ;EAgBE;IACI,mBCvDH;EDyCH;EAiBE;IACI,mBC3DH;ED4CH;AACF;AAmBA;EACI;IACI,SAAA;EAjBN;EAoBE;IACI,eCjEF;ED+CJ;EAqBE;IACI,kBCzEH;EDsDH;EAsBE;IACI,kBC7EH;EDyDH;AACF","sourcesContent":["@use '../size';\r\n\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.contact__title {\r\n    font-size: size.$xl2;\r\n    color: var(--clr-text);\r\n    text-transform: capitalize;\r\n}\r\n\r\n.contact__description {\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n    max-width: 60ch;\r\n}\r\n\r\n.contact__btn {\r\n    font-size: size.$sm;\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .contact {\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .contact__title {\r\n        font-size: size.$xl3;\r\n    }\r\n\r\n    .contact__description {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .contact__btn {\r\n        font-size: size.$base;\r\n    }\r\n}\r\n\r\n// sm \r\n//@media (min-width: 640px) {}\r\n\r\n// md\r\n//@media (min-width: 768px) {}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .contact__title {\r\n        font-size: size.$xl4;\r\n    }\r\n\r\n    .contact__description {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .contact__btn {\r\n        font-size: size.$lg;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .contact {\r\n        gap: 2rem;\r\n    }\r\n\r\n    .contact__title {\r\n        font-size: size.$xl5;\r\n    }\r\n\r\n    .contact__description {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .contact__btn {\r\n        font-size: size.$xl;\r\n    }\r\n}\r\n\r\n// 2xl\r\n//@media (min-width: 1536px) {}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/footer.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/footer.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer__title {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--clr-accent);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  user-select: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/components/footer.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI,kBCFC;EDGD,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;AADJ","sourcesContent":["@use '../size';\r\n\r\n.footer__title {\r\n    font-size: size.$xs;\r\n    font-weight: 400;\r\n    color: var(--clr-accent);\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2em;\r\n    user-select: none;\r\n}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/header.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/header.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 9999;
}

.header__menu {
  display: none;
}

.header__bars {
  display: block;
  color: var(--clr-text);
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 768px) {
  .header__menu {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 2em;
  }
  .header__link {
    font-size: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: var(--clr-accent);
    letter-spacing: -0.05em;
    transition: color 0.3s;
  }
  .header__link:hover {
    color: var(--clr-primary);
  }
  .header__line {
    border: 1px solid var(--clr-accent);
    padding-top: 1.5em;
  }
  .header__sun {
    display: block;
    color: var(--clr-accent);
    width: 1rem;
    height: 1rem;
  }
  .header__resume {
    font-size: 0.75rem;
  }
  .header__bars {
    display: none;
  }
}
@media (min-width: 1024px) {
  .header__link {
    font-size: 0.875rem;
  }
  .header__sun {
    width: 1.25rem;
    height: 1.25rem;
  }
  .header__resume {
    font-size: 0.875rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/header.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;AADJ;;AAIA;EACI,aAAA;AADJ;;AAIA;EACI,cAAA;EACA,sBAAA;EACA,aCbE;EDcF,cCdE;ADaN;;AAWA;EACI;IACI,aAAA;IACA,mBAAA;IACA,gBAAA;IACA,UAAA;IACA,QAAA;EARN;EAWE;IACI,kBCvCH;IDwCG,qBAAA;IACA,gBAAA;IACA,wBAAA;IACA,uBAAA;IACA,sBAAA;EATN;EAWM;IACI,yBAAA;EATV;EAaE;IACI,mCAAA;IACA,kBAAA;EAXN;EAcE;IACI,cAAA;IACA,wBAAA;IACA,WCzDD;ID0DC,YC1DD;ED8CL;EAeE;IACI,kBChEH;EDmDH;EAgBE;IACI,aAAA;EAdN;AACF;AAkBA;EACI;IACI,mBC1EH;ED0DH;EAmBE;IACI,cC3EH;ID4EG,eC5EH;ED2DH;EAoBE;IACI,mBCnFH;EDiEH;AACF","sourcesContent":["@use '../size';\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    position: relative;\r\n    z-index: 9999;\r\n}\r\n\r\n.header__menu {\r\n    display: none;\r\n}\r\n\r\n.header__bars {\r\n    display: block;\r\n    color: var(--clr-text);\r\n    width: size.$xl2;\r\n    height: size.$xl2;\r\n}\r\n\r\n// xs\r\n//@media (min-width: 475px) {}\r\n\r\n// sm \r\n//@media (min-width: 640px) {}\r\n\r\n// md\r\n@media (min-width: 768px) {\r\n    .header__menu {\r\n        display: flex;\r\n        align-items: center;\r\n        list-style: none;\r\n        padding: 0;\r\n        gap: 2em;\r\n    }\r\n\r\n    .header__link {\r\n        font-size: size.$xs;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        color: var(--clr-accent);\r\n        letter-spacing: -0.05em;\r\n        transition: color 0.3s;\r\n\r\n        &:hover {\r\n            color: var(--clr-primary);\r\n        }\r\n    }\r\n\r\n    .header__line {\r\n        border: 1px solid var(--clr-accent);\r\n        padding-top: 1.5em;\r\n    }\r\n\r\n    .header__sun {\r\n        display: block;\r\n        color: var(--clr-accent);\r\n        width: size.$base;\r\n        height: size.$base;\r\n    }\r\n\r\n    .header__resume {\r\n        font-size: size.$xs;\r\n    }\r\n\r\n    .header__bars {\r\n        display: none;\r\n    }\r\n}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .header__link {\r\n        font-size: size.$sm;\r\n    }\r\n\r\n    .header__sun {\r\n        width: size.$xl;\r\n        height: size.$xl;\r\n    }\r\n\r\n    .header__resume {\r\n        font-size: size.$sm;\r\n    }\r\n}\r\n\r\n// xl\r\n//@media (min-width: 1280px) {}\r\n\r\n// 2xl\r\n//@media (min-width: 1536px) {}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/hero.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/hero.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hero {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.hero__img {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
}

.hero__subtitle {
  color: var(--clr-text);
  font-size: 1rem;
  line-height: 0.9;
}

.hero__title {
  color: var(--clr-primary);
  text-transform: uppercase;
  font-size: 2.25rem;
  letter-spacing: -0.05em;
  line-height: 0.9;
}

.hero__description {
  max-width: 60ch;
  color: var(--clr-text);
  font-size: 0.875rem;
}

.hero__icon-link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.hero__icon {
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 475px) {
  .hero {
    gap: 1.5rem;
  }
  .hero__img {
    width: 6.5rem;
    height: 6.5rem;
  }
  .hero__subtitle {
    font-size: 1.125rem;
  }
  .hero__title {
    font-size: 3rem;
  }
  .hero__description {
    font-size: 1rem;
  }
  .hero__icon-link-wrapper {
    gap: 1.5rem;
  }
  .hero__icon {
    width: 1.875rem;
    height: 1.875rem;
  }
}
@media (min-width: 1024px) {
  .hero__img {
    width: 8rem;
    height: 8rem;
  }
  .hero__subtitle {
    font-size: 1.5rem;
  }
  .hero__title {
    font-size: 4.5rem;
  }
  .hero__description {
    font-size: 1.125rem;
  }
  .hero__icon {
    width: 2.25rem;
    height: 2.25rem;
  }
}
@media (min-width: 1280px) {
  .hero {
    gap: 2rem;
  }
  .hero__img {
    width: 10rem;
    height: 10rem;
  }
  .hero__subtitle {
    font-size: 2.25rem;
  }
  .hero__title {
    font-size: 8rem;
  }
  .hero__description {
    font-size: 1.25rem;
  }
  .hero__icon-link-wrapper {
    gap: 2rem;
  }
  .hero__icon {
    width: 3rem;
    height: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/hero.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;AADJ;;AAIA;EACI,sBAAA;EACA,eCjBG;EDkBH,gBAAA;AADJ;;AAIA;EACI,yBAAA;EACA,yBAAA;EACA,kBCnBE;EDoBF,uBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,eAAA;EACA,sBAAA;EACA,mBCjCC;ADgCL;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AADJ;;AAIA;EACI,aCxCE;EDyCF,cCzCE;ADwCN;;AAKA;EACI;IACI,WAAA;EAFN;EAKE;IACI,aAAA;IACA,cAAA;EAHN;EAME;IACI,mBC1DH;EDsDH;EAOE;IACI,eCzDF;EDoDJ;EAQE;IACI,eCnED;ED6DL;EASE;IACI,WAAA;EAPN;EAUE;IACI,eCvEF;IDwEE,gBCxEF;EDgEJ;AACF;AAkBA;EACI;IACI,WAAA;IACA,YAAA;EAhBN;EAmBE;IACI,iBC3FF;ED0EJ;EAoBE;IACI,iBC1FF;EDwEJ;EAqBE;IACI,mBCrGH;EDkFH;EAsBE;IACI,cCrGF;IDsGE,eCtGF;EDkFJ;AACF;AAwBA;EACI;IACI,SAAA;EAtBN;EAyBE;IACI,YAAA;IACA,aAAA;EAvBN;EA0BE;IACI,kBCtHF;ED8FJ;EA2BE;IACI,eCrHF;ED4FJ;EA4BE;IACI,kBCjIH;EDuGH;EA6BE;IACI,SAAA;EA3BN;EA8BE;IACI,WCrIF;IDsIE,YCtIF;ED0GJ;AACF","sourcesContent":["@use '../size';\r\n\r\n.hero {\r\n    display: flex;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.hero__img {\r\n    border-radius: 50%;\r\n    width: 6rem;\r\n    height: 6rem;\r\n}\r\n\r\n.hero__subtitle {\r\n    color: var(--clr-text);\r\n    font-size: size.$base;\r\n    line-height: 0.9;\r\n}\r\n\r\n.hero__title {\r\n    color: var(--clr-primary);\r\n    text-transform: uppercase;\r\n    font-size: size.$xl4;\r\n    letter-spacing: -0.05em;\r\n    line-height: 0.9;\r\n}\r\n\r\n.hero__description {\r\n    max-width: 60ch;\r\n    color: var(--clr-text);\r\n    font-size: size.$sm;\r\n}\r\n\r\n.hero__icon-link-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.hero__icon {\r\n    width: size.$xl2;\r\n    height: size.$xl2;\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .hero {\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .hero__img {\r\n        width: 6.5rem;\r\n        height: 6.5rem;\r\n    }\r\n\r\n    .hero__subtitle {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .hero__title {\r\n        font-size: size.$xl5;\r\n    }\r\n\r\n    .hero__description {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .hero__icon-link-wrapper {\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .hero__icon {\r\n        width: size.$xl3;\r\n        height: size.$xl3;\r\n    }\r\n}\r\n\r\n// sm \r\n//@media (min-width: 640px) {}\r\n\r\n// md\r\n//@media (min-width: 768px) {}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .hero__img {\r\n        width: 8rem;\r\n        height: 8rem;\r\n    }\r\n\r\n    .hero__subtitle {\r\n        font-size: size.$xl2;\r\n    }\r\n\r\n    .hero__title {\r\n        font-size: size.$xl7;\r\n    }\r\n\r\n    .hero__description {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .hero__icon {\r\n        width: size.$xl4;\r\n        height: size.$xl4;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .hero {\r\n        gap: 2rem;\r\n    }\r\n\r\n    .hero__img {\r\n        width: 10rem;\r\n        height: 10rem;\r\n    }\r\n\r\n    .hero__subtitle {\r\n        font-size: size.$xl4;\r\n    }\r\n\r\n    .hero__title {\r\n        font-size: size.$xl9;\r\n    }\r\n\r\n    .hero__description {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .hero__icon-link-wrapper {\r\n        gap: 2rem;\r\n    }\r\n\r\n    .hero__icon {\r\n        width: size.$xl5;\r\n        height: size.$xl5;\r\n    }\r\n}\r\n\r\n// 2xl\r\n//@media (min-width: 1536px) {}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/mobile-nav.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/mobile-nav.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes mobile-nav__slide-from-top {
  from {
    visibility: visible;
    top: -100vh;
  }
  to {
    visibility: visible;
    top: 0vh;
  }
}
.mobile-nav__slide-from-top {
  animation-name: mobile-nav__slide-from-top;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes mobile-nav__slide-to-top {
  from {
    visibility: visible;
    top: 0vh;
  }
  to {
    visibility: hidden;
    top: -100vh;
  }
}
.mobile-nav__slide-to-top {
  animation-name: mobile-nav__slide-to-top;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.mobile-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--clr-background);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.mobile-nav__menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.mobile-nav__link {
  font-size: 0.875rem;
  text-decoration: none;
  font-weight: 600;
  color: var(--clr-accent);
  letter-spacing: -0.05em;
  transition: color 0.3s;
}
.mobile-nav__link:hover {
  color: var(--clr-primary);
}

.mobile-nav__line {
  border: 1px solid var(--clr-accent);
  padding-right: 1.5em;
}

.mobile-nav__sun {
  display: block;
  color: var(--clr-accent);
  width: 1.25rem;
  height: 1.25rem;
}

.mobile-nav__resume {
  font-size: 0.875rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/components/mobile-nav.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI;IACI,mBAAA;IACA,WAAA;EADN;EAGE;IACI,mBAAA;IACA,QAAA;EADN;AACF;AAIA;EACI,0CAAA;EACA,wBAAA;EACA,sCAAA;EACA,6BAAA;AAFJ;;AAKA;EACI;IACI,mBAAA;IACA,QAAA;EAFN;EAIE;IACI,kBAAA;IACA,WAAA;EAFN;AACF;AAKA;EACI,wCAAA;EACA,wBAAA;EACA,sCAAA;EACA,6BAAA;AAHJ;;AAMA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,uCAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAHJ;;AAMA;EACI,mBC9DC;ED+DD,qBAAA;EACA,gBAAA;EACA,wBAAA;EACA,uBAAA;EACA,sBAAA;AAHJ;AAKI;EACI,yBAAA;AAHR;;AAOA;EACI,mCAAA;EACA,oBAAA;AAJJ;;AAOA;EACI,cAAA;EACA,wBAAA;EACA,cC/EC;EDgFD,eChFC;AD4EL;;AAOA;EACI,mBCvFC;ADmFL","sourcesContent":["@use '../size';\r\n\r\n@keyframes mobile-nav__slide-from-top {\r\n    from {\r\n        visibility: visible;\r\n        top: -100vh;\r\n    }\r\n    to {\r\n        visibility: visible;\r\n        top: 0vh;\r\n    }\r\n}\r\n\r\n.mobile-nav__slide-from-top {\r\n    animation-name: mobile-nav__slide-from-top;\r\n    animation-duration: 0.3s;\r\n    animation-timing-function: ease-in-out;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes mobile-nav__slide-to-top {\r\n    from {\r\n        visibility: visible;\r\n        top: 0vh;\r\n    }\r\n    to {\r\n        visibility: hidden;\r\n        top: -100vh;\r\n    }\r\n}\r\n\r\n.mobile-nav__slide-to-top {\r\n    animation-name: mobile-nav__slide-to-top;\r\n    animation-duration: 0.3s;\r\n    animation-timing-function: ease-in-out;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.mobile-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--clr-background);\r\n    visibility: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.mobile-nav__menu {\r\n    list-style: none;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.mobile-nav__link {\r\n    font-size: size.$sm;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    color: var(--clr-accent);\r\n    letter-spacing: -0.05em;\r\n    transition: color 0.3s;\r\n\r\n    &:hover {\r\n        color: var(--clr-primary);\r\n    }\r\n}\r\n\r\n.mobile-nav__line {\r\n    border: 1px solid var(--clr-accent);\r\n    padding-right: 1.5em;\r\n}\r\n\r\n.mobile-nav__sun {\r\n    display: block;\r\n    color: var(--clr-accent);\r\n    width: size.$xl;\r\n    height: size.$xl;\r\n}\r\n\r\n.mobile-nav__resume {\r\n    font-size: size.$sm;\r\n}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/modal.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/modal.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes zoom-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.modal__zoom-in {
  animation-name: zoom-in;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
}

@keyframes zoom-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.modal__zoom-out {
  animation-name: zoom-out;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  from {
    background-color: rgba(0, 0, 0, 0);
    visibility: visible;
  }
  to {
    background-color: rgba(0, 0, 0, 0.6);
    visibility: visible;
  }
}
.modal__fade-in {
  animation-name: fade-in;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  from {
    background-color: rgba(0, 0, 0, 0.6);
    visibility: visible;
  }
  to {
    background-color: rgba(0, 0, 0, 0);
    visibility: hidden;
  }
}
.modal__fade-out {
  animation-name: fade-out;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.modal {
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal__close-btn {
  display: none;
  color: var(--clr-text);
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 2rem;
  margin-right: 2rem;
  align-self: flex-end;
}

.modal__content {
  margin: auto;
  display: block;
  max-height: 90%;
  width: auto;
}

@media (min-width: 475px) {
  .modal__close-btn {
    width: 1.875rem;
    height: 1.875rem;
  }
}
@media (min-width: 1024px) {
  .modal__close-btn {
    width: 2.25rem;
    height: 2.25rem;
    margin-top: 4rem;
    margin-right: 4rem;
  }
  .modal__content {
    width: 80%;
  }
}
@media (min-width: 1280px) {
  .modal__close-btn {
    width: 3rem;
    height: 3rem;
    margin-top: 5rem;
    margin-right: 5rem;
  }
  .modal__content {
    max-height: 90%;
    width: auto;
  }
}
@media (min-width: 1536px) {
  .modal__content {
    max-height: 90%;
    width: auto;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/modal.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI;IACI,mBAAA;IACA,UAAA;EADN;EAGE;IACI,UAAA;EADN;EAGE;IACI,mBAAA;IACA,UAAA;EADN;AACF;AAIA;EACI,uBAAA;EACA,wBAAA;EACA,6BAAA;AAFJ;;AAKA;EACI;IACI,mBAAA;IACA,UAAA;EAFN;EAIE;IACI,UAAA;EAFN;EAIE;IACI,mBAAA;IACA,UAAA;EAFN;AACF;AAKA;EACI,wBAAA;EACA,wBAAA;EACA,6BAAA;AAHJ;;AAMA;EACI;IACI,kCAAA;IACA,mBAAA;EAHN;EAKE;IACI,oCAAA;IACA,mBAAA;EAHN;AACF;AAMA;EACI,uBAAA;EACA,wBAAA;EACA,6BAAA;AAJJ;;AAOA;EACI;IACI,oCAAA;IACA,mBAAA;EAJN;EAME;IACI,kCAAA;IACA,kBAAA;EAJN;AACF;AAOA;EACI,wBAAA;EACA,wBAAA;EACA,6BAAA;AALJ;;AAQA;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,oCAAA;AALJ;;AAQA;EACI,aAAA;EACA,sBAAA;EACA,aCzFE;ED0FF,cC1FE;ED2FF,gBAAA;EACA,kBAAA;EACA,oBAAA;AALJ;;AAQA;EACI,YAAA;EACA,cAAA;EAEA,eAAA;EACA,WAAA;AANJ;;AAUA;EACI;IACI,eC1GF;ID2GE,gBC3GF;EDoGJ;AACF;AAiBA;EACI;IACI,cCvHF;IDwHE,eCxHF;IDyHE,gBAAA;IACA,kBAAA;EAfN;EAkBE;IACI,UAAA;EAhBN;AACF;AAoBA;EACI;IACI,WCpIF;IDqIE,YCrIF;IDsIE,gBAAA;IACA,kBAAA;EAlBN;EAqBE;IAEI,eAAA;IACA,WAAA;EApBN;AACF;AAwBA;EACI;IAEI,eAAA;IACA,WAAA;EAvBN;AACF","sourcesContent":["@use '../size';\r\n\r\n@keyframes zoom-in {\r\n    0% {\r\n        transform: scale(0);\r\n        opacity: 0;\r\n    }\r\n    20% {\r\n        opacity:0;\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.modal__zoom-in {\r\n    animation-name: zoom-in;\r\n    animation-duration: 0.6s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes zoom-out {\r\n    0% {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n    50% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        transform: scale(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.modal__zoom-out {\r\n    animation-name: zoom-out;\r\n    animation-duration: 0.4s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes fade-in {\r\n    from {\r\n        background-color: rgba(0,0,0,0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        background-color: rgba(0,0,0,0.6);\r\n        visibility: visible;\r\n    }\r\n}\r\n\r\n.modal__fade-in {\r\n    animation-name: fade-in;\r\n    animation-duration: 0.6s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes fade-out {\r\n    from {\r\n        background-color: rgba(0,0,0,0.6);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        background-color: rgba(0,0,0,0); \r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n.modal__fade-out {\r\n    animation-name: fade-out;\r\n    animation-duration: 0.4s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.modal {\r\n    display: flex;\r\n    visibility: hidden;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    z-index: 999999;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.modal__close-btn {\r\n    display: none;\r\n    color: var(--clr-text);\r\n    width: size.$xl2;\r\n    height: size.$xl2;\r\n    margin-top: 2rem;\r\n    margin-right: 2rem;\r\n    align-self: flex-end;\r\n}\r\n\r\n.modal__content {\r\n    margin: auto;\r\n    display: block;\r\n    //width: 90%;\r\n    max-height: 90%;\r\n    width: auto;\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .modal__close-btn {\r\n        width: size.$xl3;\r\n        height: size.$xl3;\r\n    }\r\n}\r\n\r\n// sm \r\n//@media (min-width: 640px) {}\r\n\r\n// md\r\n//@media (min-width: 768px) {}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .modal__close-btn {\r\n        width: size.$xl4;\r\n        height: size.$xl4;\r\n        margin-top: 4rem;\r\n        margin-right: 4rem;\r\n    }\r\n\r\n    .modal__content {\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .modal__close-btn {\r\n        width: size.$xl5;\r\n        height: size.$xl5;\r\n        margin-top: 5rem;\r\n        margin-right: 5rem;\r\n    }\r\n\r\n    .modal__content {\r\n        // width: 70%;\r\n        max-height: 90%;\r\n        width: auto;\r\n    }\r\n}\r\n\r\n// 2xl\r\n@media (min-width: 1536px) {\r\n    .modal__content {\r\n        // width: 60%;\r\n        max-height: 90%;\r\n        width: auto;\r\n    }\r\n}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/project-details.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/project-details.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@keyframes slide-from-right {
  from {
    visibility: visible;
    left: 100vw;
  }
  to {
    visibility: visible;
    left: 0vw;
  }
}
.slide-from-right {
  animation-name: slide-from-right;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes slide-to-right {
  from {
    visibility: visible;
    left: 0vw;
  }
  to {
    visibility: hidden;
    left: 100vw;
  }
}
.slide-to-right {
  animation-name: slide-to-right;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.project-details {
  display: flex;
  visibility: hidden;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 100vw;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: var(--clr-background);
  overflow-y: scroll;
}

.project-details__close-btn {
  display: block;
  color: var(--clr-text);
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 2rem;
  margin-right: 2rem;
  align-self: flex-end;
  transition: 0.3s ease-in-out;
}
.project-details__close-btn:hover {
  transform: rotate(90deg) scale(1.3);
}

.project-details__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
}

.project-details__content {
  max-width: 60ch;
}

.project-details__title {
  color: var(--clr-text);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-details__icon-link-wrapper {
  display: flex;
  justify-content: left;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-details__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.project-details__tools {
  color: var(--clr-accent);
  font-size: 0.75em;
}

.project-details__description {
  font-size: 0.875rem;
  color: var(--clr-text);
  margin-bottom: 2rem;
}

.project-details__subtitle {
  color: var(--clr-text);
  font-size: 1.125rem;
  margin-top: 2em;
  margin-bottom: 1em;
}

.project-details__ul {
  display: flex;
  flex-direction: column;
  gap: 1em;
  list-style-type: "👉";
  padding-left: 1em;
  margin-bottom: 2rem;
}

.project-details__list {
  font-size: 0.875rem;
  color: var(--clr-text);
}
.project-details__list::before {
  content: "";
  margin-left: 0.5em;
}

.project-details__imgs-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 70ch;
}

.project-details__img-small-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.project-details__img-small-wrapper {
  overflow: hidden;
  flex: 1;
}

.project-details__img-small {
  width: auto;
  max-height: 80px;
  margin: 0 auto;
  cursor: pointer;
  transition: scale 0.15s;
}
.project-details__img-small:hover {
  scale: 1.05;
}

@media (min-width: 475px) {
  .project-details__close-btn {
    width: 1.875rem;
    height: 1.875rem;
  }
  .project-details__title {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
  .project-details__icon-link-wrapper {
    gap: 1rem;
  }
  .project-details__icon {
    width: 1.875rem;
    height: 1.875rem;
  }
  .project-details__description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .project-details__subtitle {
    font-size: 1.25rem;
  }
  .project-details__list {
    font-size: 1rem;
  }
  .project-details__img-small {
    max-height: 120px;
  }
}
@media (min-width: 640px) {
  .project-details__imgs-container {
    gap: 0.75rem;
  }
  .project-details__img-small-container {
    gap: 0.75rem;
  }
}
@media (min-width: 1024px) {
  .project-details__close-btn {
    width: 2.25rem;
    height: 2.25rem;
    margin-top: 4rem;
    margin-right: 4rem;
  }
  .project-details__container {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    align-self: stretch;
    padding: 0 3rem;
  }
  .project-details__content {
    flex: 1;
  }
  .project-details__imgs-container {
    flex: 1;
  }
  .project-details__img-small {
    max-height: 200px;
  }
  .project-details__title {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
  .project-details__description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .project-details__subtitle {
    font-size: 1.25rem;
  }
  .project-details__list {
    font-size: 1rem;
  }
}
@media (min-width: 1280px) {
  .project-details__container {
    padding: 0 6rem;
  }
  .project-details__icon-link-wrapper {
    gap: 1.5rem;
  }
  .project-details__icon {
    width: 2.25rem;
    height: 2.25rem;
  }
}
@media (min-width: 1536px) {
  .project-details__close-btn {
    width: 3rem;
    height: 3rem;
    margin-top: 5rem;
    margin-right: 5rem;
  }
  .project-details__container {
    padding: 0 10rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/project-details.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACI;IACI,mBAAA;IACA,WAAA;EAAN;EAEE;IACI,mBAAA;IACA,SAAA;EAAN;AACF;AAGA;EACI,gCAAA;EACA,wBAAA;EACA,6BAAA;AADJ;;AAIA;EACI;IACI,mBAAA;IACA,SAAA;EADN;EAGE;IACI,kBAAA;IACA,WAAA;EADN;AACF;AAIA;EACI,8BAAA;EACA,wBAAA;EACA,6BAAA;AAFJ;;AAKA;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,uCAAA;EACA,kBAAA;AAFJ;;AAKA;EACI,cAAA;EACA,sBAAA;EACA,aC/CE;EDgDF,cChDE;EDiDF,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,4BAAA;AAFJ;AAII;EACI,mCAAA;AAFR;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;AAHJ;;AAMA;EACI,sBAAA;EACA,iBCzEE;ED0EF,mBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,qBAAA;EACA,SAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,aCrFE;EDsFF,cCtFE;ADmFN;;AAMA;EACI,wBAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,mBCnGC;EDoGD,sBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,sBAAA;EACA,mBCxGC;EDyGD,eAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,qBAAA;EACA,iBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,mBCzHC;ED0HD,sBAAA;AAHJ;AAKI;EACI,WAAA;EACA,kBAAA;AAHR;;AAOA;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;AAJJ;;AAOA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;AAJJ;;AAOA;EACI,gBAAA;EACA,OAAA;AAJJ;;AAOA;EACI,WAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;AAJJ;AAMI;EACI,WAAA;AAJR;;AASA;EACI;IACI,eChKF;IDiKE,gBCjKF;ED2JJ;EASE;IACI,mBCrKF;IDsKE,mBAAA;EAPN;EAUE;IACI,SAAA;EARN;EAWE;IACI,eC9KF;ID+KE,gBC/KF;EDsKJ;EAYE;IACI,eCvLD;IDwLC,mBAAA;EAVN;EAaE;IACI,kBC1LH;ED+KH;EAcE;IACI,eChMD;EDoLL;EAeE;IACI,iBAAA;EAbN;AACF;AAiBA;EACI;IACI,YAAA;EAfN;EAkBE;IACI,YAAA;EAhBN;AACF;AAuBA;EACI;IACI,cCpNF;IDqNE,eCrNF;IDsNE,gBAAA;IACA,kBAAA;EArBN;EAwBE;IACI,OAAA;IACA,mBAAA;IACA,uBAAA;IACA,mBAAA;IACA,SAAA;IACA,mBAAA;IACA,eAAA;EAtBN;EAyBE;IACI,OAAA;EAvBN;EA0BE;IACI,OAAA;EAxBN;EA2BE;IACI,iBAAA;EAzBN;EA4BE;IACI,mBClPF;IDmPE,mBAAA;EA1BN;EA6BE;IACI,eC3PD;ID4PC,mBAAA;EA3BN;EA8BE;IACI,kBC9PH;EDkOH;EA+BE;IACI,eCpQD;EDuOL;AACF;AAiCA;EACI;IACI,eAAA;EA/BN;EAkCE;IACI,WAAA;EAhCN;EAmCE;IACI,cC9QF;ID+QE,eC/QF;ED8OJ;AACF;AAqCA;EACI;IACI,WCrRF;IDsRE,YCtRF;IDuRE,gBAAA;IACA,kBAAA;EAnCN;EAsCE;IACI,gBAAA;EApCN;AACF","sourcesContent":["@use '../size';\r\n\r\n@keyframes slide-from-right {\r\n    from {\r\n        visibility: visible;\r\n        left: 100vw;\r\n    }\r\n    to {\r\n        visibility: visible;\r\n        left: 0vw;\r\n    }\r\n}\r\n\r\n.slide-from-right {\r\n    animation-name: slide-from-right;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes slide-to-right {\r\n    from {\r\n        visibility: visible;\r\n        left: 0vw;\r\n    }\r\n    to {\r\n        visibility: hidden;\r\n        left: 100vw;\r\n    }\r\n}\r\n\r\n.slide-to-right {\r\n    animation-name: slide-to-right;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n.project-details {\r\n    display: flex;\r\n    visibility: hidden;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 100vw;\r\n    z-index: 99999;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--clr-background);\r\n    overflow-y: scroll;\r\n}\r\n\r\n.project-details__close-btn {\r\n    display: block;\r\n    color: var(--clr-text);\r\n    width: size.$xl2;\r\n    height: size.$xl2;\r\n    margin-top: 2rem;\r\n    margin-right: 2rem;\r\n    align-self: flex-end;\r\n    transition: 0.3s ease-in-out;\r\n\r\n    &:hover {\r\n        transform: rotate(90deg) scale(1.3);\r\n    }\r\n}\r\n\r\n.project-details__container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 2rem 2rem;\r\n}\r\n\r\n.project-details__content {\r\n    max-width: 60ch;\r\n}\r\n\r\n.project-details__title {\r\n    color: var(--clr-text);\r\n    font-size: size.$xl2;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.project-details__icon-link-wrapper {\r\n    display: flex;\r\n    justify-content: left;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.project-details__icon {\r\n    width: size.$xl2;\r\n    height: size.$xl2;\r\n}\r\n\r\n.project-details__tools {\r\n    color: var(--clr-accent);\r\n    font-size: 0.75em;\r\n}\r\n\r\n.project-details__description {\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.project-details__subtitle {\r\n    color: var(--clr-text);\r\n    font-size: size.$lg;\r\n    margin-top: 2em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.project-details__ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1em;\r\n    list-style-type: '\\1F449';\r\n    padding-left: 1em;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.project-details__list {\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n\r\n    &::before {\r\n        content: '';\r\n        margin-left: 0.5em;\r\n    }\r\n}\r\n\r\n.project-details__imgs-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    max-width: 70ch;\r\n}\r\n\r\n.project-details__img-small-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.project-details__img-small-wrapper {\r\n    overflow: hidden;\r\n    flex: 1;\r\n}\r\n\r\n.project-details__img-small {\r\n    width: auto;\r\n    max-height: 80px;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n    transition: scale 0.15s;\r\n\r\n    &:hover {\r\n        scale: 1.05;\r\n    }\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .project-details__close-btn {\r\n        width: size.$xl3;\r\n        height: size.$xl3;\r\n    }\r\n\r\n    .project-details__title {\r\n        font-size: size.$xl3;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .project-details__icon-link-wrapper {\r\n        gap: 1rem;\r\n    }\r\n\r\n    .project-details__icon {\r\n        width: size.$xl3;\r\n        height: size.$xl3;\r\n    }\r\n\r\n    .project-details__description {\r\n        font-size: size.$base;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    .project-details__subtitle {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .project-details__list {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .project-details__img-small {\r\n        max-height: 120px;\r\n    }\r\n}\r\n\r\n// sm \r\n@media (min-width: 640px) {\r\n    .project-details__imgs-container {\r\n        gap: 0.75rem;\r\n    }\r\n\r\n    .project-details__img-small-container {\r\n        gap: 0.75rem;\r\n    }\r\n}\r\n\r\n// md\r\n//@media (min-width: 768px) {}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .project-details__close-btn {\r\n        width: size.$xl4;\r\n        height: size.$xl4;\r\n        margin-top: 4rem;\r\n        margin-right: 4rem;\r\n    }\r\n\r\n    .project-details__container {\r\n        flex: 1;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 4rem;\r\n        align-self: stretch;\r\n        padding: 0 3rem;\r\n    }\r\n\r\n    .project-details__content {\r\n        flex: 1;\r\n    }\r\n\r\n    .project-details__imgs-container {\r\n        flex: 1;\r\n    }\r\n\r\n    .project-details__img-small {\r\n        max-height: 200px;\r\n    }\r\n\r\n    .project-details__title {\r\n        font-size: size.$xl3;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .project-details__description {\r\n        font-size: size.$base;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    .project-details__subtitle {\r\n        font-size: size.$xl;\r\n    }\r\n\r\n    .project-details__list {\r\n        font-size: size.$base;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .project-details__container {\r\n        padding: 0 6rem;\r\n    }\r\n\r\n    .project-details__icon-link-wrapper {\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .project-details__icon {\r\n        width: size.$xl4;\r\n        height: size.$xl4;\r\n    }\r\n}\r\n\r\n// 2xl\r\n@media (min-width: 1536px) {\r\n    .project-details__close-btn {\r\n        width: size.$xl5;\r\n        height: size.$xl5;\r\n        margin-top: 5rem;\r\n        margin-right: 5rem;\r\n    }\r\n\r\n    .project-details__container {\r\n        padding: 0 10rem;\r\n    }\r\n}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/projects.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/projects.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.projects {
  text-align: center;
}

.projects__title {
  font-size: 1.5rem;
  color: var(--clr-text);
}

.projects__description {
  max-width: 60ch;
  font-size: 0.875rem;
  color: var(--clr-text);
  margin: 1rem auto;
}

.projects__project-title {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.projects__img-wrapper {
  position: relative;
  width: 100% !important;
  height: 100% !important;
}

.projects__project-img {
  width: 100%;
}

.projects__project:not(:last-child) {
  margin-bottom: 5rem;
}

.projects__project-description1 {
  font-size: 0.875rem;
  color: var(--clr-accent);
  margin: 1rem 0;
}

.projects__project-description2 {
  font-size: 0.875rem;
  color: var(--clr-text);
  margin-bottom: 1rem;
}

.projects__project-btn {
  font-size: 0.875rem;
}

.projects__project-subtitle {
  display: none;
}

@media (min-width: 475px) {
  .projects__title {
    font-size: 1.875rem;
  }
  .projects__description {
    font-size: 1rem;
    margin: 1.5rem auto;
  }
  .projects__project-title {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
  .projects__icon-link-wrapper {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .projects__icon-link {
    width: 2.25rem;
    height: 2.25rem;
  }
  .projects__project-description1 {
    font-size: 1rem;
    margin: 1.5rem 0;
  }
  .projects__project-description2 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .projects__project-btn {
    font-size: 1rem;
  }
}
@media (min-width: 640px) {
  .projects__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image1 content1" "content2 image2" "image3 content3" "content4 image4" "image5 content5" "content6 image6";
    place-items: center;
  }
  .projects__image1 {
    grid-area: image1;
  }
  .projects__image2 {
    grid-area: image2;
  }
  .projects__image3 {
    grid-area: image3;
  }
  .projects__image4 {
    grid-area: image4;
  }
  .projects__image5 {
    grid-area: image5;
  }
  .projects__image6 {
    grid-area: image6;
  }
  .projects__content1 {
    grid-area: content1;
  }
  .projects__content2 {
    grid-area: content2;
  }
  .projects__content3 {
    grid-area: content3;
  }
  .projects__content4 {
    grid-area: content4;
  }
  .projects__content5 {
    grid-area: content5;
  }
  .projects__content6 {
    grid-area: content6;
  }
  .projects__project {
    padding: 0 1rem;
  }
  .projects__project-title {
    display: none;
  }
  .projects__project-description1 {
    font-size: 0.75rem;
    margin: 1em 0;
  }
  .projects__project-description2 {
    font-size: 0.75rem;
    margin-bottom: 1em;
  }
  .projects__project-btn {
    font-size: 0.75rem;
  }
  .projects__project:not(:last-child) {
    margin-bottom: 0;
  }
  .projects__project-subtitle {
    display: block;
    font-size: 1rem;
  }
  .projects__icon-link-wrapper {
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .projects__icon-link {
    width: 1.875rem;
    height: 1.875rem;
  }
}
@media (min-width: 768px) {
  .projects__project-description1 {
    font-size: 0.875rem;
  }
  .projects__project-description2 {
    font-size: 0.875rem;
  }
  .projects__project-btn {
    font-size: 0.875rem;
  }
  .projects__project-subtitle {
    font-size: 1.125rem;
  }
}
@media (min-width: 1024px) {
  .projects__title {
    font-size: 2.25rem;
  }
  .projects__description {
    font-size: 1.125rem;
  }
  .projects__project-description1 {
    font-size: 1rem;
  }
  .projects__project-description2 {
    font-size: 1rem;
  }
  .projects__project-btn {
    font-size: 1rem;
  }
  .projects__project-subtitle {
    font-size: 1.25rem;
  }
}
@media (min-width: 1280px) {
  .projects__title {
    font-size: 3rem;
  }
  .projects__description {
    font-size: 1.25rem;
    margin: 2rem auto;
  }
  .projects__project-description1 {
    font-size: 1.125rem;
  }
  .projects__project-description2 {
    font-size: 1.125rem;
  }
  .projects__project-btn {
    font-size: 1.125rem;
  }
  .projects__project-subtitle {
    font-size: 1.5rem;
  }
  .projects__container {
    width: 80%;
    margin: 0 auto;
  }
}
@media (min-width: 1536px) {
  .projects__container {
    width: 70%;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/projects.scss","webpack://./src/styles/_size.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;AADJ;;AAIA;EACI,iBCDE;EDEF,sBAAA;AADJ;;AAIA;EACI,eAAA;EACA,mBCXC;EDYD,sBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,eChBG;EDiBH,mBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,sBAAA;EACA,uBAAA;AADJ;;AAIA;EACI,WAAA;AADJ;;AAIA;EACI,mBAAA;AADJ;;AAIA;EACI,mBCpCC;EDqCD,wBAAA;EACA,cAAA;AADJ;;AAIA;EACI,mBC1CC;ED2CD,sBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,mBChDC;AD+CL;;AAIA;EACI,aAAA;AADJ;;AAKA;EACI;IACI,mBCrDF;EDmDJ;EAKE;IACI,eC7DD;ID8DC,mBAAA;EAHN;EAME;IACI,mBCjEH;IDkEG,qBAAA;EAJN;EAOE;IACI,SAAA;IACA,qBAAA;EALN;EAQE;IACI,cCvEF;IDwEE,eCxEF;EDkEJ;EASE;IACI,eCjFD;IDkFC,gBAAA;EAPN;EAUE;IACI,eCtFD;IDuFC,qBAAA;EARN;EAWE;IACI,eC3FD;EDkFL;AACF;AAaA;EACI;IACI,aAAA;IACA,8BAAA;IACA,gIACI;IAOJ,mBAAA;EAlBN;EAqBE;IACI,iBAAA;EAnBN;EAsBE;IACI,iBAAA;EApBN;EAuBE;IACI,iBAAA;EArBN;EAwBE;IACI,iBAAA;EAtBN;EAyBE;IACI,iBAAA;EAvBN;EA0BE;IACI,iBAAA;EAxBN;EA2BE;IACI,mBAAA;EAzBN;EA4BE;IACI,mBAAA;EA1BN;EA6BE;IACI,mBAAA;EA3BN;EA8BE;IACI,mBAAA;EA5BN;EA+BE;IACI,mBAAA;EA7BN;EAgCE;IACI,mBAAA;EA9BN;EAiCE;IACI,eAAA;EA/BN;EAkCE;IACI,aAAA;EAhCN;EAmCE;IACI,kBC1KH;ID2KG,aAAA;EAjCN;EAoCE;IACI,kBC/KH;IDgLG,kBAAA;EAlCN;EAqCE;IACI,kBCpLH;EDiJH;EAsCE;IACI,gBAAA;EApCN;EAuCE;IACI,cAAA;IACA,eC3LD;EDsJL;EAwCE;IACI,SAAA;IACA,kBAAA;IACA,qBAAA;EAtCN;EAyCE;IACI,eCjMF;IDkME,gBClMF;ED2JJ;AACF;AA2CA;EACI;IACI,mBC9MH;EDqKH;EA4CE;IACI,mBClNH;EDwKH;EA6CE;IACI,mBCtNH;ED2KH;EA8CE;IACI,mBCxNH;ED4KH;AACF;AAgDA;EACI;IACI,kBC3NF;ED6KJ;EAiDE;IACI,mBCnOH;EDoLH;EAkDE;IACI,eCxOD;EDwLL;EAmDE;IACI,eC5OD;ED2LL;EAoDE;IACI,eChPD;ED8LL;EAqDE;IACI,kBClPH;ED+LH;AACF;AAuDA;EACI;IACI,eCrPF;EDgMJ;EAwDE;IACI,kBC7PH;ID8PG,iBAAA;EAtDN;EAyDE;IACI,mBCnQH;ED4MH;EA0DE;IACI,mBCvQH;ED+MH;EA2DE;IACI,mBC3QH;EDkNH;EA4DE;IACI,iBC7QF;EDmNJ;EA6DE;IACI,UAAA;IACA,cAAA;EA3DN;AACF;AA+DA;EACI;IACI,UAAA;EA7DN;AACF","sourcesContent":["@use '../size';\r\n\r\n.projects {\r\n    text-align: center;\r\n}\r\n\r\n.projects__title {\r\n    font-size: size.$xl2;\r\n    color: var(--clr-text);\r\n}\r\n\r\n.projects__description {\r\n    max-width: 60ch;\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n    margin: 1rem auto;\r\n}\r\n\r\n.projects__project-title {\r\n    font-size: size.$base;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.projects__img-wrapper {\r\n    position: relative;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n}\r\n\r\n.projects__project-img {\r\n    width: 100%;\r\n}\r\n\r\n.projects__project:not(:last-child) {\r\n    margin-bottom: 5rem;\r\n}\r\n\r\n.projects__project-description1 {\r\n    font-size: size.$sm;\r\n    color: var(--clr-accent);\r\n    margin: 1rem 0;\r\n}\r\n\r\n.projects__project-description2 {\r\n    font-size: size.$sm;\r\n    color: var(--clr-text);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.projects__project-btn {\r\n    font-size: size.$sm;\r\n}\r\n\r\n.projects__project-subtitle {\r\n    display: none;\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .projects__title {\r\n        font-size: size.$xl3;\r\n    }\r\n\r\n    .projects__description {\r\n        font-size: size.$base;\r\n        margin: 1.5rem auto;\r\n    }\r\n\r\n    .projects__project-title {\r\n        font-size: size.$lg;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n\r\n    .projects__icon-link-wrapper {\r\n        gap: 1rem;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n\r\n    .projects__icon-link {\r\n        width: size.$xl4;\r\n        height: size.$xl4;\r\n    }\r\n\r\n    .projects__project-description1 {\r\n        font-size: size.$base;\r\n        margin: 1.5rem 0;\r\n    }\r\n\r\n    .projects__project-description2 {\r\n        font-size: size.$base;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n\r\n    .projects__project-btn {\r\n        font-size: size.$base;\r\n    }\r\n}\r\n\r\n// sm \r\n@media (min-width: 640px) {\r\n    .projects__container {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \r\n            'image1 content1'\r\n            'content2 image2'\r\n            'image3 content3'\r\n            'content4 image4'\r\n            'image5 content5'\r\n            'content6 image6'\r\n        ;\r\n        place-items: center;\r\n    }\r\n\r\n    .projects__image1 {\r\n        grid-area: image1;\r\n    }\r\n\r\n    .projects__image2 {\r\n        grid-area: image2;\r\n    }\r\n\r\n    .projects__image3 {\r\n        grid-area: image3;\r\n    }\r\n\r\n    .projects__image4 {\r\n        grid-area: image4;\r\n    }\r\n\r\n    .projects__image5 {\r\n        grid-area: image5;\r\n    }\r\n\r\n    .projects__image6 {\r\n        grid-area: image6;\r\n    }\r\n\r\n    .projects__content1 {\r\n        grid-area: content1;\r\n    }\r\n\r\n    .projects__content2 {\r\n        grid-area: content2;\r\n    }\r\n\r\n    .projects__content3 {\r\n        grid-area: content3;\r\n    }\r\n\r\n    .projects__content4 {\r\n        grid-area: content4;\r\n    }\r\n\r\n    .projects__content5 {\r\n        grid-area: content5;\r\n    }\r\n\r\n    .projects__content6 {\r\n        grid-area: content6;\r\n    }\r\n\r\n    .projects__project {\r\n        padding: 0 1rem;\r\n    }\r\n\r\n    .projects__project-title {\r\n        display: none;\r\n    }\r\n\r\n    .projects__project-description1 {\r\n        font-size: size.$xs;\r\n        margin: 1em 0;\r\n    }\r\n\r\n    .projects__project-description2 {\r\n        font-size: size.$xs;\r\n        margin-bottom: 1em;\r\n    }\r\n\r\n    .projects__project-btn {\r\n        font-size: size.$xs;\r\n    }\r\n\r\n    .projects__project:not(:last-child) {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .projects__project-subtitle {\r\n        display: block;\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .projects__icon-link-wrapper {\r\n        gap: 1rem;\r\n        margin-top: 1.5rem;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n\r\n    .projects__icon-link {\r\n        width: size.$xl3;\r\n        height: size.$xl3;\r\n    }\r\n}\r\n\r\n// md\r\n@media (min-width: 768px) {\r\n    .projects__project-description1 {\r\n        font-size: size.$sm;\r\n    }\r\n\r\n    .projects__project-description2 {\r\n        font-size: size.$sm;\r\n    }\r\n\r\n    .projects__project-btn {\r\n        font-size: size.$sm;\r\n    }\r\n\r\n    .projects__project-subtitle {\r\n        font-size: size.$lg;\r\n    }\r\n}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .projects__title {\r\n        font-size: size.$xl4;\r\n    }\r\n\r\n    .projects__description {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .projects__project-description1 {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .projects__project-description2 {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .projects__project-btn {\r\n        font-size: size.$base;\r\n    }\r\n\r\n    .projects__project-subtitle {\r\n        font-size: size.$xl;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .projects__title {\r\n        font-size: size.$xl5;\r\n    }\r\n\r\n    .projects__description {\r\n        font-size: size.$xl;\r\n        margin: 2rem auto;\r\n    }\r\n\r\n    .projects__project-description1 {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .projects__project-description2 {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .projects__project-btn {\r\n        font-size: size.$lg;\r\n    }\r\n\r\n    .projects__project-subtitle {\r\n        font-size: size.$xl2;\r\n    }\r\n\r\n    .projects__container {\r\n        width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n// 2xl\r\n@media (min-width: 1536px) {\r\n    .projects__container {\r\n        width: 70%;\r\n    }\r\n}\r\n","﻿$xxs: 0.5rem;\r\n$xs: 0.75rem;\r\n$sm: 0.875rem;\r\n$base: 1rem;\r\n$lg: 1.125rem;\r\n$xl: 1.25rem;\r\n$xl2: 1.5rem;\r\n$xl3: 1.875rem;\r\n$xl4: 2.25rem;\r\n$xl5: 3rem;\r\n$xl6: 3.75rem;\r\n$xl7: 4.5rem;\r\n$xl8: 6rem;\r\n$xl9: 8rem;\r\n$xl10: 10rem;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/modern-normalize.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/modern-normalize.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
/*
Document
========
*/
/**
Use a better box model (opinionated).
*/
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  /* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  line-height: 1.15; /* 1. Correct the line height in all browsers. */
  -webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
  -moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
  tab-size: 4; /* 3 */
}

/*
Sections
========
*/
body {
  margin: 0; /* Remove the margin in all browsers. */
}

/*
Grouping content
================
*/
/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/
/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr[title] {
  text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
Tabular data
============
*/
/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
}

/*
Forms
=====
*/
/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/
::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/
:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/
:-moz-ui-invalid {
  box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/
legend {
  padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Interactive
===========
*/
/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}`, "",{"version":3,"sources":["webpack://./src/styles/modern-normalize.scss"],"names":[],"mappings":"AAAA,8FAAA;AAEA;;;CAAA;AAKA;;CAAA;AAIA;;;EAGC,sBAAA;AAFD;;AAKA;EACC,sHAAA;EACA,+GACC;EAQD,iBAAA,EAAA,gDAAA;EACA,8BAAA,EAAA,0EAAA;EACA,gBAAA,EAAA,mDAAA;EACA,WAAA,EAAA,MAAA;AAVD;;AAaA;;;CAAA;AAKA;EACC,SAAA,EAAA,uCAAA;AAXD;;AAcA;;;CAAA;AAKA;;;CAAA;AAKA;EACC,SAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AAbD;;AAgBA;;;CAAA;AAKA;;CAAA;AAIA;EACC,iCAAA;AAfD;;AAkBA;;CAAA;AAIA;;EAEC,mBAAA;AAhBD;;AAmBA;;;CAAA;AAKA;;;;EAIC,wFACC,EAKW,MAAA;EACZ,cAAA,EAAA,MAAA;AAvBD;;AA0BA;;CAAA;AAIA;EACC,cAAA;AAxBD;;AA2BA;;CAAA;AAIA;;EAEC,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AAzBD;;AA4BA;EACC,eAAA;AAzBD;;AA4BA;EACC,WAAA;AAzBD;;AA4BA;;;CAAA;AAKA;;;CAAA;AAKA;EACC,cAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AA3BD;;AA8BA;;;CAAA;AAKA;;;CAAA;AAKA;;;;;EAKC,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AA7BD;;AAgCA;;CAAA;AAIA;;EAEC,oBAAA;AA9BD;;AAiCA;;CAAA;AAIA;;;;EAIC,0BAAA;AA/BD;;AAkCA;;CAAA;AAIA;EACC,kBAAA;EACA,UAAA;AAhCD;;AAmCA;;CAAA;AAIA;EACC,8BAAA;AAjCD;;AAoCA;;;CAAA;AAKA;EACC,gBAAA;AAlCD;;AAqCA;;CAAA;AAIA;EACC,UAAA;AAnCD;;AAsCA;;CAAA;AAIA;EACC,wBAAA;AApCD;;AAuCA;;CAAA;AAIA;;EAEC,YAAA;AArCD;;AAwCA;;;CAAA;AAKA;EACC,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AAtCD;;AAyCA;;CAAA;AAIA;EACC,wBAAA;AAvCD;;AA0CA;;;CAAA;AAKA;EACC,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AAxCD;;AA2CA;;;CAAA;AAKA;;CAAA;AAIA;EACC,kBAAA;AA1CD","sourcesContent":["/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n\r\n/*\r\nDocument\r\n========\r\n*/\r\n\r\n/**\r\nUse a better box model (opinionated).\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\r\n\tfont-family:\r\n\t\tsystem-ui,\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji';\r\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\r\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\r\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\r\n\ttab-size: 4; /* 3 */\r\n}\r\n\r\n/*\r\nSections\r\n========\r\n*/\r\n\r\nbody {\r\n\tmargin: 0; /* Remove the margin in all browsers. */\r\n}\r\n\r\n/*\r\nGrouping content\r\n================\r\n*/\r\n\r\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\r\n\r\nhr {\r\n\theight: 0; /* 1 */\r\n\tcolor: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nText-level semantics\r\n====================\r\n*/\r\n\r\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\n\ttext-decoration: underline dotted;\r\n}\r\n\r\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n\tfont-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\r\n\tfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n\tfont-size: 80%;\r\n}\r\n\r\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\n/*\r\nTabular data\r\n============\r\n*/\r\n\r\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\r\n\r\ntable {\r\n\ttext-indent: 0; /* 1 */\r\n\tborder-color: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nForms\r\n=====\r\n*/\r\n\r\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n\tfont-family: inherit; /* 1 */\r\n\tfont-size: 100%; /* 1 */\r\n\tline-height: 1.15; /* 1 */\r\n\tmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n\ttext-transform: none;\r\n}\r\n\r\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n\t-webkit-appearance: button;\r\n}\r\n\r\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\r\n\r\n::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\r\n\r\n:-moz-focusring {\r\n\toutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n\tbox-shadow: none;\r\n}\r\n\r\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\r\n\r\nlegend {\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n\theight: auto;\r\n}\r\n\r\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n\t-webkit-appearance: textfield; /* 1 */\r\n\toutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button; /* 1 */\r\n\tfont: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nInteractive\r\n===========\r\n*/\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n\tdisplay: list-item;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Regular.woff2 */ "./src/assets/fonts/GeneralSans/GeneralSans-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Regular.woff */ "./src/assets/fonts/GeneralSans/GeneralSans-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Regular.ttf */ "./src/assets/fonts/GeneralSans/GeneralSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Medium.woff2 */ "./src/assets/fonts/GeneralSans/GeneralSans-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Medium.woff */ "./src/assets/fonts/GeneralSans/GeneralSans-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Medium.ttf */ "./src/assets/fonts/GeneralSans/GeneralSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Semibold.woff2 */ "./src/assets/fonts/GeneralSans/GeneralSans-Semibold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Semibold.woff */ "./src/assets/fonts/GeneralSans/GeneralSans-Semibold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Semibold.ttf */ "./src/assets/fonts/GeneralSans/GeneralSans-Semibold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Bold.woff2 */ "./src/assets/fonts/GeneralSans/GeneralSans-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Bold.woff */ "./src/assets/fonts/GeneralSans/GeneralSans-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/GeneralSans/GeneralSans-Bold.ttf */ "./src/assets/fonts/GeneralSans/GeneralSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "General Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "General Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("truetype");
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "General Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("truetype");
  font-weight: 600;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "General Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format("truetype");
  font-weight: 700;
  font-display: swap;
  font-style: normal;
}
:root {
  --clr-text: #fbe9d0;
  --clr-background: #254956;
  --clr-primary: #e64833;
  --clr-secondary: #864f41;
  --clr-accent: #8faead;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  line-height: calc(1em + 0.5rem);
}

html {
  scroll-behavior: smooth;
}

.light-mode {
  --clr-text: #2f1d04;
  --clr-background: #a9cdda;
  --clr-primary: #cc2e19;
  --clr-secondary: #be8779;
  --clr-accent: #51706f;
}

body {
  font-family: "General Sans", sans-serif;
  background-color: var(--clr-background);
  color: var(--clr-text);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  user-select: none;
}

button {
  display: inline-block;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
}

a {
  color: var(--clr-primary);
}

strong {
  color: var(--clr-accent);
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--clr-primary);
  outline: 1px solid var(--clr-primary);
}`, "",{"version":3,"sources":["webpack://./src/styles/_font-face.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"AAAC;EACG,2BAAA;EACA,gLAAA;EAGA,gBAAA;EACA,kBAAA;EACA,kBAAA;ACDJ;ADIA;EACI,2BAAA;EACA,gLAAA;EAGA,gBAAA;EACA,kBAAA;EACA,kBAAA;ACJJ;ADOA;EACI,2BAAA;EACA,gLAAA;EAGA,gBAAA;EACA,kBAAA;EACA,kBAAA;ACPJ;ADUA;EACI,2BAAA;EACA,kLAAA;EAGA,gBAAA;EACA,kBAAA;EACA,kBAAA;ACVJ;AAzBA;EACI,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,wBAAA;EACA,qBAAA;AA2BJ;;AAxBA;;;EAGI,sBAAA;AA2BJ;;AAxBA;EACI,SAAA;EACA,+BAAA;AA2BJ;;AAxBA;EACI,uBAAA;AA2BJ;;AAxBA;EACI,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,wBAAA;EACA,qBAAA;AA2BJ;;AAxBA;EACI,uCAAA;EACA,uCAAA;EACA,sBAAA;AA2BJ;;AAxBA;;;;;EAKI,cAAA;EACA,eAAA;EACA,iBAAA;AA2BJ;;AAxBA;EACI,qBAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;AA2BJ;;AAxBA;EACI,yBAAA;AA2BJ;;AAxBA;EACI,wBAAA;AA2BJ;;AAvBA;EACI,UAAA;AA0BJ;;AAvBA;EACI,wCAAA;AA0BJ;;AAvBA;EACI,oCAAA;EACA,qCAAA;AA0BJ","sourcesContent":["﻿@font-face {\r\n    font-family: 'General Sans';\r\n    src: url('../assets/fonts/GeneralSans/GeneralSans-Regular.woff2') format('woff2'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Regular.woff') format('woff'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'General Sans';\r\n    src: url('../assets/fonts/GeneralSans/GeneralSans-Medium.woff2') format('woff2'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Medium.woff') format('woff'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Medium.ttf') format('truetype');\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'General Sans';\r\n    src: url('../assets/fonts/GeneralSans/GeneralSans-Semibold.woff2') format('woff2'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Semibold.woff') format('woff'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Semibold.ttf') format('truetype');\r\n    font-weight: 600;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'General Sans';\r\n    src: url('../assets/fonts/GeneralSans/GeneralSans-Bold.woff2') format('woff2'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Bold.woff') format('woff'),\r\n         url('../assets/fonts/GeneralSans/GeneralSans-Bold.ttf') format('truetype');\r\n    font-weight: 700;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}\r\n","@use 'font-face';\r\n\r\n:root {\r\n    --clr-text: #fbe9d0;         // rgb(251, 233, 208)\r\n    --clr-background: #254956;   // rgb(37, 73, 86)\r\n    --clr-primary: #e64833;      // rgb(230, 72, 51)\r\n    --clr-secondary: #864f41;    // rgb(134, 79, 65)\r\n    --clr-accent: #8faead;       // rgb(143, 174, 173)\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    line-height: calc(1em + 0.5rem);\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.light-mode {\r\n    --clr-text: #2f1d04;         // rgb(251, 233, 208)\r\n    --clr-background: #a9cdda;   // rgb(37, 73, 86)\r\n    --clr-primary: #cc2e19;      // rgb(230, 72, 51)\r\n    --clr-secondary: #be8779;    // rgb(134, 79, 65)\r\n    --clr-accent: #51706f;       // rgb(143, 174, 173)\r\n}\r\n\r\nbody {\r\n    font-family: 'General Sans', sans-serif;\r\n    background-color: var(--clr-background);\r\n    color: var(--clr-text);\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n    display: block;\r\n    max-width: 100%;\r\n    user-select: none;\r\n}\r\n\r\nbutton {\r\n    display: inline-block;\r\n    padding: 0;\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    color: inherit;\r\n}\r\n\r\na {\r\n    color: var(--clr-primary);\r\n}\r\n\r\nstrong {\r\n    color: var(--clr-accent);\r\n}\r\n\r\n// Scrollbar\r\nbody::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n \r\nbody::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);\r\n}\r\n \r\nbody::-webkit-scrollbar-thumb {\r\n    background-color: var(--clr-primary);\r\n    outline: 1px solid var(--clr-primary);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/utils.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/utils.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.btn {
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.05em;
  background-color: var(--clr-primary);
  color: #fbe9d0;
  padding: 0.5em 1em;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(230, 72, 51, 0.5), 0 6px 6px rgba(230, 72, 51, 0.5), 0 0 100px -10px var(--clr-primary);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(230, 72, 51, 0.25), 0 10px 10px rgba(230, 72, 51, 0.22), 0 0 120px -10px var(--clr-primary);
}

.icon-link {
  display: inline-block;
  color: var(--clr-primary);
  filter: drop-shadow(0 10px 20px rgba(230, 72, 51, 0.5)) drop-shadow(0 6px 6px rgba(230, 72, 51, 0.5));
  transition: transform 0.3s, filter 0.3s;
}
.icon-link:hover {
  transform: translateY(-3px);
  filter: drop-shadow(0 14px 28px rgba(230, 72, 51, 0.25)) drop-shadow(0 10px 10px rgba(230, 72, 51, 0.5));
}
.icon-link svg {
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.section {
  margin-top: 5rem;
}

.loading {
  filter: blur(40px) grayscale(100%);
}

@keyframes unblur {
  from {
    filter: blur(40px) grayscale(100%);
  }
  to {
    filter: blur(0) grayscale(0);
  }
}
.loaded {
  animation: unblur 0.7s ease-in-out;
}

@media (min-width: 475px) {
  .container {
    max-width: 475px;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
  .section {
    margin-top: 10rem;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/utils.scss"],"names":[],"mappings":"AAkBA;EACI,qBAAA;EACA,gBAAA;EACA,qBAAA;EACA,uBAAA;EACA,oCAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,oHAAA;EACA,2CAAA;AAjBJ;AAmBI;EACI,2BAAA;EACA,wHAAA;AAjBR;;AAqBA;EACI,qBAAA;EACA,yBAAA;EACA,qGAAA;EACA,uCAAA;AAlBJ;AAoBI;EACI,2BAAA;EACA,wGAAA;AAlBR;AAqBI;EACI,WAAA;EACA,YAAA;AAnBR;;AAwBA;EACI,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;AArBJ;;AAwBA;EACI,gBAAA;AArBJ;;AAwBA;EACI,kCAAA;AArBJ;;AAwBA;EACI;IACI,kCAAA;EArBN;EAuBE;IACI,4BAAA;EArBN;AACF;AAwBA;EACI,kCAAA;AAtBJ;;AA0BA;EACI;IACI,gBAAA;EAvBN;AACF;AA2BA;EACI;IACI,gBAAA;EAzBN;AACF;AA6BA;EACI;IACI,gBAAA;EA3BN;AACF;AA+BA;EACI;IACI,iBAAA;EA7BN;EAgCE;IACI,iBAAA;EA9BN;AACF;AAkCA;EACI;IACI,iBAAA;EAhCN;AACF;AAoCA;EACI;IACI,iBAAA;EAlCN;AACF","sourcesContent":["// xs\r\n//@media (min-width: 475px) {}\r\n\r\n// sm \r\n//@media (min-width: 640px) {}\r\n\r\n// md\r\n//@media (min-width: 768px) {}\r\n\r\n// lg\r\n//@media (min-width: 1024px) {}\r\n\r\n// xl\r\n//@media (min-width: 1280px) {}\r\n\r\n// 2xl\r\n//@media (min-width: 1536px) {}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    letter-spacing: -0.05em;\r\n    background-color: var(--clr-primary);\r\n    color: #fbe9d0;\r\n    padding: 0.5em 1em;\r\n    border-radius: 6px;\r\n    box-shadow: 0 10px 20px rgba(230, 72, 51, 0.5), 0 6px 6px rgba(230, 72, 51, 0.5), 0 0 100px -10px var(--clr-primary);\r\n    transition: transform 0.3s, box-shadow 0.3s;\r\n\r\n    &:hover {\r\n        transform: translateY(-3px);\r\n        box-shadow: 0 14px 28px rgba(230, 72, 51, 0.25), 0 10px 10px rgba(230, 72, 51, 0.22), 0 0 120px -10px var(--clr-primary);\r\n    }\r\n}\r\n\r\n.icon-link {\r\n    display: inline-block;\r\n    color: var(--clr-primary);\r\n    filter: drop-shadow(0 10px 20px rgba(230, 72, 51, 0.5)) drop-shadow(0 6px 6px rgba(230, 72, 51, 0.5));\r\n    transition: transform 0.3s, filter 0.3s;\r\n\r\n    &:hover {\r\n        transform: translateY(-3px);\r\n        filter: drop-shadow(0 14px 28px rgba(230, 72, 51, 0.25)) drop-shadow(0 10px 10px rgba(230, 72, 51, 0.5));\r\n    }\r\n\r\n    svg {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n\r\n.container {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n}\r\n\r\n.section {\r\n    margin-top: 5rem;\r\n}\r\n\r\n.loading {\r\n    filter: blur(40px) grayscale(100%);\r\n}\r\n\r\n@keyframes unblur {\r\n    from {\r\n        filter: blur(40px) grayscale(100%);\r\n    }\r\n    to {\r\n        filter: blur(0) grayscale(0);\r\n    }\r\n}\r\n\r\n.loaded {\r\n    animation: unblur 0.7s ease-in-out;\r\n}\r\n\r\n// xs\r\n@media (min-width: 475px) {\r\n    .container {\r\n        max-width: 475px;\r\n    }\r\n}\r\n\r\n// sm \r\n@media (min-width: 640px) {\r\n    .container {\r\n        max-width: 640px;\r\n    }\r\n}\r\n\r\n// md\r\n@media (min-width: 768px) {\r\n    .container {\r\n        max-width: 768px;\r\n    }\r\n}\r\n\r\n// lg\r\n@media (min-width: 1024px) {\r\n    .container {\r\n        max-width: 1024px;\r\n    }\r\n\r\n    .section {\r\n        margin-top: 10rem;\r\n    }\r\n}\r\n\r\n// xl\r\n@media (min-width: 1280px) {\r\n    .container {\r\n        max-width: 1280px;\r\n    }\r\n}\r\n\r\n// 2xl\r\n@media (min-width: 1536px) {\r\n    .container {\r\n        max-width: 1536px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/videos/avoid_video.mp4":
/*!*******************************************!*\
  !*** ./src/assets/videos/avoid_video.mp4 ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "avoid_video.mp4");

/***/ }),

/***/ "./src/assets/videos/break_the_game_video.mp4":
/*!****************************************************!*\
  !*** ./src/assets/videos/break_the_game_video.mp4 ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "break_the_game_video.mp4");

/***/ }),

/***/ "./src/assets/videos/grief_video.mp4":
/*!*******************************************!*\
  !*** ./src/assets/videos/grief_video.mp4 ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "grief_video.mp4");

/***/ }),

/***/ "./src/assets/videos/sons_of_almeida_video.mp4":
/*!*****************************************************!*\
  !*** ./src/assets/videos/sons_of_almeida_video.mp4 ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "sons_of_almeida_video.mp4");

/***/ }),

/***/ "./src/assets/videos/space_warfare_video.mp4":
/*!***************************************************!*\
  !*** ./src/assets/videos/space_warfare_video.mp4 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "space_warfare_video.mp4");

/***/ }),

/***/ "./src/assets/videos/virulent_odissey_video.mp4":
/*!******************************************************!*\
  !*** ./src/assets/videos/virulent_odissey_video.mp4 ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "virulent_odissey_video.mp4");

/***/ }),

/***/ "./src/styles/components/about.scss":
/*!******************************************!*\
  !*** ./src/styles/components/about.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/contact.scss":
/*!********************************************!*\
  !*** ./src/styles/components/contact.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/contact.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/footer.scss":
/*!*******************************************!*\
  !*** ./src/styles/components/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/header.scss":
/*!*******************************************!*\
  !*** ./src/styles/components/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/hero.scss":
/*!*****************************************!*\
  !*** ./src/styles/components/hero.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hero_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./hero.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/hero.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hero_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hero_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hero_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hero_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/mobile-nav.scss":
/*!***********************************************!*\
  !*** ./src/styles/components/mobile-nav.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./mobile-nav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/mobile-nav.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/modal.scss":
/*!******************************************!*\
  !*** ./src/styles/components/modal.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/modal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/project-details.scss":
/*!****************************************************!*\
  !*** ./src/styles/components/project-details.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_details_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./project-details.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/project-details.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/projects.scss":
/*!*********************************************!*\
  !*** ./src/styles/components/projects.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_projects_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./projects.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/projects.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_projects_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_projects_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_projects_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_projects_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/modern-normalize.scss":
/*!******************************************!*\
  !*** ./src/styles/modern-normalize.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modern_normalize_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./modern-normalize.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/modern-normalize.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modern_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modern_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modern_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modern_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/utils.scss":
/*!*******************************!*\
  !*** ./src/styles/utils.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./utils.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/utils.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Bold.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Bold.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Bold.woff":
/*!************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Bold.woff ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Bold.woff2":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Bold.woff2 ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Medium.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Medium.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Medium.ttf";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Medium.woff":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Medium.woff ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Medium.woff";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Medium.woff2":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Medium.woff2 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Medium.woff2";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Regular.ttf":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Regular.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Regular.woff":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Regular.woff ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Regular.woff2":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Regular.woff2 ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Regular.woff2";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Semibold.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Semibold.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Semibold.ttf";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Semibold.woff":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Semibold.woff ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Semibold.woff";

/***/ }),

/***/ "./src/assets/fonts/GeneralSans/GeneralSans-Semibold.woff2":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/GeneralSans/GeneralSans-Semibold.woff2 ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GeneralSans-Semibold.woff2";

/***/ }),

/***/ "./src/assets/images/avoid_level_1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/avoid_level_1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "avoid_level_1.png";

/***/ }),

/***/ "./src/assets/images/avoid_level_2.png":
/*!*********************************************!*\
  !*** ./src/assets/images/avoid_level_2.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "avoid_level_2.png";

/***/ }),

/***/ "./src/assets/images/avoid_level_3.png":
/*!*********************************************!*\
  !*** ./src/assets/images/avoid_level_3.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "avoid_level_3.png";

/***/ }),

/***/ "./src/assets/images/avoid_main_picture.png":
/*!**************************************************!*\
  !*** ./src/assets/images/avoid_main_picture.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "avoid_main_picture.png";

/***/ }),

/***/ "./src/assets/images/break_the_game_level_1.png":
/*!******************************************************!*\
  !*** ./src/assets/images/break_the_game_level_1.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "break_the_game_level_1.png";

/***/ }),

/***/ "./src/assets/images/break_the_game_level_2.png":
/*!******************************************************!*\
  !*** ./src/assets/images/break_the_game_level_2.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "break_the_game_level_2.png";

/***/ }),

/***/ "./src/assets/images/break_the_game_level_6.png":
/*!******************************************************!*\
  !*** ./src/assets/images/break_the_game_level_6.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "break_the_game_level_6.png";

/***/ }),

/***/ "./src/assets/images/break_the_game_main_picture.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/break_the_game_main_picture.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "break_the_game_main_picture.png";

/***/ }),

/***/ "./src/assets/images/grief_boss.png":
/*!******************************************!*\
  !*** ./src/assets/images/grief_boss.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grief_boss.png";

/***/ }),

/***/ "./src/assets/images/grief_boxes.png":
/*!*******************************************!*\
  !*** ./src/assets/images/grief_boxes.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grief_boxes.png";

/***/ }),

/***/ "./src/assets/images/grief_main_picture.png":
/*!**************************************************!*\
  !*** ./src/assets/images/grief_main_picture.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grief_main_picture.png";

/***/ }),

/***/ "./src/assets/images/grief_tutorial.png":
/*!**********************************************!*\
  !*** ./src/assets/images/grief_tutorial.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grief_tutorial.png";

/***/ }),

/***/ "./src/assets/images/placeholder_square.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/placeholder_square.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "placeholder_square.jpg";

/***/ }),

/***/ "./src/assets/images/profile_1.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/profile_1.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profile_1.jpg";

/***/ }),

/***/ "./src/assets/images/profile_2.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/profile_2.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profile_2.jpg";

/***/ }),

/***/ "./src/assets/images/sons_of_almeida_church.png":
/*!******************************************************!*\
  !*** ./src/assets/images/sons_of_almeida_church.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sons_of_almeida_church.png";

/***/ }),

/***/ "./src/assets/images/sons_of_almeida_main_picture.png":
/*!************************************************************!*\
  !*** ./src/assets/images/sons_of_almeida_main_picture.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sons_of_almeida_main_picture.png";

/***/ }),

/***/ "./src/assets/images/sons_of_almeida_room.png":
/*!****************************************************!*\
  !*** ./src/assets/images/sons_of_almeida_room.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sons_of_almeida_room.png";

/***/ }),

/***/ "./src/assets/images/sons_of_almeida_sfx_volume.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/sons_of_almeida_sfx_volume.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sons_of_almeida_sfx_volume.png";

/***/ }),

/***/ "./src/assets/images/space_warfare_main_picture.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/space_warfare_main_picture.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "space_warfare_main_picture.png";

/***/ }),

/***/ "./src/assets/images/space_warfare_satellite_launch_interface.png":
/*!************************************************************************!*\
  !*** ./src/assets/images/space_warfare_satellite_launch_interface.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "space_warfare_satellite_launch_interface.png";

/***/ }),

/***/ "./src/assets/images/space_warfare_satellite_selected_interface.png":
/*!**************************************************************************!*\
  !*** ./src/assets/images/space_warfare_satellite_selected_interface.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "space_warfare_satellite_selected_interface.png";

/***/ }),

/***/ "./src/assets/images/space_warfare_satellite_view_screen.png":
/*!*******************************************************************!*\
  !*** ./src/assets/images/space_warfare_satellite_view_screen.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "space_warfare_satellite_view_screen.png";

/***/ }),

/***/ "./src/assets/images/virulent_odissey_dodge.png":
/*!******************************************************!*\
  !*** ./src/assets/images/virulent_odissey_dodge.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "virulent_odissey_dodge.png";

/***/ }),

/***/ "./src/assets/images/virulent_odissey_main_menu.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/virulent_odissey_main_menu.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "virulent_odissey_main_menu.png";

/***/ }),

/***/ "./src/assets/images/virulent_odissey_main_picture.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/virulent_odissey_main_picture.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "virulent_odissey_main_picture.png";

/***/ }),

/***/ "./src/assets/images/virulent_odissey_protein.png":
/*!********************************************************!*\
  !*** ./src/assets/images/virulent_odissey_protein.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "virulent_odissey_protein.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_modern_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/modern-normalize.scss */ "./src/styles/modern-normalize.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_components_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/components/modal.scss */ "./src/styles/components/modal.scss");
/* harmony import */ var _styles_components_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/components/header.scss */ "./src/styles/components/header.scss");
/* harmony import */ var _styles_components_hero_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/components/hero.scss */ "./src/styles/components/hero.scss");
/* harmony import */ var _styles_components_about_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/components/about.scss */ "./src/styles/components/about.scss");
/* harmony import */ var _styles_components_projects_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/components/projects.scss */ "./src/styles/components/projects.scss");
/* harmony import */ var _styles_components_project_details_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/components/project-details.scss */ "./src/styles/components/project-details.scss");
/* harmony import */ var _styles_components_contact_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/components/contact.scss */ "./src/styles/components/contact.scss");
/* harmony import */ var _styles_components_footer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/components/footer.scss */ "./src/styles/components/footer.scss");
/* harmony import */ var _styles_components_mobile_nav_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/components/mobile-nav.scss */ "./src/styles/components/mobile-nav.scss");
/* harmony import */ var _styles_utils_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/utils.scss */ "./src/styles/utils.scss");
/* harmony import */ var _assets_images_placeholder_square_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/placeholder_square.jpg */ "./src/assets/images/placeholder_square.jpg");
/* harmony import */ var _assets_images_profile_1_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/profile_1.jpg */ "./src/assets/images/profile_1.jpg");
/* harmony import */ var _assets_images_profile_2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/profile_2.jpg */ "./src/assets/images/profile_2.jpg");
/* harmony import */ var _assets_images_space_warfare_main_picture_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/space_warfare_main_picture.png */ "./src/assets/images/space_warfare_main_picture.png");
/* harmony import */ var _assets_images_space_warfare_satellite_selected_interface_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/space_warfare_satellite_selected_interface.png */ "./src/assets/images/space_warfare_satellite_selected_interface.png");
/* harmony import */ var _assets_images_space_warfare_satellite_view_screen_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/space_warfare_satellite_view_screen.png */ "./src/assets/images/space_warfare_satellite_view_screen.png");
/* harmony import */ var _assets_images_space_warfare_satellite_launch_interface_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/images/space_warfare_satellite_launch_interface.png */ "./src/assets/images/space_warfare_satellite_launch_interface.png");
/* harmony import */ var _assets_videos_space_warfare_video_mp4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/videos/space_warfare_video.mp4 */ "./src/assets/videos/space_warfare_video.mp4");
/* harmony import */ var _assets_images_sons_of_almeida_main_picture_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/images/sons_of_almeida_main_picture.png */ "./src/assets/images/sons_of_almeida_main_picture.png");
/* harmony import */ var _assets_images_sons_of_almeida_sfx_volume_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/images/sons_of_almeida_sfx_volume.png */ "./src/assets/images/sons_of_almeida_sfx_volume.png");
/* harmony import */ var _assets_images_sons_of_almeida_room_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/images/sons_of_almeida_room.png */ "./src/assets/images/sons_of_almeida_room.png");
/* harmony import */ var _assets_images_sons_of_almeida_church_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/images/sons_of_almeida_church.png */ "./src/assets/images/sons_of_almeida_church.png");
/* harmony import */ var _assets_videos_sons_of_almeida_video_mp4__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/videos/sons_of_almeida_video.mp4 */ "./src/assets/videos/sons_of_almeida_video.mp4");
/* harmony import */ var _assets_images_grief_main_picture_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/images/grief_main_picture.png */ "./src/assets/images/grief_main_picture.png");
/* harmony import */ var _assets_images_grief_tutorial_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/images/grief_tutorial.png */ "./src/assets/images/grief_tutorial.png");
/* harmony import */ var _assets_images_grief_boxes_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/images/grief_boxes.png */ "./src/assets/images/grief_boxes.png");
/* harmony import */ var _assets_images_grief_boss_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/images/grief_boss.png */ "./src/assets/images/grief_boss.png");
/* harmony import */ var _assets_videos_grief_video_mp4__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/videos/grief_video.mp4 */ "./src/assets/videos/grief_video.mp4");
/* harmony import */ var _assets_images_virulent_odissey_main_picture_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/images/virulent_odissey_main_picture.png */ "./src/assets/images/virulent_odissey_main_picture.png");
/* harmony import */ var _assets_images_virulent_odissey_main_menu_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/images/virulent_odissey_main_menu.png */ "./src/assets/images/virulent_odissey_main_menu.png");
/* harmony import */ var _assets_images_virulent_odissey_dodge_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/images/virulent_odissey_dodge.png */ "./src/assets/images/virulent_odissey_dodge.png");
/* harmony import */ var _assets_images_virulent_odissey_protein_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/images/virulent_odissey_protein.png */ "./src/assets/images/virulent_odissey_protein.png");
/* harmony import */ var _assets_videos_virulent_odissey_video_mp4__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/videos/virulent_odissey_video.mp4 */ "./src/assets/videos/virulent_odissey_video.mp4");
/* harmony import */ var _assets_images_avoid_main_picture_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/images/avoid_main_picture.png */ "./src/assets/images/avoid_main_picture.png");
/* harmony import */ var _assets_images_avoid_level_1_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/images/avoid_level_1.png */ "./src/assets/images/avoid_level_1.png");
/* harmony import */ var _assets_images_avoid_level_2_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/images/avoid_level_2.png */ "./src/assets/images/avoid_level_2.png");
/* harmony import */ var _assets_images_avoid_level_3_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assets/images/avoid_level_3.png */ "./src/assets/images/avoid_level_3.png");
/* harmony import */ var _assets_videos_avoid_video_mp4__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assets/videos/avoid_video.mp4 */ "./src/assets/videos/avoid_video.mp4");
/* harmony import */ var _assets_images_break_the_game_main_picture_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./assets/images/break_the_game_main_picture.png */ "./src/assets/images/break_the_game_main_picture.png");
/* harmony import */ var _assets_images_break_the_game_level_1_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./assets/images/break_the_game_level_1.png */ "./src/assets/images/break_the_game_level_1.png");
/* harmony import */ var _assets_images_break_the_game_level_2_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./assets/images/break_the_game_level_2.png */ "./src/assets/images/break_the_game_level_2.png");
/* harmony import */ var _assets_images_break_the_game_level_6_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./assets/images/break_the_game_level_6.png */ "./src/assets/images/break_the_game_level_6.png");
/* harmony import */ var _assets_videos_break_the_game_video_mp4__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./assets/videos/break_the_game_video.mp4 */ "./src/assets/videos/break_the_game_video.mp4");
/* harmony import */ var _utils_mobile_nav__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./utils/mobile-nav */ "./src/utils/mobile-nav.js");
/* harmony import */ var _utils_dark_mode__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./utils/dark-mode */ "./src/utils/dark-mode.js");
/* harmony import */ var _utils_lazy_loading__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./utils/lazy-loading */ "./src/utils/lazy-loading.js");
/* harmony import */ var _utils_project_details__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./utils/project-details */ "./src/utils/project-details.js");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./utils/modal */ "./src/utils/modal.js");


















































(0,_utils_modal__WEBPACK_IMPORTED_MODULE_49__["default"])();
(0,_utils_mobile_nav__WEBPACK_IMPORTED_MODULE_45__["default"])();
(0,_utils_project_details__WEBPACK_IMPORTED_MODULE_48__["default"])();
(0,_utils_dark_mode__WEBPACK_IMPORTED_MODULE_46__["default"])();
(0,_utils_lazy_loading__WEBPACK_IMPORTED_MODULE_47__["default"])();
/******/ })()
;
//# sourceMappingURL=bundle23a8079646ca3326bb25.js.map