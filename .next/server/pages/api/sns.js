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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("58lZ");


/***/ }),

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
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "f"])(req);
  await cors(req, res);
  res.statusCode = 200;
  res.json(_data_sns_json__WEBPACK_IMPORTED_MODULE_1__);
}

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "GyP+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hexToRgb; });
/* unused harmony export dateWithoutTimezone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return trackPlausible; });
/* unused harmony export downloadPNG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return perHundred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchWithLocalCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDateShort; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tDG4");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_generic_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lN74");
var _data_generic_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("lN74", 1);
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

  return;
  if (req === undefined) return;
  if (req.url !== '/' && req.url !== '/madeira' && !req.url.match('/api/')) return;
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
  node_fetch__WEBPACK_IMPORTED_MODULE_2___default()('https://plausible.io/api/event', {
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
function perHundred(total, populacaoTotal = _data_generic_json__WEBPACK_IMPORTED_MODULE_3__["populacao"].valor) {
  return total / populacaoTotal * 100;
}
function fetchWithLocalCache(url, options) {
  let useCache = true;
  let [path, cacheBuster] = url.split('?');
  let items = JSON.parse(JSON.stringify(localStorage));

  for (var k in items) {
    let [lsPath, lsCacheBuster] = k.split('?');

    if (lsPath === path && lsCacheBuster !== cacheBuster) {
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
function formatDateShort(date) {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(date), "dd'/'MM'/'yyyy", {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_1__["pt"]
  });
}

/***/ }),

/***/ "Xm2/":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "lN74":
/***/ (function(module) {

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ }),

/***/ "rYNm":
/***/ (function(module) {

module.exports = JSON.parse("[{\"\":1,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3332,\"TOTAL_VAC_2\":8771,\"TOTAL_VAC_UNK\":1,\"TOTAL\":12104,\"CUMUL_VAC_1\":27521,\"CUMUL_VAC_2\":17347,\"CUMUL_VAC_UNK\":1,\"CUMUL\":44869,\"COVER_1_VAC\":\"0,058970623\",\"COVER\":\"0,037170284\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":2,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4039,\"TOTAL_VAC_2\":2804,\"TOTAL_VAC_UNK\":1,\"TOTAL\":6844,\"CUMUL_VAC_1\":31560,\"CUMUL_VAC_2\":20151,\"CUMUL_VAC_UNK\":2,\"CUMUL\":51713,\"COVER_1_VAC\":\"0,06762519\",\"COVER\":\"0,043178555\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":3,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":12008,\"TOTAL_VAC_2\":1646,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13654,\"CUMUL_VAC_1\":43568,\"CUMUL_VAC_2\":21797,\"CUMUL_VAC_UNK\":2,\"CUMUL\":65367,\"COVER_1_VAC\":\"0,093355332\",\"COVER\":\"0,046705522\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":4,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10371,\"TOTAL_VAC_2\":2817,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13188,\"CUMUL_VAC_1\":53939,\"CUMUL_VAC_2\":24614,\"CUMUL_VAC_UNK\":2,\"CUMUL\":78555,\"COVER_1_VAC\":\"0,115577793\",\"COVER\":\"0,052741649\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":5,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5776,\"TOTAL_VAC_2\":1661,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7437,\"CUMUL_VAC_1\":59715,\"CUMUL_VAC_2\":26275,\"CUMUL_VAC_UNK\":2,\"CUMUL\":85992,\"COVER_1_VAC\":\"0,127954317\",\"COVER\":\"0,056300756\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":6,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3665,\"TOTAL_VAC_2\":7702,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11367,\"CUMUL_VAC_1\":63380,\"CUMUL_VAC_2\":33977,\"CUMUL_VAC_UNK\":2,\"CUMUL\":97359,\"COVER_1_VAC\":\"0,135807495\",\"COVER\":\"0,072804217\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":7,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11777,\"TOTAL_VAC_2\":2089,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13866,\"CUMUL_VAC_1\":75157,\"CUMUL_VAC_2\":36066,\"CUMUL_VAC_UNK\":2,\"CUMUL\":111225,\"COVER_1_VAC\":\"0,161042662\",\"COVER\":\"0,077280422\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":8,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2361,\"TOTAL_VAC_2\":2896,\"TOTAL_VAC_UNK\":1,\"TOTAL\":5258,\"CUMUL_VAC_1\":12711,\"CUMUL_VAC_2\":6303,\"CUMUL_VAC_UNK\":1,\"CUMUL\":19015,\"COVER_1_VAC\":\"0,028993673\",\"COVER\":\"0,014377084\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":9,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3166,\"TOTAL_VAC_2\":2109,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5275,\"CUMUL_VAC_1\":15877,\"CUMUL_VAC_2\":8412,\"CUMUL_VAC_UNK\":1,\"CUMUL\":24290,\"COVER_1_VAC\":\"0,036215289\",\"COVER\":\"0,019187694\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":10,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8429,\"TOTAL_VAC_2\":1063,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9492,\"CUMUL_VAC_1\":24306,\"CUMUL_VAC_2\":9475,\"CUMUL_VAC_UNK\":1,\"CUMUL\":33782,\"COVER_1_VAC\":\"0,055441759\",\"COVER\":\"0,021612387\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":11,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4577,\"TOTAL_VAC_2\":544,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5121,\"CUMUL_VAC_1\":28883,\"CUMUL_VAC_2\":10019,\"CUMUL_VAC_UNK\":1,\"CUMUL\":38903,\"COVER_1_VAC\":\"0,065881854\",\"COVER\":\"0,022853246\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":12,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5034,\"TOTAL_VAC_2\":1530,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6564,\"CUMUL_VAC_1\":33917,\"CUMUL_VAC_2\":11549,\"CUMUL_VAC_UNK\":1,\"CUMUL\":45467,\"COVER_1_VAC\":\"0,077364361\",\"COVER\":\"0,026343161\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":13,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2631,\"TOTAL_VAC_2\":2993,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5624,\"CUMUL_VAC_1\":36548,\"CUMUL_VAC_2\":14542,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51091,\"COVER_1_VAC\":\"0,083365647\",\"COVER\":\"0,033170166\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":14,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9305,\"TOTAL_VAC_2\":4274,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13579,\"CUMUL_VAC_1\":45853,\"CUMUL_VAC_2\":18816,\"CUMUL_VAC_UNK\":1,\"CUMUL\":64670,\"COVER_1_VAC\":\"0,104590266\",\"COVER\":\"0,042919121\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":15,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7460,\"TOTAL_VAC_2\":27027,\"TOTAL_VAC_UNK\":4,\"TOTAL\":34491,\"CUMUL_VAC_1\":79684,\"CUMUL_VAC_2\":50871,\"CUMUL_VAC_UNK\":8,\"CUMUL\":130563,\"COVER_1_VAC\":\"0,049006421\",\"COVER\":\"0,031286151\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":16,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25166,\"TOTAL_VAC_2\":9855,\"TOTAL_VAC_UNK\":3,\"TOTAL\":35024,\"CUMUL_VAC_1\":104850,\"CUMUL_VAC_2\":60726,\"CUMUL_VAC_UNK\":11,\"CUMUL\":165587,\"COVER_1_VAC\":\"0,064483752\",\"COVER\":\"0,03734707\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":17,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":38070,\"TOTAL_VAC_2\":3066,\"TOTAL_VAC_UNK\":1,\"TOTAL\":41137,\"CUMUL_VAC_1\":142920,\"CUMUL_VAC_2\":63792,\"CUMUL_VAC_UNK\":12,\"CUMUL\":206724,\"COVER_1_VAC\":\"0,087897165\",\"COVER\":\"0,039232689\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":18,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":28226,\"TOTAL_VAC_2\":5732,\"TOTAL_VAC_UNK\":1,\"TOTAL\":33959,\"CUMUL_VAC_1\":171146,\"CUMUL_VAC_2\":69524,\"CUMUL_VAC_UNK\":13,\"CUMUL\":240683,\"COVER_1_VAC\":\"0,105256425\",\"COVER\":\"0,042757924\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":19,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17386,\"TOTAL_VAC_2\":13382,\"TOTAL_VAC_UNK\":0,\"TOTAL\":30768,\"CUMUL_VAC_1\":188532,\"CUMUL_VAC_2\":82906,\"CUMUL_VAC_UNK\":13,\"CUMUL\":271451,\"COVER_1_VAC\":\"0,115948981\",\"COVER\":\"0,050987982\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":20,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16406,\"TOTAL_VAC_2\":23985,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40393,\"CUMUL_VAC_1\":204938,\"CUMUL_VAC_2\":106891,\"CUMUL_VAC_UNK\":15,\"CUMUL\":311844,\"COVER_1_VAC\":\"0,126038828\",\"COVER\":\"0,065738986\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":21,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47307,\"TOTAL_VAC_2\":4199,\"TOTAL_VAC_UNK\":0,\"TOTAL\":51506,\"CUMUL_VAC_1\":252245,\"CUMUL_VAC_2\":111090,\"CUMUL_VAC_UNK\":15,\"CUMUL\":363350,\"COVER_1_VAC\":\"0,155133085\",\"COVER\":\"0,068321411\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":22,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14267,\"TOTAL_VAC_2\":30203,\"TOTAL_VAC_UNK\":1,\"TOTAL\":44471,\"CUMUL_VAC_1\":114122,\"CUMUL_VAC_2\":60633,\"CUMUL_VAC_UNK\":2,\"CUMUL\":174757,\"COVER_1_VAC\":\"0,030906984\",\"COVER\":\"0,016420876\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":23,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32507,\"TOTAL_VAC_2\":18958,\"TOTAL_VAC_UNK\":3,\"TOTAL\":51468,\"CUMUL_VAC_1\":146629,\"CUMUL_VAC_2\":79591,\"CUMUL_VAC_UNK\":5,\"CUMUL\":226225,\"COVER_1_VAC\":\"0,039710662\",\"COVER\":\"0,021555158\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":24,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":48880,\"TOTAL_VAC_2\":6607,\"TOTAL_VAC_UNK\":0,\"TOTAL\":55487,\"CUMUL_VAC_1\":195509,\"CUMUL_VAC_2\":86198,\"CUMUL_VAC_UNK\":5,\"CUMUL\":281712,\"COVER_1_VAC\":\"0,052948543\",\"COVER\":\"0,023344493\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":25,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44404,\"TOTAL_VAC_2\":12488,\"TOTAL_VAC_UNK\":1,\"TOTAL\":56893,\"CUMUL_VAC_1\":239913,\"CUMUL_VAC_2\":98686,\"CUMUL_VAC_UNK\":6,\"CUMUL\":338605,\"COVER_1_VAC\":\"0,064974215\",\"COVER\":\"0,026726544\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":26,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32664,\"TOTAL_VAC_2\":16318,\"TOTAL_VAC_UNK\":0,\"TOTAL\":48982,\"CUMUL_VAC_1\":272577,\"CUMUL_VAC_2\":115004,\"CUMUL_VAC_UNK\":6,\"CUMUL\":387587,\"COVER_1_VAC\":\"0,073820412\",\"COVER\":\"0,031145851\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":27,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25349,\"TOTAL_VAC_2\":28741,\"TOTAL_VAC_UNK\":1,\"TOTAL\":54091,\"CUMUL_VAC_1\":297926,\"CUMUL_VAC_2\":143745,\"CUMUL_VAC_UNK\":7,\"CUMUL\":441678,\"COVER_1_VAC\":\"0,080685532\",\"COVER\":\"0,038929606\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":28,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":87805,\"TOTAL_VAC_2\":7385,\"TOTAL_VAC_UNK\":0,\"TOTAL\":95190,\"CUMUL_VAC_1\":385731,\"CUMUL_VAC_2\":151130,\"CUMUL_VAC_UNK\":7,\"CUMUL\":536868,\"COVER_1_VAC\":\"0,104465239\",\"COVER\":\"0,040929642\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":29,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8455,\"TOTAL_VAC_2\":28446,\"TOTAL_VAC_UNK\":6,\"TOTAL\":36907,\"CUMUL_VAC_1\":104786,\"CUMUL_VAC_2\":68604,\"CUMUL_VAC_UNK\":7,\"CUMUL\":173397,\"COVER_1_VAC\":\"0,029307998\",\"COVER\":\"0,019188116\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":30,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32741,\"TOTAL_VAC_2\":14836,\"TOTAL_VAC_UNK\":3,\"TOTAL\":47580,\"CUMUL_VAC_1\":137527,\"CUMUL_VAC_2\":83440,\"CUMUL_VAC_UNK\":10,\"CUMUL\":220977,\"COVER_1_VAC\":\"0,038465454\",\"COVER\":\"0,023337654\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":31,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64263,\"TOTAL_VAC_2\":4207,\"TOTAL_VAC_UNK\":1,\"TOTAL\":68471,\"CUMUL_VAC_1\":201790,\"CUMUL_VAC_2\":87647,\"CUMUL_VAC_UNK\":11,\"CUMUL\":289448,\"COVER_1_VAC\":\"0,056439419\",\"COVER\":\"0,024514326\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":32,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47428,\"TOTAL_VAC_2\":6390,\"TOTAL_VAC_UNK\":0,\"TOTAL\":53818,\"CUMUL_VAC_1\":249218,\"CUMUL_VAC_2\":94037,\"CUMUL_VAC_UNK\":11,\"CUMUL\":343266,\"COVER_1_VAC\":\"0,069704738\",\"COVER\":\"0,026301569\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":33,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25031,\"TOTAL_VAC_2\":13622,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38653,\"CUMUL_VAC_1\":274249,\"CUMUL_VAC_2\":107659,\"CUMUL_VAC_UNK\":11,\"CUMUL\":381919,\"COVER_1_VAC\":\"0,076705755\",\"COVER\":\"0,030111559\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":34,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":26363,\"TOTAL_VAC_2\":42021,\"TOTAL_VAC_UNK\":5,\"TOTAL\":68389,\"CUMUL_VAC_1\":300612,\"CUMUL_VAC_2\":149680,\"CUMUL_VAC_UNK\":16,\"CUMUL\":450308,\"COVER_1_VAC\":\"0,084079323\",\"COVER\":\"0,041864573\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":35,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88018,\"TOTAL_VAC_2\":2171,\"TOTAL_VAC_UNK\":0,\"TOTAL\":90189,\"CUMUL_VAC_1\":388630,\"CUMUL_VAC_2\":151851,\"CUMUL_VAC_UNK\":16,\"CUMUL\":540497,\"COVER_1_VAC\":\"0,108697415\",\"COVER\":\"0,042471789\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":36,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":68,\"TOTAL_VAC_2\":119,\"TOTAL_VAC_UNK\":0,\"TOTAL\":187,\"CUMUL_VAC_1\":685,\"CUMUL_VAC_2\":438,\"CUMUL_VAC_UNK\":1,\"CUMUL\":1124,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":37,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":146,\"TOTAL_VAC_2\":106,\"TOTAL_VAC_UNK\":1,\"TOTAL\":253,\"CUMUL_VAC_1\":831,\"CUMUL_VAC_2\":544,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1377,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":38,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":73,\"TOTAL_VAC_2\":19,\"TOTAL_VAC_UNK\":0,\"TOTAL\":92,\"CUMUL_VAC_1\":904,\"CUMUL_VAC_2\":563,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1469,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":39,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":35,\"TOTAL_VAC_UNK\":0,\"TOTAL\":90,\"CUMUL_VAC_1\":959,\"CUMUL_VAC_2\":598,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1559,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":40,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":276,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":289,\"CUMUL_VAC_1\":1235,\"CUMUL_VAC_2\":611,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1848,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":41,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":18,\"TOTAL_VAC_2\":26,\"TOTAL_VAC_UNK\":0,\"TOTAL\":44,\"CUMUL_VAC_1\":1253,\"CUMUL_VAC_2\":637,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1892,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":42,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":309,\"TOTAL_VAC_2\":4,\"TOTAL_VAC_UNK\":0,\"TOTAL\":313,\"CUMUL_VAC_1\":1562,\"CUMUL_VAC_2\":641,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2205,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":43,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3158,\"TOTAL_VAC_2\":1085,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4243,\"CUMUL_VAC_1\":10990,\"CUMUL_VAC_2\":4773,\"CUMUL_VAC_UNK\":0,\"CUMUL\":15763,\"COVER_1_VAC\":\"0,043224492\",\"COVER\":\"0,018772566\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":44,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2494,\"TOTAL_VAC_2\":638,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3132,\"CUMUL_VAC_1\":13484,\"CUMUL_VAC_2\":5411,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18895,\"COVER_1_VAC\":\"0,053033581\",\"COVER\":\"0,021281868\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":45,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2255,\"TOTAL_VAC_2\":2155,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4410,\"CUMUL_VAC_1\":15739,\"CUMUL_VAC_2\":7566,\"CUMUL_VAC_UNK\":0,\"CUMUL\":23305,\"COVER_1_VAC\":\"0,061902664\",\"COVER\":\"0,029757644\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":46,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1431,\"TOTAL_VAC_2\":3116,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4547,\"CUMUL_VAC_1\":17170,\"CUMUL_VAC_2\":10682,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27852,\"COVER_1_VAC\":\"0,067530894\",\"COVER\":\"0,042013105\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":47,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4881,\"TOTAL_VAC_2\":2400,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7281,\"CUMUL_VAC_1\":22051,\"CUMUL_VAC_2\":13082,\"CUMUL_VAC_UNK\":0,\"CUMUL\":35133,\"COVER_1_VAC\":\"0,086728232\",\"COVER\":\"0,051452485\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":48,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3102,\"TOTAL_VAC_2\":2347,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5449,\"CUMUL_VAC_1\":25153,\"CUMUL_VAC_2\":15429,\"CUMUL_VAC_UNK\":0,\"CUMUL\":40582,\"COVER_1_VAC\":\"0,09892863\",\"COVER\":\"0,060683411\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":49,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5276,\"TOTAL_VAC_2\":185,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5461,\"CUMUL_VAC_1\":30429,\"CUMUL_VAC_2\":15614,\"CUMUL_VAC_UNK\":0,\"CUMUL\":46043,\"COVER_1_VAC\":\"0,119667734\",\"COVER\":\"0,061399231\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":50,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2029,\"TOTAL_VAC_2\":1238,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3267,\"CUMUL_VAC_1\":13845,\"CUMUL_VAC_2\":8376,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22221,\"COVER_1_VAC\":\"0,05702318\",\"COVER\":\"0,034498097\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":51,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3182,\"TOTAL_VAC_2\":611,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3793,\"CUMUL_VAC_1\":17367,\"CUMUL_VAC_2\":9316,\"CUMUL_VAC_UNK\":0,\"CUMUL\":26683,\"COVER_1_VAC\":\"0,071529185\",\"COVER\":\"0,03836966\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":52,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":30,\"TOTAL_VAC_2\":67,\"TOTAL_VAC_UNK\":0,\"TOTAL\":97,\"CUMUL_VAC_1\":160,\"CUMUL_VAC_2\":72,\"CUMUL_VAC_UNK\":0,\"CUMUL\":232,\"COVER_1_VAC\":\"9,32E-05\",\"COVER\":\"4,19E-05\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":53,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1385,\"TOTAL_VAC_2\":3028,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4413,\"CUMUL_VAC_1\":11704,\"CUMUL_VAC_2\":6552,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18256,\"COVER_1_VAC\":\"0,015088288\",\"COVER\":\"0,008446554\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":54,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":13016,\"TOTAL_VAC_2\":30586,\"TOTAL_VAC_UNK\":5,\"TOTAL\":43607,\"CUMUL_VAC_1\":139317,\"CUMUL_VAC_2\":88474,\"CUMUL_VAC_UNK\":10,\"CUMUL\":227801,\"COVER_1_VAC\":\"0,041455336\",\"COVER\":\"0,026326431\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":55,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":6530,\"TOTAL_VAC_2\":22079,\"TOTAL_VAC_UNK\":2,\"TOTAL\":28611,\"CUMUL_VAC_1\":81961,\"CUMUL_VAC_2\":50929,\"CUMUL_VAC_UNK\":4,\"CUMUL\":132894,\"COVER_1_VAC\":\"0,037908385\",\"COVER\":\"0,023555547\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":56,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":3505,\"TOTAL_VAC_2\":11383,\"TOTAL_VAC_UNK\":3,\"TOTAL\":14891,\"CUMUL_VAC_1\":34467,\"CUMUL_VAC_2\":18035,\"CUMUL_VAC_UNK\":3,\"CUMUL\":52505,\"COVER_1_VAC\":\"0,021480642\",\"COVER\":\"0,011239834\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":57,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":14635,\"TOTAL_VAC_2\":31404,\"TOTAL_VAC_UNK\":3,\"TOTAL\":46042,\"CUMUL_VAC_1\":82886,\"CUMUL_VAC_2\":44907,\"CUMUL_VAC_UNK\":3,\"CUMUL\":127796,\"COVER_1_VAC\":\"0,12263728\",\"COVER\":\"0,066443939\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":58,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":20,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":180,\"CUMUL_VAC_2\":88,\"CUMUL_VAC_UNK\":0,\"CUMUL\":268,\"COVER_1_VAC\":\"0,000104831\",\"COVER\":\"5,13E-05\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":59,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2181,\"TOTAL_VAC_2\":1682,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3863,\"CUMUL_VAC_1\":13885,\"CUMUL_VAC_2\":8234,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22119,\"COVER_1_VAC\":\"0,017899938\",\"COVER\":\"0,010614915\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":60,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":20984,\"TOTAL_VAC_2\":18562,\"TOTAL_VAC_UNK\":6,\"TOTAL\":39552,\"CUMUL_VAC_1\":160301,\"CUMUL_VAC_2\":107036,\"CUMUL_VAC_UNK\":16,\"CUMUL\":267353,\"COVER_1_VAC\":\"0,047699361\",\"COVER\":\"0,031849763\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":61,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":24279,\"TOTAL_VAC_2\":12735,\"TOTAL_VAC_UNK\":2,\"TOTAL\":37016,\"CUMUL_VAC_1\":106240,\"CUMUL_VAC_2\":63664,\"CUMUL_VAC_UNK\":6,\"CUMUL\":169910,\"COVER_1_VAC\":\"0,049137845\",\"COVER\":\"0,029445705\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":62,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":4690,\"TOTAL_VAC_2\":7128,\"TOTAL_VAC_UNK\":1,\"TOTAL\":11819,\"CUMUL_VAC_1\":39157,\"CUMUL_VAC_2\":25163,\"CUMUL_VAC_UNK\":4,\"CUMUL\":64324,\"COVER_1_VAC\":\"0,02440356\",\"COVER\":\"0,015682171\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":63,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":48105,\"TOTAL_VAC_2\":9183,\"TOTAL_VAC_UNK\":2,\"TOTAL\":57290,\"CUMUL_VAC_1\":130991,\"CUMUL_VAC_2\":54090,\"CUMUL_VAC_UNK\":5,\"CUMUL\":185086,\"COVER_1_VAC\":\"0,193812947\",\"COVER\":\"0,080031012\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":64,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":21,\"TOTAL_VAC_2\":31,\"TOTAL_VAC_UNK\":0,\"TOTAL\":52,\"CUMUL_VAC_1\":204,\"CUMUL_VAC_2\":119,\"CUMUL_VAC_UNK\":0,\"CUMUL\":323,\"COVER_1_VAC\":\"0,000118808\",\"COVER\":\"6,93E-05\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":65,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1236,\"TOTAL_VAC_2\":621,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1857,\"CUMUL_VAC_1\":15121,\"CUMUL_VAC_2\":8855,\"CUMUL_VAC_UNK\":0,\"CUMUL\":23976,\"COVER_1_VAC\":\"0,019493336\",\"COVER\":\"0,011415481\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":66,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":10845,\"TOTAL_VAC_2\":6426,\"TOTAL_VAC_UNK\":1,\"TOTAL\":17272,\"CUMUL_VAC_1\":171146,\"CUMUL_VAC_2\":113462,\"CUMUL_VAC_UNK\":17,\"CUMUL\":284625,\"COVER_1_VAC\":\"0,050926412\",\"COVER\":\"0,033761891\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":67,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":49017,\"TOTAL_VAC_2\":4546,\"TOTAL_VAC_UNK\":1,\"TOTAL\":53564,\"CUMUL_VAC_1\":155257,\"CUMUL_VAC_2\":68210,\"CUMUL_VAC_UNK\":7,\"CUMUL\":223474,\"COVER_1_VAC\":\"0,071809058\",\"COVER\":\"0,031548309\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":68,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":11122,\"TOTAL_VAC_2\":2201,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13323,\"CUMUL_VAC_1\":50279,\"CUMUL_VAC_2\":27364,\"CUMUL_VAC_UNK\":4,\"CUMUL\":77647,\"COVER_1_VAC\":\"0,031335051\",\"COVER\":\"0,017053886\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":69,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":101737,\"TOTAL_VAC_2\":4938,\"TOTAL_VAC_UNK\":0,\"TOTAL\":106675,\"CUMUL_VAC_1\":232728,\"CUMUL_VAC_2\":59028,\"CUMUL_VAC_UNK\":5,\"CUMUL\":291761,\"COVER_1_VAC\":\"0,344341975\",\"COVER\":\"0,087337227\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":70,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":8,\"TOTAL_VAC_2\":26,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34,\"CUMUL_VAC_1\":209,\"CUMUL_VAC_2\":142,\"CUMUL_VAC_UNK\":0,\"CUMUL\":351,\"COVER_1_VAC\":\"0,00012172\",\"COVER\":\"8,27E-05\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":71,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":869,\"TOTAL_VAC_2\":903,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1772,\"CUMUL_VAC_1\":15990,\"CUMUL_VAC_2\":9758,\"CUMUL_VAC_UNK\":0,\"CUMUL\":25748,\"COVER_1_VAC\":\"0,020613613\",\"COVER\":\"0,012579589\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":72,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":7043,\"TOTAL_VAC_2\":8693,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15736,\"CUMUL_VAC_1\":178189,\"CUMUL_VAC_2\":122155,\"CUMUL_VAC_UNK\":17,\"CUMUL\":300361,\"COVER_1_VAC\":\"0,053022136\",\"COVER\":\"0,036348591\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":73,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":29577,\"TOTAL_VAC_2\":5453,\"TOTAL_VAC_UNK\":1,\"TOTAL\":35031,\"CUMUL_VAC_1\":184834,\"CUMUL_VAC_2\":73663,\"CUMUL_VAC_UNK\":8,\"CUMUL\":258505,\"COVER_1_VAC\":\"0,085488934\",\"COVER\":\"0,034070416\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":74,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":12708,\"TOTAL_VAC_2\":3538,\"TOTAL_VAC_UNK\":0,\"TOTAL\":16246,\"CUMUL_VAC_1\":62987,\"CUMUL_VAC_2\":30902,\"CUMUL_VAC_UNK\":4,\"CUMUL\":93893,\"COVER_1_VAC\":\"0,039254974\",\"COVER\":\"0,01925885\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":75,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":86287,\"TOTAL_VAC_2\":12509,\"TOTAL_VAC_UNK\":1,\"TOTAL\":98797,\"CUMUL_VAC_1\":319015,\"CUMUL_VAC_2\":71537,\"CUMUL_VAC_UNK\":6,\"CUMUL\":390558,\"COVER_1_VAC\":\"0,47201134\",\"COVER\":\"0,105845415\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":76,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":12,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":23,\"CUMUL_VAC_1\":221,\"CUMUL_VAC_2\":153,\"CUMUL_VAC_UNK\":0,\"CUMUL\":374,\"COVER_1_VAC\":\"0,000128709\",\"COVER\":\"8,91E-05\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":77,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1264,\"TOTAL_VAC_2\":513,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1777,\"CUMUL_VAC_1\":17254,\"CUMUL_VAC_2\":10271,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27525,\"COVER_1_VAC\":\"0,022243107\",\"COVER\":\"0,013240927\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":78,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":14689,\"TOTAL_VAC_2\":4926,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19615,\"CUMUL_VAC_1\":192878,\"CUMUL_VAC_2\":127081,\"CUMUL_VAC_UNK\":17,\"CUMUL\":319976,\"COVER_1_VAC\":\"0,057393013\",\"COVER\":\"0,037814377\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":79,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":20924,\"TOTAL_VAC_2\":3671,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24595,\"CUMUL_VAC_1\":205758,\"CUMUL_VAC_2\":77334,\"CUMUL_VAC_UNK\":8,\"CUMUL\":283100,\"COVER_1_VAC\":\"0,095166647\",\"COVER\":\"0,035768318\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":80,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":15043,\"TOTAL_VAC_2\":3171,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18214,\"CUMUL_VAC_1\":78030,\"CUMUL_VAC_2\":34073,\"CUMUL_VAC_UNK\":4,\"CUMUL\":112107,\"COVER_1_VAC\":\"0,048630124\",\"COVER\":\"0,021235092\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":81,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":39116,\"TOTAL_VAC_2\":36634,\"TOTAL_VAC_UNK\":0,\"TOTAL\":75750,\"CUMUL_VAC_1\":358131,\"CUMUL_VAC_2\":108171,\"CUMUL_VAC_UNK\":6,\"CUMUL\":466308,\"COVER_1_VAC\":\"0,529886974\",\"COVER\":\"0,160048708\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":82,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":23,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24,\"CUMUL_VAC_1\":239,\"CUMUL_VAC_2\":180,\"CUMUL_VAC_UNK\":0,\"CUMUL\":419,\"COVER_1_VAC\":\"0,000139192\",\"COVER\":\"0,000104831\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":83,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":223,\"TOTAL_VAC_2\":363,\"TOTAL_VAC_UNK\":1,\"TOTAL\":587,\"CUMUL_VAC_1\":17873,\"CUMUL_VAC_2\":10949,\"CUMUL_VAC_UNK\":1,\"CUMUL\":28823,\"COVER_1_VAC\":\"0,023041094\",\"COVER\":\"0,014114975\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":84,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":3985,\"TOTAL_VAC_2\":2919,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6904,\"CUMUL_VAC_1\":200757,\"CUMUL_VAC_2\":132770,\"CUMUL_VAC_UNK\":17,\"CUMUL\":333544,\"COVER_1_VAC\":\"0,059737497\",\"COVER\":\"0,039507203\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":85,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":3883,\"TOTAL_VAC_2\":2210,\"TOTAL_VAC_UNK\":1,\"TOTAL\":6094,\"CUMUL_VAC_1\":211786,\"CUMUL_VAC_2\":81045,\"CUMUL_VAC_UNK\":9,\"CUMUL\":292840,\"COVER_1_VAC\":\"0,097954702\",\"COVER\":\"0,03748472\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":86,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":17453,\"TOTAL_VAC_2\":6602,\"TOTAL_VAC_UNK\":2,\"TOTAL\":24057,\"CUMUL_VAC_1\":97322,\"CUMUL_VAC_2\":41657,\"CUMUL_VAC_UNK\":6,\"CUMUL\":138985,\"COVER_1_VAC\":\"0,06065335\",\"COVER\":\"0,025961618\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":87,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":54016,\"TOTAL_VAC_2\":96936,\"TOTAL_VAC_UNK\":4,\"TOTAL\":150956,\"CUMUL_VAC_1\":415672,\"CUMUL_VAC_2\":206673,\"CUMUL_VAC_UNK\":10,\"CUMUL\":622355,\"COVER_1_VAC\":\"0,615024051\",\"COVER\":\"0,305791262\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":88,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":2,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2,\"CUMUL_VAC_1\":3,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":3,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":89,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":28,\"TOTAL_VAC_2\":10,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38,\"CUMUL_VAC_1\":267,\"CUMUL_VAC_2\":190,\"CUMUL_VAC_UNK\":0,\"CUMUL\":457,\"COVER_1_VAC\":\"0,000153752\",\"COVER\":\"0,000108908\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":90,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":3067,\"TOTAL_VAC_2\":115,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3182,\"CUMUL_VAC_1\":20944,\"CUMUL_VAC_2\":11072,\"CUMUL_VAC_UNK\":1,\"CUMUL\":32017,\"COVER_1_VAC\":\"0,027000094\",\"COVER\":\"0,014273541\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":91,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":40938,\"TOTAL_VAC_2\":1177,\"TOTAL_VAC_UNK\":0,\"TOTAL\":42115,\"CUMUL_VAC_1\":241723,\"CUMUL_VAC_2\":134059,\"CUMUL_VAC_UNK\":17,\"CUMUL\":375799,\"COVER_1_VAC\":\"0,07192739\",\"COVER\":\"0,039890759\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":92,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":33103,\"TOTAL_VAC_2\":836,\"TOTAL_VAC_UNK\":0,\"TOTAL\":33939,\"CUMUL_VAC_1\":244942,\"CUMUL_VAC_2\":81913,\"CUMUL_VAC_UNK\":9,\"CUMUL\":326864,\"COVER_1_VAC\":\"0,113289928\",\"COVER\":\"0,037886185\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":93,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":52019,\"TOTAL_VAC_2\":2005,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54024,\"CUMUL_VAC_1\":149459,\"CUMUL_VAC_2\":43673,\"CUMUL_VAC_UNK\":6,\"CUMUL\":193138,\"COVER_1_VAC\":\"0,09314635\",\"COVER\":\"0,027218037\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":94,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":123824,\"TOTAL_VAC_2\":16775,\"TOTAL_VAC_UNK\":0,\"TOTAL\":140599,\"CUMUL_VAC_1\":539633,\"CUMUL_VAC_2\":223614,\"CUMUL_VAC_UNK\":10,\"CUMUL\":763257,\"COVER_1_VAC\":\"0,798435482\",\"COVER\":\"0,330856993\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":95,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECIEVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":96,\"TYPE\":\"GENERAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":39101,\"TOTAL_VAC_2\":98547,\"TOTAL_VAC_UNK\":13,\"TOTAL\":137661,\"CUMUL_VAC_1\":350499,\"CUMUL_VAC_2\":208969,\"CUMUL_VAC_UNK\":20,\"CUMUL\":559488,\"COVER_1_VAC\":\"0,03404255\",\"COVER\":\"0,020296314\",\"RECIEVED\":651900,\"DISTRIBUTED\":571981},{\"\":97,\"TYPE\":\"GENERAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":100259,\"TOTAL_VAC_2\":49306,\"TOTAL_VAC_UNK\":11,\"TOTAL\":149576,\"CUMUL_VAC_1\":450758,\"CUMUL_VAC_2\":258275,\"CUMUL_VAC_UNK\":31,\"CUMUL\":709064,\"COVER_1_VAC\":\"0,043780301\",\"COVER\":\"0,025085206\",\"RECIEVED\":830730,\"DISTRIBUTED\":718143},{\"\":98,\"TYPE\":\"GENERAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":173978,\"TOTAL_VAC_2\":18763,\"TOTAL_VAC_UNK\":2,\"TOTAL\":192743,\"CUMUL_VAC_1\":624736,\"CUMUL_VAC_2\":277038,\"CUMUL_VAC_UNK\":33,\"CUMUL\":901807,\"COVER_1_VAC\":\"0,060678081\",\"COVER\":\"0,02690758\",\"RECIEVED\":1002999,\"DISTRIBUTED\":933847},{\"\":99,\"TYPE\":\"GENERAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":136492,\"TOTAL_VAC_2\":31122,\"TOTAL_VAC_UNK\":2,\"TOTAL\":167616,\"CUMUL_VAC_1\":761228,\"CUMUL_VAC_2\":308160,\"CUMUL_VAC_UNK\":35,\"CUMUL\":1069423,\"COVER_1_VAC\":\"0,073934997\",\"COVER\":\"0,029930334\",\"RECIEVED\":1186389,\"DISTRIBUTED\":1095103},{\"\":100,\"TYPE\":\"GENERAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":91048,\"TOTAL_VAC_2\":48926,\"TOTAL_VAC_UNK\":0,\"TOTAL\":139974,\"CUMUL_VAC_1\":852276,\"CUMUL_VAC_2\":357086,\"CUMUL_VAC_UNK\":35,\"CUMUL\":1209397,\"COVER_1_VAC\":\"0,082778121\",\"COVER\":\"0,034682319\",\"RECIEVED\":1468929,\"DISTRIBUTED\":1264093},{\"\":101,\"TYPE\":\"GENERAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":79563,\"TOTAL_VAC_2\":109053,\"TOTAL_VAC_UNK\":8,\"TOTAL\":188624,\"CUMUL_VAC_1\":943655,\"CUMUL_VAC_2\":473277,\"CUMUL_VAC_UNK\":43,\"CUMUL\":1416975,\"COVER_1_VAC\":\"0,091653394\",\"COVER\":\"0,045967481\",\"RECIEVED\":1713540,\"DISTRIBUTED\":1462079},{\"\":102,\"TYPE\":\"GENERAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":252979,\"TOTAL_VAC_2\":20918,\"TOTAL_VAC_UNK\":0,\"TOTAL\":273897,\"CUMUL_VAC_1\":1196971,\"CUMUL_VAC_2\":494521,\"CUMUL_VAC_UNK\":43,\"CUMUL\":1691535,\"COVER_1_VAC\":\"0,116256952\",\"COVER\":\"0,048030825\",\"RECIEVED\":1883850,\"DISTRIBUTED\":1753999}]");

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ })

/******/ });