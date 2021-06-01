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

module.exports = JSON.parse("[{\"\":1,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":69,\"TOTAL_VAC_2\":120,\"TOTAL_VAC_UNK\":0,\"TOTAL\":189,\"CUMUL_VAC_1\":692,\"CUMUL_VAC_2\":444,\"CUMUL_VAC_UNK\":1,\"CUMUL\":1137,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":2,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":147,\"TOTAL_VAC_2\":106,\"TOTAL_VAC_UNK\":1,\"TOTAL\":254,\"CUMUL_VAC_1\":839,\"CUMUL_VAC_2\":550,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1391,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":3,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":73,\"TOTAL_VAC_2\":19,\"TOTAL_VAC_UNK\":0,\"TOTAL\":92,\"CUMUL_VAC_1\":912,\"CUMUL_VAC_2\":569,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1483,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":4,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":55,\"TOTAL_VAC_2\":41,\"TOTAL_VAC_UNK\":0,\"TOTAL\":96,\"CUMUL_VAC_1\":967,\"CUMUL_VAC_2\":610,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1579,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":5,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":276,\"TOTAL_VAC_2\":13,\"TOTAL_VAC_UNK\":0,\"TOTAL\":289,\"CUMUL_VAC_1\":1243,\"CUMUL_VAC_2\":623,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1868,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":6,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":19,\"TOTAL_VAC_2\":27,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":1262,\"CUMUL_VAC_2\":650,\"CUMUL_VAC_UNK\":2,\"CUMUL\":1914,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":7,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":312,\"TOTAL_VAC_2\":4,\"TOTAL_VAC_UNK\":0,\"TOTAL\":316,\"CUMUL_VAC_1\":1574,\"CUMUL_VAC_2\":654,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2230,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":8,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":317,\"TOTAL_VAC_2\":11,\"TOTAL_VAC_UNK\":0,\"TOTAL\":328,\"CUMUL_VAC_1\":1891,\"CUMUL_VAC_2\":665,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2558,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":9,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":59,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":75,\"CUMUL_VAC_1\":1950,\"CUMUL_VAC_2\":681,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2633,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":10,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":248,\"TOTAL_VAC_2\":8,\"TOTAL_VAC_UNK\":0,\"TOTAL\":256,\"CUMUL_VAC_1\":2198,\"CUMUL_VAC_2\":689,\"CUMUL_VAC_UNK\":2,\"CUMUL\":2889,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":11,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":89,\"TOTAL_VAC_2\":25,\"TOTAL_VAC_UNK\":0,\"TOTAL\":114,\"CUMUL_VAC_1\":2287,\"CUMUL_VAC_2\":714,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3003,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":12,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":183,\"TOTAL_VAC_2\":15,\"TOTAL_VAC_UNK\":0,\"TOTAL\":198,\"CUMUL_VAC_1\":2470,\"CUMUL_VAC_2\":729,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3201,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":13,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":110,\"TOTAL_VAC_2\":66,\"TOTAL_VAC_UNK\":0,\"TOTAL\":176,\"CUMUL_VAC_1\":2580,\"CUMUL_VAC_2\":795,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3377,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":14,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":123,\"TOTAL_VAC_2\":271,\"TOTAL_VAC_UNK\":0,\"TOTAL\":394,\"CUMUL_VAC_1\":2703,\"CUMUL_VAC_2\":1066,\"CUMUL_VAC_UNK\":2,\"CUMUL\":3771,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":15,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":113,\"TOTAL_VAC_2\":192,\"TOTAL_VAC_UNK\":0,\"TOTAL\":305,\"CUMUL_VAC_1\":2816,\"CUMUL_VAC_2\":1258,\"CUMUL_VAC_UNK\":2,\"CUMUL\":4076,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":16,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"Outro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":139,\"TOTAL_VAC_2\":193,\"TOTAL_VAC_UNK\":0,\"TOTAL\":332,\"CUMUL_VAC_1\":2955,\"CUMUL_VAC_2\":1451,\"CUMUL_VAC_UNK\":2,\"CUMUL\":4408,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":17,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3336,\"TOTAL_VAC_2\":8777,\"TOTAL_VAC_UNK\":1,\"TOTAL\":12114,\"CUMUL_VAC_1\":27555,\"CUMUL_VAC_2\":17362,\"CUMUL_VAC_UNK\":1,\"CUMUL\":44918,\"COVER_1_VAC\":\"0,059043476\",\"COVER\":\"0,037202426\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":18,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4054,\"TOTAL_VAC_2\":2807,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6861,\"CUMUL_VAC_1\":31609,\"CUMUL_VAC_2\":20169,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51779,\"COVER_1_VAC\":\"0,067730185\",\"COVER\":\"0,043217125\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":19,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":12033,\"TOTAL_VAC_2\":1647,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13680,\"CUMUL_VAC_1\":43642,\"CUMUL_VAC_2\":21816,\"CUMUL_VAC_UNK\":1,\"CUMUL\":65459,\"COVER_1_VAC\":\"0,093513896\",\"COVER\":\"0,046746234\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":20,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10431,\"TOTAL_VAC_2\":2828,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13259,\"CUMUL_VAC_1\":54073,\"CUMUL_VAC_2\":24644,\"CUMUL_VAC_UNK\":1,\"CUMUL\":78718,\"COVER_1_VAC\":\"0,115864921\",\"COVER\":\"0,052805931\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":21,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5791,\"TOTAL_VAC_2\":1670,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7461,\"CUMUL_VAC_1\":59864,\"CUMUL_VAC_2\":26314,\"CUMUL_VAC_UNK\":1,\"CUMUL\":86179,\"COVER_1_VAC\":\"0,128273586\",\"COVER\":\"0,056384324\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":22,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3679,\"TOTAL_VAC_2\":7721,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11400,\"CUMUL_VAC_1\":63543,\"CUMUL_VAC_2\":34035,\"CUMUL_VAC_UNK\":1,\"CUMUL\":97579,\"COVER_1_VAC\":\"0,136156764\",\"COVER\":\"0,072928496\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":23,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11857,\"TOTAL_VAC_2\":2098,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13955,\"CUMUL_VAC_1\":75400,\"CUMUL_VAC_2\":36133,\"CUMUL_VAC_UNK\":1,\"CUMUL\":111534,\"COVER_1_VAC\":\"0,16156335\",\"COVER\":\"0,077423986\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":24,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":6117,\"TOTAL_VAC_2\":6264,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12381,\"CUMUL_VAC_1\":81517,\"CUMUL_VAC_2\":42397,\"CUMUL_VAC_UNK\":1,\"CUMUL\":123915,\"COVER_1_VAC\":\"0,174670552\",\"COVER\":\"0,090846172\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":25,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14021,\"TOTAL_VAC_2\":4287,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18308,\"CUMUL_VAC_1\":95538,\"CUMUL_VAC_2\":46684,\"CUMUL_VAC_UNK\":1,\"CUMUL\":142223,\"COVER_1_VAC\":\"0,20471405\",\"COVER\":\"0,100032141\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":26,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":21831,\"TOTAL_VAC_2\":2950,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24781,\"CUMUL_VAC_1\":117369,\"CUMUL_VAC_2\":49634,\"CUMUL_VAC_UNK\":1,\"CUMUL\":167004,\"COVER_1_VAC\":\"0,251492425\",\"COVER\":\"0,106353254\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":27,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11299,\"TOTAL_VAC_2\":5941,\"TOTAL_VAC_UNK\":2,\"TOTAL\":17242,\"CUMUL_VAC_1\":128668,\"CUMUL_VAC_2\":55575,\"CUMUL_VAC_UNK\":3,\"CUMUL\":184246,\"COVER_1_VAC\":\"0,275703358\",\"COVER\":\"0,119083332\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":28,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":20145,\"TOTAL_VAC_2\":2759,\"TOTAL_VAC_UNK\":0,\"TOTAL\":22904,\"CUMUL_VAC_1\":148813,\"CUMUL_VAC_2\":58334,\"CUMUL_VAC_UNK\":3,\"CUMUL\":207150,\"COVER_1_VAC\":\"0,318869057\",\"COVER\":\"0,124995179\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":29,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13600,\"TOTAL_VAC_2\":14273,\"TOTAL_VAC_UNK\":1,\"TOTAL\":27874,\"CUMUL_VAC_1\":162413,\"CUMUL_VAC_2\":72607,\"CUMUL_VAC_UNK\":4,\"CUMUL\":235024,\"COVER_1_VAC\":\"0,348010457\",\"COVER\":\"0,15557865\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":30,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17322,\"TOTAL_VAC_2\":15204,\"TOTAL_VAC_UNK\":0,\"TOTAL\":32526,\"CUMUL_VAC_1\":179735,\"CUMUL_VAC_2\":87811,\"CUMUL_VAC_UNK\":4,\"CUMUL\":267550,\"COVER_1_VAC\":\"0,385127172\",\"COVER\":\"0,188157021\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":31,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13141,\"TOTAL_VAC_2\":12163,\"TOTAL_VAC_UNK\":1,\"TOTAL\":25305,\"CUMUL_VAC_1\":192876,\"CUMUL_VAC_2\":99974,\"CUMUL_VAC_UNK\":5,\"CUMUL\":292855,\"COVER_1_VAC\":\"0,41328505\",\"COVER\":\"0,214219289\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":32,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"ARS Alentejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7118,\"TOTAL_VAC_2\":18367,\"TOTAL_VAC_UNK\":1,\"TOTAL\":25486,\"CUMUL_VAC_1\":199994,\"CUMUL_VAC_2\":118341,\"CUMUL_VAC_UNK\":6,\"CUMUL\":318341,\"COVER_1_VAC\":\"0,428537145\",\"COVER\":\"0,253575178\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":33,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2381,\"TOTAL_VAC_2\":2896,\"TOTAL_VAC_UNK\":1,\"TOTAL\":5278,\"CUMUL_VAC_1\":12745,\"CUMUL_VAC_2\":6307,\"CUMUL_VAC_UNK\":1,\"CUMUL\":19053,\"COVER_1_VAC\":\"0,029071226\",\"COVER\":\"0,014386208\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":34,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3178,\"TOTAL_VAC_2\":2114,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5292,\"CUMUL_VAC_1\":15923,\"CUMUL_VAC_2\":8421,\"CUMUL_VAC_UNK\":1,\"CUMUL\":24345,\"COVER_1_VAC\":\"0,036320215\",\"COVER\":\"0,019208223\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":35,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8477,\"TOTAL_VAC_2\":1065,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9542,\"CUMUL_VAC_1\":24400,\"CUMUL_VAC_2\":9486,\"CUMUL_VAC_UNK\":1,\"CUMUL\":33887,\"COVER_1_VAC\":\"0,055656173\",\"COVER\":\"0,021637478\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":36,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4613,\"TOTAL_VAC_2\":549,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5162,\"CUMUL_VAC_1\":29013,\"CUMUL_VAC_2\":10035,\"CUMUL_VAC_UNK\":1,\"CUMUL\":39049,\"COVER_1_VAC\":\"0,066178383\",\"COVER\":\"0,022889741\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":37,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5063,\"TOTAL_VAC_2\":1535,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6598,\"CUMUL_VAC_1\":34076,\"CUMUL_VAC_2\":11570,\"CUMUL_VAC_UNK\":1,\"CUMUL\":45647,\"COVER_1_VAC\":\"0,077727038\",\"COVER\":\"0,026391062\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":38,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2651,\"TOTAL_VAC_2\":2993,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5644,\"CUMUL_VAC_1\":36727,\"CUMUL_VAC_2\":14563,\"CUMUL_VAC_UNK\":1,\"CUMUL\":51291,\"COVER_1_VAC\":\"0,083773945\",\"COVER\":\"0,033218067\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":39,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9353,\"TOTAL_VAC_2\":4284,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13637,\"CUMUL_VAC_1\":46080,\"CUMUL_VAC_2\":18847,\"CUMUL_VAC_UNK\":1,\"CUMUL\":64928,\"COVER_1_VAC\":\"0,105108051\",\"COVER\":\"0,042989831\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":40,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4193,\"TOTAL_VAC_2\":2906,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7099,\"CUMUL_VAC_1\":50273,\"CUMUL_VAC_2\":21753,\"CUMUL_VAC_UNK\":1,\"CUMUL\":72027,\"COVER_1_VAC\":\"0,114672244\",\"COVER\":\"0,04961839\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":41,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8605,\"TOTAL_VAC_2\":1765,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10370,\"CUMUL_VAC_1\":58878,\"CUMUL_VAC_2\":23518,\"CUMUL_VAC_UNK\":1,\"CUMUL\":82397,\"COVER_1_VAC\":\"0,134300169\",\"COVER\":\"0,053644339\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":42,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":13581,\"TOTAL_VAC_2\":2141,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15722,\"CUMUL_VAC_1\":72459,\"CUMUL_VAC_2\":25659,\"CUMUL_VAC_UNK\":1,\"CUMUL\":98119,\"COVER_1_VAC\":\"0,165278304\",\"COVER\":\"0,05852794\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":43,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7167,\"TOTAL_VAC_2\":5480,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12647,\"CUMUL_VAC_1\":79626,\"CUMUL_VAC_2\":31139,\"CUMUL_VAC_UNK\":1,\"CUMUL\":110766,\"COVER_1_VAC\":\"0,181626164\",\"COVER\":\"0,071027769\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":44,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16311,\"TOTAL_VAC_2\":3224,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19535,\"CUMUL_VAC_1\":95937,\"CUMUL_VAC_2\":34363,\"CUMUL_VAC_UNK\":1,\"CUMUL\":130301,\"COVER_1_VAC\":\"0,218831403\",\"COVER\":\"0,078381683\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":45,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16425,\"TOTAL_VAC_2\":8888,\"TOTAL_VAC_UNK\":1,\"TOTAL\":25314,\"CUMUL_VAC_1\":112362,\"CUMUL_VAC_2\":43251,\"CUMUL_VAC_UNK\":2,\"CUMUL\":155615,\"COVER_1_VAC\":\"0,256296675\",\"COVER\":\"0,098655128\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":46,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9636,\"TOTAL_VAC_2\":11258,\"TOTAL_VAC_UNK\":0,\"TOTAL\":20894,\"CUMUL_VAC_1\":121998,\"CUMUL_VAC_2\":54509,\"CUMUL_VAC_UNK\":2,\"CUMUL\":176509,\"COVER_1_VAC\":\"0,278276301\",\"COVER\":\"0,124334521\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":47,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11907,\"TOTAL_VAC_2\":10844,\"TOTAL_VAC_UNK\":2,\"TOTAL\":22753,\"CUMUL_VAC_1\":133905,\"CUMUL_VAC_2\":65353,\"CUMUL_VAC_UNK\":4,\"CUMUL\":199262,\"COVER_1_VAC\":\"0,305436057\",\"COVER\":\"0,149069584\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":48,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"ARS Algarve\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7509,\"TOTAL_VAC_2\":18683,\"TOTAL_VAC_UNK\":4,\"TOTAL\":26196,\"CUMUL_VAC_1\":141414,\"CUMUL_VAC_2\":84036,\"CUMUL_VAC_UNK\":8,\"CUMUL\":225458,\"COVER_1_VAC\":\"0,322564016\",\"COVER\":\"0,191685333\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":49,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7479,\"TOTAL_VAC_2\":27102,\"TOTAL_VAC_UNK\":4,\"TOTAL\":34585,\"CUMUL_VAC_1\":79884,\"CUMUL_VAC_2\":51033,\"CUMUL_VAC_UNK\":8,\"CUMUL\":130925,\"COVER_1_VAC\":\"0,049129423\",\"COVER\":\"0,031385783\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":50,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25462,\"TOTAL_VAC_2\":9950,\"TOTAL_VAC_UNK\":3,\"TOTAL\":35415,\"CUMUL_VAC_1\":105346,\"CUMUL_VAC_2\":60983,\"CUMUL_VAC_UNK\":11,\"CUMUL\":166340,\"COVER_1_VAC\":\"0,064788796\",\"COVER\":\"0,037505128\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":51,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":38326,\"TOTAL_VAC_2\":3077,\"TOTAL_VAC_UNK\":1,\"TOTAL\":41404,\"CUMUL_VAC_1\":143672,\"CUMUL_VAC_2\":64060,\"CUMUL_VAC_UNK\":12,\"CUMUL\":207744,\"COVER_1_VAC\":\"0,088359653\",\"COVER\":\"0,039397512\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":52,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":28379,\"TOTAL_VAC_2\":5882,\"TOTAL_VAC_UNK\":1,\"TOTAL\":34262,\"CUMUL_VAC_1\":172051,\"CUMUL_VAC_2\":69942,\"CUMUL_VAC_UNK\":13,\"CUMUL\":242006,\"COVER_1_VAC\":\"0,105813009\",\"COVER\":\"0,043014998\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":53,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":17460,\"TOTAL_VAC_2\":13461,\"TOTAL_VAC_UNK\":0,\"TOTAL\":30921,\"CUMUL_VAC_1\":189511,\"CUMUL_VAC_2\":83403,\"CUMUL_VAC_UNK\":13,\"CUMUL\":272927,\"COVER_1_VAC\":\"0,116551076\",\"COVER\":\"0,051293642\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":54,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":16476,\"TOTAL_VAC_2\":24084,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40562,\"CUMUL_VAC_1\":205987,\"CUMUL_VAC_2\":107487,\"CUMUL_VAC_UNK\":15,\"CUMUL\":313489,\"COVER_1_VAC\":\"0,126683973\",\"COVER\":\"0,066105532\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":55,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47555,\"TOTAL_VAC_2\":4249,\"TOTAL_VAC_UNK\":0,\"TOTAL\":51804,\"CUMUL_VAC_1\":253542,\"CUMUL_VAC_2\":111736,\"CUMUL_VAC_UNK\":15,\"CUMUL\":365293,\"COVER_1_VAC\":\"0,155930752\",\"COVER\":\"0,068718708\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":56,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":24179,\"TOTAL_VAC_2\":16630,\"TOTAL_VAC_UNK\":2,\"TOTAL\":40811,\"CUMUL_VAC_1\":277721,\"CUMUL_VAC_2\":128366,\"CUMUL_VAC_UNK\":17,\"CUMUL\":406104,\"COVER_1_VAC\":\"0,170801068\",\"COVER\":\"0,078946316\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":57,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":49739,\"TOTAL_VAC_2\":10098,\"TOTAL_VAC_UNK\":0,\"TOTAL\":59837,\"CUMUL_VAC_1\":327460,\"CUMUL_VAC_2\":138464,\"CUMUL_VAC_UNK\":17,\"CUMUL\":465941,\"COVER_1_VAC\":\"0,201391029\",\"COVER\":\"0,085156683\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":58,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":77458,\"TOTAL_VAC_2\":11898,\"TOTAL_VAC_UNK\":1,\"TOTAL\":89357,\"CUMUL_VAC_1\":404918,\"CUMUL_VAC_2\":150362,\"CUMUL_VAC_UNK\":18,\"CUMUL\":555298,\"COVER_1_VAC\":\"0,249028439\",\"COVER\":\"0,092474067\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":59,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":29897,\"TOTAL_VAC_2\":24078,\"TOTAL_VAC_UNK\":6,\"TOTAL\":53981,\"CUMUL_VAC_1\":434815,\"CUMUL_VAC_2\":174440,\"CUMUL_VAC_UNK\":24,\"CUMUL\":609279,\"COVER_1_VAC\":\"0,267415379\",\"COVER\":\"0,107282267\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":60,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":56519,\"TOTAL_VAC_2\":17815,\"TOTAL_VAC_UNK\":0,\"TOTAL\":74334,\"CUMUL_VAC_1\":491334,\"CUMUL_VAC_2\":192255,\"CUMUL_VAC_UNK\":24,\"CUMUL\":683613,\"COVER_1_VAC\":\"0,302175104\",\"COVER\":\"0,118238662\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":61,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":59762,\"TOTAL_VAC_2\":48980,\"TOTAL_VAC_UNK\":1,\"TOTAL\":108743,\"CUMUL_VAC_1\":551096,\"CUMUL_VAC_2\":241235,\"CUMUL_VAC_UNK\":25,\"CUMUL\":792356,\"COVER_1_VAC\":\"0,338929305\",\"COVER\":\"0,14836183\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":62,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":50441,\"TOTAL_VAC_2\":55485,\"TOTAL_VAC_UNK\":0,\"TOTAL\":105926,\"CUMUL_VAC_1\":601537,\"CUMUL_VAC_2\":296720,\"CUMUL_VAC_UNK\":25,\"CUMUL\":898282,\"COVER_1_VAC\":\"0,369951002\",\"COVER\":\"0,182485635\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":63,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44641,\"TOTAL_VAC_2\":41518,\"TOTAL_VAC_UNK\":5,\"TOTAL\":86164,\"CUMUL_VAC_1\":646178,\"CUMUL_VAC_2\":338238,\"CUMUL_VAC_UNK\":30,\"CUMUL\":984446,\"COVER_1_VAC\":\"0,397405644\",\"COVER\":\"0,208019602\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":64,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"ARS Centro\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":23978,\"TOTAL_VAC_2\":55898,\"TOTAL_VAC_UNK\":6,\"TOTAL\":79882,\"CUMUL_VAC_1\":670156,\"CUMUL_VAC_2\":394136,\"CUMUL_VAC_UNK\":36,\"CUMUL\":1064328,\"COVER_1_VAC\":\"0,412152343\",\"COVER\":\"0,242397406\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":65,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":14287,\"TOTAL_VAC_2\":30346,\"TOTAL_VAC_UNK\":0,\"TOTAL\":44633,\"CUMUL_VAC_1\":114787,\"CUMUL_VAC_2\":60795,\"CUMUL_VAC_UNK\":1,\"CUMUL\":175583,\"COVER_1_VAC\":\"0,031087082\",\"COVER\":\"0,016464749\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":66,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32889,\"TOTAL_VAC_2\":19002,\"TOTAL_VAC_UNK\":2,\"TOTAL\":51893,\"CUMUL_VAC_1\":147676,\"CUMUL_VAC_2\":79797,\"CUMUL_VAC_UNK\":3,\"CUMUL\":227476,\"COVER_1_VAC\":\"0,039994215\",\"COVER\":\"0,021610948\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":67,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":49024,\"TOTAL_VAC_2\":6659,\"TOTAL_VAC_UNK\":0,\"TOTAL\":55683,\"CUMUL_VAC_1\":196700,\"CUMUL_VAC_2\":86456,\"CUMUL_VAC_UNK\":3,\"CUMUL\":283159,\"COVER_1_VAC\":\"0,053271094\",\"COVER\":\"0,023414366\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":68,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":44750,\"TOTAL_VAC_2\":12719,\"TOTAL_VAC_UNK\":1,\"TOTAL\":57470,\"CUMUL_VAC_1\":241450,\"CUMUL_VAC_2\":99175,\"CUMUL_VAC_UNK\":4,\"CUMUL\":340629,\"COVER_1_VAC\":\"0,065390471\",\"COVER\":\"0,026858977\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":69,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32874,\"TOTAL_VAC_2\":16451,\"TOTAL_VAC_UNK\":2,\"TOTAL\":49327,\"CUMUL_VAC_1\":274324,\"CUMUL_VAC_2\":115626,\"CUMUL_VAC_UNK\":6,\"CUMUL\":389956,\"COVER_1_VAC\":\"0,074293542\",\"COVER\":\"0,031314304\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":70,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25486,\"TOTAL_VAC_2\":28857,\"TOTAL_VAC_UNK\":1,\"TOTAL\":54344,\"CUMUL_VAC_1\":299810,\"CUMUL_VAC_2\":144483,\"CUMUL_VAC_UNK\":7,\"CUMUL\":444300,\"COVER_1_VAC\":\"0,081195764\",\"COVER\":\"0,039129474\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":71,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88259,\"TOTAL_VAC_2\":7412,\"TOTAL_VAC_UNK\":2,\"TOTAL\":95673,\"CUMUL_VAC_1\":388069,\"CUMUL_VAC_2\":151895,\"CUMUL_VAC_UNK\":9,\"CUMUL\":539973,\"COVER_1_VAC\":\"0,105098426\",\"COVER\":\"0,041136822\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":72,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":45069,\"TOTAL_VAC_2\":23654,\"TOTAL_VAC_UNK\":4,\"TOTAL\":68727,\"CUMUL_VAC_1\":433138,\"CUMUL_VAC_2\":175549,\"CUMUL_VAC_UNK\":13,\"CUMUL\":608700,\"COVER_1_VAC\":\"0,117304196\",\"COVER\":\"0,047542894\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":73,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":86802,\"TOTAL_VAC_2\":19345,\"TOTAL_VAC_UNK\":1,\"TOTAL\":106148,\"CUMUL_VAC_1\":519940,\"CUMUL_VAC_2\":194894,\"CUMUL_VAC_UNK\":14,\"CUMUL\":714848,\"COVER_1_VAC\":\"0,140812266\",\"COVER\":\"0,052781986\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":74,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":162827,\"TOTAL_VAC_2\":14024,\"TOTAL_VAC_UNK\":0,\"TOTAL\":176851,\"CUMUL_VAC_1\":682767,\"CUMUL_VAC_2\":208918,\"CUMUL_VAC_UNK\":14,\"CUMUL\":891699,\"COVER_1_VAC\":\"0,184909737\",\"COVER\":\"0,056580023\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":75,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":78417,\"TOTAL_VAC_2\":53311,\"TOTAL_VAC_UNK\":3,\"TOTAL\":131731,\"CUMUL_VAC_1\":761184,\"CUMUL_VAC_2\":262229,\"CUMUL_VAC_UNK\":17,\"CUMUL\":1023430,\"COVER_1_VAC\":\"0,206146948\",\"COVER\":\"0,071017925\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":76,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":106673,\"TOTAL_VAC_2\":25251,\"TOTAL_VAC_UNK\":3,\"TOTAL\":131927,\"CUMUL_VAC_1\":867857,\"CUMUL_VAC_2\":287480,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1155357,\"COVER_1_VAC\":\"0,235036564\",\"COVER\":\"0,077856503\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":77,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":106583,\"TOTAL_VAC_2\":64549,\"TOTAL_VAC_UNK\":5,\"TOTAL\":171137,\"CUMUL_VAC_1\":974440,\"CUMUL_VAC_2\":352029,\"CUMUL_VAC_UNK\":25,\"CUMUL\":1326494,\"COVER_1_VAC\":\"0,263901806\",\"COVER\":\"0,095337926\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":78,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":89331,\"TOTAL_VAC_2\":112053,\"TOTAL_VAC_UNK\":7,\"TOTAL\":201391,\"CUMUL_VAC_1\":1063771,\"CUMUL_VAC_2\":464082,\"CUMUL_VAC_UNK\":32,\"CUMUL\":1527885,\"COVER_1_VAC\":\"0,288094791\",\"COVER\":\"0,125684576\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":79,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":108763,\"TOTAL_VAC_2\":70310,\"TOTAL_VAC_UNK\":4,\"TOTAL\":179077,\"CUMUL_VAC_1\":1172534,\"CUMUL_VAC_2\":534392,\"CUMUL_VAC_UNK\":36,\"CUMUL\":1706962,\"COVER_1_VAC\":\"0,317550429\",\"COVER\":\"0,144726216\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":80,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"ARS Lisboa e Vale do Tejo\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":109270,\"TOTAL_VAC_2\":87407,\"TOTAL_VAC_UNK\":6,\"TOTAL\":196683,\"CUMUL_VAC_1\":1281804,\"CUMUL_VAC_2\":621799,\"CUMUL_VAC_UNK\":42,\"CUMUL\":1903645,\"COVER_1_VAC\":\"0,347143375\",\"COVER\":\"0,168398135\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":81,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8675,\"TOTAL_VAC_2\":28601,\"TOTAL_VAC_UNK\":5,\"TOTAL\":37281,\"CUMUL_VAC_1\":105266,\"CUMUL_VAC_2\":68868,\"CUMUL_VAC_UNK\":6,\"CUMUL\":174140,\"COVER_1_VAC\":\"0,029442251\",\"COVER\":\"0,019261955\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":82,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":32864,\"TOTAL_VAC_2\":15015,\"TOTAL_VAC_UNK\":3,\"TOTAL\":47882,\"CUMUL_VAC_1\":138130,\"CUMUL_VAC_2\":83883,\"CUMUL_VAC_UNK\":9,\"CUMUL\":222022,\"COVER_1_VAC\":\"0,03863411\",\"COVER\":\"0,023461558\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":83,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64585,\"TOTAL_VAC_2\":4220,\"TOTAL_VAC_UNK\":1,\"TOTAL\":68806,\"CUMUL_VAC_1\":202715,\"CUMUL_VAC_2\":88103,\"CUMUL_VAC_UNK\":10,\"CUMUL\":290828,\"COVER_1_VAC\":\"0,056698136\",\"COVER\":\"0,024641866\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":84,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":47712,\"TOTAL_VAC_2\":6936,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54648,\"CUMUL_VAC_1\":250427,\"CUMUL_VAC_2\":95039,\"CUMUL_VAC_UNK\":10,\"CUMUL\":345476,\"COVER_1_VAC\":\"0,070042888\",\"COVER\":\"0,026581822\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":85,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":25120,\"TOTAL_VAC_2\":13845,\"TOTAL_VAC_UNK\":0,\"TOTAL\":38965,\"CUMUL_VAC_1\":275547,\"CUMUL_VAC_2\":108884,\"CUMUL_VAC_UNK\":10,\"CUMUL\":384441,\"COVER_1_VAC\":\"0,077068797\",\"COVER\":\"0,030454184\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":86,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":26519,\"TOTAL_VAC_2\":42153,\"TOTAL_VAC_UNK\":4,\"TOTAL\":68676,\"CUMUL_VAC_1\":302066,\"CUMUL_VAC_2\":151037,\"CUMUL_VAC_UNK\":14,\"CUMUL\":453117,\"COVER_1_VAC\":\"0,084485998\",\"COVER\":\"0,042244118\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":87,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":88349,\"TOTAL_VAC_2\":2155,\"TOTAL_VAC_UNK\":0,\"TOTAL\":90504,\"CUMUL_VAC_1\":390415,\"CUMUL_VAC_2\":153192,\"CUMUL_VAC_UNK\":14,\"CUMUL\":543621,\"COVER_1_VAC\":\"0,109196669\",\"COVER\":\"0,042846858\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":88,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":53684,\"TOTAL_VAC_2\":32471,\"TOTAL_VAC_UNK\":1,\"TOTAL\":86156,\"CUMUL_VAC_1\":444099,\"CUMUL_VAC_2\":185663,\"CUMUL_VAC_UNK\":15,\"CUMUL\":629777,\"COVER_1_VAC\":\"0,124211753\",\"COVER\":\"0,051928797\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":89,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":81957,\"TOTAL_VAC_2\":13422,\"TOTAL_VAC_UNK\":2,\"TOTAL\":95381,\"CUMUL_VAC_1\":526056,\"CUMUL_VAC_2\":199085,\"CUMUL_VAC_UNK\":17,\"CUMUL\":725158,\"COVER_1_VAC\":\"0,147134621\",\"COVER\":\"0,055682847\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":90,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":135245,\"TOTAL_VAC_2\":18981,\"TOTAL_VAC_UNK\":1,\"TOTAL\":154227,\"CUMUL_VAC_1\":661301,\"CUMUL_VAC_2\":218066,\"CUMUL_VAC_UNK\":18,\"CUMUL\":879385,\"COVER_1_VAC\":\"0,184961813\",\"COVER\":\"0,060991716\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":91,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":64488,\"TOTAL_VAC_2\":46207,\"TOTAL_VAC_UNK\":0,\"TOTAL\":110695,\"CUMUL_VAC_1\":725789,\"CUMUL_VAC_2\":264273,\"CUMUL_VAC_UNK\":18,\"CUMUL\":990080,\"COVER_1_VAC\":\"0,202998709\",\"COVER\":\"0,073915529\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":92,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":125753,\"TOTAL_VAC_2\":36465,\"TOTAL_VAC_UNK\":0,\"TOTAL\":162218,\"CUMUL_VAC_1\":851542,\"CUMUL_VAC_2\":300738,\"CUMUL_VAC_UNK\":18,\"CUMUL\":1152298,\"COVER_1_VAC\":\"0,238171048\",\"COVER\":\"0,084114565\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":93,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":153734,\"TOTAL_VAC_2\":72659,\"TOTAL_VAC_UNK\":2,\"TOTAL\":226395,\"CUMUL_VAC_1\":1005276,\"CUMUL_VAC_2\":373397,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1378693,\"COVER_1_VAC\":\"0,281169501\",\"COVER\":\"0,104436839\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":94,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":98567,\"TOTAL_VAC_2\":100282,\"TOTAL_VAC_UNK\":7,\"TOTAL\":198856,\"CUMUL_VAC_1\":1103843,\"CUMUL_VAC_2\":473679,\"CUMUL_VAC_UNK\":27,\"CUMUL\":1577549,\"COVER_1_VAC\":\"0,308738083\",\"COVER\":\"0,132485097\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":95,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":109528,\"TOTAL_VAC_2\":70349,\"TOTAL_VAC_UNK\":6,\"TOTAL\":179883,\"CUMUL_VAC_1\":1213371,\"CUMUL_VAC_2\":544028,\"CUMUL_VAC_UNK\":33,\"CUMUL\":1757432,\"COVER_1_VAC\":\"0,339372389\",\"COVER\":\"0,152161278\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":96,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"ARS Norte\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":72079,\"TOTAL_VAC_2\":127104,\"TOTAL_VAC_UNK\":10,\"TOTAL\":199193,\"CUMUL_VAC_1\":1285450,\"CUMUL_VAC_2\":671132,\"CUMUL_VAC_UNK\":43,\"CUMUL\":1956625,\"COVER_1_VAC\":\"0,359532441\",\"COVER\":\"0,187711484\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":97,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3160,\"TOTAL_VAC_2\":1086,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4246,\"CUMUL_VAC_1\":10996,\"CUMUL_VAC_2\":4775,\"CUMUL_VAC_UNK\":0,\"CUMUL\":15771,\"COVER_1_VAC\":\"0,04324809\",\"COVER\":\"0,018780432\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":98,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2495,\"TOTAL_VAC_2\":638,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3133,\"CUMUL_VAC_1\":13491,\"CUMUL_VAC_2\":5413,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18904,\"COVER_1_VAC\":\"0,053061112\",\"COVER\":\"0,021289734\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":99,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2257,\"TOTAL_VAC_2\":2155,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4412,\"CUMUL_VAC_1\":15748,\"CUMUL_VAC_2\":7568,\"CUMUL_VAC_UNK\":0,\"CUMUL\":23316,\"COVER_1_VAC\":\"0,061938062\",\"COVER\":\"0,02976551\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":100,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1431,\"TOTAL_VAC_2\":3116,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4547,\"CUMUL_VAC_1\":17179,\"CUMUL_VAC_2\":10684,\"CUMUL_VAC_UNK\":0,\"CUMUL\":27863,\"COVER_1_VAC\":\"0,067566292\",\"COVER\":\"0,042020971\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":101,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4883,\"TOTAL_VAC_2\":2399,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7282,\"CUMUL_VAC_1\":22062,\"CUMUL_VAC_2\":13083,\"CUMUL_VAC_UNK\":0,\"CUMUL\":35145,\"COVER_1_VAC\":\"0,086771496\",\"COVER\":\"0,051456418\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":102,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3102,\"TOTAL_VAC_2\":2348,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5450,\"CUMUL_VAC_1\":25164,\"CUMUL_VAC_2\":15431,\"CUMUL_VAC_UNK\":0,\"CUMUL\":40595,\"COVER_1_VAC\":\"0,098971894\",\"COVER\":\"0,060691277\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":103,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":5275,\"TOTAL_VAC_2\":181,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5456,\"CUMUL_VAC_1\":30439,\"CUMUL_VAC_2\":15612,\"CUMUL_VAC_UNK\":0,\"CUMUL\":46051,\"COVER_1_VAC\":\"0,119718864\",\"COVER\":\"0,061403164\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":104,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1205,\"TOTAL_VAC_2\":1260,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2465,\"CUMUL_VAC_1\":31644,\"CUMUL_VAC_2\":16872,\"CUMUL_VAC_UNK\":0,\"CUMUL\":48516,\"COVER_1_VAC\":\"0,124458219\",\"COVER\":\"0,066358838\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":105,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":10213,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11512,\"CUMUL_VAC_1\":41857,\"CUMUL_VAC_2\":18171,\"CUMUL_VAC_UNK\":0,\"CUMUL\":60028,\"COVER_1_VAC\":\"0,164626712\",\"COVER\":\"0,071467902\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":106,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8428,\"TOTAL_VAC_2\":1299,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9727,\"CUMUL_VAC_1\":50285,\"CUMUL_VAC_2\":19470,\"CUMUL_VAC_UNK\":0,\"CUMUL\":69755,\"COVER_1_VAC\":\"0,197774666\",\"COVER\":\"0,076576966\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":107,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9811,\"TOTAL_VAC_2\":2128,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11939,\"CUMUL_VAC_1\":60096,\"CUMUL_VAC_2\":21598,\"CUMUL_VAC_UNK\":0,\"CUMUL\":81694,\"COVER_1_VAC\":\"0,236362063\",\"COVER\":\"0,08494655\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":108,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8822,\"TOTAL_VAC_2\":802,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9624,\"CUMUL_VAC_1\":68918,\"CUMUL_VAC_2\":22400,\"CUMUL_VAC_UNK\":0,\"CUMUL\":91318,\"COVER_1_VAC\":\"0,271059649\",\"COVER\":\"0,088100876\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":109,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7601,\"TOTAL_VAC_2\":5287,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12888,\"CUMUL_VAC_1\":76519,\"CUMUL_VAC_2\":27687,\"CUMUL_VAC_UNK\":0,\"CUMUL\":104206,\"COVER_1_VAC\":\"0,300954951\",\"COVER\":\"0,108895042\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":110,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11598,\"TOTAL_VAC_2\":6432,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18030,\"CUMUL_VAC_1\":88117,\"CUMUL_VAC_2\":34119,\"CUMUL_VAC_UNK\":0,\"CUMUL\":122236,\"COVER_1_VAC\":\"0,346570752\",\"COVER\":\"0,134192579\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":111,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2326,\"TOTAL_VAC_2\":7610,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9936,\"CUMUL_VAC_1\":90443,\"CUMUL_VAC_2\":41729,\"CUMUL_VAC_UNK\":0,\"CUMUL\":132172,\"COVER_1_VAC\":\"0,355719084\",\"COVER\":\"0,164123278\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":112,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"RA_Madeira\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3436,\"TOTAL_VAC_2\":8970,\"TOTAL_VAC_UNK\":0,\"TOTAL\":12406,\"CUMUL_VAC_1\":93879,\"CUMUL_VAC_2\":50699,\"CUMUL_VAC_UNK\":0,\"CUMUL\":144578,\"COVER_1_VAC\":\"0,369233129\",\"COVER\":\"0,199402959\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":113,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1051,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1052,\"CUMUL_VAC_1\":8654,\"CUMUL_VAC_2\":5335,\"CUMUL_VAC_UNK\":0,\"CUMUL\":13989,\"COVER_1_VAC\":\"0,035643091\",\"COVER\":\"0,021973179\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":114,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2056,\"TOTAL_VAC_2\":322,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2378,\"CUMUL_VAC_1\":10710,\"CUMUL_VAC_2\":5657,\"CUMUL_VAC_UNK\":0,\"CUMUL\":16367,\"COVER_1_VAC\":\"0,044111106\",\"COVER\":\"0,023299395\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":115,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1466,\"TOTAL_VAC_2\":1611,\"TOTAL_VAC_UNK\":8,\"TOTAL\":3085,\"CUMUL_VAC_1\":12176,\"CUMUL_VAC_2\":7268,\"CUMUL_VAC_UNK\":8,\"CUMUL\":19452,\"COVER_1_VAC\":\"0,050149096\",\"COVER\":\"0,029934595\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":116,\"TYPE\":\"REGIONAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":754,\"TOTAL_VAC_2\":1155,\"TOTAL_VAC_UNK\":14,\"TOTAL\":1923,\"CUMUL_VAC_1\":12930,\"CUMUL_VAC_2\":8423,\"CUMUL_VAC_UNK\":22,\"CUMUL\":21375,\"COVER_1_VAC\":\"0,053254584\",\"COVER\":\"0,034691675\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":117,\"TYPE\":\"REGIONAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2597,\"TOTAL_VAC_2\":2053,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4650,\"CUMUL_VAC_1\":15527,\"CUMUL_VAC_2\":10476,\"CUMUL_VAC_UNK\":22,\"CUMUL\":26025,\"COVER_1_VAC\":\"0,063950806\",\"COVER\":\"0,043147334\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":118,\"TYPE\":\"REGIONAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":2522,\"TOTAL_VAC_2\":1438,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3960,\"CUMUL_VAC_1\":18049,\"CUMUL_VAC_2\":11914,\"CUMUL_VAC_UNK\":22,\"CUMUL\":29985,\"COVER_1_VAC\":\"0,074338127\",\"COVER\":\"0,049070001\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":119,\"TYPE\":\"REGIONAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4103,\"TOTAL_VAC_2\":726,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4829,\"CUMUL_VAC_1\":22152,\"CUMUL_VAC_2\":12640,\"CUMUL_VAC_UNK\":22,\"CUMUL\":34814,\"COVER_1_VAC\":\"0,091237088\",\"COVER\":\"0,052060166\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":120,\"TYPE\":\"REGIONAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":1961,\"TOTAL_VAC_2\":758,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2719,\"CUMUL_VAC_1\":24113,\"CUMUL_VAC_2\":13398,\"CUMUL_VAC_UNK\":22,\"CUMUL\":37533,\"COVER_1_VAC\":\"0,099313827\",\"COVER\":\"0,055182128\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":121,\"TYPE\":\"REGIONAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":3836,\"TOTAL_VAC_2\":2326,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6162,\"CUMUL_VAC_1\":27949,\"CUMUL_VAC_2\":15724,\"CUMUL_VAC_UNK\":22,\"CUMUL\":43695,\"COVER_1_VAC\":\"0,115113099\",\"COVER\":\"0,064762187\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":122,\"TYPE\":\"REGIONAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4215,\"TOTAL_VAC_2\":2404,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6619,\"CUMUL_VAC_1\":32164,\"CUMUL_VAC_2\":18128,\"CUMUL_VAC_UNK\":22,\"CUMUL\":50314,\"COVER_1_VAC\":\"0,132473352\",\"COVER\":\"0,074663504\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":123,\"TYPE\":\"REGIONAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":7818,\"TOTAL_VAC_2\":1054,\"TOTAL_VAC_UNK\":1,\"TOTAL\":8873,\"CUMUL_VAC_1\":39982,\"CUMUL_VAC_2\":19182,\"CUMUL_VAC_UNK\":23,\"CUMUL\":59187,\"COVER_1_VAC\":\"0,164673224\",\"COVER\":\"0,079004596\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":124,\"TYPE\":\"REGIONAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9061,\"TOTAL_VAC_2\":2611,\"TOTAL_VAC_UNK\":1,\"TOTAL\":11673,\"CUMUL_VAC_1\":49043,\"CUMUL_VAC_2\":21793,\"CUMUL_VAC_UNK\":24,\"CUMUL\":70860,\"COVER_1_VAC\":\"0,201992619\",\"COVER\":\"0,08975848\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":125,\"TYPE\":\"REGIONAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":9017,\"TOTAL_VAC_2\":2726,\"TOTAL_VAC_UNK\":0,\"TOTAL\":11743,\"CUMUL_VAC_1\":58060,\"CUMUL_VAC_2\":24519,\"CUMUL_VAC_UNK\":24,\"CUMUL\":82603,\"COVER_1_VAC\":\"0,239130793\",\"COVER\":\"0,100986013\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":126,\"TYPE\":\"REGIONAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":8226,\"TOTAL_VAC_2\":2239,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10465,\"CUMUL_VAC_1\":66286,\"CUMUL_VAC_2\":26758,\"CUMUL_VAC_UNK\":24,\"CUMUL\":93068,\"COVER_1_VAC\":\"0,273011087\",\"COVER\":\"0,110207746\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":127,\"TYPE\":\"REGIONAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":11015,\"TOTAL_VAC_2\":4015,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15030,\"CUMUL_VAC_1\":77301,\"CUMUL_VAC_2\":30773,\"CUMUL_VAC_UNK\":24,\"CUMUL\":108098,\"COVER_1_VAC\":\"0,318378392\",\"COVER\":\"0,126744263\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":128,\"TYPE\":\"REGIONAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"RA_Acores\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":4442,\"TOTAL_VAC_2\":7058,\"TOTAL_VAC_UNK\":3,\"TOTAL\":11503,\"CUMUL_VAC_1\":81743,\"CUMUL_VAC_2\":37831,\"CUMUL_VAC_UNK\":27,\"CUMUL\":119601,\"COVER_1_VAC\":\"0,336673586\",\"COVER\":\"0,155813934\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":129,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":67,\"TOTAL_VAC_UNK\":0,\"TOTAL\":104,\"CUMUL_VAC_1\":172,\"CUMUL_VAC_2\":71,\"CUMUL_VAC_UNK\":0,\"CUMUL\":243,\"COVER_1_VAC\":\"0,000100172\",\"COVER\":\"4,13E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":130,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1453,\"TOTAL_VAC_2\":3040,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4493,\"CUMUL_VAC_1\":12175,\"CUMUL_VAC_2\":6790,\"CUMUL_VAC_UNK\":0,\"CUMUL\":18965,\"COVER_1_VAC\":\"0,015695481\",\"COVER\":\"0,008753373\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":131,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":13705,\"TOTAL_VAC_2\":30711,\"TOTAL_VAC_UNK\":5,\"TOTAL\":44421,\"CUMUL_VAC_1\":144308,\"CUMUL_VAC_2\":91287,\"CUMUL_VAC_UNK\":10,\"CUMUL\":235605,\"COVER_1_VAC\":\"0,042940464\",\"COVER\":\"0,027163471\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":132,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":6790,\"TOTAL_VAC_2\":22168,\"TOTAL_VAC_UNK\":1,\"TOTAL\":28959,\"CUMUL_VAC_1\":84279,\"CUMUL_VAC_2\":52341,\"CUMUL_VAC_UNK\":3,\"CUMUL\":136623,\"COVER_1_VAC\":\"0,038980501\",\"COVER\":\"0,024208621\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":133,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":3631,\"TOTAL_VAC_2\":11446,\"TOTAL_VAC_UNK\":3,\"TOTAL\":15080,\"CUMUL_VAC_1\":35478,\"CUMUL_VAC_2\":18662,\"CUMUL_VAC_UNK\":3,\"CUMUL\":54143,\"COVER_1_VAC\":\"0,022110721\",\"COVER\":\"0,011630596\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":134,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":14822,\"TOTAL_VAC_2\":31497,\"TOTAL_VAC_UNK\":2,\"TOTAL\":46321,\"CUMUL_VAC_1\":84166,\"CUMUL_VAC_2\":45768,\"CUMUL_VAC_UNK\":2,\"CUMUL\":129936,\"COVER_1_VAC\":\"0,124531155\",\"COVER\":\"0,067717866\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":135,\"TYPE\":\"AGES\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":136,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":30,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":46,\"CUMUL_VAC_1\":202,\"CUMUL_VAC_2\":87,\"CUMUL_VAC_UNK\":0,\"CUMUL\":289,\"COVER_1_VAC\":\"0,000117644\",\"COVER\":\"5,07E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":137,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2307,\"TOTAL_VAC_2\":1726,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4033,\"CUMUL_VAC_1\":14482,\"CUMUL_VAC_2\":8516,\"CUMUL_VAC_UNK\":0,\"CUMUL\":22998,\"COVER_1_VAC\":\"0,018669565\",\"COVER\":\"0,010978457\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":138,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":22195,\"TOTAL_VAC_2\":18908,\"TOTAL_VAC_UNK\":4,\"TOTAL\":41107,\"CUMUL_VAC_1\":166503,\"CUMUL_VAC_2\":110195,\"CUMUL_VAC_UNK\":14,\"CUMUL\":276712,\"COVER_1_VAC\":\"0,049544835\",\"COVER\":\"0,032789758\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":139,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":25012,\"TOTAL_VAC_2\":12886,\"TOTAL_VAC_UNK\":1,\"TOTAL\":37899,\"CUMUL_VAC_1\":109291,\"CUMUL_VAC_2\":65227,\"CUMUL_VAC_UNK\":4,\"CUMUL\":174522,\"COVER_1_VAC\":\"0,050548985\",\"COVER\":\"0,03016862\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":140,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":4998,\"TOTAL_VAC_2\":7184,\"TOTAL_VAC_UNK\":2,\"TOTAL\":12184,\"CUMUL_VAC_1\":40476,\"CUMUL_VAC_2\":25846,\"CUMUL_VAC_UNK\":5,\"CUMUL\":66327,\"COVER_1_VAC\":\"0,025225591\",\"COVER\":\"0,016107833\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":141,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":48603,\"TOTAL_VAC_2\":9234,\"TOTAL_VAC_UNK\":2,\"TOTAL\":57839,\"CUMUL_VAC_1\":132769,\"CUMUL_VAC_2\":55002,\"CUMUL_VAC_UNK\":4,\"CUMUL\":187775,\"COVER_1_VAC\":\"0,196443658\",\"COVER\":\"0,081380398\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":142,\"TYPE\":\"AGES\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":143,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":21,\"TOTAL_VAC_2\":32,\"TOTAL_VAC_UNK\":0,\"TOTAL\":53,\"CUMUL_VAC_1\":223,\"CUMUL_VAC_2\":119,\"CUMUL_VAC_UNK\":0,\"CUMUL\":342,\"COVER_1_VAC\":\"0,000129874\",\"COVER\":\"6,93E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":144,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1260,\"TOTAL_VAC_2\":692,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1952,\"CUMUL_VAC_1\":15742,\"CUMUL_VAC_2\":9208,\"CUMUL_VAC_UNK\":0,\"CUMUL\":24950,\"COVER_1_VAC\":\"0,020293902\",\"COVER\":\"0,011870553\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":145,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":11256,\"TOTAL_VAC_2\":7224,\"TOTAL_VAC_UNK\":7,\"TOTAL\":18487,\"CUMUL_VAC_1\":177759,\"CUMUL_VAC_2\":117419,\"CUMUL_VAC_UNK\":21,\"CUMUL\":295199,\"COVER_1_VAC\":\"0,052894185\",\"COVER\":\"0,034939341\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":146,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":49641,\"TOTAL_VAC_2\":4917,\"TOTAL_VAC_UNK\":3,\"TOTAL\":54561,\"CUMUL_VAC_1\":158932,\"CUMUL_VAC_2\":70144,\"CUMUL_VAC_UNK\":7,\"CUMUL\":229083,\"COVER_1_VAC\":\"0,073508809\",\"COVER\":\"0,032442818\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":147,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":11547,\"TOTAL_VAC_2\":2404,\"TOTAL_VAC_UNK\":0,\"TOTAL\":13951,\"CUMUL_VAC_1\":52023,\"CUMUL_VAC_2\":28250,\"CUMUL_VAC_UNK\":5,\"CUMUL\":80278,\"COVER_1_VAC\":\"0,032421952\",\"COVER\":\"0,017606062\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":148,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":102516,\"TOTAL_VAC_2\":5184,\"TOTAL_VAC_UNK\":0,\"TOTAL\":107700,\"CUMUL_VAC_1\":235285,\"CUMUL_VAC_2\":60186,\"CUMUL_VAC_UNK\":4,\"CUMUL\":295475,\"COVER_1_VAC\":\"0,348125286\",\"COVER\":\"0,089050592\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":149,\"TYPE\":\"AGES\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":150,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":8,\"TOTAL_VAC_2\":28,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":231,\"CUMUL_VAC_2\":147,\"CUMUL_VAC_UNK\":0,\"CUMUL\":378,\"COVER_1_VAC\":\"0,000134533\",\"COVER\":\"8,56E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":151,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":881,\"TOTAL_VAC_2\":1020,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1901,\"CUMUL_VAC_1\":16623,\"CUMUL_VAC_2\":10228,\"CUMUL_VAC_UNK\":0,\"CUMUL\":26851,\"COVER_1_VAC\":\"0,021429649\",\"COVER\":\"0,013185493\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":152,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":7196,\"TOTAL_VAC_2\":9836,\"TOTAL_VAC_UNK\":8,\"TOTAL\":17040,\"CUMUL_VAC_1\":184955,\"CUMUL_VAC_2\":127255,\"CUMUL_VAC_UNK\":29,\"CUMUL\":312239,\"COVER_1_VAC\":\"0,055035435\",\"COVER\":\"0,037866153\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":153,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":29884,\"TOTAL_VAC_2\":5900,\"TOTAL_VAC_UNK\":5,\"TOTAL\":35789,\"CUMUL_VAC_1\":188816,\"CUMUL_VAC_2\":76044,\"CUMUL_VAC_UNK\":12,\"CUMUL\":264872,\"COVER_1_VAC\":\"0,087330678\",\"COVER\":\"0,03517167\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":154,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":13025,\"TOTAL_VAC_2\":3721,\"TOTAL_VAC_UNK\":2,\"TOTAL\":16748,\"CUMUL_VAC_1\":65048,\"CUMUL_VAC_2\":31971,\"CUMUL_VAC_UNK\":7,\"CUMUL\":97026,\"COVER_1_VAC\":\"0,040539437\",\"COVER\":\"0,019925076\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":155,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":87131,\"TOTAL_VAC_2\":12721,\"TOTAL_VAC_UNK\":1,\"TOTAL\":99853,\"CUMUL_VAC_1\":322416,\"CUMUL_VAC_2\":72907,\"CUMUL_VAC_UNK\":5,\"CUMUL\":395328,\"COVER_1_VAC\":\"0,477043424\",\"COVER\":\"0,107872453\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":156,\"TYPE\":\"AGES\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":157,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":12,\"TOTAL_VAC_2\":24,\"TOTAL_VAC_UNK\":0,\"TOTAL\":36,\"CUMUL_VAC_1\":243,\"CUMUL_VAC_2\":171,\"CUMUL_VAC_UNK\":0,\"CUMUL\":414,\"COVER_1_VAC\":\"0,000141522\",\"COVER\":\"9,96E-05\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":158,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1295,\"TOTAL_VAC_2\":626,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1921,\"CUMUL_VAC_1\":17918,\"CUMUL_VAC_2\":10854,\"CUMUL_VAC_UNK\":0,\"CUMUL\":28772,\"COVER_1_VAC\":\"0,023099106\",\"COVER\":\"0,013992505\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":159,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":15654,\"TOTAL_VAC_2\":5917,\"TOTAL_VAC_UNK\":0,\"TOTAL\":21571,\"CUMUL_VAC_1\":200609,\"CUMUL_VAC_2\":133172,\"CUMUL_VAC_UNK\":29,\"CUMUL\":333810,\"COVER_1_VAC\":\"0,059693458\",\"COVER\":\"0,039626823\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":160,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":21641,\"TOTAL_VAC_2\":4163,\"TOTAL_VAC_UNK\":0,\"TOTAL\":25804,\"CUMUL_VAC_1\":210457,\"CUMUL_VAC_2\":80207,\"CUMUL_VAC_UNK\":12,\"CUMUL\":290676,\"COVER_1_VAC\":\"0,097340016\",\"COVER\":\"0,03709713\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":161,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":15400,\"TOTAL_VAC_2\":3461,\"TOTAL_VAC_UNK\":0,\"TOTAL\":18861,\"CUMUL_VAC_1\":80448,\"CUMUL_VAC_2\":35432,\"CUMUL_VAC_UNK\":7,\"CUMUL\":115887,\"COVER_1_VAC\":\"0,050137078\",\"COVER\":\"0,022082052\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":162,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":40062,\"TOTAL_VAC_2\":37236,\"TOTAL_VAC_UNK\":2,\"TOTAL\":77300,\"CUMUL_VAC_1\":362478,\"CUMUL_VAC_2\":110143,\"CUMUL_VAC_UNK\":7,\"CUMUL\":472628,\"COVER_1_VAC\":\"0,536318751\",\"COVER\":\"0,162966459\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":163,\"TYPE\":\"AGES\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":164,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":23,\"TOTAL_VAC_UNK\":0,\"TOTAL\":24,\"CUMUL_VAC_1\":244,\"CUMUL_VAC_2\":194,\"CUMUL_VAC_UNK\":0,\"CUMUL\":438,\"COVER_1_VAC\":\"0,000142104\",\"COVER\":\"0,000112984\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":165,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":227,\"TOTAL_VAC_2\":368,\"TOTAL_VAC_UNK\":1,\"TOTAL\":596,\"CUMUL_VAC_1\":18145,\"CUMUL_VAC_2\":11222,\"CUMUL_VAC_UNK\":1,\"CUMUL\":29368,\"COVER_1_VAC\":\"0,023391745\",\"COVER\":\"0,014466914\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":166,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4049,\"TOTAL_VAC_2\":2951,\"TOTAL_VAC_UNK\":0,\"TOTAL\":7000,\"CUMUL_VAC_1\":204658,\"CUMUL_VAC_2\":136123,\"CUMUL_VAC_UNK\":29,\"CUMUL\":340810,\"COVER_1_VAC\":\"0,060898284\",\"COVER\":\"0,040504926\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":167,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":3998,\"TOTAL_VAC_2\":2237,\"TOTAL_VAC_UNK\":0,\"TOTAL\":6235,\"CUMUL_VAC_1\":214455,\"CUMUL_VAC_2\":82444,\"CUMUL_VAC_UNK\":12,\"CUMUL\":296911,\"COVER_1_VAC\":\"0,099189161\",\"COVER\":\"0,038131781\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":168,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":17855,\"TOTAL_VAC_2\":6734,\"TOTAL_VAC_UNK\":2,\"TOTAL\":24591,\"CUMUL_VAC_1\":98303,\"CUMUL_VAC_2\":42166,\"CUMUL_VAC_UNK\":9,\"CUMUL\":140478,\"COVER_1_VAC\":\"0,061264732\",\"COVER\":\"0,026278839\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":169,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":54324,\"TOTAL_VAC_2\":97308,\"TOTAL_VAC_UNK\":4,\"TOTAL\":151636,\"CUMUL_VAC_1\":416802,\"CUMUL_VAC_2\":207451,\"CUMUL_VAC_UNK\":11,\"CUMUL\":624264,\"COVER_1_VAC\":\"0,616695987\",\"COVER\":\"0,306942383\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":170,\"TYPE\":\"AGES\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":171,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":24,\"TOTAL_VAC_2\":7,\"TOTAL_VAC_UNK\":0,\"TOTAL\":31,\"CUMUL_VAC_1\":268,\"CUMUL_VAC_2\":201,\"CUMUL_VAC_UNK\":0,\"CUMUL\":469,\"COVER_1_VAC\":\"0,000156082\",\"COVER\":\"0,000117061\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":172,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":3104,\"TOTAL_VAC_2\":113,\"TOTAL_VAC_UNK\":0,\"TOTAL\":3217,\"CUMUL_VAC_1\":21249,\"CUMUL_VAC_2\":11335,\"CUMUL_VAC_UNK\":1,\"CUMUL\":32585,\"COVER_1_VAC\":\"0,027393287\",\"COVER\":\"0,014612589\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":173,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":41383,\"TOTAL_VAC_2\":1187,\"TOTAL_VAC_UNK\":0,\"TOTAL\":42570,\"CUMUL_VAC_1\":246041,\"CUMUL_VAC_2\":137310,\"CUMUL_VAC_UNK\":29,\"CUMUL\":383380,\"COVER_1_VAC\":\"0,07321226\",\"COVER\":\"0,040858131\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":174,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":33709,\"TOTAL_VAC_2\":867,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34576,\"CUMUL_VAC_1\":248164,\"CUMUL_VAC_2\":83311,\"CUMUL_VAC_UNK\":12,\"CUMUL\":331487,\"COVER_1_VAC\":\"0,114780159\",\"COVER\":\"0,038532784\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":175,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":52357,\"TOTAL_VAC_2\":2080,\"TOTAL_VAC_UNK\":0,\"TOTAL\":54437,\"CUMUL_VAC_1\":150660,\"CUMUL_VAC_2\":44246,\"CUMUL_VAC_UNK\":9,\"CUMUL\":194915,\"COVER_1_VAC\":\"0,093894841\",\"COVER\":\"0,027575144\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":176,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":124486,\"TOTAL_VAC_2\":16855,\"TOTAL_VAC_UNK\":2,\"TOTAL\":141343,\"CUMUL_VAC_1\":541288,\"CUMUL_VAC_2\":224306,\"CUMUL_VAC_UNK\":13,\"CUMUL\":765607,\"COVER_1_VAC\":\"0,800884203\",\"COVER\":\"0,331880869\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":177,\"TYPE\":\"AGES\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":178,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":7,\"TOTAL_VAC_2\":12,\"TOTAL_VAC_UNK\":0,\"TOTAL\":19,\"CUMUL_VAC_1\":275,\"CUMUL_VAC_2\":213,\"CUMUL_VAC_UNK\":0,\"CUMUL\":488,\"COVER_1_VAC\":\"0,000160158\",\"COVER\":\"0,00012405\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":179,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":617,\"TOTAL_VAC_2\":64,\"TOTAL_VAC_UNK\":1,\"TOTAL\":682,\"CUMUL_VAC_1\":21866,\"CUMUL_VAC_2\":11399,\"CUMUL_VAC_UNK\":2,\"CUMUL\":33267,\"COVER_1_VAC\":\"0,028188696\",\"COVER\":\"0,014695095\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":180,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":4181,\"TOTAL_VAC_2\":735,\"TOTAL_VAC_UNK\":1,\"TOTAL\":4917,\"CUMUL_VAC_1\":250222,\"CUMUL_VAC_2\":138045,\"CUMUL_VAC_UNK\":30,\"CUMUL\":388297,\"COVER_1_VAC\":\"0,074456363\",\"COVER\":\"0,041076838\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":181,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":7431,\"TOTAL_VAC_2\":643,\"TOTAL_VAC_UNK\":1,\"TOTAL\":8075,\"CUMUL_VAC_1\":255595,\"CUMUL_VAC_2\":83954,\"CUMUL_VAC_UNK\":13,\"CUMUL\":339562,\"COVER_1_VAC\":\"0,118217125\",\"COVER\":\"0,038830183\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":182,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":87775,\"TOTAL_VAC_2\":7211,\"TOTAL_VAC_UNK\":1,\"TOTAL\":94987,\"CUMUL_VAC_1\":238435,\"CUMUL_VAC_2\":51457,\"CUMUL_VAC_UNK\":10,\"CUMUL\":289902,\"COVER_1_VAC\":\"0,148598277\",\"COVER\":\"0,032069208\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":183,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":36714,\"TOTAL_VAC_2\":75289,\"TOTAL_VAC_UNK\":3,\"TOTAL\":112006,\"CUMUL_VAC_1\":578002,\"CUMUL_VAC_2\":299595,\"CUMUL_VAC_UNK\":16,\"CUMUL\":877613,\"COVER_1_VAC\":\"0,855205863\",\"COVER\":\"0,443277706\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":184,\"TYPE\":\"AGES\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":185,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":14,\"TOTAL_VAC_2\":1,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15,\"CUMUL_VAC_1\":289,\"CUMUL_VAC_2\":214,\"CUMUL_VAC_UNK\":0,\"CUMUL\":503,\"COVER_1_VAC\":\"0,000168312\",\"COVER\":\"0,000124632\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":186,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":707,\"TOTAL_VAC_2\":105,\"TOTAL_VAC_UNK\":0,\"TOTAL\":812,\"CUMUL_VAC_1\":22573,\"CUMUL_VAC_2\":11504,\"CUMUL_VAC_UNK\":2,\"CUMUL\":34079,\"COVER_1_VAC\":\"0,02910013\",\"COVER\":\"0,014830457\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":187,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8449,\"TOTAL_VAC_2\":843,\"TOTAL_VAC_UNK\":0,\"TOTAL\":9292,\"CUMUL_VAC_1\":258671,\"CUMUL_VAC_2\":138888,\"CUMUL_VAC_UNK\":30,\"CUMUL\":397589,\"COVER_1_VAC\":\"0,076970458\",\"COVER\":\"0,041327682\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":188,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":14812,\"TOTAL_VAC_2\":739,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15551,\"CUMUL_VAC_1\":270407,\"CUMUL_VAC_2\":84693,\"CUMUL_VAC_UNK\":13,\"CUMUL\":355113,\"COVER_1_VAC\":\"0,125067932\",\"COVER\":\"0,039171983\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":189,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":200898,\"TOTAL_VAC_2\":5136,\"TOTAL_VAC_UNK\":0,\"TOTAL\":206034,\"CUMUL_VAC_1\":439333,\"CUMUL_VAC_2\":56593,\"CUMUL_VAC_UNK\":10,\"CUMUL\":495936,\"COVER_1_VAC\":\"0,273802616\",\"COVER\":\"0,035270083\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":190,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":30352,\"TOTAL_VAC_2\":45734,\"TOTAL_VAC_UNK\":3,\"TOTAL\":76089,\"CUMUL_VAC_1\":608354,\"CUMUL_VAC_2\":345329,\"CUMUL_VAC_UNK\":19,\"CUMUL\":953702,\"COVER_1_VAC\":\"0,900114372\",\"COVER\":\"0,510945266\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":191,\"TYPE\":\"AGES\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":192,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":37,\"TOTAL_VAC_2\":2,\"TOTAL_VAC_UNK\":0,\"TOTAL\":39,\"CUMUL_VAC_1\":326,\"CUMUL_VAC_2\":216,\"CUMUL_VAC_UNK\":0,\"CUMUL\":542,\"COVER_1_VAC\":\"0,000189861\",\"COVER\":\"0,000125797\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":193,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":4237,\"TOTAL_VAC_2\":55,\"TOTAL_VAC_UNK\":0,\"TOTAL\":4292,\"CUMUL_VAC_1\":26810,\"CUMUL_VAC_2\":11559,\"CUMUL_VAC_UNK\":2,\"CUMUL\":38371,\"COVER_1_VAC\":\"0,034562286\",\"COVER\":\"0,01490136\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":194,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":88686,\"TOTAL_VAC_2\":471,\"TOTAL_VAC_UNK\":0,\"TOTAL\":89157,\"CUMUL_VAC_1\":347357,\"CUMUL_VAC_2\":139359,\"CUMUL_VAC_UNK\":30,\"CUMUL\":486746,\"COVER_1_VAC\":\"0,103359972\",\"COVER\":\"0,041467834\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":195,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":87557,\"TOTAL_VAC_2\":386,\"TOTAL_VAC_UNK\":0,\"TOTAL\":87943,\"CUMUL_VAC_1\":357964,\"CUMUL_VAC_2\":85079,\"CUMUL_VAC_UNK\":13,\"CUMUL\":443056,\"COVER_1_VAC\":\"0,165564565\",\"COVER\":\"0,039350515\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":196,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":232831,\"TOTAL_VAC_2\":3399,\"TOTAL_VAC_UNK\":1,\"TOTAL\":236231,\"CUMUL_VAC_1\":672164,\"CUMUL_VAC_2\":59992,\"CUMUL_VAC_UNK\":11,\"CUMUL\":732167,\"COVER_1_VAC\":\"0,418908349\",\"COVER\":\"0,03738842\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":197,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":10485,\"TOTAL_VAC_2\":49392,\"TOTAL_VAC_UNK\":1,\"TOTAL\":59878,\"CUMUL_VAC_1\":618839,\"CUMUL_VAC_2\":394721,\"CUMUL_VAC_UNK\":20,\"CUMUL\":1013580,\"COVER_1_VAC\":\"0,915627871\",\"COVER\":\"0,584025165\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":198,\"TYPE\":\"AGES\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":199,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":20,\"TOTAL_VAC_2\":3,\"TOTAL_VAC_UNK\":0,\"TOTAL\":23,\"CUMUL_VAC_1\":346,\"CUMUL_VAC_2\":219,\"CUMUL_VAC_UNK\":0,\"CUMUL\":565,\"COVER_1_VAC\":\"0,000201508\",\"COVER\":\"0,000127544\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":200,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1257,\"TOTAL_VAC_2\":55,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1312,\"CUMUL_VAC_1\":28067,\"CUMUL_VAC_2\":11614,\"CUMUL_VAC_UNK\":2,\"CUMUL\":39683,\"COVER_1_VAC\":\"0,036182756\",\"COVER\":\"0,014972264\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":201,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":10289,\"TOTAL_VAC_2\":496,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10785,\"CUMUL_VAC_1\":357646,\"CUMUL_VAC_2\":139855,\"CUMUL_VAC_UNK\":30,\"CUMUL\":497531,\"COVER_1_VAC\":\"0,106421579\",\"COVER\":\"0,041615424\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":202,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":13844,\"TOTAL_VAC_2\":1565,\"TOTAL_VAC_UNK\":0,\"TOTAL\":15409,\"CUMUL_VAC_1\":371808,\"CUMUL_VAC_2\":86644,\"CUMUL_VAC_UNK\":13,\"CUMUL\":458465,\"COVER_1_VAC\":\"0,171967655\",\"COVER\":\"0,040074354\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":203,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":175168,\"TOTAL_VAC_2\":13066,\"TOTAL_VAC_UNK\":3,\"TOTAL\":188237,\"CUMUL_VAC_1\":847332,\"CUMUL_VAC_2\":73058,\"CUMUL_VAC_UNK\":14,\"CUMUL\":920404,\"COVER_1_VAC\":\"0,52807715\",\"COVER\":\"0,045531457\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":204,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":8408,\"TOTAL_VAC_2\":123039,\"TOTAL_VAC_UNK\":9,\"TOTAL\":131456,\"CUMUL_VAC_1\":627247,\"CUMUL_VAC_2\":517760,\"CUMUL_VAC_UNK\":29,\"CUMUL\":1145036,\"COVER_1_VAC\":\"0,928068262\",\"COVER\":\"0,766072414\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":205,\"TYPE\":\"AGES\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":206,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":43,\"TOTAL_VAC_2\":14,\"TOTAL_VAC_UNK\":0,\"TOTAL\":57,\"CUMUL_VAC_1\":389,\"CUMUL_VAC_2\":233,\"CUMUL_VAC_UNK\":0,\"CUMUL\":622,\"COVER_1_VAC\":\"0,000226551\",\"COVER\":\"0,000135698\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":207,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2606,\"TOTAL_VAC_2\":77,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2683,\"CUMUL_VAC_1\":30673,\"CUMUL_VAC_2\":11691,\"CUMUL_VAC_UNK\":2,\"CUMUL\":42366,\"COVER_1_VAC\":\"0,039542298\",\"COVER\":\"0,015071529\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":208,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":9909,\"TOTAL_VAC_2\":592,\"TOTAL_VAC_UNK\":1,\"TOTAL\":10502,\"CUMUL_VAC_1\":367555,\"CUMUL_VAC_2\":140447,\"CUMUL_VAC_UNK\":31,\"CUMUL\":508033,\"COVER_1_VAC\":\"0,109370113\",\"COVER\":\"0,04179158\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":209,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":32278,\"TOTAL_VAC_2\":2653,\"TOTAL_VAC_UNK\":0,\"TOTAL\":34931,\"CUMUL_VAC_1\":404086,\"CUMUL_VAC_2\":89297,\"CUMUL_VAC_UNK\":13,\"CUMUL\":493396,\"COVER_1_VAC\":\"0,186896791\",\"COVER\":\"0,041301413\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":210,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":292519,\"TOTAL_VAC_2\":45960,\"TOTAL_VAC_UNK\":0,\"TOTAL\":338479,\"CUMUL_VAC_1\":1139851,\"CUMUL_VAC_2\":119018,\"CUMUL_VAC_UNK\":14,\"CUMUL\":1258883,\"COVER_1_VAC\":\"0,710381843\",\"COVER\":\"0,074174805\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":211,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":6112,\"TOTAL_VAC_2\":39646,\"TOTAL_VAC_UNK\":3,\"TOTAL\":45761,\"CUMUL_VAC_1\":633359,\"CUMUL_VAC_2\":557406,\"CUMUL_VAC_UNK\":32,\"CUMUL\":1190797,\"COVER_1_VAC\":\"0,937111515\",\"COVER\":\"0,824732231\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":212,\"TYPE\":\"AGES\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":213,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":98,\"TOTAL_VAC_2\":8,\"TOTAL_VAC_UNK\":0,\"TOTAL\":106,\"CUMUL_VAC_1\":487,\"CUMUL_VAC_2\":241,\"CUMUL_VAC_UNK\":0,\"CUMUL\":728,\"COVER_1_VAC\":\"0,000283626\",\"COVER\":\"0,000140357\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":214,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1687,\"TOTAL_VAC_2\":704,\"TOTAL_VAC_UNK\":0,\"TOTAL\":2391,\"CUMUL_VAC_1\":32360,\"CUMUL_VAC_2\":12395,\"CUMUL_VAC_UNK\":2,\"CUMUL\":44757,\"COVER_1_VAC\":\"0,041717105\",\"COVER\":\"0,015979095\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":215,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":8924,\"TOTAL_VAC_2\":7367,\"TOTAL_VAC_UNK\":0,\"TOTAL\":16291,\"CUMUL_VAC_1\":376479,\"CUMUL_VAC_2\":147814,\"CUMUL_VAC_UNK\":31,\"CUMUL\":524324,\"COVER_1_VAC\":\"0,11202555\",\"COVER\":\"0,043983714\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":216,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":149792,\"TOTAL_VAC_2\":14221,\"TOTAL_VAC_UNK\":0,\"TOTAL\":164013,\"CUMUL_VAC_1\":553878,\"CUMUL_VAC_2\":103518,\"CUMUL_VAC_UNK\":13,\"CUMUL\":657409,\"COVER_1_VAC\":\"0,256178191\",\"COVER\":\"0,047878872\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":217,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":201270,\"TOTAL_VAC_2\":163414,\"TOTAL_VAC_UNK\":7,\"TOTAL\":364691,\"CUMUL_VAC_1\":1341121,\"CUMUL_VAC_2\":282432,\"CUMUL_VAC_UNK\":21,\"CUMUL\":1623574,\"COVER_1_VAC\":\"0,835818021\",\"COVER\":\"0,176018238\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":218,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":5061,\"TOTAL_VAC_2\":31714,\"TOTAL_VAC_UNK\":3,\"TOTAL\":36778,\"CUMUL_VAC_1\":638420,\"CUMUL_VAC_2\":589120,\"CUMUL_VAC_UNK\":35,\"CUMUL\":1227575,\"COVER_1_VAC\":\"0,944599719\",\"COVER\":\"0,871655942\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":219,\"TYPE\":\"AGES\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":220,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":129,\"TOTAL_VAC_2\":31,\"TOTAL_VAC_UNK\":0,\"TOTAL\":160,\"CUMUL_VAC_1\":616,\"CUMUL_VAC_2\":272,\"CUMUL_VAC_UNK\":0,\"CUMUL\":888,\"COVER_1_VAC\":\"0,000358755\",\"COVER\":\"0,000158411\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":221,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":2062,\"TOTAL_VAC_2\":5309,\"TOTAL_VAC_UNK\":1,\"TOTAL\":7372,\"CUMUL_VAC_1\":34422,\"CUMUL_VAC_2\":17704,\"CUMUL_VAC_UNK\":3,\"CUMUL\":52129,\"COVER_1_VAC\":\"0,044375346\",\"COVER\":\"0,022823227\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":222,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":23478,\"TOTAL_VAC_2\":99323,\"TOTAL_VAC_UNK\":4,\"TOTAL\":122805,\"CUMUL_VAC_1\":399957,\"CUMUL_VAC_2\":247137,\"CUMUL_VAC_UNK\":35,\"CUMUL\":647129,\"COVER_1_VAC\":\"0,119011692\",\"COVER\":\"0,073538387\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":223,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":164927,\"TOTAL_VAC_2\":108869,\"TOTAL_VAC_UNK\":4,\"TOTAL\":273800,\"CUMUL_VAC_1\":718805,\"CUMUL_VAC_2\":212387,\"CUMUL_VAC_UNK\":17,\"CUMUL\":931209,\"COVER_1_VAC\":\"0,332459792\",\"COVER\":\"0,098232675\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":224,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":90903,\"TOTAL_VAC_2\":79772,\"TOTAL_VAC_UNK\":3,\"TOTAL\":170678,\"CUMUL_VAC_1\":1432024,\"CUMUL_VAC_2\":362204,\"CUMUL_VAC_UNK\":24,\"CUMUL\":1794252,\"COVER_1_VAC\":\"0,8924709\",\"COVER\":\"0,225734017\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":225,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":3745,\"TOTAL_VAC_2\":9920,\"TOTAL_VAC_UNK\":2,\"TOTAL\":13667,\"CUMUL_VAC_1\":642165,\"CUMUL_VAC_2\":599040,\"CUMUL_VAC_UNK\":37,\"CUMUL\":1241242,\"COVER_1_VAC\":\"0,950140783\",\"COVER\":\"0,886333473\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":226,\"TYPE\":\"AGES\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":227,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":270,\"TOTAL_VAC_2\":16,\"TOTAL_VAC_UNK\":0,\"TOTAL\":286,\"CUMUL_VAC_1\":886,\"CUMUL_VAC_2\":288,\"CUMUL_VAC_UNK\":0,\"CUMUL\":1174,\"COVER_1_VAC\":\"0,000516001\",\"COVER\":\"0,00016773\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":228,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1890,\"TOTAL_VAC_2\":2376,\"TOTAL_VAC_UNK\":2,\"TOTAL\":4268,\"CUMUL_VAC_1\":36312,\"CUMUL_VAC_2\":20080,\"CUMUL_VAC_UNK\":5,\"CUMUL\":56397,\"COVER_1_VAC\":\"0,046811851\",\"COVER\":\"0,025886263\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":229,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":30605,\"TOTAL_VAC_2\":21002,\"TOTAL_VAC_UNK\":2,\"TOTAL\":51609,\"CUMUL_VAC_1\":430562,\"CUMUL_VAC_2\":268139,\"CUMUL_VAC_UNK\":37,\"CUMUL\":698738,\"COVER_1_VAC\":\"0,128118553\",\"COVER\":\"0,079787767\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":230,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":222982,\"TOTAL_VAC_2\":74047,\"TOTAL_VAC_UNK\":4,\"TOTAL\":297033,\"CUMUL_VAC_1\":941787,\"CUMUL_VAC_2\":286434,\"CUMUL_VAC_UNK\":21,\"CUMUL\":1228242,\"COVER_1_VAC\":\"0,435592839\",\"COVER\":\"0,132480698\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":231,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":40994,\"TOTAL_VAC_2\":111236,\"TOTAL_VAC_UNK\":9,\"TOTAL\":152239,\"CUMUL_VAC_1\":1473018,\"CUMUL_VAC_2\":473440,\"CUMUL_VAC_UNK\":33,\"CUMUL\":1946491,\"COVER_1_VAC\":\"0,918019321\",\"COVER\":\"0,295058898\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":232,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":4693,\"TOTAL_VAC_2\":8324,\"TOTAL_VAC_UNK\":1,\"TOTAL\":13018,\"CUMUL_VAC_1\":646858,\"CUMUL_VAC_2\":607364,\"CUMUL_VAC_UNK\":38,\"CUMUL\":1254260,\"COVER_1_VAC\":\"0,957084498\",\"COVER\":\"0,898649578\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":233,\"TYPE\":\"AGES\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":0,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":0,\"CUMUL_VAC_1\":0,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":0,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":234,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"0-17 anos\",\"TOTAL_VAC_1\":213,\"TOTAL_VAC_2\":35,\"TOTAL_VAC_UNK\":0,\"TOTAL\":248,\"CUMUL_VAC_1\":1099,\"CUMUL_VAC_2\":323,\"CUMUL_VAC_UNK\":0,\"CUMUL\":1422,\"COVER_1_VAC\":\"0,000640051\",\"COVER\":\"0,000188113\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":235,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"18-24 anos\",\"TOTAL_VAC_1\":1964,\"TOTAL_VAC_2\":3078,\"TOTAL_VAC_UNK\":0,\"TOTAL\":5042,\"CUMUL_VAC_1\":38276,\"CUMUL_VAC_2\":23158,\"CUMUL_VAC_UNK\":5,\"CUMUL\":61439,\"COVER_1_VAC\":\"0,049343755\",\"COVER\":\"0,029854287\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":236,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"25-49 anos\",\"TOTAL_VAC_1\":24252,\"TOTAL_VAC_2\":16776,\"TOTAL_VAC_UNK\":7,\"TOTAL\":41035,\"CUMUL_VAC_1\":454814,\"CUMUL_VAC_2\":284915,\"CUMUL_VAC_UNK\":44,\"CUMUL\":739773,\"COVER_1_VAC\":\"0,135335008\",\"COVER\":\"0,084779654\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":237,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"50-64 anos\",\"TOTAL_VAC_1\":173756,\"TOTAL_VAC_2\":96299,\"TOTAL_VAC_UNK\":4,\"TOTAL\":270059,\"CUMUL_VAC_1\":1115543,\"CUMUL_VAC_2\":382733,\"CUMUL_VAC_UNK\":25,\"CUMUL\":1498301,\"COVER_1_VAC\":\"0,515958005\",\"COVER\":\"0,177020657\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":238,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"65-79 anos\",\"TOTAL_VAC_1\":23380,\"TOTAL_VAC_2\":201273,\"TOTAL_VAC_UNK\":19,\"TOTAL\":224672,\"CUMUL_VAC_1\":1496398,\"CUMUL_VAC_2\":674713,\"CUMUL_VAC_UNK\":52,\"CUMUL\":2171163,\"COVER_1_VAC\":\"0,932590285\",\"COVER\":\"0,420496946\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":239,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"80 ou mais anos\",\"TOTAL_VAC_1\":4405,\"TOTAL_VAC_2\":6219,\"TOTAL_VAC_UNK\":0,\"TOTAL\":10624,\"CUMUL_VAC_1\":651263,\"CUMUL_VAC_2\":613583,\"CUMUL_VAC_UNK\":38,\"CUMUL\":1264884,\"COVER_1_VAC\":\"0,963602091\",\"COVER\":\"0,907851147\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":240,\"TYPE\":\"AGES\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"Desconhecido\",\"TOTAL_VAC_1\":1,\"TOTAL_VAC_2\":0,\"TOTAL_VAC_UNK\":0,\"TOTAL\":1,\"CUMUL_VAC_1\":2,\"CUMUL_VAC_2\":0,\"CUMUL_VAC_UNK\":0,\"CUMUL\":2,\"COVER_1_VAC\":\"NA\",\"COVER\":\"NA\",\"RECEIVED\":\"NA\",\"DISTRIBUTED\":\"NA\"},{\"\":241,\"TYPE\":\"GENERAL\",\"DATE\":\"08/02/21\",\"YEAR\":2021,\"WEEK\":6,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":40438,\"TOTAL_VAC_2\":98929,\"TOTAL_VAC_UNK\":11,\"TOTAL\":139378,\"CUMUL_VAC_1\":360579,\"CUMUL_VAC_2\":214919,\"CUMUL_VAC_UNK\":18,\"CUMUL\":575516,\"COVER_1_VAC\":\"0,03502158\",\"COVER\":\"0,020874213\",\"RECEIVED\":651900,\"DISTRIBUTED\":571981},{\"\":242,\"TYPE\":\"GENERAL\",\"DATE\":\"15/02/21\",\"YEAR\":2021,\"WEEK\":7,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":103145,\"TOTAL_VAC_2\":49954,\"TOTAL_VAC_UNK\":9,\"TOTAL\":153108,\"CUMUL_VAC_1\":463724,\"CUMUL_VAC_2\":264873,\"CUMUL_VAC_UNK\":27,\"CUMUL\":728624,\"COVER_1_VAC\":\"0,045039637\",\"COVER\":\"0,025726043\",\"RECEIVED\":830730,\"DISTRIBUTED\":718143},{\"\":243,\"TYPE\":\"GENERAL\",\"DATE\":\"22/02/21\",\"YEAR\":2021,\"WEEK\":8,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":176241,\"TOTAL_VAC_2\":20453,\"TOTAL_VAC_UNK\":10,\"TOTAL\":196704,\"CUMUL_VAC_1\":639965,\"CUMUL_VAC_2\":285326,\"CUMUL_VAC_UNK\":37,\"CUMUL\":925328,\"COVER_1_VAC\":\"0,062157212\",\"COVER\":\"0,02771256\",\"RECEIVED\":1002999,\"DISTRIBUTED\":933847},{\"\":244,\"TYPE\":\"GENERAL\",\"DATE\":\"01/03/21\",\"YEAR\":2021,\"WEEK\":9,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":138125,\"TOTAL_VAC_2\":33226,\"TOTAL_VAC_UNK\":16,\"TOTAL\":171367,\"CUMUL_VAC_1\":778090,\"CUMUL_VAC_2\":318552,\"CUMUL_VAC_UNK\":53,\"CUMUL\":1096695,\"COVER_1_VAC\":\"0,075572735\",\"COVER\":\"0,030939667\",\"RECEIVED\":1186389,\"DISTRIBUTED\":1095103},{\"\":245,\"TYPE\":\"GENERAL\",\"DATE\":\"08/03/21\",\"YEAR\":2021,\"WEEK\":10,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":94064,\"TOTAL_VAC_2\":51427,\"TOTAL_VAC_UNK\":2,\"TOTAL\":145493,\"CUMUL_VAC_1\":872154,\"CUMUL_VAC_2\":369979,\"CUMUL_VAC_UNK\":55,\"CUMUL\":1242188,\"COVER_1_VAC\":\"0,084708791\",\"COVER\":\"0,035934564\",\"RECEIVED\":1468929,\"DISTRIBUTED\":1264093},{\"\":246,\"TYPE\":\"GENERAL\",\"DATE\":\"15/03/21\",\"YEAR\":2021,\"WEEK\":11,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":80454,\"TOTAL_VAC_2\":109621,\"TOTAL_VAC_UNK\":7,\"TOTAL\":190082,\"CUMUL_VAC_1\":952608,\"CUMUL_VAC_2\":479600,\"CUMUL_VAC_UNK\":62,\"CUMUL\":1432270,\"COVER_1_VAC\":\"0,092522962\",\"COVER\":\"0,046581608\",\"RECEIVED\":1713540,\"DISTRIBUTED\":1462079},{\"\":247,\"TYPE\":\"GENERAL\",\"DATE\":\"22/03/21\",\"YEAR\":2021,\"WEEK\":12,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":255063,\"TOTAL_VAC_2\":21109,\"TOTAL_VAC_UNK\":2,\"TOTAL\":276174,\"CUMUL_VAC_1\":1207671,\"CUMUL_VAC_2\":500709,\"CUMUL_VAC_UNK\":64,\"CUMUL\":1708444,\"COVER_1_VAC\":\"0,1172962\",\"COVER\":\"0,04863184\",\"RECEIVED\":1883850,\"DISTRIBUTED\":1753999},{\"\":248,\"TYPE\":\"GENERAL\",\"DATE\":\"29/03/21\",\"YEAR\":2021,\"WEEK\":13,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":136725,\"TOTAL_VAC_2\":83954,\"TOTAL_VAC_UNK\":7,\"TOTAL\":220686,\"CUMUL_VAC_1\":1344396,\"CUMUL_VAC_2\":584663,\"CUMUL_VAC_UNK\":71,\"CUMUL\":1929130,\"COVER_1_VAC\":\"0,130575746\",\"COVER\":\"0,056785953\",\"RECEIVED\":2344530,\"DISTRIBUTED\":1996561},{\"\":249,\"TYPE\":\"GENERAL\",\"DATE\":\"05/04/21\",\"YEAR\":2021,\"WEEK\":14,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":255232,\"TOTAL_VAC_2\":52558,\"TOTAL_VAC_UNK\":3,\"TOTAL\":307793,\"CUMUL_VAC_1\":1599628,\"CUMUL_VAC_2\":637221,\"CUMUL_VAC_UNK\":74,\"CUMUL\":2236923,\"COVER_1_VAC\":\"0,155365398\",\"COVER\":\"0,061890699\",\"RECEIVED\":2684460,\"DISTRIBUTED\":2360167},{\"\":250,\"TYPE\":\"GENERAL\",\"DATE\":\"12/04/21\",\"YEAR\":2021,\"WEEK\":15,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":423833,\"TOTAL_VAC_2\":53705,\"TOTAL_VAC_UNK\":2,\"TOTAL\":477540,\"CUMUL_VAC_1\":2023461,\"CUMUL_VAC_2\":690926,\"CUMUL_VAC_UNK\":76,\"CUMUL\":2714463,\"COVER_1_VAC\":\"0,196530583\",\"COVER\":\"0,067106848\",\"RECEIVED\":2983590,\"DISTRIBUTED\":2679813},{\"\":251,\"TYPE\":\"GENERAL\",\"DATE\":\"19/04/21\",\"YEAR\":2021,\"WEEK\":16,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":208986,\"TOTAL_VAC_2\":138224,\"TOTAL_VAC_UNK\":12,\"TOTAL\":347222,\"CUMUL_VAC_1\":2232447,\"CUMUL_VAC_2\":829150,\"CUMUL_VAC_UNK\":88,\"CUMUL\":3061685,\"COVER_1_VAC\":\"0,216828548\",\"COVER\":\"0,080531986\",\"RECEIVED\":3400260,\"DISTRIBUTED\":3039329},{\"\":252,\"TYPE\":\"GENERAL\",\"DATE\":\"26/04/21\",\"YEAR\":2021,\"WEEK\":17,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":343467,\"TOTAL_VAC_2\":88942,\"TOTAL_VAC_UNK\":4,\"TOTAL\":432413,\"CUMUL_VAC_1\":2575914,\"CUMUL_VAC_2\":918092,\"CUMUL_VAC_UNK\":92,\"CUMUL\":3494098,\"COVER_1_VAC\":\"0,250188109\",\"COVER\":\"0,089170563\",\"RECEIVED\":4128420,\"DISTRIBUTED\":3581288},{\"\":253,\"TYPE\":\"GENERAL\",\"DATE\":\"03/05/21\",\"YEAR\":2021,\"WEEK\":18,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":366832,\"TOTAL_VAC_2\":217428,\"TOTAL_VAC_UNK\":10,\"TOTAL\":584270,\"CUMUL_VAC_1\":2942746,\"CUMUL_VAC_2\":1135520,\"CUMUL_VAC_UNK\":102,\"CUMUL\":4078368,\"COVER_1_VAC\":\"0,285817017\",\"COVER\":\"0,110288465\",\"RECEIVED\":4655370,\"DISTRIBUTED\":4171038},{\"\":254,\"TYPE\":\"GENERAL\",\"DATE\":\"10/05/21\",\"YEAR\":2021,\"WEEK\":19,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":285244,\"TOTAL_VAC_2\":303224,\"TOTAL_VAC_UNK\":14,\"TOTAL\":588482,\"CUMUL_VAC_1\":3227990,\"CUMUL_VAC_2\":1438744,\"CUMUL_VAC_UNK\":116,\"CUMUL\":4666850,\"COVER_1_VAC\":\"0,313521613\",\"COVER\":\"0,139739386\",\"RECEIVED\":5197920,\"DISTRIBUTED\":4686071},{\"\":255,\"TYPE\":\"GENERAL\",\"DATE\":\"17/05/21\",\"YEAR\":2021,\"WEEK\":20,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":301434,\"TOTAL_VAC_2\":217001,\"TOTAL_VAC_UNK\":18,\"TOTAL\":518453,\"CUMUL_VAC_1\":3529424,\"CUMUL_VAC_2\":1655745,\"CUMUL_VAC_UNK\":134,\"CUMUL\":5185303,\"COVER_1_VAC\":\"0,342798679\",\"COVER\":\"0,160815815\",\"RECEIVED\":5728470,\"DISTRIBUTED\":5126418},{\"\":256,\"TYPE\":\"GENERAL\",\"DATE\":\"24/05/21\",\"YEAR\":2021,\"WEEK\":21,\"REGION\":\"All\",\"AGEGROUP\":\"All\",\"TOTAL_VAC_1\":227971,\"TOTAL_VAC_2\":323680,\"TOTAL_VAC_UNK\":30,\"TOTAL\":551681,\"CUMUL_VAC_1\":3757395,\"CUMUL_VAC_2\":1979425,\"CUMUL_VAC_UNK\":164,\"CUMUL\":5736984,\"COVER_1_VAC\":\"0,36494058\",\"COVER\":\"0,192253545\",\"RECEIVED\":6254220,\"DISTRIBUTED\":5644760}]");

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