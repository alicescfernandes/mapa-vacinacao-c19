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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "58lZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Xm2/");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_sns_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rYNm");
var _data_sns_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("rYNm", 1);
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
  res.json(_data_sns_json__WEBPACK_IMPORTED_MODULE_1__);
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("58lZ");


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

/***/ "Xm2/":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "lN74":
/***/ (function(module) {

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ }),

/***/ "rYNm":
/***/ (function(module) {

module.exports = JSON.parse("[{\"\":1,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3333,\"TOTAL_VAC_2\":8696,\"TOTAL_VAC_UNK\":2,\"TOTAL\":12031,\"CUMUL_VAC_1\":27530,\"CUMUL_VAC_2\":17215,\"CUMUL_VAC_UNK\":4,\"CUMUL\":44749,\"COVER_1_VAC\":\"0,058989908\",\"COVER\":\"0,036887441\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":2,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4034,\"TOTAL_VAC_2\":2782,\"TOTAL_VAC_UNK\":2,\"TOTAL\":6818,\"CUMUL_VAC_1\":31564,\"CUMUL_VAC_2\":19997,\"CUMUL_VAC_UNK\":6,\"CUMUL\":51567,\"COVER_1_VAC\":\"0,067633761\",\"COVER\":\"0,042848572\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":3,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11967,\"TOTAL_VAC_2\":1636,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13603,\"CUMUL_VAC_1\":43531,\"CUMUL_VAC_2\":21633,\"CUMUL_VAC_UNK\":6,\"CUMUL\":65170,\"COVER_1_VAC\":\"0,09327605\",\"COVER\":\"0,046354111\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":4,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10368,\"TOTAL_VAC_2\":2805,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13173,\"CUMUL_VAC_1\":53899,\"CUMUL_VAC_2\":24438,\"CUMUL_VAC_UNK\":6,\"CUMUL\":78343,\"COVER_1_VAC\":\"0,115492083\",\"COVER\":\"0,052364525\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":5,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5761,\"TOTAL_VAC_2\":1651,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7412,\"CUMUL_VAC_1\":59660,\"CUMUL_VAC_2\":26089,\"CUMUL_VAC_UNK\":6,\"CUMUL\":85755,\"COVER_1_VAC\":\"0,127836465\",\"COVER\":\"0,055902205\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":6,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2361,\"TOTAL_VAC_2\":2878,\"TOTAL_VAC_UNK\":1,\"TOTAL\":5240,\"CUMUL_VAC_1\":12572,\"CUMUL_VAC_2\":6263,\"CUMUL_VAC_UNK\":1,\"CUMUL\":18836,\"COVER_1_VAC\":\"0,028676615\",\"COVER\":\"0,014285845\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":7,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3149,\"TOTAL_VAC_2\":2099,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5248,\"CUMUL_VAC_1\":15721,\"CUMUL_VAC_2\":8362,\"CUMUL_VAC_UNK\":1,\"CUMUL\":24084,\"COVER_1_VAC\":\"0,035859454\",\"COVER\":\"0,019073644\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":8,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8395,\"TOTAL_VAC_2\":1059,\"TOTAL_VAC_UNK\":1,\"TOTAL\":9455,\"CUMUL_VAC_1\":24116,\"CUMUL_VAC_2\":9421,\"CUMUL_VAC_UNK\":2,\"CUMUL\":33539,\"COVER_1_VAC\":\"0,055008371\",\"COVER\":\"0,021489213\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":9,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4576,\"TOTAL_VAC_2\":407,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4983,\"CUMUL_VAC_1\":28692,\"CUMUL_VAC_2\":9828,\"CUMUL_VAC_UNK\":2,\"CUMUL\":38522,\"COVER_1_VAC\":\"0,065446185\",\"COVER\":\"0,022417576\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":10,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5019,\"TOTAL_VAC_2\":1499,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6518,\"CUMUL_VAC_1\":33711,\"CUMUL_VAC_2\":11327,\"CUMUL_VAC_UNK\":2,\"CUMUL\":45040,\"COVER_1_VAC\":\"0,076894477\",\"COVER\":\"0,025836781\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":11,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7448,\"TOTAL_VAC_2\":26937,\"TOTAL_VAC_UNK\":4,\"TOTAL\":34389,\"CUMUL_VAC_1\":79544,\"CUMUL_VAC_2\":50670,\"CUMUL_VAC_UNK\":8,\"CUMUL\":130222,\"COVER_1_VAC\":\"0,04892032\",\"COVER\":\"0,031162534\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":12,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25063,\"TOTAL_VAC_2\":9813,\"TOTAL_VAC_UNK\":3,\"TOTAL\":34879,\"CUMUL_VAC_1\":104607,\"CUMUL_VAC_2\":60483,\"CUMUL_VAC_UNK\":11,\"CUMUL\":165101,\"COVER_1_VAC\":\"0,064334304\",\"COVER\":\"0,037197623\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":13,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":37934,\"TOTAL_VAC_2\":3043,\"TOTAL_VAC_UNK\":1,\"TOTAL\":40978,\"CUMUL_VAC_1\":142541,\"CUMUL_VAC_2\":63526,\"CUMUL_VAC_UNK\":12,\"CUMUL\":206079,\"COVER_1_VAC\":\"0,087664077\",\"COVER\":\"0,039069097\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":14,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":28192,\"TOTAL_VAC_2\":5561,\"TOTAL_VAC_UNK\":1,\"TOTAL\":33754,\"CUMUL_VAC_1\":170733,\"CUMUL_VAC_2\":69087,\"CUMUL_VAC_UNK\":13,\"CUMUL\":239833,\"COVER_1_VAC\":\"0,105002426\",\"COVER\":\"0,042489165\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":15,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17287,\"TOTAL_VAC_2\":13350,\"TOTAL_VAC_UNK\":0,\"TOTAL\":30637,\"CUMUL_VAC_1\":188020,\"CUMUL_VAC_2\":82437,\"CUMUL_VAC_UNK\":13,\"CUMUL\":270470,\"COVER_1_VAC\":\"0,115634096\",\"COVER\":\"0,050699543\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":16,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14249,\"TOTAL_VAC_2\":29465,\"TOTAL_VAC_UNK\":6,\"TOTAL\":43720,\"CUMUL_VAC_1\":113976,\"CUMUL_VAC_2\":59757,\"CUMUL_VAC_UNK\":8,\"CUMUL\":173741,\"COVER_1_VAC\":\"0,030867444\",\"COVER\":\"0,016183634\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":17,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32416,\"TOTAL_VAC_2\":18856,\"TOTAL_VAC_UNK\":8,\"TOTAL\":51280,\"CUMUL_VAC_1\":146392,\"CUMUL_VAC_2\":78613,\"CUMUL_VAC_UNK\":16,\"CUMUL\":225021,\"COVER_1_VAC\":\"0,039646477\",\"COVER\":\"0,021290293\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":18,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":48592,\"TOTAL_VAC_2\":6447,\"TOTAL_VAC_UNK\":4,\"TOTAL\":55043,\"CUMUL_VAC_1\":194984,\"CUMUL_VAC_2\":85060,\"CUMUL_VAC_UNK\":20,\"CUMUL\":280064,\"COVER_1_VAC\":\"0,05280636\",\"COVER\":\"0,023036295\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":19,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44314,\"TOTAL_VAC_2\":12186,\"TOTAL_VAC_UNK\":2,\"TOTAL\":56502,\"CUMUL_VAC_1\":239298,\"CUMUL_VAC_2\":97246,\"CUMUL_VAC_UNK\":22,\"CUMUL\":336566,\"COVER_1_VAC\":\"0,064807658\",\"COVER\":\"0,026336557\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":20,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32207,\"TOTAL_VAC_2\":15938,\"TOTAL_VAC_UNK\":0,\"TOTAL\":48145,\"CUMUL_VAC_1\":271505,\"CUMUL_VAC_2\":113184,\"CUMUL_VAC_UNK\":22,\"CUMUL\":384711,\"COVER_1_VAC\":\"0,073530089\",\"COVER\":\"0,030652951\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":21,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8440,\"TOTAL_VAC_2\":28396,\"TOTAL_VAC_UNK\":6,\"TOTAL\":36842,\"CUMUL_VAC_1\":104770,\"CUMUL_VAC_2\":68516,\"CUMUL_VAC_UNK\":7,\"CUMUL\":173293,\"COVER_1_VAC\":\"0,029303523\",\"COVER\":\"0,019163503\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":22,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32662,\"TOTAL_VAC_2\":14810,\"TOTAL_VAC_UNK\":5,\"TOTAL\":47477,\"CUMUL_VAC_1\":137432,\"CUMUL_VAC_2\":83326,\"CUMUL_VAC_UNK\":12,\"CUMUL\":220770,\"COVER_1_VAC\":\"0,038438883\",\"COVER\":\"0,023305769\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":23,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64005,\"TOTAL_VAC_2\":4175,\"TOTAL_VAC_UNK\":1,\"TOTAL\":68181,\"CUMUL_VAC_1\":201437,\"CUMUL_VAC_2\":87501,\"CUMUL_VAC_UNK\":13,\"CUMUL\":288951,\"COVER_1_VAC\":\"0,056340687\",\"COVER\":\"0,02447349\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":24,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47389,\"TOTAL_VAC_2\":6305,\"TOTAL_VAC_UNK\":0,\"TOTAL\":53694,\"CUMUL_VAC_1\":248826,\"CUMUL_VAC_2\":93806,\"CUMUL_VAC_UNK\":13,\"CUMUL\":342645,\"COVER_1_VAC\":\"0,069595098\",\"COVER\":\"0,02623696\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":25,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":24957,\"TOTAL_VAC_2\":13582,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38539,\"CUMUL_VAC_1\":273783,\"CUMUL_VAC_2\":107388,\"CUMUL_VAC_UNK\":13,\"CUMUL\":381184,\"COVER_1_VAC\":\"0,076575417\",\"COVER\":\"0,030035762\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":26,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":67,\"TOTAL_VAC_2\":119,\"TOTAL_VAC_UNK\":0,\"TOTAL\":186,\"CUMUL_VAC_1\":684,\"CUMUL_VAC_2\":438,\"CUMUL_VAC_UNK\":1,\"CUMUL\":1123,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":27,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":145,\"TOTAL_VAC_2\":106,\"TOTAL_VAC_UNK\":1,\"TOTAL\":252,\"CUMUL_VAC_1\":829,\"CUMUL_VAC_2\":544,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1375,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":28,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":72,\"TOTAL_VAC_2\":19,\"TOTAL_VAC_UNK\":0,\"TOTAL\":91,\"CUMUL_VAC_1\":901,\"CUMUL_VAC_2\":563,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1466,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":29,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":33,\"TOTAL_VAC_UNK\":0,\"TOTAL\":88,\"CUMUL_VAC_1\":956,\"CUMUL_VAC_2\":596,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1554,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":30,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":267,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":280,\"CUMUL_VAC_1\":1223,\"CUMUL_VAC_2\":609,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1834,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":31,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":30,\"TOTAL_VAC_2\":67,\"TOTAL_VAC_UNK\":0,\"TOTAL\":97,\"CUMUL_VAC_1\":163,\"CUMUL_VAC_2\":72,\"CUMUL_VAC_UNK\":0,\"CUMUL\":235,\"COVER_1_VAC\":\"0,000100093\",\"COVER\":\"4,42E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":32,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":20,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":183,\"CUMUL_VAC_2\":88,\"CUMUL_VAC_UNK\":0,\"CUMUL\":271,\"COVER_1_VAC\":\"0,000112375\",\"COVER\":\"5,40E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":33,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":21,\"TOTAL_VAC_2\":25,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":204,\"CUMUL_VAC_2\":113,\"CUMUL_VAC_UNK\":0,\"CUMUL\":317,\"COVER_1_VAC\":\"0,00012527\",\"COVER\":\"6,94E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":34,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":8,\"TOTAL_VAC_2\":26,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34,\"CUMUL_VAC_1\":212,\"CUMUL_VAC_2\":139,\"CUMUL_VAC_UNK\":0,\"CUMUL\":351,\"COVER_1_VAC\":\"0,000130183\",\"COVER\":\"8,54E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":35,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":11,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":22,\"CUMUL_VAC_1\":223,\"CUMUL_VAC_2\":150,\"CUMUL_VAC_UNK\":0,\"CUMUL\":373,\"COVER_1_VAC\":\"0,000136937\",\"COVER\":\"9,21E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":36,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1352,\"TOTAL_VAC_2\":2944,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4296,\"CUMUL_VAC_1\":11423,\"CUMUL_VAC_2\":6393,\"CUMUL_VAC_UNK\":1,\"CUMUL\":17817,\"COVER_1_VAC\":\"0,015622735\",\"COVER\":\"0,008743425\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":37,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2147,\"TOTAL_VAC_2\":1659,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3806,\"CUMUL_VAC_1\":13570,\"CUMUL_VAC_2\":8052,\"CUMUL_VAC_UNK\":1,\"CUMUL\":21623,\"COVER_1_VAC\":\"0,018559092\",\"COVER\":\"0,011012366\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":38,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1204,\"TOTAL_VAC_2\":534,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1738,\"CUMUL_VAC_1\":14774,\"CUMUL_VAC_2\":8586,\"CUMUL_VAC_UNK\":1,\"CUMUL\":23361,\"COVER_1_VAC\":\"0,02020575\",\"COVER\":\"0,011742695\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":39,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":861,\"TOTAL_VAC_2\":851,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1712,\"CUMUL_VAC_1\":15635,\"CUMUL_VAC_2\":9437,\"CUMUL_VAC_UNK\":1,\"CUMUL\":25073,\"COVER_1_VAC\":\"0,021383302\",\"COVER\":\"0,01290657\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":40,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1105,\"TOTAL_VAC_2\":485,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1590,\"CUMUL_VAC_1\":16740,\"CUMUL_VAC_2\":9922,\"CUMUL_VAC_UNK\":1,\"CUMUL\":26663,\"COVER_1_VAC\":\"0,022894562\",\"COVER\":\"0,013569883\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":41,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":12422,\"TOTAL_VAC_2\":29835,\"TOTAL_VAC_UNK\":8,\"TOTAL\":42265,\"CUMUL_VAC_1\":134538,\"CUMUL_VAC_2\":85436,\"CUMUL_VAC_UNK\":14,\"CUMUL\":219988,\"COVER_1_VAC\":\"0,042321814\",\"COVER\":\"0,026875727\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":42,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":20612,\"TOTAL_VAC_2\":18328,\"TOTAL_VAC_UNK\":7,\"TOTAL\":38947,\"CUMUL_VAC_1\":155150,\"CUMUL_VAC_2\":103764,\"CUMUL_VAC_UNK\":21,\"CUMUL\":258935,\"COVER_1_VAC\":\"0,048805761\",\"COVER\":\"0,032641192\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":43,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":10673,\"TOTAL_VAC_2\":5172,\"TOTAL_VAC_UNK\":3,\"TOTAL\":15848,\"CUMUL_VAC_1\":165823,\"CUMUL_VAC_2\":108936,\"CUMUL_VAC_UNK\":24,\"CUMUL\":274783,\"COVER_1_VAC\":\"0,052163182\",\"COVER\":\"0,034268156\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":44,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":6921,\"TOTAL_VAC_2\":7777,\"TOTAL_VAC_UNK\":0,\"TOTAL\":14698,\"CUMUL_VAC_1\":172744,\"CUMUL_VAC_2\":116713,\"CUMUL_VAC_UNK\":24,\"CUMUL\":289481,\"COVER_1_VAC\":\"0,054340331\",\"COVER\":\"0,036714578\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":45,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":12859,\"TOTAL_VAC_2\":4428,\"TOTAL_VAC_UNK\":0,\"TOTAL\":17287,\"CUMUL_VAC_1\":185603,\"CUMUL_VAC_2\":121141,\"CUMUL_VAC_UNK\":24,\"CUMUL\":306768,\"COVER_1_VAC\":\"0,058385405\",\"COVER\":\"0,0381075\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":46,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":6034,\"TOTAL_VAC_2\":21665,\"TOTAL_VAC_UNK\":4,\"TOTAL\":27703,\"CUMUL_VAC_1\":79224,\"CUMUL_VAC_2\":49509,\"CUMUL_VAC_UNK\":6,\"CUMUL\":128739,\"COVER_1_VAC\":\"0,038471288\",\"COVER\":\"0,024041641\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":47,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":23934,\"TOTAL_VAC_2\":12445,\"TOTAL_VAC_UNK\":5,\"TOTAL\":36384,\"CUMUL_VAC_1\":103158,\"CUMUL_VAC_2\":61954,\"CUMUL_VAC_UNK\":11,\"CUMUL\":165123,\"COVER_1_VAC\":\"0,050093673\",\"COVER\":\"0,030084951\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":48,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":48895,\"TOTAL_VAC_2\":3749,\"TOTAL_VAC_UNK\":2,\"TOTAL\":52646,\"CUMUL_VAC_1\":152053,\"CUMUL_VAC_2\":65703,\"CUMUL_VAC_UNK\":13,\"CUMUL\":217769,\"COVER_1_VAC\":\"0,073837155\",\"COVER\":\"0,031905471\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":49,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":29505,\"TOTAL_VAC_2\":4742,\"TOTAL_VAC_UNK\":2,\"TOTAL\":34249,\"CUMUL_VAC_1\":181558,\"CUMUL_VAC_2\":70445,\"CUMUL_VAC_UNK\":15,\"CUMUL\":252018,\"COVER_1_VAC\":\"0,088164825\",\"COVER\":\"0,034208193\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":50,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":19038,\"TOTAL_VAC_2\":3314,\"TOTAL_VAC_UNK\":0,\"TOTAL\":22352,\"CUMUL_VAC_1\":200596,\"CUMUL_VAC_2\":73759,\"CUMUL_VAC_UNK\":15,\"CUMUL\":274370,\"COVER_1_VAC\":\"0,097409705\",\"COVER\":\"0,035817476\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":51,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":2704,\"TOTAL_VAC_2\":11135,\"TOTAL_VAC_UNK\":3,\"TOTAL\":13842,\"CUMUL_VAC_1\":32971,\"CUMUL_VAC_2\":17494,\"CUMUL_VAC_UNK\":4,\"CUMUL\":50469,\"COVER_1_VAC\":\"0,021337277\",\"COVER\":\"0,011321292\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":52,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":4329,\"TOTAL_VAC_2\":7018,\"TOTAL_VAC_UNK\":3,\"TOTAL\":11350,\"CUMUL_VAC_1\":37300,\"CUMUL_VAC_2\":24512,\"CUMUL_VAC_UNK\":7,\"CUMUL\":61819,\"COVER_1_VAC\":\"0,024138801\",\"COVER\":\"0,015863011\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":53,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":10870,\"TOTAL_VAC_2\":2041,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12911,\"CUMUL_VAC_1\":48170,\"CUMUL_VAC_2\":26553,\"CUMUL_VAC_UNK\":7,\"CUMUL\":74730,\"COVER_1_VAC\":\"0,031173353\",\"COVER\":\"0,01718385\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":54,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":12663,\"TOTAL_VAC_2\":2703,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15366,\"CUMUL_VAC_1\":60833,\"CUMUL_VAC_2\":29256,\"CUMUL_VAC_UNK\":7,\"CUMUL\":90096,\"COVER_1_VAC\":\"0,039368249\",\"COVER\":\"0,018933104\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":55,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":14637,\"TOTAL_VAC_2\":2795,\"TOTAL_VAC_UNK\":0,\"TOTAL\":17432,\"CUMUL_VAC_1\":75470,\"CUMUL_VAC_2\":32051,\"CUMUL_VAC_UNK\":7,\"CUMUL\":107528,\"COVER_1_VAC\":\"0,048840626\",\"COVER\":\"0,020741896\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":56,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":13356,\"TOTAL_VAC_2\":30845,\"TOTAL_VAC_UNK\":4,\"TOTAL\":44205,\"CUMUL_VAC_1\":80756,\"CUMUL_VAC_2\":43955,\"CUMUL_VAC_UNK\":4,\"CUMUL\":124715,\"COVER_1_VAC\":\"0,123152469\",\"COVER\":\"0,06703114\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":57,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":46427,\"TOTAL_VAC_2\":9000,\"TOTAL_VAC_UNK\":4,\"TOTAL\":55431,\"CUMUL_VAC_1\":127183,\"CUMUL_VAC_2\":52955,\"CUMUL_VAC_UNK\":8,\"CUMUL\":180146,\"COVER_1_VAC\":\"0,193953396\",\"COVER\":\"0,080756092\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":58,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":99302,\"TOTAL_VAC_2\":4858,\"TOTAL_VAC_UNK\":2,\"TOTAL\":104162,\"CUMUL_VAC_1\":226485,\"CUMUL_VAC_2\":57813,\"CUMUL_VAC_UNK\":10,\"CUMUL\":284308,\"COVER_1_VAC\":\"0,345388416\",\"COVER\":\"0,088164516\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":59,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":84936,\"TOTAL_VAC_2\":11198,\"TOTAL_VAC_UNK\":1,\"TOTAL\":96135,\"CUMUL_VAC_1\":311421,\"CUMUL_VAC_2\":69011,\"CUMUL_VAC_UNK\":11,\"CUMUL\":380443,\"COVER_1_VAC\":\"0,474915363\",\"COVER\":\"0,105241407\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":60,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":37848,\"TOTAL_VAC_2\":35000,\"TOTAL_VAC_UNK\":0,\"TOTAL\":72848,\"CUMUL_VAC_1\":349269,\"CUMUL_VAC_2\":104011,\"CUMUL_VAC_UNK\":11,\"CUMUL\":453291,\"COVER_1_VAC\":\"0,532633361\",\"COVER\":\"0,15861622\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":61,\"TYPE\":\"GENERAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":35898,\"TOTAL_VAC_2\":96491,\"TOTAL_VAC_UNK\":19,\"TOTAL\":132408,\"CUMUL_VAC_1\":339076,\"CUMUL_VAC_2\":202859,\"CUMUL_VAC_UNK\":29,\"CUMUL\":541964,\"COVER_1_VAC\":\"0,034603621\",\"COVER\":\"0,020702308\",\"RECEIVED\":651900,\"DISTRIBUTED\":571981},{\"\":62,\"TYPE\":\"GENERAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":97469,\"TOTAL_VAC_2\":48466,\"TOTAL_VAC_UNK\":19,\"TOTAL\":145954,\"CUMUL_VAC_1\":436545,\"CUMUL_VAC_2\":251325,\"CUMUL_VAC_UNK\":48,\"CUMUL\":687918,\"COVER_1_VAC\":\"0,044550595\",\"COVER\":\"0,025648394\",\"RECEIVED\":830730,\"DISTRIBUTED\":718143},{\"\":63,\"TYPE\":\"GENERAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":170965,\"TOTAL_VAC_2\":16379,\"TOTAL_VAC_UNK\":7,\"TOTAL\":187351,\"CUMUL_VAC_1\":607510,\"CUMUL_VAC_2\":267704,\"CUMUL_VAC_UNK\":55,\"CUMUL\":875269,\"COVER_1_VAC\":\"0,061998035\",\"COVER\":\"0,027319916\",\"RECEIVED\":1002999,\"DISTRIBUTED\":933847},{\"\":64,\"TYPE\":\"GENERAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":134894,\"TOTAL_VAC_2\":27297,\"TOTAL_VAC_UNK\":3,\"TOTAL\":162194,\"CUMUL_VAC_1\":742404,\"CUMUL_VAC_2\":295001,\"CUMUL_VAC_UNK\":58,\"CUMUL\":1037463,\"COVER_1_VAC\":\"0,075764331\",\"COVER\":\"0,030105648\",\"RECEIVED\":1186389,\"DISTRIBUTED\":1095103},{\"\":65,\"TYPE\":\"GENERAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":85498,\"TOTAL_VAC_2\":46033,\"TOTAL_VAC_UNK\":0,\"TOTAL\":131531,\"CUMUL_VAC_1\":827902,\"CUMUL_VAC_2\":341034,\"CUMUL_VAC_UNK\":58,\"CUMUL\":1168994,\"COVER_1_VAC\":\"0,084489633\",\"COVER\":\"0,03480344\",\"RECEIVED\":1468929,\"DISTRIBUTED\":1264093}]");

/***/ })

/******/ });