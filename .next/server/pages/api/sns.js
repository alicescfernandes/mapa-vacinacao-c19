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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchWithLocalCache; });
/* unused harmony export formatDateShort */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return makeAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateDims; });
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
      backgroundColor: 'rgba(255,255,255,0.6)',
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

module.exports = JSON.parse("[{\"\":1,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":69,\"TOTAL_VAC_2\":119,\"TOTAL_VAC_UNK\":0,\"TOTAL\":188,\"CUMUL_VAC_1\":692,\"CUMUL_VAC_2\":443,\"CUMUL_VAC_UNK\":1,\"CUMUL\":1136,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":2,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":146,\"TOTAL_VAC_2\":106,\"TOTAL_VAC_UNK\":1,\"TOTAL\":253,\"CUMUL_VAC_1\":838,\"CUMUL_VAC_2\":549,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1389,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":3,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":73,\"TOTAL_VAC_2\":19,\"TOTAL_VAC_UNK\":0,\"TOTAL\":92,\"CUMUL_VAC_1\":911,\"CUMUL_VAC_2\":568,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1481,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":4,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":41,\"TOTAL_VAC_UNK\":0,\"TOTAL\":96,\"CUMUL_VAC_1\":966,\"CUMUL_VAC_2\":609,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1577,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":5,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":277,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":290,\"CUMUL_VAC_1\":1243,\"CUMUL_VAC_2\":622,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1867,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":6,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":19,\"TOTAL_VAC_2\":27,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":1262,\"CUMUL_VAC_2\":649,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1913,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":7,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":312,\"TOTAL_VAC_2\":4,\"TOTAL_VAC_UNK\":0,\"TOTAL\":316,\"CUMUL_VAC_1\":1574,\"CUMUL_VAC_2\":653,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2229,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":8,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":317,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":328,\"CUMUL_VAC_1\":1891,\"CUMUL_VAC_2\":664,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2557,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":9,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":57,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":73,\"CUMUL_VAC_1\":1948,\"CUMUL_VAC_2\":680,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2630,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":10,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":248,\"TOTAL_VAC_2\":8,\"TOTAL_VAC_UNK\":0,\"TOTAL\":256,\"CUMUL_VAC_1\":2196,\"CUMUL_VAC_2\":688,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2886,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":11,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":85,\"TOTAL_VAC_2\":24,\"TOTAL_VAC_UNK\":0,\"TOTAL\":109,\"CUMUL_VAC_1\":2281,\"CUMUL_VAC_2\":712,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2995,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":12,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":177,\"TOTAL_VAC_2\":15,\"TOTAL_VAC_UNK\":0,\"TOTAL\":192,\"CUMUL_VAC_1\":2458,\"CUMUL_VAC_2\":727,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3187,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":13,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":110,\"TOTAL_VAC_2\":66,\"TOTAL_VAC_UNK\":0,\"TOTAL\":176,\"CUMUL_VAC_1\":2568,\"CUMUL_VAC_2\":793,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3363,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":14,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":121,\"TOTAL_VAC_2\":271,\"TOTAL_VAC_UNK\":0,\"TOTAL\":392,\"CUMUL_VAC_1\":2689,\"CUMUL_VAC_2\":1064,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3755,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":15,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3336,\"TOTAL_VAC_2\":8776,\"TOTAL_VAC_UNK\":1,\"TOTAL\":12113,\"CUMUL_VAC_1\":27554,\"CUMUL_VAC_2\":17361,\"CUMUL_VAC_UNK\":1,\"CUMUL\":44916,\"COVER_1_VAC\":\"0,059041334\",\"COVER\":\"0,037200283\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":16,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4052,\"TOTAL_VAC_2\":2807,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6859,\"CUMUL_VAC_1\":31606,\"CUMUL_VAC_2\":20168,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51775,\"COVER_1_VAC\":\"0,067723757\",\"COVER\":\"0,043214982\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":17,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":12011,\"TOTAL_VAC_2\":1647,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13658,\"CUMUL_VAC_1\":43617,\"CUMUL_VAC_2\":21815,\"CUMUL_VAC_UNK\":1,\"CUMUL\":65433,\"COVER_1_VAC\":\"0,093460327\",\"COVER\":\"0,046744091\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":18,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10411,\"TOTAL_VAC_2\":2827,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13238,\"CUMUL_VAC_1\":54028,\"CUMUL_VAC_2\":24642,\"CUMUL_VAC_UNK\":1,\"CUMUL\":78671,\"COVER_1_VAC\":\"0,115768497\",\"COVER\":\"0,052801646\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":19,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5790,\"TOTAL_VAC_2\":1671,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7461,\"CUMUL_VAC_1\":59818,\"CUMUL_VAC_2\":26313,\"CUMUL_VAC_UNK\":1,\"CUMUL\":86132,\"COVER_1_VAC\":\"0,12817502\",\"COVER\":\"0,056382181\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":20,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3679,\"TOTAL_VAC_2\":7720,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11399,\"CUMUL_VAC_1\":63497,\"CUMUL_VAC_2\":34033,\"CUMUL_VAC_UNK\":1,\"CUMUL\":97531,\"COVER_1_VAC\":\"0,136058197\",\"COVER\":\"0,072924211\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":21,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11857,\"TOTAL_VAC_2\":2098,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13955,\"CUMUL_VAC_1\":75354,\"CUMUL_VAC_2\":36131,\"CUMUL_VAC_UNK\":1,\"CUMUL\":111486,\"COVER_1_VAC\":\"0,161464784\",\"COVER\":\"0,0774197\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":22,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":6116,\"TOTAL_VAC_2\":6262,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12378,\"CUMUL_VAC_1\":81470,\"CUMUL_VAC_2\":42393,\"CUMUL_VAC_UNK\":1,\"CUMUL\":123864,\"COVER_1_VAC\":\"0,174569843\",\"COVER\":\"0,090837601\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":23,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14021,\"TOTAL_VAC_2\":4286,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18307,\"CUMUL_VAC_1\":95491,\"CUMUL_VAC_2\":46679,\"CUMUL_VAC_UNK\":1,\"CUMUL\":142171,\"COVER_1_VAC\":\"0,204613341\",\"COVER\":\"0,100021428\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":24,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":21830,\"TOTAL_VAC_2\":2950,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24780,\"CUMUL_VAC_1\":117321,\"CUMUL_VAC_2\":49629,\"CUMUL_VAC_UNK\":1,\"CUMUL\":166951,\"COVER_1_VAC\":\"0,251389573\",\"COVER\":\"0,10634254\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":25,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11263,\"TOTAL_VAC_2\":5941,\"TOTAL_VAC_UNK\":2,\"TOTAL\":17206,\"CUMUL_VAC_1\":128584,\"CUMUL_VAC_2\":55570,\"CUMUL_VAC_UNK\":3,\"CUMUL\":184157,\"COVER_1_VAC\":\"0,275523367\",\"COVER\":\"0,119072618\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":26,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":20070,\"TOTAL_VAC_2\":2758,\"TOTAL_VAC_UNK\":0,\"TOTAL\":22828,\"CUMUL_VAC_1\":148654,\"CUMUL_VAC_2\":58328,\"CUMUL_VAC_UNK\":3,\"CUMUL\":206985,\"COVER_1_VAC\":\"0,318528359\",\"COVER\":\"0,124982322\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":27,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13591,\"TOTAL_VAC_2\":14214,\"TOTAL_VAC_UNK\":2,\"TOTAL\":27807,\"CUMUL_VAC_1\":162245,\"CUMUL_VAC_2\":72542,\"CUMUL_VAC_UNK\":5,\"CUMUL\":234792,\"COVER_1_VAC\":\"0,347650475\",\"COVER\":\"0,155439371\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":28,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17314,\"TOTAL_VAC_2\":15193,\"TOTAL_VAC_UNK\":0,\"TOTAL\":32507,\"CUMUL_VAC_1\":179559,\"CUMUL_VAC_2\":87735,\"CUMUL_VAC_UNK\":5,\"CUMUL\":267299,\"COVER_1_VAC\":\"0,384750048\",\"COVER\":\"0,187994172\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":29,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2380,\"TOTAL_VAC_2\":2896,\"TOTAL_VAC_UNK\":1,\"TOTAL\":5277,\"CUMUL_VAC_1\":12740,\"CUMUL_VAC_2\":6305,\"CUMUL_VAC_UNK\":1,\"CUMUL\":19046,\"COVER_1_VAC\":\"0,029059821\",\"COVER\":\"0,014381646\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":30,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3173,\"TOTAL_VAC_2\":2111,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5284,\"CUMUL_VAC_1\":15913,\"CUMUL_VAC_2\":8416,\"CUMUL_VAC_UNK\":1,\"CUMUL\":24330,\"COVER_1_VAC\":\"0,036297405\",\"COVER\":\"0,019196818\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":31,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8444,\"TOTAL_VAC_2\":1065,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9509,\"CUMUL_VAC_1\":24357,\"CUMUL_VAC_2\":9481,\"CUMUL_VAC_UNK\":1,\"CUMUL\":33839,\"COVER_1_VAC\":\"0,05555809\",\"COVER\":\"0,021626073\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":32,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4600,\"TOTAL_VAC_2\":549,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5149,\"CUMUL_VAC_1\":28957,\"CUMUL_VAC_2\":10030,\"CUMUL_VAC_UNK\":1,\"CUMUL\":38988,\"COVER_1_VAC\":\"0,066050647\",\"COVER\":\"0,022878337\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":33,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5054,\"TOTAL_VAC_2\":1535,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6589,\"CUMUL_VAC_1\":34011,\"CUMUL_VAC_2\":11565,\"CUMUL_VAC_UNK\":1,\"CUMUL\":45577,\"COVER_1_VAC\":\"0,077578774\",\"COVER\":\"0,026379657\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":34,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2642,\"TOTAL_VAC_2\":2993,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5635,\"CUMUL_VAC_1\":36653,\"CUMUL_VAC_2\":14558,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51212,\"COVER_1_VAC\":\"0,083605151\",\"COVER\":\"0,033206662\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":35,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9351,\"TOTAL_VAC_2\":4283,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13634,\"CUMUL_VAC_1\":46004,\"CUMUL_VAC_2\":18841,\"CUMUL_VAC_UNK\":1,\"CUMUL\":64846,\"COVER_1_VAC\":\"0,104934695\",\"COVER\":\"0,042976145\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":36,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4187,\"TOTAL_VAC_2\":2905,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7092,\"CUMUL_VAC_1\":50191,\"CUMUL_VAC_2\":21746,\"CUMUL_VAC_UNK\":1,\"CUMUL\":71938,\"COVER_1_VAC\":\"0,114485203\",\"COVER\":\"0,049602423\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":37,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8604,\"TOTAL_VAC_2\":1761,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10365,\"CUMUL_VAC_1\":58795,\"CUMUL_VAC_2\":23507,\"CUMUL_VAC_UNK\":1,\"CUMUL\":82303,\"COVER_1_VAC\":\"0,134110847\",\"COVER\":\"0,053619248\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":38,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13567,\"TOTAL_VAC_2\":2140,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15707,\"CUMUL_VAC_1\":72362,\"CUMUL_VAC_2\":25647,\"CUMUL_VAC_UNK\":1,\"CUMUL\":98010,\"COVER_1_VAC\":\"0,165057048\",\"COVER\":\"0,058500568\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":39,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7139,\"TOTAL_VAC_2\":5479,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12618,\"CUMUL_VAC_1\":79501,\"CUMUL_VAC_2\":31126,\"CUMUL_VAC_UNK\":1,\"CUMUL\":110628,\"COVER_1_VAC\":\"0,18134104\",\"COVER\":\"0,070998116\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":40,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16261,\"TOTAL_VAC_2\":3221,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19482,\"CUMUL_VAC_1\":95762,\"CUMUL_VAC_2\":34347,\"CUMUL_VAC_UNK\":1,\"CUMUL\":130110,\"COVER_1_VAC\":\"0,218432229\",\"COVER\":\"0,078345187\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":41,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16415,\"TOTAL_VAC_2\":8883,\"TOTAL_VAC_UNK\":1,\"TOTAL\":25299,\"CUMUL_VAC_1\":112177,\"CUMUL_VAC_2\":43230,\"CUMUL_VAC_UNK\":2,\"CUMUL\":155409,\"COVER_1_VAC\":\"0,255874691\",\"COVER\":\"0,098607227\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":42,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9633,\"TOTAL_VAC_2\":11256,\"TOTAL_VAC_UNK\":0,\"TOTAL\":20889,\"CUMUL_VAC_1\":121810,\"CUMUL_VAC_2\":54486,\"CUMUL_VAC_UNK\":2,\"CUMUL\":176298,\"COVER_1_VAC\":\"0,277847475\",\"COVER\":\"0,124282058\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":43,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7480,\"TOTAL_VAC_2\":27101,\"TOTAL_VAC_UNK\":4,\"TOTAL\":34585,\"CUMUL_VAC_1\":79888,\"CUMUL_VAC_2\":51021,\"CUMUL_VAC_UNK\":8,\"CUMUL\":130917,\"COVER_1_VAC\":\"0,049131883\",\"COVER\":\"0,031378402\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":44,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25444,\"TOTAL_VAC_2\":9947,\"TOTAL_VAC_UNK\":3,\"TOTAL\":35394,\"CUMUL_VAC_1\":105332,\"CUMUL_VAC_2\":60968,\"CUMUL_VAC_UNK\":11,\"CUMUL\":166311,\"COVER_1_VAC\":\"0,064780186\",\"COVER\":\"0,037495902\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":45,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":38231,\"TOTAL_VAC_2\":3074,\"TOTAL_VAC_UNK\":1,\"TOTAL\":41306,\"CUMUL_VAC_1\":143563,\"CUMUL_VAC_2\":64042,\"CUMUL_VAC_UNK\":12,\"CUMUL\":207617,\"COVER_1_VAC\":\"0,088292617\",\"COVER\":\"0,039386442\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":46,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":28317,\"TOTAL_VAC_2\":5883,\"TOTAL_VAC_UNK\":1,\"TOTAL\":34201,\"CUMUL_VAC_1\":171880,\"CUMUL_VAC_2\":69925,\"CUMUL_VAC_UNK\":13,\"CUMUL\":241818,\"COVER_1_VAC\":\"0,105707842\",\"COVER\":\"0,043004543\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":47,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17449,\"TOTAL_VAC_2\":13460,\"TOTAL_VAC_UNK\":0,\"TOTAL\":30909,\"CUMUL_VAC_1\":189329,\"CUMUL_VAC_2\":83385,\"CUMUL_VAC_UNK\":13,\"CUMUL\":272727,\"COVER_1_VAC\":\"0,116439144\",\"COVER\":\"0,051282572\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":48,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16463,\"TOTAL_VAC_2\":24082,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40547,\"CUMUL_VAC_1\":205792,\"CUMUL_VAC_2\":107467,\"CUMUL_VAC_UNK\":15,\"CUMUL\":313274,\"COVER_1_VAC\":\"0,126564046\",\"COVER\":\"0,066093232\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":49,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47541,\"TOTAL_VAC_2\":4244,\"TOTAL_VAC_UNK\":0,\"TOTAL\":51785,\"CUMUL_VAC_1\":253333,\"CUMUL_VAC_2\":111711,\"CUMUL_VAC_UNK\":15,\"CUMUL\":365059,\"COVER_1_VAC\":\"0,155802215\",\"COVER\":\"0,068703332\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":50,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":24167,\"TOTAL_VAC_2\":16619,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40788,\"CUMUL_VAC_1\":277500,\"CUMUL_VAC_2\":128330,\"CUMUL_VAC_UNK\":17,\"CUMUL\":405847,\"COVER_1_VAC\":\"0,170665151\",\"COVER\":\"0,078924176\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":51,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":49730,\"TOTAL_VAC_2\":10090,\"TOTAL_VAC_UNK\":0,\"TOTAL\":59820,\"CUMUL_VAC_1\":327230,\"CUMUL_VAC_2\":138420,\"CUMUL_VAC_UNK\":17,\"CUMUL\":465667,\"COVER_1_VAC\":\"0,201249576\",\"COVER\":\"0,085129622\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":52,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":77448,\"TOTAL_VAC_2\":11894,\"TOTAL_VAC_UNK\":1,\"TOTAL\":89343,\"CUMUL_VAC_1\":404678,\"CUMUL_VAC_2\":150314,\"CUMUL_VAC_UNK\":18,\"CUMUL\":555010,\"COVER_1_VAC\":\"0,248880836\",\"COVER\":\"0,092444546\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":53,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":29817,\"TOTAL_VAC_2\":24067,\"TOTAL_VAC_UNK\":6,\"TOTAL\":53890,\"CUMUL_VAC_1\":434495,\"CUMUL_VAC_2\":174381,\"CUMUL_VAC_UNK\":24,\"CUMUL\":608900,\"COVER_1_VAC\":\"0,267218576\",\"COVER\":\"0,107245981\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":54,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":56333,\"TOTAL_VAC_2\":17808,\"TOTAL_VAC_UNK\":0,\"TOTAL\":74141,\"CUMUL_VAC_1\":490828,\"CUMUL_VAC_2\":192189,\"CUMUL_VAC_UNK\":24,\"CUMUL\":683041,\"COVER_1_VAC\":\"0,301863909\",\"COVER\":\"0,118198071\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":55,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":59723,\"TOTAL_VAC_2\":48946,\"TOTAL_VAC_UNK\":1,\"TOTAL\":108670,\"CUMUL_VAC_1\":550551,\"CUMUL_VAC_2\":241135,\"CUMUL_VAC_UNK\":25,\"CUMUL\":791711,\"COVER_1_VAC\":\"0,338594125\",\"COVER\":\"0,148300329\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":56,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":50400,\"TOTAL_VAC_2\":55382,\"TOTAL_VAC_UNK\":1,\"TOTAL\":105783,\"CUMUL_VAC_1\":600951,\"CUMUL_VAC_2\":296517,\"CUMUL_VAC_UNK\":26,\"CUMUL\":897494,\"COVER_1_VAC\":\"0,369590607\",\"COVER\":\"0,182360788\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":57,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14278,\"TOTAL_VAC_2\":30286,\"TOTAL_VAC_UNK\":1,\"TOTAL\":44565,\"CUMUL_VAC_1\":114762,\"CUMUL_VAC_2\":60730,\"CUMUL_VAC_UNK\":2,\"CUMUL\":175494,\"COVER_1_VAC\":\"0,031080312\",\"COVER\":\"0,016447146\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":58,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32862,\"TOTAL_VAC_2\":18986,\"TOTAL_VAC_UNK\":2,\"TOTAL\":51850,\"CUMUL_VAC_1\":147624,\"CUMUL_VAC_2\":79716,\"CUMUL_VAC_UNK\":4,\"CUMUL\":227344,\"COVER_1_VAC\":\"0,039980132\",\"COVER\":\"0,021589011\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":59,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":48921,\"TOTAL_VAC_2\":6655,\"TOTAL_VAC_UNK\":0,\"TOTAL\":55576,\"CUMUL_VAC_1\":196545,\"CUMUL_VAC_2\":86371,\"CUMUL_VAC_UNK\":4,\"CUMUL\":282920,\"COVER_1_VAC\":\"0,053229117\",\"COVER\":\"0,023391346\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":60,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44674,\"TOTAL_VAC_2\":12711,\"TOTAL_VAC_UNK\":1,\"TOTAL\":57386,\"CUMUL_VAC_1\":241219,\"CUMUL_VAC_2\":99082,\"CUMUL_VAC_UNK\":5,\"CUMUL\":340306,\"COVER_1_VAC\":\"0,065327911\",\"COVER\":\"0,02683379\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":61,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32844,\"TOTAL_VAC_2\":16447,\"TOTAL_VAC_UNK\":2,\"TOTAL\":49293,\"CUMUL_VAC_1\":274063,\"CUMUL_VAC_2\":115529,\"CUMUL_VAC_UNK\":7,\"CUMUL\":389599,\"COVER_1_VAC\":\"0,074222857\",\"COVER\":\"0,031288034\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":62,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25469,\"TOTAL_VAC_2\":28851,\"TOTAL_VAC_UNK\":1,\"TOTAL\":54321,\"CUMUL_VAC_1\":299532,\"CUMUL_VAC_2\":144380,\"CUMUL_VAC_UNK\":8,\"CUMUL\":443920,\"COVER_1_VAC\":\"0,081120475\",\"COVER\":\"0,039101579\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":63,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88239,\"TOTAL_VAC_2\":7409,\"TOTAL_VAC_UNK\":1,\"TOTAL\":95649,\"CUMUL_VAC_1\":387771,\"CUMUL_VAC_2\":151789,\"CUMUL_VAC_UNK\":9,\"CUMUL\":539569,\"COVER_1_VAC\":\"0,10501772\",\"COVER\":\"0,041108115\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":64,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":45055,\"TOTAL_VAC_2\":23642,\"TOTAL_VAC_UNK\":4,\"TOTAL\":68701,\"CUMUL_VAC_1\":432826,\"CUMUL_VAC_2\":175431,\"CUMUL_VAC_UNK\":13,\"CUMUL\":608270,\"COVER_1_VAC\":\"0,117219698\",\"COVER\":\"0,047510937\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":65,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":86783,\"TOTAL_VAC_2\":19337,\"TOTAL_VAC_UNK\":1,\"TOTAL\":106121,\"CUMUL_VAC_1\":519609,\"CUMUL_VAC_2\":194768,\"CUMUL_VAC_UNK\":14,\"CUMUL\":714391,\"COVER_1_VAC\":\"0,140722624\",\"COVER\":\"0,052747862\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":66,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":162791,\"TOTAL_VAC_2\":14021,\"TOTAL_VAC_UNK\":0,\"TOTAL\":176812,\"CUMUL_VAC_1\":682400,\"CUMUL_VAC_2\":208789,\"CUMUL_VAC_UNK\":14,\"CUMUL\":891203,\"COVER_1_VAC\":\"0,184810345\",\"COVER\":\"0,056545087\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":67,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":78131,\"TOTAL_VAC_2\":53293,\"TOTAL_VAC_UNK\":3,\"TOTAL\":131427,\"CUMUL_VAC_1\":760531,\"CUMUL_VAC_2\":262082,\"CUMUL_VAC_UNK\":17,\"CUMUL\":1022630,\"COVER_1_VAC\":\"0,2059701\",\"COVER\":\"0,070978114\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":68,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":106303,\"TOTAL_VAC_2\":25239,\"TOTAL_VAC_UNK\":3,\"TOTAL\":131545,\"CUMUL_VAC_1\":866834,\"CUMUL_VAC_2\":287321,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1154175,\"COVER_1_VAC\":\"0,234759511\",\"COVER\":\"0,077813442\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":69,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":106456,\"TOTAL_VAC_2\":64523,\"TOTAL_VAC_UNK\":4,\"TOTAL\":170983,\"CUMUL_VAC_1\":973290,\"CUMUL_VAC_2\":351844,\"CUMUL_VAC_UNK\":24,\"CUMUL\":1325158,\"COVER_1_VAC\":\"0,263590358\",\"COVER\":\"0,095287824\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":70,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":89214,\"TOTAL_VAC_2\":111976,\"TOTAL_VAC_UNK\":7,\"TOTAL\":201197,\"CUMUL_VAC_1\":1062504,\"CUMUL_VAC_2\":463820,\"CUMUL_VAC_UNK\":31,\"CUMUL\":1526355,\"COVER_1_VAC\":\"0,287751656\",\"COVER\":\"0,12561362\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":71,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8666,\"TOTAL_VAC_2\":28597,\"TOTAL_VAC_UNK\":6,\"TOTAL\":37269,\"CUMUL_VAC_1\":105245,\"CUMUL_VAC_2\":68854,\"CUMUL_VAC_UNK\":7,\"CUMUL\":174106,\"COVER_1_VAC\":\"0,029436378\",\"COVER\":\"0,019258039\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":72,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32854,\"TOTAL_VAC_2\":15012,\"TOTAL_VAC_UNK\":3,\"TOTAL\":47869,\"CUMUL_VAC_1\":138099,\"CUMUL_VAC_2\":83866,\"CUMUL_VAC_UNK\":10,\"CUMUL\":221975,\"COVER_1_VAC\":\"0,038625439\",\"COVER\":\"0,023456803\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":73,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64468,\"TOTAL_VAC_2\":4218,\"TOTAL_VAC_UNK\":1,\"TOTAL\":68687,\"CUMUL_VAC_1\":202567,\"CUMUL_VAC_2\":88084,\"CUMUL_VAC_UNK\":11,\"CUMUL\":290662,\"COVER_1_VAC\":\"0,056656741\",\"COVER\":\"0,024636552\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":74,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47634,\"TOTAL_VAC_2\":6934,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54568,\"CUMUL_VAC_1\":250201,\"CUMUL_VAC_2\":95018,\"CUMUL_VAC_UNK\":11,\"CUMUL\":345230,\"COVER_1_VAC\":\"0,069979677\",\"COVER\":\"0,026575949\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":75,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25100,\"TOTAL_VAC_2\":13841,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38941,\"CUMUL_VAC_1\":275301,\"CUMUL_VAC_2\":108859,\"CUMUL_VAC_UNK\":11,\"CUMUL\":384171,\"COVER_1_VAC\":\"0,076999993\",\"COVER\":\"0,030447191\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":76,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":26507,\"TOTAL_VAC_2\":42149,\"TOTAL_VAC_UNK\":4,\"TOTAL\":68660,\"CUMUL_VAC_1\":301808,\"CUMUL_VAC_2\":151008,\"CUMUL_VAC_UNK\":15,\"CUMUL\":452831,\"COVER_1_VAC\":\"0,084413837\",\"COVER\":\"0,042236007\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":77,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88331,\"TOTAL_VAC_2\":2148,\"TOTAL_VAC_UNK\":0,\"TOTAL\":90479,\"CUMUL_VAC_1\":390139,\"CUMUL_VAC_2\":153156,\"CUMUL_VAC_UNK\":15,\"CUMUL\":543310,\"COVER_1_VAC\":\"0,109119473\",\"COVER\":\"0,042836789\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":78,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":53683,\"TOTAL_VAC_2\":32459,\"TOTAL_VAC_UNK\":1,\"TOTAL\":86143,\"CUMUL_VAC_1\":443822,\"CUMUL_VAC_2\":185615,\"CUMUL_VAC_UNK\":16,\"CUMUL\":629453,\"COVER_1_VAC\":\"0,124134278\",\"COVER\":\"0,051915371\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":79,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":81938,\"TOTAL_VAC_2\":13416,\"TOTAL_VAC_UNK\":2,\"TOTAL\":95356,\"CUMUL_VAC_1\":525760,\"CUMUL_VAC_2\":199031,\"CUMUL_VAC_UNK\":18,\"CUMUL\":724809,\"COVER_1_VAC\":\"0,147051831\",\"COVER\":\"0,055667744\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":80,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":135208,\"TOTAL_VAC_2\":18963,\"TOTAL_VAC_UNK\":1,\"TOTAL\":154172,\"CUMUL_VAC_1\":660968,\"CUMUL_VAC_2\":217994,\"CUMUL_VAC_UNK\":19,\"CUMUL\":878981,\"COVER_1_VAC\":\"0,184868675\",\"COVER\":\"0,060971578\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":81,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64275,\"TOTAL_VAC_2\":46176,\"TOTAL_VAC_UNK\":0,\"TOTAL\":110451,\"CUMUL_VAC_1\":725243,\"CUMUL_VAC_2\":264170,\"CUMUL_VAC_UNK\":19,\"CUMUL\":989432,\"COVER_1_VAC\":\"0,202845997\",\"COVER\":\"0,073886721\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":82,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":125100,\"TOTAL_VAC_2\":36450,\"TOTAL_VAC_UNK\":0,\"TOTAL\":161550,\"CUMUL_VAC_1\":850343,\"CUMUL_VAC_2\":300620,\"CUMUL_VAC_UNK\":19,\"CUMUL\":1150982,\"COVER_1_VAC\":\"0,237835696\",\"COVER\":\"0,084081561\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":83,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":153415,\"TOTAL_VAC_2\":72606,\"TOTAL_VAC_UNK\":2,\"TOTAL\":226023,\"CUMUL_VAC_1\":1003758,\"CUMUL_VAC_2\":373226,\"CUMUL_VAC_UNK\":21,\"CUMUL\":1377005,\"COVER_1_VAC\":\"0,280744925\",\"COVER\":\"0,104389012\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":84,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":98535,\"TOTAL_VAC_2\":100165,\"TOTAL_VAC_UNK\":4,\"TOTAL\":198704,\"CUMUL_VAC_1\":1102293,\"CUMUL_VAC_2\":473391,\"CUMUL_VAC_UNK\":25,\"CUMUL\":1575709,\"COVER_1_VAC\":\"0,308304557\",\"COVER\":\"0,132404545\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":85,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3158,\"TOTAL_VAC_2\":1086,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4244,\"CUMUL_VAC_1\":10994,\"CUMUL_VAC_2\":4775,\"CUMUL_VAC_UNK\":0,\"CUMUL\":15769,\"COVER_1_VAC\":\"0,043240224\",\"COVER\":\"0,018780432\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":86,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2494,\"TOTAL_VAC_2\":638,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3132,\"CUMUL_VAC_1\":13488,\"CUMUL_VAC_2\":5413,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18901,\"COVER_1_VAC\":\"0,053049313\",\"COVER\":\"0,021289734\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":87,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2256,\"TOTAL_VAC_2\":2155,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4411,\"CUMUL_VAC_1\":15744,\"CUMUL_VAC_2\":7568,\"CUMUL_VAC_UNK\":0,\"CUMUL\":23312,\"COVER_1_VAC\":\"0,06192233\",\"COVER\":\"0,02976551\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":88,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1431,\"TOTAL_VAC_2\":3116,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4547,\"CUMUL_VAC_1\":17175,\"CUMUL_VAC_2\":10684,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27859,\"COVER_1_VAC\":\"0,06755056\",\"COVER\":\"0,042020971\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":89,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4883,\"TOTAL_VAC_2\":2399,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7282,\"CUMUL_VAC_1\":22058,\"CUMUL_VAC_2\":13083,\"CUMUL_VAC_UNK\":0,\"CUMUL\":35141,\"COVER_1_VAC\":\"0,086755764\",\"COVER\":\"0,051456418\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":90,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3102,\"TOTAL_VAC_2\":2347,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5449,\"CUMUL_VAC_1\":25160,\"CUMUL_VAC_2\":15430,\"CUMUL_VAC_UNK\":0,\"CUMUL\":40590,\"COVER_1_VAC\":\"0,098956162\",\"COVER\":\"0,060687344\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":91,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5275,\"TOTAL_VAC_2\":181,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5456,\"CUMUL_VAC_1\":30435,\"CUMUL_VAC_2\":15611,\"CUMUL_VAC_UNK\":0,\"CUMUL\":46046,\"COVER_1_VAC\":\"0,119703132\",\"COVER\":\"0,061399231\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":92,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1205,\"TOTAL_VAC_2\":1260,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2465,\"CUMUL_VAC_1\":31640,\"CUMUL_VAC_2\":16871,\"CUMUL_VAC_UNK\":0,\"CUMUL\":48511,\"COVER_1_VAC\":\"0,124442487\",\"COVER\":\"0,066354905\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":93,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10213,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11512,\"CUMUL_VAC_1\":41853,\"CUMUL_VAC_2\":18170,\"CUMUL_VAC_UNK\":0,\"CUMUL\":60023,\"COVER_1_VAC\":\"0,16461098\",\"COVER\":\"0,071463969\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":94,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8428,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9727,\"CUMUL_VAC_1\":50281,\"CUMUL_VAC_2\":19469,\"CUMUL_VAC_UNK\":0,\"CUMUL\":69750,\"COVER_1_VAC\":\"0,197758934\",\"COVER\":\"0,076573033\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":95,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9805,\"TOTAL_VAC_2\":2128,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11933,\"CUMUL_VAC_1\":60086,\"CUMUL_VAC_2\":21597,\"CUMUL_VAC_UNK\":0,\"CUMUL\":81683,\"COVER_1_VAC\":\"0,236322732\",\"COVER\":\"0,084942616\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":96,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8817,\"TOTAL_VAC_2\":800,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9617,\"CUMUL_VAC_1\":68903,\"CUMUL_VAC_2\":22397,\"CUMUL_VAC_UNK\":0,\"CUMUL\":91300,\"COVER_1_VAC\":\"0,271000653\",\"COVER\":\"0,088089076\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":97,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7601,\"TOTAL_VAC_2\":5287,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12888,\"CUMUL_VAC_1\":76504,\"CUMUL_VAC_2\":27684,\"CUMUL_VAC_UNK\":0,\"CUMUL\":104188,\"COVER_1_VAC\":\"0,300895954\",\"COVER\":\"0,108883243\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":98,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11597,\"TOTAL_VAC_2\":6431,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18028,\"CUMUL_VAC_1\":88101,\"CUMUL_VAC_2\":34115,\"CUMUL_VAC_UNK\":0,\"CUMUL\":122216,\"COVER_1_VAC\":\"0,346507823\",\"COVER\":\"0,134176847\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":99,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1051,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1052,\"CUMUL_VAC_1\":8652,\"CUMUL_VAC_2\":5333,\"CUMUL_VAC_UNK\":0,\"CUMUL\":13985,\"COVER_1_VAC\":\"0,035634854\",\"COVER\":\"0,021964942\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":100,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2056,\"TOTAL_VAC_2\":322,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2378,\"CUMUL_VAC_1\":10708,\"CUMUL_VAC_2\":5655,\"CUMUL_VAC_UNK\":0,\"CUMUL\":16363,\"COVER_1_VAC\":\"0,044102868\",\"COVER\":\"0,023291158\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":101,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1464,\"TOTAL_VAC_2\":1611,\"TOTAL_VAC_UNK\":8,\"TOTAL\":3083,\"CUMUL_VAC_1\":12172,\"CUMUL_VAC_2\":7266,\"CUMUL_VAC_UNK\":8,\"CUMUL\":19446,\"COVER_1_VAC\":\"0,050132622\",\"COVER\":\"0,029926358\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":102,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":753,\"TOTAL_VAC_2\":1155,\"TOTAL_VAC_UNK\":14,\"TOTAL\":1922,\"CUMUL_VAC_1\":12925,\"CUMUL_VAC_2\":8421,\"CUMUL_VAC_UNK\":22,\"CUMUL\":21368,\"COVER_1_VAC\":\"0,053233991\",\"COVER\":\"0,034683438\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":103,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2558,\"TOTAL_VAC_2\":2051,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4609,\"CUMUL_VAC_1\":15483,\"CUMUL_VAC_2\":10472,\"CUMUL_VAC_UNK\":22,\"CUMUL\":25977,\"COVER_1_VAC\":\"0,063769584\",\"COVER\":\"0,043130859\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":104,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2517,\"TOTAL_VAC_2\":1437,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3954,\"CUMUL_VAC_1\":18000,\"CUMUL_VAC_2\":11909,\"CUMUL_VAC_UNK\":22,\"CUMUL\":29931,\"COVER_1_VAC\":\"0,074136312\",\"COVER\":\"0,049049408\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":105,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4083,\"TOTAL_VAC_2\":725,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4808,\"CUMUL_VAC_1\":22083,\"CUMUL_VAC_2\":12634,\"CUMUL_VAC_UNK\":22,\"CUMUL\":34739,\"COVER_1_VAC\":\"0,090952899\",\"COVER\":\"0,052035454\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":106,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1947,\"TOTAL_VAC_2\":758,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2705,\"CUMUL_VAC_1\":24030,\"CUMUL_VAC_2\":13392,\"CUMUL_VAC_UNK\":22,\"CUMUL\":37444,\"COVER_1_VAC\":\"0,098971976\",\"COVER\":\"0,055157416\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":107,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3834,\"TOTAL_VAC_2\":2323,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6157,\"CUMUL_VAC_1\":27864,\"CUMUL_VAC_2\":15715,\"CUMUL_VAC_UNK\":22,\"CUMUL\":43601,\"COVER_1_VAC\":\"0,114763011\",\"COVER\":\"0,064725119\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":108,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4212,\"TOTAL_VAC_2\":2402,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6614,\"CUMUL_VAC_1\":32076,\"CUMUL_VAC_2\":18117,\"CUMUL_VAC_UNK\":22,\"CUMUL\":50215,\"COVER_1_VAC\":\"0,132110908\",\"COVER\":\"0,074618198\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":109,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7816,\"TOTAL_VAC_2\":1051,\"TOTAL_VAC_UNK\":0,\"TOTAL\":8867,\"CUMUL_VAC_1\":39892,\"CUMUL_VAC_2\":19168,\"CUMUL_VAC_UNK\":22,\"CUMUL\":59082,\"COVER_1_VAC\":\"0,164302542\",\"COVER\":\"0,078946935\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":110,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9040,\"TOTAL_VAC_2\":2450,\"TOTAL_VAC_UNK\":1,\"TOTAL\":11491,\"CUMUL_VAC_1\":48932,\"CUMUL_VAC_2\":21618,\"CUMUL_VAC_UNK\":23,\"CUMUL\":70573,\"COVER_1_VAC\":\"0,201535445\",\"COVER\":\"0,089037711\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":111,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8915,\"TOTAL_VAC_2\":2648,\"TOTAL_VAC_UNK\":1,\"TOTAL\":11564,\"CUMUL_VAC_1\":57847,\"CUMUL_VAC_2\":24266,\"CUMUL_VAC_UNK\":24,\"CUMUL\":82137,\"COVER_1_VAC\":\"0,238253513\",\"COVER\":\"0,099943986\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":112,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8210,\"TOTAL_VAC_2\":2042,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10252,\"CUMUL_VAC_1\":66057,\"CUMUL_VAC_2\":26308,\"CUMUL_VAC_UNK\":24,\"CUMUL\":92389,\"COVER_1_VAC\":\"0,272067909\",\"COVER\":\"0,108354339\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":113,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":67,\"TOTAL_VAC_UNK\":0,\"TOTAL\":104,\"CUMUL_VAC_1\":172,\"CUMUL_VAC_2\":71,\"CUMUL_VAC_UNK\":0,\"CUMUL\":243,\"COVER_1_VAC\":\"0,000100172\",\"COVER\":\"4,13E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":114,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1454,\"TOTAL_VAC_2\":3038,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4492,\"CUMUL_VAC_1\":12176,\"CUMUL_VAC_2\":6784,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18960,\"COVER_1_VAC\":\"0,01569677\",\"COVER\":\"0,008745638\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":115,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":13698,\"TOTAL_VAC_2\":30691,\"TOTAL_VAC_UNK\":6,\"TOTAL\":44395,\"CUMUL_VAC_1\":144290,\"CUMUL_VAC_2\":91256,\"CUMUL_VAC_UNK\":11,\"CUMUL\":235557,\"COVER_1_VAC\":\"0,042935108\",\"COVER\":\"0,027154247\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":116,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":6784,\"TOTAL_VAC_2\":22163,\"TOTAL_VAC_UNK\":1,\"TOTAL\":28948,\"CUMUL_VAC_1\":84273,\"CUMUL_VAC_2\":52325,\"CUMUL_VAC_UNK\":3,\"CUMUL\":136601,\"COVER_1_VAC\":\"0,038977726\",\"COVER\":\"0,024201221\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":117,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":3626,\"TOTAL_VAC_2\":11430,\"TOTAL_VAC_UNK\":3,\"TOTAL\":15059,\"CUMUL_VAC_1\":35461,\"CUMUL_VAC_2\":18645,\"CUMUL_VAC_UNK\":3,\"CUMUL\":54109,\"COVER_1_VAC\":\"0,022100126\",\"COVER\":\"0,011620001\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":118,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":14819,\"TOTAL_VAC_2\":31473,\"TOTAL_VAC_UNK\":3,\"TOTAL\":46295,\"CUMUL_VAC_1\":84154,\"CUMUL_VAC_2\":45741,\"CUMUL_VAC_UNK\":3,\"CUMUL\":129898,\"COVER_1_VAC\":\"0,1245134\",\"COVER\":\"0,067677917\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":119,\"TYPE\":\"AGES\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":120,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":30,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":202,\"CUMUL_VAC_2\":87,\"CUMUL_VAC_UNK\":0,\"CUMUL\":289,\"COVER_1_VAC\":\"0,000117644\",\"COVER\":\"5,07E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":121,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2305,\"TOTAL_VAC_2\":1726,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4031,\"CUMUL_VAC_1\":14481,\"CUMUL_VAC_2\":8510,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22991,\"COVER_1_VAC\":\"0,018668276\",\"COVER\":\"0,010970722\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":122,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":22162,\"TOTAL_VAC_2\":18901,\"TOTAL_VAC_UNK\":4,\"TOTAL\":41067,\"CUMUL_VAC_1\":166452,\"CUMUL_VAC_2\":110157,\"CUMUL_VAC_UNK\":15,\"CUMUL\":276624,\"COVER_1_VAC\":\"0,04952966\",\"COVER\":\"0,032778451\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":123,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":24993,\"TOTAL_VAC_2\":12884,\"TOTAL_VAC_UNK\":1,\"TOTAL\":37878,\"CUMUL_VAC_1\":109266,\"CUMUL_VAC_2\":65209,\"CUMUL_VAC_UNK\":4,\"CUMUL\":174479,\"COVER_1_VAC\":\"0,050537422\",\"COVER\":\"0,030160295\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":124,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":4989,\"TOTAL_VAC_2\":7175,\"TOTAL_VAC_UNK\":2,\"TOTAL\":12166,\"CUMUL_VAC_1\":40450,\"CUMUL_VAC_2\":25820,\"CUMUL_VAC_UNK\":5,\"CUMUL\":66275,\"COVER_1_VAC\":\"0,025209387\",\"COVER\":\"0,016091629\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":125,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":48602,\"TOTAL_VAC_2\":9227,\"TOTAL_VAC_UNK\":2,\"TOTAL\":57831,\"CUMUL_VAC_1\":132756,\"CUMUL_VAC_2\":54968,\"CUMUL_VAC_UNK\":5,\"CUMUL\":187729,\"COVER_1_VAC\":\"0,196424423\",\"COVER\":\"0,081330092\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":126,\"TYPE\":\"AGES\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":127,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":21,\"TOTAL_VAC_2\":32,\"TOTAL_VAC_UNK\":0,\"TOTAL\":53,\"CUMUL_VAC_1\":223,\"CUMUL_VAC_2\":119,\"CUMUL_VAC_UNK\":0,\"CUMUL\":342,\"COVER_1_VAC\":\"0,000129874\",\"COVER\":\"6,93E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":128,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1257,\"TOTAL_VAC_2\":691,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1948,\"CUMUL_VAC_1\":15738,\"CUMUL_VAC_2\":9201,\"CUMUL_VAC_UNK\":0,\"CUMUL\":24939,\"COVER_1_VAC\":\"0,020288745\",\"COVER\":\"0,011861529\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":129,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":11223,\"TOTAL_VAC_2\":7223,\"TOTAL_VAC_UNK\":7,\"TOTAL\":18453,\"CUMUL_VAC_1\":177675,\"CUMUL_VAC_2\":117380,\"CUMUL_VAC_UNK\":22,\"CUMUL\":295077,\"COVER_1_VAC\":\"0,052869189\",\"COVER\":\"0,034927736\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":130,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":49339,\"TOTAL_VAC_2\":4916,\"TOTAL_VAC_UNK\":3,\"TOTAL\":54258,\"CUMUL_VAC_1\":158605,\"CUMUL_VAC_2\":70125,\"CUMUL_VAC_UNK\":7,\"CUMUL\":228737,\"COVER_1_VAC\":\"0,073357566\",\"COVER\":\"0,03243403\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":131,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":11519,\"TOTAL_VAC_2\":2401,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13920,\"CUMUL_VAC_1\":51969,\"CUMUL_VAC_2\":28221,\"CUMUL_VAC_UNK\":5,\"CUMUL\":80195,\"COVER_1_VAC\":\"0,032388298\",\"COVER\":\"0,017587988\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":132,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":102509,\"TOTAL_VAC_2\":5181,\"TOTAL_VAC_UNK\":0,\"TOTAL\":107690,\"CUMUL_VAC_1\":235265,\"CUMUL_VAC_2\":60149,\"CUMUL_VAC_UNK\":5,\"CUMUL\":295419,\"COVER_1_VAC\":\"0,348095694\",\"COVER\":\"0,088995847\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":133,\"TYPE\":\"AGES\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":134,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":8,\"TOTAL_VAC_2\":28,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":231,\"CUMUL_VAC_2\":147,\"CUMUL_VAC_UNK\":0,\"CUMUL\":378,\"COVER_1_VAC\":\"0,000134533\",\"COVER\":\"8,56E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":135,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":878,\"TOTAL_VAC_2\":1019,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1897,\"CUMUL_VAC_1\":16616,\"CUMUL_VAC_2\":10220,\"CUMUL_VAC_UNK\":0,\"CUMUL\":26836,\"COVER_1_VAC\":\"0,021420625\",\"COVER\":\"0,01317518\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":136,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":7164,\"TOTAL_VAC_2\":9827,\"TOTAL_VAC_UNK\":8,\"TOTAL\":16999,\"CUMUL_VAC_1\":184839,\"CUMUL_VAC_2\":127207,\"CUMUL_VAC_UNK\":30,\"CUMUL\":312076,\"COVER_1_VAC\":\"0,055000918\",\"COVER\":\"0,03785187\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":137,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":29715,\"TOTAL_VAC_2\":5898,\"TOTAL_VAC_UNK\":5,\"TOTAL\":35618,\"CUMUL_VAC_1\":188320,\"CUMUL_VAC_2\":76023,\"CUMUL_VAC_UNK\":12,\"CUMUL\":264355,\"COVER_1_VAC\":\"0,08710127\",\"COVER\":\"0,035161957\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":138,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":12980,\"TOTAL_VAC_2\":3708,\"TOTAL_VAC_UNK\":2,\"TOTAL\":16690,\"CUMUL_VAC_1\":64949,\"CUMUL_VAC_2\":31929,\"CUMUL_VAC_UNK\":7,\"CUMUL\":96885,\"COVER_1_VAC\":\"0,040477738\",\"COVER\":\"0,019898901\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":139,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":87130,\"TOTAL_VAC_2\":12736,\"TOTAL_VAC_UNK\":1,\"TOTAL\":99867,\"CUMUL_VAC_1\":322395,\"CUMUL_VAC_2\":72885,\"CUMUL_VAC_UNK\":6,\"CUMUL\":395286,\"COVER_1_VAC\":\"0,477012353\",\"COVER\":\"0,107839902\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":140,\"TYPE\":\"AGES\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":141,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":12,\"TOTAL_VAC_2\":24,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":243,\"CUMUL_VAC_2\":171,\"CUMUL_VAC_UNK\":0,\"CUMUL\":414,\"COVER_1_VAC\":\"0,000141522\",\"COVER\":\"9,96E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":142,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1289,\"TOTAL_VAC_2\":626,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1915,\"CUMUL_VAC_1\":17905,\"CUMUL_VAC_2\":10846,\"CUMUL_VAC_UNK\":0,\"CUMUL\":28751,\"COVER_1_VAC\":\"0,023082347\",\"COVER\":\"0,013982192\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":143,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":15611,\"TOTAL_VAC_2\":5917,\"TOTAL_VAC_UNK\":0,\"TOTAL\":21528,\"CUMUL_VAC_1\":200450,\"CUMUL_VAC_2\":133124,\"CUMUL_VAC_UNK\":30,\"CUMUL\":333604,\"COVER_1_VAC\":\"0,059646146\",\"COVER\":\"0,03961254\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":144,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":21584,\"TOTAL_VAC_2\":4162,\"TOTAL_VAC_UNK\":0,\"TOTAL\":25746,\"CUMUL_VAC_1\":209904,\"CUMUL_VAC_2\":80185,\"CUMUL_VAC_UNK\":12,\"CUMUL\":290101,\"COVER_1_VAC\":\"0,097084244\",\"COVER\":\"0,037086955\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":145,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":15398,\"TOTAL_VAC_2\":3456,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18854,\"CUMUL_VAC_1\":80347,\"CUMUL_VAC_2\":35385,\"CUMUL_VAC_UNK\":7,\"CUMUL\":115739,\"COVER_1_VAC\":\"0,050074132\",\"COVER\":\"0,022052761\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":146,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":40061,\"TOTAL_VAC_2\":37232,\"TOTAL_VAC_UNK\":2,\"TOTAL\":77295,\"CUMUL_VAC_1\":362456,\"CUMUL_VAC_2\":110117,\"CUMUL_VAC_UNK\":8,\"CUMUL\":472581,\"COVER_1_VAC\":\"0,5362862\",\"COVER\":\"0,16292799\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":147,\"TYPE\":\"AGES\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":148,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":23,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24,\"CUMUL_VAC_1\":244,\"CUMUL_VAC_2\":194,\"CUMUL_VAC_UNK\":0,\"CUMUL\":438,\"COVER_1_VAC\":\"0,000142104\",\"COVER\":\"0,000112984\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":149,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":226,\"TOTAL_VAC_2\":367,\"TOTAL_VAC_UNK\":1,\"TOTAL\":594,\"CUMUL_VAC_1\":18131,\"CUMUL_VAC_2\":11213,\"CUMUL_VAC_UNK\":1,\"CUMUL\":29345,\"COVER_1_VAC\":\"0,023373697\",\"COVER\":\"0,014455312\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":150,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4040,\"TOTAL_VAC_2\":2948,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6988,\"CUMUL_VAC_1\":204490,\"CUMUL_VAC_2\":136072,\"CUMUL_VAC_UNK\":30,\"CUMUL\":340592,\"COVER_1_VAC\":\"0,060848293\",\"COVER\":\"0,04048975\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":151,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":3976,\"TOTAL_VAC_2\":2233,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6209,\"CUMUL_VAC_1\":213880,\"CUMUL_VAC_2\":82418,\"CUMUL_VAC_UNK\":12,\"CUMUL\":296310,\"COVER_1_VAC\":\"0,098923213\",\"COVER\":\"0,038119756\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":152,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":17832,\"TOTAL_VAC_2\":6730,\"TOTAL_VAC_UNK\":2,\"TOTAL\":24564,\"CUMUL_VAC_1\":98179,\"CUMUL_VAC_2\":42115,\"CUMUL_VAC_UNK\":9,\"CUMUL\":140303,\"COVER_1_VAC\":\"0,061187453\",\"COVER\":\"0,026247054\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":153,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":54321,\"TOTAL_VAC_2\":97305,\"TOTAL_VAC_UNK\":4,\"TOTAL\":151630,\"CUMUL_VAC_1\":416777,\"CUMUL_VAC_2\":207422,\"CUMUL_VAC_UNK\":12,\"CUMUL\":624211,\"COVER_1_VAC\":\"0,616658997\",\"COVER\":\"0,306899475\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":154,\"TYPE\":\"AGES\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":2,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2,\"CUMUL_VAC_1\":3,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":3,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":155,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":24,\"TOTAL_VAC_2\":7,\"TOTAL_VAC_UNK\":0,\"TOTAL\":31,\"CUMUL_VAC_1\":268,\"CUMUL_VAC_2\":201,\"CUMUL_VAC_UNK\":0,\"CUMUL\":469,\"COVER_1_VAC\":\"0,000156082\",\"COVER\":\"0,000117061\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":156,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":3101,\"TOTAL_VAC_2\":112,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3213,\"CUMUL_VAC_1\":21232,\"CUMUL_VAC_2\":11325,\"CUMUL_VAC_UNK\":1,\"CUMUL\":32558,\"COVER_1_VAC\":\"0,027371371\",\"COVER\":\"0,014599698\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":157,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":41365,\"TOTAL_VAC_2\":1188,\"TOTAL_VAC_UNK\":0,\"TOTAL\":42553,\"CUMUL_VAC_1\":245855,\"CUMUL_VAC_2\":137260,\"CUMUL_VAC_UNK\":30,\"CUMUL\":383145,\"COVER_1_VAC\":\"0,073156913\",\"COVER\":\"0,040843253\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":158,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":33688,\"TOTAL_VAC_2\":864,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34552,\"CUMUL_VAC_1\":247568,\"CUMUL_VAC_2\":83282,\"CUMUL_VAC_UNK\":12,\"CUMUL\":330862,\"COVER_1_VAC\":\"0,114504498\",\"COVER\":\"0,038519371\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":159,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":52310,\"TOTAL_VAC_2\":2071,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54381,\"CUMUL_VAC_1\":150489,\"CUMUL_VAC_2\":44186,\"CUMUL_VAC_UNK\":9,\"CUMUL\":194684,\"COVER_1_VAC\":\"0,09378827\",\"COVER\":\"0,02753775\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":160,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":124501,\"TOTAL_VAC_2\":16850,\"TOTAL_VAC_UNK\":1,\"TOTAL\":141352,\"CUMUL_VAC_1\":541278,\"CUMUL_VAC_2\":224272,\"CUMUL_VAC_UNK\":13,\"CUMUL\":765563,\"COVER_1_VAC\":\"0,800869407\",\"COVER\":\"0,331830563\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":161,\"TYPE\":\"AGES\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":162,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":6,\"TOTAL_VAC_2\":12,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18,\"CUMUL_VAC_1\":274,\"CUMUL_VAC_2\":213,\"CUMUL_VAC_UNK\":0,\"CUMUL\":487,\"COVER_1_VAC\":\"0,000159576\",\"COVER\":\"0,00012405\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":163,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":615,\"TOTAL_VAC_2\":64,\"TOTAL_VAC_UNK\":1,\"TOTAL\":680,\"CUMUL_VAC_1\":21847,\"CUMUL_VAC_2\":11389,\"CUMUL_VAC_UNK\":2,\"CUMUL\":33238,\"COVER_1_VAC\":\"0,028164202\",\"COVER\":\"0,014682204\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":164,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4171,\"TOTAL_VAC_2\":729,\"TOTAL_VAC_UNK\":1,\"TOTAL\":4901,\"CUMUL_VAC_1\":250026,\"CUMUL_VAC_2\":137989,\"CUMUL_VAC_UNK\":31,\"CUMUL\":388046,\"COVER_1_VAC\":\"0,074398041\",\"COVER\":\"0,041060175\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":165,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":7412,\"TOTAL_VAC_2\":637,\"TOTAL_VAC_UNK\":1,\"TOTAL\":8050,\"CUMUL_VAC_1\":254980,\"CUMUL_VAC_2\":83919,\"CUMUL_VAC_UNK\":13,\"CUMUL\":338912,\"COVER_1_VAC\":\"0,117932677\",\"COVER\":\"0,038813994\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":166,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":87757,\"TOTAL_VAC_2\":7196,\"TOTAL_VAC_UNK\":1,\"TOTAL\":94954,\"CUMUL_VAC_1\":238246,\"CUMUL_VAC_2\":51382,\"CUMUL_VAC_UNK\":10,\"CUMUL\":289638,\"COVER_1_VAC\":\"0,148480488\",\"COVER\":\"0,032022466\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":167,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":36716,\"TOTAL_VAC_2\":75278,\"TOTAL_VAC_UNK\":3,\"TOTAL\":111997,\"CUMUL_VAC_1\":577994,\"CUMUL_VAC_2\":299550,\"CUMUL_VAC_UNK\":16,\"CUMUL\":877560,\"COVER_1_VAC\":\"0,855194026\",\"COVER\":\"0,443211124\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":168,\"TYPE\":\"AGES\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":169,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":14,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15,\"CUMUL_VAC_1\":288,\"CUMUL_VAC_2\":214,\"CUMUL_VAC_UNK\":0,\"CUMUL\":502,\"COVER_1_VAC\":\"0,00016773\",\"COVER\":\"0,000124632\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":170,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":706,\"TOTAL_VAC_2\":105,\"TOTAL_VAC_UNK\":0,\"TOTAL\":811,\"CUMUL_VAC_1\":22553,\"CUMUL_VAC_2\":11494,\"CUMUL_VAC_UNK\":2,\"CUMUL\":34049,\"COVER_1_VAC\":\"0,029074347\",\"COVER\":\"0,014817565\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":171,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8443,\"TOTAL_VAC_2\":836,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9279,\"CUMUL_VAC_1\":258469,\"CUMUL_VAC_2\":138825,\"CUMUL_VAC_UNK\":31,\"CUMUL\":397325,\"COVER_1_VAC\":\"0,07691035\",\"COVER\":\"0,041308936\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":172,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":14797,\"TOTAL_VAC_2\":730,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15527,\"CUMUL_VAC_1\":269777,\"CUMUL_VAC_2\":84649,\"CUMUL_VAC_UNK\":13,\"CUMUL\":354439,\"COVER_1_VAC\":\"0,124776546\",\"COVER\":\"0,039151632\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":173,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":200869,\"TOTAL_VAC_2\":5131,\"TOTAL_VAC_UNK\":0,\"TOTAL\":206000,\"CUMUL_VAC_1\":439115,\"CUMUL_VAC_2\":56513,\"CUMUL_VAC_UNK\":10,\"CUMUL\":495638,\"COVER_1_VAC\":\"0,273666754\",\"COVER\":\"0,035220225\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":174,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":30350,\"TOTAL_VAC_2\":45725,\"TOTAL_VAC_UNK\":3,\"TOTAL\":76078,\"CUMUL_VAC_1\":608344,\"CUMUL_VAC_2\":345275,\"CUMUL_VAC_UNK\":19,\"CUMUL\":953638,\"COVER_1_VAC\":\"0,900099576\",\"COVER\":\"0,510865368\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":175,\"TYPE\":\"AGES\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":4,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":4,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":176,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":2,\"TOTAL_VAC_UNK\":0,\"TOTAL\":39,\"CUMUL_VAC_1\":325,\"CUMUL_VAC_2\":216,\"CUMUL_VAC_UNK\":0,\"CUMUL\":541,\"COVER_1_VAC\":\"0,000189278\",\"COVER\":\"0,000125797\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":177,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":4234,\"TOTAL_VAC_2\":55,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4289,\"CUMUL_VAC_1\":26787,\"CUMUL_VAC_2\":11549,\"CUMUL_VAC_UNK\":2,\"CUMUL\":38338,\"COVER_1_VAC\":\"0,034532636\",\"COVER\":\"0,014888469\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":178,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":88668,\"TOTAL_VAC_2\":468,\"TOTAL_VAC_UNK\":0,\"TOTAL\":89136,\"CUMUL_VAC_1\":347137,\"CUMUL_VAC_2\":139293,\"CUMUL_VAC_UNK\":31,\"CUMUL\":486461,\"COVER_1_VAC\":\"0,103294509\",\"COVER\":\"0,041448195\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":179,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":87518,\"TOTAL_VAC_2\":382,\"TOTAL_VAC_UNK\":0,\"TOTAL\":87900,\"CUMUL_VAC_1\":357295,\"CUMUL_VAC_2\":85031,\"CUMUL_VAC_UNK\":13,\"CUMUL\":442339,\"COVER_1_VAC\":\"0,165255141\",\"COVER\":\"0,039328314\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":180,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":232792,\"TOTAL_VAC_2\":3390,\"TOTAL_VAC_UNK\":1,\"TOTAL\":236183,\"CUMUL_VAC_1\":671907,\"CUMUL_VAC_2\":59903,\"CUMUL_VAC_UNK\":11,\"CUMUL\":731821,\"COVER_1_VAC\":\"0,418748181\",\"COVER\":\"0,037332953\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":181,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":10483,\"TOTAL_VAC_2\":49380,\"TOTAL_VAC_UNK\":1,\"TOTAL\":59864,\"CUMUL_VAC_1\":618827,\"CUMUL_VAC_2\":394655,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1013502,\"COVER_1_VAC\":\"0,915610116\",\"COVER\":\"0,583927512\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":182,\"TYPE\":\"AGES\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":183,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":20,\"TOTAL_VAC_2\":3,\"TOTAL_VAC_UNK\":0,\"TOTAL\":23,\"CUMUL_VAC_1\":345,\"CUMUL_VAC_2\":219,\"CUMUL_VAC_UNK\":0,\"CUMUL\":564,\"COVER_1_VAC\":\"0,000200926\",\"COVER\":\"0,000127544\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":184,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1245,\"TOTAL_VAC_2\":54,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1299,\"CUMUL_VAC_1\":28032,\"CUMUL_VAC_2\":11603,\"CUMUL_VAC_UNK\":2,\"CUMUL\":39637,\"COVER_1_VAC\":\"0,036137636\",\"COVER\":\"0,014958083\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":185,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":10214,\"TOTAL_VAC_2\":495,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10709,\"CUMUL_VAC_1\":357351,\"CUMUL_VAC_2\":139788,\"CUMUL_VAC_UNK\":31,\"CUMUL\":497170,\"COVER_1_VAC\":\"0,106333799\",\"COVER\":\"0,041595488\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":186,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":13786,\"TOTAL_VAC_2\":1554,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15340,\"CUMUL_VAC_1\":371081,\"CUMUL_VAC_2\":86585,\"CUMUL_VAC_UNK\":13,\"CUMUL\":457679,\"COVER_1_VAC\":\"0,171631405\",\"COVER\":\"0,040047066\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":187,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":174692,\"TOTAL_VAC_2\":13059,\"TOTAL_VAC_UNK\":2,\"TOTAL\":187753,\"CUMUL_VAC_1\":846599,\"CUMUL_VAC_2\":72962,\"CUMUL_VAC_UNK\":13,\"CUMUL\":919574,\"COVER_1_VAC\":\"0,527620327\",\"COVER\":\"0,045471627\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":188,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":8373,\"TOTAL_VAC_2\":122994,\"TOTAL_VAC_UNK\":9,\"TOTAL\":131376,\"CUMUL_VAC_1\":627200,\"CUMUL_VAC_2\":517649,\"CUMUL_VAC_UNK\":29,\"CUMUL\":1144878,\"COVER_1_VAC\":\"0,927998722\",\"COVER\":\"0,76590818\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":189,\"TYPE\":\"AGES\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":5,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":5,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":190,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":42,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":55,\"CUMUL_VAC_1\":387,\"CUMUL_VAC_2\":232,\"CUMUL_VAC_UNK\":0,\"CUMUL\":619,\"COVER_1_VAC\":\"0,000225387\",\"COVER\":\"0,000135115\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":191,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2587,\"TOTAL_VAC_2\":75,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2662,\"CUMUL_VAC_1\":30619,\"CUMUL_VAC_2\":11678,\"CUMUL_VAC_UNK\":2,\"CUMUL\":42299,\"COVER_1_VAC\":\"0,039472683\",\"COVER\":\"0,01505477\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":192,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":9822,\"TOTAL_VAC_2\":589,\"TOTAL_VAC_UNK\":1,\"TOTAL\":10412,\"CUMUL_VAC_1\":367173,\"CUMUL_VAC_2\":140377,\"CUMUL_VAC_UNK\":32,\"CUMUL\":507582,\"COVER_1_VAC\":\"0,109256445\",\"COVER\":\"0,041770751\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":193,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":31990,\"TOTAL_VAC_2\":2591,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34581,\"CUMUL_VAC_1\":403071,\"CUMUL_VAC_2\":89176,\"CUMUL_VAC_UNK\":13,\"CUMUL\":492260,\"COVER_1_VAC\":\"0,186427336\",\"COVER\":\"0,041245448\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":194,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":291595,\"TOTAL_VAC_2\":45850,\"TOTAL_VAC_UNK\":0,\"TOTAL\":337445,\"CUMUL_VAC_1\":1138194,\"CUMUL_VAC_2\":118812,\"CUMUL_VAC_UNK\":13,\"CUMUL\":1257019,\"COVER_1_VAC\":\"0,709349162\",\"COVER\":\"0,074046421\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":195,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":6065,\"TOTAL_VAC_2\":39623,\"TOTAL_VAC_UNK\":3,\"TOTAL\":45691,\"CUMUL_VAC_1\":633265,\"CUMUL_VAC_2\":557272,\"CUMUL_VAC_UNK\":32,\"CUMUL\":1190569,\"COVER_1_VAC\":\"0,936972434\",\"COVER\":\"0,824533966\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":196,\"TYPE\":\"AGES\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":197,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":98,\"TOTAL_VAC_2\":8,\"TOTAL_VAC_UNK\":0,\"TOTAL\":106,\"CUMUL_VAC_1\":485,\"CUMUL_VAC_2\":240,\"CUMUL_VAC_UNK\":0,\"CUMUL\":725,\"COVER_1_VAC\":\"0,000282461\",\"COVER\":\"0,000139775\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":198,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1687,\"TOTAL_VAC_2\":703,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2390,\"CUMUL_VAC_1\":32306,\"CUMUL_VAC_2\":12381,\"CUMUL_VAC_UNK\":2,\"CUMUL\":44689,\"COVER_1_VAC\":\"0,04164749\",\"COVER\":\"0,015961047\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":199,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8866,\"TOTAL_VAC_2\":7309,\"TOTAL_VAC_UNK\":1,\"TOTAL\":16176,\"CUMUL_VAC_1\":376039,\"CUMUL_VAC_2\":147686,\"CUMUL_VAC_UNK\":33,\"CUMUL\":523758,\"COVER_1_VAC\":\"0,111894623\",\"COVER\":\"0,043945626\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":200,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":149673,\"TOTAL_VAC_2\":14170,\"TOTAL_VAC_UNK\":0,\"TOTAL\":163843,\"CUMUL_VAC_1\":552744,\"CUMUL_VAC_2\":103346,\"CUMUL_VAC_UNK\":13,\"CUMUL\":656103,\"COVER_1_VAC\":\"0,255653697\",\"COVER\":\"0,047799319\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":201,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":200854,\"TOTAL_VAC_2\":163284,\"TOTAL_VAC_UNK\":7,\"TOTAL\":364145,\"CUMUL_VAC_1\":1339048,\"CUMUL_VAC_2\":282096,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1621164,\"COVER_1_VAC\":\"0,834526079\",\"COVER\":\"0,175808835\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":202,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":5048,\"TOTAL_VAC_2\":31699,\"TOTAL_VAC_UNK\":3,\"TOTAL\":36750,\"CUMUL_VAC_1\":638313,\"CUMUL_VAC_2\":588971,\"CUMUL_VAC_UNK\":35,\"CUMUL\":1227319,\"COVER_1_VAC\":\"0,944441403\",\"COVER\":\"0,871435483\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":203,\"TYPE\":\"AGES\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":204,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":129,\"TOTAL_VAC_2\":31,\"TOTAL_VAC_UNK\":0,\"TOTAL\":160,\"CUMUL_VAC_1\":614,\"CUMUL_VAC_2\":271,\"CUMUL_VAC_UNK\":0,\"CUMUL\":885,\"COVER_1_VAC\":\"0,00035759\",\"COVER\":\"0,000157829\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":205,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2060,\"TOTAL_VAC_2\":5295,\"TOTAL_VAC_UNK\":1,\"TOTAL\":7356,\"CUMUL_VAC_1\":34366,\"CUMUL_VAC_2\":17676,\"CUMUL_VAC_UNK\":3,\"CUMUL\":52045,\"COVER_1_VAC\":\"0,044303153\",\"COVER\":\"0,022787131\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":206,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":23439,\"TOTAL_VAC_2\":99224,\"TOTAL_VAC_UNK\":3,\"TOTAL\":122666,\"CUMUL_VAC_1\":399478,\"CUMUL_VAC_2\":246910,\"CUMUL_VAC_UNK\":36,\"CUMUL\":646424,\"COVER_1_VAC\":\"0,11886916\",\"COVER\":\"0,07347084\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":207,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":164843,\"TOTAL_VAC_2\":108730,\"TOTAL_VAC_UNK\":5,\"TOTAL\":273578,\"CUMUL_VAC_1\":717587,\"CUMUL_VAC_2\":212076,\"CUMUL_VAC_UNK\":18,\"CUMUL\":929681,\"COVER_1_VAC\":\"0,331896446\",\"COVER\":\"0,098088832\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":208,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":90852,\"TOTAL_VAC_2\":79555,\"TOTAL_VAC_UNK\":3,\"TOTAL\":170410,\"CUMUL_VAC_1\":1429900,\"CUMUL_VAC_2\":361651,\"CUMUL_VAC_UNK\":23,\"CUMUL\":1791574,\"COVER_1_VAC\":\"0,891147174\",\"COVER\":\"0,225389374\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":209,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":3700,\"TOTAL_VAC_2\":9881,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13581,\"CUMUL_VAC_1\":642013,\"CUMUL_VAC_2\":598852,\"CUMUL_VAC_UNK\":35,\"CUMUL\":1240900,\"COVER_1_VAC\":\"0,949915885\",\"COVER\":\"0,88605531\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":210,\"TYPE\":\"AGES\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":6,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":6,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":211,\"TYPE\":\"GENERAL\",\"DATE\":\"08/02/2021\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":40418,\"TOTAL_VAC_2\":98862,\"TOTAL_VAC_UNK\":13,\"TOTAL\":139293,\"CUMUL_VAC_1\":360527,\"CUMUL_VAC_2\":214822,\"CUMUL_VAC_UNK\":20,\"CUMUL\":575369,\"COVER_1_VAC\":\"0,035016529\",\"COVER\":\"0,020864792\",\"RECEIVED\":651900,\"DISTRIBUTED\":571981},{\"\":212,\"TYPE\":\"GENERAL\",\"DATE\":\"15/02/2021\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":103081,\"TOTAL_VAC_2\":49929,\"TOTAL_VAC_UNK\":9,\"TOTAL\":153019,\"CUMUL_VAC_1\":463608,\"CUMUL_VAC_2\":264751,\"CUMUL_VAC_UNK\":29,\"CUMUL\":728388,\"COVER_1_VAC\":\"0,04502837\",\"COVER\":\"0,025714194\",\"RECEIVED\":830730,\"DISTRIBUTED\":718143},{\"\":213,\"TYPE\":\"GENERAL\",\"DATE\":\"22/02/2021\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":175868,\"TOTAL_VAC_2\":20444,\"TOTAL_VAC_UNK\":10,\"TOTAL\":196322,\"CUMUL_VAC_1\":639476,\"CUMUL_VAC_2\":285195,\"CUMUL_VAC_UNK\":39,\"CUMUL\":924710,\"COVER_1_VAC\":\"0,062109718\",\"COVER\":\"0,027699837\",\"RECEIVED\":1002999,\"DISTRIBUTED\":933847},{\"\":214,\"TYPE\":\"GENERAL\",\"DATE\":\"01/03/2021\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":137875,\"TOTAL_VAC_2\":33216,\"TOTAL_VAC_UNK\":16,\"TOTAL\":171107,\"CUMUL_VAC_1\":777351,\"CUMUL_VAC_2\":318411,\"CUMUL_VAC_UNK\":55,\"CUMUL\":1095817,\"COVER_1_VAC\":\"0,075500959\",\"COVER\":\"0,030925973\",\"RECEIVED\":1186389,\"DISTRIBUTED\":1095103},{\"\":215,\"TYPE\":\"GENERAL\",\"DATE\":\"08/03/2021\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":93955,\"TOTAL_VAC_2\":51417,\"TOTAL_VAC_UNK\":2,\"TOTAL\":145374,\"CUMUL_VAC_1\":871306,\"CUMUL_VAC_2\":369828,\"CUMUL_VAC_UNK\":57,\"CUMUL\":1241191,\"COVER_1_VAC\":\"0,084626428\",\"COVER\":\"0,035919898\",\"RECEIVED\":1468929,\"DISTRIBUTED\":1264093},{\"\":216,\"TYPE\":\"GENERAL\",\"DATE\":\"15/03/2021\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":80398,\"TOTAL_VAC_2\":109606,\"TOTAL_VAC_UNK\":7,\"TOTAL\":190011,\"CUMUL_VAC_1\":951704,\"CUMUL_VAC_2\":479434,\"CUMUL_VAC_UNK\":64,\"CUMUL\":1431202,\"COVER_1_VAC\":\"0,09243516\",\"COVER\":\"0,046565485\",\"RECEIVED\":1713540,\"DISTRIBUTED\":1462079},{\"\":217,\"TYPE\":\"GENERAL\",\"DATE\":\"22/03/2021\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":254989,\"TOTAL_VAC_2\":21092,\"TOTAL_VAC_UNK\":1,\"TOTAL\":276082,\"CUMUL_VAC_1\":1206693,\"CUMUL_VAC_2\":500526,\"CUMUL_VAC_UNK\":65,\"CUMUL\":1707284,\"COVER_1_VAC\":\"0,117201211\",\"COVER\":\"0,048614066\",\"RECEIVED\":1883850,\"DISTRIBUTED\":1753999},{\"\":218,\"TYPE\":\"GENERAL\",\"DATE\":\"29/03/2021\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":136677,\"TOTAL_VAC_2\":83916,\"TOTAL_VAC_UNK\":7,\"TOTAL\":220600,\"CUMUL_VAC_1\":1343370,\"CUMUL_VAC_2\":584442,\"CUMUL_VAC_UNK\":72,\"CUMUL\":1927884,\"COVER_1_VAC\":\"0,130476095\",\"COVER\":\"0,056764488\",\"RECEIVED\":2344530,\"DISTRIBUTED\":1996561},{\"\":219,\"TYPE\":\"GENERAL\",\"DATE\":\"05/04/2021\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":255180,\"TOTAL_VAC_2\":52528,\"TOTAL_VAC_UNK\":3,\"TOTAL\":307711,\"CUMUL_VAC_1\":1598550,\"CUMUL_VAC_2\":636970,\"CUMUL_VAC_UNK\":75,\"CUMUL\":2235595,\"COVER_1_VAC\":\"0,155260696\",\"COVER\":\"0,06186632\",\"RECEIVED\":2684460,\"DISTRIBUTED\":2360167},{\"\":220,\"TYPE\":\"GENERAL\",\"DATE\":\"12/04/2021\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":423732,\"TOTAL_VAC_2\":53677,\"TOTAL_VAC_UNK\":2,\"TOTAL\":477411,\"CUMUL_VAC_1\":2022282,\"CUMUL_VAC_2\":690647,\"CUMUL_VAC_UNK\":77,\"CUMUL\":2713006,\"COVER_1_VAC\":\"0,196416072\",\"COVER\":\"0,06707975\",\"RECEIVED\":2983590,\"DISTRIBUTED\":2679813},{\"\":221,\"TYPE\":\"GENERAL\",\"DATE\":\"19/04/2021\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":208331,\"TOTAL_VAC_2\":138159,\"TOTAL_VAC_UNK\":11,\"TOTAL\":346501,\"CUMUL_VAC_1\":2230613,\"CUMUL_VAC_2\":828806,\"CUMUL_VAC_UNK\":88,\"CUMUL\":3059507,\"COVER_1_VAC\":\"0,216650419\",\"COVER\":\"0,080498575\",\"RECEIVED\":3400260,\"DISTRIBUTED\":3039329},{\"\":222,\"TYPE\":\"GENERAL\",\"DATE\":\"26/04/2021\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":342101,\"TOTAL_VAC_2\":88741,\"TOTAL_VAC_UNK\":4,\"TOTAL\":430846,\"CUMUL_VAC_1\":2572714,\"CUMUL_VAC_2\":917547,\"CUMUL_VAC_UNK\":92,\"CUMUL\":3490353,\"COVER_1_VAC\":\"0,249877306\",\"COVER\":\"0,089117629\",\"RECEIVED\":4128420,\"DISTRIBUTED\":3581288},{\"\":223,\"TYPE\":\"GENERAL\",\"DATE\":\"03/05/2021\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":366226,\"TOTAL_VAC_2\":217173,\"TOTAL_VAC_UNK\":11,\"TOTAL\":583410,\"CUMUL_VAC_1\":2938940,\"CUMUL_VAC_2\":1134720,\"CUMUL_VAC_UNK\":103,\"CUMUL\":4073763,\"COVER_1_VAC\":\"0,285447356\",\"COVER\":\"0,110210764\",\"RECEIVED\":4655370,\"DISTRIBUTED\":4171038},{\"\":224,\"TYPE\":\"GENERAL\",\"DATE\":\"10/05/2021\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":285024,\"TOTAL_VAC_2\":302716,\"TOTAL_VAC_UNK\":12,\"TOTAL\":587752,\"CUMUL_VAC_1\":3223964,\"CUMUL_VAC_2\":1437436,\"CUMUL_VAC_UNK\":115,\"CUMUL\":4661515,\"COVER_1_VAC\":\"0,313130584\",\"COVER\":\"0,139612345\",\"RECEIVED\":5197920,\"DISTRIBUTED\":4686071}]");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return lineChartCommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return lineChartCommon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REGIOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ECDC_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MADEIRA_DICOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACORES_DICOS; });
/* unused harmony export ACORES_DICOS_CONCELHOS */
/* unused harmony export ARS_MAPPING */
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
const SNS_WEEKS = {
  '08/02/2021': 'De 27/12 a 14/02',
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
  '2021-02-08': 'De 27/12 a 14/02',
  '2021-02-15': '15/02 a 21/02',
  '2021-02-22': '22/02 a 28/02',
  '2021-03-01': '01/03 a 07/03',
  '2021-03-08': '08/03 a 14/03',
  '2021-03-15': '15/03 a 21/03',
  '2021-03-22': '22/03 a 28/03',
  '2021-03-29': '29/03 a 04/04',
  '2021-04-05': '05/04 a 11/04',
  '2021-04-12': '12/04 a 18/04',
  '2021-04-19': '19/04 a 25/04',
  '2021-04-19': '19/04 a 25/04',
  '2021-04-26': '26/04 a 02/05',
  '2021-03-05': '03/05 a 09/05',
  '2021-03-10': '10/05 a 16/05'
};

/***/ })

/******/ });