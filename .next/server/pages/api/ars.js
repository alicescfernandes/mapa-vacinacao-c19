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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V5lr");


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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

    if (lsPath === path && lsCacheBuster !== cacheBuster) {
      useCache = false;
      localStorage.removeItem(k);
    }
  }

  if (url.match('ecdc')) useCache = false;

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
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "e"])(req);
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

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ }),

/***/ "la5J":
/***/ (function(module) {

module.exports = JSON.parse("{\"objectIdFieldName\":\"OBJECTID\",\"uniqueIdField\":{\"name\":\"OBJECTID\",\"isSystemMaintained\":true},\"globalIdFieldName\":\"\",\"geometryType\":\"esriGeometryPoint\",\"spatialReference\":{\"wkid\":102100,\"latestWkid\":3857},\"fields\":[{\"name\":\"ARSNome\",\"type\":\"esriFieldTypeString\",\"alias\":\"ARSNome\",\"sqlType\":\"sqlTypeOther\",\"length\":254,\"domain\":null,\"defaultValue\":null},{\"name\":\"Data\",\"type\":\"esriFieldTypeDate\",\"alias\":\"Data\",\"sqlType\":\"sqlTypeOther\",\"length\":8,\"domain\":null,\"defaultValue\":\"-2209161600000\"},{\"name\":\"ConfirmadosAcumulado\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"ConfirmadosAcumulado\",\"sqlType\":\"sqlTypeOther\",\"domain\":null},{\"name\":\"ConfirmadosNovos\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"ConfirmadosNovos\",\"sqlType\":\"sqlTypeOther\",\"domain\":null},{\"name\":\"VarObitos\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"Variação de Óbitos\",\"sqlType\":\"sqlTypeOther\",\"domain\":null,\"defaultValue\":null},{\"name\":\"OBJECTID\",\"type\":\"esriFieldTypeOID\",\"alias\":\"OBJECTID\",\"sqlType\":\"sqlTypeOther\",\"domain\":null,\"defaultValue\":null}],\"features\":[{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":814513,\"ConfirmadosNovos\":256,\"VarObitos\":10,\"OBJECTID\":4472}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":328566,\"ConfirmadosNovos\":64,\"VarObitos\":0,\"OBJECTID\":4473}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":116241,\"ConfirmadosNovos\":22,\"VarObitos\":2,\"OBJECTID\":4474}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":308571,\"ConfirmadosNovos\":91,\"VarObitos\":7,\"OBJECTID\":4475}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":28765,\"ConfirmadosNovos\":12,\"VarObitos\":1,\"OBJECTID\":4476}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":20324,\"ConfirmadosNovos\":4,\"VarObitos\":0,\"OBJECTID\":4477}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":3884,\"ConfirmadosNovos\":6,\"VarObitos\":0,\"OBJECTID\":4478}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1615809600000,\"ConfirmadosAcumulado\":8162,\"ConfirmadosNovos\":57,\"VarObitos\":0,\"OBJECTID\":4479}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":814897,\"ConfirmadosNovos\":384,\"VarObitos\":13,\"OBJECTID\":4480}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":328693,\"ConfirmadosNovos\":127,\"VarObitos\":0,\"OBJECTID\":4481}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":116305,\"ConfirmadosNovos\":64,\"VarObitos\":4,\"OBJECTID\":4482}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":308718,\"ConfirmadosNovos\":147,\"VarObitos\":8,\"OBJECTID\":4483}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":28772,\"ConfirmadosNovos\":7,\"VarObitos\":1,\"OBJECTID\":4484}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":20337,\"ConfirmadosNovos\":13,\"VarObitos\":0,\"OBJECTID\":4485}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":3899,\"ConfirmadosNovos\":15,\"VarObitos\":0,\"OBJECTID\":4486}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1615896000000,\"ConfirmadosAcumulado\":8173,\"ConfirmadosNovos\":11,\"VarObitos\":0,\"OBJECTID\":4487}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":815570,\"ConfirmadosNovos\":673,\"VarObitos\":15,\"OBJECTID\":4488}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":328939,\"ConfirmadosNovos\":246,\"VarObitos\":3,\"OBJECTID\":4489}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":116389,\"ConfirmadosNovos\":84,\"VarObitos\":1,\"OBJECTID\":4490}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":308963,\"ConfirmadosNovos\":245,\"VarObitos\":10,\"OBJECTID\":4491}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":28799,\"ConfirmadosNovos\":27,\"VarObitos\":0,\"OBJECTID\":4492}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":20350,\"ConfirmadosNovos\":13,\"VarObitos\":1,\"OBJECTID\":4493}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":3912,\"ConfirmadosNovos\":13,\"VarObitos\":0,\"OBJECTID\":4494}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1615982400000,\"ConfirmadosAcumulado\":8218,\"ConfirmadosNovos\":45,\"VarObitos\":0,\"OBJECTID\":4495}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":816055,\"ConfirmadosNovos\":485,\"VarObitos\":21,\"OBJECTID\":4496}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":329057,\"ConfirmadosNovos\":118,\"VarObitos\":1,\"OBJECTID\":4497}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":116440,\"ConfirmadosNovos\":51,\"VarObitos\":2,\"OBJECTID\":4498}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":309198,\"ConfirmadosNovos\":235,\"VarObitos\":15,\"OBJECTID\":4499}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":28828,\"ConfirmadosNovos\":29,\"VarObitos\":1,\"OBJECTID\":4500}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":20358,\"ConfirmadosNovos\":8,\"VarObitos\":2,\"OBJECTID\":4501}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":3922,\"ConfirmadosNovos\":10,\"VarObitos\":0,\"OBJECTID\":4502}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616068800000,\"ConfirmadosAcumulado\":8252,\"ConfirmadosNovos\":34,\"VarObitos\":0,\"OBJECTID\":4503}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":816623,\"ConfirmadosNovos\":568,\"VarObitos\":11,\"OBJECTID\":4504}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":329203,\"ConfirmadosNovos\":146,\"VarObitos\":2,\"OBJECTID\":4505}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":116544,\"ConfirmadosNovos\":104,\"VarObitos\":4,\"OBJECTID\":4506}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":309421,\"ConfirmadosNovos\":223,\"VarObitos\":4,\"OBJECTID\":4507}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":28849,\"ConfirmadosNovos\":21,\"VarObitos\":0,\"OBJECTID\":4508}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":20379,\"ConfirmadosNovos\":21,\"VarObitos\":0,\"OBJECTID\":4509}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":3935,\"ConfirmadosNovos\":13,\"VarObitos\":0,\"OBJECTID\":4510}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616155200000,\"ConfirmadosAcumulado\":8292,\"ConfirmadosNovos\":40,\"VarObitos\":1,\"OBJECTID\":4511}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":817080,\"ConfirmadosNovos\":457,\"VarObitos\":8,\"OBJECTID\":4512}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":329340,\"ConfirmadosNovos\":137,\"VarObitos\":0,\"OBJECTID\":4513}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":116594,\"ConfirmadosNovos\":50,\"VarObitos\":2,\"OBJECTID\":4514}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":309603,\"ConfirmadosNovos\":182,\"VarObitos\":6,\"OBJECTID\":4515}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":28873,\"ConfirmadosNovos\":24,\"VarObitos\":0,\"OBJECTID\":4516}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":20404,\"ConfirmadosNovos\":25,\"VarObitos\":0,\"OBJECTID\":4517}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":3945,\"ConfirmadosNovos\":10,\"VarObitos\":0,\"OBJECTID\":4518}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1616241600000,\"ConfirmadosAcumulado\":8321,\"ConfirmadosNovos\":29,\"VarObitos\":0,\"OBJECTID\":4519}}]}");

/***/ })

/******/ });