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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/misato.png */ "./src/images/misato.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/tanks.png */ "./src/images/tanks.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/cross.png */ "./src/images/cross.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/icons/left_arrow.svg */ "./src/icons/left_arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/icons/right_arrow.svg */ "./src/icons/right_arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/icons/github_mark.svg */ "./src/icons/github_mark.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\"\n        href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0\" />\n</head>\n\n<body>\n\n    <header>\n        <nav>\n            <div class=\"dropdown-menu\">Menu\n                <ul hidden>\n                    <li>Item 1</li>\n                    <li>Item 2</li>\n                    <li>Item 3</li>\n                </ul>\n            </div>\n            <div class=\"dropdown-menu\">Menu\n                <ul hidden>\n                    <li>Item 1</li>\n                    <li>Item 2</li>\n                    <li>Item 3</li>\n                </ul>\n            </div>\n        </nav>\n\n\n\n\n    </header>\n\n\n\n\n\n    <div class=\"main-area\">\n        <div class=\"frame\">\n            <div class=\"wide\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\n            </div>\n            <div class=\"controls\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" class=\"left-arrow\">\n                <div class=\"circles\">\n                    <span class=\"material-symbols-outlined unchecked\" position=\"1\">radio_button_unchecked</span>\n                    <span class=\"material-symbols-outlined checked radio-hidden\"\n                        position=\"1\">radio_button_checked</span>\n\n                    <span class=\"material-symbols-outlined unchecked\" position=\"2\">radio_button_unchecked</span>\n                    <span class=\"material-symbols-outlined checked radio-hidden\"\n                        position=\"2\">radio_button_checked</span>\n\n                    <span class=\"material-symbols-outlined unchecked\" position=\"3\">radio_button_unchecked</span>\n                    <span class=\"material-symbols-outlined checked radio-hidden\"\n                        position=\"3\">radio_button_checked</span>\n\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" class=\"right-arrow\">\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n    <footer>\n        <a class=\"gh-logo-link\" href=\"https://github.com/VecchiR/Ui-element-exercise\"><img class=\"gh-logo\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></a>\n        <div class=\"gh-name\"><a class=\"gh-name-link\" href=\"https://github.com/VecchiR\">VecchiR</a> © 2024</div>\n    </footer>\n\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
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

/***/ }),

/***/ "./src/icons/github_mark.svg":
/*!***********************************!*\
  !*** ./src/icons/github_mark.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resources/6fa18895f6e6c7772cab.svg";

/***/ }),

/***/ "./src/icons/left_arrow.svg":
/*!**********************************!*\
  !*** ./src/icons/left_arrow.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resources/da4c56bf10910ac850eb.svg";

/***/ }),

/***/ "./src/icons/right_arrow.svg":
/*!***********************************!*\
  !*** ./src/icons/right_arrow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resources/ed22a5fb12f365b7e70d.svg";

/***/ }),

/***/ "./src/images/cross.png":
/*!******************************!*\
  !*** ./src/images/cross.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resources/82dc6e387d7e5b686a74.png";

/***/ }),

/***/ "./src/images/misato.png":
/*!*******************************!*\
  !*** ./src/images/misato.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resources/af89b6cf6ef44d777a82.png";

/***/ }),

/***/ "./src/images/tanks.png":
/*!******************************!*\
  !*** ./src/images/tanks.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resources/cfc6c5beb039f6d1aff2.png";

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
/******/ 			"main": 0
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/left_arrow.svg */ "./src/icons/left_arrow.svg");
/* harmony import */ var _icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/right_arrow.svg */ "./src/icons/right_arrow.svg");
/* harmony import */ var _icons_github_mark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/github_mark.svg */ "./src/icons/github_mark.svg");
/* harmony import */ var _images_tanks_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tanks.png */ "./src/images/tanks.png");
/* harmony import */ var _images_misato_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/misato.png */ "./src/images/misato.png");
/* harmony import */ var _images_cross_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cross.png */ "./src/images/cross.png");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.html */ "./src/index.html");










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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU8scUZBQXFGLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxRQUFRLE9BQU8sU0FBUyxPQUFPLGFBQWEsUUFBUSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxNQUFNLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1B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Q0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtREFBbUQsU0FBUztBQUM1RCxpREFBaUQsU0FBUzs7O0FBRzFEOztBQUVBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogOnJvb3RbZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tdGV4dDogI2EzYTFhZjtcbiAgICAtLWJhY2tncm91bmQ6ICMxNjBmMGQ7XG4gICAgLS1wcmltYXJ5OiAjOTcyNjRmO1xuICAgIC0tc2Vjb25kYXJ5OiAjNDE0MDU0O1xuICAgIC0tYWNjZW50OiAjNDQ3OTcxO1xuICB9ICovXG5cblxuLyogOnJvb3RbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHsgKi9cbjpyb290IHtcbiAgICAtLXRleHQ6ICMzMjMyMzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTREREREO1xuICAgIC0tcHJpbWFyeTogI0E3QUNCMjtcbiAgICAtLXNlY29uZGFyeTogIzhCOEE4QjtcbiAgICAtLWFjY2VudDogcmdiKDE5MywgOTgsIDEyOSk7XG5cbiAgICAtLXByaW1hcnktbGl0dGxlLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjA1KSk7XG4gICAgLS1wcmltYXJ5LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjE0KSk7XG4gICAgLS1wcmltYXJ5LWV2ZW4tbGlnaHRlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCArIDAuMjMpKTtcbiAgICAtLXByaW1hcnktZGFya2VyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsIC0gMC4xKSk7XG4gICAgLS1wcmltYXJ5LWV2ZW4tZGFya2VyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsIC0gMC4yKSk7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLWJhY2tncm91bmQpIGggcyBjYWxjKGwgKyAwLjA4KSk7XG4gICAgLS1hY2NlbnQtZGFya2VyOiBoc2woZnJvbSB2YXIoLS1hY2NlbnQpIGggcyBjYWxjKGwgLSAwLjA1KSk7XG4gICAgLS10ZXh0LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXRleHQpIGggcyBjYWxjKGwgKyAwLjIpKTtcblxuXG4gICAgLS1zaGFkb3ctY29sb3I6IDBkZWcgNSUgNTYlO1xuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1sb3c6XG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NCksXG4gICAgICAgIDAuNXB4IDAuNXB4IDAuNnB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQpLFxuICAgICAgICAxLjRweCAxLjJweCAxLjdweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yNyk7XG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bTpcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjU3KSxcbiAgICAgICAgMC44cHggMC43cHggMXB4IC0xLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDYpLFxuICAgICAgICAyLjVweCAyLjJweCAzcHggLTIuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4zNSksXG4gICAgICAgIDYuOHB4IDYuMXB4IDguMnB4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI1KTtcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24taGlnaDpcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjUzKSxcbiAgICAgICAgMS4xcHggMC45cHggMS4zcHggLTAuNnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40OCksXG4gICAgICAgIDIuMXB4IDEuOXB4IDIuNXB4IC0xLjFweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDMpLFxuICAgICAgICA0LjJweCAzLjdweCA1cHggLTEuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4zOCksXG4gICAgICAgIDcuOHB4IDYuOXB4IDkuNHB4IC0yLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzMpLFxuICAgICAgICAxMy41cHggMTJweCAxNi4zcHggLTIuOXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yOCksXG4gICAgICAgIDIycHggMTkuNXB4IDI2LjVweCAtMy40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjIzKSxcbiAgICAgICAgMzMuOHB4IDMwcHggNDAuN3B4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjE4KTtcblxuICAgIC0tY2Fyb3VzZWwtZmFjdG9yOiAwO1xuICAgIC0tY2Fyb3VzZWwteDogY2FsYygxMDAlICogKHZhcigtLWNhcm91c2VsLWZhY3RvcikpKTtcblxufVxuXG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCAxZnIgMzVweCAvIDFmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggdmFyKC0tcHJpbWFyeS1kYXJrZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmtlcik7XG59XG5cbi5naC1sb2dvLWxpbmssXG5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xufVxuXG4uZ2gtbG9nby1saW5rLFxuLmdoLWxvZ28ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAyMHB4O1xufVxuXG4uZ2gtbG9nbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLmdoLW5hbWUge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xufVxuXG4uZ2gtbmFtZS1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICAgIHotaW5kZXg6IDQ7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuXG4ubWFpbi1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZyYW1lIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuLndpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tY2Fyb3VzZWwteCkpO1xufVxuXG5cbi53aWRlPmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmNvbnRyb2xzIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB6LWluZGV4OiA1O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cblxuLmNpcmNsZXMge1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLmNpcmNsZXM+c3BhbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmxlZnQtYXJyb3csXG4ucmlnaHQtYXJyb3cge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOm5vdCgucmFkaW8taGlkZGVuKSxcbi5sZWZ0LWFycm93LFxuLnJpZ2h0LWFycm93IHtcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDklKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSgzMTZkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAxJSkgb3BhY2l0eSg0MCUpO1xufVxuXG4ucmFkaW8taGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmxlZnQtYXJyb3c6aG92ZXIsXG4ucmlnaHQtYXJyb3c6aG92ZXIsXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpub3QoLnJhZGlvLWhpZGRlbik6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGludmVydCg5MyUpIHNlcGlhKDklKSBzYXR1cmF0ZSgxJSkgaHVlLXJvdGF0ZSgzMTZkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAxJSkgb3BhY2l0eSg3MCUpO1xuICAgIFxufVxuXG4uY2lyY2xlczpob3ZlciB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0tBTUs7OztBQUdMLGdDQUFnQztBQUNoQztJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwyQkFBMkI7O0lBRTNCLHFFQUFxRTtJQUNyRSw4REFBOEQ7SUFDOUQsbUVBQW1FO0lBQ25FLDREQUE0RDtJQUM1RCxpRUFBaUU7SUFDakUsb0VBQW9FO0lBQ3BFLDJEQUEyRDtJQUMzRCx1REFBdUQ7OztJQUd2RCwyQkFBMkI7SUFDM0I7Ozs4REFHMEQ7SUFDMUQ7Ozs7OERBSTBEO0lBQzFEOzs7Ozs7OzsrREFRMkQ7O0lBRTNELG9CQUFvQjtJQUNwQixtREFBbUQ7O0FBRXZEOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFNBQVM7SUFDVCxtSkFBbUo7SUFDbkosZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksZ0RBQWdEO0lBQ2hELGtCQUFrQjtBQUN0Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3Q0FBd0M7QUFDNUM7OztBQUdBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTs7SUFFSSxXQUFXO0FBQ2Y7OztBQUdBOzs7SUFHSSwwR0FBMEc7QUFDOUc7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksZUFBZTtJQUNmLDBHQUEwRzs7QUFFOUc7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIDpyb290W2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxuICAgIC0tdGV4dDogI2EzYTFhZjtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYwZjBkO1xcbiAgICAtLXByaW1hcnk6ICM5NzI2NGY7XFxuICAgIC0tc2Vjb25kYXJ5OiAjNDE0MDU0O1xcbiAgICAtLWFjY2VudDogIzQ0Nzk3MTtcXG4gIH0gKi9cXG5cXG5cXG4vKiA6cm9vdFtkYXRhLXRoZW1lPVxcXCJsaWdodFxcXCJdIHsgKi9cXG46cm9vdCB7XFxuICAgIC0tdGV4dDogIzMyMzIzMjtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTREREREO1xcbiAgICAtLXByaW1hcnk6ICNBN0FDQjI7XFxuICAgIC0tc2Vjb25kYXJ5OiAjOEI4QThCO1xcbiAgICAtLWFjY2VudDogcmdiKDE5MywgOTgsIDEyOSk7XFxuXFxuICAgIC0tcHJpbWFyeS1saXR0bGUtbGlnaHRlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCArIDAuMDUpKTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjE0KSk7XFxuICAgIC0tcHJpbWFyeS1ldmVuLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjIzKSk7XFxuICAgIC0tcHJpbWFyeS1kYXJrZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgLSAwLjEpKTtcXG4gICAgLS1wcmltYXJ5LWV2ZW4tZGFya2VyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsIC0gMC4yKSk7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1iYWNrZ3JvdW5kKSBoIHMgY2FsYyhsICsgMC4wOCkpO1xcbiAgICAtLWFjY2VudC1kYXJrZXI6IGhzbChmcm9tIHZhcigtLWFjY2VudCkgaCBzIGNhbGMobCAtIDAuMDUpKTtcXG4gICAgLS10ZXh0LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXRleHQpIGggcyBjYWxjKGwgKyAwLjIpKTtcXG5cXG5cXG4gICAgLS1zaGFkb3ctY29sb3I6IDBkZWcgNSUgNTYlO1xcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OlxcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjU0KSxcXG4gICAgICAgIDAuNXB4IDAuNXB4IDAuNnB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQpLFxcbiAgICAgICAgMS40cHggMS4ycHggMS43cHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjcpO1xcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtOlxcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjU3KSxcXG4gICAgICAgIDAuOHB4IDAuN3B4IDFweCAtMS4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQ2KSxcXG4gICAgICAgIDIuNXB4IDIuMnB4IDNweCAtMi43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjM1KSxcXG4gICAgICAgIDYuOHB4IDYuMXB4IDguMnB4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI1KTtcXG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWhpZ2g6XFxuICAgICAgICAwLjNweCAwLjNweCAwLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNTMpLFxcbiAgICAgICAgMS4xcHggMC45cHggMS4zcHggLTAuNnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40OCksXFxuICAgICAgICAyLjFweCAxLjlweCAyLjVweCAtMS4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQzKSxcXG4gICAgICAgIDQuMnB4IDMuN3B4IDVweCAtMS43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjM4KSxcXG4gICAgICAgIDcuOHB4IDYuOXB4IDkuNHB4IC0yLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzMpLFxcbiAgICAgICAgMTMuNXB4IDEycHggMTYuM3B4IC0yLjlweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjgpLFxcbiAgICAgICAgMjJweCAxOS41cHggMjYuNXB4IC0zLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjMpLFxcbiAgICAgICAgMzMuOHB4IDMwcHggNDAuN3B4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjE4KTtcXG5cXG4gICAgLS1jYXJvdXNlbC1mYWN0b3I6IDA7XFxuICAgIC0tY2Fyb3VzZWwteDogY2FsYygxMDAlICogKHZhcigtLWNhcm91c2VsLWZhY3RvcikpKTtcXG5cXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIDM1cHggLyAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHZhcigtLXByaW1hcnktZGFya2VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xcbn1cXG5cXG4uZ2gtbG9nby1saW5rLFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2gtbG9nby1saW5rLFxcbi5naC1sb2dvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uZ2gtbG9nbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5naC1uYW1lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxufVxcblxcbi5naC1uYW1lLWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcblxcbi5tYWluLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbn1cXG5cXG4ud2lkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tY2Fyb3VzZWwteCkpO1xcbn1cXG5cXG5cXG4ud2lkZT5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLmNvbnRyb2xzIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcblxcbi5jaXJjbGVzIHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uY2lyY2xlcz5zcGFuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5sZWZ0LWFycm93LFxcbi5yaWdodC1hcnJvdyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpub3QoLnJhZGlvLWhpZGRlbiksXFxuLmxlZnQtYXJyb3csXFxuLnJpZ2h0LWFycm93IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSg5JSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpIG9wYWNpdHkoNDAlKTtcXG59XFxuXFxuLnJhZGlvLWhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5sZWZ0LWFycm93OmhvdmVyLFxcbi5yaWdodC1hcnJvdzpob3ZlcixcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpub3QoLnJhZGlvLWhpZGRlbik6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkzJSkgc2VwaWEoOSUpIHNhdHVyYXRlKDElKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDElKSBvcGFjaXR5KDcwJSk7XFxuICAgIFxcbn1cXG5cXG4uY2lyY2xlczpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltYWdlcy9taXNhdG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvdGFua3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvY3Jvc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9pY29ucy9sZWZ0X2Fycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvaWNvbnMvcmlnaHRfYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiL3NyYy9pY29ucy9naXRodWJfbWFyay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCJcXG4gICAgICAgIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDI0LDQwMCwwLDBcXFwiIC8+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcblxcbiAgICA8aGVhZGVyPlxcbiAgICAgICAgPG5hdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5NZW51XFxuICAgICAgICAgICAgICAgIDx1bCBoaWRkZW4+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbSAxPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtIDI8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW0gMzwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+TWVudVxcbiAgICAgICAgICAgICAgICA8dWwgaGlkZGVuPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW0gMTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbSAyPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtIDM8L2xpPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9uYXY+XFxuXFxuXFxuXFxuXFxuICAgIDwvaGVhZGVyPlxcblxcblxcblxcblxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYWluLWFyZWFcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnJhbWVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBjbGFzcz1cXFwibGVmdC1hcnJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNpcmNsZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgdW5jaGVja2VkXFxcIiBwb3NpdGlvbj1cXFwiMVxcXCI+cmFkaW9fYnV0dG9uX3VuY2hlY2tlZDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGNoZWNrZWQgcmFkaW8taGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVxcXCIxXFxcIj5yYWRpb19idXR0b25fY2hlY2tlZDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHVuY2hlY2tlZFxcXCIgcG9zaXRpb249XFxcIjJcXFwiPnJhZGlvX2J1dHRvbl91bmNoZWNrZWQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBjaGVja2VkIHJhZGlvLWhpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cXFwiMlxcXCI+cmFkaW9fYnV0dG9uX2NoZWNrZWQ8L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB1bmNoZWNrZWRcXFwiIHBvc2l0aW9uPVxcXCIzXFxcIj5yYWRpb19idXR0b25fdW5jaGVja2VkPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgY2hlY2tlZCByYWRpby1oaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XFxcIjNcXFwiPnJhZGlvX2J1dHRvbl9jaGVja2VkPC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBjbGFzcz1cXFwicmlnaHQtYXJyb3dcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcblxcblxcblxcblxcblxcbiAgICA8Zm9vdGVyPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImdoLWxvZ28tbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL1ZlY2NoaVIvVWktZWxlbWVudC1leGVyY2lzZVxcXCI+PGltZyBjbGFzcz1cXFwiZ2gtbG9nb1xcXCJcXG4gICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCI+PC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2gtbmFtZVxcXCI+PGEgY2xhc3M9XFxcImdoLW5hbWUtbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL1ZlY2NoaVJcXFwiPlZlY2NoaVI8L2E+IMKpIDIwMjQ8L2Rpdj5cXG4gICAgPC9mb290ZXI+XFxuXFxuXFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbGFycm93ICBmcm9tIFwiLi9pY29ucy9sZWZ0X2Fycm93LnN2Z1wiO1xuaW1wb3J0IHJhcnJvdyBmcm9tIFwiLi9pY29ucy9yaWdodF9hcnJvdy5zdmdcIjtcbmltcG9ydCBnaCBmcm9tIFwiLi9pY29ucy9naXRodWJfbWFyay5zdmdcIjtcbmltcG9ydCB0YW5rcyBmcm9tIFwiLi9pbWFnZXMvdGFua3MucG5nXCI7XG5pbXBvcnQgbWlzYXRvIGZyb20gXCIuL2ltYWdlcy9taXNhdG8ucG5nXCI7XG5pbXBvcnQgY3Jvc3MgZnJvbSBcIi4vaW1hZ2VzL2Nyb3NzLnBuZ1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xuXG5cbmNvbnN0IGRyb3BNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW1lbnUnKTtcbmRyb3BNZW51LmZvckVhY2goKHgpID0+XG4gICAgeC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICB4LnF1ZXJ5U2VsZWN0b3IoJzpmaXJzdC1jaGlsZCcpLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfSlcbik7XG5kcm9wTWVudS5mb3JFYWNoKCh4KSA9PlxuICAgIHguYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgeC5xdWVyeVNlbGVjdG9yKCc6Zmlyc3QtY2hpbGQnKS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgIH0pXG4pO1xuXG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gY29udHJvbHMucXVlcnlTZWxlY3RvcignLmxlZnQtYXJyb3cnKSkge1xuICAgICAgICBzbGlkZUNhcm91c2VsKCdsZWZ0Jyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gY29udHJvbHMucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFycm93JykpIHtcbiAgICAgICAgc2xpZGVDYXJvdXNlbCgpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGVzPltwb3NpdGlvbj1cIjFcIl0nKSkge1xuICAgICAgICBzbGlkZUNhcm91c2VsKGZhbHNlLCAxKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlcz5bcG9zaXRpb249XCIyXCJdJykpIHtcbiAgICAgICAgc2xpZGVDYXJvdXNlbChmYWxzZSwgMCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gY29udHJvbHMucXVlcnlTZWxlY3RvcignLmNpcmNsZXM+W3Bvc2l0aW9uPVwiM1wiXScpKSB7XG4gICAgICAgIHNsaWRlQ2Fyb3VzZWwoZmFsc2UsIC0xKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc2xpZGVDYXJvdXNlbChkaXJlY3Rpb24sIHNldEZhY3Rvcikge1xuICAgIGNvbnN0IGFjdHVhbEZhY3RvciA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jYXJvdXNlbC1mYWN0b3InKSk7XG4gICAgbGV0IG5ld0ZhY3RvciA9IGFjdHVhbEZhY3RvcjtcbiAgICBpZiAoc2V0RmFjdG9yID49IC0xICYmIHNldEZhY3RvciA8PSAxKSB7XG4gICAgICAgIG5ld0ZhY3RvciA9IHNldEZhY3RvcjtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNhcm91c2VsLWZhY3RvcicsIHBhcnNlSW50KG5ld0ZhY3RvcikpO1xuICAgICAgICB1cGRDYXJvdXNlbENpcmNsZXMobmV3RmFjdG9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGlmIChhY3R1YWxGYWN0b3IgPT09IDEpIHsgbmV3RmFjdG9yICo9IC0yOyB9XG4gICAgICAgIG5ld0ZhY3RvciArPSAxO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2Fyb3VzZWwtZmFjdG9yJywgbmV3RmFjdG9yKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGFjdHVhbEZhY3RvciA9PT0gLTEpIHsgbmV3RmFjdG9yICo9IC0yOyB9XG4gICAgICAgIG5ld0ZhY3RvciAtPSAxO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2Fyb3VzZWwtZmFjdG9yJywgbmV3RmFjdG9yKTtcbiAgICB9XG5cbiAgICB1cGRDYXJvdXNlbENpcmNsZXMobmV3RmFjdG9yKTtcbn1cblxuZnVuY3Rpb24gdXBkQ2Fyb3VzZWxDaXJjbGVzKGZhY3Rvcikge1xuICAgIGlmIChmYWN0b3IgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tlZDpub3QoLnJhZGlvLWhpZGRlbilcIikuY2xhc3NMaXN0LmFkZCgncmFkaW8taGlkZGVuJyk7XG4gICAgICAgIGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoXCIudW5jaGVja2VkLnJhZGlvLWhpZGRlblwiKS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRpby1oaWRkZW4nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmFjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmFjdG9yID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNhcm91c2VsLWZhY3RvcicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IDIgLSBmYWN0b3I7XG5cbiAgICBjb250cm9scy5xdWVyeVNlbGVjdG9yKGAudW5jaGVja2VkW3Bvc2l0aW9uPScke3Bvc2l0aW9ufSddYCkuY2xhc3NMaXN0LmFkZCgncmFkaW8taGlkZGVuJyk7XG4gICAgY29udHJvbHMucXVlcnlTZWxlY3RvcihgLmNoZWNrZWRbcG9zaXRpb249JyR7cG9zaXRpb259J11gKS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRpby1oaWRkZW4nKTtcblxuXG59XG5cbnVwZENhcm91c2VsQ2lyY2xlcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==