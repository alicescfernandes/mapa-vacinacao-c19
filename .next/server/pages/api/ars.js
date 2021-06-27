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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hexToRgb; });
/* unused harmony export dateWithoutTimezone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return trackPlausible; });
/* unused harmony export downloadPNG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return perHundred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchWithLocalCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return makeAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateDims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getColor; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tDG4");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xPX6");
/* harmony import */ var _data_generic_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lN74");
var _data_generic_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("lN74", 1);
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
function perHundred(total, populacaoTotal = _data_generic_json__WEBPACK_IMPORTED_MODULE_4__["populacao"].valor) {
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
function makeAnnotations(annotationsArray) {
  let annotationBoilerplate = {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y',
    value: null,
    borderColor: '#0A9DD1',
    borderWidth: 1,
    borderDash: [5, 5],
    label: {
      font: {
        style: 'normal'
      },
      backgroundColor: 'rgba(255,255,255,0.8)',
      cornerRadius: 0,
      drawTime: 'afterDraw',
      color: '#0A9DD1',
      rotation: 270,
      xAdjust: 8,
      //xAdjust: -8,
      yAdjust: 0,
      fontSize: '13px',
      enabled: true,
      content: ''
    }
  };
  let arr = [];
  annotationsArray.forEach(el => {
    var _el$xAdjust;

    let annotation = _objectSpread(_objectSpread({}, annotationBoilerplate), {}, {
      mode: el.mode,
      scaleID: el.mode === 'horizontal' ? 'y' : 'x',
      borderColor: el.color,
      value: el.position,
      display: el.display,
      label: _objectSpread(_objectSpread({}, annotationBoilerplate.label), {}, {
        content: el.marcador,
        color: el.color,
        xAdjust: (_el$xAdjust = el.xAdjust) !== null && _el$xAdjust !== void 0 ? _el$xAdjust : 0
      })
    });

    arr.push(annotation);
  });
  return arr;
}
function calculateDims() {
  if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"]) {
    return {
      width: 2000,
      height: 350
    };
  } else {
    return {
      width: 3000,
      height: 500
    };
  }
}
function getColor(d) {
  if (d >= 80) {
    return '#01ae97';
  }

  if (d >= 60) {
    return '#4dc6b6';
  }

  if (d >= 40) {
    return '#80d7cb';
  }

  if (d >= 20) {
    return '#b3e7e0';
  }

  if (d >= 0) {
    return '#e6f7f5';
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
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "i"])(req);
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

module.exports = JSON.parse("{\"populacao\":{\"valor\":9800494,\"legenda\":\"9,87 milhões (2020, Portugal Continental)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%C3%A7%C3%A3o+residente+total+e+por+grandes+grupos+et%C3%A1rios-390\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":12435,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ }),

/***/ "la5J":
/***/ (function(module) {

module.exports = JSON.parse("{\"objectIdFieldName\":\"OBJECTID\",\"uniqueIdField\":{\"name\":\"OBJECTID\",\"isSystemMaintained\":true},\"globalIdFieldName\":\"\",\"geometryType\":\"esriGeometryPoint\",\"spatialReference\":{\"wkid\":102100,\"latestWkid\":3857},\"fields\":[{\"name\":\"ARSNome\",\"type\":\"esriFieldTypeString\",\"alias\":\"ARSNome\",\"sqlType\":\"sqlTypeOther\",\"length\":254,\"domain\":null,\"defaultValue\":null},{\"name\":\"Data\",\"type\":\"esriFieldTypeDate\",\"alias\":\"Data\",\"sqlType\":\"sqlTypeOther\",\"length\":8,\"domain\":null,\"defaultValue\":\"-2209161600000\"},{\"name\":\"ConfirmadosAcumulado\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"ConfirmadosAcumulado\",\"sqlType\":\"sqlTypeOther\",\"domain\":null},{\"name\":\"ConfirmadosNovos\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"ConfirmadosNovos\",\"sqlType\":\"sqlTypeOther\",\"domain\":null},{\"name\":\"VarObitos\",\"type\":\"esriFieldTypeInteger\",\"alias\":\"Variação de Óbitos\",\"sqlType\":\"sqlTypeOther\",\"domain\":null,\"defaultValue\":null},{\"name\":\"OBJECTID\",\"type\":\"esriFieldTypeOID\",\"alias\":\"OBJECTID\",\"sqlType\":\"sqlTypeOther\",\"domain\":null,\"defaultValue\":null}],\"features\":[{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":827765,\"ConfirmadosNovos\":271,\"VarObitos\":2,\"OBJECTID\":4704}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":332482,\"ConfirmadosNovos\":70,\"VarObitos\":1,\"OBJECTID\":4705}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":117808,\"ConfirmadosNovos\":18,\"VarObitos\":0,\"OBJECTID\":4706}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":313675,\"ConfirmadosNovos\":60,\"VarObitos\":1,\"OBJECTID\":4707}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":29398,\"ConfirmadosNovos\":52,\"VarObitos\":0,\"OBJECTID\":4708}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":21167,\"ConfirmadosNovos\":21,\"VarObitos\":0,\"OBJECTID\":4709}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":4373,\"ConfirmadosNovos\":23,\"VarObitos\":0,\"OBJECTID\":4710}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1618225200000,\"ConfirmadosAcumulado\":8862,\"ConfirmadosNovos\":27,\"VarObitos\":0,\"OBJECTID\":4711}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":828173,\"ConfirmadosNovos\":408,\"VarObitos\":5,\"OBJECTID\":4712}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":332635,\"ConfirmadosNovos\":153,\"VarObitos\":1,\"OBJECTID\":4713}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":117856,\"ConfirmadosNovos\":48,\"VarObitos\":1,\"OBJECTID\":4714}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":313812,\"ConfirmadosNovos\":137,\"VarObitos\":3,\"OBJECTID\":4715}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":29422,\"ConfirmadosNovos\":24,\"VarObitos\":0,\"OBJECTID\":4716}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":21180,\"ConfirmadosNovos\":13,\"VarObitos\":0,\"OBJECTID\":4717}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":4397,\"ConfirmadosNovos\":24,\"VarObitos\":0,\"OBJECTID\":4718}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1618311600000,\"ConfirmadosAcumulado\":8871,\"ConfirmadosNovos\":9,\"VarObitos\":0,\"OBJECTID\":4719}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":828857,\"ConfirmadosNovos\":684,\"VarObitos\":8,\"OBJECTID\":4720}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":332900,\"ConfirmadosNovos\":265,\"VarObitos\":3,\"OBJECTID\":4721}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":117922,\"ConfirmadosNovos\":66,\"VarObitos\":0,\"OBJECTID\":4722}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":314000,\"ConfirmadosNovos\":188,\"VarObitos\":5,\"OBJECTID\":4723}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":29465,\"ConfirmadosNovos\":43,\"VarObitos\":0,\"OBJECTID\":4724}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":21246,\"ConfirmadosNovos\":66,\"VarObitos\":0,\"OBJECTID\":4725}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":4420,\"ConfirmadosNovos\":23,\"VarObitos\":0,\"OBJECTID\":4726}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1618398000000,\"ConfirmadosAcumulado\":8904,\"ConfirmadosNovos\":33,\"VarObitos\":0,\"OBJECTID\":4727}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":829358,\"ConfirmadosNovos\":501,\"VarObitos\":2,\"OBJECTID\":4728}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":333056,\"ConfirmadosNovos\":156,\"VarObitos\":2,\"OBJECTID\":4729}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":117995,\"ConfirmadosNovos\":73,\"VarObitos\":0,\"OBJECTID\":4730}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":314188,\"ConfirmadosNovos\":188,\"VarObitos\":0,\"OBJECTID\":4731}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":29486,\"ConfirmadosNovos\":21,\"VarObitos\":0,\"OBJECTID\":4732}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":21278,\"ConfirmadosNovos\":32,\"VarObitos\":0,\"OBJECTID\":4733}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":4436,\"ConfirmadosNovos\":16,\"VarObitos\":0,\"OBJECTID\":4734}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1618484400000,\"ConfirmadosAcumulado\":8919,\"ConfirmadosNovos\":15,\"VarObitos\":0,\"OBJECTID\":4735}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":829911,\"ConfirmadosNovos\":553,\"VarObitos\":4,\"OBJECTID\":4736}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":333284,\"ConfirmadosNovos\":228,\"VarObitos\":2,\"OBJECTID\":4737}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":118027,\"ConfirmadosNovos\":32,\"VarObitos\":1,\"OBJECTID\":4738}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":314370,\"ConfirmadosNovos\":182,\"VarObitos\":1,\"OBJECTID\":4739}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":29511,\"ConfirmadosNovos\":25,\"VarObitos\":0,\"OBJECTID\":4740}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":21301,\"ConfirmadosNovos\":23,\"VarObitos\":0,\"OBJECTID\":4741}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":4474,\"ConfirmadosNovos\":38,\"VarObitos\":0,\"OBJECTID\":4742}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1618570800000,\"ConfirmadosAcumulado\":8944,\"ConfirmadosNovos\":25,\"VarObitos\":0,\"OBJECTID\":4743}},{\"attributes\":{\"ARSNome\":\"Nacional\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":530560,\"ConfirmadosNovos\":649,\"VarObitos\":5,\"OBJECTID\":4744}},{\"attributes\":{\"ARSNome\":\"ARS Norte\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":33542,\"ConfirmadosNovos\":258,\"VarObitos\":0,\"OBJECTID\":4745}},{\"attributes\":{\"ARSNome\":\"ARS Centro\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":118079,\"ConfirmadosNovos\":52,\"VarObitos\":0,\"OBJECTID\":4746}},{\"attributes\":{\"ARSNome\":\"ARS Lisboa e Vale do Tejo\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":314568,\"ConfirmadosNovos\":198,\"VarObitos\":3,\"OBJECTID\":4747}},{\"attributes\":{\"ARSNome\":\"ARS Alentejo\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":29554,\"ConfirmadosNovos\":43,\"VarObitos\":0,\"OBJECTID\":4748}},{\"attributes\":{\"ARSNome\":\"ARS Algarve\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":21348,\"ConfirmadosNovos\":47,\"VarObitos\":1,\"OBJECTID\":4749}},{\"attributes\":{\"ARSNome\":\"Açores\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":4507,\"ConfirmadosNovos\":33,\"VarObitos\":1,\"OBJECTID\":4750}},{\"attributes\":{\"ARSNome\":\"Madeira\",\"Data\":1618657200000,\"ConfirmadosAcumulado\":8962,\"ConfirmadosNovos\":18,\"VarObitos\":0,\"OBJECTID\":4751}}]}");

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "xPX6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FOREGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLOR_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COLOR_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COLOR_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COLOR_4; });
/* unused harmony export COLOR_5 */
/* unused harmony export COLOR_6 */
/* unused harmony export COLOR_7 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TINT_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TINT_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TINT_30; });
/* unused harmony export COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SHADE_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SHADE_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SHADE_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COMPLEMENT_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COMPLEMENT_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COMPLEMENT_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RESIZE_TRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return lineChartCommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return lineChartCommon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REGIOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ECDC_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MADEIRA_DICOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACORES_DICOS; });
/* unused harmony export ACORES_DICOS_CONCELHOS */
/* unused harmony export ARS_MAPPING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return grades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return grades_pretty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SNS_WEEKS; });
let FOREGROUND_COLOR = '#01AE97';
let COLOR_1 = '#017a6a';
let COLOR_2 = '#01574c';
let COLOR_3 = '#00342d';
let COLOR_4 = '#80d7cb';
let COLOR_5 = '#AD1413';
let COLOR_6 = '#0A6CAD';
let COLOR_7 = '#AD6E13'; // Tints

let TINT_70 = '#b3e7e0';
let TINT_50 = '#80d7cb';
let TINT_30 = '#4dc6b6';
let COLOR = '#01AE97'; // Shades

let SHADE_30 = '#017a6a';
let SHADE_50 = '#01574c';
let SHADE_70 = '#00342d'; // Square Complement

let COMPLEMENT_1 = '#0A9DD1';
let COMPLEMENT_2 = '#D11541';
let COMPLEMENT_3 = '#D17615';
let RESIZE_TRESHOLD = 1040;
let lineChartCommon = {
  fill: true,
  lineTension: 0.5,
  lineBorder: 1,
  borderWidth: 3,
  borderJoinStyle: 'miter',
  pointBorderWidth: 1,
  pointHoverRadius: 3,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10
};
let lineChartCommon2 = {
  fill: false,
  lineTension: 0.5,
  lineBorder: 1,
  borderWidth: 3,
  borderJoinStyle: 'miter',
  pointBorderWidth: 0,
  pointHoverRadius: 0,
  pointHoverBorderWidth: 0,
  pointRadius: 0,
  pointHitRadius: 0
};
const REGIOES = {
  MADEIRA: 'madeira',
  PORTUGAL: 'portugal',
  ACORES: 'ACORES'
};
const ECDC_MAPPING = {
  alentejo: 'PTCSR01',
  algarve: 'PTCSR02',
  acores: 'PTCSR03',
  centro: 'PTCSR04',
  lisboa: 'PTCSR05',
  madeira: 'PTCSR06',
  norte: 'PTCSR07',
  portugal: 'PT',
  PTCSR01: 'alentejo',
  PTCSR02: 'algarve',
  PTCSR03: 'acores',
  PTCSR04: 'centro',
  PTCSR05: 'lisboa',
  PTCSR06: 'madeira',
  PTCSR07: 'norte',
  PT: 'portugal'
};
const MADEIRA_DICOS = {
  3101: 'calheta',
  3102: 'camara_lobos',
  3108: 'santa_cruz',
  3201: 'porto_santo',
  3106: 'porto_moniz',
  3110: 'svincente',
  3109: 'santana',
  3105: 'ponta_sol',
  3103: 'funchal',
  3104: 'machico',
  3107: 'ribeira_brava',
  calheta: '3101',
  camara_lobos: '3102',
  santa_cruz: '3108',
  porto_santo: '3201',
  porto_moniz: '3106',
  svincente: '3110',
  santana: '3109',
  ponta_sol: '3105',
  funchal: '3103',
  machico: '3104',
  ribeira_brava: '3107'
};
const ACORES_DICOS = {
  49: 'corvo',
  48: 'flores',
  47: 'faial',
  46: 'pico',
  45: 'sao_jorge',
  44: 'graciosa',
  43: 'terceira',
  42: 'sao_miguel',
  41: 'santa_maria',
  corvo: 49,
  flores: 48,
  faial: 47,
  pico: 46,
  sao_jorge: 45,
  graciosa: 44,
  terceira: 43,
  sao_miguel: 42,
  santa_maria: 41
};
const ACORES_DICOS_CONCELHOS = {
  4901: 'corvo',
  4802: 'flores',
  4801: 'flores',
  4701: 'faial',
  4602: 'pico',
  4603: 'pico',
  4601: 'pico',
  4501: 'sao_jorge',
  4502: 'sao_jorge',
  4401: 'graciosa',
  4301: 'terceira',
  4302: 'terceira',
  4201: 'sao_miguel',
  4202: 'sao_miguel',
  4203: 'sao_miguel',
  4204: 'sao_miguel',
  4205: 'sao_miguel',
  4206: 'sao_miguel',
  4101: 'santa_maria'
};
const ARS_MAPPING = {
  alentejo: 'ARS Alentejo',
  algarve: 'ARS Algarve',
  lvt: 'ARS Lisboa e Vale do Tejo',
  norte: 'ARS Norte',
  centro: 'ARS Centro',
  'ARS Alentejo': 'alentejo',
  'ARS Algarve': 'algarve',
  'ARS Lisboa e Vale do Tejo': 'lvt',
  'ARS Norte': 'norte',
  'ARS Centro': 'centro'
};
const grades = [0, 20, 40, 60, 80];
const grades_pretty = {
  0: '0% a 19%',
  20: '20% a 39%',
  40: '40% a 59%',
  60: '60% a 89%',
  80: '80% a 100%'
};
const SNS_WEEKS = {
  '04/01/2021': '27/12 a 10/01',
  '11/01/2021': '11/01 a 17/01',
  '18/01/2021': '18/01 a 24/01',
  '25/01/2021': '25/01 a 31/01',
  '01/02/2021': '01/02 a 07/02',
  '08/02/2021': '08/02 a 14/02',
  '15/02/2021': '15/02 a 21/02',
  '22/02/2021': '22/02 a 28/02',
  '01/03/2021': '01/03 a 07/03',
  '08/03/2021': '08/03 a 14/03',
  '15/03/2021': '15/03 a 21/03',
  '22/03/2021': '22/03 a 28/03',
  '29/03/2021': '29/03 a 04/04',
  '05/04/2021': '05/04 a 11/04',
  '12/04/2021': '12/04 a 18/04',
  '19/04/2021': '19/04 a 25/04',
  '26/04/2021': '26/04 a 02/05',
  '03/05/2021': '03/05 a 09/05',
  '10/05/2021': '10/05 a 16/05',
  '17/05/2021': '17/05 a 23/05',
  '24/05/2021': '24/05 a 28/05',
  '31/05/2021': '31/05 a 06/06',
  '07/06/2021': '07/06 a 13/06',
  '07/06/2021': '07/06 a 13/06',
  '14/06/2021': '14/06 a 20/06'
};

/***/ })

/******/ });