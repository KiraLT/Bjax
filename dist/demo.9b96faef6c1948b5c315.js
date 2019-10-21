/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/loaders/percent/styles.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/loaders/percent/styles.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".bjax-backdrop {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1050;\\n  opacity: 0.8;\\n  filter: alpha(opacity=80);\\n  background-color: #fff;\\n  color: #788188; }\\n\\n.bjax-bar {\\n  border-top: 1px solid #eaeef1;\\n  border-width: 2px;\\n  border-color: #60bed1; }\\n\\n.bjax-bar-error {\\n  border-color: #d9534f; }\\n\\n.bjax-backdrop-error {\\n  display: block;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  font-family: \\\"Source Sans Pro\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: 16px;\\n  color: #788188;\\n  text-align: center; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/loaders/percent/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/*! exports provided: find, findAll, matches, parents, liveBind, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAll\", function() { return findAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matches\", function() { return matches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parents\", function() { return parents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liveBind\", function() { return liveBind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nfunction find(target) {\n    if (target instanceof Element) {\n        return target;\n    }\n    if (target instanceof Array) {\n        return target[0] || undefined;\n    }\n    if (target instanceof NodeList) {\n        return target[0] || undefined;\n    }\n    if (typeof target === 'string') {\n        try {\n            return document.querySelector(target) || undefined;\n        }\n        catch (error) {\n            console.error(error);\n        }\n    }\n    return undefined;\n}\nfunction findAll(target) {\n    if (target instanceof Element) {\n        return [target];\n    }\n    if (target instanceof Array) {\n        return target;\n    }\n    if (target instanceof NodeList) {\n        return Array.prototype.slice.call(target);\n    }\n    if (typeof target === 'string') {\n        try {\n            return Array.prototype.slice.call(document.querySelectorAll(target));\n        }\n        catch (error) {\n            console.error(error);\n        }\n    }\n    return [];\n}\nfunction matches(target, selector) {\n    var matchesFunc = Element.prototype.matches ||\n        Element.prototype.msMatchesSelector ||\n        Element.prototype.webkitMatchesSelector;\n    return findAll(target).some(function (element) { return matchesFunc.call(element, selector); });\n}\nfunction parents(target, selector) {\n    var parentList = [];\n    findAll(target).forEach(function (element) {\n        var parent = element.parentNode;\n        if (parent !== document && parent instanceof Element) {\n            parentList.push(parent);\n            parentList = parentList.concat(parents(parent));\n        }\n    });\n    return parentList.filter(function (element) { return selector === undefined || matches(element, selector); });\n}\nfunction liveBind(target, eventName, callback) {\n    window.addEventListener(eventName, function (event) {\n        var eventTarget = event.target;\n        if (eventTarget instanceof HTMLElement) {\n            var el = __spreadArrays([eventTarget], parents(eventTarget)).find(function (v) {\n                return typeof target === 'string' ? matches(v, target) : target === v;\n            });\n            if (el instanceof HTMLElement) {\n                callback(event, el);\n            }\n        }\n    });\n}\nfunction create(html) {\n    var div = document.createElement('div');\n    div.innerHTML = html.trim();\n    var firstChild = div.firstChild;\n    if (firstChild) {\n        div.removeChild(firstChild);\n        return firstChild;\n    }\n    return undefined;\n}\n\n\n//# sourceURL=webpack:///./src/dom.ts?");

/***/ }),

/***/ "./src/entries/demo.ts":
/*!*****************************!*\
  !*** ./src/entries/demo.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ \"./src/dom.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _loaders_percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loaders/percent */ \"./src/loaders/percent/index.ts\");\n/* harmony import */ var _loaders_percent_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loaders/percent/styles.scss */ \"./src/loaders/percent/styles.scss\");\n/* harmony import */ var _loaders_percent_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loaders_percent_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"liveBind\"])('[data-bjax]', 'click', function (event, element) {\n        if (element instanceof HTMLAnchorElement) {\n            Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"loadLink\"])({\n                url: element.href,\n                source: '#main',\n                target: '#main',\n                loader: new _loaders_percent__WEBPACK_IMPORTED_MODULE_2__[\"PercentLoader\"]()\n            });\n            event.preventDefault();\n        }\n    });\n});\n\n\n\n//# sourceURL=webpack:///./src/entries/demo.ts?");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: request, loadLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadLink\", function() { return loadLink; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n\nfunction request(params, success, error) {\n    var request = new XMLHttpRequest();\n    request.open('GET', params.url, true);\n    request.send(null);\n    request.onreadystatechange = function () {\n        if (request.readyState == 4 && request.status == 200)\n            success(request.responseText);\n    };\n}\nfunction loadLink(_a) {\n    var url = _a.url, target = _a.target, source = _a.source, successCallback = _a.successCallback, errorCallback = _a.errorCallback, updateUrl = _a.updateUrl, loader = _a.loader;\n    var targetElement = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"find\"])(target || 'body');\n    if (targetElement instanceof HTMLElement) {\n        if (loader) {\n            loader.start({\n                target: targetElement\n            });\n        }\n        request({ url: url }, function (content) {\n            var html = document.createElement('html');\n            html.innerHTML = content;\n            var sourceElement = html.querySelector(source || 'body');\n            var titleElement = html.querySelector('title');\n            var title = titleElement ? titleElement.innerHTML : document.title;\n            // if (sourceElement instanceof HTMLElement) {\n            //     targetElement.innerHTML = sourceElement.innerHTML\n            // }\n            // if (updateUrl !== false) {\n            //     try {\n            //         history.pushState(null, title, url)\n            //         document.title = title\n            //     } catch (error) {\n            //         console.warn(`Failed to update URL: ${error}`)\n            //     }\n            // }\n            if (loader) {\n                loader.finish({\n                    target: targetElement\n                });\n            }\n            if (successCallback) {\n                successCallback();\n            }\n        }, function () {\n            if (errorCallback) {\n                if (loader) {\n                    loader.error({\n                        target: targetElement\n                    });\n                }\n                errorCallback();\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/helpers.ts?");

/***/ }),

/***/ "./src/loaders/index.ts":
/*!******************************!*\
  !*** ./src/loaders/index.ts ***!
  \******************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return Loader; });\nvar Loader = /** @class */ (function () {\n    function Loader() {\n    }\n    return Loader;\n}());\n\n\n\n//# sourceURL=webpack:///./src/loaders/index.ts?");

/***/ }),

/***/ "./src/loaders/percent/index.ts":
/*!**************************************!*\
  !*** ./src/loaders/percent/index.ts ***!
  \**************************************/
/*! exports provided: PercentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PercentLoader\", function() { return PercentLoader; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./src/loaders/index.ts\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom */ \"./src/dom.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar PercentLoader = /** @class */ (function (_super) {\n    __extends(PercentLoader, _super);\n    function PercentLoader() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PercentLoader.prototype.start = function (_a) {\n        var target = _a.target;\n        var element = (function () {\n            var el = target.querySelector('#bjax-loader');\n            if (el instanceof HTMLElement) {\n                return el;\n            }\n            var newEl = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"create\"])(\"\\n                <div class=\\\"bjax-backdrop\\\" id=\\\"bjax-loader\\\">\\n                    <div class=\\\"bjax-bar\\\"></div>\\n                    <div class=\\\"bjax-backdrop-error\\\"></div>\\n                </div>\\n            \");\n            target.appendChild(newEl);\n            return newEl;\n        })();\n        element.style.width = '0px';\n        target.style.position = 'relative';\n    };\n    PercentLoader.prototype.finish = function () {\n    };\n    PercentLoader.prototype.error = function () {\n    };\n    return PercentLoader;\n}(___WEBPACK_IMPORTED_MODULE_0__[\"Loader\"]));\n\n\n\n//# sourceURL=webpack:///./src/loaders/percent/index.ts?");

/***/ }),

/***/ "./src/loaders/percent/styles.scss":
/*!*****************************************!*\
  !*** ./src/loaders/percent/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/loaders/percent/styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/loaders/percent/styles.scss?");

/***/ })

/******/ });