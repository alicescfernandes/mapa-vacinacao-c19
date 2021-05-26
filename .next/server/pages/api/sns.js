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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
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
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "h"])(req);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hexToRgb; });
/* unused harmony export dateWithoutTimezone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return trackPlausible; });
/* unused harmony export downloadPNG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return perHundred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchWithLocalCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return makeAnnotations; });
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

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":12435,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ }),

/***/ "rYNm":
/***/ (function(module) {

module.exports = JSON.parse("[{\"\":1,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":69,\"TOTAL_VAC_2\":119,\"TOTAL_VAC_UNK\":0,\"TOTAL\":188,\"CUMUL_VAC_1\":692,\"CUMUL_VAC_2\":443,\"CUMUL_VAC_UNK\":1,\"CUMUL\":1136,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":2,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":147,\"TOTAL_VAC_2\":106,\"TOTAL_VAC_UNK\":1,\"TOTAL\":254,\"CUMUL_VAC_1\":839,\"CUMUL_VAC_2\":549,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1390,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":3,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":73,\"TOTAL_VAC_2\":19,\"TOTAL_VAC_UNK\":0,\"TOTAL\":92,\"CUMUL_VAC_1\":912,\"CUMUL_VAC_2\":568,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1482,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":4,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":41,\"TOTAL_VAC_UNK\":0,\"TOTAL\":96,\"CUMUL_VAC_1\":967,\"CUMUL_VAC_2\":609,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1578,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":5,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":277,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":290,\"CUMUL_VAC_1\":1244,\"CUMUL_VAC_2\":622,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1868,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":6,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":19,\"TOTAL_VAC_2\":27,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":1263,\"CUMUL_VAC_2\":649,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1914,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":7,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":312,\"TOTAL_VAC_2\":4,\"TOTAL_VAC_UNK\":0,\"TOTAL\":316,\"CUMUL_VAC_1\":1575,\"CUMUL_VAC_2\":653,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2230,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":8,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":317,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":328,\"CUMUL_VAC_1\":1892,\"CUMUL_VAC_2\":664,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2558,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":9,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":58,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":74,\"CUMUL_VAC_1\":1950,\"CUMUL_VAC_2\":680,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2632,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":10,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":248,\"TOTAL_VAC_2\":8,\"TOTAL_VAC_UNK\":0,\"TOTAL\":256,\"CUMUL_VAC_1\":2198,\"CUMUL_VAC_2\":688,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2888,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":11,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":89,\"TOTAL_VAC_2\":25,\"TOTAL_VAC_UNK\":0,\"TOTAL\":114,\"CUMUL_VAC_1\":2287,\"CUMUL_VAC_2\":713,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3002,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":12,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":181,\"TOTAL_VAC_2\":15,\"TOTAL_VAC_UNK\":0,\"TOTAL\":196,\"CUMUL_VAC_1\":2468,\"CUMUL_VAC_2\":728,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3198,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":13,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":110,\"TOTAL_VAC_2\":66,\"TOTAL_VAC_UNK\":0,\"TOTAL\":176,\"CUMUL_VAC_1\":2578,\"CUMUL_VAC_2\":794,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3374,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":14,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":123,\"TOTAL_VAC_2\":271,\"TOTAL_VAC_UNK\":0,\"TOTAL\":394,\"CUMUL_VAC_1\":2701,\"CUMUL_VAC_2\":1065,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3768,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":15,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":111,\"TOTAL_VAC_2\":192,\"TOTAL_VAC_UNK\":0,\"TOTAL\":303,\"CUMUL_VAC_1\":2812,\"CUMUL_VAC_2\":1257,\"CUMUL_VAC_UNK\":2,\"CUMUL\":4071,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":16,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3336,\"TOTAL_VAC_2\":8776,\"TOTAL_VAC_UNK\":1,\"TOTAL\":12113,\"CUMUL_VAC_1\":27555,\"CUMUL_VAC_2\":17361,\"CUMUL_VAC_UNK\":1,\"CUMUL\":44917,\"COVER_1_VAC\":\"0,059043476\",\"COVER\":\"0,037200283\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":17,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4054,\"TOTAL_VAC_2\":2807,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6861,\"CUMUL_VAC_1\":31609,\"CUMUL_VAC_2\":20168,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51778,\"COVER_1_VAC\":\"0,067730185\",\"COVER\":\"0,043214982\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":18,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":12034,\"TOTAL_VAC_2\":1647,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13681,\"CUMUL_VAC_1\":43643,\"CUMUL_VAC_2\":21815,\"CUMUL_VAC_UNK\":1,\"CUMUL\":65459,\"COVER_1_VAC\":\"0,093516038\",\"COVER\":\"0,046744091\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":19,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10413,\"TOTAL_VAC_2\":2828,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13241,\"CUMUL_VAC_1\":54056,\"CUMUL_VAC_2\":24643,\"CUMUL_VAC_UNK\":1,\"CUMUL\":78700,\"COVER_1_VAC\":\"0,115828494\",\"COVER\":\"0,052803788\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":20,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5790,\"TOTAL_VAC_2\":1671,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7461,\"CUMUL_VAC_1\":59846,\"CUMUL_VAC_2\":26314,\"CUMUL_VAC_UNK\":1,\"CUMUL\":86161,\"COVER_1_VAC\":\"0,128235017\",\"COVER\":\"0,056384324\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":21,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3679,\"TOTAL_VAC_2\":7721,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11400,\"CUMUL_VAC_1\":63525,\"CUMUL_VAC_2\":34035,\"CUMUL_VAC_UNK\":1,\"CUMUL\":97561,\"COVER_1_VAC\":\"0,136118194\",\"COVER\":\"0,072928496\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":22,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11857,\"TOTAL_VAC_2\":2098,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13955,\"CUMUL_VAC_1\":75382,\"CUMUL_VAC_2\":36133,\"CUMUL_VAC_UNK\":1,\"CUMUL\":111516,\"COVER_1_VAC\":\"0,161524781\",\"COVER\":\"0,077423986\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":23,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":6117,\"TOTAL_VAC_2\":6262,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12379,\"CUMUL_VAC_1\":81499,\"CUMUL_VAC_2\":42395,\"CUMUL_VAC_UNK\":1,\"CUMUL\":123895,\"COVER_1_VAC\":\"0,174631983\",\"COVER\":\"0,090841886\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":24,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14021,\"TOTAL_VAC_2\":4287,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18308,\"CUMUL_VAC_1\":95520,\"CUMUL_VAC_2\":46682,\"CUMUL_VAC_UNK\":1,\"CUMUL\":142203,\"COVER_1_VAC\":\"0,204675481\",\"COVER\":\"0,100027856\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":25,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":21829,\"TOTAL_VAC_2\":2950,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24779,\"CUMUL_VAC_1\":117349,\"CUMUL_VAC_2\":49632,\"CUMUL_VAC_UNK\":1,\"CUMUL\":166982,\"COVER_1_VAC\":\"0,25144957\",\"COVER\":\"0,106348968\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":26,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11298,\"TOTAL_VAC_2\":5941,\"TOTAL_VAC_UNK\":2,\"TOTAL\":17241,\"CUMUL_VAC_1\":128647,\"CUMUL_VAC_2\":55573,\"CUMUL_VAC_UNK\":3,\"CUMUL\":184223,\"COVER_1_VAC\":\"0,27565836\",\"COVER\":\"0,119079046\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":27,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":20076,\"TOTAL_VAC_2\":2759,\"TOTAL_VAC_UNK\":0,\"TOTAL\":22835,\"CUMUL_VAC_1\":148723,\"CUMUL_VAC_2\":58332,\"CUMUL_VAC_UNK\":3,\"CUMUL\":207058,\"COVER_1_VAC\":\"0,318676209\",\"COVER\":\"0,124990893\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":28,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13592,\"TOTAL_VAC_2\":14266,\"TOTAL_VAC_UNK\":1,\"TOTAL\":27859,\"CUMUL_VAC_1\":162315,\"CUMUL_VAC_2\":72598,\"CUMUL_VAC_UNK\":4,\"CUMUL\":234917,\"COVER_1_VAC\":\"0,347800467\",\"COVER\":\"0,155559365\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":29,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17318,\"TOTAL_VAC_2\":15202,\"TOTAL_VAC_UNK\":0,\"TOTAL\":32520,\"CUMUL_VAC_1\":179633,\"CUMUL_VAC_2\":87800,\"CUMUL_VAC_UNK\":4,\"CUMUL\":267437,\"COVER_1_VAC\":\"0,384908612\",\"COVER\":\"0,18813345\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":30,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13126,\"TOTAL_VAC_2\":12161,\"TOTAL_VAC_UNK\":1,\"TOTAL\":25288,\"CUMUL_VAC_1\":192759,\"CUMUL_VAC_2\":99961,\"CUMUL_VAC_UNK\":5,\"CUMUL\":292725,\"COVER_1_VAC\":\"0,413034348\",\"COVER\":\"0,214191433\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":31,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2381,\"TOTAL_VAC_2\":2896,\"TOTAL_VAC_UNK\":1,\"TOTAL\":5278,\"CUMUL_VAC_1\":12744,\"CUMUL_VAC_2\":6307,\"CUMUL_VAC_UNK\":1,\"CUMUL\":19052,\"COVER_1_VAC\":\"0,029068945\",\"COVER\":\"0,014386208\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":32,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3176,\"TOTAL_VAC_2\":2113,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5289,\"CUMUL_VAC_1\":15920,\"CUMUL_VAC_2\":8420,\"CUMUL_VAC_UNK\":1,\"CUMUL\":24341,\"COVER_1_VAC\":\"0,036313372\",\"COVER\":\"0,019205942\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":33,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8471,\"TOTAL_VAC_2\":1065,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9536,\"CUMUL_VAC_1\":24391,\"CUMUL_VAC_2\":9485,\"CUMUL_VAC_UNK\":1,\"CUMUL\":33877,\"COVER_1_VAC\":\"0,055635644\",\"COVER\":\"0,021635197\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":34,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4604,\"TOTAL_VAC_2\":549,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5153,\"CUMUL_VAC_1\":28995,\"CUMUL_VAC_2\":10034,\"CUMUL_VAC_UNK\":1,\"CUMUL\":39030,\"COVER_1_VAC\":\"0,066137325\",\"COVER\":\"0,02288746\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":35,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5056,\"TOTAL_VAC_2\":1535,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6591,\"CUMUL_VAC_1\":34051,\"CUMUL_VAC_2\":11569,\"CUMUL_VAC_UNK\":1,\"CUMUL\":45621,\"COVER_1_VAC\":\"0,077670014\",\"COVER\":\"0,026388781\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":36,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2647,\"TOTAL_VAC_2\":2993,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5640,\"CUMUL_VAC_1\":36698,\"CUMUL_VAC_2\":14562,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51261,\"COVER_1_VAC\":\"0,083707796\",\"COVER\":\"0,033215786\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":37,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9351,\"TOTAL_VAC_2\":4284,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13635,\"CUMUL_VAC_1\":46049,\"CUMUL_VAC_2\":18846,\"CUMUL_VAC_UNK\":1,\"CUMUL\":64896,\"COVER_1_VAC\":\"0,10503734\",\"COVER\":\"0,04298755\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":38,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4189,\"TOTAL_VAC_2\":2905,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7094,\"CUMUL_VAC_1\":50238,\"CUMUL_VAC_2\":21751,\"CUMUL_VAC_UNK\":1,\"CUMUL\":71990,\"COVER_1_VAC\":\"0,11459241\",\"COVER\":\"0,049613828\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":39,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8606,\"TOTAL_VAC_2\":1763,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10369,\"CUMUL_VAC_1\":58844,\"CUMUL_VAC_2\":23514,\"CUMUL_VAC_UNK\":1,\"CUMUL\":82359,\"COVER_1_VAC\":\"0,134222616\",\"COVER\":\"0,053635215\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":40,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13576,\"TOTAL_VAC_2\":2140,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15716,\"CUMUL_VAC_1\":72420,\"CUMUL_VAC_2\":25654,\"CUMUL_VAC_UNK\":1,\"CUMUL\":98075,\"COVER_1_VAC\":\"0,165189345\",\"COVER\":\"0,058516535\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":41,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7162,\"TOTAL_VAC_2\":5480,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12642,\"CUMUL_VAC_1\":79582,\"CUMUL_VAC_2\":31134,\"CUMUL_VAC_UNK\":1,\"CUMUL\":110717,\"COVER_1_VAC\":\"0,1815258\",\"COVER\":\"0,071016364\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":42,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16260,\"TOTAL_VAC_2\":3223,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19483,\"CUMUL_VAC_1\":95842,\"CUMUL_VAC_2\":34357,\"CUMUL_VAC_UNK\":1,\"CUMUL\":130200,\"COVER_1_VAC\":\"0,218614709\",\"COVER\":\"0,078367997\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":43,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16418,\"TOTAL_VAC_2\":8885,\"TOTAL_VAC_UNK\":1,\"TOTAL\":25304,\"CUMUL_VAC_1\":112260,\"CUMUL_VAC_2\":43242,\"CUMUL_VAC_UNK\":2,\"CUMUL\":155504,\"COVER_1_VAC\":\"0,256064014\",\"COVER\":\"0,098634599\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":44,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9634,\"TOTAL_VAC_2\":11258,\"TOTAL_VAC_UNK\":0,\"TOTAL\":20892,\"CUMUL_VAC_1\":121894,\"CUMUL_VAC_2\":54500,\"CUMUL_VAC_UNK\":2,\"CUMUL\":176396,\"COVER_1_VAC\":\"0,278039078\",\"COVER\":\"0,124313992\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":45,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11906,\"TOTAL_VAC_2\":10842,\"TOTAL_VAC_UNK\":2,\"TOTAL\":22750,\"CUMUL_VAC_1\":133800,\"CUMUL_VAC_2\":65342,\"CUMUL_VAC_UNK\":4,\"CUMUL\":199146,\"COVER_1_VAC\":\"0,305196553\",\"COVER\":\"0,149044493\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":46,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7479,\"TOTAL_VAC_2\":27102,\"TOTAL_VAC_UNK\":4,\"TOTAL\":34585,\"CUMUL_VAC_1\":79889,\"CUMUL_VAC_2\":51026,\"CUMUL_VAC_UNK\":8,\"CUMUL\":130923,\"COVER_1_VAC\":\"0,049132498\",\"COVER\":\"0,031381478\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":47,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25461,\"TOTAL_VAC_2\":9947,\"TOTAL_VAC_UNK\":3,\"TOTAL\":35411,\"CUMUL_VAC_1\":105350,\"CUMUL_VAC_2\":60973,\"CUMUL_VAC_UNK\":11,\"CUMUL\":166334,\"COVER_1_VAC\":\"0,064791257\",\"COVER\":\"0,037498978\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":48,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":38321,\"TOTAL_VAC_2\":3074,\"TOTAL_VAC_UNK\":1,\"TOTAL\":41396,\"CUMUL_VAC_1\":143671,\"CUMUL_VAC_2\":64047,\"CUMUL_VAC_UNK\":12,\"CUMUL\":207730,\"COVER_1_VAC\":\"0,088359038\",\"COVER\":\"0,039389517\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":49,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":28329,\"TOTAL_VAC_2\":5884,\"TOTAL_VAC_UNK\":1,\"TOTAL\":34214,\"CUMUL_VAC_1\":172000,\"CUMUL_VAC_2\":69931,\"CUMUL_VAC_UNK\":13,\"CUMUL\":241944,\"COVER_1_VAC\":\"0,105781643\",\"COVER\":\"0,043008233\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":50,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17458,\"TOTAL_VAC_2\":13460,\"TOTAL_VAC_UNK\":0,\"TOTAL\":30918,\"CUMUL_VAC_1\":189458,\"CUMUL_VAC_2\":83391,\"CUMUL_VAC_UNK\":13,\"CUMUL\":272862,\"COVER_1_VAC\":\"0,11651848\",\"COVER\":\"0,051286262\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":51,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16471,\"TOTAL_VAC_2\":24083,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40556,\"CUMUL_VAC_1\":205929,\"CUMUL_VAC_2\":107474,\"CUMUL_VAC_UNK\":15,\"CUMUL\":313418,\"COVER_1_VAC\":\"0,126648302\",\"COVER\":\"0,066097537\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":52,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47550,\"TOTAL_VAC_2\":4247,\"TOTAL_VAC_UNK\":0,\"TOTAL\":51797,\"CUMUL_VAC_1\":253479,\"CUMUL_VAC_2\":111721,\"CUMUL_VAC_UNK\":15,\"CUMUL\":365215,\"COVER_1_VAC\":\"0,155892007\",\"COVER\":\"0,068709482\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":53,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":24176,\"TOTAL_VAC_2\":16626,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40804,\"CUMUL_VAC_1\":277655,\"CUMUL_VAC_2\":128347,\"CUMUL_VAC_UNK\":17,\"CUMUL\":406019,\"COVER_1_VAC\":\"0,170760478\",\"COVER\":\"0,078934631\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":54,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":49735,\"TOTAL_VAC_2\":10096,\"TOTAL_VAC_UNK\":0,\"TOTAL\":59831,\"CUMUL_VAC_1\":327390,\"CUMUL_VAC_2\":138443,\"CUMUL_VAC_UNK\":17,\"CUMUL\":465850,\"COVER_1_VAC\":\"0,201347978\",\"COVER\":\"0,085143768\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":55,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":77452,\"TOTAL_VAC_2\":11897,\"TOTAL_VAC_UNK\":1,\"TOTAL\":89350,\"CUMUL_VAC_1\":404842,\"CUMUL_VAC_2\":150340,\"CUMUL_VAC_UNK\":18,\"CUMUL\":555200,\"COVER_1_VAC\":\"0,248981698\",\"COVER\":\"0,092460536\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":56,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":29889,\"TOTAL_VAC_2\":24075,\"TOTAL_VAC_UNK\":6,\"TOTAL\":53970,\"CUMUL_VAC_1\":434731,\"CUMUL_VAC_2\":174415,\"CUMUL_VAC_UNK\":24,\"CUMUL\":609170,\"COVER_1_VAC\":\"0,267363718\",\"COVER\":\"0,107266891\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":57,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":56356,\"TOTAL_VAC_2\":17810,\"TOTAL_VAC_UNK\":0,\"TOTAL\":74166,\"CUMUL_VAC_1\":491087,\"CUMUL_VAC_2\":192225,\"CUMUL_VAC_UNK\":24,\"CUMUL\":683336,\"COVER_1_VAC\":\"0,302023197\",\"COVER\":\"0,118220212\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":58,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":59736,\"TOTAL_VAC_2\":48968,\"TOTAL_VAC_UNK\":1,\"TOTAL\":108705,\"CUMUL_VAC_1\":550823,\"CUMUL_VAC_2\":241193,\"CUMUL_VAC_UNK\":25,\"CUMUL\":792041,\"COVER_1_VAC\":\"0,338761408\",\"COVER\":\"0,148335999\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":59,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":50420,\"TOTAL_VAC_2\":55476,\"TOTAL_VAC_UNK\":0,\"TOTAL\":105896,\"CUMUL_VAC_1\":601243,\"CUMUL_VAC_2\":296669,\"CUMUL_VAC_UNK\":25,\"CUMUL\":897937,\"COVER_1_VAC\":\"0,369770189\",\"COVER\":\"0,182454269\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":60,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44548,\"TOTAL_VAC_2\":41484,\"TOTAL_VAC_UNK\":5,\"TOTAL\":86037,\"CUMUL_VAC_1\":645791,\"CUMUL_VAC_2\":338153,\"CUMUL_VAC_UNK\":30,\"CUMUL\":983974,\"COVER_1_VAC\":\"0,397167635\",\"COVER\":\"0,207967326\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":61,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14284,\"TOTAL_VAC_2\":30294,\"TOTAL_VAC_UNK\":0,\"TOTAL\":44578,\"CUMUL_VAC_1\":114778,\"CUMUL_VAC_2\":60740,\"CUMUL_VAC_UNK\":1,\"CUMUL\":175519,\"COVER_1_VAC\":\"0,031084645\",\"COVER\":\"0,016449854\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":62,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32883,\"TOTAL_VAC_2\":18988,\"TOTAL_VAC_UNK\":2,\"TOTAL\":51873,\"CUMUL_VAC_1\":147661,\"CUMUL_VAC_2\":79728,\"CUMUL_VAC_UNK\":3,\"CUMUL\":227392,\"COVER_1_VAC\":\"0,039990153\",\"COVER\":\"0,021592261\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":63,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":49047,\"TOTAL_VAC_2\":6657,\"TOTAL_VAC_UNK\":0,\"TOTAL\":55704,\"CUMUL_VAC_1\":196708,\"CUMUL_VAC_2\":86385,\"CUMUL_VAC_UNK\":3,\"CUMUL\":283096,\"COVER_1_VAC\":\"0,053273261\",\"COVER\":\"0,023395137\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":64,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44703,\"TOTAL_VAC_2\":12714,\"TOTAL_VAC_UNK\":1,\"TOTAL\":57418,\"CUMUL_VAC_1\":241411,\"CUMUL_VAC_2\":99099,\"CUMUL_VAC_UNK\":4,\"CUMUL\":340514,\"COVER_1_VAC\":\"0,065379909\",\"COVER\":\"0,026838394\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":65,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32856,\"TOTAL_VAC_2\":16449,\"TOTAL_VAC_UNK\":2,\"TOTAL\":49307,\"CUMUL_VAC_1\":274267,\"CUMUL_VAC_2\":115548,\"CUMUL_VAC_UNK\":6,\"CUMUL\":389821,\"COVER_1_VAC\":\"0,074278105\",\"COVER\":\"0,03129318\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":66,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25479,\"TOTAL_VAC_2\":28854,\"TOTAL_VAC_UNK\":1,\"TOTAL\":54334,\"CUMUL_VAC_1\":299746,\"CUMUL_VAC_2\":144402,\"CUMUL_VAC_UNK\":7,\"CUMUL\":444155,\"COVER_1_VAC\":\"0,081178431\",\"COVER\":\"0,039107537\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":67,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88247,\"TOTAL_VAC_2\":7410,\"TOTAL_VAC_UNK\":2,\"TOTAL\":95659,\"CUMUL_VAC_1\":387993,\"CUMUL_VAC_2\":151812,\"CUMUL_VAC_UNK\":9,\"CUMUL\":539814,\"COVER_1_VAC\":\"0,105077843\",\"COVER\":\"0,041114344\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":68,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":45063,\"TOTAL_VAC_2\":23647,\"TOTAL_VAC_UNK\":4,\"TOTAL\":68714,\"CUMUL_VAC_1\":433056,\"CUMUL_VAC_2\":175459,\"CUMUL_VAC_UNK\":13,\"CUMUL\":608528,\"COVER_1_VAC\":\"0,117281988\",\"COVER\":\"0,04751852\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":69,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":86796,\"TOTAL_VAC_2\":19340,\"TOTAL_VAC_UNK\":1,\"TOTAL\":106137,\"CUMUL_VAC_1\":519852,\"CUMUL_VAC_2\":194799,\"CUMUL_VAC_UNK\":14,\"CUMUL\":714665,\"COVER_1_VAC\":\"0,140788434\",\"COVER\":\"0,052756258\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":70,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":162813,\"TOTAL_VAC_2\":14023,\"TOTAL_VAC_UNK\":0,\"TOTAL\":176836,\"CUMUL_VAC_1\":682665,\"CUMUL_VAC_2\":208822,\"CUMUL_VAC_UNK\":14,\"CUMUL\":891501,\"COVER_1_VAC\":\"0,184882113\",\"COVER\":\"0,056554024\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":71,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":78392,\"TOTAL_VAC_2\":53304,\"TOTAL_VAC_UNK\":3,\"TOTAL\":131699,\"CUMUL_VAC_1\":761057,\"CUMUL_VAC_2\":262126,\"CUMUL_VAC_UNK\":17,\"CUMUL\":1023200,\"COVER_1_VAC\":\"0,206112553\",\"COVER\":\"0,07099003\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":72,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":106370,\"TOTAL_VAC_2\":25243,\"TOTAL_VAC_UNK\":3,\"TOTAL\":131616,\"CUMUL_VAC_1\":867427,\"CUMUL_VAC_2\":287369,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1154816,\"COVER_1_VAC\":\"0,23492011\",\"COVER\":\"0,077826442\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":73,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":106494,\"TOTAL_VAC_2\":64540,\"TOTAL_VAC_UNK\":5,\"TOTAL\":171039,\"CUMUL_VAC_1\":973921,\"CUMUL_VAC_2\":351909,\"CUMUL_VAC_UNK\":25,\"CUMUL\":1325855,\"COVER_1_VAC\":\"0,263761248\",\"COVER\":\"0,095305427\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":74,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":89314,\"TOTAL_VAC_2\":112034,\"TOTAL_VAC_UNK\":7,\"TOTAL\":201355,\"CUMUL_VAC_1\":1063235,\"CUMUL_VAC_2\":463943,\"CUMUL_VAC_UNK\":32,\"CUMUL\":1527210,\"COVER_1_VAC\":\"0,287949629\",\"COVER\":\"0,125646931\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":75,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":108430,\"TOTAL_VAC_2\":70265,\"TOTAL_VAC_UNK\":4,\"TOTAL\":178699,\"CUMUL_VAC_1\":1171665,\"CUMUL_VAC_2\":534208,\"CUMUL_VAC_UNK\":36,\"CUMUL\":1705909,\"COVER_1_VAC\":\"0,317315083\",\"COVER\":\"0,144676384\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":76,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8670,\"TOTAL_VAC_2\":28600,\"TOTAL_VAC_UNK\":6,\"TOTAL\":37276,\"CUMUL_VAC_1\":105251,\"CUMUL_VAC_2\":68862,\"CUMUL_VAC_UNK\":7,\"CUMUL\":174120,\"COVER_1_VAC\":\"0,029438056\",\"COVER\":\"0,019260277\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":77,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32861,\"TOTAL_VAC_2\":15011,\"TOTAL_VAC_UNK\":3,\"TOTAL\":47875,\"CUMUL_VAC_1\":138112,\"CUMUL_VAC_2\":83873,\"CUMUL_VAC_UNK\":10,\"CUMUL\":221995,\"COVER_1_VAC\":\"0,038629075\",\"COVER\":\"0,023458761\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":78,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64568,\"TOTAL_VAC_2\":4219,\"TOTAL_VAC_UNK\":1,\"TOTAL\":68788,\"CUMUL_VAC_1\":202680,\"CUMUL_VAC_2\":88092,\"CUMUL_VAC_UNK\":11,\"CUMUL\":290783,\"COVER_1_VAC\":\"0,056688347\",\"COVER\":\"0,024638789\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":79,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47663,\"TOTAL_VAC_2\":6936,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54599,\"CUMUL_VAC_1\":250343,\"CUMUL_VAC_2\":95028,\"CUMUL_VAC_UNK\":11,\"CUMUL\":345382,\"COVER_1_VAC\":\"0,070019394\",\"COVER\":\"0,026578746\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":80,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25108,\"TOTAL_VAC_2\":13843,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38951,\"CUMUL_VAC_1\":275451,\"CUMUL_VAC_2\":108871,\"CUMUL_VAC_UNK\":11,\"CUMUL\":384333,\"COVER_1_VAC\":\"0,077041947\",\"COVER\":\"0,030450548\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":81,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":26512,\"TOTAL_VAC_2\":42151,\"TOTAL_VAC_UNK\":4,\"TOTAL\":68667,\"CUMUL_VAC_1\":301963,\"CUMUL_VAC_2\":151022,\"CUMUL_VAC_UNK\":15,\"CUMUL\":453000,\"COVER_1_VAC\":\"0,08445719\",\"COVER\":\"0,042239922\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":82,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88340,\"TOTAL_VAC_2\":2151,\"TOTAL_VAC_UNK\":0,\"TOTAL\":90491,\"CUMUL_VAC_1\":390303,\"CUMUL_VAC_2\":153173,\"CUMUL_VAC_UNK\":15,\"CUMUL\":543491,\"COVER_1_VAC\":\"0,109165343\",\"COVER\":\"0,042841544\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":83,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":53683,\"TOTAL_VAC_2\":32464,\"TOTAL_VAC_UNK\":1,\"TOTAL\":86148,\"CUMUL_VAC_1\":443986,\"CUMUL_VAC_2\":185637,\"CUMUL_VAC_UNK\":16,\"CUMUL\":629639,\"COVER_1_VAC\":\"0,124180147\",\"COVER\":\"0,051921525\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":84,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":81953,\"TOTAL_VAC_2\":13420,\"TOTAL_VAC_UNK\":2,\"TOTAL\":95375,\"CUMUL_VAC_1\":525939,\"CUMUL_VAC_2\":199057,\"CUMUL_VAC_UNK\":18,\"CUMUL\":725014,\"COVER_1_VAC\":\"0,147101896\",\"COVER\":\"0,055675016\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":85,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":135231,\"TOTAL_VAC_2\":18969,\"TOTAL_VAC_UNK\":1,\"TOTAL\":154201,\"CUMUL_VAC_1\":661170,\"CUMUL_VAC_2\":218026,\"CUMUL_VAC_UNK\":19,\"CUMUL\":879215,\"COVER_1_VAC\":\"0,184925174\",\"COVER\":\"0,060980528\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":86,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64466,\"TOTAL_VAC_2\":46201,\"TOTAL_VAC_UNK\":0,\"TOTAL\":110667,\"CUMUL_VAC_1\":725636,\"CUMUL_VAC_2\":264227,\"CUMUL_VAC_UNK\":19,\"CUMUL\":989882,\"COVER_1_VAC\":\"0,202955916\",\"COVER\":\"0,073902663\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":87,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":125299,\"TOTAL_VAC_2\":36459,\"TOTAL_VAC_UNK\":0,\"TOTAL\":161758,\"CUMUL_VAC_1\":850935,\"CUMUL_VAC_2\":300686,\"CUMUL_VAC_UNK\":19,\"CUMUL\":1151640,\"COVER_1_VAC\":\"0,238001274\",\"COVER\":\"0,084100021\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":88,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":153550,\"TOTAL_VAC_2\":72641,\"TOTAL_VAC_UNK\":2,\"TOTAL\":226193,\"CUMUL_VAC_1\":1004485,\"CUMUL_VAC_2\":373327,\"CUMUL_VAC_UNK\":21,\"CUMUL\":1377833,\"COVER_1_VAC\":\"0,280948263\",\"COVER\":\"0,104417261\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":89,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":98547,\"TOTAL_VAC_2\":100229,\"TOTAL_VAC_UNK\":4,\"TOTAL\":198780,\"CUMUL_VAC_1\":1103032,\"CUMUL_VAC_2\":473556,\"CUMUL_VAC_UNK\":25,\"CUMUL\":1576613,\"COVER_1_VAC\":\"0,308511251\",\"COVER\":\"0,132450694\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":90,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":109491,\"TOTAL_VAC_2\":70165,\"TOTAL_VAC_UNK\":6,\"TOTAL\":179662,\"CUMUL_VAC_1\":1212523,\"CUMUL_VAC_2\":543721,\"CUMUL_VAC_UNK\":31,\"CUMUL\":1756275,\"COVER_1_VAC\":\"0,339135209\",\"COVER\":\"0,152075412\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":91,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3159,\"TOTAL_VAC_2\":1086,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4245,\"CUMUL_VAC_1\":10995,\"CUMUL_VAC_2\":4775,\"CUMUL_VAC_UNK\":0,\"CUMUL\":15770,\"COVER_1_VAC\":\"0,043244157\",\"COVER\":\"0,018780432\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":92,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2494,\"TOTAL_VAC_2\":638,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3132,\"CUMUL_VAC_1\":13489,\"CUMUL_VAC_2\":5413,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18902,\"COVER_1_VAC\":\"0,053053246\",\"COVER\":\"0,021289734\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":93,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2256,\"TOTAL_VAC_2\":2155,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4411,\"CUMUL_VAC_1\":15745,\"CUMUL_VAC_2\":7568,\"CUMUL_VAC_UNK\":0,\"CUMUL\":23313,\"COVER_1_VAC\":\"0,061926263\",\"COVER\":\"0,02976551\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":94,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1431,\"TOTAL_VAC_2\":3116,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4547,\"CUMUL_VAC_1\":17176,\"CUMUL_VAC_2\":10684,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27860,\"COVER_1_VAC\":\"0,067554493\",\"COVER\":\"0,042020971\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":95,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4883,\"TOTAL_VAC_2\":2399,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7282,\"CUMUL_VAC_1\":22059,\"CUMUL_VAC_2\":13083,\"CUMUL_VAC_UNK\":0,\"CUMUL\":35142,\"COVER_1_VAC\":\"0,086759697\",\"COVER\":\"0,051456418\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":96,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3102,\"TOTAL_VAC_2\":2347,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5449,\"CUMUL_VAC_1\":25161,\"CUMUL_VAC_2\":15430,\"CUMUL_VAC_UNK\":0,\"CUMUL\":40591,\"COVER_1_VAC\":\"0,098960095\",\"COVER\":\"0,060687344\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":97,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5275,\"TOTAL_VAC_2\":181,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5456,\"CUMUL_VAC_1\":30436,\"CUMUL_VAC_2\":15611,\"CUMUL_VAC_UNK\":0,\"CUMUL\":46047,\"COVER_1_VAC\":\"0,119707065\",\"COVER\":\"0,061399231\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":98,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1205,\"TOTAL_VAC_2\":1260,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2465,\"CUMUL_VAC_1\":31641,\"CUMUL_VAC_2\":16871,\"CUMUL_VAC_UNK\":0,\"CUMUL\":48512,\"COVER_1_VAC\":\"0,12444642\",\"COVER\":\"0,066354905\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":99,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10213,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11512,\"CUMUL_VAC_1\":41854,\"CUMUL_VAC_2\":18170,\"CUMUL_VAC_UNK\":0,\"CUMUL\":60024,\"COVER_1_VAC\":\"0,164614913\",\"COVER\":\"0,071463969\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":100,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8428,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9727,\"CUMUL_VAC_1\":50282,\"CUMUL_VAC_2\":19469,\"CUMUL_VAC_UNK\":0,\"CUMUL\":69751,\"COVER_1_VAC\":\"0,197762867\",\"COVER\":\"0,076573033\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":101,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9811,\"TOTAL_VAC_2\":2128,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11939,\"CUMUL_VAC_1\":60093,\"CUMUL_VAC_2\":21597,\"CUMUL_VAC_UNK\":0,\"CUMUL\":81690,\"COVER_1_VAC\":\"0,236350264\",\"COVER\":\"0,084942616\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":102,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8818,\"TOTAL_VAC_2\":801,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9619,\"CUMUL_VAC_1\":68911,\"CUMUL_VAC_2\":22398,\"CUMUL_VAC_UNK\":0,\"CUMUL\":91309,\"COVER_1_VAC\":\"0,271032117\",\"COVER\":\"0,088093009\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":103,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7601,\"TOTAL_VAC_2\":5287,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12888,\"CUMUL_VAC_1\":76512,\"CUMUL_VAC_2\":27685,\"CUMUL_VAC_UNK\":0,\"CUMUL\":104197,\"COVER_1_VAC\":\"0,300927419\",\"COVER\":\"0,108887176\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":104,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11598,\"TOTAL_VAC_2\":6431,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18029,\"CUMUL_VAC_1\":88110,\"CUMUL_VAC_2\":34116,\"CUMUL_VAC_UNK\":0,\"CUMUL\":122226,\"COVER_1_VAC\":\"0,346543221\",\"COVER\":\"0,13418078\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":105,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2326,\"TOTAL_VAC_2\":7610,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9936,\"CUMUL_VAC_1\":90436,\"CUMUL_VAC_2\":41726,\"CUMUL_VAC_UNK\":0,\"CUMUL\":132162,\"COVER_1_VAC\":\"0,355691553\",\"COVER\":\"0,164111479\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":106,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1051,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1052,\"CUMUL_VAC_1\":8652,\"CUMUL_VAC_2\":5334,\"CUMUL_VAC_UNK\":0,\"CUMUL\":13986,\"COVER_1_VAC\":\"0,035634854\",\"COVER\":\"0,02196906\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":107,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2055,\"TOTAL_VAC_2\":322,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2377,\"CUMUL_VAC_1\":10707,\"CUMUL_VAC_2\":5656,\"CUMUL_VAC_UNK\":0,\"CUMUL\":16363,\"COVER_1_VAC\":\"0,04409875\",\"COVER\":\"0,023295277\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":108,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1464,\"TOTAL_VAC_2\":1611,\"TOTAL_VAC_UNK\":8,\"TOTAL\":3083,\"CUMUL_VAC_1\":12171,\"CUMUL_VAC_2\":7267,\"CUMUL_VAC_UNK\":8,\"CUMUL\":19446,\"COVER_1_VAC\":\"0,050128503\",\"COVER\":\"0,029930477\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":109,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":753,\"TOTAL_VAC_2\":1155,\"TOTAL_VAC_UNK\":14,\"TOTAL\":1922,\"CUMUL_VAC_1\":12924,\"CUMUL_VAC_2\":8422,\"CUMUL_VAC_UNK\":22,\"CUMUL\":21368,\"COVER_1_VAC\":\"0,053229872\",\"COVER\":\"0,034687557\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":110,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2597,\"TOTAL_VAC_2\":2051,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4648,\"CUMUL_VAC_1\":15521,\"CUMUL_VAC_2\":10473,\"CUMUL_VAC_UNK\":22,\"CUMUL\":26016,\"COVER_1_VAC\":\"0,063926094\",\"COVER\":\"0,043134978\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":111,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2520,\"TOTAL_VAC_2\":1438,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3958,\"CUMUL_VAC_1\":18041,\"CUMUL_VAC_2\":11911,\"CUMUL_VAC_UNK\":22,\"CUMUL\":29974,\"COVER_1_VAC\":\"0,074305178\",\"COVER\":\"0,049057645\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":112,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4103,\"TOTAL_VAC_2\":725,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4828,\"CUMUL_VAC_1\":22144,\"CUMUL_VAC_2\":12636,\"CUMUL_VAC_UNK\":22,\"CUMUL\":34802,\"COVER_1_VAC\":\"0,091204138\",\"COVER\":\"0,052043691\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":113,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1960,\"TOTAL_VAC_2\":758,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2718,\"CUMUL_VAC_1\":24104,\"CUMUL_VAC_2\":13394,\"CUMUL_VAC_UNK\":22,\"CUMUL\":37520,\"COVER_1_VAC\":\"0,099276759\",\"COVER\":\"0,055165653\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":114,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3836,\"TOTAL_VAC_2\":2324,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6160,\"CUMUL_VAC_1\":27940,\"CUMUL_VAC_2\":15718,\"CUMUL_VAC_UNK\":22,\"CUMUL\":43680,\"COVER_1_VAC\":\"0,115076031\",\"COVER\":\"0,064737475\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":115,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4215,\"TOTAL_VAC_2\":2404,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6619,\"CUMUL_VAC_1\":32155,\"CUMUL_VAC_2\":18122,\"CUMUL_VAC_UNK\":22,\"CUMUL\":50299,\"COVER_1_VAC\":\"0,132436284\",\"COVER\":\"0,074638791\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":116,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7819,\"TOTAL_VAC_2\":1054,\"TOTAL_VAC_UNK\":0,\"TOTAL\":8873,\"CUMUL_VAC_1\":39974,\"CUMUL_VAC_2\":19176,\"CUMUL_VAC_UNK\":22,\"CUMUL\":59172,\"COVER_1_VAC\":\"0,164640274\",\"COVER\":\"0,078979884\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":117,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9045,\"TOTAL_VAC_2\":2508,\"TOTAL_VAC_UNK\":1,\"TOTAL\":11554,\"CUMUL_VAC_1\":49019,\"CUMUL_VAC_2\":21684,\"CUMUL_VAC_UNK\":23,\"CUMUL\":70726,\"COVER_1_VAC\":\"0,201893771\",\"COVER\":\"0,089309544\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":118,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8974,\"TOTAL_VAC_2\":2712,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11686,\"CUMUL_VAC_1\":57993,\"CUMUL_VAC_2\":24396,\"CUMUL_VAC_UNK\":23,\"CUMUL\":82412,\"COVER_1_VAC\":\"0,238854841\",\"COVER\":\"0,100479415\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":119,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8219,\"TOTAL_VAC_2\":2227,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10446,\"CUMUL_VAC_1\":66212,\"CUMUL_VAC_2\":26623,\"CUMUL_VAC_UNK\":23,\"CUMUL\":92858,\"COVER_1_VAC\":\"0,272706305\",\"COVER\":\"0,109651724\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":120,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10690,\"TOTAL_VAC_2\":3564,\"TOTAL_VAC_UNK\":0,\"TOTAL\":14254,\"CUMUL_VAC_1\":76902,\"CUMUL_VAC_2\":30187,\"CUMUL_VAC_UNK\":23,\"CUMUL\":107112,\"COVER_1_VAC\":\"0,316735037\",\"COVER\":\"0,124330714\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":121,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":67,\"TOTAL_VAC_UNK\":0,\"TOTAL\":104,\"CUMUL_VAC_1\":172,\"CUMUL_VAC_2\":71,\"CUMUL_VAC_UNK\":0,\"CUMUL\":243,\"COVER_1_VAC\":\"0,000100172\",\"COVER\":\"4,13E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":122,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1453,\"TOTAL_VAC_2\":3040,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4493,\"CUMUL_VAC_1\":12175,\"CUMUL_VAC_2\":6787,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18962,\"COVER_1_VAC\":\"0,015695481\",\"COVER\":\"0,008749505\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":123,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":13704,\"TOTAL_VAC_2\":30696,\"TOTAL_VAC_UNK\":5,\"TOTAL\":44405,\"CUMUL_VAC_1\":144300,\"CUMUL_VAC_2\":91265,\"CUMUL_VAC_UNK\":10,\"CUMUL\":235575,\"COVER_1_VAC\":\"0,042938084\",\"COVER\":\"0,027156925\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":124,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":6789,\"TOTAL_VAC_2\":22165,\"TOTAL_VAC_UNK\":1,\"TOTAL\":28955,\"CUMUL_VAC_1\":84281,\"CUMUL_VAC_2\":52333,\"CUMUL_VAC_UNK\":3,\"CUMUL\":136617,\"COVER_1_VAC\":\"0,038981426\",\"COVER\":\"0,024204921\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":125,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":3627,\"TOTAL_VAC_2\":11432,\"TOTAL_VAC_UNK\":3,\"TOTAL\":15062,\"CUMUL_VAC_1\":35465,\"CUMUL_VAC_2\":18648,\"CUMUL_VAC_UNK\":3,\"CUMUL\":54116,\"COVER_1_VAC\":\"0,022102619\",\"COVER\":\"0,01162187\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":126,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":14819,\"TOTAL_VAC_2\":31474,\"TOTAL_VAC_UNK\":3,\"TOTAL\":46296,\"CUMUL_VAC_1\":84162,\"CUMUL_VAC_2\":45744,\"CUMUL_VAC_UNK\":3,\"CUMUL\":129909,\"COVER_1_VAC\":\"0,124525237\",\"COVER\":\"0,067682356\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":127,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":128,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":30,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":202,\"CUMUL_VAC_2\":87,\"CUMUL_VAC_UNK\":0,\"CUMUL\":289,\"COVER_1_VAC\":\"0,000117644\",\"COVER\":\"5,07E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":129,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2307,\"TOTAL_VAC_2\":1726,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4033,\"CUMUL_VAC_1\":14482,\"CUMUL_VAC_2\":8513,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22995,\"COVER_1_VAC\":\"0,018669565\",\"COVER\":\"0,010974589\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":130,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":22191,\"TOTAL_VAC_2\":18902,\"TOTAL_VAC_UNK\":4,\"TOTAL\":41097,\"CUMUL_VAC_1\":166491,\"CUMUL_VAC_2\":110167,\"CUMUL_VAC_UNK\":14,\"CUMUL\":276672,\"COVER_1_VAC\":\"0,049541265\",\"COVER\":\"0,032781427\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":131,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":25010,\"TOTAL_VAC_2\":12883,\"TOTAL_VAC_UNK\":1,\"TOTAL\":37894,\"CUMUL_VAC_1\":109291,\"CUMUL_VAC_2\":65216,\"CUMUL_VAC_UNK\":4,\"CUMUL\":174511,\"COVER_1_VAC\":\"0,050548985\",\"COVER\":\"0,030163532\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":132,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":4991,\"TOTAL_VAC_2\":7176,\"TOTAL_VAC_UNK\":2,\"TOTAL\":12169,\"CUMUL_VAC_1\":40456,\"CUMUL_VAC_2\":25824,\"CUMUL_VAC_UNK\":5,\"CUMUL\":66285,\"COVER_1_VAC\":\"0,025213127\",\"COVER\":\"0,016094122\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":133,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":48602,\"TOTAL_VAC_2\":9229,\"TOTAL_VAC_UNK\":2,\"TOTAL\":57833,\"CUMUL_VAC_1\":132764,\"CUMUL_VAC_2\":54973,\"CUMUL_VAC_UNK\":5,\"CUMUL\":187742,\"COVER_1_VAC\":\"0,19643626\",\"COVER\":\"0,08133749\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":134,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":135,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":21,\"TOTAL_VAC_2\":32,\"TOTAL_VAC_UNK\":0,\"TOTAL\":53,\"CUMUL_VAC_1\":223,\"CUMUL_VAC_2\":119,\"CUMUL_VAC_UNK\":0,\"CUMUL\":342,\"COVER_1_VAC\":\"0,000129874\",\"COVER\":\"6,93E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":136,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1258,\"TOTAL_VAC_2\":691,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1949,\"CUMUL_VAC_1\":15740,\"CUMUL_VAC_2\":9204,\"CUMUL_VAC_UNK\":0,\"CUMUL\":24944,\"COVER_1_VAC\":\"0,020291324\",\"COVER\":\"0,011865397\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":137,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":11280,\"TOTAL_VAC_2\":7223,\"TOTAL_VAC_UNK\":7,\"TOTAL\":18510,\"CUMUL_VAC_1\":177771,\"CUMUL_VAC_2\":117390,\"CUMUL_VAC_UNK\":21,\"CUMUL\":295182,\"COVER_1_VAC\":\"0,052897755\",\"COVER\":\"0,034930711\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":138,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":49615,\"TOTAL_VAC_2\":4916,\"TOTAL_VAC_UNK\":3,\"TOTAL\":54534,\"CUMUL_VAC_1\":158906,\"CUMUL_VAC_2\":70132,\"CUMUL_VAC_UNK\":7,\"CUMUL\":229045,\"COVER_1_VAC\":\"0,073496784\",\"COVER\":\"0,032437268\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":139,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":11545,\"TOTAL_VAC_2\":2401,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13946,\"CUMUL_VAC_1\":52001,\"CUMUL_VAC_2\":28225,\"CUMUL_VAC_UNK\":5,\"CUMUL\":80231,\"COVER_1_VAC\":\"0,032408241\",\"COVER\":\"0,017590481\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":140,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":102515,\"TOTAL_VAC_2\":5184,\"TOTAL_VAC_UNK\":0,\"TOTAL\":107699,\"CUMUL_VAC_1\":235279,\"CUMUL_VAC_2\":60157,\"CUMUL_VAC_UNK\":5,\"CUMUL\":295441,\"COVER_1_VAC\":\"0,348116408\",\"COVER\":\"0,089007684\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":141,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":142,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":8,\"TOTAL_VAC_2\":28,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":231,\"CUMUL_VAC_2\":147,\"CUMUL_VAC_UNK\":0,\"CUMUL\":378,\"COVER_1_VAC\":\"0,000134533\",\"COVER\":\"8,56E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":143,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":878,\"TOTAL_VAC_2\":1019,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1897,\"CUMUL_VAC_1\":16618,\"CUMUL_VAC_2\":10223,\"CUMUL_VAC_UNK\":0,\"CUMUL\":26841,\"COVER_1_VAC\":\"0,021423203\",\"COVER\":\"0,013179047\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":144,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":7166,\"TOTAL_VAC_2\":9832,\"TOTAL_VAC_UNK\":8,\"TOTAL\":17006,\"CUMUL_VAC_1\":184937,\"CUMUL_VAC_2\":127222,\"CUMUL_VAC_UNK\":29,\"CUMUL\":312188,\"COVER_1_VAC\":\"0,055030079\",\"COVER\":\"0,037856333\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":145,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":29773,\"TOTAL_VAC_2\":5900,\"TOTAL_VAC_UNK\":5,\"TOTAL\":35678,\"CUMUL_VAC_1\":188679,\"CUMUL_VAC_2\":76032,\"CUMUL_VAC_UNK\":12,\"CUMUL\":264723,\"COVER_1_VAC\":\"0,087267313\",\"COVER\":\"0,03516612\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":146,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":12994,\"TOTAL_VAC_2\":3708,\"TOTAL_VAC_UNK\":2,\"TOTAL\":16704,\"CUMUL_VAC_1\":64995,\"CUMUL_VAC_2\":31933,\"CUMUL_VAC_UNK\":7,\"CUMUL\":96935,\"COVER_1_VAC\":\"0,040506406\",\"COVER\":\"0,019901394\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":147,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":87132,\"TOTAL_VAC_2\":12736,\"TOTAL_VAC_UNK\":1,\"TOTAL\":99869,\"CUMUL_VAC_1\":322411,\"CUMUL_VAC_2\":72893,\"CUMUL_VAC_UNK\":6,\"CUMUL\":395310,\"COVER_1_VAC\":\"0,477036027\",\"COVER\":\"0,107851739\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":148,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":149,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":12,\"TOTAL_VAC_2\":24,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":243,\"CUMUL_VAC_2\":171,\"CUMUL_VAC_UNK\":0,\"CUMUL\":414,\"COVER_1_VAC\":\"0,000141522\",\"COVER\":\"9,96E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":150,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1294,\"TOTAL_VAC_2\":626,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1920,\"CUMUL_VAC_1\":17912,\"CUMUL_VAC_2\":10849,\"CUMUL_VAC_UNK\":0,\"CUMUL\":28761,\"COVER_1_VAC\":\"0,023091372\",\"COVER\":\"0,013986059\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":151,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":15643,\"TOTAL_VAC_2\":5917,\"TOTAL_VAC_UNK\":0,\"TOTAL\":21560,\"CUMUL_VAC_1\":200580,\"CUMUL_VAC_2\":133139,\"CUMUL_VAC_UNK\":29,\"CUMUL\":333748,\"COVER_1_VAC\":\"0,059684829\",\"COVER\":\"0,039617003\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":152,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":21606,\"TOTAL_VAC_2\":4163,\"TOTAL_VAC_UNK\":0,\"TOTAL\":25769,\"CUMUL_VAC_1\":210285,\"CUMUL_VAC_2\":80195,\"CUMUL_VAC_UNK\":12,\"CUMUL\":290492,\"COVER_1_VAC\":\"0,097260463\",\"COVER\":\"0,03709158\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":153,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":15408,\"TOTAL_VAC_2\":3456,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18864,\"CUMUL_VAC_1\":80403,\"CUMUL_VAC_2\":35389,\"CUMUL_VAC_UNK\":7,\"CUMUL\":115799,\"COVER_1_VAC\":\"0,050109033\",\"COVER\":\"0,022055254\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":154,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":40062,\"TOTAL_VAC_2\":37235,\"TOTAL_VAC_UNK\":2,\"TOTAL\":77299,\"CUMUL_VAC_1\":362473,\"CUMUL_VAC_2\":110128,\"CUMUL_VAC_UNK\":8,\"CUMUL\":472609,\"COVER_1_VAC\":\"0,536311353\",\"COVER\":\"0,162944265\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":155,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":156,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":23,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24,\"CUMUL_VAC_1\":244,\"CUMUL_VAC_2\":194,\"CUMUL_VAC_UNK\":0,\"CUMUL\":438,\"COVER_1_VAC\":\"0,000142104\",\"COVER\":\"0,000112984\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":157,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":226,\"TOTAL_VAC_2\":367,\"TOTAL_VAC_UNK\":1,\"TOTAL\":594,\"CUMUL_VAC_1\":18138,\"CUMUL_VAC_2\":11216,\"CUMUL_VAC_UNK\":1,\"CUMUL\":29355,\"COVER_1_VAC\":\"0,023382721\",\"COVER\":\"0,01445918\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":158,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4043,\"TOTAL_VAC_2\":2948,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6991,\"CUMUL_VAC_1\":204623,\"CUMUL_VAC_2\":136087,\"CUMUL_VAC_UNK\":29,\"CUMUL\":340739,\"COVER_1_VAC\":\"0,060887869\",\"COVER\":\"0,040494213\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":159,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":3986,\"TOTAL_VAC_2\":2236,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6222,\"CUMUL_VAC_1\":214271,\"CUMUL_VAC_2\":82431,\"CUMUL_VAC_UNK\":12,\"CUMUL\":296714,\"COVER_1_VAC\":\"0,099104058\",\"COVER\":\"0,038125769\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":160,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":17845,\"TOTAL_VAC_2\":6732,\"TOTAL_VAC_UNK\":2,\"TOTAL\":24579,\"CUMUL_VAC_1\":98248,\"CUMUL_VAC_2\":42121,\"CUMUL_VAC_UNK\":9,\"CUMUL\":140378,\"COVER_1_VAC\":\"0,061230455\",\"COVER\":\"0,026250794\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":161,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":54326,\"TOTAL_VAC_2\":97308,\"TOTAL_VAC_UNK\":4,\"TOTAL\":151638,\"CUMUL_VAC_1\":416799,\"CUMUL_VAC_2\":207436,\"CUMUL_VAC_UNK\":12,\"CUMUL\":624247,\"COVER_1_VAC\":\"0,616691548\",\"COVER\":\"0,306920189\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":162,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":2,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2,\"CUMUL_VAC_1\":3,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":3,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":163,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":24,\"TOTAL_VAC_2\":7,\"TOTAL_VAC_UNK\":0,\"TOTAL\":31,\"CUMUL_VAC_1\":268,\"CUMUL_VAC_2\":201,\"CUMUL_VAC_UNK\":0,\"CUMUL\":469,\"COVER_1_VAC\":\"0,000156082\",\"COVER\":\"0,000117061\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":164,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":3103,\"TOTAL_VAC_2\":112,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3215,\"CUMUL_VAC_1\":21241,\"CUMUL_VAC_2\":11328,\"CUMUL_VAC_UNK\":1,\"CUMUL\":32570,\"COVER_1_VAC\":\"0,027382974\",\"COVER\":\"0,014603565\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":165,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":41379,\"TOTAL_VAC_2\":1187,\"TOTAL_VAC_UNK\":0,\"TOTAL\":42566,\"CUMUL_VAC_1\":246002,\"CUMUL_VAC_2\":137274,\"CUMUL_VAC_UNK\":29,\"CUMUL\":383305,\"COVER_1_VAC\":\"0,073200655\",\"COVER\":\"0,040847419\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":166,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":33698,\"TOTAL_VAC_2\":865,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34563,\"CUMUL_VAC_1\":247969,\"CUMUL_VAC_2\":83296,\"CUMUL_VAC_UNK\":12,\"CUMUL\":331277,\"COVER_1_VAC\":\"0,114689968\",\"COVER\":\"0,038525846\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":167,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":52326,\"TOTAL_VAC_2\":2075,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54401,\"CUMUL_VAC_1\":150574,\"CUMUL_VAC_2\":44196,\"CUMUL_VAC_UNK\":9,\"CUMUL\":194779,\"COVER_1_VAC\":\"0,093841244\",\"COVER\":\"0,027543982\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":168,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":124505,\"TOTAL_VAC_2\":16854,\"TOTAL_VAC_UNK\":2,\"TOTAL\":141361,\"CUMUL_VAC_1\":541304,\"CUMUL_VAC_2\":224290,\"CUMUL_VAC_UNK\":14,\"CUMUL\":765608,\"COVER_1_VAC\":\"0,800907876\",\"COVER\":\"0,331857196\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":169,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":170,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":7,\"TOTAL_VAC_2\":12,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19,\"CUMUL_VAC_1\":275,\"CUMUL_VAC_2\":213,\"CUMUL_VAC_UNK\":0,\"CUMUL\":488,\"COVER_1_VAC\":\"0,000160158\",\"COVER\":\"0,00012405\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":171,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":617,\"TOTAL_VAC_2\":64,\"TOTAL_VAC_UNK\":1,\"TOTAL\":682,\"CUMUL_VAC_1\":21858,\"CUMUL_VAC_2\":11392,\"CUMUL_VAC_UNK\":2,\"CUMUL\":33252,\"COVER_1_VAC\":\"0,028178383\",\"COVER\":\"0,014686071\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":172,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4178,\"TOTAL_VAC_2\":730,\"TOTAL_VAC_UNK\":1,\"TOTAL\":4909,\"CUMUL_VAC_1\":250180,\"CUMUL_VAC_2\":138004,\"CUMUL_VAC_UNK\":30,\"CUMUL\":388214,\"COVER_1_VAC\":\"0,074443866\",\"COVER\":\"0,041064638\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":173,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":7427,\"TOTAL_VAC_2\":641,\"TOTAL_VAC_UNK\":1,\"TOTAL\":8069,\"CUMUL_VAC_1\":255396,\"CUMUL_VAC_2\":83937,\"CUMUL_VAC_UNK\":13,\"CUMUL\":339346,\"COVER_1_VAC\":\"0,118125084\",\"COVER\":\"0,03882232\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":174,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":87768,\"TOTAL_VAC_2\":7201,\"TOTAL_VAC_UNK\":1,\"TOTAL\":94970,\"CUMUL_VAC_1\":238342,\"CUMUL_VAC_2\":51397,\"CUMUL_VAC_UNK\":10,\"CUMUL\":289749,\"COVER_1_VAC\":\"0,148540317\",\"COVER\":\"0,032031814\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":175,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":36713,\"TOTAL_VAC_2\":75285,\"TOTAL_VAC_UNK\":3,\"TOTAL\":112001,\"CUMUL_VAC_1\":578017,\"CUMUL_VAC_2\":299575,\"CUMUL_VAC_UNK\":17,\"CUMUL\":877609,\"COVER_1_VAC\":\"0,855228057\",\"COVER\":\"0,443248114\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":176,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":177,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":14,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15,\"CUMUL_VAC_1\":289,\"CUMUL_VAC_2\":214,\"CUMUL_VAC_UNK\":0,\"CUMUL\":503,\"COVER_1_VAC\":\"0,000168312\",\"COVER\":\"0,000124632\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":178,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":707,\"TOTAL_VAC_2\":105,\"TOTAL_VAC_UNK\":0,\"TOTAL\":812,\"CUMUL_VAC_1\":22565,\"CUMUL_VAC_2\":11497,\"CUMUL_VAC_UNK\":2,\"CUMUL\":34064,\"COVER_1_VAC\":\"0,029089817\",\"COVER\":\"0,014821432\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":179,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8444,\"TOTAL_VAC_2\":841,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9285,\"CUMUL_VAC_1\":258624,\"CUMUL_VAC_2\":138845,\"CUMUL_VAC_UNK\":30,\"CUMUL\":397499,\"COVER_1_VAC\":\"0,076956472\",\"COVER\":\"0,041314887\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":180,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":14805,\"TOTAL_VAC_2\":733,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15538,\"CUMUL_VAC_1\":270201,\"CUMUL_VAC_2\":84670,\"CUMUL_VAC_UNK\":13,\"CUMUL\":354884,\"COVER_1_VAC\":\"0,124972654\",\"COVER\":\"0,039161345\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":181,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":200891,\"TOTAL_VAC_2\":5136,\"TOTAL_VAC_UNK\":0,\"TOTAL\":206027,\"CUMUL_VAC_1\":439233,\"CUMUL_VAC_2\":56533,\"CUMUL_VAC_UNK\":10,\"CUMUL\":495776,\"COVER_1_VAC\":\"0,273740294\",\"COVER\":\"0,03523269\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":182,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":30356,\"TOTAL_VAC_2\":45729,\"TOTAL_VAC_UNK\":3,\"TOTAL\":76088,\"CUMUL_VAC_1\":608373,\"CUMUL_VAC_2\":345304,\"CUMUL_VAC_UNK\":20,\"CUMUL\":953697,\"COVER_1_VAC\":\"0,900142484\",\"COVER\":\"0,510908276\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":183,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":4,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":4,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":184,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":2,\"TOTAL_VAC_UNK\":0,\"TOTAL\":39,\"CUMUL_VAC_1\":326,\"CUMUL_VAC_2\":216,\"CUMUL_VAC_UNK\":0,\"CUMUL\":542,\"COVER_1_VAC\":\"0,000189861\",\"COVER\":\"0,000125797\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":185,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":4236,\"TOTAL_VAC_2\":55,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4291,\"CUMUL_VAC_1\":26801,\"CUMUL_VAC_2\":11552,\"CUMUL_VAC_UNK\":2,\"CUMUL\":38355,\"COVER_1_VAC\":\"0,034550684\",\"COVER\":\"0,014892336\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":186,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":88680,\"TOTAL_VAC_2\":470,\"TOTAL_VAC_UNK\":0,\"TOTAL\":89150,\"CUMUL_VAC_1\":347304,\"CUMUL_VAC_2\":139315,\"CUMUL_VAC_UNK\":30,\"CUMUL\":486649,\"COVER_1_VAC\":\"0,103344201\",\"COVER\":\"0,041454741\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":187,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":87535,\"TOTAL_VAC_2\":384,\"TOTAL_VAC_UNK\":0,\"TOTAL\":87919,\"CUMUL_VAC_1\":357736,\"CUMUL_VAC_2\":85054,\"CUMUL_VAC_UNK\":13,\"CUMUL\":442803,\"COVER_1_VAC\":\"0,165459111\",\"COVER\":\"0,039338952\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":188,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":232820,\"TOTAL_VAC_2\":3394,\"TOTAL_VAC_UNK\":1,\"TOTAL\":236215,\"CUMUL_VAC_1\":672053,\"CUMUL_VAC_2\":59927,\"CUMUL_VAC_UNK\":11,\"CUMUL\":731991,\"COVER_1_VAC\":\"0,418839172\",\"COVER\":\"0,03734791\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":189,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":10484,\"TOTAL_VAC_2\":49385,\"TOTAL_VAC_UNK\":1,\"TOTAL\":59870,\"CUMUL_VAC_1\":618857,\"CUMUL_VAC_2\":394689,\"CUMUL_VAC_UNK\":21,\"CUMUL\":1013567,\"COVER_1_VAC\":\"0,915654504\",\"COVER\":\"0,583977818\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":190,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":191,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":20,\"TOTAL_VAC_2\":3,\"TOTAL_VAC_UNK\":0,\"TOTAL\":23,\"CUMUL_VAC_1\":346,\"CUMUL_VAC_2\":219,\"CUMUL_VAC_UNK\":0,\"CUMUL\":565,\"COVER_1_VAC\":\"0,000201508\",\"COVER\":\"0,000127544\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":192,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1255,\"TOTAL_VAC_2\":55,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1310,\"CUMUL_VAC_1\":28056,\"CUMUL_VAC_2\":11607,\"CUMUL_VAC_UNK\":2,\"CUMUL\":39665,\"COVER_1_VAC\":\"0,036168575\",\"COVER\":\"0,01496324\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":193,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":10275,\"TOTAL_VAC_2\":495,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10770,\"CUMUL_VAC_1\":357579,\"CUMUL_VAC_2\":139810,\"CUMUL_VAC_UNK\":30,\"CUMUL\":497419,\"COVER_1_VAC\":\"0,106401643\",\"COVER\":\"0,041602034\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":194,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":13830,\"TOTAL_VAC_2\":1562,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15392,\"CUMUL_VAC_1\":371566,\"CUMUL_VAC_2\":86616,\"CUMUL_VAC_UNK\":13,\"CUMUL\":458195,\"COVER_1_VAC\":\"0,171855726\",\"COVER\":\"0,040061404\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":195,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":175139,\"TOTAL_VAC_2\":13063,\"TOTAL_VAC_UNK\":2,\"TOTAL\":188204,\"CUMUL_VAC_1\":847192,\"CUMUL_VAC_2\":72990,\"CUMUL_VAC_UNK\":13,\"CUMUL\":920195,\"COVER_1_VAC\":\"0,527989899\",\"COVER\":\"0,045489078\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":196,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":8406,\"TOTAL_VAC_2\":123030,\"TOTAL_VAC_UNK\":9,\"TOTAL\":131445,\"CUMUL_VAC_1\":627263,\"CUMUL_VAC_2\":517719,\"CUMUL_VAC_UNK\":30,\"CUMUL\":1145012,\"COVER_1_VAC\":\"0,928091936\",\"COVER\":\"0,766011751\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":197,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":5,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":5,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":198,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":42,\"TOTAL_VAC_2\":14,\"TOTAL_VAC_UNK\":0,\"TOTAL\":56,\"CUMUL_VAC_1\":388,\"CUMUL_VAC_2\":233,\"CUMUL_VAC_UNK\":0,\"CUMUL\":621,\"COVER_1_VAC\":\"0,000225969\",\"COVER\":\"0,000135698\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":199,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2590,\"TOTAL_VAC_2\":77,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2667,\"CUMUL_VAC_1\":30646,\"CUMUL_VAC_2\":11684,\"CUMUL_VAC_UNK\":2,\"CUMUL\":42332,\"COVER_1_VAC\":\"0,039507491\",\"COVER\":\"0,015062505\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":200,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":9847,\"TOTAL_VAC_2\":589,\"TOTAL_VAC_UNK\":1,\"TOTAL\":10437,\"CUMUL_VAC_1\":367426,\"CUMUL_VAC_2\":140399,\"CUMUL_VAC_UNK\":31,\"CUMUL\":507856,\"COVER_1_VAC\":\"0,109331728\",\"COVER\":\"0,041777297\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":201,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":32130,\"TOTAL_VAC_2\":2605,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34735,\"CUMUL_VAC_1\":403696,\"CUMUL_VAC_2\":89221,\"CUMUL_VAC_UNK\":13,\"CUMUL\":492930,\"COVER_1_VAC\":\"0,186716409\",\"COVER\":\"0,041266262\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":202,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":291707,\"TOTAL_VAC_2\":45893,\"TOTAL_VAC_UNK\":0,\"TOTAL\":337600,\"CUMUL_VAC_1\":1138899,\"CUMUL_VAC_2\":118883,\"CUMUL_VAC_UNK\":13,\"CUMUL\":1257795,\"COVER_1_VAC\":\"0,709788534\",\"COVER\":\"0,07409067\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":203,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":6089,\"TOTAL_VAC_2\":39640,\"TOTAL_VAC_UNK\":3,\"TOTAL\":45732,\"CUMUL_VAC_1\":633352,\"CUMUL_VAC_2\":557359,\"CUMUL_VAC_UNK\":33,\"CUMUL\":1190744,\"COVER_1_VAC\":\"0,937101158\",\"COVER\":\"0,824662691\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":204,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":205,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":98,\"TOTAL_VAC_2\":8,\"TOTAL_VAC_UNK\":0,\"TOTAL\":106,\"CUMUL_VAC_1\":486,\"CUMUL_VAC_2\":241,\"CUMUL_VAC_UNK\":0,\"CUMUL\":727,\"COVER_1_VAC\":\"0,000283044\",\"COVER\":\"0,000140357\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":206,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1687,\"TOTAL_VAC_2\":704,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2391,\"CUMUL_VAC_1\":32333,\"CUMUL_VAC_2\":12388,\"CUMUL_VAC_UNK\":2,\"CUMUL\":44723,\"COVER_1_VAC\":\"0,041682298\",\"COVER\":\"0,015970071\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":207,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8903,\"TOTAL_VAC_2\":7359,\"TOTAL_VAC_UNK\":0,\"TOTAL\":16262,\"CUMUL_VAC_1\":376329,\"CUMUL_VAC_2\":147758,\"CUMUL_VAC_UNK\":31,\"CUMUL\":524118,\"COVER_1_VAC\":\"0,111980916\",\"COVER\":\"0,04396705\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":208,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":149715,\"TOTAL_VAC_2\":14208,\"TOTAL_VAC_UNK\":0,\"TOTAL\":163923,\"CUMUL_VAC_1\":553411,\"CUMUL_VAC_2\":103429,\"CUMUL_VAC_UNK\":13,\"CUMUL\":656853,\"COVER_1_VAC\":\"0,255962196\",\"COVER\":\"0,047837708\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":209,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":201017,\"TOTAL_VAC_2\":163380,\"TOTAL_VAC_UNK\":7,\"TOTAL\":364404,\"CUMUL_VAC_1\":1339916,\"CUMUL_VAC_2\":282263,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1622199,\"COVER_1_VAC\":\"0,835067037\",\"COVER\":\"0,175912913\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":210,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":5055,\"TOTAL_VAC_2\":31706,\"TOTAL_VAC_UNK\":3,\"TOTAL\":36764,\"CUMUL_VAC_1\":638407,\"CUMUL_VAC_2\":589065,\"CUMUL_VAC_UNK\":36,\"CUMUL\":1227508,\"COVER_1_VAC\":\"0,944580485\",\"COVER\":\"0,871574565\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":211,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":212,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":129,\"TOTAL_VAC_2\":31,\"TOTAL_VAC_UNK\":0,\"TOTAL\":160,\"CUMUL_VAC_1\":615,\"CUMUL_VAC_2\":272,\"CUMUL_VAC_UNK\":0,\"CUMUL\":887,\"COVER_1_VAC\":\"0,000358172\",\"COVER\":\"0,000158411\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":213,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2062,\"TOTAL_VAC_2\":5302,\"TOTAL_VAC_UNK\":1,\"TOTAL\":7365,\"CUMUL_VAC_1\":34395,\"CUMUL_VAC_2\":17690,\"CUMUL_VAC_UNK\":3,\"CUMUL\":52088,\"COVER_1_VAC\":\"0,044340538\",\"COVER\":\"0,022805179\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":214,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":23465,\"TOTAL_VAC_2\":99289,\"TOTAL_VAC_UNK\":3,\"TOTAL\":122757,\"CUMUL_VAC_1\":399794,\"CUMUL_VAC_2\":247047,\"CUMUL_VAC_UNK\":34,\"CUMUL\":646875,\"COVER_1_VAC\":\"0,11896319\",\"COVER\":\"0,073511606\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":215,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":164896,\"TOTAL_VAC_2\":108845,\"TOTAL_VAC_UNK\":4,\"TOTAL\":273745,\"CUMUL_VAC_1\":718307,\"CUMUL_VAC_2\":212274,\"CUMUL_VAC_UNK\":17,\"CUMUL\":930598,\"COVER_1_VAC\":\"0,332229459\",\"COVER\":\"0,09818041\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":216,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":90875,\"TOTAL_VAC_2\":79754,\"TOTAL_VAC_UNK\":3,\"TOTAL\":170632,\"CUMUL_VAC_1\":1430791,\"CUMUL_VAC_2\":362017,\"CUMUL_VAC_UNK\":23,\"CUMUL\":1792831,\"COVER_1_VAC\":\"0,891702466\",\"COVER\":\"0,225617474\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":217,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":3745,\"TOTAL_VAC_2\":9907,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13652,\"CUMUL_VAC_1\":642152,\"CUMUL_VAC_2\":598972,\"CUMUL_VAC_UNK\":36,\"CUMUL\":1241160,\"COVER_1_VAC\":\"0,950121548\",\"COVER\":\"0,886232861\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":218,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":6,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":6,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":219,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":270,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":286,\"CUMUL_VAC_1\":885,\"CUMUL_VAC_2\":288,\"CUMUL_VAC_UNK\":0,\"CUMUL\":1173,\"COVER_1_VAC\":\"0,000515419\",\"COVER\":\"0,00016773\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":220,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1852,\"TOTAL_VAC_2\":2374,\"TOTAL_VAC_UNK\":2,\"TOTAL\":4228,\"CUMUL_VAC_1\":36247,\"CUMUL_VAC_2\":20064,\"CUMUL_VAC_UNK\":5,\"CUMUL\":56316,\"COVER_1_VAC\":\"0,046728056\",\"COVER\":\"0,025865636\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":221,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":30186,\"TOTAL_VAC_2\":20971,\"TOTAL_VAC_UNK\":2,\"TOTAL\":51159,\"CUMUL_VAC_1\":429980,\"CUMUL_VAC_2\":268018,\"CUMUL_VAC_UNK\":36,\"CUMUL\":698034,\"COVER_1_VAC\":\"0,127945373\",\"COVER\":\"0,079751763\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":222,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":222823,\"TOTAL_VAC_2\":73506,\"TOTAL_VAC_UNK\":4,\"TOTAL\":296333,\"CUMUL_VAC_1\":941130,\"CUMUL_VAC_2\":285780,\"CUMUL_VAC_UNK\":21,\"CUMUL\":1226931,\"COVER_1_VAC\":\"0,435288965\",\"COVER\":\"0,132178212\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":223,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":40928,\"TOTAL_VAC_2\":111131,\"TOTAL_VAC_UNK\":9,\"TOTAL\":152068,\"CUMUL_VAC_1\":1471719,\"CUMUL_VAC_2\":473148,\"CUMUL_VAC_UNK\":32,\"CUMUL\":1944899,\"COVER_1_VAC\":\"0,917209754\",\"COVER\":\"0,294876916\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":224,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":4569,\"TOTAL_VAC_2\":8285,\"TOTAL_VAC_UNK\":1,\"TOTAL\":12855,\"CUMUL_VAC_1\":646721,\"CUMUL_VAC_2\":607257,\"CUMUL_VAC_UNK\":37,\"CUMUL\":1254015,\"COVER_1_VAC\":\"0,956881794\",\"COVER\":\"0,898491262\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":225,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":6,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":6,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":226,\"TYPE\":\"GENERAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":40429,\"TOTAL_VAC_2\":98874,\"TOTAL_VAC_UNK\":12,\"TOTAL\":139315,\"CUMUL_VAC_1\":360556,\"CUMUL_VAC_2\":214848,\"CUMUL_VAC_UNK\":19,\"CUMUL\":575423,\"COVER_1_VAC\":\"0,035019346\",\"COVER\":\"0,020867317\",\"RECEIVED\":651900,\"DISTRIBUTED\":571981},{\"\":227,\"TYPE\":\"GENERAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":103131,\"TOTAL_VAC_2\":49932,\"TOTAL_VAC_UNK\":9,\"TOTAL\":153072,\"CUMUL_VAC_1\":463687,\"CUMUL_VAC_2\":264780,\"CUMUL_VAC_UNK\":28,\"CUMUL\":728495,\"COVER_1_VAC\":\"0,045036043\",\"COVER\":\"0,025717011\",\"RECEIVED\":830730,\"DISTRIBUTED\":718143},{\"\":228,\"TYPE\":\"GENERAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":176234,\"TOTAL_VAC_2\":20447,\"TOTAL_VAC_UNK\":10,\"TOTAL\":196691,\"CUMUL_VAC_1\":639921,\"CUMUL_VAC_2\":285227,\"CUMUL_VAC_UNK\":38,\"CUMUL\":925186,\"COVER_1_VAC\":\"0,062152939\",\"COVER\":\"0,027702945\",\"RECEIVED\":1002999,\"DISTRIBUTED\":933847},{\"\":229,\"TYPE\":\"GENERAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":137951,\"TOTAL_VAC_2\":33223,\"TOTAL_VAC_UNK\":16,\"TOTAL\":171190,\"CUMUL_VAC_1\":777872,\"CUMUL_VAC_2\":318450,\"CUMUL_VAC_UNK\":54,\"CUMUL\":1096376,\"COVER_1_VAC\":\"0,075551561\",\"COVER\":\"0,030929761\",\"RECEIVED\":1186389,\"DISTRIBUTED\":1095103},{\"\":230,\"TYPE\":\"GENERAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":94025,\"TOTAL_VAC_2\":51421,\"TOTAL_VAC_UNK\":2,\"TOTAL\":145448,\"CUMUL_VAC_1\":871897,\"CUMUL_VAC_2\":369871,\"CUMUL_VAC_UNK\":56,\"CUMUL\":1241824,\"COVER_1_VAC\":\"0,084683829\",\"COVER\":\"0,035924074\",\"RECEIVED\":1468929,\"DISTRIBUTED\":1264093},{\"\":231,\"TYPE\":\"GENERAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":80429,\"TOTAL_VAC_2\":109614,\"TOTAL_VAC_UNK\":7,\"TOTAL\":190050,\"CUMUL_VAC_1\":952326,\"CUMUL_VAC_2\":479485,\"CUMUL_VAC_UNK\":63,\"CUMUL\":1431874,\"COVER_1_VAC\":\"0,092495573\",\"COVER\":\"0,046570439\",\"RECEIVED\":1713540,\"DISTRIBUTED\":1462079},{\"\":232,\"TYPE\":\"GENERAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":255035,\"TOTAL_VAC_2\":21100,\"TOTAL_VAC_UNK\":2,\"TOTAL\":276137,\"CUMUL_VAC_1\":1207361,\"CUMUL_VAC_2\":500585,\"CUMUL_VAC_UNK\":65,\"CUMUL\":1708011,\"COVER_1_VAC\":\"0,117266091\",\"COVER\":\"0,048619796\",\"RECEIVED\":1883850,\"DISTRIBUTED\":1753999},{\"\":233,\"TYPE\":\"GENERAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":136710,\"TOTAL_VAC_2\":83933,\"TOTAL_VAC_UNK\":7,\"TOTAL\":220650,\"CUMUL_VAC_1\":1344071,\"CUMUL_VAC_2\":584518,\"CUMUL_VAC_UNK\":72,\"CUMUL\":1928661,\"COVER_1_VAC\":\"0,13054418\",\"COVER\":\"0,056771869\",\"RECEIVED\":2344530,\"DISTRIBUTED\":1996561},{\"\":234,\"TYPE\":\"GENERAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":255218,\"TOTAL_VAC_2\":52545,\"TOTAL_VAC_UNK\":3,\"TOTAL\":307766,\"CUMUL_VAC_1\":1599289,\"CUMUL_VAC_2\":637063,\"CUMUL_VAC_UNK\":75,\"CUMUL\":2236427,\"COVER_1_VAC\":\"0,155332472\",\"COVER\":\"0,061875353\",\"RECEIVED\":2684460,\"DISTRIBUTED\":2360167},{\"\":235,\"TYPE\":\"GENERAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":423792,\"TOTAL_VAC_2\":53690,\"TOTAL_VAC_UNK\":2,\"TOTAL\":477484,\"CUMUL_VAC_1\":2023081,\"CUMUL_VAC_2\":690753,\"CUMUL_VAC_UNK\":77,\"CUMUL\":2713911,\"COVER_1_VAC\":\"0,196493675\",\"COVER\":\"0,067090045\",\"RECEIVED\":2983590,\"DISTRIBUTED\":2679813},{\"\":236,\"TYPE\":\"GENERAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":208926,\"TOTAL_VAC_2\":138208,\"TOTAL_VAC_UNK\":11,\"TOTAL\":347145,\"CUMUL_VAC_1\":2232007,\"CUMUL_VAC_2\":828961,\"CUMUL_VAC_UNK\":88,\"CUMUL\":3061056,\"COVER_1_VAC\":\"0,216785813\",\"COVER\":\"0,080513629\",\"RECEIVED\":3400260,\"DISTRIBUTED\":3039329},{\"\":237,\"TYPE\":\"GENERAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":342405,\"TOTAL_VAC_2\":88818,\"TOTAL_VAC_UNK\":4,\"TOTAL\":431227,\"CUMUL_VAC_1\":2574412,\"CUMUL_VAC_2\":917779,\"CUMUL_VAC_UNK\":92,\"CUMUL\":3492283,\"COVER_1_VAC\":\"0,250042226\",\"COVER\":\"0,089140162\",\"RECEIVED\":4128420,\"DISTRIBUTED\":3581288},{\"\":238,\"TYPE\":\"GENERAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":366475,\"TOTAL_VAC_2\":217365,\"TOTAL_VAC_UNK\":10,\"TOTAL\":583850,\"CUMUL_VAC_1\":2940887,\"CUMUL_VAC_2\":1135144,\"CUMUL_VAC_UNK\":102,\"CUMUL\":4076133,\"COVER_1_VAC\":\"0,28563646\",\"COVER\":\"0,110251946\",\"RECEIVED\":4655370,\"DISTRIBUTED\":4171038},{\"\":239,\"TYPE\":\"GENERAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":285173,\"TOTAL_VAC_2\":303128,\"TOTAL_VAC_UNK\":11,\"TOTAL\":588312,\"CUMUL_VAC_1\":3226060,\"CUMUL_VAC_2\":1438272,\"CUMUL_VAC_UNK\":113,\"CUMUL\":4664445,\"COVER_1_VAC\":\"0,31333416\",\"COVER\":\"0,139693542\",\"RECEIVED\":5197920,\"DISTRIBUTED\":4686071},{\"\":240,\"TYPE\":\"GENERAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":300628,\"TOTAL_VAC_2\":216283,\"TOTAL_VAC_UNK\":18,\"TOTAL\":516929,\"CUMUL_VAC_1\":3526688,\"CUMUL_VAC_2\":1654555,\"CUMUL_VAC_UNK\":131,\"CUMUL\":5181374,\"COVER_1_VAC\":\"0,342532942\",\"COVER\":\"0,160700235\",\"RECEIVED\":5728470,\"DISTRIBUTED\":5126418}]");

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
  '08/02/21': '27/12 a 14/02',
  '15/02/21': '15/02 a 21/02',
  '22/02/21': '22/02 a 28/02',
  '01/03/21': '01/03 a 07/03',
  '08/03/21': '08/03 a 14/03',
  '15/03/21': '15/03 a 21/03',
  '22/03/21': '22/03 a 28/03',
  '29/03/21': '29/03 a 04/04',
  '05/04/21': '05/04 a 11/04',
  '12/04/21': '12/04 a 18/04',
  '19/04/21': '19/04 a 25/04',
  '26/04/21': '26/04 a 02/05',
  '03/05/21': '03/05 a 09/05',
  '10/05/21': '10/05 a 16/05',
  '17/05/21': '17/05 a 23/05',
  '2021-02-08': '27/12 a 14/02',
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
  '2021-05-05': '03/05 a 09/05',
  '2021-05-10': '10/05 a 16/05',
  '2021-05-17': '17/05 a 23/05'
};

/***/ })

/******/ });