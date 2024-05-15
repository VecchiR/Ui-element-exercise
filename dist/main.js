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


.left-arrow,
.right-arrow {
    width: 60px;
}


.controls>* {
    filter: invert(93%) sepia(9%) saturate(1%) hue-rotate(316deg) brightness(106%) contrast(101%) opacity(65%);
}

.circles>img:first-child {
    fill: aqua;
}





/* * {
    border: 1px solid red;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;KAMK;;;AAGL,gCAAgC;AAChC;IACI,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,2BAA2B;;IAE3B,qEAAqE;IACrE,8DAA8D;IAC9D,mEAAmE;IACnE,4DAA4D;IAC5D,iEAAiE;IACjE,oEAAoE;IACpE,2DAA2D;IAC3D,uDAAuD;;;IAGvD,2BAA2B;IAC3B;;;8DAG0D;IAC1D;;;;8DAI0D;IAC1D;;;;;;;;+DAQ2D;;IAE3D,oBAAoB;IACpB,mDAAmD;;AAEvD;;;AAGA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,SAAS;IACT,mJAAmJ;IACnJ,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,UAAU;AACV;IACI,UAAU;AACd;;AAEA,UAAU;AACV;IACI,gDAAgD;IAChD,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA,oBAAoB;AACpB;IACI,gCAAgC;AACpC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wCAAwC;AAC5C;;;AAGA;IACI,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;IACV,mBAAmB;IACnB,YAAY;;AAEhB;;;AAGA;IACI,eAAe;AACnB;;;AAGA;;IAEI,WAAW;AACf;;;AAGA;IACI,0GAA0G;AAC9G;;AAEA;IACI,UAAU;AACd;;;;;;AAMA;;GAEG","sourcesContent":["/* :root[data-theme=\"dark\"] {\n    --text: #a3a1af;\n    --background: #160f0d;\n    --primary: #97264f;\n    --secondary: #414054;\n    --accent: #447971;\n  } */\n\n\n/* :root[data-theme=\"light\"] { */\n:root {\n    --text: #323232;\n    --background: #E4DDDD;\n    --primary: #A7ACB2;\n    --secondary: #8B8A8B;\n    --accent: rgb(193, 98, 129);\n\n    --primary-little-lighter: hsl(from var(--primary) h s calc(l + 0.05));\n    --primary-lighter: hsl(from var(--primary) h s calc(l + 0.14));\n    --primary-even-lighter: hsl(from var(--primary) h s calc(l + 0.23));\n    --primary-darker: hsl(from var(--primary) h s calc(l - 0.1));\n    --primary-even-darker: hsl(from var(--primary) h s calc(l - 0.2));\n    --background-lighter: hsl(from var(--background) h s calc(l + 0.08));\n    --accent-darker: hsl(from var(--accent) h s calc(l - 0.05));\n    --text-lighter: hsl(from var(--text) h s calc(l + 0.2));\n\n\n    --shadow-color: 0deg 5% 56%;\n    --shadow-elevation-low:\n        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.54),\n        0.5px 0.5px 0.6px -2px hsl(var(--shadow-color) / 0.4),\n        1.4px 1.2px 1.7px -4px hsl(var(--shadow-color) / 0.27);\n    --shadow-elevation-medium:\n        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.57),\n        0.8px 0.7px 1px -1.3px hsl(var(--shadow-color) / 0.46),\n        2.5px 2.2px 3px -2.7px hsl(var(--shadow-color) / 0.35),\n        6.8px 6.1px 8.2px -4px hsl(var(--shadow-color) / 0.25);\n    --shadow-elevation-high:\n        0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.53),\n        1.1px 0.9px 1.3px -0.6px hsl(var(--shadow-color) / 0.48),\n        2.1px 1.9px 2.5px -1.1px hsl(var(--shadow-color) / 0.43),\n        4.2px 3.7px 5px -1.7px hsl(var(--shadow-color) / 0.38),\n        7.8px 6.9px 9.4px -2.3px hsl(var(--shadow-color) / 0.33),\n        13.5px 12px 16.3px -2.9px hsl(var(--shadow-color) / 0.28),\n        22px 19.5px 26.5px -3.4px hsl(var(--shadow-color) / 0.23),\n        33.8px 30px 40.7px -4px hsl(var(--shadow-color) / 0.18);\n\n    --carousel-factor: 0;\n    --carousel-x: calc(100% * (var(--carousel-factor)));\n\n}\n\n\nbody {\n    display: grid;\n    grid-template: 40px 1fr 35px / 1fr;\n    height: 100vh;\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 400;\n    color: var(--text);\n    font-size: 20px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 10px var(--primary-darker);\n    border-radius: 4px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: var(--accent);\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: var(--accent-darker);\n}\n\n.gh-logo-link,\nfooter {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    column-gap: 10px;\n}\n\n.gh-logo-link,\n.gh-logo {\n    border-radius: 100%;\n    max-width: 20px;\n}\n\n.gh-logo:hover {\n    background-color: var(--accent);\n}\n\n.gh-name {\n    text-decoration-line: none;\n}\n\n.gh-name-link:hover {\n    color: var(--accent);\n    text-decoration: underline;\n}\n\na {\n    text-decoration: none;\n    color: var(--text);\n}\n\n\nnav {\n    display: flex;\n    place-content: center;\n    z-index: 2;\n}\n\n\n.main-area {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.frame {\n    overflow: hidden;\n    width: 800px;\n    position: relative;\n\n}\n\n.wide {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    transform: translateX(var(--carousel-x));\n}\n\n\n.wide>img {\n    width: 100%;\n}\n\n\n.controls {\n    width: 800px;\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-items: center;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-between;\n    z-index: 5;\n    align-items: center;\n    height: 100%;\n\n}\n\n\n.circles {\n    align-self: end;\n}\n\n\n.left-arrow,\n.right-arrow {\n    width: 60px;\n}\n\n\n.controls>* {\n    filter: invert(93%) sepia(9%) saturate(1%) hue-rotate(316deg) brightness(106%) contrast(101%) opacity(65%);\n}\n\n.circles>img:first-child {\n    fill: aqua;\n}\n\n\n\n\n\n/* * {\n    border: 1px solid red;\n} */"],"sourceRoot":""}]);
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
  let actualFactor = parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--carousel-factor')
  );

  if (setFactor >= -1 && setFactor <= 1) {
    document.documentElement.style.setProperty(
      '--carousel-factor',
      parseInt(setFactor)
    );
    return;
  } else if (direction === 'left') {
    if (actualFactor === 1) {
      actualFactor *= -2;
    }
    document.documentElement.style.setProperty(
      '--carousel-factor',
      actualFactor + 1
    );
  } else {
    if (actualFactor === -1) {
      actualFactor *= -2;
    }
    document.documentElement.style.setProperty(
      '--carousel-factor',
      actualFactor - 1
    );
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91aS1lbGVtZW50LWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdWktZWxlbWVudC1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3VpLWVsZW1lbnQtZXhlcmNpc2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIDpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXRleHQ6ICNhM2ExYWY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYwZjBkO1xuICAgIC0tcHJpbWFyeTogIzk3MjY0ZjtcbiAgICAtLXNlY29uZGFyeTogIzQxNDA1NDtcbiAgICAtLWFjY2VudDogIzQ0Nzk3MTtcbiAgfSAqL1xuXG5cbi8qIDpyb290W2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7ICovXG46cm9vdCB7XG4gICAgLS10ZXh0OiAjMzIzMjMyO1xuICAgIC0tYmFja2dyb3VuZDogI0U0RERERDtcbiAgICAtLXByaW1hcnk6ICNBN0FDQjI7XG4gICAgLS1zZWNvbmRhcnk6ICM4QjhBOEI7XG4gICAgLS1hY2NlbnQ6IHJnYigxOTMsIDk4LCAxMjkpO1xuXG4gICAgLS1wcmltYXJ5LWxpdHRsZS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4wNSkpO1xuICAgIC0tcHJpbWFyeS1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsICsgMC4xNCkpO1xuICAgIC0tcHJpbWFyeS1ldmVuLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjIzKSk7XG4gICAgLS1wcmltYXJ5LWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMSkpO1xuICAgIC0tcHJpbWFyeS1ldmVuLWRhcmtlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCAtIDAuMikpO1xuICAgIC0tYmFja2dyb3VuZC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1iYWNrZ3JvdW5kKSBoIHMgY2FsYyhsICsgMC4wOCkpO1xuICAgIC0tYWNjZW50LWRhcmtlcjogaHNsKGZyb20gdmFyKC0tYWNjZW50KSBoIHMgY2FsYyhsIC0gMC4wNSkpO1xuICAgIC0tdGV4dC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS10ZXh0KSBoIHMgY2FsYyhsICsgMC4yKSk7XG5cblxuICAgIC0tc2hhZG93LWNvbG9yOiAwZGVnIDUlIDU2JTtcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OlxuICAgICAgICAwLjNweCAwLjNweCAwLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNTQpLFxuICAgICAgICAwLjVweCAwLjVweCAwLjZweCAtMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40KSxcbiAgICAgICAgMS40cHggMS4ycHggMS43cHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjcpO1xuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06XG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41NyksXG4gICAgICAgIDAuOHB4IDAuN3B4IDFweCAtMS4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQ2KSxcbiAgICAgICAgMi41cHggMi4ycHggM3B4IC0yLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzUpLFxuICAgICAgICA2LjhweCA2LjFweCA4LjJweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yNSk7XG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWhpZ2g6XG4gICAgICAgIDAuM3B4IDAuM3B4IDAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC41MyksXG4gICAgICAgIDEuMXB4IDAuOXB4IDEuM3B4IC0wLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNDgpLFxuICAgICAgICAyLjFweCAxLjlweCAyLjVweCAtMS4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQzKSxcbiAgICAgICAgNC4ycHggMy43cHggNXB4IC0xLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzgpLFxuICAgICAgICA3LjhweCA2LjlweCA5LjRweCAtMi4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjMzKSxcbiAgICAgICAgMTMuNXB4IDEycHggMTYuM3B4IC0yLjlweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjgpLFxuICAgICAgICAyMnB4IDE5LjVweCAyNi41cHggLTMuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4yMyksXG4gICAgICAgIDMzLjhweCAzMHB4IDQwLjdweCAtNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xOCk7XG5cbiAgICAtLWNhcm91c2VsLWZhY3RvcjogMDtcbiAgICAtLWNhcm91c2VsLXg6IGNhbGMoMTAwJSAqICh2YXIoLS1jYXJvdXNlbC1mYWN0b3IpKSk7XG5cbn1cblxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIDM1cHggLyAxZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHZhcigtLXByaW1hcnktZGFya2VyKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xufVxuXG4uZ2gtbG9nby1saW5rLFxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbn1cblxuLmdoLWxvZ28tbGluayxcbi5naC1sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLmdoLWxvZ286aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5naC1uYW1lIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbn1cblxuLmdoLW5hbWUtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5cbi5tYWluLWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZnJhbWUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG4ud2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1jYXJvdXNlbC14KSk7XG59XG5cblxuLndpZGU+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY29udHJvbHMge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuXG4uY2lyY2xlcyB7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG5cbi5sZWZ0LWFycm93LFxuLnJpZ2h0LWFycm93IHtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuXG4uY29udHJvbHM+KiB7XG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSg5JSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpIG9wYWNpdHkoNjUlKTtcbn1cblxuLmNpcmNsZXM+aW1nOmZpcnN0LWNoaWxkIHtcbiAgICBmaWxsOiBhcXVhO1xufVxuXG5cblxuXG5cbi8qICoge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztLQU1LOzs7QUFHTCxnQ0FBZ0M7QUFDaEM7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMkJBQTJCOztJQUUzQixxRUFBcUU7SUFDckUsOERBQThEO0lBQzlELG1FQUFtRTtJQUNuRSw0REFBNEQ7SUFDNUQsaUVBQWlFO0lBQ2pFLG9FQUFvRTtJQUNwRSwyREFBMkQ7SUFDM0QsdURBQXVEOzs7SUFHdkQsMkJBQTJCO0lBQzNCOzs7OERBRzBEO0lBQzFEOzs7OzhEQUkwRDtJQUMxRDs7Ozs7Ozs7K0RBUTJEOztJQUUzRCxvQkFBb0I7SUFDcEIsbURBQW1EOztBQUV2RDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUpBQW1KO0lBQ25KLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksVUFBVTtBQUNkOztBQUVBLFVBQVU7QUFDVjtJQUNJLGdEQUFnRDtJQUNoRCxrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVztBQUNYO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdDQUF3QztBQUM1Qzs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBOztJQUVJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSwwR0FBMEc7QUFDOUc7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7Ozs7OztBQU1BOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIDpyb290W2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxuICAgIC0tdGV4dDogI2EzYTFhZjtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYwZjBkO1xcbiAgICAtLXByaW1hcnk6ICM5NzI2NGY7XFxuICAgIC0tc2Vjb25kYXJ5OiAjNDE0MDU0O1xcbiAgICAtLWFjY2VudDogIzQ0Nzk3MTtcXG4gIH0gKi9cXG5cXG5cXG4vKiA6cm9vdFtkYXRhLXRoZW1lPVxcXCJsaWdodFxcXCJdIHsgKi9cXG46cm9vdCB7XFxuICAgIC0tdGV4dDogIzMyMzIzMjtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTREREREO1xcbiAgICAtLXByaW1hcnk6ICNBN0FDQjI7XFxuICAgIC0tc2Vjb25kYXJ5OiAjOEI4QThCO1xcbiAgICAtLWFjY2VudDogcmdiKDE5MywgOTgsIDEyOSk7XFxuXFxuICAgIC0tcHJpbWFyeS1saXR0bGUtbGlnaHRlcjogaHNsKGZyb20gdmFyKC0tcHJpbWFyeSkgaCBzIGNhbGMobCArIDAuMDUpKTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjE0KSk7XFxuICAgIC0tcHJpbWFyeS1ldmVuLWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgKyAwLjIzKSk7XFxuICAgIC0tcHJpbWFyeS1kYXJrZXI6IGhzbChmcm9tIHZhcigtLXByaW1hcnkpIGggcyBjYWxjKGwgLSAwLjEpKTtcXG4gICAgLS1wcmltYXJ5LWV2ZW4tZGFya2VyOiBoc2woZnJvbSB2YXIoLS1wcmltYXJ5KSBoIHMgY2FsYyhsIC0gMC4yKSk7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodGVyOiBoc2woZnJvbSB2YXIoLS1iYWNrZ3JvdW5kKSBoIHMgY2FsYyhsICsgMC4wOCkpO1xcbiAgICAtLWFjY2VudC1kYXJrZXI6IGhzbChmcm9tIHZhcigtLWFjY2VudCkgaCBzIGNhbGMobCAtIDAuMDUpKTtcXG4gICAgLS10ZXh0LWxpZ2h0ZXI6IGhzbChmcm9tIHZhcigtLXRleHQpIGggcyBjYWxjKGwgKyAwLjIpKTtcXG5cXG5cXG4gICAgLS1zaGFkb3ctY29sb3I6IDBkZWcgNSUgNTYlO1xcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OlxcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjU0KSxcXG4gICAgICAgIDAuNXB4IDAuNXB4IDAuNnB4IC0ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQpLFxcbiAgICAgICAgMS40cHggMS4ycHggMS43cHggLTRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjcpO1xcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtOlxcbiAgICAgICAgMC4zcHggMC4zcHggMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjU3KSxcXG4gICAgICAgIDAuOHB4IDAuN3B4IDFweCAtMS4zcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQ2KSxcXG4gICAgICAgIDIuNXB4IDIuMnB4IDNweCAtMi43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjM1KSxcXG4gICAgICAgIDYuOHB4IDYuMXB4IDguMnB4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjI1KTtcXG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWhpZ2g6XFxuICAgICAgICAwLjNweCAwLjNweCAwLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuNTMpLFxcbiAgICAgICAgMS4xcHggMC45cHggMS4zcHggLTAuNnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC40OCksXFxuICAgICAgICAyLjFweCAxLjlweCAyLjVweCAtMS4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjQzKSxcXG4gICAgICAgIDQuMnB4IDMuN3B4IDVweCAtMS43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjM4KSxcXG4gICAgICAgIDcuOHB4IDYuOXB4IDkuNHB4IC0yLjNweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMzMpLFxcbiAgICAgICAgMTMuNXB4IDEycHggMTYuM3B4IC0yLjlweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjgpLFxcbiAgICAgICAgMjJweCAxOS41cHggMjYuNXB4IC0zLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMjMpLFxcbiAgICAgICAgMzMuOHB4IDMwcHggNDAuN3B4IC00cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjE4KTtcXG5cXG4gICAgLS1jYXJvdXNlbC1mYWN0b3I6IDA7XFxuICAgIC0tY2Fyb3VzZWwteDogY2FsYygxMDAlICogKHZhcigtLWNhcm91c2VsLWZhY3RvcikpKTtcXG5cXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIDM1cHggLyAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHZhcigtLXByaW1hcnktZGFya2VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xcbn1cXG5cXG4uZ2gtbG9nby1saW5rLFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2gtbG9nby1saW5rLFxcbi5naC1sb2dvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uZ2gtbG9nbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5naC1uYW1lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxufVxcblxcbi5naC1uYW1lLWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG5cXG4ubWFpbi1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLndpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLWNhcm91c2VsLXgpKTtcXG59XFxuXFxuXFxuLndpZGU+aW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5jb250cm9scyB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgei1pbmRleDogNTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG5cXG4uY2lyY2xlcyB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuXFxuLmxlZnQtYXJyb3csXFxuLnJpZ2h0LWFycm93IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcblxcbi5jb250cm9scz4qIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTMlKSBzZXBpYSg5JSkgc2F0dXJhdGUoMSUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpIG9wYWNpdHkoNjUlKTtcXG59XFxuXFxuLmNpcmNsZXM+aW1nOmZpcnN0LWNoaWxkIHtcXG4gICAgZmlsbDogYXF1YTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZHJvcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tbWVudScpO1xuZHJvcE1lbnUuZm9yRWFjaCgoeCkgPT5cbiAgeC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIHgucXVlcnlTZWxlY3RvcignOmZpcnN0LWNoaWxkJykucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgfSlcbik7XG5kcm9wTWVudS5mb3JFYWNoKCh4KSA9PlxuICB4LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgeC5xdWVyeVNlbGVjdG9yKCc6Zmlyc3QtY2hpbGQnKS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICB9KVxuKTtcblxuY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcubGVmdC1hcnJvdycpKSB7XG4gICAgc2xpZGVDYXJvdXNlbCgnbGVmdCcpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKSkge1xuICAgIHNsaWRlQ2Fyb3VzZWwoKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gY29udHJvbHMucXVlcnlTZWxlY3RvcignLmNpcmNsZXM+W3Bvc2l0aW9uPVwiMVwiXScpKSB7XG4gICAgc2xpZGVDYXJvdXNlbChmYWxzZSwgMSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGVzPltwb3NpdGlvbj1cIjJcIl0nKSkge1xuICAgIHNsaWRlQ2Fyb3VzZWwoZmFsc2UsIDApO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlcz5bcG9zaXRpb249XCIzXCJdJykpIHtcbiAgICBzbGlkZUNhcm91c2VsKGZhbHNlLCAtMSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzbGlkZUNhcm91c2VsKGRpcmVjdGlvbiwgc2V0RmFjdG9yKSB7XG4gIGxldCBhY3R1YWxGYWN0b3IgPSBwYXJzZUludChcbiAgICB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLWNhcm91c2VsLWZhY3RvcicpXG4gICk7XG5cbiAgaWYgKHNldEZhY3RvciA+PSAtMSAmJiBzZXRGYWN0b3IgPD0gMSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICctLWNhcm91c2VsLWZhY3RvcicsXG4gICAgICBwYXJzZUludChzZXRGYWN0b3IpXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICBpZiAoYWN0dWFsRmFjdG9yID09PSAxKSB7XG4gICAgICBhY3R1YWxGYWN0b3IgKj0gLTI7XG4gICAgfVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICctLWNhcm91c2VsLWZhY3RvcicsXG4gICAgICBhY3R1YWxGYWN0b3IgKyAxXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoYWN0dWFsRmFjdG9yID09PSAtMSkge1xuICAgICAgYWN0dWFsRmFjdG9yICo9IC0yO1xuICAgIH1cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1jYXJvdXNlbC1mYWN0b3InLFxuICAgICAgYWN0dWFsRmFjdG9yIC0gMVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==