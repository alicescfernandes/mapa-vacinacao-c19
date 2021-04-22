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
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "g"])(req);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return trackPlausible; });
/* unused harmony export downloadPNG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return perHundred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchWithLocalCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return makeAnnotations; });
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

  useCache = false;

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
      backgroundColor: 'rgba(255,255,255,0.6)',
      cornerRadius: 0,
      drawTime: 'afterDatasetsDraw',
      color: '#0A9DD1',
      rotation: 270,
      xAdjust: -8,
      yAdjust: 0,
      fontSize: '13px',
      enabled: true,
      content: 'asdasd'
    }
  };
  let arr = [];
  annotationsArray.forEach(el => {
    let annotation = _objectSpread(_objectSpread({}, annotationBoilerplate), {}, {
      mode: el.mode,
      scaleID: el.mode === 'horizontal' ? 'y' : 'x',
      borderColor: el.color,
      value: el.position,
      display: el.display,
      label: _objectSpread(_objectSpread({}, annotationBoilerplate.label), {}, {
        content: el.marcador,
        color: el.color
      })
    });

    arr.push(annotation);
  });
  return arr;
}
/*


export function makeAnnotations(annotationsArray) {
	let annotationBoilerplate = {
		type: 'line',
		mode: 'horizontal',
		scaleID: 'y-axis-0',
		value: null,
		borderColor: '#0A9DD1',
		borderWidth: 2,
		borderDash: [5, 5],

		label: {
			backgroundColor: 'rgba(0,0,0,0.0)',

			drawTime: 'afterDatasetsDraw',

			textAlign: 'left',
			fontColor: '#0A9DD1',
			position: 'left',
			xAdjust: 10,
			yAdjust: -10,
			fontSize: '13px',
			enabled: true,
			content: '',
		},
	};
	let arr = [];
	annotationsArray.forEach((el) => {
		let annotation = {
			...annotationBoilerplate,
			mode: el.mode,
			scaleID: el.mode === 'horizontal' ? 'y-axis-0' : 'x-axis-0',
			borderColor: el.color,
			value: el.position,
			label: {
				...annotationBoilerplate.label,
				content: el.marcador,
				fontColor: el.color,
			},
		};
		arr.push(annotation);
	});

	return arr;
}

*/

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

module.exports = JSON.parse("[{\"\":1,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":68,\"TOTAL_VAC_2\":119,\"TOTAL_VAC_UNK\":0,\"TOTAL\":187,\"CUMUL_VAC_1\":689,\"CUMUL_VAC_2\":440,\"CUMUL_VAC_UNK\":1,\"CUMUL\":1130,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":2,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":146,\"TOTAL_VAC_2\":106,\"TOTAL_VAC_UNK\":1,\"TOTAL\":253,\"CUMUL_VAC_1\":835,\"CUMUL_VAC_2\":546,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1383,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":3,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":73,\"TOTAL_VAC_2\":19,\"TOTAL_VAC_UNK\":0,\"TOTAL\":92,\"CUMUL_VAC_1\":908,\"CUMUL_VAC_2\":565,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1475,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":4,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":40,\"TOTAL_VAC_UNK\":0,\"TOTAL\":95,\"CUMUL_VAC_1\":963,\"CUMUL_VAC_2\":605,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1570,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":5,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":277,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":290,\"CUMUL_VAC_1\":1240,\"CUMUL_VAC_2\":618,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1860,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":6,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":18,\"TOTAL_VAC_2\":27,\"TOTAL_VAC_UNK\":0,\"TOTAL\":45,\"CUMUL_VAC_1\":1258,\"CUMUL_VAC_2\":645,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1905,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":7,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":310,\"TOTAL_VAC_2\":4,\"TOTAL_VAC_UNK\":0,\"TOTAL\":314,\"CUMUL_VAC_1\":1568,\"CUMUL_VAC_2\":649,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2219,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":8,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":317,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":328,\"CUMUL_VAC_1\":1885,\"CUMUL_VAC_2\":660,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2547,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":9,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":71,\"CUMUL_VAC_1\":1940,\"CUMUL_VAC_2\":676,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2618,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":10,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":261,\"TOTAL_VAC_2\":7,\"TOTAL_VAC_UNK\":0,\"TOTAL\":268,\"CUMUL_VAC_1\":2201,\"CUMUL_VAC_2\":683,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2886,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":11,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3332,\"TOTAL_VAC_2\":8774,\"TOTAL_VAC_UNK\":1,\"TOTAL\":12107,\"CUMUL_VAC_1\":27547,\"CUMUL_VAC_2\":17356,\"CUMUL_VAC_UNK\":1,\"CUMUL\":44904,\"COVER_1_VAC\":\"0,059026334\",\"COVER\":\"0,037189569\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":12,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4038,\"TOTAL_VAC_2\":2806,\"TOTAL_VAC_UNK\":1,\"TOTAL\":6845,\"CUMUL_VAC_1\":31585,\"CUMUL_VAC_2\":20162,\"CUMUL_VAC_UNK\":2,\"CUMUL\":51749,\"COVER_1_VAC\":\"0,067678759\",\"COVER\":\"0,043202126\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":13,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":12006,\"TOTAL_VAC_2\":1646,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13652,\"CUMUL_VAC_1\":43591,\"CUMUL_VAC_2\":21808,\"CUMUL_VAC_UNK\":2,\"CUMUL\":65401,\"COVER_1_VAC\":\"0,093404615\",\"COVER\":\"0,046729092\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":14,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10409,\"TOTAL_VAC_2\":2827,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13236,\"CUMUL_VAC_1\":54000,\"CUMUL_VAC_2\":24635,\"CUMUL_VAC_UNK\":2,\"CUMUL\":78637,\"COVER_1_VAC\":\"0,1157085\",\"COVER\":\"0,052786646\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":15,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5789,\"TOTAL_VAC_2\":1671,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7460,\"CUMUL_VAC_1\":59789,\"CUMUL_VAC_2\":26306,\"CUMUL_VAC_UNK\":2,\"CUMUL\":86097,\"COVER_1_VAC\":\"0,12811288\",\"COVER\":\"0,056367182\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":16,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3676,\"TOTAL_VAC_2\":7721,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11397,\"CUMUL_VAC_1\":63465,\"CUMUL_VAC_2\":34027,\"CUMUL_VAC_UNK\":2,\"CUMUL\":97494,\"COVER_1_VAC\":\"0,135989629\",\"COVER\":\"0,072911354\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":17,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11814,\"TOTAL_VAC_2\":2095,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13909,\"CUMUL_VAC_1\":75279,\"CUMUL_VAC_2\":36122,\"CUMUL_VAC_UNK\":2,\"CUMUL\":111403,\"COVER_1_VAC\":\"0,161304078\",\"COVER\":\"0,077400416\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":18,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":6101,\"TOTAL_VAC_2\":6258,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12359,\"CUMUL_VAC_1\":81380,\"CUMUL_VAC_2\":42380,\"CUMUL_VAC_UNK\":2,\"CUMUL\":123762,\"COVER_1_VAC\":\"0,174376995\",\"COVER\":\"0,090809745\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":19,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13973,\"TOTAL_VAC_2\":4284,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18257,\"CUMUL_VAC_1\":95353,\"CUMUL_VAC_2\":46664,\"CUMUL_VAC_UNK\":2,\"CUMUL\":142019,\"COVER_1_VAC\":\"0,204317641\",\"COVER\":\"0,099989286\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":20,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":21630,\"TOTAL_VAC_2\":2878,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24508,\"CUMUL_VAC_1\":116983,\"CUMUL_VAC_2\":49542,\"CUMUL_VAC_UNK\":2,\"CUMUL\":166527,\"COVER_1_VAC\":\"0,250665324\",\"COVER\":\"0,106156121\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":21,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2362,\"TOTAL_VAC_2\":2896,\"TOTAL_VAC_UNK\":1,\"TOTAL\":5259,\"CUMUL_VAC_1\":12716,\"CUMUL_VAC_2\":6304,\"CUMUL_VAC_UNK\":1,\"CUMUL\":19021,\"COVER_1_VAC\":\"0,029005077\",\"COVER\":\"0,014379365\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":22,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3168,\"TOTAL_VAC_2\":2110,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5278,\"CUMUL_VAC_1\":15884,\"CUMUL_VAC_2\":8414,\"CUMUL_VAC_UNK\":1,\"CUMUL\":24299,\"COVER_1_VAC\":\"0,036231256\",\"COVER\":\"0,019192256\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":23,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8435,\"TOTAL_VAC_2\":1065,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9500,\"CUMUL_VAC_1\":24319,\"CUMUL_VAC_2\":9479,\"CUMUL_VAC_UNK\":1,\"CUMUL\":33799,\"COVER_1_VAC\":\"0,055471412\",\"COVER\":\"0,021621511\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":24,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4599,\"TOTAL_VAC_2\":549,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5148,\"CUMUL_VAC_1\":28918,\"CUMUL_VAC_2\":10028,\"CUMUL_VAC_UNK\":1,\"CUMUL\":38947,\"COVER_1_VAC\":\"0,065961688\",\"COVER\":\"0,022873775\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":25,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5046,\"TOTAL_VAC_2\":1535,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6581,\"CUMUL_VAC_1\":33964,\"CUMUL_VAC_2\":11563,\"CUMUL_VAC_UNK\":1,\"CUMUL\":45528,\"COVER_1_VAC\":\"0,077471567\",\"COVER\":\"0,026375095\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":26,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2640,\"TOTAL_VAC_2\":2992,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5632,\"CUMUL_VAC_1\":36604,\"CUMUL_VAC_2\":14555,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51160,\"COVER_1_VAC\":\"0,083493383\",\"COVER\":\"0,033199819\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":27,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9325,\"TOTAL_VAC_2\":4278,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13603,\"CUMUL_VAC_1\":45929,\"CUMUL_VAC_2\":18833,\"CUMUL_VAC_UNK\":1,\"CUMUL\":64763,\"COVER_1_VAC\":\"0,104763621\",\"COVER\":\"0,042957897\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":28,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4135,\"TOTAL_VAC_2\":2902,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7037,\"CUMUL_VAC_1\":50064,\"CUMUL_VAC_2\":21735,\"CUMUL_VAC_UNK\":1,\"CUMUL\":71800,\"COVER_1_VAC\":\"0,114195517\",\"COVER\":\"0,049577332\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":29,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8561,\"TOTAL_VAC_2\":1760,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10321,\"CUMUL_VAC_1\":58625,\"CUMUL_VAC_2\":23495,\"CUMUL_VAC_UNK\":1,\"CUMUL\":82121,\"COVER_1_VAC\":\"0,133723079\",\"COVER\":\"0,053591876\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":30,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13529,\"TOTAL_VAC_2\":2135,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15664,\"CUMUL_VAC_1\":72154,\"CUMUL_VAC_2\":25630,\"CUMUL_VAC_UNK\":1,\"CUMUL\":97785,\"COVER_1_VAC\":\"0,164582602\",\"COVER\":\"0,058461791\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":31,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7460,\"TOTAL_VAC_2\":27083,\"TOTAL_VAC_UNK\":4,\"TOTAL\":34547,\"CUMUL_VAC_1\":79830,\"CUMUL_VAC_2\":50994,\"CUMUL_VAC_UNK\":8,\"CUMUL\":130832,\"COVER_1_VAC\":\"0,049096213\",\"COVER\":\"0,031361797\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":32,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25313,\"TOTAL_VAC_2\":9916,\"TOTAL_VAC_UNK\":3,\"TOTAL\":35232,\"CUMUL_VAC_1\":105143,\"CUMUL_VAC_2\":60910,\"CUMUL_VAC_UNK\":11,\"CUMUL\":166064,\"COVER_1_VAC\":\"0,06466395\",\"COVER\":\"0,037460232\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":33,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":38211,\"TOTAL_VAC_2\":3069,\"TOTAL_VAC_UNK\":1,\"TOTAL\":41281,\"CUMUL_VAC_1\":143354,\"CUMUL_VAC_2\":63979,\"CUMUL_VAC_UNK\":12,\"CUMUL\":207345,\"COVER_1_VAC\":\"0,08816408\",\"COVER\":\"0,039347696\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":34,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":28303,\"TOTAL_VAC_2\":5873,\"TOTAL_VAC_UNK\":1,\"TOTAL\":34177,\"CUMUL_VAC_1\":171657,\"CUMUL_VAC_2\":69852,\"CUMUL_VAC_UNK\":13,\"CUMUL\":241522,\"COVER_1_VAC\":\"0,105570695\",\"COVER\":\"0,042959647\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":35,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17431,\"TOTAL_VAC_2\":13444,\"TOTAL_VAC_UNK\":0,\"TOTAL\":30875,\"CUMUL_VAC_1\":189088,\"CUMUL_VAC_2\":83296,\"CUMUL_VAC_UNK\":13,\"CUMUL\":272397,\"COVER_1_VAC\":\"0,116290927\",\"COVER\":\"0,051227836\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":36,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16441,\"TOTAL_VAC_2\":24076,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40519,\"CUMUL_VAC_1\":205529,\"CUMUL_VAC_2\":107372,\"CUMUL_VAC_UNK\":15,\"CUMUL\":312916,\"COVER_1_VAC\":\"0,126402299\",\"COVER\":\"0,066034806\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":37,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47434,\"TOTAL_VAC_2\":4236,\"TOTAL_VAC_UNK\":0,\"TOTAL\":51670,\"CUMUL_VAC_1\":252963,\"CUMUL_VAC_2\":111608,\"CUMUL_VAC_UNK\":15,\"CUMUL\":364586,\"COVER_1_VAC\":\"0,155574662\",\"COVER\":\"0,068639986\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":38,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":24100,\"TOTAL_VAC_2\":16605,\"TOTAL_VAC_UNK\":3,\"TOTAL\":40708,\"CUMUL_VAC_1\":277063,\"CUMUL_VAC_2\":128213,\"CUMUL_VAC_UNK\":18,\"CUMUL\":405294,\"COVER_1_VAC\":\"0,170396392\",\"COVER\":\"0,07885222\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":39,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":49521,\"TOTAL_VAC_2\":10067,\"TOTAL_VAC_UNK\":0,\"TOTAL\":59588,\"CUMUL_VAC_1\":326584,\"CUMUL_VAC_2\":138280,\"CUMUL_VAC_UNK\":18,\"CUMUL\":464882,\"COVER_1_VAC\":\"0,20085228\",\"COVER\":\"0,085043521\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":40,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":77088,\"TOTAL_VAC_2\":11873,\"TOTAL_VAC_UNK\":1,\"TOTAL\":88962,\"CUMUL_VAC_1\":403672,\"CUMUL_VAC_2\":150153,\"CUMUL_VAC_UNK\":19,\"CUMUL\":553844,\"COVER_1_VAC\":\"0,248262137\",\"COVER\":\"0,09234553\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":41,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14252,\"TOTAL_VAC_2\":30247,\"TOTAL_VAC_UNK\":1,\"TOTAL\":44500,\"CUMUL_VAC_1\":114640,\"CUMUL_VAC_2\":60683,\"CUMUL_VAC_UNK\":2,\"CUMUL\":175325,\"COVER_1_VAC\":\"0,031047271\",\"COVER\":\"0,016434417\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":42,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32669,\"TOTAL_VAC_2\":18971,\"TOTAL_VAC_UNK\":2,\"TOTAL\":51642,\"CUMUL_VAC_1\":147309,\"CUMUL_VAC_2\":79654,\"CUMUL_VAC_UNK\":4,\"CUMUL\":226967,\"COVER_1_VAC\":\"0,039894823\",\"COVER\":\"0,02157222\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":43,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":48896,\"TOTAL_VAC_2\":6621,\"TOTAL_VAC_UNK\":0,\"TOTAL\":55517,\"CUMUL_VAC_1\":196205,\"CUMUL_VAC_2\":86275,\"CUMUL_VAC_UNK\":4,\"CUMUL\":282484,\"COVER_1_VAC\":\"0,053137036\",\"COVER\":\"0,023365347\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":44,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44626,\"TOTAL_VAC_2\":12683,\"TOTAL_VAC_UNK\":1,\"TOTAL\":57310,\"CUMUL_VAC_1\":240831,\"CUMUL_VAC_2\":98958,\"CUMUL_VAC_UNK\":5,\"CUMUL\":339794,\"COVER_1_VAC\":\"0,065222831\",\"COVER\":\"0,026800208\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":45,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32803,\"TOTAL_VAC_2\":16439,\"TOTAL_VAC_UNK\":2,\"TOTAL\":49244,\"CUMUL_VAC_1\":273634,\"CUMUL_VAC_2\":115397,\"CUMUL_VAC_UNK\":7,\"CUMUL\":389038,\"COVER_1_VAC\":\"0,074106673\",\"COVER\":\"0,031252285\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":46,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25422,\"TOTAL_VAC_2\":28845,\"TOTAL_VAC_UNK\":2,\"TOTAL\":54269,\"CUMUL_VAC_1\":299056,\"CUMUL_VAC_2\":144242,\"CUMUL_VAC_UNK\":9,\"CUMUL\":443307,\"COVER_1_VAC\":\"0,080991563\",\"COVER\":\"0,039064205\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":47,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":87948,\"TOTAL_VAC_2\":7401,\"TOTAL_VAC_UNK\":0,\"TOTAL\":95349,\"CUMUL_VAC_1\":387004,\"CUMUL_VAC_2\":151643,\"CUMUL_VAC_UNK\":9,\"CUMUL\":538656,\"COVER_1_VAC\":\"0,104809998\",\"COVER\":\"0,041068574\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":48,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44866,\"TOTAL_VAC_2\":23620,\"TOTAL_VAC_UNK\":5,\"TOTAL\":68491,\"CUMUL_VAC_1\":431870,\"CUMUL_VAC_2\":175263,\"CUMUL_VAC_UNK\":14,\"CUMUL\":607147,\"COVER_1_VAC\":\"0,116960791\",\"COVER\":\"0,047465439\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":49,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":86340,\"TOTAL_VAC_2\":19301,\"TOTAL_VAC_UNK\":1,\"TOTAL\":105642,\"CUMUL_VAC_1\":518210,\"CUMUL_VAC_2\":194564,\"CUMUL_VAC_UNK\":15,\"CUMUL\":712789,\"COVER_1_VAC\":\"0,140343741\",\"COVER\":\"0,052692614\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":50,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":162028,\"TOTAL_VAC_2\":13953,\"TOTAL_VAC_UNK\":0,\"TOTAL\":175981,\"CUMUL_VAC_1\":680238,\"CUMUL_VAC_2\":208517,\"CUMUL_VAC_UNK\":15,\"CUMUL\":888770,\"COVER_1_VAC\":\"0,184224823\",\"COVER\":\"0,056471422\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":51,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8474,\"TOTAL_VAC_2\":28561,\"TOTAL_VAC_UNK\":6,\"TOTAL\":37041,\"CUMUL_VAC_1\":105029,\"CUMUL_VAC_2\":68777,\"CUMUL_VAC_UNK\":7,\"CUMUL\":173813,\"COVER_1_VAC\":\"0,029375964\",\"COVER\":\"0,019236503\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":52,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32753,\"TOTAL_VAC_2\":15001,\"TOTAL_VAC_UNK\":3,\"TOTAL\":47757,\"CUMUL_VAC_1\":137782,\"CUMUL_VAC_2\":83778,\"CUMUL_VAC_UNK\":10,\"CUMUL\":221570,\"COVER_1_VAC\":\"0,038536776\",\"COVER\":\"0,02343219\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":53,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64448,\"TOTAL_VAC_2\":4214,\"TOTAL_VAC_UNK\":1,\"TOTAL\":68663,\"CUMUL_VAC_1\":202230,\"CUMUL_VAC_2\":87992,\"CUMUL_VAC_UNK\":11,\"CUMUL\":290233,\"COVER_1_VAC\":\"0,056562484\",\"COVER\":\"0,02461082\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":54,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47620,\"TOTAL_VAC_2\":6836,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54456,\"CUMUL_VAC_1\":249850,\"CUMUL_VAC_2\":94828,\"CUMUL_VAC_UNK\":11,\"CUMUL\":344689,\"COVER_1_VAC\":\"0,069881505\",\"COVER\":\"0,026522807\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":55,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25090,\"TOTAL_VAC_2\":13653,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38743,\"CUMUL_VAC_1\":274940,\"CUMUL_VAC_2\":108481,\"CUMUL_VAC_UNK\":11,\"CUMUL\":383432,\"COVER_1_VAC\":\"0,076899023\",\"COVER\":\"0,030341467\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":56,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":26460,\"TOTAL_VAC_2\":42112,\"TOTAL_VAC_UNK\":5,\"TOTAL\":68577,\"CUMUL_VAC_1\":301400,\"CUMUL_VAC_2\":150593,\"CUMUL_VAC_UNK\":16,\"CUMUL\":452009,\"COVER_1_VAC\":\"0,084299722\",\"COVER\":\"0,042119934\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":57,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88114,\"TOTAL_VAC_2\":2143,\"TOTAL_VAC_UNK\":0,\"TOTAL\":90257,\"CUMUL_VAC_1\":389514,\"CUMUL_VAC_2\":152736,\"CUMUL_VAC_UNK\":16,\"CUMUL\":542266,\"COVER_1_VAC\":\"0,108944665\",\"COVER\":\"0,042719318\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":58,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":53488,\"TOTAL_VAC_2\":32407,\"TOTAL_VAC_UNK\":1,\"TOTAL\":85896,\"CUMUL_VAC_1\":443002,\"CUMUL_VAC_2\":185143,\"CUMUL_VAC_UNK\":17,\"CUMUL\":628162,\"COVER_1_VAC\":\"0,123904929\",\"COVER\":\"0,051783356\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":59,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":81542,\"TOTAL_VAC_2\":13373,\"TOTAL_VAC_UNK\":2,\"TOTAL\":94917,\"CUMUL_VAC_1\":524544,\"CUMUL_VAC_2\":198516,\"CUMUL_VAC_UNK\":19,\"CUMUL\":723079,\"COVER_1_VAC\":\"0,146711723\",\"COVER\":\"0,055523702\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":60,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":134605,\"TOTAL_VAC_2\":18906,\"TOTAL_VAC_UNK\":1,\"TOTAL\":153512,\"CUMUL_VAC_1\":659149,\"CUMUL_VAC_2\":217422,\"CUMUL_VAC_UNK\":20,\"CUMUL\":876591,\"COVER_1_VAC\":\"0,184359912\",\"COVER\":\"0,060811593\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":61,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3158,\"TOTAL_VAC_2\":1085,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4243,\"CUMUL_VAC_1\":10991,\"CUMUL_VAC_2\":4774,\"CUMUL_VAC_UNK\":0,\"CUMUL\":15765,\"COVER_1_VAC\":\"0,043228425\",\"COVER\":\"0,018776499\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":62,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2494,\"TOTAL_VAC_2\":638,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3132,\"CUMUL_VAC_1\":13485,\"CUMUL_VAC_2\":5412,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18897,\"COVER_1_VAC\":\"0,053037514\",\"COVER\":\"0,021285801\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":63,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2255,\"TOTAL_VAC_2\":2155,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4410,\"CUMUL_VAC_1\":15740,\"CUMUL_VAC_2\":7567,\"CUMUL_VAC_UNK\":0,\"CUMUL\":23307,\"COVER_1_VAC\":\"0,061906597\",\"COVER\":\"0,029761577\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":64,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1431,\"TOTAL_VAC_2\":3116,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4547,\"CUMUL_VAC_1\":17171,\"CUMUL_VAC_2\":10683,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27854,\"COVER_1_VAC\":\"0,067534827\",\"COVER\":\"0,042017038\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":65,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4881,\"TOTAL_VAC_2\":2399,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7280,\"CUMUL_VAC_1\":22052,\"CUMUL_VAC_2\":13082,\"CUMUL_VAC_UNK\":0,\"CUMUL\":35134,\"COVER_1_VAC\":\"0,086732165\",\"COVER\":\"0,051452485\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":66,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3102,\"TOTAL_VAC_2\":2347,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5449,\"CUMUL_VAC_1\":25154,\"CUMUL_VAC_2\":15429,\"CUMUL_VAC_UNK\":0,\"CUMUL\":40583,\"COVER_1_VAC\":\"0,098932563\",\"COVER\":\"0,060683411\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":67,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5273,\"TOTAL_VAC_2\":182,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5455,\"CUMUL_VAC_1\":30427,\"CUMUL_VAC_2\":15611,\"CUMUL_VAC_UNK\":0,\"CUMUL\":46038,\"COVER_1_VAC\":\"0,119671667\",\"COVER\":\"0,061399231\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":68,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1204,\"TOTAL_VAC_2\":1260,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2464,\"CUMUL_VAC_1\":31631,\"CUMUL_VAC_2\":16871,\"CUMUL_VAC_UNK\":0,\"CUMUL\":48502,\"COVER_1_VAC\":\"0,124407089\",\"COVER\":\"0,066354905\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":69,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10213,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11512,\"CUMUL_VAC_1\":41844,\"CUMUL_VAC_2\":18170,\"CUMUL_VAC_UNK\":0,\"CUMUL\":60014,\"COVER_1_VAC\":\"0,164575582\",\"COVER\":\"0,071463969\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":70,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8425,\"TOTAL_VAC_2\":1298,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9723,\"CUMUL_VAC_1\":50269,\"CUMUL_VAC_2\":19468,\"CUMUL_VAC_UNK\":0,\"CUMUL\":69737,\"COVER_1_VAC\":\"0,197711737\",\"COVER\":\"0,0765691\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":71,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2029,\"TOTAL_VAC_2\":1238,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3267,\"CUMUL_VAC_1\":13845,\"CUMUL_VAC_2\":8376,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22221,\"COVER_1_VAC\":\"0,05702318\",\"COVER\":\"0,034498097\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":72,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3182,\"TOTAL_VAC_2\":611,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3793,\"CUMUL_VAC_1\":17367,\"CUMUL_VAC_2\":9316,\"CUMUL_VAC_UNK\":0,\"CUMUL\":26683,\"COVER_1_VAC\":\"0,071529185\",\"COVER\":\"0,03836966\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":73,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1849,\"TOTAL_VAC_2\":729,\"TOTAL_VAC_UNK\":1,\"TOTAL\":2579,\"CUMUL_VAC_1\":19711,\"CUMUL_VAC_2\":10298,\"CUMUL_VAC_UNK\":2,\"CUMUL\":30011,\"COVER_1_VAC\":\"0,08118338\",\"COVER\":\"0,042414208\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":74,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2708,\"TOTAL_VAC_2\":2030,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4738,\"CUMUL_VAC_1\":22806,\"CUMUL_VAC_2\":12437,\"CUMUL_VAC_UNK\":0,\"CUMUL\":35243,\"COVER_1_VAC\":\"0,093930707\",\"COVER\":\"0,051224073\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":75,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3397,\"TOTAL_VAC_2\":2282,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5679,\"CUMUL_VAC_1\":30559,\"CUMUL_VAC_2\":17914,\"CUMUL_VAC_UNK\":22,\"CUMUL\":48495,\"COVER_1_VAC\":\"0,125862864\",\"COVER\":\"0,073782105\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":76,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":30,\"TOTAL_VAC_2\":67,\"TOTAL_VAC_UNK\":0,\"TOTAL\":97,\"CUMUL_VAC_1\":163,\"CUMUL_VAC_2\":72,\"CUMUL_VAC_UNK\":0,\"CUMUL\":235,\"COVER_1_VAC\":\"9,49E-05\",\"COVER\":\"4,19E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":77,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1384,\"TOTAL_VAC_2\":3034,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4418,\"CUMUL_VAC_1\":11771,\"CUMUL_VAC_2\":6559,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18330,\"COVER_1_VAC\":\"0,015174661\",\"COVER\":\"0,008455578\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":78,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":13007,\"TOTAL_VAC_2\":30659,\"TOTAL_VAC_UNK\":6,\"TOTAL\":43672,\"CUMUL_VAC_1\":139864,\"CUMUL_VAC_2\":88617,\"CUMUL_VAC_UNK\":11,\"CUMUL\":228492,\"COVER_1_VAC\":\"0,041618102\",\"COVER\":\"0,026368982\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":79,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":6531,\"TOTAL_VAC_2\":22134,\"TOTAL_VAC_UNK\":1,\"TOTAL\":28666,\"CUMUL_VAC_1\":82208,\"CUMUL_VAC_2\":51022,\"CUMUL_VAC_UNK\":3,\"CUMUL\":133233,\"COVER_1_VAC\":\"0,038022627\",\"COVER\":\"0,023598561\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":80,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":3517,\"TOTAL_VAC_2\":11415,\"TOTAL_VAC_UNK\":3,\"TOTAL\":14935,\"CUMUL_VAC_1\":34528,\"CUMUL_VAC_2\":18083,\"CUMUL_VAC_UNK\":3,\"CUMUL\":52614,\"COVER_1_VAC\":\"0,021518658\",\"COVER\":\"0,011269749\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":81,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":14637,\"TOTAL_VAC_2\":31456,\"TOTAL_VAC_UNK\":3,\"TOTAL\":46096,\"CUMUL_VAC_1\":82907,\"CUMUL_VAC_2\":44975,\"CUMUL_VAC_UNK\":3,\"CUMUL\":127885,\"COVER_1_VAC\":\"0,122668351\",\"COVER\":\"0,066544551\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":82,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":83,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":20,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":183,\"CUMUL_VAC_2\":88,\"CUMUL_VAC_UNK\":0,\"CUMUL\":271,\"COVER_1_VAC\":\"0,000106578\",\"COVER\":\"5,13E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":84,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2188,\"TOTAL_VAC_2\":1700,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3888,\"CUMUL_VAC_1\":13959,\"CUMUL_VAC_2\":8259,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22218,\"COVER_1_VAC\":\"0,017995336\",\"COVER\":\"0,010647144\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":85,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":21167,\"TOTAL_VAC_2\":18714,\"TOTAL_VAC_UNK\":4,\"TOTAL\":39885,\"CUMUL_VAC_1\":161031,\"CUMUL_VAC_2\":107331,\"CUMUL_VAC_UNK\":15,\"CUMUL\":268377,\"COVER_1_VAC\":\"0,04791658\",\"COVER\":\"0,031937543\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":86,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":24403,\"TOTAL_VAC_2\":12778,\"TOTAL_VAC_UNK\":2,\"TOTAL\":37183,\"CUMUL_VAC_1\":106611,\"CUMUL_VAC_2\":63800,\"CUMUL_VAC_UNK\":5,\"CUMUL\":170416,\"COVER_1_VAC\":\"0,049309438\",\"COVER\":\"0,029508608\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":87,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":4694,\"TOTAL_VAC_2\":7147,\"TOTAL_VAC_UNK\":2,\"TOTAL\":11843,\"CUMUL_VAC_1\":39222,\"CUMUL_VAC_2\":25230,\"CUMUL_VAC_UNK\":5,\"CUMUL\":64457,\"COVER_1_VAC\":\"0,024444069\",\"COVER\":\"0,015723927\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":88,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":48109,\"TOTAL_VAC_2\":9193,\"TOTAL_VAC_UNK\":2,\"TOTAL\":57304,\"CUMUL_VAC_1\":131016,\"CUMUL_VAC_2\":54168,\"CUMUL_VAC_UNK\":5,\"CUMUL\":185189,\"COVER_1_VAC\":\"0,193849937\",\"COVER\":\"0,08014642\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":89,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":90,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":21,\"TOTAL_VAC_2\":31,\"TOTAL_VAC_UNK\":0,\"TOTAL\":52,\"CUMUL_VAC_1\":204,\"CUMUL_VAC_2\":119,\"CUMUL_VAC_UNK\":0,\"CUMUL\":323,\"COVER_1_VAC\":\"0,000118808\",\"COVER\":\"6,93E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":91,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1237,\"TOTAL_VAC_2\":622,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1859,\"CUMUL_VAC_1\":15196,\"CUMUL_VAC_2\":8881,\"CUMUL_VAC_UNK\":0,\"CUMUL\":24077,\"COVER_1_VAC\":\"0,019590022\",\"COVER\":\"0,011448999\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":92,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":10986,\"TOTAL_VAC_2\":6435,\"TOTAL_VAC_UNK\":1,\"TOTAL\":17422,\"CUMUL_VAC_1\":172017,\"CUMUL_VAC_2\":113766,\"CUMUL_VAC_UNK\":16,\"CUMUL\":285799,\"COVER_1_VAC\":\"0,051185588\",\"COVER\":\"0,03385235\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":93,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":49190,\"TOTAL_VAC_2\":4554,\"TOTAL_VAC_UNK\":1,\"TOTAL\":53745,\"CUMUL_VAC_1\":155801,\"CUMUL_VAC_2\":68354,\"CUMUL_VAC_UNK\":6,\"CUMUL\":224161,\"COVER_1_VAC\":\"0,072060667\",\"COVER\":\"0,031614912\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":94,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":11147,\"TOTAL_VAC_2\":2205,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13352,\"CUMUL_VAC_1\":50369,\"CUMUL_VAC_2\":27435,\"CUMUL_VAC_UNK\":5,\"CUMUL\":77809,\"COVER_1_VAC\":\"0,031391141\",\"COVER\":\"0,017098135\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":95,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":101743,\"TOTAL_VAC_2\":4942,\"TOTAL_VAC_UNK\":0,\"TOTAL\":106685,\"CUMUL_VAC_1\":232759,\"CUMUL_VAC_2\":59110,\"CUMUL_VAC_UNK\":5,\"CUMUL\":291874,\"COVER_1_VAC\":\"0,344387842\",\"COVER\":\"0,087458553\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":96,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":97,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":8,\"TOTAL_VAC_2\":26,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34,\"CUMUL_VAC_1\":212,\"CUMUL_VAC_2\":145,\"CUMUL_VAC_UNK\":0,\"CUMUL\":357,\"COVER_1_VAC\":\"0,000123468\",\"COVER\":\"8,44E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":98,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":873,\"TOTAL_VAC_2\":949,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1822,\"CUMUL_VAC_1\":16069,\"CUMUL_VAC_2\":9830,\"CUMUL_VAC_UNK\":0,\"CUMUL\":25899,\"COVER_1_VAC\":\"0,020715456\",\"COVER\":\"0,012672409\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":99,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":7068,\"TOTAL_VAC_2\":9162,\"TOTAL_VAC_UNK\":0,\"TOTAL\":16230,\"CUMUL_VAC_1\":179085,\"CUMUL_VAC_2\":122928,\"CUMUL_VAC_UNK\":16,\"CUMUL\":302029,\"COVER_1_VAC\":\"0,053288751\",\"COVER\":\"0,036578605\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":100,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":29614,\"TOTAL_VAC_2\":5652,\"TOTAL_VAC_UNK\":1,\"TOTAL\":35267,\"CUMUL_VAC_1\":185415,\"CUMUL_VAC_2\":74006,\"CUMUL_VAC_UNK\":7,\"CUMUL\":259428,\"COVER_1_VAC\":\"0,085757657\",\"COVER\":\"0,03422906\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":101,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":12761,\"TOTAL_VAC_2\":3600,\"TOTAL_VAC_UNK\":0,\"TOTAL\":16361,\"CUMUL_VAC_1\":63130,\"CUMUL_VAC_2\":31035,\"CUMUL_VAC_UNK\":5,\"CUMUL\":94170,\"COVER_1_VAC\":\"0,039344095\",\"COVER\":\"0,019341739\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":102,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":86719,\"TOTAL_VAC_2\":12535,\"TOTAL_VAC_UNK\":1,\"TOTAL\":99255,\"CUMUL_VAC_1\":319478,\"CUMUL_VAC_2\":71645,\"CUMUL_VAC_UNK\":6,\"CUMUL\":391129,\"COVER_1_VAC\":\"0,47269639\",\"COVER\":\"0,106005211\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":103,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":104,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":12,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":23,\"CUMUL_VAC_1\":224,\"CUMUL_VAC_2\":156,\"CUMUL_VAC_UNK\":0,\"CUMUL\":380,\"COVER_1_VAC\":\"0,000130456\",\"COVER\":\"9,09E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":105,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1268,\"TOTAL_VAC_2\":516,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1784,\"CUMUL_VAC_1\":17337,\"CUMUL_VAC_2\":10346,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27683,\"COVER_1_VAC\":\"0,022350107\",\"COVER\":\"0,013337613\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":106,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":14716,\"TOTAL_VAC_2\":4979,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19695,\"CUMUL_VAC_1\":193801,\"CUMUL_VAC_2\":127907,\"CUMUL_VAC_UNK\":16,\"CUMUL\":321724,\"COVER_1_VAC\":\"0,057667662\",\"COVER\":\"0,038060163\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":107,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":20954,\"TOTAL_VAC_2\":3703,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24657,\"CUMUL_VAC_1\":206369,\"CUMUL_VAC_2\":77709,\"CUMUL_VAC_UNK\":7,\"CUMUL\":284085,\"COVER_1_VAC\":\"0,095449245\",\"COVER\":\"0,035941762\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":108,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":15071,\"TOTAL_VAC_2\":3200,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18271,\"CUMUL_VAC_1\":78201,\"CUMUL_VAC_2\":34235,\"CUMUL_VAC_UNK\":5,\"CUMUL\":112441,\"COVER_1_VAC\":\"0,048736695\",\"COVER\":\"0,021336054\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":109,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":39296,\"TOTAL_VAC_2\":36745,\"TOTAL_VAC_UNK\":2,\"TOTAL\":76043,\"CUMUL_VAC_1\":358774,\"CUMUL_VAC_2\":108390,\"CUMUL_VAC_UNK\":8,\"CUMUL\":467172,\"COVER_1_VAC\":\"0,53083835\",\"COVER\":\"0,160372738\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":110,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":111,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":23,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24,\"CUMUL_VAC_1\":242,\"CUMUL_VAC_2\":183,\"CUMUL_VAC_UNK\":0,\"CUMUL\":425,\"COVER_1_VAC\":\"0,000140939\",\"COVER\":\"0,000106578\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":112,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":223,\"TOTAL_VAC_2\":365,\"TOTAL_VAC_UNK\":1,\"TOTAL\":589,\"CUMUL_VAC_1\":17956,\"CUMUL_VAC_2\":11026,\"CUMUL_VAC_UNK\":1,\"CUMUL\":28983,\"COVER_1_VAC\":\"0,023148094\",\"COVER\":\"0,01421424\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":113,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":3993,\"TOTAL_VAC_2\":2944,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6937,\"CUMUL_VAC_1\":201688,\"CUMUL_VAC_2\":133621,\"CUMUL_VAC_UNK\":16,\"CUMUL\":335325,\"COVER_1_VAC\":\"0,060014527\",\"COVER\":\"0,039760428\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":114,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":3885,\"TOTAL_VAC_2\":2227,\"TOTAL_VAC_UNK\":2,\"TOTAL\":6114,\"CUMUL_VAC_1\":212399,\"CUMUL_VAC_2\":81437,\"CUMUL_VAC_UNK\":9,\"CUMUL\":293845,\"COVER_1_VAC\":\"0,098238225\",\"COVER\":\"0,037666026\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":115,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":17476,\"TOTAL_VAC_2\":6663,\"TOTAL_VAC_UNK\":2,\"TOTAL\":24141,\"CUMUL_VAC_1\":97516,\"CUMUL_VAC_2\":41880,\"CUMUL_VAC_UNK\":7,\"CUMUL\":139403,\"COVER_1_VAC\":\"0,060774255\",\"COVER\":\"0,026100597\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":116,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":54208,\"TOTAL_VAC_2\":97136,\"TOTAL_VAC_UNK\":4,\"TOTAL\":151348,\"CUMUL_VAC_1\":416507,\"CUMUL_VAC_2\":207092,\"CUMUL_VAC_UNK\":12,\"CUMUL\":623611,\"COVER_1_VAC\":\"0,616259508\",\"COVER\":\"0,306411211\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":117,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":2,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2,\"CUMUL_VAC_1\":3,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":3,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":118,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":25,\"TOTAL_VAC_2\":7,\"TOTAL_VAC_UNK\":0,\"TOTAL\":32,\"CUMUL_VAC_1\":267,\"CUMUL_VAC_2\":190,\"CUMUL_VAC_UNK\":0,\"CUMUL\":457,\"COVER_1_VAC\":\"0,000155499\",\"COVER\":\"0,000110655\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":119,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":3079,\"TOTAL_VAC_2\":111,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3190,\"CUMUL_VAC_1\":21039,\"CUMUL_VAC_2\":11145,\"CUMUL_VAC_UNK\":1,\"CUMUL\":32185,\"COVER_1_VAC\":\"0,027122564\",\"COVER\":\"0,014367649\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":120,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":41084,\"TOTAL_VAC_2\":1166,\"TOTAL_VAC_UNK\":0,\"TOTAL\":42250,\"CUMUL_VAC_1\":242800,\"CUMUL_VAC_2\":134899,\"CUMUL_VAC_UNK\":16,\"CUMUL\":377715,\"COVER_1_VAC\":\"0,072247864\",\"COVER\":\"0,040140711\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":121,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":33206,\"TOTAL_VAC_2\":834,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34040,\"CUMUL_VAC_1\":245658,\"CUMUL_VAC_2\":82303,\"CUMUL_VAC_UNK\":9,\"CUMUL\":327970,\"COVER_1_VAC\":\"0,11362109\",\"COVER\":\"0,038066566\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":122,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":52070,\"TOTAL_VAC_2\":2017,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54087,\"CUMUL_VAC_1\":149704,\"CUMUL_VAC_2\":43908,\"CUMUL_VAC_UNK\":7,\"CUMUL\":193619,\"COVER_1_VAC\":\"0,093299039\",\"COVER\":\"0,027364494\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":123,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":123936,\"TOTAL_VAC_2\":16815,\"TOTAL_VAC_UNK\":0,\"TOTAL\":140751,\"CUMUL_VAC_1\":540580,\"CUMUL_VAC_2\":224073,\"CUMUL_VAC_UNK\":12,\"CUMUL\":764665,\"COVER_1_VAC\":\"0,799836653\",\"COVER\":\"0,331536125\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":124,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":125,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":7,\"TOTAL_VAC_2\":12,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19,\"CUMUL_VAC_1\":274,\"CUMUL_VAC_2\":214,\"CUMUL_VAC_UNK\":0,\"CUMUL\":488,\"COVER_1_VAC\":\"0,000159576\",\"COVER\":\"0,000124632\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":126,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":612,\"TOTAL_VAC_2\":64,\"TOTAL_VAC_UNK\":1,\"TOTAL\":677,\"CUMUL_VAC_1\":21652,\"CUMUL_VAC_2\":11226,\"CUMUL_VAC_UNK\":2,\"CUMUL\":32880,\"COVER_1_VAC\":\"0,027912817\",\"COVER\":\"0,014472071\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":127,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4141,\"TOTAL_VAC_2\":720,\"TOTAL_VAC_UNK\":2,\"TOTAL\":4863,\"CUMUL_VAC_1\":246973,\"CUMUL_VAC_2\":135721,\"CUMUL_VAC_UNK\":18,\"CUMUL\":382712,\"COVER_1_VAC\":\"0,073489587\",\"COVER\":\"0,040385306\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":128,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":7307,\"TOTAL_VAC_2\":617,\"TOTAL_VAC_UNK\":1,\"TOTAL\":7925,\"CUMUL_VAC_1\":253237,\"CUMUL_VAC_2\":82946,\"CUMUL_VAC_UNK\":11,\"CUMUL\":336194,\"COVER_1_VAC\":\"0,117126509\",\"COVER\":\"0,038363965\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":129,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":87470,\"TOTAL_VAC_2\":7174,\"TOTAL_VAC_UNK\":2,\"TOTAL\":94646,\"CUMUL_VAC_1\":237332,\"CUMUL_VAC_2\":51151,\"CUMUL_VAC_UNK\":9,\"CUMUL\":288492,\"COVER_1_VAC\":\"0,147910862\",\"COVER\":\"0,031878501\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":130,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":36523,\"TOTAL_VAC_2\":75205,\"TOTAL_VAC_UNK\":4,\"TOTAL\":111732,\"CUMUL_VAC_1\":577135,\"CUMUL_VAC_2\":299305,\"CUMUL_VAC_UNK\":16,\"CUMUL\":876456,\"COVER_1_VAC\":\"0,853923058\",\"COVER\":\"0,442848625\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":131,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":132,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":14,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15,\"CUMUL_VAC_1\":288,\"CUMUL_VAC_2\":215,\"CUMUL_VAC_UNK\":0,\"CUMUL\":503,\"COVER_1_VAC\":\"0,00016773\",\"COVER\":\"0,000125215\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":133,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":693,\"TOTAL_VAC_2\":103,\"TOTAL_VAC_UNK\":0,\"TOTAL\":796,\"CUMUL_VAC_1\":22346,\"CUMUL_VAC_2\":11338,\"CUMUL_VAC_UNK\":2,\"CUMUL\":33686,\"COVER_1_VAC\":\"0,028807492\",\"COVER\":\"0,014616457\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":134,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8342,\"TOTAL_VAC_2\":814,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9156,\"CUMUL_VAC_1\":255352,\"CUMUL_VAC_2\":136589,\"CUMUL_VAC_UNK\":18,\"CUMUL\":391959,\"COVER_1_VAC\":\"0,075982852\",\"COVER\":\"0,040643589\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":135,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":14366,\"TOTAL_VAC_2\":721,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15087,\"CUMUL_VAC_1\":267762,\"CUMUL_VAC_2\":83685,\"CUMUL_VAC_UNK\":10,\"CUMUL\":351457,\"COVER_1_VAC\":\"0,123844574\",\"COVER\":\"0,038705765\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":136,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":199412,\"TOTAL_VAC_2\":4916,\"TOTAL_VAC_UNK\":0,\"TOTAL\":204328,\"CUMUL_VAC_1\":436912,\"CUMUL_VAC_2\":56090,\"CUMUL_VAC_UNK\":9,\"CUMUL\":493011,\"COVER_1_VAC\":\"0,272293793\",\"COVER\":\"0,034956602\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":137,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":30085,\"TOTAL_VAC_2\":45575,\"TOTAL_VAC_UNK\":3,\"TOTAL\":75663,\"CUMUL_VAC_1\":607242,\"CUMUL_VAC_2\":344885,\"CUMUL_VAC_UNK\":18,\"CUMUL\":952145,\"COVER_1_VAC\":\"0,898469068\",\"COVER\":\"0,510288328\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":138,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":4,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":4,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":139,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":2,\"TOTAL_VAC_UNK\":0,\"TOTAL\":39,\"CUMUL_VAC_1\":325,\"CUMUL_VAC_2\":217,\"CUMUL_VAC_UNK\":0,\"CUMUL\":542,\"COVER_1_VAC\":\"0,000189278\",\"COVER\":\"0,00012638\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":140,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":4166,\"TOTAL_VAC_2\":56,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4222,\"CUMUL_VAC_1\":26683,\"CUMUL_VAC_2\":11535,\"CUMUL_VAC_UNK\":2,\"CUMUL\":38220,\"COVER_1_VAC\":\"0,034398563\",\"COVER\":\"0,01487042\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":141,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":88021,\"TOTAL_VAC_2\":439,\"TOTAL_VAC_UNK\":0,\"TOTAL\":88460,\"CUMUL_VAC_1\":345865,\"CUMUL_VAC_2\":138923,\"CUMUL_VAC_UNK\":32,\"CUMUL\":484820,\"COVER_1_VAC\":\"0,102916011\",\"COVER\":\"0,041338097\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":142,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":86636,\"TOTAL_VAC_2\":363,\"TOTAL_VAC_UNK\":0,\"TOTAL\":86999,\"CUMUL_VAC_1\":355519,\"CUMUL_VAC_2\":84810,\"CUMUL_VAC_UNK\":16,\"CUMUL\":440345,\"COVER_1_VAC\":\"0,16443371\",\"COVER\":\"0,039226097\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":143,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":231810,\"TOTAL_VAC_2\":3283,\"TOTAL_VAC_UNK\":1,\"TOTAL\":235094,\"CUMUL_VAC_1\":669263,\"CUMUL_VAC_2\":59658,\"CUMUL_VAC_UNK\":12,\"CUMUL\":728933,\"COVER_1_VAC\":\"0,417100378\",\"COVER\":\"0,037180263\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":144,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":10293,\"TOTAL_VAC_2\":49189,\"TOTAL_VAC_UNK\":1,\"TOTAL\":59483,\"CUMUL_VAC_1\":617566,\"CUMUL_VAC_2\":394186,\"CUMUL_VAC_UNK\":19,\"CUMUL\":1011771,\"COVER_1_VAC\":\"0,913744354\",\"COVER\":\"0,583233584\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":145,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":146,\"TYPE\":\"GENERAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":39106,\"TOTAL_VAC_2\":98765,\"TOTAL_VAC_UNK\":13,\"TOTAL\":137884,\"CUMUL_VAC_1\":351442,\"CUMUL_VAC_2\":209328,\"CUMUL_VAC_UNK\":20,\"CUMUL\":560790,\"COVER_1_VAC\":\"0,03413414\",\"COVER\":\"0,020331182\",\"RECEIVED\":651900,\"DISTRIBUTED\":571981},{\"\":147,\"TYPE\":\"GENERAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":100581,\"TOTAL_VAC_2\":49548,\"TOTAL_VAC_UNK\":10,\"TOTAL\":150139,\"CUMUL_VAC_1\":452023,\"CUMUL_VAC_2\":258876,\"CUMUL_VAC_UNK\":30,\"CUMUL\":710929,\"COVER_1_VAC\":\"0,043903166\",\"COVER\":\"0,025143579\",\"RECEIVED\":830730,\"DISTRIBUTED\":718143},{\"\":148,\"TYPE\":\"GENERAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":174324,\"TOTAL_VAC_2\":18789,\"TOTAL_VAC_UNK\":2,\"TOTAL\":193115,\"CUMUL_VAC_1\":626347,\"CUMUL_VAC_2\":277665,\"CUMUL_VAC_UNK\":32,\"CUMUL\":904044,\"COVER_1_VAC\":\"0,060834551\",\"COVER\":\"0,026968478\",\"RECEIVED\":1002999,\"DISTRIBUTED\":933847},{\"\":149,\"TYPE\":\"GENERAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":137043,\"TOTAL_VAC_2\":31924,\"TOTAL_VAC_UNK\":2,\"TOTAL\":168969,\"CUMUL_VAC_1\":763390,\"CUMUL_VAC_2\":309589,\"CUMUL_VAC_UNK\":34,\"CUMUL\":1073013,\"COVER_1_VAC\":\"0,074144983\",\"COVER\":\"0,030069127\",\"RECEIVED\":1186389,\"DISTRIBUTED\":1095103},{\"\":150,\"TYPE\":\"GENERAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":91317,\"TOTAL_VAC_2\":49154,\"TOTAL_VAC_UNK\":2,\"TOTAL\":140473,\"CUMUL_VAC_1\":854707,\"CUMUL_VAC_2\":358743,\"CUMUL_VAC_UNK\":36,\"CUMUL\":1213486,\"COVER_1_VAC\":\"0,083014234\",\"COVER\":\"0,034843257\",\"RECEIVED\":1468929,\"DISTRIBUTED\":1264093},{\"\":151,\"TYPE\":\"GENERAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":79788,\"TOTAL_VAC_2\":109358,\"TOTAL_VAC_UNK\":9,\"TOTAL\":189155,\"CUMUL_VAC_1\":946311,\"CUMUL_VAC_2\":475239,\"CUMUL_VAC_UNK\":45,\"CUMUL\":1421595,\"COVER_1_VAC\":\"0,09191136\",\"COVER\":\"0,046158042\",\"RECEIVED\":1713540,\"DISTRIBUTED\":1462079},{\"\":152,\"TYPE\":\"GENERAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":253400,\"TOTAL_VAC_2\":20950,\"TOTAL_VAC_UNK\":0,\"TOTAL\":274350,\"CUMUL_VAC_1\":1200051,\"CUMUL_VAC_2\":496518,\"CUMUL_VAC_UNK\":45,\"CUMUL\":1696614,\"COVER_1_VAC\":\"0,1165561\",\"COVER\":\"0,048224785\",\"RECEIVED\":1883850,\"DISTRIBUTED\":1753999},{\"\":153,\"TYPE\":\"GENERAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":136060,\"TOTAL_VAC_2\":83792,\"TOTAL_VAC_UNK\":10,\"TOTAL\":219862,\"CUMUL_VAC_1\":1336606,\"CUMUL_VAC_2\":580563,\"CUMUL_VAC_UNK\":56,\"CUMUL\":1917225,\"COVER_1_VAC\":\"0,129819135\",\"COVER\":\"0,056387736\",\"RECEIVED\":2344530,\"DISTRIBUTED\":1996561},{\"\":154,\"TYPE\":\"GENERAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":252913,\"TOTAL_VAC_2\":52130,\"TOTAL_VAC_UNK\":3,\"TOTAL\":305046,\"CUMUL_VAC_1\":1589906,\"CUMUL_VAC_2\":632802,\"CUMUL_VAC_UNK\":57,\"CUMUL\":2222765,\"COVER_1_VAC\":\"0,15442114\",\"COVER\":\"0,061461499\",\"RECEIVED\":2684460,\"DISTRIBUTED\":2360167},{\"\":155,\"TYPE\":\"GENERAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":420963,\"TOTAL_VAC_2\":53332,\"TOTAL_VAC_UNK\":2,\"TOTAL\":474297,\"CUMUL_VAC_1\":2015225,\"CUMUL_VAC_2\":689329,\"CUMUL_VAC_UNK\":81,\"CUMUL\":2704635,\"COVER_1_VAC\":\"0,195730654\",\"COVER\":\"0,066951738\",\"RECEIVED\":2983590,\"DISTRIBUTED\":2679813}]");

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ })

/******/ });