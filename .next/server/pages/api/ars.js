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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V5lr");


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

/***/ "V5lr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Xm2/");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_ars_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("la5J");
var _data_ars_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("la5J", 1);
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
  res.json(_data_ars_json__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ "la5J":
/***/ (function(module) {

module.exports = JSON.parse("{\"objectIdFieldName\":\"OBJECTID\",\"uniqueIdField\":{\"name\":\"OBJECTID\",\"isSystemMaintained\":true},\"globalIdFieldName\":\"\",\"geometryType\":\"esriGeometryPoint\",\"spatialReference\":{\"wkid\":102100,\"latestWkid\":3857},\"fields\":[{\"name\":\"ARSNome\",\"type\":\"esriFieldTypeString\",\"alias\":\"ARSNome\",\"sqlType\":\"sqlTypeOther\",\"length\":254,\"domain\":null,\"defaultValue\":null},{\"name\":\"Data\",\"type\":\"esriFieldTypeDate\",\"alias\":\"Data\",\"sqlType\":\"sqlTypeOther\",\"length\":8,\"domain\":null,\"defaultValue\":\"-2209161600000\"},{\"name\":\"ConfirmadosAcumulado\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"ConfirmadosAcumulado\",\"sqlType\":\"sqlTypeOther\",\"domain\":null},{\"name\":\"ConfirmadosNovos\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"ConfirmadosNovos\",\"sqlType\":\"sqlTypeOther\",\"domain\":null},{\"name\":\"VarObitos\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"Variação de Óbitos\",\"sqlType\":\"sqlTypeOther\",\"domain\":null,\"defaultValue\":null},{\"name\":\"OBJECTID\",\"type\":\"esriFieldTypeOID\",\"alias\":\"OBJECTID\",\"sqlType\":\"sqlTypeOther\",\"domain\":null,\"defaultValue\":null}],\"features\":[{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":817778,\"ConfirmadosNovos\":248,\"VarObitos\":16,\"OBJECTID\":4528}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":329542,\"ConfirmadosNovos\":58,\"VarObitos\":0,\"OBJECTID\":4529}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":116688,\"ConfirmadosNovos\":27,\"VarObitos\":3,\"OBJECTID\":4530}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":309842,\"ConfirmadosNovos\":85,\"VarObitos\":12,\"OBJECTID\":4531}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":28910,\"ConfirmadosNovos\":13,\"VarObitos\":0,\"OBJECTID\":4532}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":20469,\"ConfirmadosNovos\":44,\"VarObitos\":0,\"OBJECTID\":4533}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":3965,\"ConfirmadosNovos\":11,\"VarObitos\":0,\"OBJECTID\":4534}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616414400000,\"ConfirmadosAcumulado\":8362,\"ConfirmadosNovos\":10,\"VarObitos\":1,\"OBJECTID\":4535}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":818212,\"ConfirmadosNovos\":434,\"VarObitos\":10,\"OBJECTID\":4536}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":329655,\"ConfirmadosNovos\":113,\"VarObitos\":5,\"OBJECTID\":4537}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":116746,\"ConfirmadosNovos\":58,\"VarObitos\":1,\"OBJECTID\":4538}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":309999,\"ConfirmadosNovos\":157,\"VarObitos\":3,\"OBJECTID\":4539}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":28930,\"ConfirmadosNovos\":20,\"VarObitos\":1,\"OBJECTID\":4540}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":20497,\"ConfirmadosNovos\":28,\"VarObitos\":0,\"OBJECTID\":4541}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":3989,\"ConfirmadosNovos\":24,\"VarObitos\":0,\"OBJECTID\":4542}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616500800000,\"ConfirmadosAcumulado\":8396,\"ConfirmadosNovos\":34,\"VarObitos\":0,\"OBJECTID\":4543}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":818787,\"ConfirmadosNovos\":575,\"VarObitos\":11,\"OBJECTID\":4544}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":329797,\"ConfirmadosNovos\":142,\"VarObitos\":1,\"OBJECTID\":4545}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":116814,\"ConfirmadosNovos\":68,\"VarObitos\":4,\"OBJECTID\":4546}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":310261,\"ConfirmadosNovos\":262,\"VarObitos\":6,\"OBJECTID\":4547}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":28936,\"ConfirmadosNovos\":6,\"VarObitos\":0,\"OBJECTID\":4548}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":20550,\"ConfirmadosNovos\":53,\"VarObitos\":0,\"OBJECTID\":4549}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":3994,\"ConfirmadosNovos\":5,\"VarObitos\":0,\"OBJECTID\":4550}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616587200000,\"ConfirmadosAcumulado\":8435,\"ConfirmadosNovos\":39,\"VarObitos\":0,\"OBJECTID\":4551}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":819210,\"ConfirmadosNovos\":423,\"VarObitos\":9,\"OBJECTID\":4552}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":329923,\"ConfirmadosNovos\":126,\"VarObitos\":0,\"OBJECTID\":4553}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":116873,\"ConfirmadosNovos\":59,\"VarObitos\":1,\"OBJECTID\":4554}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":310443,\"ConfirmadosNovos\":182,\"VarObitos\":7,\"OBJECTID\":4555}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":28953,\"ConfirmadosNovos\":17,\"VarObitos\":0,\"OBJECTID\":4556}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":20572,\"ConfirmadosNovos\":22,\"VarObitos\":0,\"OBJECTID\":4557}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":4003,\"ConfirmadosNovos\":9,\"VarObitos\":0,\"OBJECTID\":4558}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616673600000,\"ConfirmadosAcumulado\":8443,\"ConfirmadosNovos\":8,\"VarObitos\":1,\"OBJECTID\":4559}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":819698,\"ConfirmadosNovos\":488,\"VarObitos\":5,\"OBJECTID\":4560}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":330043,\"ConfirmadosNovos\":120,\"VarObitos\":0,\"OBJECTID\":4561}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":116926,\"ConfirmadosNovos\":53,\"VarObitos\":2,\"OBJECTID\":4562}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":310653,\"ConfirmadosNovos\":210,\"VarObitos\":2,\"OBJECTID\":4563}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":29005,\"ConfirmadosNovos\":52,\"VarObitos\":1,\"OBJECTID\":4564}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":20580,\"ConfirmadosNovos\":8,\"VarObitos\":0,\"OBJECTID\":4565}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":4014,\"ConfirmadosNovos\":11,\"VarObitos\":0,\"OBJECTID\":4566}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616760000000,\"ConfirmadosAcumulado\":8477,\"ConfirmadosNovos\":34,\"VarObitos\":0,\"OBJECTID\":4567}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":820042,\"ConfirmadosNovos\":344,\"VarObitos\":8,\"OBJECTID\":4568}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":330111,\"ConfirmadosNovos\":68,\"VarObitos\":2,\"OBJECTID\":4569}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":116977,\"ConfirmadosNovos\":51,\"VarObitos\":1,\"OBJECTID\":4570}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":310805,\"ConfirmadosNovos\":152,\"VarObitos\":1,\"OBJECTID\":4571}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":29037,\"ConfirmadosNovos\":32,\"VarObitos\":0,\"OBJECTID\":4572}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":20577,\"ConfirmadosNovos\":-3,\"VarObitos\":2,\"OBJECTID\":4573}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":4028,\"ConfirmadosNovos\":14,\"VarObitos\":1,\"OBJECTID\":4574}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616846400000,\"ConfirmadosAcumulado\":8507,\"ConfirmadosNovos\":30,\"VarObitos\":1,\"OBJECTID\":4575}}]}");

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ })

/******/ });