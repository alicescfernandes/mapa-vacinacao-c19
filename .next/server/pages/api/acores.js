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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("P9vZ");


/***/ }),

/***/ "4cS4":
/***/ (function(module) {

module.exports = JSON.parse("[{\"data\":\"2020-03-17\",\"total\":35825,\"dose_1\":23431,\"dose_2\":12394,\"semana\":\"2021-W12\",\"relatorio\":\"https://web.archive.org/web/20210320205729/https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":744,\"dose_2\":744,\"total\":1488},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":11318,\"dose_2\":4776,\"total\":16094},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":5398,\"dose_2\":3024,\"total\":8422},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":530,\"dose_2\":420,\"total\":950},\"sao_jorge\":{\"nome\":\"Machico\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":702,\"total\":2090},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":1601,\"dose_2\":1266,\"total\":2867},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":1364,\"dose_2\":834,\"total\":2198},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":766,\"dose_2\":306,\"total\":1072},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"dose_1\":322,\"dose_2\":322,\"total\":644}}},{\"data\":\"2020-03-21\",\"total\":37687,\"dose_1\":24591,\"dose_2\":13096,\"semana\":\"2021-W12\",\"relatorio\":\"https://portal.azores.gov.pt/documents/36169/97cc99c5-2a16-d831-68d2-610c8dd72e0b\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1121,\"dose_2\":750,\"total\":1871},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":11324,\"dose_2\":5472,\"total\":16796},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":5398,\"dose_2\":3024,\"total\":8422},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":530,\"dose_2\":420,\"total\":950},\"sao_jorge\":{\"nome\":\"Machico\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":702,\"total\":2090},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":2378,\"dose_2\":1266,\"total\":3644},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":1364,\"dose_2\":834,\"total\":2198},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":766,\"dose_2\":306,\"total\":1072},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"dose_1\":322,\"dose_2\":322,\"total\":644}}},{\"data\":\"2020-03-30\",\"total\":43812,\"dose_1\":28376,\"dose_2\":15436,\"semana\":\"2021-W12\",\"relatorio\":\"https://web.archive.org/web/20210331151046/https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1121,\"dose_2\":750,\"total\":1871},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":13472,\"dose_2\":5622,\"total\":19094},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":5993,\"dose_2\":4842,\"total\":10835},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":620,\"dose_2\":438,\"total\":1058},\"sao_jorge\":{\"nome\":\"Machico\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":1014,\"total\":2402},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":2660,\"dose_2\":1284,\"total\":3944},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":2034,\"dose_2\":858,\"total\":2892},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":766,\"dose_2\":306,\"total\":1072},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":322,\"dose_2\":322,\"total\":644}}}]");

/***/ }),

/***/ "P9vZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data_acores_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4cS4");
var _data_acores_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("4cS4", 1);

async function handler(req, res) {
  res.statusCode = 200;
  res.json(_data_acores_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ })

/******/ });