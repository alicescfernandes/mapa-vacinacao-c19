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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T+iY");


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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

/***/ "Njuj":
/***/ (function(module) {

module.exports = JSON.parse("[{\"Data\":1609027200000,\"Inoculacao1\":4963,\"Inoculacao1_Ac\":4963,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":4963,\"Vacinados_Ac\":4963,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609113600000,\"Inoculacao1\":2791,\"Inoculacao1_Ac\":7754,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":2791,\"Vacinados_Ac\":7754,\"FID\":2,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609200000000,\"Inoculacao1\":12614,\"Inoculacao1_Ac\":20368,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":12614,\"Vacinados_Ac\":20368,\"FID\":3,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609286400000,\"Inoculacao1\":10175,\"Inoculacao1_Ac\":30543,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":10175,\"Vacinados_Ac\":30543,\"FID\":4,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609372800000,\"Inoculacao1\":2206,\"Inoculacao1_Ac\":32749,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":2206,\"Vacinados_Ac\":32749,\"FID\":5,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609459200000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":32749,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":null,\"Vacinados_Ac\":32749,\"FID\":6,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609545600000,\"Inoculacao1\":1,\"Inoculacao1_Ac\":32750,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":1,\"Vacinados_Ac\":32750,\"FID\":7,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609632000000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":32750,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":null,\"Vacinados_Ac\":32750,\"FID\":8,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609718400000,\"Inoculacao1\":920,\"Inoculacao1_Ac\":33670,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":920,\"Vacinados_Ac\":33670,\"FID\":9,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609804800000,\"Inoculacao1\":12763,\"Inoculacao1_Ac\":46433,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":12763,\"Vacinados_Ac\":46433,\"FID\":10,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609891200000,\"Inoculacao1\":15021,\"Inoculacao1_Ac\":61454,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":15021,\"Vacinados_Ac\":61454,\"FID\":11,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1609977600000,\"Inoculacao1\":10297,\"Inoculacao1_Ac\":71751,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":10297,\"Vacinados_Ac\":71751,\"FID\":12,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610064000000,\"Inoculacao1\":2503,\"Inoculacao1_Ac\":74254,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":2503,\"Vacinados_Ac\":74254,\"FID\":13,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610150400000,\"Inoculacao1\":98,\"Inoculacao1_Ac\":74352,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":98,\"Vacinados_Ac\":74352,\"FID\":14,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610236800000,\"Inoculacao1\":40,\"Inoculacao1_Ac\":74392,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":40,\"Vacinados_Ac\":74392,\"FID\":15,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610323200000,\"Inoculacao1\":888,\"Inoculacao1_Ac\":75280,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":888,\"Vacinados_Ac\":75280,\"FID\":16,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610409600000,\"Inoculacao1\":10882,\"Inoculacao1_Ac\":86162,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":10882,\"Vacinados_Ac\":86162,\"FID\":17,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610496000000,\"Inoculacao1\":13799,\"Inoculacao1_Ac\":99961,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":13799,\"Vacinados_Ac\":99961,\"FID\":18,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610582400000,\"Inoculacao1\":11150,\"Inoculacao1_Ac\":111111,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":11150,\"Vacinados_Ac\":111111,\"FID\":19,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610668800000,\"Inoculacao1\":7486,\"Inoculacao1_Ac\":118597,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":7486,\"Vacinados_Ac\":118597,\"FID\":20,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610755200000,\"Inoculacao1\":1535,\"Inoculacao1_Ac\":120132,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":1535,\"Vacinados_Ac\":120132,\"FID\":21,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610841600000,\"Inoculacao1\":7,\"Inoculacao1_Ac\":120139,\"Inoculacao2\":1161,\"Inoculacao2_Ac\":1161,\"Vacinados\":1168,\"Vacinados_Ac\":121300,\"FID\":22,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1610928000000,\"Inoculacao1\":2740,\"Inoculacao1_Ac\":122879,\"Inoculacao2\":664,\"Inoculacao2_Ac\":1825,\"Vacinados\":3404,\"Vacinados_Ac\":124704,\"FID\":23,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611014400000,\"Inoculacao1\":16112,\"Inoculacao1_Ac\":138991,\"Inoculacao2\":7618,\"Inoculacao2_Ac\":9443,\"Vacinados\":23730,\"Vacinados_Ac\":148434,\"FID\":24,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611100800000,\"Inoculacao1\":19758,\"Inoculacao1_Ac\":158749,\"Inoculacao2\":9175,\"Inoculacao2_Ac\":18618,\"Vacinados\":28933,\"Vacinados_Ac\":177367,\"FID\":25,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611187200000,\"Inoculacao1\":28130,\"Inoculacao1_Ac\":186879,\"Inoculacao2\":4974,\"Inoculacao2_Ac\":23592,\"Vacinados\":33104,\"Vacinados_Ac\":210471,\"FID\":26,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611273600000,\"Inoculacao1\":23855,\"Inoculacao1_Ac\":210734,\"Inoculacao2\":2404,\"Inoculacao2_Ac\":25996,\"Vacinados\":26259,\"Vacinados_Ac\":236730,\"FID\":27,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611360000000,\"Inoculacao1\":10754,\"Inoculacao1_Ac\":221488,\"Inoculacao2\":4040,\"Inoculacao2_Ac\":30036,\"Vacinados\":14794,\"Vacinados_Ac\":251524,\"FID\":28,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611446400000,\"Inoculacao1\":3658,\"Inoculacao1_Ac\":225146,\"Inoculacao2\":517,\"Inoculacao2_Ac\":30553,\"Vacinados\":4175,\"Vacinados_Ac\":255699,\"FID\":29,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611532800000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":0,\"Vacinados_Ac\":0,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611619200000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":0,\"Vacinados_Ac\":263499,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611705600000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":14914,\"Vacinados_Ac\":278413,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611792000000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":17591,\"Vacinados_Ac\":296004,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611878400000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":0,\"Inoculacao2\":0,\"Inoculacao2_Ac\":0,\"Vacinados\":19733,\"Vacinados_Ac\":315737,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1611964800000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":264772,\"Inoculacao2\":0,\"Inoculacao2_Ac\":65461,\"Vacinados\":14496,\"Vacinados_Ac\":330233,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612051200000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":268386,\"Inoculacao2\":0,\"Inoculacao2_Ac\":68385,\"Vacinados\":6538,\"Vacinados_Ac\":336771,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612137600000,\"Inoculacao1\":0,\"Inoculacao1_Ac\":269814,\"Inoculacao2\":0,\"Inoculacao2_Ac\":68752,\"Vacinados\":1795,\"Vacinados_Ac\":338566,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612224000000,\"Inoculacao1\":1610,\"Inoculacao1_Ac\":271424,\"Inoculacao2\":1943,\"Inoculacao2_Ac\":70695,\"Vacinados\":3553,\"Vacinados_Ac\":342119,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612310400000,\"Inoculacao1\":3669,\"Inoculacao1_Ac\":275093,\"Inoculacao2\":5157,\"Inoculacao2_Ac\":75852,\"Vacinados\":8826,\"Vacinados_Ac\":350945,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612396800000,\"Inoculacao1\":4143,\"Inoculacao1_Ac\":279236,\"Inoculacao2\":9123,\"Inoculacao2_Ac\":84975,\"Vacinados\":13266,\"Vacinados_Ac\":364211,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612483200000,\"Inoculacao1\":5226,\"Inoculacao1_Ac\":284462,\"Inoculacao2\":9941,\"Inoculacao2_Ac\":94916,\"Vacinados\":15167,\"Vacinados_Ac\":379378,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612569600000,\"Inoculacao1\":5840,\"Inoculacao1_Ac\":290302,\"Inoculacao2\":8870,\"Inoculacao2_Ac\":103786,\"Vacinados\":14710,\"Vacinados_Ac\":394088,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612656000000,\"Inoculacao1\":1076,\"Inoculacao1_Ac\":291378,\"Inoculacao2\":740,\"Inoculacao2_Ac\":104526,\"Vacinados\":1816,\"Vacinados_Ac\":395904,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612742400000,\"Inoculacao1\":380,\"Inoculacao1_Ac\":291758,\"Inoculacao2\":87,\"Inoculacao2_Ac\":104613,\"Vacinados\":467,\"Vacinados_Ac\":396371,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612828800000,\"Inoculacao1\":2377,\"Inoculacao1_Ac\":294135,\"Inoculacao2\":1442,\"Inoculacao2_Ac\":106055,\"Vacinados\":3819,\"Vacinados_Ac\":400190,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1612915200000,\"Inoculacao1\":4589,\"Inoculacao1_Ac\":298724,\"Inoculacao2\":10504,\"Inoculacao2_Ac\":116559,\"Vacinados\":15093,\"Vacinados_Ac\":415283,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613001600000,\"Inoculacao1\":4418,\"Inoculacao1_Ac\":303142,\"Inoculacao2\":16519,\"Inoculacao2_Ac\":133078,\"Vacinados\":20937,\"Vacinados_Ac\":436220,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613088000000,\"Inoculacao1\":7573,\"Inoculacao1_Ac\":310715,\"Inoculacao2\":24526,\"Inoculacao2_Ac\":157604,\"Vacinados\":32099,\"Vacinados_Ac\":468319,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613174400000,\"Inoculacao1\":9962,\"Inoculacao1_Ac\":320677,\"Inoculacao2\":27090,\"Inoculacao2_Ac\":184694,\"Vacinados\":37052,\"Vacinados_Ac\":505371,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613260800000,\"Inoculacao1\":8142,\"Inoculacao1_Ac\":328819,\"Inoculacao2\":9836,\"Inoculacao2_Ac\":194530,\"Vacinados\":17978,\"Vacinados_Ac\":523349,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613347200000,\"Inoculacao1\":2502,\"Inoculacao1_Ac\":331321,\"Inoculacao2\":3170,\"Inoculacao2_Ac\":197700,\"Vacinados\":5672,\"Vacinados_Ac\":529021,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613433600000,\"Inoculacao1\":5179,\"Inoculacao1_Ac\":336500,\"Inoculacao2\":5586,\"Inoculacao2_Ac\":203286,\"Vacinados\":10765,\"Vacinados_Ac\":539786,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613520000000,\"Inoculacao1\":10513,\"Inoculacao1_Ac\":347013,\"Inoculacao2\":6032,\"Inoculacao2_Ac\":209318,\"Vacinados\":16545,\"Vacinados_Ac\":556331,\"FID\":1,\"Column7\":\"\",\"Column8\":\"\",\"Column9\":\"\",\"Column10\":\"\"},{\"Data\":1613606400000,\"Inoculacao1\":14418,\"Inoculacao1_Ac\":361431,\"Inoculacao2\":7953,\"Inoculacao2_Ac\":217271,\"Vacinados\":22371,\"Vacinados_Ac\":578702,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613692800000,\"Inoculacao1\":27230,\"Inoculacao1_Ac\":388661,\"Inoculacao2\":12704,\"Inoculacao2_Ac\":229975,\"Vacinados\":39934,\"Vacinados_Ac\":618636,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613779200000,\"Inoculacao1\":24821,\"Inoculacao1_Ac\":413482,\"Inoculacao2\":12954,\"Inoculacao2_Ac\":242929,\"Vacinados\":37775,\"Vacinados_Ac\":656411,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613865600000,\"Inoculacao1\":15538,\"Inoculacao1_Ac\":429020,\"Inoculacao2\":3504,\"Inoculacao2_Ac\":246433,\"Vacinados\":19042,\"Vacinados_Ac\":675453,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1613952000000,\"Inoculacao1\":3394,\"Inoculacao1_Ac\":432414,\"Inoculacao2\":1410,\"Inoculacao2_Ac\":247843,\"Vacinados\":4804,\"Vacinados_Ac\":680257,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614038400000,\"Inoculacao1\":12316,\"Inoculacao1_Ac\":444730,\"Inoculacao2\":1724,\"Inoculacao2_Ac\":249567,\"Vacinados\":14040,\"Vacinados_Ac\":694297,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614124800000,\"Inoculacao1\":24199,\"Inoculacao1_Ac\":468929,\"Inoculacao2\":2221,\"Inoculacao2_Ac\":251788,\"Vacinados\":26420,\"Vacinados_Ac\":720717,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614211200000,\"Inoculacao1\":28111,\"Inoculacao1_Ac\":497040,\"Inoculacao2\":3489,\"Inoculacao2_Ac\":255277,\"Vacinados\":31600,\"Vacinados_Ac\":752317,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614297600000,\"Inoculacao1\":41596,\"Inoculacao1_Ac\":538636,\"Inoculacao2\":3092,\"Inoculacao2_Ac\":258369,\"Vacinados\":44688,\"Vacinados_Ac\":797005,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614384000000,\"Inoculacao1\":35426,\"Inoculacao1_Ac\":574062,\"Inoculacao2\":5456,\"Inoculacao2_Ac\":263825,\"Vacinados\":40882,\"Vacinados_Ac\":837887,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614470400000,\"Inoculacao1\":22750,\"Inoculacao1_Ac\":596812,\"Inoculacao2\":1285,\"Inoculacao2_Ac\":265110,\"Vacinados\":24035,\"Vacinados_Ac\":861922,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614556800000,\"Inoculacao1\":6773,\"Inoculacao1_Ac\":603585,\"Inoculacao2\":256,\"Inoculacao2_Ac\":265366,\"Vacinados\":7029,\"Vacinados_Ac\":868951,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614643200000,\"Inoculacao1\":14808,\"Inoculacao1_Ac\":618393,\"Inoculacao2\":1350,\"Inoculacao2_Ac\":266716,\"Vacinados\":16158,\"Vacinados_Ac\":885109,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614729600000,\"Inoculacao1\":14057,\"Inoculacao1_Ac\":632450,\"Inoculacao2\":1665,\"Inoculacao2_Ac\":268381,\"Vacinados\":15722,\"Vacinados_Ac\":900831,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614816000000,\"Inoculacao1\":23269,\"Inoculacao1_Ac\":655719,\"Inoculacao2\":5033,\"Inoculacao2_Ac\":273414,\"Vacinados\":28302,\"Vacinados_Ac\":929133,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614902400000,\"Inoculacao1\":37241,\"Inoculacao1_Ac\":692960,\"Inoculacao2\":5809,\"Inoculacao2_Ac\":279223,\"Vacinados\":43050,\"Vacinados_Ac\":972183,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1614988800000,\"Inoculacao1\":8202,\"Inoculacao1_Ac\":724202,\"Inoculacao2\":3830,\"Inoculacao2_Ac\":287830,\"Vacinados\":12032,\"Vacinados_Ac\":1012032,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615075200000,\"Inoculacao1\":13004,\"Inoculacao1_Ac\":737206,\"Inoculacao2\":4153,\"Inoculacao2_Ac\":291983,\"Vacinados\":17157,\"Vacinados_Ac\":1029189,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615161600000,\"Inoculacao1\":2556,\"Inoculacao1_Ac\":739762,\"Inoculacao2\":1355,\"Inoculacao2_Ac\":293338,\"Vacinados\":3911,\"Vacinados_Ac\":1033100,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615248000000,\"Inoculacao1\":8813,\"Inoculacao1_Ac\":748575,\"Inoculacao2\":2178,\"Inoculacao2_Ac\":295516,\"Vacinados\":10991,\"Vacinados_Ac\":1044091,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615334400000,\"Inoculacao1\":9088,\"Inoculacao1_Ac\":757663,\"Inoculacao2\":1906,\"Inoculacao2_Ac\":297422,\"Vacinados\":10994,\"Vacinados_Ac\":1055085,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615420800000,\"Inoculacao1\":14680,\"Inoculacao1_Ac\":772343,\"Inoculacao2\":8998,\"Inoculacao2_Ac\":306420,\"Vacinados\":23678,\"Vacinados_Ac\":1078763,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615507200000,\"Inoculacao1\":20819,\"Inoculacao1_Ac\":793162,\"Inoculacao2\":14303,\"Inoculacao2_Ac\":320723,\"Vacinados\":35122,\"Vacinados_Ac\":1113885,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1615593600000,\"Inoculacao1\":813380,\"Inoculacao1_Ac\":813380,\"Inoculacao2\":334195,\"Inoculacao2_Ac\":334195,\"Vacinados\":1147575,\"Vacinados_Ac\":1147575,\"FID\":1},{\"Data\":1615680000000,\"Inoculacao1\":10933,\"Inoculacao1_Ac\":824313,\"Inoculacao2\":5365,\"Inoculacao2_Ac\":339560,\"Vacinados\":16298,\"Vacinados_Ac\":1163873,\"FID\":1},{\"Data\":1615766400000,\"Inoculacao1\":3195,\"Inoculacao1_Ac\":827508,\"Inoculacao2\":1147,\"Inoculacao2_Ac\":340707,\"Vacinados\":1147,\"Vacinados_Ac\":1168215,\"FID\":1},{\"Data\":1615852800000,\"Inoculacao1\":21956,\"Inoculacao1_Ac\":849464,\"Inoculacao2\":3015,\"Inoculacao2_Ac\":343722,\"Vacinados\":24971,\"Vacinados_Ac\":1193186,\"FID\":1},{\"Data\":1615939200000,\"Inoculacao1\":1558,\"Inoculacao1_Ac\":851022,\"Inoculacao2\":5947,\"Inoculacao2_Ac\":349669,\"Vacinados\":7505,\"Vacinados_Ac\":1200691,\"FID\":1},{\"Data\":1616025600000,\"Inoculacao1\":12548,\"Inoculacao1_Ac\":863570,\"Inoculacao2\":21897,\"Inoculacao2_Ac\":371566,\"Vacinados\":34445,\"Vacinados_Ac\":1235136,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616112000000,\"Inoculacao1\":11920,\"Inoculacao1_Ac\":875490,\"Inoculacao2\":33353,\"Inoculacao2_Ac\":404919,\"Vacinados\":45273,\"Vacinados_Ac\":1280409,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616198400000,\"Inoculacao1\":16882,\"Inoculacao1_Ac\":892372,\"Inoculacao2\":27975,\"Inoculacao2_Ac\":432894,\"Vacinados\":44857,\"Vacinados_Ac\":1325266,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616284800000,\"Inoculacao1\":10155,\"Inoculacao1_Ac\":902527,\"Inoculacao2\":12910,\"Inoculacao2_Ac\":445804,\"Vacinados\":23065,\"Vacinados_Ac\":1348331,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616371200000,\"Inoculacao1\":1437,\"Inoculacao1_Ac\":903964,\"Inoculacao2\":1748,\"Inoculacao2_Ac\":447552,\"Vacinados\":3185,\"Vacinados_Ac\":1351516,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616457600000,\"Inoculacao1\":10094,\"Inoculacao1_Ac\":914058,\"Inoculacao2\":7632,\"Inoculacao2_Ac\":455184,\"Vacinados\":17726,\"Vacinados_Ac\":1369242,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616544000000,\"Inoculacao1\":20237,\"Inoculacao1_Ac\":934295,\"Inoculacao2\":2072,\"Inoculacao2_Ac\":457256,\"Vacinados\":22309,\"Vacinados_Ac\":1391551,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616630400000,\"Inoculacao1\":38886,\"Inoculacao1_Ac\":973181,\"Inoculacao2\":3607,\"Inoculacao2_Ac\":460863,\"Vacinados\":42493,\"Vacinados_Ac\":1434044,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616803200000,\"Inoculacao1\":28252,\"Inoculacao1_Ac\":1068361,\"Inoculacao2\":2456,\"Inoculacao2_Ac\":467823,\"Vacinados\":30708,\"Vacinados_Ac\":1536184,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616889600000,\"Inoculacao1\":61897,\"Inoculacao1_Ac\":1130258,\"Inoculacao2\":1518,\"Inoculacao2_Ac\":469341,\"Vacinados\":63415,\"Vacinados_Ac\":1599599,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1616972400000,\"Inoculacao1\":18499,\"Inoculacao1_Ac\":1148757,\"Inoculacao2\":301,\"Inoculacao2_Ac\":469642,\"Vacinados\":18800,\"Vacinados_Ac\":1618399,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617058800000,\"Inoculacao1\":20919,\"Inoculacao1_Ac\":1169676,\"Inoculacao2\":2628,\"Inoculacao2_Ac\":472270,\"Vacinados\":23547,\"Vacinados_Ac\":1641946,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617145200000,\"Inoculacao1\":27351,\"Inoculacao1_Ac\":1197027,\"Inoculacao2\":3596,\"Inoculacao2_Ac\":475866,\"Vacinados\":30947,\"Vacinados_Ac\":1672893,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617231600000,\"Inoculacao1\":13969,\"Inoculacao1_Ac\":1210996,\"Inoculacao2\":9707,\"Inoculacao2_Ac\":485573,\"Vacinados\":23676,\"Vacinados_Ac\":1696569,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617318000000,\"Inoculacao1\":41233,\"Inoculacao1_Ac\":1252229,\"Inoculacao2\":42048,\"Inoculacao2_Ac\":527621,\"Vacinados\":83281,\"Vacinados_Ac\":1779850,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"FID\":1},{\"Data\":1617408000000,\"Inoculacao1\":18678,\"Inoculacao1_Ac\":1270907,\"Inoculacao2\":16756,\"Inoculacao2_Ac\":544377,\"Vacinados\":35434,\"Vacinados_Ac\":1815284,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"FID\":1},{\"Data\":1617494400000,\"Inoculacao1\":10811,\"Inoculacao1_Ac\":1281718,\"Inoculacao2\":7123,\"Inoculacao2_Ac\":551500,\"Vacinados\":17934,\"Vacinados_Ac\":1833218,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"FID\":1},{\"Data\":1617580800000,\"Inoculacao1\":1238,\"Inoculacao1_Ac\":1282956,\"Inoculacao2\":369,\"Inoculacao2_Ac\":551869,\"Vacinados\":1607,\"Vacinados_Ac\":1834825,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"FID\":1},{\"Data\":1617667200000,\"Inoculacao1\":26725,\"Inoculacao1_Ac\":1309681,\"Inoculacao2\":5920,\"Inoculacao2_Ac\":557789,\"Vacinados\":32645,\"Vacinados_Ac\":1867470,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"FID\":1},{\"Data\":1617753600000,\"Inoculacao1\":36636,\"Inoculacao1_Ac\":1346317,\"Inoculacao2\":3082,\"Inoculacao2_Ac\":560871,\"Vacinados\":39718,\"Vacinados_Ac\":1907188,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"FID\":1},{\"Data\":1617840000000,\"Inoculacao1\":51409,\"Inoculacao1_Ac\":1397726,\"Inoculacao2\":10439,\"Inoculacao2_Ac\":571310,\"Vacinados\":61848,\"Vacinados_Ac\":1969036,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"FID\":1},{\"Data\":1617926400000,\"Inoculacao1\":55486,\"Inoculacao1_Ac\":1453212,\"Inoculacao2\":15006,\"Inoculacao2_Ac\":586316,\"Vacinados\":70492,\"Vacinados_Ac\":2039528,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"FID\":1},{\"Data\":1618012800000,\"Inoculacao1\":56974,\"Inoculacao1_Ac\":1510186,\"Inoculacao2\":12585,\"Inoculacao2_Ac\":598901,\"Vacinados\":69559,\"Vacinados_Ac\":2109087,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618185600000,\"Inoculacao1\":2239,\"Inoculacao1_Ac\":1523230,\"Inoculacao2\":584,\"Inoculacao2_Ac\":601591,\"Vacinados\":2823,\"Vacinados_Ac\":2124821,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618272000000,\"Inoculacao1\":29822,\"Inoculacao1_Ac\":1553052,\"Inoculacao2\":2162,\"Inoculacao2_Ac\":603753,\"Vacinados\":31984,\"Vacinados_Ac\":2156805,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618358400000,\"Inoculacao1\":42447,\"Inoculacao1_Ac\":1595499,\"Inoculacao2\":1780,\"Inoculacao2_Ac\":605533,\"Vacinados\":44227,\"Vacinados_Ac\":2201032,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618444800000,\"Inoculacao1\":52660,\"Inoculacao1_Ac\":1648159,\"Inoculacao2\":10893,\"Inoculacao2_Ac\":616426,\"Vacinados\":63553,\"Vacinados_Ac\":2264585,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618531200000,\"Inoculacao1\":59513,\"Inoculacao1_Ac\":1707672,\"Inoculacao2\":10131,\"Inoculacao2_Ac\":626557,\"Vacinados\":69644,\"Vacinados_Ac\":2334229,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618617600000,\"Inoculacao1\":47840,\"Inoculacao1_Ac\":1755512,\"Inoculacao2\":19955,\"Inoculacao2_Ac\":646512,\"Vacinados\":67795,\"Vacinados_Ac\":2402024,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618704000000,\"Inoculacao1\":113888,\"Inoculacao1_Ac\":1869400,\"Inoculacao2\":4930,\"Inoculacao2_Ac\":651442,\"Vacinados\":118818,\"Vacinados_Ac\":2520842,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618790400000,\"Inoculacao1\":64454,\"Inoculacao1_Ac\":1933854,\"Inoculacao2\":1432,\"Inoculacao2_Ac\":652874,\"Vacinados\":65886,\"Vacinados_Ac\":2586728,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618876800000,\"Inoculacao1\":21197,\"Inoculacao1_Ac\":1955051,\"Inoculacao2\":11167,\"Inoculacao2_Ac\":664041,\"Vacinados\":32364,\"Vacinados_Ac\":2619092,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618963200000,\"Inoculacao1\":29237,\"Inoculacao1_Ac\":1984288,\"Inoculacao2\":8976,\"Inoculacao2_Ac\":673017,\"Vacinados\":38213,\"Vacinados_Ac\":2657305,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1618963200000,\"Inoculacao1\":29982,\"Inoculacao1_Ac\":2014270,\"Inoculacao2\":23887,\"Inoculacao2_Ac\":696904,\"Vacinados\":53869,\"Vacinados_Ac\":2711174,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619132400000,\"Inoculacao1\":28477,\"Inoculacao1_Ac\":2042747,\"Inoculacao2\":39331,\"Inoculacao2_Ac\":736235,\"Vacinados\":67808,\"Vacinados_Ac\":2778982,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619218800000,\"Inoculacao1\":39621,\"Inoculacao1_Ac\":2082368,\"Inoculacao2\":37935,\"Inoculacao2_Ac\":774170,\"Vacinados\":77556,\"Vacinados_Ac\":2856538,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619305200000,\"Inoculacao1\":31331,\"Inoculacao1_Ac\":2113699,\"Inoculacao2\":12282,\"Inoculacao2_Ac\":786452,\"Vacinados\":43613,\"Vacinados_Ac\":2900151,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619391600000,\"Inoculacao1\":12022,\"Inoculacao1_Ac\":2125721,\"Inoculacao2\":1722,\"Inoculacao2_Ac\":788174,\"Vacinados\":13744,\"Vacinados_Ac\":2913895,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619478000000,\"Inoculacao1\":40282,\"Inoculacao1_Ac\":2166003,\"Inoculacao2\":8617,\"Inoculacao2_Ac\":796791,\"Vacinados\":48899,\"Vacinados_Ac\":2962794,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619564400000,\"Inoculacao1\":39181,\"Inoculacao1_Ac\":2205184,\"Inoculacao2\":10200,\"Inoculacao2_Ac\":806991,\"Vacinados\":49381,\"Vacinados_Ac\":3012175,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619650800000,\"Inoculacao1\":53913,\"Inoculacao1_Ac\":2259097,\"Inoculacao2\":18858,\"Inoculacao2_Ac\":825849,\"Vacinados\":72771,\"Vacinados_Ac\":3084946,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619737200000,\"Inoculacao1\":62576,\"Inoculacao1_Ac\":2321673,\"Inoculacao2\":18231,\"Inoculacao2_Ac\":844080,\"Vacinados\":80807,\"Vacinados_Ac\":3165753,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619823600000,\"Inoculacao1\":69275,\"Inoculacao1_Ac\":2390948,\"Inoculacao2\":17028,\"Inoculacao2_Ac\":861108,\"Vacinados\":86303,\"Vacinados_Ac\":3252056,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619910000000,\"Inoculacao1\":42060,\"Inoculacao1_Ac\":2433008,\"Inoculacao2\":9444,\"Inoculacao2_Ac\":870552,\"Vacinados\":51504,\"Vacinados_Ac\":3303560,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1619996400000,\"Inoculacao1\":18598,\"Inoculacao1_Ac\":2451606,\"Inoculacao2\":2127,\"Inoculacao2_Ac\":872679,\"Vacinados\":20725,\"Vacinados_Ac\":3324285,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620082800000,\"Inoculacao1\":51444,\"Inoculacao1_Ac\":2503050,\"Inoculacao2\":13616,\"Inoculacao2_Ac\":886295,\"Vacinados\":65060,\"Vacinados_Ac\":3389345,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620169200000,\"Inoculacao1\":60198,\"Inoculacao1_Ac\":2563248,\"Inoculacao2\":16909,\"Inoculacao2_Ac\":903204,\"Vacinados\":77107,\"Vacinados_Ac\":3466452,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620428400000,\"Inoculacao1\":47432,\"Inoculacao1_Ac\":2708964,\"Inoculacao2\":56818,\"Inoculacao2_Ac\":1053691,\"Vacinados\":104250,\"Vacinados_Ac\":3762655,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620514800000,\"Inoculacao1\":68597,\"Inoculacao1_Ac\":2777561,\"Inoculacao2\":13888,\"Inoculacao2_Ac\":1067579,\"Vacinados\":82485,\"Vacinados_Ac\":3845140,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620601200000,\"Inoculacao1\":37222,\"Inoculacao1_Ac\":2814783,\"Inoculacao2\":1690,\"Inoculacao2_Ac\":1069269,\"Vacinados\":38912,\"Vacinados_Ac\":3884052,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620687600000,\"Inoculacao1\":58861,\"Inoculacao1_Ac\":2873644,\"Inoculacao2\":19685,\"Inoculacao2_Ac\":1088954,\"Vacinados\":78546,\"Vacinados_Ac\":3962598,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620774000000,\"Inoculacao1\":53244,\"Inoculacao1_Ac\":2926888,\"Inoculacao2\":16067,\"Inoculacao2_Ac\":1105021,\"Vacinados\":69311,\"Vacinados_Ac\":4031909,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620860400000,\"Inoculacao1\":53282,\"Inoculacao1_Ac\":2980170,\"Inoculacao2\":15117,\"Inoculacao2_Ac\":1120138,\"Vacinados\":68399,\"Vacinados_Ac\":4100308,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1620946800000,\"Inoculacao1\":52900,\"Inoculacao1_Ac\":3033070,\"Inoculacao2\":19597,\"Inoculacao2_Ac\":1139735,\"Vacinados\":72497,\"Vacinados_Ac\":4172805,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621033200000,\"Inoculacao1\":23649,\"Inoculacao1_Ac\":3056719,\"Inoculacao2\":56192,\"Inoculacao2_Ac\":1195927,\"Vacinados\":79842,\"Vacinados_Ac\":4252647,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621119600000,\"Inoculacao1\":6022,\"Inoculacao1_Ac\":3062741,\"Inoculacao2\":123828,\"Inoculacao2_Ac\":1319755,\"Vacinados\":129850,\"Vacinados_Ac\":4382497,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621206000000,\"Inoculacao1\":37454,\"Inoculacao1_Ac\":3100195,\"Inoculacao2\":26704,\"Inoculacao2_Ac\":1346459,\"Vacinados\":64157,\"Vacinados_Ac\":4446654,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621292400000,\"Inoculacao1\":47775,\"Inoculacao1_Ac\":3147970,\"Inoculacao2\":20695,\"Inoculacao2_Ac\":1367154,\"Vacinados\":68470,\"Vacinados_Ac\":4515124,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621378800000,\"Inoculacao1\":55935,\"Inoculacao1_Ac\":3203905,\"Inoculacao2\":23561,\"Inoculacao2_Ac\":1390715,\"Vacinados\":79496,\"Vacinados_Ac\":4594620,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621465200000,\"Inoculacao1\":52747,\"Inoculacao1_Ac\":3256652,\"Inoculacao2\":26549,\"Inoculacao2_Ac\":1417264,\"Vacinados\":79296,\"Vacinados_Ac\":4673916,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621551600000,\"Inoculacao1\":54407,\"Inoculacao1_Ac\":3311059,\"Inoculacao2\":28244,\"Inoculacao2_Ac\":1445508,\"Vacinados\":82651,\"Vacinados_Ac\":4756567,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621638000000,\"Inoculacao1\":49340,\"Inoculacao1_Ac\":3360399,\"Inoculacao2\":36114,\"Inoculacao2_Ac\":1481622,\"Vacinados\":85454,\"Vacinados_Ac\":4842021,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621724400000,\"Inoculacao1\":36529,\"Inoculacao1_Ac\":3396928,\"Inoculacao2\":34537,\"Inoculacao2_Ac\":1516159,\"Vacinados\":71066,\"Vacinados_Ac\":4913087,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621810800000,\"Inoculacao1\":16540,\"Inoculacao1_Ac\":3413468,\"Inoculacao2\":12337,\"Inoculacao2_Ac\":1528496,\"Vacinados\":28877,\"Vacinados_Ac\":4941964,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621897200000,\"Inoculacao1\":43522,\"Inoculacao1_Ac\":3456990,\"Inoculacao2\":24424,\"Inoculacao2_Ac\":1552920,\"Vacinados\":67946,\"Vacinados_Ac\":5009910,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1621983600000,\"Inoculacao1\":49480,\"Inoculacao1_Ac\":3506470,\"Inoculacao2\":19322,\"Inoculacao2_Ac\":1572242,\"Vacinados\":68802,\"Vacinados_Ac\":5078712,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622070000000,\"Inoculacao1\":44393,\"Inoculacao1_Ac\":3550863,\"Inoculacao2\":43451,\"Inoculacao2_Ac\":1615693,\"Vacinados\":87844,\"Vacinados_Ac\":5166556,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622156400000,\"Inoculacao1\":41859,\"Inoculacao1_Ac\":3592722,\"Inoculacao2\":57160,\"Inoculacao2_Ac\":1672853,\"Vacinados\":99019,\"Vacinados_Ac\":5265575,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622242800000,\"Inoculacao1\":39382,\"Inoculacao1_Ac\":3632104,\"Inoculacao2\":64376,\"Inoculacao2_Ac\":1737229,\"Vacinados\":103758,\"Vacinados_Ac\":5369333,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622329200000,\"Inoculacao1\":34112,\"Inoculacao1_Ac\":3666216,\"Inoculacao2\":39137,\"Inoculacao2_Ac\":1776366,\"Vacinados\":73249,\"Vacinados_Ac\":5442582,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622415600000,\"Inoculacao1\":18605,\"Inoculacao1_Ac\":3684821,\"Inoculacao2\":11302,\"Inoculacao2_Ac\":1787668,\"Vacinados\":29907,\"Vacinados_Ac\":5472489,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622502000000,\"Inoculacao1\":32055,\"Inoculacao1_Ac\":3716876,\"Inoculacao2\":38065,\"Inoculacao2_Ac\":1825733,\"Vacinados\":70120,\"Vacinados_Ac\":5542609,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622588400000,\"Inoculacao1\":41640,\"Inoculacao1_Ac\":3758516,\"Inoculacao2\":47116,\"Inoculacao2_Ac\":1872849,\"Vacinados\":88756,\"Vacinados_Ac\":5631365,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622674800000,\"Inoculacao1\":53190,\"Inoculacao1_Ac\":3811706,\"Inoculacao2\":36291,\"Inoculacao2_Ac\":1909140,\"Vacinados\":89481,\"Vacinados_Ac\":5720846,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622761200000,\"Inoculacao1\":41859,\"Inoculacao1_Ac\":3853565,\"Inoculacao2\":29785,\"Inoculacao2_Ac\":1938925,\"Vacinados\":71644,\"Vacinados_Ac\":5792490,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622847600000,\"Inoculacao1\":49047,\"Inoculacao1_Ac\":3902612,\"Inoculacao2\":41626,\"Inoculacao2_Ac\":1980551,\"Vacinados\":90673,\"Vacinados_Ac\":5883163,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1622934000000,\"Inoculacao1\":35830,\"Inoculacao1_Ac\":3938442,\"Inoculacao2\":45100,\"Inoculacao2_Ac\":2025651,\"Vacinados\":80930,\"Vacinados_Ac\":5964093,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623020400000,\"Inoculacao1\":20239,\"Inoculacao1_Ac\":3958681,\"Inoculacao2\":21813,\"Inoculacao2_Ac\":2047464,\"Vacinados\":42052,\"Vacinados_Ac\":6006145,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623106800000,\"Inoculacao1\":53005,\"Inoculacao1_Ac\":4011686,\"Inoculacao2\":51210,\"Inoculacao2_Ac\":2098674,\"Vacinados\":104215,\"Vacinados_Ac\":6110360,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623193200000,\"Inoculacao1\":61602,\"Inoculacao1_Ac\":4073288,\"Inoculacao2\":33901,\"Inoculacao2_Ac\":2132575,\"Vacinados\":95503,\"Vacinados_Ac\":6205863,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623279600000,\"Inoculacao1\":65377,\"Inoculacao1_Ac\":4138665,\"Inoculacao2\":33940,\"Inoculacao2_Ac\":2166515,\"Vacinados\":99317,\"Vacinados_Ac\":6305180,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623366000000,\"Inoculacao1\":74118,\"Inoculacao1_Ac\":4212783,\"Inoculacao2\":38271,\"Inoculacao2_Ac\":2204786,\"Vacinados\":112389,\"Vacinados_Ac\":6417569,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623452400000,\"Inoculacao1\":30754,\"Inoculacao1_Ac\":4243537,\"Inoculacao2\":25690,\"Inoculacao2_Ac\":2230476,\"Vacinados\":56444,\"Vacinados_Ac\":6474013,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623538800000,\"Inoculacao1\":65007,\"Inoculacao1_Ac\":4308544,\"Inoculacao2\":6016,\"Inoculacao2_Ac\":2236492,\"Vacinados\":71023,\"Vacinados_Ac\":6545036,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623625200000,\"Inoculacao1\":21700,\"Inoculacao1_Ac\":4330244,\"Inoculacao2\":6070,\"Inoculacao2_Ac\":2242562,\"Vacinados\":27770,\"Vacinados_Ac\":6572806,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623711600000,\"Inoculacao1\":57447,\"Inoculacao1_Ac\":4387691,\"Inoculacao2\":35722,\"Inoculacao2_Ac\":2278284,\"Vacinados\":93169,\"Vacinados_Ac\":6665975,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623801600000,\"Inoculacao1\":50717,\"Inoculacao1_Ac\":4438408,\"Inoculacao2\":51701,\"Inoculacao2_Ac\":2329985,\"Vacinados\":102418,\"Vacinados_Ac\":6768393,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623884400000,\"Inoculacao1\":61717,\"Inoculacao1_Ac\":4500125,\"Inoculacao2\":49319,\"Inoculacao2_Ac\":2379304,\"Vacinados\":111036,\"Vacinados_Ac\":6879429,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1623970800000,\"Inoculacao1\":98424,\"Inoculacao1_Ac\":4598549,\"Inoculacao2\":69896,\"Inoculacao2_Ac\":2449200,\"Vacinados\":168320,\"Vacinados_Ac\":7047749,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1624057200000,\"Inoculacao1\":23397,\"Inoculacao1_Ac\":4621946,\"Inoculacao2\":27448,\"Inoculacao2_Ac\":2476648,\"Vacinados\":50845,\"Vacinados_Ac\":7098594,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1624143600000,\"Inoculacao1\":47359,\"Inoculacao1_Ac\":4669305,\"Inoculacao2\":91118,\"Inoculacao2_Ac\":2567766,\"Vacinados\":138477,\"Vacinados_Ac\":7237071,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1624230000000,\"Inoculacao1\":58213,\"Inoculacao1_Ac\":4727518,\"Inoculacao2\":40697,\"Inoculacao2_Ac\":2608463,\"Vacinados\":98910,\"Vacinados_Ac\":7335981,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1624316400000,\"Inoculacao1\":15514,\"Inoculacao1_Ac\":4743032,\"Inoculacao2\":15597,\"Inoculacao2_Ac\":2624060,\"Vacinados\":31111,\"Vacinados_Ac\":7367092,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1},{\"Data\":1624402800000,\"Inoculacao1\":55172,\"Inoculacao1_Ac\":4798204,\"Inoculacao2\":51448,\"Inoculacao2_Ac\":2675508,\"Vacinados\":106620,\"Vacinados_Ac\":7473712,\"Column7\":null,\"Column8\":null,\"Column9\":null,\"Column10\":null,\"Column11\":null,\"Column12\":null,\"Column13\":null,\"Column14\":null,\"Column15\":null,\"Column16\":null,\"Column17\":null,\"Column18\":null,\"FID\":1}]");

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
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* trackPlausible */ "i"])(req);
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

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":12435,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

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
  '07/06/2021': '07/06 a 13/06'
};

/***/ })

/******/ });