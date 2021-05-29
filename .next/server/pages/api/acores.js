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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("P9vZ");


/***/ }),

/***/ "4cS4":
/***/ (function(module) {

module.exports = JSON.parse("[{\"data\":\"2020-03-17\",\"total\":35825,\"dose_1\":23431,\"dose_2\":12394,\"semana\":\"2021-W12\",\"relatorio\":\"https://web.archive.org/web/20210320205729/https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":744,\"dose_2\":744,\"total\":1488},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":11318,\"dose_2\":4776,\"total\":16094},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":5398,\"dose_2\":3024,\"total\":8422},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":530,\"dose_2\":420,\"total\":950},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":702,\"total\":2090},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":1601,\"dose_2\":1266,\"total\":2867},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":1364,\"dose_2\":834,\"total\":2198},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":766,\"dose_2\":306,\"total\":1072},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"dose_1\":322,\"dose_2\":322,\"total\":644}}},{\"data\":\"2020-03-21\",\"total\":37687,\"dose_1\":24591,\"dose_2\":13096,\"semana\":\"2021-W12\",\"relatorio\":\"https://portal.azores.gov.pt/documents/36169/97cc99c5-2a16-d831-68d2-610c8dd72e0b\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1121,\"dose_2\":750,\"total\":1871},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":11324,\"dose_2\":5472,\"total\":16796},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":5398,\"dose_2\":3024,\"total\":8422},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":530,\"dose_2\":420,\"total\":950},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":702,\"total\":2090},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":2378,\"dose_2\":1266,\"total\":3644},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":1364,\"dose_2\":834,\"total\":2198},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":766,\"dose_2\":306,\"total\":1072},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"dose_1\":322,\"dose_2\":322,\"total\":644}}},{\"data\":\"2020-03-30\",\"total\":43812,\"dose_1\":28376,\"dose_2\":15436,\"semana\":\"2021-W12\",\"relatorio\":\"https://web.archive.org/web/20210331151046/https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1121,\"dose_2\":750,\"total\":1871},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":13472,\"dose_2\":5622,\"total\":19094},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":5993,\"dose_2\":4842,\"total\":10835},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":620,\"dose_2\":438,\"total\":1058},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":1014,\"total\":2402},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":2660,\"dose_2\":1284,\"total\":3944},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":2034,\"dose_2\":858,\"total\":2892},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":766,\"dose_2\":306,\"total\":1072},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":322,\"dose_2\":322,\"total\":644}}},{\"data\":\"2020-04-06\",\"total\":51756,\"dose_1\":34832,\"dose_2\":16924,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1121,\"dose_2\":750,\"total\":1871},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":17972,\"dose_2\":6912,\"total\":24884},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":6774,\"dose_2\":4836,\"total\":11610},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1256,\"dose_2\":486,\"total\":1742},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1388,\"dose_2\":1014,\"total\":2402},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":2750,\"dose_2\":1320,\"total\":4070},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":2285,\"dose_2\":924,\"total\":3209},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":964,\"dose_2\":360,\"total\":1324},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":322,\"dose_2\":322,\"total\":644}}},{\"data\":\"2020-04-08\",\"total\":56725,\"dose_1\":39003,\"dose_2\":17722,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1217,\"dose_2\":1056,\"total\":2273},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":21855,\"dose_2\":6912,\"total\":28767},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":6906,\"dose_2\":4836,\"total\":11742},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1256,\"dose_2\":486,\"total\":1742},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":1442,\"dose_2\":1020,\"total\":2462},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":2750,\"dose_2\":1800,\"total\":4550},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":2285,\"dose_2\":924,\"total\":3209},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":964,\"dose_2\":360,\"total\":1324},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-04-15\",\"total\":66557,\"dose_1\":46165,\"dose_2\":20392,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1217,\"dose_2\":1056,\"total\":2273},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":21855,\"dose_2\":9078,\"total\":30933},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":10355,\"dose_2\":4848,\"total\":15203},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1476,\"dose_2\":576,\"total\":2052},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":2127,\"dose_2\":1020,\"total\":3147},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":3907,\"dose_2\":2082,\"total\":5989},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":3771,\"dose_2\":1044,\"total\":4815},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1129,\"dose_2\":360,\"total\":1489},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-04-21\",\"total\":69887,\"dose_1\":49477,\"dose_2\":20410,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1707,\"dose_2\":1056,\"total\":2763},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":23755,\"dose_2\":9078,\"total\":32833},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":10893,\"dose_2\":4848,\"total\":15741},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1476,\"dose_2\":576,\"total\":2052},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":2511,\"dose_2\":1032,\"total\":3543},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":3907,\"dose_2\":2082,\"total\":5989},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":3771,\"dose_2\":1050,\"total\":4821},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1129,\"dose_2\":360,\"total\":1489},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-04-29\",\"total\":79589,\"dose_1\":56419,\"dose_2\":23170,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1857,\"dose_2\":1152,\"total\":3009},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":29233,\"dose_2\":10572,\"total\":39805},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":10941,\"dose_2\":4848,\"total\":15789},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1482,\"dose_2\":1152,\"total\":2634},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":2991,\"dose_2\":1086,\"total\":4077},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":4627,\"dose_2\":2172,\"total\":6799},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":3771,\"dose_2\":1302,\"total\":5073},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1189,\"dose_2\":558,\"total\":1747},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-04\",\"total\":86796,\"dose_1\":59336,\"dose_2\":27460,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1857,\"dose_2\":1152,\"total\":3009},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":29222,\"dose_2\":12072,\"total\":41294},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":11055,\"dose_2\":6174,\"total\":17229},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1728,\"dose_2\":1158,\"total\":2886},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":3351,\"dose_2\":1386,\"total\":4737},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":4987,\"dose_2\":2724,\"total\":7711},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":5583,\"dose_2\":1908,\"total\":7491},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1225,\"dose_2\":558,\"total\":1783},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-06\",\"total\":87077,\"dose_1\":59347,\"dose_2\":27730,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1857,\"dose_2\":1422,\"total\":3279},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":29233,\"dose_2\":12072,\"total\":41305},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":11055,\"dose_2\":6174,\"total\":17229},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1728,\"dose_2\":1158,\"total\":2886},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":3351,\"dose_2\":1386,\"total\":4737},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":4987,\"dose_2\":2724,\"total\":7711},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":5583,\"dose_2\":1908,\"total\":7491},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1225,\"dose_2\":558,\"total\":1783},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-11\",\"total\":91769,\"dose_1\":60493,\"dose_2\":31276,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1857,\"dose_2\":1422,\"total\":3279},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":29353,\"dose_2\":14916,\"total\":44269},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":11775,\"dose_2\":6492,\"total\":18267},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1728,\"dose_2\":1158,\"total\":2886},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":3351,\"dose_2\":1770,\"total\":5121},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":4987,\"dose_2\":2724,\"total\":7711},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":5889,\"dose_2\":1908,\"total\":7797},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1225,\"dose_2\":558,\"total\":1783},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-13\",\"total\":91979,\"dose_1\":60703,\"dose_2\":31276,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1857,\"dose_2\":1422,\"total\":3279},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":29353,\"dose_2\":14916,\"total\":44269},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":11919,\"dose_2\":6492,\"total\":18411},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1728,\"dose_2\":1158,\"total\":2886},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":3351,\"dose_2\":1770,\"total\":5121},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":4987,\"dose_2\":2724,\"total\":7711},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":5955,\"dose_2\":1908,\"total\":7863},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1225,\"dose_2\":558,\"total\":1783},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-18\",\"total\":100505,\"dose_1\":66505,\"dose_2\":34000,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":1857,\"dose_2\":1422,\"total\":3279},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":30157,\"dose_2\":16266,\"total\":46423},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":15147,\"dose_2\":6546,\"total\":21693},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1848,\"dose_2\":1176,\"total\":3024},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":3885,\"dose_2\":2286,\"total\":6171},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":5815,\"dose_2\":3444,\"total\":9259},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":6171,\"dose_2\":1908,\"total\":8079},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1297,\"dose_2\":624,\"total\":1921},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-20\",\"total\":106631,\"dose_1\":68353,\"dose_2\":38278,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":2037,\"dose_2\":1572,\"total\":3609},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":31717,\"dose_2\":20130,\"total\":51847},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":15147,\"dose_2\":6810,\"total\":21957},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1848,\"dose_2\":1176,\"total\":3024},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":3885,\"dose_2\":2286,\"total\":6171},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":5815,\"dose_2\":3444,\"total\":9259},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":6279,\"dose_2\":1908,\"total\":8187},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1297,\"dose_2\":624,\"total\":1921},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}},{\"data\":\"2020-05-28\",\"total\":126130,\"dose_1\":79832,\"dose_2\":46298,\"semana\":\"null\",\"relatorio\":\"https://vacinacao-covid19.azores.gov.pt/\",\"concelhos\":{\"santa_maria\":{\"nome\":\"Santa Maria\",\"chave\":\"santa_maria\",\"populacao\":4589,\"dose_1\":2361,\"dose_2\":1590,\"total\":3951},\"sao_miguel\":{\"nome\":\"São Miguel\",\"chave\":\"sao_miguel\",\"populacao\":110731,\"dose_1\":35426,\"dose_2\":24592,\"total\":60018},\"terceira\":{\"nome\":\"Terceira\",\"chave\":\"terceira\",\"populacao\":47270,\"dose_1\":19425,\"dose_2\":7332,\"total\":26757},\"graciosa\":{\"nome\":\"Graciosa\",\"chave\":\"graciosa\",\"populacao\":3741,\"dose_1\":1848,\"dose_2\":1422,\"total\":3270},\"sao_jorge\":{\"nome\":\"São Jorge\",\"chave\":\"sao_jorge\",\"populacao\":7836,\"dose_1\":4515,\"dose_2\":2688,\"total\":7203},\"pico\":{\"nome\":\"Pico\",\"chave\":\"pico\",\"populacao\":12199,\"dose_1\":7723,\"dose_2\":3804,\"total\":11527},\"faial\":{\"nome\":\"Faial\",\"chave\":\"faial\",\"populacao\":12591,\"dose_1\":6681,\"dose_2\":3876,\"total\":10557},\"flores\":{\"nome\":\"Flores\",\"chave\":\"flores\",\"populacao\":3249,\"dose_1\":1525,\"dose_2\":666,\"total\":2191},\"corvo\":{\"nome\":\"Corvo\",\"chave\":\"corvo\",\"populacao\":369,\"dose_1\":328,\"dose_2\":328,\"total\":656}}}]");

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