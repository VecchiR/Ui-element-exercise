/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* :root[data-theme="dark"] {
    --text: #a3a1af;
    --background: #160f0d;
    --primary: #97264f;
    --secondary: #414054;
    --accent: #447971;
  } */


/* :root[data-theme="light"] { */
:root {
    --text: #323232;
    --background: #E4DDDD;
    --primary: #A7ACB2;
    --secondary: #8B8A8B;
    --accent: rgb(193, 98, 129);

    --primary-little-lighter: hsl(from var(--primary) h s calc(l + 0.05));
    --primary-lighter: hsl(from var(--primary) h s calc(l + 0.14));
    --primary-even-lighter: hsl(from var(--primary) h s calc(l + 0.23));
    --primary-darker: hsl(from var(--primary) h s calc(l - 0.1));
    --primary-even-darker: hsl(from var(--primary) h s calc(l - 0.2));
    --background-lighter: hsl(from var(--background) h s calc(l + 0.08));
    --accent-darker: hsl(from var(--accent) h s calc(l - 0.05));
    --text-lighter: hsl(from var(--text) h s calc(l + 0.2));


    --shadow-color: 0deg 5% 56%;
    --shadow-elevation-low:
        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.54),
        0.5px 0.5px 0.6px -2px hsl(var(--shadow-color) / 0.4),
        1.4px 1.2px 1.7px -4px hsl(var(--shadow-color) / 0.27);
    --shadow-elevation-medium:
        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.57),
        0.8px 0.7px 1px -1.3px hsl(var(--shadow-color) / 0.46),
        2.5px 2.2px 3px -2.7px hsl(var(--shadow-color) / 0.35),
        6.8px 6.1px 8.2px -4px hsl(var(--shadow-color) / 0.25);
    --shadow-elevation-high:
        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.53),
        1.1px 0.9px 1.3px -0.6px hsl(var(--shadow-color) / 0.48),
        2.1px 1.9px 2.5px -1.1px hsl(var(--shadow-color) / 0.43),
        4.2px 3.7px 5px -1.7px hsl(var(--shadow-color) / 0.38),
        7.8px 6.9px 9.4px -2.3px hsl(var(--shadow-color) / 0.33),
        13.5px 12px 16.3px -2.9px hsl(var(--shadow-color) / 0.28),
        22px 19.5px 26.5px -3.4px hsl(var(--shadow-color) / 0.23),
        33.8px 30px 40.7px -4px hsl(var(--shadow-color) / 0.18);

    --carousel-factor: 0;
    --carousel-x: calc(100% * (var(--carousel-factor)));

}


body {
    display: grid;
    grid-template: 40px 1fr 35px / 1fr;
    height: 100vh;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: var(--text);
    font-size: 20px;
    overflow-y: hidden;
    overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px var(--primary-darker);
    border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--accent-darker);
}

.gh-logo-link,
footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    column-gap: 10px;
}

.gh-logo-link,
.gh-logo {
    border-radius: 100%;
    max-width: 20px;
}

.gh-logo:hover {
    background-color: var(--accent);
}

.gh-name {
    text-decoration-line: none;
}

.gh-name-link:hover {
    color: var(--accent);
    text-decoration: underline;
}

a {
    text-decoration: none;
    color: var(--text);
}

.dropdown-menu {
    z-index: 4;
}

nav {
    display: flex;
    place-content: center;
    z-index: 2;
}


.main-area {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
}

.frame {
    overflow: hidden;
    width: 800px;
    position: relative;

}

.wide {
    display: flex;
    flex-direction: row;
    justify-content: center;
    transform: translateX(var(--carousel-x));
}


.wide>img {
    width: 100%;
}


.controls {
    width: 800px;
    position: absolute;
    top: 0;
    display: flex;
    justify-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    z-index: 5;
    align-items: center;
    height: 100%;

}


.circles {
    align-self: end;
}

.circles>span {
    width: 30px;
    font-size: 20px;
    color: black;
    text-align: center;
}


.left-arrow,
.right-arrow {
    width: 60px;
}


.material-symbols-outlined:not(.radio-hidden),
.left-arrow,
.right-arrow {
    filter: invert(93%) sepia(9%) saturate(1%) hue-rotate(316deg) brightness(106%) contrast(101%) opacity(40%);
}

.radio-hidden {
    opacity: 0;
    position: absolute;
    z-index: -1;
}

.left-arrow:hover,
.right-arrow:hover,
.material-symbols-outlined:not(.radio-hidden):hover {
    cursor: pointer;
    filter: invert(93%) sepia(9%) saturate(1%) hue-rotate(316deg) brightness(106%) contrast(101%) opacity(70%);
    
}

.circles:hover {
    cursor: default;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;KAMK;;;AAGL,gCAAgC;AAChC;IACI,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,2BAA2B;;IAE3B,qEAAqE;IACrE,8DAA8D;IAC9D,mEAAmE;IACnE,4DAA4D;IAC5D,iEAAiE;IACjE,oEAAoE;IACpE,2DAA2D;IAC3D,uDAAuD;;;IAGvD,2BAA2B;IAC3B;;;8DAG0D;IAC1D;;;;8DAI0D;IAC1D;;;;;;;;+DAQ2D;;IAE3D,oBAAoB;IACpB,mDAAmD;;AAEvD;;;AAGA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,SAAS;IACT,mJAAmJ;IACnJ,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,UAAU;AACV;IACI,UAAU;AACd;;AAEA,UAAU;AACV;IACI,gDAAgD;IAChD,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA,oBAAoB;AACpB;IACI,gCAAgC;AACpC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wCAAwC;AAC5C;;;AAGA;IACI,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;IACV,mBAAmB;IACnB,YAAY;;AAEhB;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;;IAEI,WAAW;AACf;;;AAGA;;;IAGI,0GAA0G;AAC9G;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,WAAW;AACf;;AAEA;;;IAGI,eAAe;IACf,0GAA0G;;AAE9G;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* :root[data-theme=\"dark\"] {\n    --text: #a3a1af;\n    --background: #160f0d;\n    --primary: #97264f;\n    --secondary: #414054;\n    --accent: #447971;\n  } */\n\n\n/* :root[data-theme=\"light\"] { */\n:root {\n    --text: #323232;\n    --background: #E4DDDD;\n    --primary: #A7ACB2;\n    --secondary: #8B8A8B;\n    --accent: rgb(193, 98, 129);\n\n    --primary-little-lighter: hsl(from var(--primary) h s calc(l + 0.05));\n    --primary-lighter: hsl(from var(--primary) h s calc(l + 0.14));\n    --primary-even-lighter: hsl(from var(--primary) h s calc(l + 0.23));\n    --primary-darker: hsl(from var(--primary) h s calc(l - 0.1));\n    --primary-even-darker: hsl(from var(--primary) h s calc(l - 0.2));\n    --background-lighter: hsl(from var(--background) h s calc(l + 0.08));\n    --accent-darker: hsl(from var(--accent) h s calc(l - 0.05));\n    --text-lighter: hsl(from var(--text) h s calc(l + 0.2));\n\n\n    --shadow-color: 0deg 5% 56%;\n    --shadow-elevation-low:\n        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.54),\n        0.5px 0.5px 0.6px -2px hsl(var(--shadow-color) / 0.4),\n        1.4px 1.2px 1.7px -4px hsl(var(--shadow-color) / 0.27);\n    --shadow-elevation-medium:\n        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.57),\n        0.8px 0.7px 1px -1.3px hsl(var(--shadow-color) / 0.46),\n        2.5px 2.2px 3px -2.7px hsl(var(--shadow-color) / 0.35),\n        6.8px 6.1px 8.2px -4px hsl(var(--shadow-color) / 0.25);\n    --shadow-elevation-high:\n        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.53),\n        1.1px 0.9px 1.3px -0.6px hsl(var(--shadow-color) / 0.48),\n        2.1px 1.9px 2.5px -1.1px hsl(var(--shadow-color) / 0.43),\n        4.2px 3.7px 5px -1.7px hsl(var(--shadow-color) / 0.38),\n        7.8px 6.9px 9.4px -2.3px hsl(var(--shadow-color) / 0.33),\n        13.5px 12px 16.3px -2.9px hsl(var(--shadow-color) / 0.28),\n        22px 19.5px 26.5px -3.4px hsl(var(--shadow-color) / 0.23),\n        33.8px 30px 40.7px -4px hsl(var(--shadow-color) / 0.18);\n\n    --carousel-factor: 0;\n    --carousel-x: calc(100% * (var(--carousel-factor)));\n\n}\n\n\nbody {\n    display: grid;\n    grid-template: 40px 1fr 35px / 1fr;\n    height: 100vh;\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 400;\n    color: var(--text);\n    font-size: 20px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 10px var(--primary-darker);\n    border-radius: 4px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: var(--accent);\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: var(--accent-darker);\n}\n\n.gh-logo-link,\nfooter {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    column-gap: 10px;\n}\n\n.gh-logo-link,\n.gh-logo {\n    border-radius: 100%;\n    max-width: 20px;\n}\n\n.gh-logo:hover {\n    background-color: var(--accent);\n}\n\n.gh-name {\n    text-decoration-line: none;\n}\n\n.gh-name-link:hover {\n    color: var(--accent);\n    text-decoration: underline;\n}\n\na {\n    text-decoration: none;\n    color: var(--text);\n}\n\n.dropdown-menu {\n    z-index: 4;\n}\n\nnav {\n    display: flex;\n    place-content: center;\n    z-index: 2;\n}\n\n\n.main-area {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.frame {\n    overflow: hidden;\n    width: 800px;\n    position: relative;\n\n}\n\n.wide {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    transform: translateX(var(--carousel-x));\n}\n\n\n.wide>img {\n    width: 100%;\n}\n\n\n.controls {\n    width: 800px;\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-items: center;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-between;\n    z-index: 5;\n    align-items: center;\n    height: 100%;\n\n}\n\n\n.circles {\n    align-self: end;\n}\n\n.circles>span {\n    width: 30px;\n    font-size: 20px;\n    color: black;\n    text-align: center;\n}\n\n\n.left-arrow,\n.right-arrow {\n    width: 60px;\n}\n\n\n.material-symbols-outlined:not(.radio-hidden),\n.left-arrow,\n.right-arrow {\n    filter: invert(93%) sepia(9%) saturate(1%) hue-rotate(316deg) brightness(106%) contrast(101%) opacity(40%);\n}\n\n.radio-hidden {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n}\n\n.left-arrow:hover,\n.right-arrow:hover,\n.material-symbols-outlined:not(.radio-hidden):hover {\n    cursor: pointer;\n    filter: invert(93%) sepia(9%) saturate(1%) hue-rotate(316deg) brightness(106%) contrast(101%) opacity(70%);\n    \n}\n\n.circles:hover {\n    cursor: default;\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let timer = setTimeout(() => {
    slideCarousel();
  }, 7000);

const dropMenu = document.querySelectorAll('.dropdown-menu');
dropMenu.forEach((x) =>
    x.addEventListener('mouseenter', () => {
        x.querySelector(':first-child').removeAttribute('hidden');
    })
);
dropMenu.forEach((x) =>
    x.addEventListener('mouseleave', () => {
        x.querySelector(':first-child').setAttribute('hidden', true);
    })
);

const controls = document.querySelector('.controls');
controls.addEventListener('click', (e) => {
    clearTimeout(timer);
    if (e.target === controls.querySelector('.left-arrow')) {
        slideCarousel('left');
    } else if (e.target === controls.querySelector('.right-arrow')) {
        slideCarousel();
    } else if (e.target === controls.querySelector('.circles>[position="1"]')) {
        slideCarousel(false, 1);
    } else if (e.target === controls.querySelector('.circles>[position="2"]')) {
        slideCarousel(false, 0);
    } else if (e.target === controls.querySelector('.circles>[position="3"]')) {
        slideCarousel(false, -1);
    }
});

function slideCarousel(direction, setFactor) {
    const actualFactor = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--carousel-factor'));
    let newFactor = actualFactor;
    if (setFactor >= -1 && setFactor <= 1) {
        newFactor = setFactor;
        document.documentElement.style.setProperty('--carousel-factor', parseInt(newFactor));
        updCarouselCircles(newFactor);
        timer = setTimeout(() => {
            slideCarousel();
          }, 7000);
        return;
    }

    else if (direction === 'left') {
        if (actualFactor === 1) { newFactor *= -2; }
        newFactor += 1;
        document.documentElement.style.setProperty('--carousel-factor', newFactor);
    }

    else {
        if (actualFactor === -1) { newFactor *= -2; }
        newFactor -= 1;
        document.documentElement.style.setProperty('--carousel-factor', newFactor);
    }

    updCarouselCircles(newFactor);
    timer = setTimeout(() => {
        slideCarousel();
      }, 7000);
}

function updCarouselCircles(factor) {
    if (factor != undefined) {
        controls.querySelector(".checked:not(.radio-hidden)").classList.add('radio-hidden');
        controls.querySelector(".unchecked.radio-hidden").classList.remove('radio-hidden');
    }
    else if (factor === undefined) {
        factor = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--carousel-factor'));
    }

    const position = 2 - factor;

    controls.querySelector(`.unchecked[position='${position}']`).classList.add('radio-hidden');
    controls.querySelector(`.checked[position='${position}']`).classList.remove('radio-hidden');


}

updCarouselCircles();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU8scUZBQXFGLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxRQUFRLE9BQU8sU0FBUyxPQUFPLGFBQWEsUUFBUSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxNQUFNLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1B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V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFckI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1EQUFtRCxTQUFTO0FBQzVELGlEQUFpRCxTQUFTOzs7QUFHMUQ7O0FBRUEscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIDpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXRleHQ6ICNhM2ExYWY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYwZjBkO1xuICAgIC0tcHJpbWFyeTogIzk3MjY0ZjtcbiAgICAtLXNlY29uZGFyeTogIzQxNDA1NDtcbiAgICAtLWFjY2VudDogIzQ0Nzk3MTtcbiAgfSAqL1xuXG5cbi8qIDpyb290W2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7ICovXG46cm9vdCB7XG4gICAgLS10ZXh0OiAjMzIzMjMyO1xuICAgIC0tYmFja2dyb3VuZDogI0U0RERERDtcbiAgICAtLXByaW1hcnk6ICNBN0FDQjI7XG4gICAgLS1zZWNvbmRhcnk6ICM4QjhBOEI7XG4gICAgLS1hY2NlbnQ6IHJnYigxOTMsIDk4LCAxMjkpO1xuXG4gICAgLS1wcmltYXJ5LWxpdHRsZS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4wNSkpO1xuICAgIC0tcHJpbWFyeS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4xNCkpO1xuICAgIC0tcHJpbWFyeS1ldmVuLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjIzKSk7XG4gICAgLS1wcmltYXJ5LWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMSkpO1xuICAgIC0tcHJpbWFyeS1ldmVuLWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMikpO1xuICAgIC0tYmFja2dyb3VuZC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1iYWNrZ3JvdW5kKSBoIHMgY2FsYyhsICsgMC4wOCkpO1xuICAgIC0tYWNjZW50LWRhcmtlcjogaHNsKGZyb20gdmFyKC0tYWNjZW50KSBoIHMgY2FsYyhsIC0gMC4wNSkpO1xuICAgIC0tdGV4dC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS10ZXh0KSBoIHMgY2FsYyhsICsgMC4yKSk7XG5cblxuICAgIC0tc2hhZG93LWNvbG9yOiAwZGVnIDUlIDU2JTtcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OlxuICAgICAgICAwLjNweCAwLjNweCAwLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNTQpLFxuICAgICAgICAwLjVweCAwLjVweCAwLjZweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40KSxcbiAgICAgICAgMS40cHggMS4ycHggMS43cHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjcpO1xuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06XG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NyksXG4gICAgICAgIDAuOHB4IDAuN3B4IDFweCAtMS4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQ2KSxcbiAgICAgICAgMi41cHggMi4ycHggM3B4IC0yLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzUpLFxuICAgICAgICA2LjhweCA2LjFweCA4LjJweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yNSk7XG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWhpZ2g6XG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41MyksXG4gICAgICAgIDEuMXB4IDAuOXB4IDEuM3B4IC0wLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDgpLFxuICAgICAgICAyLjFweCAxLjlweCAyLjVweCAtMS4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQzKSxcbiAgICAgICAgNC4ycHggMy43cHggNXB4IC0xLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzgpLFxuICAgICAgICA3LjhweCA2LjlweCA5LjRweCAtMi4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjMzKSxcbiAgICAgICAgMTMuNXB4IDEycHggMTYuM3B4IC0yLjlweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjgpLFxuICAgICAgICAyMnB4IDE5LjVweCAyNi41cHggLTMuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yMyksXG4gICAgICAgIDMzLjhweCAzMHB4IDQwLjdweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xOCk7XG5cbiAgICAtLWNhcm91c2VsLWZhY3RvcjogMDtcbiAgICAtLWNhcm91c2VsLXg6IGNhbGMoMTAwJSAqICh2YXIoLS1jYXJvdXNlbC1mYWN0b3IpKSk7XG5cbn1cblxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIDM1cHggLyAxZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHZhcigtLXByaW1hcnktZGFya2VyKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xufVxuXG4uZ2gtbG9nby1saW5rLFxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbn1cblxuLmdoLWxvZ28tbGluayxcbi5naC1sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLmdoLWxvZ286aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5naC1uYW1lIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbn1cblxuLmdoLW5hbWUtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgICB6LWluZGV4OiA0O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG59XG5cblxuLm1haW4tYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mcmFtZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi53aWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLWNhcm91c2VsLXgpKTtcbn1cblxuXG4ud2lkZT5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5jb250cm9scyB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgei1pbmRleDogNTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG5cbi5jaXJjbGVzIHtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbi5jaXJjbGVzPnNwYW4ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5sZWZ0LWFycm93LFxuLnJpZ2h0LWFycm93IHtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpub3QoLnJhZGlvLWhpZGRlbiksXG4ubGVmdC1hcnJvdyxcbi5yaWdodC1hcnJvdyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSg5JSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpIG9wYWNpdHkoNDAlKTtcbn1cblxuLnJhZGlvLWhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5sZWZ0LWFycm93OmhvdmVyLFxuLnJpZ2h0LWFycm93OmhvdmVyLFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6bm90KC5yYWRpby1oaWRkZW4pOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSg5JSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpIG9wYWNpdHkoNzAlKTtcbiAgICBcbn1cblxuLmNpcmNsZXM6aG92ZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztLQU1LOzs7QUFHTCxnQ0FBZ0M7QUFDaEM7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMkJBQTJCOztJQUUzQixxRUFBcUU7SUFDckUsOERBQThEO0lBQzlELG1FQUFtRTtJQUNuRSw0REFBNEQ7SUFDNUQsaUVBQWlFO0lBQ2pFLG9FQUFvRTtJQUNwRSwyREFBMkQ7SUFDM0QsdURBQXVEOzs7SUFHdkQsMkJBQTJCO0lBQzNCOzs7OERBRzBEO0lBQzFEOzs7OzhEQUkwRDtJQUMxRDs7Ozs7Ozs7K0RBUTJEOztJQUUzRCxvQkFBb0I7SUFDcEIsbURBQW1EOztBQUV2RDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUpBQW1KO0lBQ25KLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksVUFBVTtBQUNkOztBQUVBLFVBQVU7QUFDVjtJQUNJLGdEQUFnRDtJQUNoRCxrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVztBQUNYO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0NBQXdDO0FBQzVDOzs7QUFHQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7OztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksV0FBVztBQUNmOzs7QUFHQTs7O0lBR0ksMEdBQTBHO0FBQzlHOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGVBQWU7SUFDZiwwR0FBMEc7O0FBRTlHOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiA6cm9vdFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcbiAgICAtLXRleHQ6ICNhM2ExYWY7XFxuICAgIC0tYmFja2dyb3VuZDogIzE2MGYwZDtcXG4gICAgLS1wcmltYXJ5OiAjOTcyNjRmO1xcbiAgICAtLXNlY29uZGFyeTogIzQxNDA1NDtcXG4gICAgLS1hY2NlbnQ6ICM0NDc5NzE7XFxuICB9ICovXFxuXFxuXFxuLyogOnJvb3RbZGF0YS10aGVtZT1cXFwibGlnaHRcXFwiXSB7ICovXFxuOnJvb3Qge1xcbiAgICAtLXRleHQ6ICMzMjMyMzI7XFxuICAgIC0tYmFja2dyb3VuZDogI0U0RERERDtcXG4gICAgLS1wcmltYXJ5OiAjQTdBQ0IyO1xcbiAgICAtLXNlY29uZGFyeTogIzhCOEE4QjtcXG4gICAgLS1hY2NlbnQ6IHJnYigxOTMsIDk4LCAxMjkpO1xcblxcbiAgICAtLXByaW1hcnktbGl0dGxlLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjA1KSk7XFxuICAgIC0tcHJpbWFyeS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4xNCkpO1xcbiAgICAtLXByaW1hcnktZXZlbi1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4yMykpO1xcbiAgICAtLXByaW1hcnktZGFya2VyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsIC0gMC4xKSk7XFxuICAgIC0tcHJpbWFyeS1ldmVuLWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMikpO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHRlcjogaHNsKGZyb20gdmFyKC0tYmFja2dyb3VuZCkgaCBzIGNhbGMobCArIDAuMDgpKTtcXG4gICAgLS1hY2NlbnQtZGFya2VyOiBoc2woZnJvbSB2YXIoLS1hY2NlbnQpIGggcyBjYWxjKGwgLSAwLjA1KSk7XFxuICAgIC0tdGV4dC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS10ZXh0KSBoIHMgY2FsYyhsICsgMC4yKSk7XFxuXFxuXFxuICAgIC0tc2hhZG93LWNvbG9yOiAwZGVnIDUlIDU2JTtcXG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWxvdzpcXG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NCksXFxuICAgICAgICAwLjVweCAwLjVweCAwLjZweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40KSxcXG4gICAgICAgIDEuNHB4IDEuMnB4IDEuN3B4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI3KTtcXG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bTpcXG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NyksXFxuICAgICAgICAwLjhweCAwLjdweCAxcHggLTEuM3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40NiksXFxuICAgICAgICAyLjVweCAyLjJweCAzcHggLTIuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4zNSksXFxuICAgICAgICA2LjhweCA2LjFweCA4LjJweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yNSk7XFxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoOlxcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjUzKSxcXG4gICAgICAgIDEuMXB4IDAuOXB4IDEuM3B4IC0wLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDgpLFxcbiAgICAgICAgMi4xcHggMS45cHggMi41cHggLTEuMXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40MyksXFxuICAgICAgICA0LjJweCAzLjdweCA1cHggLTEuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4zOCksXFxuICAgICAgICA3LjhweCA2LjlweCA5LjRweCAtMi4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjMzKSxcXG4gICAgICAgIDEzLjVweCAxMnB4IDE2LjNweCAtMi45cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI4KSxcXG4gICAgICAgIDIycHggMTkuNXB4IDI2LjVweCAtMy40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjIzKSxcXG4gICAgICAgIDMzLjhweCAzMHB4IDQwLjdweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xOCk7XFxuXFxuICAgIC0tY2Fyb3VzZWwtZmFjdG9yOiAwO1xcbiAgICAtLWNhcm91c2VsLXg6IGNhbGMoMTAwJSAqICh2YXIoLS1jYXJvdXNlbC1mYWN0b3IpKSk7XFxuXFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAzNXB4IC8gMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNXB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCB2YXIoLS1wcmltYXJ5LWRhcmtlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZGFya2VyKTtcXG59XFxuXFxuLmdoLWxvZ28tbGluayxcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmdoLWxvZ28tbGluayxcXG4uZ2gtbG9nbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG59XFxuXFxuLmdoLWxvZ286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uZ2gtbmFtZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcbn1cXG5cXG4uZ2gtbmFtZS1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IHtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG5cXG4ubWFpbi1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLndpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLWNhcm91c2VsLXgpKTtcXG59XFxuXFxuXFxuLndpZGU+aW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5jb250cm9scyB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgei1pbmRleDogNTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG5cXG4uY2lyY2xlcyB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZXM+c3BhbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ubGVmdC1hcnJvdyxcXG4ucmlnaHQtYXJyb3cge1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuXFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6bm90KC5yYWRpby1oaWRkZW4pLFxcbi5sZWZ0LWFycm93LFxcbi5yaWdodC1hcnJvdyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoOSUpIHNhdHVyYXRlKDElKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDElKSBvcGFjaXR5KDQwJSk7XFxufVxcblxcbi5yYWRpby1oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubGVmdC1hcnJvdzpob3ZlcixcXG4ucmlnaHQtYXJyb3c6aG92ZXIsXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6bm90KC5yYWRpby1oaWRkZW4pOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDklKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSgzMTZkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAxJSkgb3BhY2l0eSg3MCUpO1xcbiAgICBcXG59XFxuXFxuLmNpcmNsZXM6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxldCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNsaWRlQ2Fyb3VzZWwoKTtcbiAgfSwgNzAwMCk7XG5cbmNvbnN0IGRyb3BNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW1lbnUnKTtcbmRyb3BNZW51LmZvckVhY2goKHgpID0+XG4gICAgeC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICB4LnF1ZXJ5U2VsZWN0b3IoJzpmaXJzdC1jaGlsZCcpLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfSlcbik7XG5kcm9wTWVudS5mb3JFYWNoKCh4KSA9PlxuICAgIHguYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgeC5xdWVyeVNlbGVjdG9yKCc6Zmlyc3QtY2hpbGQnKS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgIH0pXG4pO1xuXG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcubGVmdC1hcnJvdycpKSB7XG4gICAgICAgIHNsaWRlQ2Fyb3VzZWwoJ2xlZnQnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKSkge1xuICAgICAgICBzbGlkZUNhcm91c2VsKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gY29udHJvbHMucXVlcnlTZWxlY3RvcignLmNpcmNsZXM+W3Bvc2l0aW9uPVwiMVwiXScpKSB7XG4gICAgICAgIHNsaWRlQ2Fyb3VzZWwoZmFsc2UsIDEpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGVzPltwb3NpdGlvbj1cIjJcIl0nKSkge1xuICAgICAgICBzbGlkZUNhcm91c2VsKGZhbHNlLCAwKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlcz5bcG9zaXRpb249XCIzXCJdJykpIHtcbiAgICAgICAgc2xpZGVDYXJvdXNlbChmYWxzZSwgLTEpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBzbGlkZUNhcm91c2VsKGRpcmVjdGlvbiwgc2V0RmFjdG9yKSB7XG4gICAgY29uc3QgYWN0dWFsRmFjdG9yID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNhcm91c2VsLWZhY3RvcicpKTtcbiAgICBsZXQgbmV3RmFjdG9yID0gYWN0dWFsRmFjdG9yO1xuICAgIGlmIChzZXRGYWN0b3IgPj0gLTEgJiYgc2V0RmFjdG9yIDw9IDEpIHtcbiAgICAgICAgbmV3RmFjdG9yID0gc2V0RmFjdG9yO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2Fyb3VzZWwtZmFjdG9yJywgcGFyc2VJbnQobmV3RmFjdG9yKSk7XG4gICAgICAgIHVwZENhcm91c2VsQ2lyY2xlcyhuZXdGYWN0b3IpO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2xpZGVDYXJvdXNlbCgpO1xuICAgICAgICAgIH0sIDcwMDApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgaWYgKGFjdHVhbEZhY3RvciA9PT0gMSkgeyBuZXdGYWN0b3IgKj0gLTI7IH1cbiAgICAgICAgbmV3RmFjdG9yICs9IDE7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jYXJvdXNlbC1mYWN0b3InLCBuZXdGYWN0b3IpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoYWN0dWFsRmFjdG9yID09PSAtMSkgeyBuZXdGYWN0b3IgKj0gLTI7IH1cbiAgICAgICAgbmV3RmFjdG9yIC09IDE7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jYXJvdXNlbC1mYWN0b3InLCBuZXdGYWN0b3IpO1xuICAgIH1cblxuICAgIHVwZENhcm91c2VsQ2lyY2xlcyhuZXdGYWN0b3IpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNsaWRlQ2Fyb3VzZWwoKTtcbiAgICAgIH0sIDcwMDApO1xufVxuXG5mdW5jdGlvbiB1cGRDYXJvdXNlbENpcmNsZXMoZmFjdG9yKSB7XG4gICAgaWYgKGZhY3RvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi5jaGVja2VkOm5vdCgucmFkaW8taGlkZGVuKVwiKS5jbGFzc0xpc3QuYWRkKCdyYWRpby1oaWRkZW4nKTtcbiAgICAgICAgY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi51bmNoZWNrZWQucmFkaW8taGlkZGVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGlvLWhpZGRlbicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmYWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmYWN0b3IgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tY2Fyb3VzZWwtZmFjdG9yJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gMiAtIGZhY3RvcjtcblxuICAgIGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoYC51bmNoZWNrZWRbcG9zaXRpb249JyR7cG9zaXRpb259J11gKS5jbGFzc0xpc3QuYWRkKCdyYWRpby1oaWRkZW4nKTtcbiAgICBjb250cm9scy5xdWVyeVNlbGVjdG9yKGAuY2hlY2tlZFtwb3NpdGlvbj0nJHtwb3NpdGlvbn0nXWApLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGlvLWhpZGRlbicpO1xuXG5cbn1cblxudXBkQ2Fyb3VzZWxDaXJjbGVzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9