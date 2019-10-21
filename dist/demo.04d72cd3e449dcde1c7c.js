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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ \"./src/dom.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _loaders_percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loaders/percent */ \"./src/loaders/percent/index.ts\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"liveBind\"])('[data-bjax]', 'click', function (event, element) {\n        if (element instanceof HTMLAnchorElement) {\n            Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"loadLink\"])({\n                url: element.href,\n                source: '#main',\n                target: '#main',\n                loader: new _loaders_percent__WEBPACK_IMPORTED_MODULE_2__[\"PercentLoader\"]()\n            });\n            event.preventDefault();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./src/entries/demo.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PercentLoader\", function() { return PercentLoader; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./src/loaders/index.ts\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom */ \"./src/dom.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/loaders/percent/styles.scss\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar PercentLoader = /** @class */ (function (_super) {\n    __extends(PercentLoader, _super);\n    function PercentLoader() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PercentLoader.prototype.start = function (_a) {\n        var target = _a.target;\n        var element = (function () {\n            var el = target.querySelector('#bjax-loader');\n            if (el instanceof HTMLElement) {\n                return el;\n            }\n            var newEl = Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"create\"])(\"\\n                <div class=\\\"bjax-backdrop\\\" id=\\\"bjax-loader\\\">\\n                    <div class=\\\"bjax-bar\\\"></div>\\n                    <div class=\\\"bjax-backdrop-error\\\"></div>\\n                </div>\\n            \");\n            target.appendChild(newEl);\n            return newEl;\n        })();\n        element.style.width = '0px';\n        target.style.position = 'relative';\n    };\n    PercentLoader.prototype.finish = function () {\n    };\n    PercentLoader.prototype.error = function () {\n    };\n    return PercentLoader;\n}(___WEBPACK_IMPORTED_MODULE_0__[\"Loader\"]));\n\n\n\n//# sourceURL=webpack:///./src/loaders/percent/index.ts?");

/***/ }),

/***/ "./src/loaders/percent/styles.scss":
/*!*****************************************!*\
  !*** ./src/loaders/percent/styles.scss ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../helpers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../loaders/percent'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-bjax]', 'click', function (event, element) {\n        if (element instanceof HTMLAnchorElement) {\n            !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../helpers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n                url: element.href,\n                source: '#main',\n                target: '#main',\n                loader: new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../loaders/percent'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n            });\n            event.preventDefault();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./src/loaders/percent/styles.scss?");

/***/ })

/******/ });