module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Fp/H");


/***/ }),

/***/ "Fp/H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data_weeks_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aeqG");
var _data_weeks_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("aeqG", 1);

async function handler(req, res) {
  res.statusCode = 200;
  res.json(_data_weeks_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ }),

/***/ "aeqG":
/***/ (function(module) {

module.exports = JSON.parse("{\"2020-W52\":{\"week_number\":\"Semana 52, 2020\",\"from\":\"December 21, 2020\",\"to\":\"December 27, 2020\"},\"2020-W53\":{\"week_number\":\"Semana 53, 2020\",\"from\":\"December 28, 2020\",\"to\":\"January 3, 2021\"},\"2021-W01\":{\"week_number\":\"Semana 01, 2021\",\"from\":\"January 4, 2021\",\"to\":\"January 10, 2021\"},\"2021-W02\":{\"week_number\":\"Semana 02, 2021\",\"from\":\"January 11, 2021\",\"to\":\"January 17, 2021\"},\"2021-W03\":{\"week_number\":\"Semana 03, 2021\",\"from\":\"January 18, 2021\",\"to\":\"January 24, 2021\"},\"2021-W04\":{\"week_number\":\"Semana 04, 2021\",\"from\":\"January 25, 2021\",\"to\":\"January 31, 2021\"},\"2021-W05\":{\"week_number\":\"Semana 05, 2021\",\"from\":\"February 1, 2021\",\"to\":\"February 7, 2021\"},\"2021-W06\":{\"week_number\":\"Semana 06, 2021\",\"from\":\"February 8, 2021\",\"to\":\"February 14, 2021\"},\"2021-W07\":{\"week_number\":\"Semana 07, 2021\",\"from\":\"February 15, 2021\",\"to\":\"February 21, 2021\"},\"2021-W08\":{\"week_number\":\"Semana 08, 2021\",\"from\":\"February 22, 2021\",\"to\":\"February 28, 2021\"},\"2021-W09\":{\"week_number\":\"Semana 09, 2021\",\"from\":\"March 1, 2021\",\"to\":\"March 7, 2021\"},\"2021-W10\":{\"week_number\":\"Semana 10, 2021\",\"from\":\"March 8, 2021\",\"to\":\"March 14, 2021\"},\"2021-W11\":{\"week_number\":\"Semana 11, 2021\",\"from\":\"March 15, 2021\",\"to\":\"March 21, 2021\"},\"2021-W12\":{\"week_number\":\"Semana 12, 2021\",\"from\":\"March 22, 2021\",\"to\":\"March 28, 2021\"},\"2021-W13\":{\"week_number\":\"Semana 13, 2021\",\"from\":\"March 29, 2021\",\"to\":\"April 4, 2021\"},\"2021-W14\":{\"week_number\":\"Semana 14, 2021\",\"from\":\"April 5, 2021\",\"to\":\"April 11, 2021\"},\"2021-W15\":{\"week_number\":\"Semana 15, 2021\",\"from\":\"April 12, 2021\",\"to\":\"April 18, 2021\"},\"2021-W16\":{\"week_number\":\"Semana 16, 2021\",\"from\":\"April 19, 2021\",\"to\":\"April 25, 2021\"},\"2021-W17\":{\"week_number\":\"Semana 17, 2021\",\"from\":\"April 26, 2021\",\"to\":\"May 2, 2021\"},\"2021-W18\":{\"week_number\":\"Semana 18, 2021\",\"from\":\"May 3, 2021\",\"to\":\"May 9, 2021\"},\"2021-W19\":{\"week_number\":\"Semana 19, 2021\",\"from\":\"May 10, 2021\",\"to\":\"May 16, 2021\"},\"2021-W20\":{\"week_number\":\"Semana 20, 2021\",\"from\":\"May 17, 2021\",\"to\":\"May 23, 2021\"},\"2021-W21\":{\"week_number\":\"Semana 21, 2021\",\"from\":\"May 24, 2021\",\"to\":\"May 30, 2021\"},\"2021-W22\":{\"week_number\":\"Semana 22, 2021\",\"from\":\"May 31, 2021\",\"to\":\"June 6, 2021\"},\"2021-W23\":{\"week_number\":\"Semana 23, 2021\",\"from\":\"June 7, 2021\",\"to\":\"June 13, 2021\"},\"2021-W24\":{\"week_number\":\"Semana 24, 2021\",\"from\":\"June 14, 2021\",\"to\":\"June 20, 2021\"},\"2021-W25\":{\"week_number\":\"Semana 25, 2021\",\"from\":\"June 21, 2021\",\"to\":\"June 27, 2021\"},\"2021-W26\":{\"week_number\":\"Semana 26, 2021\",\"from\":\"June 28, 2021\",\"to\":\"July 4, 2021\"},\"2021-W27\":{\"week_number\":\"Semana 27, 2021\",\"from\":\"July 5, 2021\",\"to\":\"July 11, 2021\"},\"2021-W28\":{\"week_number\":\"Semana 28, 2021\",\"from\":\"July 12, 2021\",\"to\":\"July 18, 2021\"},\"2021-W29\":{\"week_number\":\"Semana 29, 2021\",\"from\":\"July 19, 2021\",\"to\":\"July 25, 2021\"},\"2021-W30\":{\"week_number\":\"Semana 30, 2021\",\"from\":\"July 26, 2021\",\"to\":\"August 1, 2021\"},\"2021-W31\":{\"week_number\":\"Semana 31, 2021\",\"from\":\"August 2, 2021\",\"to\":\"August 8, 2021\"},\"2021-W32\":{\"week_number\":\"Semana 32, 2021\",\"from\":\"August 9, 2021\",\"to\":\"August 15, 2021\"},\"2021-W33\":{\"week_number\":\"Semana 33, 2021\",\"from\":\"August 16, 2021\",\"to\":\"August 22, 2021\"},\"2021-W34\":{\"week_number\":\"Semana 34, 2021\",\"from\":\"August 23, 2021\",\"to\":\"August 29, 2021\"},\"2021-W35\":{\"week_number\":\"Semana 35, 2021\",\"from\":\"August 30, 2021\",\"to\":\"September 5, 2021\"},\"2021-W36\":{\"week_number\":\"Semana 36, 2021\",\"from\":\"September 6, 2021\",\"to\":\"September 12, 2021\"},\"2021-W37\":{\"week_number\":\"Semana 37, 2021\",\"from\":\"September 13, 2021\",\"to\":\"September 19, 2021\"},\"2021-W38\":{\"week_number\":\"Semana 38, 2021\",\"from\":\"September 20, 2021\",\"to\":\"September 26, 2021\"},\"2021-W39\":{\"week_number\":\"Semana 39, 2021\",\"from\":\"September 27, 2021\",\"to\":\"October 3, 2021\"},\"2021-W40\":{\"week_number\":\"Semana 40, 2021\",\"from\":\"October 4, 2021\",\"to\":\"October 10, 2021\"},\"2021-W41\":{\"week_number\":\"Semana 41, 2021\",\"from\":\"October 11, 2021\",\"to\":\"October 17, 2021\"},\"2021-W42\":{\"week_number\":\"Semana 42, 2021\",\"from\":\"October 18, 2021\",\"to\":\"October 24, 2021\"},\"2021-W43\":{\"week_number\":\"Semana 43, 2021\",\"from\":\"October 25, 2021\",\"to\":\"October 31, 2021\"},\"2021-W44\":{\"week_number\":\"Semana 44, 2021\",\"from\":\"November 1, 2021\",\"to\":\"November 7, 2021\"},\"2021-W45\":{\"week_number\":\"Semana 45, 2021\",\"from\":\"November 8, 2021\",\"to\":\"November 14, 2021\"},\"2021-W46\":{\"week_number\":\"Semana 46, 2021\",\"from\":\"November 15, 2021\",\"to\":\"November 21, 2021\"},\"2021-W47\":{\"week_number\":\"Semana 47, 2021\",\"from\":\"November 22, 2021\",\"to\":\"November 28, 2021\"},\"2021-W48\":{\"week_number\":\"Semana 48, 2021\",\"from\":\"November 29, 2021\",\"to\":\"December 5, 2021\"},\"2021-W49\":{\"week_number\":\"Semana 49, 2021\",\"from\":\"December 6, 2021\",\"to\":\"December 12, 2021\"},\"2021-W50\":{\"week_number\":\"Semana 50, 2021\",\"from\":\"December 13, 2021\",\"to\":\"December 19, 2021\"},\"2021-W51\":{\"week_number\":\"Semana 51, 2021\",\"from\":\"December 20, 2021\",\"to\":\"December 26, 2021\"},\"2021-W52\":{\"week_number\":\"Semana 52, 2021\",\"from\":\"December 27, 2021\",\"to\":\"January 2, 2022\"},\"2022-W01\":{\"week_number\":\"Semana 01, 2022\",\"from\":\"January 3, 2022\",\"to\":\"January 9, 2022\"}}");

/***/ })

/******/ });