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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T+iY");


/***/ }),

/***/ "GyP+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hexToRgb; });
/* unused harmony export dateWithoutTimezone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return trackPlausible; });
/* unused harmony export downloadPNG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return perHundred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchWithLocalCache; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_generic_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lN74");
var _data_generic_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("lN74", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const formatNumber = (number, isDate = true) => {
  let numberFormatter = new Intl.NumberFormat('pt-PT', {
    minimumIntegerDigits: isDate ? 2 : 1
  });
  return numberFormatter.format(number).replace(/,/gm, ' ');
};
 //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function dateWithoutTimezone(unix) {
  const dt = new Date(unix);
  return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
}
function trackPlausible(req) {
  var _req$headers;

  let host = req.headers.host;
  let url = req.url;
  let userAgent = req.headers['user-agent'];
  let referer = ((_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.referer) || '';
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (ip.substr(0, 7) == '::ffff:') {
    ip = ip.substr(7);
  }

  let headers = {
    'user-agent': userAgent,
    'x-forwarded-for': ip,
    referer: referer
  };
  let data = {
    name: 'pageview',
    url: 'https://www.vacinacaocovid19.pt' + url,
    domain: 'vacinacaocovid19.pt',
    referrer: referer,
    screen_width: null
  };
  if (host.match('localhost')) return;
  if (req.headers['x-request-self'] === 'true') return;
  console.log('track', headers, JSON.stringify(data));
  node_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://plausible.io/api/event', {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(() => {
    console.log('request', 'post', JSON.stringify(data), headers);
  }).catch(() => {
    console.log('err');
  });
}
function downloadPNG(canvasElement, graphName) {
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = canvasElement.toDataURL();
  link.click();
}
function perHundred(total) {
  return total / _data_generic_json__WEBPACK_IMPORTED_MODULE_1__["populacao"].valor * 100;
}
function fetchWithLocalCache(url, options) {
  let useCache = true;
  let [path, cacheBuster] = url.split('?');
  let items = JSON.parse(JSON.stringify(localStorage));

  for (var k in items) {
    let [lsPath, lsCacheBuster] = k.split('?');
    /* if (lsPath === path && lsCacheBuster !== cacheBuster) {
    	useCache = false;
    	localStorage.removeItem(k);
    } */

    if (lsPath === path) {
      useCache = false;
      localStorage.removeItem(k);
    }
  }

  if (window && localStorage.getItem(url) && useCache === true) {
    let data = JSON.parse(localStorage.getItem(url));
    return Promise.resolve(data);
  } else {
    return fetch(url, _objectSpread(_objectSpread({}, options), {}, {
      headers: {
        'X-Request-Self': true
      }
    })).then(res => res.json()).then(data => {
      localStorage.setItem(url, JSON.stringify(data));
      return data;
    });
  }
}

/***/ }),

/***/ "Njuj":
/***/ (function(module) {

module.exports = JSON.parse("[{\"Data\":1609027200000,\"Inoculacao1\":4963,\"Inoculacao1_Ac\":4963,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":4963,\"Vacinados_Ac\":4963,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609113600000,\"Inoculacao1\":2791,\"Inoculacao1_Ac\":7754,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":2791,\"Vacinados_Ac\":7754,\"FID\":2,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609200000000,\"Inoculacao1\":12614,\"Inoculacao1_Ac\":20368,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":12614,\"Vacinados_Ac\":20368,\"FID\":3,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609286400000,\"Inoculacao1\":10175,\"Inoculacao1_Ac\":30543,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":10175,\"Vacinados_Ac\":30543,\"FID\":4,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609372800000,\"Inoculacao1\":2206,\"Inoculacao1_Ac\":32749,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":2206,\"Vacinados_Ac\":32749,\"FID\":5,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609459200000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":32749,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":null,\"Vacinados_Ac\":32749,\"FID\":6,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609545600000,\"Inoculacao1\":1,\"Inoculacao1_Ac\":32750,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":1,\"Vacinados_Ac\":32750,\"FID\":7,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609632000000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":32750,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":null,\"Vacinados_Ac\":32750,\"FID\":8,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609718400000,\"Inoculacao1\":920,\"Inoculacao1_Ac\":33670,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":920,\"Vacinados_Ac\":33670,\"FID\":9,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609804800000,\"Inoculacao1\":12763,\"Inoculacao1_Ac\":46433,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":12763,\"Vacinados_Ac\":46433,\"FID\":10,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609891200000,\"Inoculacao1\":15021,\"Inoculacao1_Ac\":61454,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":15021,\"Vacinados_Ac\":61454,\"FID\":11,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609977600000,\"Inoculacao1\":10297,\"Inoculacao1_Ac\":71751,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":10297,\"Vacinados_Ac\":71751,\"FID\":12,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610064000000,\"Inoculacao1\":2503,\"Inoculacao1_Ac\":74254,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":2503,\"Vacinados_Ac\":74254,\"FID\":13,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610150400000,\"Inoculacao1\":98,\"Inoculacao1_Ac\":74352,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":98,\"Vacinados_Ac\":74352,\"FID\":14,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610236800000,\"Inoculacao1\":40,\"Inoculacao1_Ac\":74392,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":40,\"Vacinados_Ac\":74392,\"FID\":15,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610323200000,\"Inoculacao1\":888,\"Inoculacao1_Ac\":75280,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":888,\"Vacinados_Ac\":75280,\"FID\":16,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610409600000,\"Inoculacao1\":10882,\"Inoculacao1_Ac\":86162,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":10882,\"Vacinados_Ac\":86162,\"FID\":17,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610496000000,\"Inoculacao1\":13799,\"Inoculacao1_Ac\":99961,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":13799,\"Vacinados_Ac\":99961,\"FID\":18,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610582400000,\"Inoculacao1\":11150,\"Inoculacao1_Ac\":111111,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":11150,\"Vacinados_Ac\":111111,\"FID\":19,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610668800000,\"Inoculacao1\":7486,\"Inoculacao1_Ac\":118597,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":7486,\"Vacinados_Ac\":118597,\"FID\":20,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610755200000,\"Inoculacao1\":1535,\"Inoculacao1_Ac\":120132,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":1535,\"Vacinados_Ac\":120132,\"FID\":21,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610841600000,\"Inoculacao1\":7,\"Inoculacao1_Ac\":120139,\"Inoculacao2\":1161,\"Inoculacao2_Ac\":1161,\"Vacinados\":1168,\"Vacinados_Ac\":121300,\"FID\":22,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610928000000,\"Inoculacao1\":2740,\"Inoculacao1_Ac\":122879,\"Inoculacao2\":664,\"Inoculacao2_Ac\":1825,\"Vacinados\":3404,\"Vacinados_Ac\":124704,\"FID\":23,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611014400000,\"Inoculacao1\":16112,\"Inoculacao1_Ac\":138991,\"Inoculacao2\":7618,\"Inoculacao2_Ac\":9443,\"Vacinados\":23730,\"Vacinados_Ac\":148434,\"FID\":24,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611100800000,\"Inoculacao1\":19758,\"Inoculacao1_Ac\":158749,\"Inoculacao2\":9175,\"Inoculacao2_Ac\":18618,\"Vacinados\":28933,\"Vacinados_Ac\":177367,\"FID\":25,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611187200000,\"Inoculacao1\":28130,\"Inoculacao1_Ac\":186879,\"Inoculacao2\":4974,\"Inoculacao2_Ac\":23592,\"Vacinados\":33104,\"Vacinados_Ac\":210471,\"FID\":26,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611273600000,\"Inoculacao1\":23855,\"Inoculacao1_Ac\":210734,\"Inoculacao2\":2404,\"Inoculacao2_Ac\":25996,\"Vacinados\":26259,\"Vacinados_Ac\":236730,\"FID\":27,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611360000000,\"Inoculacao1\":10754,\"Inoculacao1_Ac\":221488,\"Inoculacao2\":4040,\"Inoculacao2_Ac\":30036,\"Vacinados\":14794,\"Vacinados_Ac\":251524,\"FID\":28,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611446400000,\"Inoculacao1\":3658,\"Inoculacao1_Ac\":225146,\"Inoculacao2\":517,\"Inoculacao2_Ac\":30553,\"Vacinados\":4175,\"Vacinados_Ac\":255699,\"FID\":29,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611532800000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":0,\"Vacinados_Ac\":0,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611619200000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":0,\"Vacinados_Ac\":263499,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611705600000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":14914,\"Vacinados_Ac\":278413,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611792000000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":17591,\"Vacinados_Ac\":296004,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611878400000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":19733,\"Vacinados_Ac\":315737,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611964800000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":264772,\"Inoculacao2\":0,\"Inoculacao2_Ac\":65461,\"Vacinados\":14496,\"Vacinados_Ac\":330233,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612051200000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":268386,\"Inoculacao2\":0,\"Inoculacao2_Ac\":68385,\"Vacinados\":6538,\"Vacinados_Ac\":336771,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612137600000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":269814,\"Inoculacao2\":0,\"Inoculacao2_Ac\":68752,\"Vacinados\":1795,\"Vacinados_Ac\":338566,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612224000000,\"Inoculacao1\":1610,\"Inoculacao1_Ac\":271424,\"Inoculacao2\":1943,\"Inoculacao2_Ac\":70695,\"Vacinados\":3553,\"Vacinados_Ac\":342119,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612310400000,\"Inoculacao1\":3669,\"Inoculacao1_Ac\":275093,\"Inoculacao2\":5157,\"Inoculacao2_Ac\":75852,\"Vacinados\":8826,\"Vacinados_Ac\":350945,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612396800000,\"Inoculacao1\":4143,\"Inoculacao1_Ac\":279236,\"Inoculacao2\":9123,\"Inoculacao2_Ac\":84975,\"Vacinados\":13266,\"Vacinados_Ac\":364211,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612483200000,\"Inoculacao1\":5226,\"Inoculacao1_Ac\":284462,\"Inoculacao2\":9941,\"Inoculacao2_Ac\":94916,\"Vacinados\":15167,\"Vacinados_Ac\":379378,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612569600000,\"Inoculacao1\":5840,\"Inoculacao1_Ac\":290302,\"Inoculacao2\":8870,\"Inoculacao2_Ac\":103786,\"Vacinados\":14710,\"Vacinados_Ac\":394088,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612656000000,\"Inoculacao1\":1076,\"Inoculacao1_Ac\":291378,\"Inoculacao2\":740,\"Inoculacao2_Ac\":104526,\"Vacinados\":1816,\"Vacinados_Ac\":395904,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612742400000,\"Inoculacao1\":380,\"Inoculacao1_Ac\":291758,\"Inoculacao2\":87,\"Inoculacao2_Ac\":104613,\"Vacinados\":467,\"Vacinados_Ac\":396371,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612828800000,\"Inoculacao1\":2377,\"Inoculacao1_Ac\":294135,\"Inoculacao2\":1442,\"Inoculacao2_Ac\":106055,\"Vacinados\":3819,\"Vacinados_Ac\":400190,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612915200000,\"Inoculacao1\":4589,\"Inoculacao1_Ac\":298724,\"Inoculacao2\":10504,\"Inoculacao2_Ac\":116559,\"Vacinados\":15093,\"Vacinados_Ac\":415283,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613001600000,\"Inoculacao1\":4418,\"Inoculacao1_Ac\":303142,\"Inoculacao2\":16519,\"Inoculacao2_Ac\":133078,\"Vacinados\":20937,\"Vacinados_Ac\":436220,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613088000000,\"Inoculacao1\":7573,\"Inoculacao1_Ac\":310715,\"Inoculacao2\":24526,\"Inoculacao2_Ac\":157604,\"Vacinados\":32099,\"Vacinados_Ac\":468319,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613174400000,\"Inoculacao1\":9962,\"Inoculacao1_Ac\":320677,\"Inoculacao2\":27090,\"Inoculacao2_Ac\":184694,\"Vacinados\":37052,\"Vacinados_Ac\":505371,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613260800000,\"Inoculacao1\":8142,\"Inoculacao1_Ac\":328819,\"Inoculacao2\":9836,\"Inoculacao2_Ac\":194530,\"Vacinados\":17978,\"Vacinados_Ac\":523349,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613347200000,\"Inoculacao1\":2502,\"Inoculacao1_Ac\":331321,\"Inoculacao2\":3170,\"Inoculacao2_Ac\":197700,\"Vacinados\":5672,\"Vacinados_Ac\":529021,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613433600000,\"Inoculacao1\":5179,\"Inoculacao1_Ac\":336500,\"Inoculacao2\":5586,\"Inoculacao2_Ac\":203286,\"Vacinados\":10765,\"Vacinados_Ac\":539786,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613520000000,\"Inoculacao1\":10513,\"Inoculacao1_Ac\":347013,\"Inoculacao2\":6032,\"Inoculacao2_Ac\":209318,\"Vacinados\":16545,\"Vacinados_Ac\":556331,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613606400000,\"Inoculacao1\":14418,\"Inoculacao1_Ac\":361431,\"Inoculacao2\":7953,\"Inoculacao2_Ac\":217271,\"Vacinados\":22371,\"Vacinados_Ac\":578702,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613692800000,\"Inoculacao1\":27230,\"Inoculacao1_Ac\":388661,\"Inoculacao2\":12704,\"Inoculacao2_Ac\":229975,\"Vacinados\":39934,\"Vacinados_Ac\":618636,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613779200000,\"Inoculacao1\":24821,\"Inoculacao1_Ac\":413482,\"Inoculacao2\":12954,\"Inoculacao2_Ac\":242929,\"Vacinados\":37775,\"Vacinados_Ac\":656411,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613865600000,\"Inoculacao1\":15538,\"Inoculacao1_Ac\":429020,\"Inoculacao2\":3504,\"Inoculacao2_Ac\":246433,\"Vacinados\":19042,\"Vacinados_Ac\":675453,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613952000000,\"Inoculacao1\":3394,\"Inoculacao1_Ac\":432414,\"Inoculacao2\":1410,\"Inoculacao2_Ac\":247843,\"Vacinados\":4804,\"Vacinados_Ac\":680257,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614038400000,\"Inoculacao1\":12316,\"Inoculacao1_Ac\":444730,\"Inoculacao2\":1724,\"Inoculacao2_Ac\":249567,\"Vacinados\":14040,\"Vacinados_Ac\":694297,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614124800000,\"Inoculacao1\":24199,\"Inoculacao1_Ac\":468929,\"Inoculacao2\":2221,\"Inoculacao2_Ac\":251788,\"Vacinados\":26420,\"Vacinados_Ac\":720717,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614211200000,\"Inoculacao1\":28111,\"Inoculacao1_Ac\":497040,\"Inoculacao2\":3489,\"Inoculacao2_Ac\":255277,\"Vacinados\":31600,\"Vacinados_Ac\":752317,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614297600000,\"Inoculacao1\":41596,\"Inoculacao1_Ac\":538636,\"Inoculacao2\":3092,\"Inoculacao2_Ac\":258369,\"Vacinados\":44688,\"Vacinados_Ac\":797005,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614384000000,\"Inoculacao1\":35426,\"Inoculacao1_Ac\":574062,\"Inoculacao2\":5456,\"Inoculacao2_Ac\":263825,\"Vacinados\":40882,\"Vacinados_Ac\":837887,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614470400000,\"Inoculacao1\":22750,\"Inoculacao1_Ac\":596812,\"Inoculacao2\":1285,\"Inoculacao2_Ac\":265110,\"Vacinados\":24035,\"Vacinados_Ac\":861922,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614556800000,\"Inoculacao1\":6773,\"Inoculacao1_Ac\":603585,\"Inoculacao2\":256,\"Inoculacao2_Ac\":265366,\"Vacinados\":7029,\"Vacinados_Ac\":868951,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614643200000,\"Inoculacao1\":14808,\"Inoculacao1_Ac\":618393,\"Inoculacao2\":1350,\"Inoculacao2_Ac\":266716,\"Vacinados\":16158,\"Vacinados_Ac\":885109,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614729600000,\"Inoculacao1\":14057,\"Inoculacao1_Ac\":632450,\"Inoculacao2\":1665,\"Inoculacao2_Ac\":268381,\"Vacinados\":15722,\"Vacinados_Ac\":900831,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614816000000,\"Inoculacao1\":23269,\"Inoculacao1_Ac\":655719,\"Inoculacao2\":5033,\"Inoculacao2_Ac\":273414,\"Vacinados\":28302,\"Vacinados_Ac\":929133,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614902400000,\"Inoculacao1\":37241,\"Inoculacao1_Ac\":692960,\"Inoculacao2\":5809,\"Inoculacao2_Ac\":279223,\"Vacinados\":43050,\"Vacinados_Ac\":972183,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614988800000,\"Inoculacao1\":8202,\"Inoculacao1_Ac\":724202,\"Inoculacao2\":3830,\"Inoculacao2_Ac\":287830,\"Vacinados\":12032,\"Vacinados_Ac\":1012032,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615075200000,\"Inoculacao1\":13004,\"Inoculacao1_Ac\":737206,\"Inoculacao2\":4153,\"Inoculacao2_Ac\":291983,\"Vacinados\":17157,\"Vacinados_Ac\":1029189,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615161600000,\"Inoculacao1\":2556,\"Inoculacao1_Ac\":739762,\"Inoculacao2\":1355,\"Inoculacao2_Ac\":293338,\"Vacinados\":3911,\"Vacinados_Ac\":1033100,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615248000000,\"Inoculacao1\":8813,\"Inoculacao1_Ac\":748575,\"Inoculacao2\":2178,\"Inoculacao2_Ac\":295516,\"Vacinados\":10991,\"Vacinados_Ac\":1044091,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615334400000,\"Inoculacao1\":9088,\"Inoculacao1_Ac\":757663,\"Inoculacao2\":1906,\"Inoculacao2_Ac\":297422,\"Vacinados\":10994,\"Vacinados_Ac\":1055085,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615420800000,\"Inoculacao1\":14680,\"Inoculacao1_Ac\":772343,\"Inoculacao2\":8998,\"Inoculacao2_Ac\":306420,\"Vacinados\":23678,\"Vacinados_Ac\":1078763,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615507200000,\"Inoculacao1\":20819,\"Inoculacao1_Ac\":793162,\"Inoculacao2\":14303,\"Inoculacao2_Ac\":320723,\"Vacinados\":35122,\"Vacinados_Ac\":1113885,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615593600000,\"Inoculacao1\":813380,\"Inoculacao1_Ac\":813380,\"Inoculacao2\":334195,\"Inoculacao2_Ac\":334195,\"Vacinados\":1147575,\"Vacinados_Ac\":1147575,\"FID\":1},{\"Data\":1615680000000,\"Inoculacao1\":10933,\"Inoculacao1_Ac\":824313,\"Inoculacao2\":5365,\"Inoculacao2_Ac\":339560,\"Vacinados\":16298,\"Vacinados_Ac\":1163873,\"FID\":1},{\"Data\":1615766400000,\"Inoculacao1\":3195,\"Inoculacao1_Ac\":827508,\"Inoculacao2\":1147,\"Inoculacao2_Ac\":340707,\"Vacinados\":1147,\"Vacinados_Ac\":1168215,\"FID\":1},{\"Data\":1615852800000,\"Inoculacao1\":21956,\"Inoculacao1_Ac\":849464,\"Inoculacao2\":3015,\"Inoculacao2_Ac\":343722,\"Vacinados\":24971,\"Vacinados_Ac\":1193186,\"FID\":1},{\"Data\":1615939200000,\"Inoculacao1\":1558,\"Inoculacao1_Ac\":851022,\"Inoculacao2\":5947,\"Inoculacao2_Ac\":349669,\"Vacinados\":7505,\"Vacinados_Ac\":1200691,\"FID\":1},{\"Data\":1616025600000,\"Inoculacao1\":12548,\"Inoculacao1_Ac\":863570,\"Inoculacao2\":21897,\"Inoculacao2_Ac\":371566,\"Vacinados\":34445,\"Vacinados_Ac\":1235136,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616112000000,\"Inoculacao1\":11920,\"Inoculacao1_Ac\":875490,\"Inoculacao2\":33353,\"Inoculacao2_Ac\":404919,\"Vacinados\":45273,\"Vacinados_Ac\":1280409,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616198400000,\"Inoculacao1\":16882,\"Inoculacao1_Ac\":892372,\"Inoculacao2\":27975,\"Inoculacao2_Ac\":432894,\"Vacinados\":44857,\"Vacinados_Ac\":1325266,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616284800000,\"Inoculacao1\":10155,\"Inoculacao1_Ac\":902527,\"Inoculacao2\":12910,\"Inoculacao2_Ac\":445804,\"Vacinados\":23065,\"Vacinados_Ac\":1348331,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1}]");

/***/ }),

/***/ "T+iY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Xm2/");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_vaccines_v2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Njuj");
var _data_vaccines_v2_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("Njuj", 1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GyP+");




function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const cors = initMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()({
  methods: ['GET']
}));
async function handler(req, res) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "e"])(req);
  await cors(req, res);
  res.statusCode = 200;
  res.json(_data_vaccines_v2_json__WEBPACK_IMPORTED_MODULE_1__);
}

/***/ }),

/***/ "Xm2/":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "lN74":
/***/ (function(module) {

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ })

/******/ });