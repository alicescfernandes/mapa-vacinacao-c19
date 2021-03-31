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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dV4h");


/***/ }),

/***/ "dV4h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data_vaccines_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("x47/");
var _data_vaccines_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("x47/", 1);

async function handler(req, res) {
  res.statusCode = 200;
  res.json(_data_vaccines_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ }),

/***/ "x47/":
/***/ (function(module) {

module.exports = JSON.parse("[{\"Data\":1609027200000,\"Inoculacao1\":4963,\"Inoculacao1_Ac\":4963,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":4963,\"Vacinados_Ac\":4963,\"FID\":1},{\"Data\":1609113600000,\"Inoculacao1\":2791,\"Inoculacao1_Ac\":7754,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":2791,\"Vacinados_Ac\":7754,\"FID\":2},{\"Data\":1609200000000,\"Inoculacao1\":12614,\"Inoculacao1_Ac\":20368,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":12614,\"Vacinados_Ac\":20368,\"FID\":3},{\"Data\":1609286400000,\"Inoculacao1\":10175,\"Inoculacao1_Ac\":30543,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":10175,\"Vacinados_Ac\":30543,\"FID\":4},{\"Data\":1609372800000,\"Inoculacao1\":2206,\"Inoculacao1_Ac\":32749,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":2206,\"Vacinados_Ac\":32749,\"FID\":5},{\"Data\":1609459200000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":32749,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":null,\"Vacinados_Ac\":32749,\"FID\":6},{\"Data\":1609545600000,\"Inoculacao1\":1,\"Inoculacao1_Ac\":32750,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":1,\"Vacinados_Ac\":32750,\"FID\":7},{\"Data\":1609632000000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":32750,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":null,\"Vacinados_Ac\":32750,\"FID\":8},{\"Data\":1609718400000,\"Inoculacao1\":920,\"Inoculacao1_Ac\":33670,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":920,\"Vacinados_Ac\":33670,\"FID\":9},{\"Data\":1609804800000,\"Inoculacao1\":12763,\"Inoculacao1_Ac\":46433,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":12763,\"Vacinados_Ac\":46433,\"FID\":10},{\"Data\":1609891200000,\"Inoculacao1\":15021,\"Inoculacao1_Ac\":61454,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":15021,\"Vacinados_Ac\":61454,\"FID\":11},{\"Data\":1609977600000,\"Inoculacao1\":10297,\"Inoculacao1_Ac\":71751,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":10297,\"Vacinados_Ac\":71751,\"FID\":12},{\"Data\":1610064000000,\"Inoculacao1\":2503,\"Inoculacao1_Ac\":74254,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":2503,\"Vacinados_Ac\":74254,\"FID\":13},{\"Data\":1610150400000,\"Inoculacao1\":98,\"Inoculacao1_Ac\":74352,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":98,\"Vacinados_Ac\":74352,\"FID\":14},{\"Data\":1610236800000,\"Inoculacao1\":40,\"Inoculacao1_Ac\":74392,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":40,\"Vacinados_Ac\":74392,\"FID\":15},{\"Data\":1610323200000,\"Inoculacao1\":888,\"Inoculacao1_Ac\":75280,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":888,\"Vacinados_Ac\":75280,\"FID\":16},{\"Data\":1610409600000,\"Inoculacao1\":10882,\"Inoculacao1_Ac\":86162,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":10882,\"Vacinados_Ac\":86162,\"FID\":17},{\"Data\":1610496000000,\"Inoculacao1\":13799,\"Inoculacao1_Ac\":99961,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":13799,\"Vacinados_Ac\":99961,\"FID\":18},{\"Data\":1610582400000,\"Inoculacao1\":11150,\"Inoculacao1_Ac\":111111,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":11150,\"Vacinados_Ac\":111111,\"FID\":19},{\"Data\":1610668800000,\"Inoculacao1\":7486,\"Inoculacao1_Ac\":118597,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":7486,\"Vacinados_Ac\":118597,\"FID\":20},{\"Data\":1610755200000,\"Inoculacao1\":1535,\"Inoculacao1_Ac\":120132,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":1535,\"Vacinados_Ac\":120132,\"FID\":21},{\"Data\":1610841600000,\"Inoculacao1\":7,\"Inoculacao1_Ac\":120139,\"Inoculacao2\":1161,\"Inoculacao2_Ac\":1161,\"Vacinados\":1168,\"Vacinados_Ac\":121300,\"FID\":22},{\"Data\":1610928000000,\"Inoculacao1\":2740,\"Inoculacao1_Ac\":122879,\"Inoculacao2\":664,\"Inoculacao2_Ac\":1825,\"Vacinados\":3404,\"Vacinados_Ac\":124704,\"FID\":23},{\"Data\":1611014400000,\"Inoculacao1\":16112,\"Inoculacao1_Ac\":138991,\"Inoculacao2\":7618,\"Inoculacao2_Ac\":9443,\"Vacinados\":23730,\"Vacinados_Ac\":148434,\"FID\":24},{\"Data\":1611100800000,\"Inoculacao1\":19758,\"Inoculacao1_Ac\":158749,\"Inoculacao2\":9175,\"Inoculacao2_Ac\":18618,\"Vacinados\":28933,\"Vacinados_Ac\":177367,\"FID\":25},{\"Data\":1611187200000,\"Inoculacao1\":28130,\"Inoculacao1_Ac\":186879,\"Inoculacao2\":4974,\"Inoculacao2_Ac\":23592,\"Vacinados\":33104,\"Vacinados_Ac\":210471,\"FID\":26},{\"Data\":1611273600000,\"Inoculacao1\":23855,\"Inoculacao1_Ac\":210734,\"Inoculacao2\":2404,\"Inoculacao2_Ac\":25996,\"Vacinados\":26259,\"Vacinados_Ac\":236730,\"FID\":27},{\"Data\":1611360000000,\"Inoculacao1\":10754,\"Inoculacao1_Ac\":221488,\"Inoculacao2\":4040,\"Inoculacao2_Ac\":30036,\"Vacinados\":14794,\"Vacinados_Ac\":251524,\"FID\":28},{\"Data\":1611446400000,\"Inoculacao1\":3658,\"Inoculacao1_Ac\":225146,\"Inoculacao2\":517,\"Inoculacao2_Ac\":30553,\"Vacinados\":4175,\"Vacinados_Ac\":255699,\"FID\":29},{\"Data\":1611532800000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":null,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":null,\"Vacinados_Ac\":null,\"Vacinados_Ac2\":255700,\"Inoculacao1_Ac2\":249861,\"FID\":1},{\"Data\":1611619200000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":null,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":263499,\"Vacinados_Ac\":263499,\"FID\":1},{\"Data\":1611705600000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":null,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":278413,\"Vacinados_Ac\":278413,\"FID\":1},{\"Data\":1611792000000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":null,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":296004,\"Vacinados_Ac\":296004,\"FID\":1},{\"Data\":1611878400000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":null,\"Inoculacao2\":null,\"Inoculacao2_Ac\":null,\"Vacinados\":315737,\"Vacinados_Ac\":315737,\"FID\":1},{\"Data\":1611964800000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":264772,\"Inoculacao2\":null,\"Inoculacao2_Ac\":65461,\"Vacinados\":330233,\"Vacinados_Ac\":330233,\"FID\":1},{\"Data\":1612051200000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":268386,\"Inoculacao2\":null,\"Inoculacao2_Ac\":68385,\"Vacinados\":336771,\"Vacinados_Ac\":336771,\"FID\":1},{\"Data\":1612137600000,\"Inoculacao1\":null,\"Inoculacao1_Ac\":269814,\"Inoculacao2\":null,\"Inoculacao2_Ac\":68752,\"Vacinados\":338566,\"Vacinados_Ac\":338566,\"FID\":1},{\"Data\":1612224000000,\"Inoculacao1\":271424,\"Inoculacao1_Ac\":271424,\"Inoculacao2\":70695,\"Inoculacao2_Ac\":70695,\"Vacinados\":342119,\"Vacinados_Ac\":342119,\"FID\":1},{\"Data\":1612310400000,\"Inoculacao1\":275093,\"Inoculacao1_Ac\":275093,\"Inoculacao2\":75852,\"Inoculacao2_Ac\":75852,\"Vacinados\":350945,\"Vacinados_Ac\":350945,\"FID\":1},{\"Data\":1612396800000,\"Inoculacao1\":279236,\"Inoculacao1_Ac\":279236,\"Inoculacao2\":84975,\"Inoculacao2_Ac\":84975,\"Vacinados\":364211,\"Vacinados_Ac\":364211,\"FID\":1},{\"Data\":1612483200000,\"Inoculacao1\":284462,\"Inoculacao1_Ac\":284462,\"Inoculacao2\":94916,\"Inoculacao2_Ac\":94916,\"Vacinados\":379378,\"Vacinados_Ac\":379378,\"FID\":1},{\"Data\":1612569600000,\"Inoculacao1\":290302,\"Inoculacao1_Ac\":290302,\"Inoculacao2\":103786,\"Inoculacao2_Ac\":103786,\"Vacinados\":394088,\"Vacinados_Ac\":394088,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1612656000000,\"Inoculacao1\":291378,\"Inoculacao1_Ac\":291378,\"Inoculacao2\":104526,\"Inoculacao2_Ac\":104526,\"Vacinados\":395904,\"Vacinados_Ac\":395904,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1612742400000,\"Inoculacao1\":291758,\"Inoculacao1_Ac\":291758,\"Inoculacao2\":104613,\"Inoculacao2_Ac\":104613,\"Vacinados\":396371,\"Vacinados_Ac\":396371,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1612828800000,\"Inoculacao1\":294135,\"Inoculacao1_Ac\":294135,\"Inoculacao2\":106055,\"Inoculacao2_Ac\":106055,\"Vacinados\":400190,\"Vacinados_Ac\":400190,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1612915200000,\"Inoculacao1\":298724,\"Inoculacao1_Ac\":298724,\"Inoculacao2\":116559,\"Inoculacao2_Ac\":116559,\"Vacinados\":415283,\"Vacinados_Ac\":415283,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613001600000,\"Inoculacao1\":303142,\"Inoculacao1_Ac\":303142,\"Inoculacao2\":133078,\"Inoculacao2_Ac\":133078,\"Vacinados\":436220,\"Vacinados_Ac\":436220,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613088000000,\"Inoculacao1\":310715,\"Inoculacao1_Ac\":310715,\"Inoculacao2\":157604,\"Inoculacao2_Ac\":157604,\"Vacinados\":468319,\"Vacinados_Ac\":468319,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613174400000,\"Inoculacao1\":320677,\"Inoculacao1_Ac\":320677,\"Inoculacao2\":184694,\"Inoculacao2_Ac\":184694,\"Vacinados\":505371,\"Vacinados_Ac\":505371,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613260800000,\"Inoculacao1\":328819,\"Inoculacao1_Ac\":328819,\"Inoculacao2\":194530,\"Inoculacao2_Ac\":194530,\"Vacinados\":523349,\"Vacinados_Ac\":523349,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613347200000,\"Inoculacao1\":331321,\"Inoculacao1_Ac\":331321,\"Inoculacao2\":197700,\"Inoculacao2_Ac\":197700,\"Vacinados\":529021,\"Vacinados_Ac\":529021,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613433600000,\"Inoculacao1\":336500,\"Inoculacao1_Ac\":336500,\"Inoculacao2\":203286,\"Inoculacao2_Ac\":203286,\"Vacinados\":539786,\"Vacinados_Ac\":539786,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613520000000,\"Inoculacao1\":347013,\"Inoculacao1_Ac\":347013,\"Inoculacao2\":209318,\"Inoculacao2_Ac\":209318,\"Vacinados\":556331,\"Vacinados_Ac\":556331,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613606400000,\"Inoculacao1\":361431,\"Inoculacao1_Ac\":361431,\"Inoculacao2\":217271,\"Inoculacao2_Ac\":217271,\"Vacinados\":578702,\"Vacinados_Ac\":578702,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613692800000,\"Inoculacao1\":388661,\"Inoculacao1_Ac\":388661,\"Inoculacao2\":229975,\"Inoculacao2_Ac\":229975,\"Vacinados\":618636,\"Vacinados_Ac\":618636,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613779200000,\"Inoculacao1\":413482,\"Inoculacao1_Ac\":413482,\"Inoculacao2\":242929,\"Inoculacao2_Ac\":242929,\"Vacinados\":656411,\"Vacinados_Ac\":656411,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613865600000,\"Inoculacao1\":429020,\"Inoculacao1_Ac\":429020,\"Inoculacao2\":246433,\"Inoculacao2_Ac\":246433,\"Vacinados\":675453,\"Vacinados_Ac\":675453,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613952000000,\"Inoculacao1\":432414,\"Inoculacao1_Ac\":432414,\"Inoculacao2\":247843,\"Inoculacao2_Ac\":247843,\"Vacinados\":680257,\"Vacinados_Ac\":680257,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614038400000,\"Inoculacao1\":444730,\"Inoculacao1_Ac\":444730,\"Inoculacao2\":249567,\"Inoculacao2_Ac\":249567,\"Vacinados\":694297,\"Vacinados_Ac\":694297,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614124800000,\"Inoculacao1\":468929,\"Inoculacao1_Ac\":468929,\"Inoculacao2\":251788,\"Inoculacao2_Ac\":251788,\"Vacinados\":720717,\"Vacinados_Ac\":720717,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614211200000,\"Inoculacao1\":497040,\"Inoculacao1_Ac\":497040,\"Inoculacao2\":255277,\"Inoculacao2_Ac\":255277,\"Vacinados\":752317,\"Vacinados_Ac\":752317,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614297600000,\"Inoculacao1\":538636,\"Inoculacao1_Ac\":538636,\"Inoculacao2\":258369,\"Inoculacao2_Ac\":258369,\"Vacinados\":797005,\"Vacinados_Ac\":797005,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614384000000,\"Inoculacao1\":574062,\"Inoculacao1_Ac\":574062,\"Inoculacao2\":263825,\"Inoculacao2_Ac\":263825,\"Vacinados\":837887,\"Vacinados_Ac\":837887,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614470400000,\"Inoculacao1\":596812,\"Inoculacao1_Ac\":596812,\"Inoculacao2\":265110,\"Inoculacao2_Ac\":265110,\"Vacinados\":861922,\"Vacinados_Ac\":861922,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614556800000,\"Inoculacao1\":603585,\"Inoculacao1_Ac\":603585,\"Inoculacao2\":265366,\"Inoculacao2_Ac\":265366,\"Vacinados\":868951,\"Vacinados_Ac\":868951,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614643200000,\"Inoculacao1\":618393,\"Inoculacao1_Ac\":618393,\"Inoculacao2\":266716,\"Inoculacao2_Ac\":266716,\"Vacinados\":885109,\"Vacinados_Ac\":885109,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614729600000,\"Inoculacao1\":632450,\"Inoculacao1_Ac\":632450,\"Inoculacao2\":268381,\"Inoculacao2_Ac\":268381,\"Vacinados\":900831,\"Vacinados_Ac\":900831,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614816000000,\"Inoculacao1\":655719,\"Inoculacao1_Ac\":655719,\"Inoculacao2\":273414,\"Inoculacao2_Ac\":273414,\"Vacinados\":929133,\"Vacinados_Ac\":929133,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614902400000,\"Inoculacao1\":692960,\"Inoculacao1_Ac\":692960,\"Inoculacao2\":279223,\"Inoculacao2_Ac\":279223,\"Vacinados\":972183,\"Vacinados_Ac\":972183,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614988800000,\"Inoculacao1\":724202,\"Inoculacao1_Ac\":724202,\"Inoculacao2\":287830,\"Inoculacao2_Ac\":287830,\"Vacinados\":1012032,\"Vacinados_Ac\":1012032,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615075200000,\"Inoculacao1\":737206,\"Inoculacao1_Ac\":737206,\"Inoculacao2\":291983,\"Inoculacao2_Ac\":291983,\"Vacinados\":1029189,\"Vacinados_Ac\":1029189,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615161600000,\"Inoculacao1\":739762,\"Inoculacao1_Ac\":739762,\"Inoculacao2\":293338,\"Inoculacao2_Ac\":293338,\"Vacinados\":1033100,\"Vacinados_Ac\":1033100,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615248000000,\"Inoculacao1\":748575,\"Inoculacao1_Ac\":748575,\"Inoculacao2\":295516,\"Inoculacao2_Ac\":295516,\"Vacinados\":1044091,\"Vacinados_Ac\":1044091,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615334400000,\"Inoculacao1\":757663,\"Inoculacao1_Ac\":757663,\"Inoculacao2\":297422,\"Inoculacao2_Ac\":297422,\"Vacinados\":1055085,\"Vacinados_Ac\":1055085,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615420800000,\"Inoculacao1\":772343,\"Inoculacao1_Ac\":772343,\"Inoculacao2\":306420,\"Inoculacao2_Ac\":306420,\"Vacinados\":1078763,\"Vacinados_Ac\":1078763,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615507200000,\"Inoculacao1\":793162,\"Inoculacao1_Ac\":793162,\"Inoculacao2\":320723,\"Inoculacao2_Ac\":320723,\"Vacinados\":1113885,\"Vacinados_Ac\":1113885,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615593600000,\"Inoculacao1\":813380,\"Inoculacao1_Ac\":813380,\"Inoculacao2\":334195,\"Inoculacao2_Ac\":334195,\"Vacinados\":1147575,\"Vacinados_Ac\":1147575,\"FID\":1},{\"Data\":1615680000000,\"Inoculacao1\":824313,\"Inoculacao1_Ac\":824313,\"Inoculacao2\":339560,\"Inoculacao2_Ac\":339560,\"Vacinados\":1163873,\"Vacinados_Ac\":1163873,\"FID\":1},{\"Data\":1615766400000,\"Inoculacao1\":3195,\"Inoculacao1_Ac\":827508,\"Inoculacao2\":1147,\"Inoculacao2_Ac\":340707,\"Vacinados\":4342,\"Vacinados_Ac\":1168215,\"FID\":1},{\"Data\":1615852800000,\"Inoculacao1\":849464,\"Inoculacao1_Ac\":849464,\"Inoculacao2\":343722,\"Inoculacao2_Ac\":343722,\"Vacinados\":1193186,\"Vacinados_Ac\":1193186,\"FID\":1},{\"Data\":1615939200000,\"Inoculacao1\":851022,\"Inoculacao1_Ac\":851022,\"Inoculacao2\":349669,\"Inoculacao2_Ac\":349669,\"Vacinados\":1200691,\"Vacinados_Ac\":1200691,\"FID\":1},{\"Data\":1616025600000,\"Inoculacao1\":863570,\"Inoculacao1_Ac\":863570,\"Inoculacao2\":371566,\"Inoculacao2_Ac\":371566,\"Vacinados\":1235136,\"Vacinados_Ac\":1235136,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616112000000,\"Inoculacao1\":875490,\"Inoculacao1_Ac\":875490,\"Inoculacao2\":404919,\"Inoculacao2_Ac\":404919,\"Vacinados\":1280409,\"Vacinados_Ac\":1280409,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616198400000,\"Inoculacao1\":892372,\"Inoculacao1_Ac\":892372,\"Inoculacao2\":432894,\"Inoculacao2_Ac\":432894,\"Vacinados\":1325266,\"Vacinados_Ac\":1325266,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616284800000,\"Inoculacao1\":902527,\"Inoculacao1_Ac\":902527,\"Inoculacao2\":445804,\"Inoculacao2_Ac\":445804,\"Vacinados\":1348331,\"Vacinados_Ac\":1348331,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616371200000,\"Inoculacao1\":903964,\"Inoculacao1_Ac\":903964,\"Inoculacao2\":447552,\"Inoculacao2_Ac\":447552,\"Vacinados\":1351516,\"Vacinados_Ac\":1351516,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616457600000,\"Inoculacao1\":914058,\"Inoculacao1_Ac\":914058,\"Inoculacao2\":455184,\"Inoculacao2_Ac\":455184,\"Vacinados\":1369242,\"Vacinados_Ac\":1369242,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616544000000,\"Inoculacao1\":934295,\"Inoculacao1_Ac\":934295,\"Inoculacao2\":457256,\"Inoculacao2_Ac\":457256,\"Vacinados\":1391551,\"Vacinados_Ac\":1391551,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616630400000,\"Inoculacao1\":973181,\"Inoculacao1_Ac\":973181,\"Inoculacao2\":460863,\"Inoculacao2_Ac\":460863,\"Vacinados\":1434044,\"Vacinados_Ac\":1434044,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616716800000,\"Inoculacao1\":1040109,\"Inoculacao1_Ac\":1040109,\"Inoculacao2\":465367,\"Inoculacao2_Ac\":465367,\"Vacinados\":1505476,\"Vacinados_Ac\":1505476,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616803200000,\"Inoculacao1\":1068361,\"Inoculacao1_Ac\":1068361,\"Inoculacao2\":467823,\"Inoculacao2_Ac\":467823,\"Vacinados\":1536184,\"Vacinados_Ac\":1536184,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616889600000,\"Inoculacao1\":1130258,\"Inoculacao1_Ac\":1130258,\"Inoculacao2\":469341,\"Inoculacao2_Ac\":469341,\"Vacinados\":1599599,\"Vacinados_Ac\":1599599,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616972400000,\"Inoculacao1\":1148757,\"Inoculacao1_Ac\":1148757,\"Inoculacao2\":469642,\"Inoculacao2_Ac\":469642,\"Vacinados\":1618399,\"Vacinados_Ac\":1618399,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617058800000,\"Inoculacao1\":1169676,\"Inoculacao1_Ac\":1169676,\"Inoculacao2\":472270,\"Inoculacao2_Ac\":472270,\"Vacinados\":1641946,\"Vacinados_Ac\":1641946,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617145200000,\"Inoculacao1\":1197027,\"Inoculacao1_Ac\":1197027,\"Inoculacao2\":475866,\"Inoculacao2_Ac\":475866,\"Vacinados\":1672893,\"Vacinados_Ac\":1672893,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1}]");

/***/ })

/******/ });