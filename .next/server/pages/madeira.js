module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("M+4D");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "5PhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function Card({
  children,
  allowOverflow,
  isUpdating,
  textLeft
}) {
  let styles2 = {};
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_align_left] = textLeft;
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_graph_updated] = isUpdating;
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_chart] = allowOverflow;
  let className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_graph, 'card-shadow', styles2);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: className,
      children: children
    })
  });
}

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9BaP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinadosPorDia; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xPX6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GyP+");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5PhN");






function VacinadosPorDia({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  let {
    values,
    labels,
    valuesIn1,
    valuesIn2
  } = statistics.getDiariosInoculacoes();
  let {
    values: values2
  } = statistics.getMediaMovelDiaria(7);
  let [foreground, color_1, color_2,, color_4] = colors;
  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const data = canvas => {
    if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"]) {
      canvas.parentNode.style.width = _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"]) {
        canvas.parentNode.style.width = _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: labels,
      datasets: [{
        label: 'Vacinas diárias - Média movel de 7 dias',
        fill: false,
        lineTension: 0.5,
        overlayBars: true,
        type: 'line',
        lineBorder: 1,
        borderWidth: 3,
        borderColor: color_4,
        borderJoinStyle: 'miter',
        pointBorderColor: color_4,
        pointBackgroundColor: color_4,
        pointBorderWidth: 1,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values2,
        order: 1
      }, {
        label: 'Inoculação - 2ª Dose',
        fill: false,
        type: 'bar',
        overlayBars: true,
        backgroundColor: foreground,
        data: valuesIn2,
        order: 2,
        display: false,
        stack: 'stack0'
      }, {
        label: 'Inoculação - 1ª Dose',
        backgroundColor: color_1,
        borderColor: color_1,
        data: valuesIn1,
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }, {
        label: 'Vacinas Totais',
        type: 'bar',
        overlayBars: true,
        backgroundColor: color_2,
        data: values,
        order: 4,
        yAxisID: 'total',
        stack: 'stack0'
      }]
    };
  };

  let numberFormatter = new Intl.NumberFormat();

  const options = () => {
    return {
      layout: {
        padding: -5
      },
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
        }
      },
      legend: {
        position: 'bottom',
        align: 'start'
      },
      animation: {
        duration: 1000
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label + ': ' + numberFormatter.format(parseInt(tooltipItem.value)).replace(',', ' ');
          },
          title: (tooltipItem, data) => {
            return 'Dia ' + tooltipItem[0].label;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: false,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            callback: function (value, index, values) {
              return Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "c"])(value, false);
            }
          }
        }, {
          stacked: true,
          id: 'total',
          display: false
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 30 : 60,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 30 : 60
          }
        }]
      }
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (values.length) {
      setLoading(false);
    }
  }, [values]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_5__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
        height: 80,
        ref: canvasRef,
        options: options(),
        data: data
      }) : ''
    })
  });
}

/***/ }),

/***/ "9m9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useColors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xPX6");
//  import { useEffect, useState } from 'react';


function useColors() {
  let {
    0: colors,
    1: setColors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_constants__WEBPACK_IMPORTED_MODULE_1__[/* FOREGROUND_COLOR */ "j"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* COLOR_1 */ "b"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* COLOR_2 */ "c"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* COLOR_3 */ "d"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* COLOR_4 */ "e"]]);
  let {
    0: tints,
    1: setTints
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_constants__WEBPACK_IMPORTED_MODULE_1__[/* TINT_30 */ "q"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* TINT_50 */ "r"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* TINT_70 */ "s"]]);
  let {
    0: shades,
    1: setShades
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_constants__WEBPACK_IMPORTED_MODULE_1__[/* SHADE_30 */ "n"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* SHADE_50 */ "o"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* SHADE_70 */ "p"]]);
  let {
    0: complements,
    1: setComplements
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_constants__WEBPACK_IMPORTED_MODULE_1__[/* COMPLEMENT_1 */ "f"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* COMPLEMENT_2 */ "g"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* COMPLEMENT_3 */ "h"]]);
  let [foreground, color_1, color_2, color_3, color_4] = colors;
  return {
    colors: [foreground, color_1, color_2, color_3, color_4],
    colors_v2: {
      main: _constants__WEBPACK_IMPORTED_MODULE_1__[/* FOREGROUND_COLOR */ "j"],
      tints,
      shades,
      complements
    },
    setColors
  };
}

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GITI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"datepickerRow": "Home_datepickerRow__2MA2U",
	"link": "Home_link__3_2vs",
	"sources_block": "Home_sources_block__QPliw",
	"title": "Home_title__28pEg",
	"subtitle": "Home_subtitle__3IlVB",
	"text": "Home_text__dq4ii",
	"alert": "Home_alert__3DkCs",
	"alert_fill": "Home_alert_fill__2gdS0",
	"datepicker_static": "Home_datepicker_static__owksC"
};


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

/***/ }),

/***/ "HWxk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumeroTotalVacinados; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5PhN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GyP+");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cNEh");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("SSzp");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xPX6");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_regiao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uAdN");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function NumeroTotalVacinados({
  colors,
  statistics
}) {
  let regiao = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_regiao__WEBPACK_IMPORTED_MODULE_9__[/* RegiaoContext */ "a"]);
  let {
    labels
  } = statistics.getDailyData();
  let {
    values,
    valuesIn1,
    valuesIn2
  } = statistics.getVacinadosAcum();
  let casesData = statistics.getCases();
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    imunidade: false,
    primeira_fase: true,
    segunda_fase: true,
    infetados: false,
    perHundred: false
  });
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  let {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(400);
  let [foreground, color_1, color_2] = colors;
  let commonProps = {
    fill: true,
    lineTension: 0.5,
    lineBorder: 1,
    borderWidth: 3,
    borderJoinStyle: 'miter',
    pointBorderWidth: 1,
    pointHoverRadius: 3,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    usePointStyle: true
  };
  let annotations = {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.segunda_fase ? toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(2700000) : 2700000 : null,
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
        content: '2ª Fase - Abril (2.7 milhões de pessoas, ver notas)'
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.segunda_fase ? toggleStats.perHundred ? 20 : 1900000 : null,
      borderColor: 'transparent',
      label: {
        enabled: false
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.primeira_fase ? toggleStats.perHundred ? 11 : 1200000 : null,
      borderColor: 'transparent',
      label: {
        enabled: false
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.primeira_fase ? toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(950000) : 950000 : null,
      borderColor: '#0A9DD1',
      borderWidth: 2,
      borderDash: [5, 5],
      label: {
        backgroundColor: 'rgba(0,0,0,0.0)',
        drawTime: 'afterDatasetsDraw',
        textAlign: 'left',
        fontColor: '#0A9DD1',
        position: 'left',
        xAdjust: 5,
        yAdjust: -10,
        fontSize: '13px',
        enabled: true,
        content: '1ª Fase - Dezembro (950 mil pessoas)'
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.imunidade ? toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(10286300 * 0.7) : 10286300 * 0.7 : null,
      borderColor: '#D17615',
      borderWidth: 2,
      borderDash: [5, 5],
      label: {
        backgroundColor: 'rgba(0,0,0,0.0)',
        drawTime: 'afterDatasetsDraw',
        textAlign: 'left',
        fontColor: '#D17615',
        fontSize: '13px',
        position: 'left',
        xAdjust: 5,
        yAdjust: -10,
        enabled: true,
        content: 'Imunidade de Grupo (cerca de 7.2 milhões de pessoas)'
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.imunidade && toggleStats.perHundred ? 75 : null,
      borderColor: 'transparent',
      label: {
        enabled: false
      }
    }]
  };
  let chartRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

  const data = (canvas, cenas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    let {
      r,
      g,
      b
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* hexToRgb */ "d"])(foreground);

    try {
      gradient.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',15%)');
      gradient.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
    } catch (e) {
      gradient.addColorStop(0, '#d9f3ef');
      gradient.addColorStop(1, '#ffffff');
    }

    if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"]) {
      canvas.parentNode.style.width = _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"]) {
        canvas.parentNode.style.width = _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    const chartData = {
      labels: labels,
      datasets: [_objectSpread(_objectSpread({}, commonProps), {}, {
        label: 'Total vacinas administradas',
        backgroundColor: gradient,
        borderColor: foreground,
        pointBorderColor: foreground,
        pointBackgroundColor: foreground,
        pointHoverBackgroundColor: foreground,
        pointHoverBorderColor: foreground,
        data: toggleStats.perHundred ? values.map(el => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(el)) : values
      }), _objectSpread(_objectSpread({}, commonProps), {}, {
        label: 'Total de vacinas administradas - 1ª Dose',
        fill: false,
        borderColor: color_1,
        pointBorderColor: color_1,
        pointBackgroundColor: color_1,
        pointHoverBackgroundColor: color_1,
        pointHoverBorderColor: color_1,
        data: toggleStats.perHundred ? valuesIn1.map(el => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(el)) : valuesIn1
      }), _objectSpread(_objectSpread({}, commonProps), {}, {
        label: 'Total de vacinas administradas - 2ª Dose',
        fill: false,
        borderColor: color_2,
        pointBorderColor: color_2,
        pointBackgroundColor: color_2,
        pointHoverBackgroundColor: color_2,
        pointHoverBorderColor: color_2,
        data: toggleStats.perHundred ? valuesIn2.map(el => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(el)) : valuesIn2
      })]
    };

    if (regiao == _constants__WEBPACK_IMPORTED_MODULE_7__[/* REGIOES */ "l"].PORTUGAL) {
      chartData.datasets.push(_objectSpread(_objectSpread({}, commonProps), {}, {
        label: 'Casos Confirmados',
        backgroundColor: '#D11541',
        borderColor: '#D11541',
        fill: false,
        pointBorderColor: '#D11541',
        pointBackgroundColor: '#D11541',
        pointHoverBackgroundColor: '#D11541',
        pointHoverBorderColor: '#D11541',
        hidden: toggleStats.infetados === false,
        data: casesData.filter(el => el.Data >= 1609070400000).map(el => toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "e"])(el.ConfirmadosAcumulado) : el.ConfirmadosAcumulado)
      }));
    }

    return chartData;
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false
        }
      },
      legend: {
        position: 'bottom',
        align: 'start'
      },
      animation: {
        duration: 1000
      },
      annotation: regiao == 'portugal' ? annotations : {},
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label + ': ' + Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "c"])(tooltipItem.value);
          },
          title: (tooltipItem, data) => {
            return 'Dia ' + tooltipItem[0].label;
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            //max: 10000000,
            callback: value => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "c"])(value, false)
          }
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"] ? 30 : 60,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_7__[/* RESIZE_TRESHOLD */ "m"] ? 30 : 60
          }
        }]
      }
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (values.length > 0) {
      setLoading(false);
    }
  }, [values]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_Card__WEBPACK_IMPORTED_MODULE_3__[/* Card */ "a"], {
    allowOverflow: true,
    children: [regiao === 'portugal' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: [_Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.card_checkboxes, _Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.card_scrollable].join(' '),
      style: {
        textAlign: 'left'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_6__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.primeira_fase,
        label: '1ª Fase',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            primeira_fase: checked
          }));
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_6__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.primeira_fase,
        label: '2ª Fase',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            segunda_fase: checked
          }));
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_6__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.imunidade,
        label: 'Imunidade de Grupo',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            imunidade: checked
          }));
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_6__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.infetados,
        label: 'Casos Confirmados',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            infetados: checked
          }));
        }
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [" ", !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        height: 100,
        ref: chartRef,
        options: options(),
        data: data
      }) : '']
    })]
  });
}

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "L2Vc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xPX6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GyP+");
/* harmony import */ var _data_last_update_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vga7");
var _data_last_update_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("vga7", 1);
/* harmony import */ var _data_generic_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lN74");
var _data_generic_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("lN74", 1);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function useData({
  regiao
}) {
  let {
    0: ready,
    1: setReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: versioning,
    1: bumpVersioning
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: ecdc,
    1: setECDC
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: vaccines,
    1: setVaccines
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: casesData,
    1: setCasesData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: arquipelagos,
    1: setArquipelagos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    madeira: {
      vacinas: [],
      casos: []
    },
    acores: {
      vacinas: [],
      casos: []
    }
  });
  let options = {
    month: 'numeric',
    day: 'numeric'
  };
  /* let options2 = {
  	month: 'short',
  	day: 'numeric',
  	year: 'numeric',
  }; */

  let f = new Intl.DateTimeFormat('pt-PT', options); // let f2 = new Intl.DateTimeFormat('pt-PT', options2);

  function parseData(data) {
    if (!ready) return;
    let vaccines_stock = [];
    let values = [];
    let labels = [];
    data.forEach(el => {
      labels.push(f.format(new Date(el.Data)));
      values.push(el.Vacinados_Ac);
    });
    return {
      values,
      labels
    };
  }

  let statistics = {
    getRaw: () => {
      return vaccines;
    },
    getEstimativaStock: async () => {
      let {
        values: totalDiarios,
        labels
      } = statistics.getDiariosInoculacoes();
      let vaccines_stock = Array(totalDiarios.length).fill(0);
      let vaccines_stock_var = Array(totalDiarios.length).fill(0);
      let {
        com,
        mod,
        az,
        labels: labelsEcdc
      } = await statistics.getReceivedDosesByBrandByWeek();
      let totais = com.map((el, idx) => {
        var _mod$idx, _az$idx, _com$idx;

        return ((_mod$idx = mod[idx]) !== null && _mod$idx !== void 0 ? _mod$idx : 0) + ((_az$idx = az[idx]) !== null && _az$idx !== void 0 ? _az$idx : 0) + ((_com$idx = com[idx]) !== null && _com$idx !== void 0 ? _com$idx : 0);
      });
      vaccines_stock = vaccines_stock.map((el, idx) => {
        let found_date = null;
        let date = vaccines[idx].Data; //Try to find if that date had vaccines

        labelsEcdc.filter((el, date_idx) => {
          if (idx == 0) {
            found_date = 1;
            return;
          }

          if (idx == 1) {
            return;
          }

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameDay"])(date, new Date(el.from).getTime())) {
            found_date = date_idx;
          }
        });

        if (found_date !== null) {
          return totais[found_date];
        }

        return 0;
      });
      let current_vaccine_stock = 0;
      vaccines_stock_var = totalDiarios.map((el, idx) => {
        if (vaccines_stock[idx] > 0) {
          current_vaccine_stock = current_vaccine_stock - totalDiarios[idx] + vaccines_stock[idx];
        } else {
          current_vaccine_stock = current_vaccine_stock - totalDiarios[idx];
        }

        return current_vaccine_stock;
      });
      return {
        vaccines_stock_var,
        labels
      };
    },
    getLastVaccineAvaliable: () => {
      let data = {};

      if (regiao !== _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let dados_regiao = arquipelagos[regiao].vacinas;
        let lastItem = dados_regiao[dados_regiao.length - 1];
        data = {
          dose_2: lastItem.dose_2,
          dose_1: lastItem.dose_1,
          total: lastItem.total
        };
      } else {
        let lastItem = vaccines[vaccines.length - 1];
        data = {
          dose_2: lastItem.Inoculacao2_Ac,
          dose_1: lastItem.Inoculacao1_Ac,
          total: lastItem.Vacinados_Ac
        };
      }

      return data;
    },
    getLastCaseAvaliable: () => {
      let data = {};

      if (regiao !== _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let dados_regiao = arquipelagos[regiao].casos;
        let lastItem = dados_regiao[dados_regiao.length - 1];
        data = {
          ativos: parseInt(lastItem.ativos),
          recuperados: parseInt(lastItem.recuperados),
          obitos: parseInt(lastItem.obitos),
          populacao: regiao == _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].MADEIRA ? parseInt(_data_generic_json__WEBPACK_IMPORTED_MODULE_4__["populacao_ram"].valor) : parseInt(_data_generic_json__WEBPACK_IMPORTED_MODULE_4__["populacao_raa"].valor),
          data: lastItem.data
        };
      } else {
        let lastItem = casesData[vaccines.length - 1];
        data = {
          ativos: lastItem.Activos,
          recuperados: lastItem.Recuperados,
          obitos: lastItem.Obitos,
          populacao: _data_generic_json__WEBPACK_IMPORTED_MODULE_4__["populacao"].valor,
          data: lastItem.Data
        };
      }

      return data;
    },
    getDailyData: () => {
      if (regiao !== _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let dados_regiao = arquipelagos[regiao].vacinas;
        let labels = [];
        let values = [];
        dados_regiao.forEach(el => {
          labels.push(f.format(new Date(el.data)));
          values.push(el.total);
        });
        return {
          labels,
          values
        };
      } else {
        return parseData(vaccines);
      }
    },
    getDesvioPadrao: () => {},
    getMediaMovel: dias => {
      let medias = [];
      let labelsMedias = [];

      if (regiao === _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let {
          labels,
          values
        } = parseData(vaccines);

        for (let start = 1; start <= dias; start++) {
          let sum = Math.round(values.slice(0, start).reduce((prev, current) => prev + current, 0) / start);
          medias.push(sum);
          labelsMedias.push(labels[start]);
        }

        for (let start = dias; start <= values.length; start++) {
          let sum = Math.round(values.slice(start - dias, start).reduce((prev, current) => prev + current, 0) / dias);
          medias.push(sum);
          labelsMedias.push(labels[start]);
        }
      }

      return {
        values: medias,
        labels: labelsMedias
      };
    },
    getRtRegiao: async regiao => {
      let data2 = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/rt/${regiao}?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`).then(responseRt => {
        return responseRt;
      });
      let date = new Date('2021-01-01').getTime();
      let returnRt = data2.filter(el => new Date(el.Data).getTime() >= date); //let returnRt = data2;

      return {
        labels: returnRt.map(el => f.format(new Date(el.Data))),
        rt: returnRt
      };
    },
    getRtRegioes: async () => {
      let data = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/rt/todas?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`).then(responseRt => {
        return responseRt;
      });
      let dates = data.rt_continente.map(el => el.Data); //get rt for each date

      let rtData = [];
      dates.forEach(el => {
        let tempD = {
          continente: data.rt_continente.filter(tempEl => tempEl.Data === el)[0],
          centro: data.rt_centro.filter(tempEl => tempEl.Data === el)[0],
          nacional: data.rt_nacional.filter(tempEl => tempEl.Data === el)[0],
          lvt: data.rt_lvt.filter(tempEl => tempEl.Data === el)[0],
          alentejo: data.rt_alentejo.filter(tempEl => tempEl.Data === el)[0],
          norte: data.rt_norte.filter(tempEl => tempEl.Data === el)[0],
          algarve: data.rt_algarve.filter(tempEl => tempEl.Data === el)[0],
          ram: data.rt_ram.filter(tempEl => tempEl.Data === el)[0],
          raa: data.rt_raa.filter(tempEl => tempEl.Data === el)[0]
        };
        rtData.push(tempD);
      });
      return {
        labels: dates.map(el => f.format(new Date(el))),
        values: rtData
      };
    },
    getOwid: async () => {
      let owid = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/owid?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`);
      let labels = owid.eun.data.map(el => f.format(new Date(el.date)));
      let data = {
        pt: owid.prt.data,
        eu: owid.eun.data
      };
      return _objectSpread(_objectSpread({}, data), {}, {
        labels
      });
    },
    getMediaMovelDiaria: dias => {
      let medias = [];
      let labels = [];
      let labelsMedias = [];

      if (regiao === _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let {
          values
        } = statistics.getVacinadosPorDia();

        for (let start = 1; start < dias; start++) {
          if (values[start] === null) {
            medias.push(null);
            continue;
          }

          let sum = Math.round(values.slice(0, start).reduce((prev, current) => prev + current, 0) / start);
          medias.push(sum);
          labelsMedias.push(labels[start]);
        }

        for (let start = dias; start <= values.length; start++) {
          let slice = values.slice(start - dias, start);

          if (values[start] === null || slice.includes(null) > 0) {
            medias.push(null);
            continue;
          }

          let sum = Math.round(slice.reduce((prev, current) => prev + current, 0) / dias);
          medias.push(sum);
          labelsMedias.push(labels[start]);
        }
      }

      return {
        values: medias,
        labels: labelsMedias
      };
    },
    getVacinadosPorDia: () => {
      let {
        labels,
        values
      } = statistics.getDailyData();
      let vacinadosPorDia = values.map((val, idx, vals) => {
        //The first one
        if (idx === 0) {
          return val;
        }

        let nextDay = idx - 1;

        if (vals[nextDay] == null || val == null) {
          return null;
        }

        return val - vals[nextDay];
      });
      return {
        values: vacinadosPorDia,
        labels
      };
    },
    getVacinadosAcum: () => {
      let in1 = [];
      let in2 = [];
      let total = [];
      let {
        labels,
        values
      } = statistics.getDailyData();

      if (regiao !== _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let dados_regiao = arquipelagos[regiao].vacinas;
        dados_regiao.forEach((val, idx, vals) => {
          in1.push(dados_regiao[idx].dose_1);
          in2.push(dados_regiao[idx].dose_2);
          total.push(dados_regiao[idx].total);
        });
      } else {
        values.forEach((val, idx, vals) => {
          in1.push(vaccines[idx].Inoculacao1_Ac);
          in2.push(vaccines[idx].Inoculacao2_Ac);
          total.push(vaccines[idx].Vacinados_Ac);
        });
      }

      return {
        valuesIn1: in1,
        valuesIn2: in2,
        values: total,
        labels
      };
    },
    getDiariosInoculacoes: () => {
      let in1 = [];
      let in2 = [];
      let total = [];
      let raw = vaccines;
      let labels = [];

      if (regiao !== _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let raw = arquipelagos[regiao].vacinas;
        let {
          labels: labelsMad,
          values
        } = statistics.getDailyData();
        labels = labelsMad;
        total = values.map((val, idx, vals) => {
          //The first one
          if (idx === 0) {
            in1.push(raw[idx].dose_1);
            in2.push(raw[idx].dose_2);
            return val;
          }

          let prevDay = idx - 1;

          if (raw[prevDay].dose_1 == null || raw[idx].dose_1 == null) {
            in1.push(null);
          } else {
            in1.push(raw[idx].dose_1 - raw[prevDay].dose_1);
          }

          if (raw[prevDay].dose_2 == null || raw[idx].dose_2 == null) {
            in2.push(null);
          } else {
            in2.push(raw[idx].dose_2 - raw[prevDay].dose_2);
          }

          if (vals[prevDay] == null || val == null) {
            return null;
          }

          return val - vals[prevDay];
        });
      } else {
        let {
          labels: labelsCont,
          values
        } = parseData(vaccines);
        labels = labelsCont;
        total = values.map((val, idx, vals) => {
          //The first one
          if (idx === 0) {
            in1.push(vaccines[idx].Inoculacao1_Ac);
            in2.push(vaccines[idx].Inoculacao2_Ac);
            return val;
          }

          let prevDay = idx - 1;

          if (vaccines[prevDay].Inoculacao1_Ac == null || vaccines[idx].Inoculacao1_Ac == null) {
            in1.push(null);
          } else {
            in1.push(vaccines[idx].Inoculacao1_Ac - vaccines[prevDay].Inoculacao1_Ac);
          }

          if (vaccines[prevDay].Inoculacao2_Ac == null || vaccines[idx].Inoculacao2_Ac == null) {
            in2.push(null);
          } else {
            in2.push(vaccines[idx].Inoculacao2_Ac - vaccines[prevDay].Inoculacao2_Ac);
          }

          if (vals[prevDay] == null || val == null) {
            return null;
          }

          return val - vals[prevDay];
        });
      }

      return {
        valuesIn1: in1,
        valuesIn2: in2,
        values: total,
        raw,
        labels
      };
    },
    getDiariosCases: () => {
      let labels2 = [];
      let values2 = [];
      casesData.forEach(el => {
        labels2.push(new Date(el.Data));
        values2.push(el);
      });
      return {
        labels: labels2,
        values: values2,
        raw: casesData
      };
    },
    getReceivedDosesByBrandByWeek: async () => {
      let labels = {};
      let weeks = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/weeks`, false);
      let com = {};
      let mod = {};
      let az = {};
      let ecdcRegion = _constants__WEBPACK_IMPORTED_MODULE_1__[/* ECDC_MAPPING */ "i"][regiao];
      ecdc.forEach(el => {
        if (parseInt(el['NumberDosesReceived']) > 0 && el['Region'] === ecdcRegion) {
          com[el['YearWeekISO']] = com[el['YearWeekISO']] || null;
          mod[el['YearWeekISO']] = mod[el['YearWeekISO']] || null;
          az[el['YearWeekISO']] = az[el['YearWeekISO']] || null;
          labels[el['YearWeekISO']] = weeks[el['YearWeekISO']];

          if (el['Vaccine'] === 'COM') {
            com[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
          }

          if (el['Vaccine'] === 'MOD') {
            mod[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
          }

          if (el['Vaccine'] === 'AZ') {
            az[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
          }
        }
      });
      com = Object.values(com);
      mod = Object.values(mod);
      az = Object.values(az);
      labels = Object.values(labels);
      return {
        com,
        mod,
        az,
        labels
      };
    },
    getAdministredDosesByAgeByWeek: async () => {
      let labels = {};
      let maxValue = 0;
      let weeks = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/weeks`, false);
      let groups = {};
      let ecdcRegion = _constants__WEBPACK_IMPORTED_MODULE_1__[/* ECDC_MAPPING */ "i"][regiao];
      ecdc.forEach(el => {
        if (el['NumberDosesReceived'] == '' && el['Region'] === ecdcRegion) {
          if (!labels.hasOwnProperty(el['YearWeekISO'])) {
            labels[el['YearWeekISO'].replace('-', '')] = weeks[el['YearWeekISO']];
          }

          groups[el['TargetGroup']] = groups[el['TargetGroup']] || {
            dose_1: [],
            dose_2: []
          };
          maxValue = Math.max(el['FirstDose'], el['SecondDose']);
          groups[el['TargetGroup']].dose_1[el['YearWeekISO']] = (groups[el['TargetGroup']].dose_1[el['YearWeekISO']] || 0) + parseInt(el['FirstDose']);
          groups[el['TargetGroup']].dose_2[el['YearWeekISO']] = (groups[el['TargetGroup']].dose_2[el['YearWeekISO']] || 0) + parseInt(el['SecondDose']);
        }
      });
      return {
        maxValue,
        labels,
        groups
      };
    },
    getAdministredDosesByAgeByWeekRam: async () => {
      let labels = [];
      let maxValue = 0;
      let groups = [];
      arquipelagos.madeira.vacinas.forEach(el => {
        labels.push(el.data);
        groups.push(el.escaloes);
      });
      return {
        maxValue,
        labels,
        groups
      };
    },
    getTotalAdministredDosesByAgeByWeek: async () => {
      let groups = {};
      ecdc.forEach(el => {
        if (el['NumberDosesReceived'] == '') {
          groups[el['TargetGroup']] = groups[el['TargetGroup']] || {
            mod: [],
            com: [],
            az: [],
            target: 0
          };

          if (el['Vaccine'] === 'COM') {
            groups[el['TargetGroup']].com[0] = parseInt((groups[el['TargetGroup']].com[0] || 0) + parseInt(el['FirstDose']));
            groups[el['TargetGroup']].com[1] = (groups[el['TargetGroup']].com[1] || 0) + parseInt(el['SecondDose']);
          }

          if (el['Vaccine'] === 'MOD') {
            groups[el['TargetGroup']].mod[0] = (groups[el['TargetGroup']].mod[0] || 0) + parseInt(el['FirstDose']);
            groups[el['TargetGroup']].mod[1] = (groups[el['TargetGroup']].mod[1] || 0) + parseInt(el['SecondDose']);
          }

          if (el['Vaccine'] === 'AZ') {
            groups[el['TargetGroup']].az[0] = (groups[el['TargetGroup']].az[0] || 0) + parseInt(el['FirstDose']);
            groups[el['TargetGroup']].az[1] = (groups[el['TargetGroup']].az[1] || 0) + parseInt(el['SecondDose']);
          }

          groups[el['TargetGroup']].target = (groups[el['TargetGroup']].target || 0) + parseInt(el['Denominator']);
        }
      });
      return groups;
    },
    getTotalSNS: async () => {
      let sns = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/sns?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat)}`, false);
      return sns.filter(el => {
        return (el.TYPE === 'REGIONAL' || el.TYPE === 'GENERAL') && el.DATE == _data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat;
      });
    },
    getTotalARS: async () => {
      let ars = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/ars?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat)}`, false);
      let data = {};
      ars.features.forEach(el => {
        if (el.attributes.ARSNome === 'Nacional') el.attributes.ARSNome = 'All';

        if (!(el.attributes.ARSNome in data)) {
          data[el.attributes.ARSNome] = {
            obitosNovos7Dias: 0,
            casosNovos7Dias: 0
          };
        }

        data[el.attributes.ARSNome].obitosNovos7Dias += el.attributes.VarObitos;
        data[el.attributes.ARSNome].casosNovos7Dias += el.attributes.ConfirmadosNovos;
      });
      return data;
    },
    getCases: () => {
      return casesData;
    },
    getDosesRecebidasAcum: async () => {
      let weeks = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/weeks`, false);
      if (ecdc == false) return;
      let labels = {};
      let com = {};
      let mod = {};
      let az = {};
      let sum = [];
      let ecdcCopy = JSON.parse(JSON.stringify(ecdc));

      function sumArray(array) {
        return array.reduce((prev, current) => {
          return prev + current;
        }, 0);
      }

      ecdcCopy.filter(el => el['NumberDosesReceived'] > 0).forEach(el => {
        if (!labels.hasOwnProperty(el['YearWeekISO'])) {
          labels[el['YearWeekISO']] = weeks[el['YearWeekISO']];
        }

        com[el['YearWeekISO']] = com[el['YearWeekISO']] || 0;
        mod[el['YearWeekISO']] = mod[el['YearWeekISO']] || 0;
        az[el['YearWeekISO']] = az[el['YearWeekISO']] || 0;

        if (el['Vaccine'] === 'COM') {
          com[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }

        if (el['Vaccine'] === 'MOD') {
          mod[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }

        if (el['Vaccine'] === 'AZ') {
          az[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }
      });
      com = Object.values(com).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      az = Object.values(az).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      mod = Object.values(mod).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      sum = mod.map((el, idx, arr) => {
        return com[idx] + az[idx] + mod[idx];
      });
      return {
        mod,
        com,
        az,
        sum,
        labels: Object.values(labels)
      };
    },
    getArquipelagoData: async () => {
      let res = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/${regiao}?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeira)}`);
      return res;
    },
    getMadeiraPDS: async () => {
      let res = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/${regiao}/pontosituacao?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeiraCases)}`);
      return res;
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Promise.all([Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/ecdc?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateEcdc)}`, false), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/vaccinesold?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/cases?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/madeira?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeira)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/madeira/pontosituacao?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeiraCases)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/acores?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateAcores)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "a"])(`/api/acores/pontosituacao?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateAcoresCases)}`)]).then(([ecdc, vaccines, cases, madeira, madeiraPDS, acores, acoresPDS]) => {
      setECDC(ecdc);
      setVaccines(vaccines);
      setCasesData(cases);
      setArquipelagos({
        madeira: {
          vacinas: madeira,
          casos: madeiraPDS
        },
        acores: {
          vacinas: acores,
          casos: acoresPDS
        }
      });
      setReady(true);
    });
  }, []);

  function update(type, data) {
    switch (type) {
      case 'vacinas':
        let arr = Array.from(vaccines);
        arr.push(data);
        setVaccines(arr);
        bumpVersioning(versioning + 1);
        break;

      case 'casos':
        //casos.push(data);
        //setCasos(casos);
        bumpVersioning(versioning + 1);
        break;

      case 'reload':
        window.location.reload();
        break;
    }
  }

  return {
    versioning,
    statistics,
    ready,
    update
  };
}

/***/ }),

/***/ "M+4D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/graphs/VacinadosPorDia.jsx
var VacinadosPorDia = __webpack_require__("9BaP");

// EXTERNAL MODULE: ./components/Counter.jsx
var Counter = __webpack_require__("MCc/");

// EXTERNAL MODULE: ./components/graphs/NumeroTotalVacinados.jsx
var NumeroTotalVacinados = __webpack_require__("HWxk");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: external "react-spinners-kit"
var external_react_spinners_kit_ = __webpack_require__("PWcZ");

// EXTERNAL MODULE: ./hooks/useData.js
var useData = __webpack_require__("L2Vc");

// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__("GITI");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: ./hooks/useColors.js
var useColors = __webpack_require__("9m9c");

// EXTERNAL MODULE: ./components/Card.module.scss
var Card_module = __webpack_require__("UG6H");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// EXTERNAL MODULE: ./data/last-update.json
var last_update = __webpack_require__("vga7");

// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__("tDG4");

// EXTERNAL MODULE: external "plausible-tracker"
var external_plausible_tracker_ = __webpack_require__("WUak");
var external_plausible_tracker_default = /*#__PURE__*/__webpack_require__.n(external_plausible_tracker_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./data/generic.json
var generic = __webpack_require__("lN74");

// EXTERNAL MODULE: ./components/Card.jsx
var Card = __webpack_require__("5PhN");

// EXTERNAL MODULE: ./components/graphs/PieVacinadosInfectadosRecuperadosObitos.jsx
var PieVacinadosInfectadosRecuperadosObitos = __webpack_require__("Q/64");

// EXTERNAL MODULE: ./components/graphs/PieSuscetiveisProporcao.jsx
var PieSuscetiveisProporcao = __webpack_require__("WMh8");

// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__("GyP+");

// EXTERNAL MODULE: ./components/graphs/LineRt.jsx
var LineRt = __webpack_require__("m5rz");

// EXTERNAL MODULE: ./components/context/regiao.js
var regiao = __webpack_require__("uAdN");

// EXTERNAL MODULE: external "react-count-to"
var external_react_count_to_ = __webpack_require__("Ys+F");
var external_react_count_to_default = /*#__PURE__*/__webpack_require__.n(external_react_count_to_);

// CONCATENATED MODULE: ./components/graphs/RamGruposPrioritarios.jsx








function RamGruposPrioritarios({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let {
    0: graphData,
    1: setGraphData
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    statistics.getArquipelagoData().then(data => {
      setGraphData(data[data.length - 1]);
      setLoading(false);
    });
  }, []);
  let numberFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2
  });

  const fn = value => /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
    children: numberFormatter.format(value).replace(/,/gm, ' ')
  });

  function renderGrupo(el) {
    if (!el.nome) return;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
      xs: 12,
      lg: 6,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          xs: 12,
          lg: 12,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Card_module_default.a.ram_subchart,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: el.nome
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          xs: 6,
          lg: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Card_module_default.a.ram_subchart,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "1\xBA Dose"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_count_to_default.a, {
              digits: 0,
              delay: 1,
              from: 0,
              to: el.dose_1,
              speed: 800,
              children: fn
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          xs: 6,
          lg: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Card_module_default.a.ram_subchart,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "2\xBA Dose"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_count_to_default.a, {
              digits: 0,
              delay: 1,
              from: 0,
              to: el.dose_2,
              speed: 800,
              children: fn
            })]
          })
        })]
      })
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: Card_module_default.a.ram,
          children: Object.values(graphData.grupos).map(renderGrupo)
        })
      }) : ''
    })
  });
}
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__("xPX6");

// CONCATENATED MODULE: ./components/graphs/RamBarAdministradasPorFaixaEtaria.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function RamBarAdministradasPorFaixaEtaria({
  statistics,
  colors
}) {
  let {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  let {
    main,
    shades,
    tints,
    complements
  } = colors;
  let {
    0: graphData,
    1: setGraphData
  } = Object(external_react_["useState"])({});
  let {
    0: activeDose,
    1: setActiveDose
  } = Object(external_react_["useState"])(1);
  const canvasRef = Object(external_react_["useRef"])(null);

  function generateColor(color) {
    return {
      borderColor: color,
      pointBorderColor: color,
      pointBackgroundColor: color,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: color
    };
  }

  Object(external_react_["useEffect"])(() => {
    var _canvasRef$current;

    if (canvasRef !== null && canvasRef !== void 0 && (_canvasRef$current = canvasRef.current) !== null && _canvasRef$current !== void 0 && _canvasRef$current.chartInstance) {
      canvasRef.current.chartInstance.data.datasets.forEach(dataset => {
        if (dataset.customDose == activeDose) {
          dataset.hidden = false;
        } else {
          dataset.hidden = true;
        }

        canvasRef.current.chartInstance.update();
      });
    }
  }, [activeDose]);

  const data = canvas => {
    let {
      labels,
      groups
    } = graphData;

    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = '1000px';
    } else {
      canvas.parentNode.style.width = 'auto';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = '1000px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: Object.keys(graphData.labels).map(key => {
        let fromDate = new Date(labels[key]);
        return `${Object(utils["c" /* formatNumber */])(fromDate.getDate())}/${Object(utils["c" /* formatNumber */])(fromDate.getMonth() + 1)}`;
      }),
      datasets: [_objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(shades[0])), {}, {
        label: 'Grupo 18/24 - 2ª Dose',
        labelGroup: 'Grupo 18/24',
        fill: false,
        backgroundColor: shades[0],
        data: groups.map(group => group.e1824.dose_2 || 0),
        order: 1,
        hidden: true,
        display: false,
        customDose: 2,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(shades[0])), {}, {
        label: 'Grupo 18/24 - 1ª Dose',
        labelGroup: 'Grupo 18/24',
        fill: false,
        backgroundColor: shades[0],
        data: groups.map(group => group.e1824.dose_1 || 0),
        order: 2,
        hidden: false,
        display: true,
        customDose: 1,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(tints[1])), {}, {
        label: 'Grupo 25/49 - 2ª Dose',
        labelGroup: 'Grupo 25/49',
        fill: false,
        backgroundColor: tints[1],
        data: groups.map(group => group.e2549.dose_2 || 0),
        order: 3,
        hidden: true,
        display: false,
        customDose: 2,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(tints[1])), {}, {
        label: 'Grupo 25/49 - 1ª Dose',
        labelGroup: 'Grupo 25/49',
        backgroundColor: tints[1],
        fill: false,
        data: groups.map(group => group.e2549.dose_1 || 0),
        order: 4,
        hidden: false,
        display: true,
        customDose: 1,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(main)), {}, {
        label: 'Grupo 50/59 - 2ª Dose',
        labelGroup: 'Grupo 50/59',
        fill: false,
        backgroundColor: main,
        data: groups.map(group => group.e5059.dose_2 || 0),
        stack: 'stack1',
        order: 5,
        hidden: true,
        display: false,
        customDose: 2,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(main)), {}, {
        label: 'Grupo 50/59 - 1ª Dose',
        labelGroup: 'Grupo 50/59',
        backgroundColor: main,
        fill: false,
        data: groups.map(group => group.e5059.dose_1 || 0),
        stack: 'stack1',
        order: 6,
        hidden: false,
        display: true,
        customDose: 1,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(shades[2])), {}, {
        label: 'Grupo 60/69 - 2ª Dose',
        labelGroup: 'Grupo 60/69',
        fill: false,
        backgroundColor: shades[2],
        data: groups.map(group => group.e6064.dose_2 + group.e6569.dose_2 || 0),
        yAxisID: 'axis',
        xAxisID: 'xaxis',
        order: 7,
        hidden: true,
        display: false,
        customDose: 2
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(shades[2])), {}, {
        label: 'Grupo 60/69 - 1ª Dose',
        labelGroup: 'Grupo 60/69',
        backgroundColor: shades[2],
        data: groups.map(group => group.e6064.dose_1 + group.e6569.dose_1 || 0),
        xAxisID: 'xaxis',
        order: 8,
        hidden: false,
        fill: false,
        display: true,
        customDose: 1,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(complements[2])), {}, {
        label: 'Grupo 70/79 - 2ª Dose',
        labelGroup: 'Grupo 70/79',
        fill: false,
        backgroundColor: complements[2],
        data: groups.map(group => group.e7079.dose_2 || 0),
        order: 9,
        hidden: true,
        display: false,
        customDose: 2,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(complements[2])), {}, {
        label: 'Grupo 70/79 - 1ª Dose',
        labelGroup: 'Grupo 70/79',
        backgroundColor: complements[2],
        data: groups.map(group => group.e7079.dose_1 || 0),
        order: 10,
        hidden: false,
        fill: false,
        display: true,
        customDose: 1,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(complements[1])), {}, {
        label: 'Grupo 80+ - 2ª Dose',
        labelGroup: 'Grupo 80+',
        xAxisID: 'xaxis',
        backgroundColor: complements[1],
        data: groups.map(group => group.e80.dose_2 || 0),
        order: 11,
        hidden: true,
        stack: 'stack2',
        fill: false,
        display: false,
        customDose: 2,
        yAxisID: 'axis'
      }), _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(complements[1])), {}, {
        label: 'Grupo 80+ - 1ª Dose',
        labelGroup: 'Grupo 80+',
        backgroundColor: complements[1],
        data: groups.map(group => group.e80.dose_1 || 0),
        stack: 'stack2',
        xAxisID: 'xaxis',
        yAxisID: 'axis',
        order: 12,
        hidden: false,
        fill: false,
        display: true,
        customDose: 1
      })]
    };
  };

  const options = () => {
    let maxValue = 100;
    return {
      //maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
        }
      },
      onResize: (a, b, c) => {
        if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
          a.canvas.parentNode.style.width = '1000px';
        } else {
          a.canvas.parentNode.style.width = 'auto';
        }
      },
      legend: {
        position: 'bottom',
        align: 'start',
        onHover: function (event, legend) {
          document.body.classList.add('mouse-pointer');
        },
        onLeave: function (event, legend) {
          document.body.classList.remove('mouse-pointer');
        },
        labels: {
          filter: function (item, chart) {
            return chart.datasets[item.datasetIndex].hidden == false;
          }
        }
      },
      animation: {
        duration: 1000
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: _objectSpread(_objectSpread(_objectSpread({}, constants["t" /* lineChartCommon */]), generateColor(shades[0])), {}, {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + parseFloat(tooltipItem.value).toFixed(2) + '%';
          },
          title: (tooltipItem, data) => {
            return tooltipItem[0].label;
          }
        })
      },
      scales: {
        yAxes: [{
          id: 'axis',
          stacked: false,
          ticks: {
            beginAtZero: false,
            min: 0,
            max: maxValue,
            stepSize: (maxValue / 5).toFixed(0),
            callback: value => Object(utils["c" /* formatNumber */])(value, false) + '%'
          }
        }],
        xAxes: [{
          id: 'xaxis',
          stacked: false,
          ticks: {
            beginAtZero: false
          }
        }]
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    statistics.getAdministredDosesByAgeByWeekRam().then(data => {
      setGraphData(data);
      setLoaded(true);
      setActiveDose(1);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    textLeft: true,
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: loaded === true ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: 'toggle_buttons',
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: external_classnames_default()('toggle_button', {
                active: activeDose === 1
              }),
              onClick: () => {
                setActiveDose(1);
              },
              children: "1\xAA Dose"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: external_classnames_default()('toggle_button', {
                active: activeDose === 2
              }),
              onClick: () => {
                setActiveDose(2);
              },
              children: "2\xAA Dose"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Line"], {
            height: 80,
            ref: canvasRef,
            options: options(),
            data: data
          })
        })]
      }) : ''
    })
  });
}
// CONCATENATED MODULE: ./components/graphs/RamMapa.jsx











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

function RamMapa({
  statistics,
  colors
}) {
  let {
    0: graphData,
    1: setGraphData
  } = Object(external_react_["useState"])();
  let {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  let {
    main,
    shades
  } = colors;
  const grades = [0, 20, 40, 60, 80];
  const grades_pretty = {
    0: '0% a 19%',
    20: '20% a 39%',
    40: '40% a 59%',
    60: '60% a 89%',
    80: '80% a 100%'
  };

  const renderMap = async map => {
    const madeira = await fetch('/madeira.geojson').then(r => r.json());
    const madeiraMapa = L.map('map');
    let layers = L.geoJSON(madeira, {
      onEachFeature: (feature, shape) => {
        let concelho = constants["k" /* MADEIRA_DICOS */][feature.properties.Dico];
        let data = graphData.concelhos[concelho];
        let percentagem_1 = data.dose_1 / generic["populacao_residente_ram"][feature.properties.Dico].valor * 100;
        let percentagem_2 = data.dose_2 / generic["populacao_residente_ram"][feature.properties.Dico].valor * 100;
        shape.bindPopup(`<p>
						<strong>${feature.properties.Municipio}</strong>
						<br>1ª Dose: ${Object(utils["c" /* formatNumber */])(data.dose_1)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${Object(utils["c" /* formatNumber */])(data.dose_2)} (${percentagem_2.toFixed(2)}%)
					</p>`);
        shape.on('click', () => {//console.log('click');
        });
      },
      style: function (feature) {
        let concelho = constants["k" /* MADEIRA_DICOS */][feature.properties.Dico];
        let data = graphData.concelhos[concelho];
        let percentagem = data.dose_2 / generic["populacao_residente_ram"][feature.properties.Dico].valor * 100;
        return {
          fillOpacity: 1,
          fillColor: getColor(percentagem),
          lineJoin: 'round',
          stroke: true,
          weight: 2,
          color: '#018b79'
        };
      }
    }).addTo(madeiraMapa);
    layers.eachLayer(function (layer) {
      layer.feature.properties.layerID = layer.feature.properties.DICOFRE;
    }); //Create legend

    madeiraMapa.fitBounds(layers.getBounds());
    var legend = L.control({
      position: 'bottomleft'
    });

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend');

      for (var i = 0; i < grades.length; i++) {
        let grade = grades[i];
        let grade_pretty = grades_pretty[grade];
        div.innerHTML += `<p>
						<i style="background:${getColor(grades[i] + 1)}"></i>${grade_pretty}</p>`;
      }

      return div;
    };

    legend.addTo(madeiraMapa);
    var snapToPoint = L.control({
      position: 'topleft'
    });

    snapToPoint.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML = '<img style="width:20px" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-location-1.png">';
      return div;
    };

    snapToPoint.addTo(madeiraMapa); //hammering the click event

    snapToPoint._container.onclick = function () {
      madeiraMapa.fitBounds(layers.getBounds());
    };
  };

  function renderGraph(el) {
    const data = (canvas, cenas) => {
      /* 	if (window.innerWidth <= RESIZE_TRESHOLD) {
      	canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
      } else {
      	canvas.parentNode.style.width = '100%';
      } */

      /* 	window.addEventListener('resize', () => {
      	if (window.innerWidth <= RESIZE_TRESHOLD) {
      		canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
      	} else {
      		canvas.parentNode.style.width = '100%';
      	}
      });
      */
      const chartData = {
        labels: [],
        datasets: [{
          label: 'Total de vacinas administradas - 1ª Dose',
          borderColor: main,
          backgroundColor: main,
          stack: 'stack0',
          order: 2,
          data: [el.dose_1]
        }, {
          label: 'Total de vacinas administradas - 2ª Dose',
          borderColor: shades[0],
          backgroundColor: shades[0],
          data: [el.dose_2],
          stack: 'stack0',
          order: 1
        }]
      };
      return chartData;
    };

    const options = () => {
      let dico = constants["k" /* MADEIRA_DICOS */][el.chave];
      let populacao_residente = generic["populacao_residente_ram"][dico].valor;
      return {
        plugins: {
          datalabels: {
            display: false
          }
        },
        layout: {
          padding: {
            left: -12
          }
        },
        legend: {
          position: 'bottom',
          align: 'start',
          display: false
        },
        animation: {
          duration: 1000
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            title: (tooltipItem, data) => {
              return '';
            }
          }
        },
        scales: {
          yAxes: [{
            stacked: true,
            id: 'y-axis',
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true,
              max: populacao_residente,
              stepSize: Math.round(window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? populacao_residente / 3 : populacao_residente / 6),
              callback: value => Object(utils["c" /* formatNumber */])(value, false)
            }
          }]
        }
      };
    };

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
      xs: 12,
      lg: 4,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Card_module_default.a.ram_subchart_bar,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: Card_module_default.a.text_left,
          children: el.nome
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["HorizontalBar"], {
          height: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 60 : 60,
          options: options(),
          data: data
        })]
      })
    });
  }

  Object(external_react_["useEffect"])(async () => {
    statistics.getArquipelagoData().then(data => {
      setGraphData(data[5]);

      if (loaded === false) {
        setLoaded(true);
      }

      if (loaded === true) {
        renderMap();
      }
    });
  }, [loaded]);
  return loaded === true ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: "map",
          style: {
            height: '350px'
          }
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      style: {
        marginTop: 15
      },
      children: Object.values(graphData.concelhos).map(renderGraph)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: 'legends',
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: 'legend',
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: {
                backgroundColor: main
              },
              className: 'color_sample'
            }), "1\xAA Dose"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: 'legend',
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: {
                backgroundColor: shades[1]
              },
              className: 'color_sample'
            }), "2\xAA Dose"]
          })]
        })
      })
    })]
  }) : '';
} //<Row>{renderGraph(graphData.concelhos.ribeira_brava)}</Row>
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// CONCATENATED MODULE: ./pages/madeira.js

















 //data












const plausible = external_plausible_tracker_default()({
  domain: 'vacinacaocovid19.pt',
  trackLocalhost: true
});
function Home() {
  let {
    statistics,
    ready: dataReady
  } = Object(useData["a" /* useData */])({
    regiao: 'madeira'
  });
  let {
    0: selectedItem,
    1: setSelectedItem
  } = Object(external_react_["useState"])({});
  let {
    0: previousItem,
    1: setPreviousItem
  } = Object(external_react_["useState"])({});
  let {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  let beacons = {
    mid_page: false,
    end_page: false
  };
  const router = Object(router_["useRouter"])();
  let numberFormatter = new Intl.NumberFormat('pt-PT');
  let {
    0: derivedNumbers,
    1: setDerivedNumbers
  } = Object(external_react_["useState"])({
    pessoasAVacinar: {
      current: 0
    },
    percentagem: {
      current: 0
    }
  });

  function trackScrollEvents(e) {
    if (window.scrollY > 3576 && beacons.end_page === false) {
      beacons.end_page = true;
      plausible.trackEvent('end_page', {
        page: 'madeira'
      });
      return;
    }

    if (window.scrollY > 1657 && beacons.mid_page === false) {
      beacons.mid_page = true;
      plausible.trackEvent('mid_page', {
        page: 'madeira'
      });
      return;
    }
  }

  let startDate = new Date(last_update.dateMadeira);
  let [first, ...restDate] = Object(external_date_fns_["format"])(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
    locale: locale_["pt"]
  }).replace('-feira', '').split('');
  let d = [first.toUpperCase(), ...restDate].join('');

  function onSocketUpdate() {
    router.push('/');
  }

  let {
    colors,
    colors_v2
  } = Object(useColors["a" /* useColors */])();
  Object(external_react_["useEffect"])(() => {
    // Unconventional way of doing this
    window.addEventListener('socket_update', onSocketUpdate);
    window.addEventListener('scroll', trackScrollEvents);
    return function () {
      // Unconventional way of doing this
      window.removeEventListener('socket_update', onSocketUpdate);
      window.removeEventListener('scroll', trackScrollEvents);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    let object = {
      pessoasAVacinar: {
        current: numberFormatter.format(generic.populacao_ram.valor * 0.7 - selectedItem.dose_2)
      },
      percentagem: {
        current: selectedItem.dose_2 / generic.populacao_ram.valor * 100
      }
    };
    setDerivedNumbers(object);
  }, [selectedItem]);
  Object(external_react_["useEffect"])(async () => {
    if (dataReady === false) return;
    let rawData = await statistics.getArquipelagoData();
    plausible.trackPageview();
    setSelectedItem(rawData[rawData.length - 1]);
    setPreviousItem(rawData[rawData.length - 2]);
    /* let { sum } = statistics?.getDosesRecebidasAcum();
    sum = sum.reverse()[0];
    let item = rawData.filter((el) => {
    	return isSameDay(el.Data, new Date(json.dateSnsStart));
    });
     */

    setLoaded(true);
  }, [dataReady]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(regiao["a" /* RegiaoContext */].Provider, {
    value: 'madeira',
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
      className: "container-fluid app",
      children: loaded ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
              className: Home_module_default.a.datepicker_static,
              children: [" ", d, " "]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          className: "counterRow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                colors: colors,
                tempo: 'na semana anterior',
                title: "N\xFAmero total de vacinas administradas",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.total,
                from: previousItem === null || previousItem === void 0 ? void 0 : previousItem.total,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.total
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                colors: colors,
                tempo: 'na semana anterior',
                title: "N\xFAmero de doses administradas - 1\xAA Dose",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.dose_1,
                from: previousItem === null || previousItem === void 0 ? void 0 : previousItem.dose_1,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                style: {
                  marginTop: '10px'
                },
                className: Card_module_default.a.card_subtitle,
                children: [Object(utils["e" /* perHundred */])(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1, generic.populacao_ram.valor).toFixed(2), " doses administradas por cada 100 pessoas", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), Object(utils["c" /* formatNumber */])((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1) - (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2)), " pessoas inoculadas com a 1\xAA dose"]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                colors: colors,
                tempo: 'na 	semana anterior',
                title: "N\xFAmero de doses administradas - 2\xAA Dose",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.dose_2,
                from: previousItem === null || previousItem === void 0 ? void 0 : previousItem.dose_2,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                style: {
                  marginTop: '10px'
                },
                className: Card_module_default.a.card_subtitle,
                children: [Object(utils["e" /* perHundred */])(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2, generic.populacao_ram.valor).toFixed(2), " doses administradas por cada 100 pessoas", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), Object(utils["c" /* formatNumber */])(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2), " pessoas inoculadas com a 2\xAA dose"]
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          className: "counterRow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                ps: "Percentagem calculada com base no n\xFAmero total de segundas doses administradas",
                digits: 2,
                suffix: '%',
                colors: colors,
                title: "Percentagem de popula\xE7\xE3o inoculada com a 2\xAA dose ",
                from: 0,
                to: derivedNumbers.percentagem.current
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                ps: `Ou seja, será preciso vacinar totalmente mais ${derivedNumbers.pessoasAVacinar.current} pessoas para se atingir imuninade de grupo`,
                digits: 2,
                suffix: '%',
                colors: colors,
                title: "Percentagem para atingir imunidade de grupo",
                from: 0,
                to: 70 - derivedNumbers.percentagem.current
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                style: {
                  marginBottom: '10px'
                },
                className: Card_module_default.a.card_title,
                children: "Plano de Vacina\xE7\xE3o"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                title: "Consultar notas ou o plano de informa\xE7\xE3o para mais informa\xE7\xE3o",
                style: {
                  margin: '5px 0px'
                },
                className: Card_module_default.a.card_subtitle,
                children: "O plano de vacina\xE7\xE3o aplicado pela Madeira n\xE3o divulga n\xFAmeros a atingir."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                target: "_blank",
                href: 'https://covidmadeira.pt/vacinacao/',
                className: `${Card_module_default.a.card_subtitle} ${Home_module_default.a.link}`,
                children: "Consultar plano de vacina\xE7\xE3o"
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "N\xFAmero de vacinas administradas"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NumeroTotalVacinados["a" /* NumeroTotalVacinados */], {
              statistics: statistics,
              colors: colors
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "N\xFAmero de vacinas administradas"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(VacinadosPorDia["a" /* VacinadosPorDia */], {
              colors: colors,
              statistics: statistics
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "Vacina\xE7\xE3o por grupos priorit\xE1rios"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RamGruposPrioritarios, {
              colors: colors_v2,
              statistics: statistics
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazyload_default.a, {
          height: 500,
          once: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Percentagem da popula\xE7\xE3o vacinada por faixa et\xE1ria"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RamBarAdministradasPorFaixaEtaria, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazyload_default.a, {
          height: 500,
          offset: 300,
          once: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Vacina\xE7\xE3o por regi\xE3o"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: Home_module_default.a.subtitle,
                children: "Dados acumulados desde 31 de Dezembro de 2021 at\xE9 14 de mar\xE7o de 20210."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RamMapa, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazyload_default.a, {
          height: 500,
          once: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
                className: Home_module_default.a.title,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("em", {
                  children: ["R", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sub", {
                    children: "t"
                  })]
                }), ' ', "na Regi\xE3o Aut\xF3noma da Madeira (desde 01/01/2021)"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LineRt["a" /* LineRt */], {
                regiao: 'madeira',
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazyload_default.a, {
          height: 500,
          once: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados e \xF3bitos"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados desde 31 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateMadeiraCases), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                }), ", \xE0 exce\xE7\xE3o das doses administradas, cujo os ultimos dados dispon\xEDveis s\xE3o de", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateMadeira), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieVacinadosInfectadosRecuperadosObitos["a" /* PieVacinadosInfectadosRecuperadosObitos */], {
                colors: colors_v2,
                statistics: statistics
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados e \xF3bitos e popula\xE7\xE3o suscet\xEDvel"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados desde 31 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateMadeiraCases).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                }), ", \xE0 exce\xE7\xE3o das doses administradas, cujo os ultimos dados dispon\xEDveis s\xE3o de", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateMadeira).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieSuscetiveisProporcao["a" /* PieSuscetiveisProporcao */], {
                colors: colors_v2,
                statistics: statistics
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            className: Home_module_default.a.sources_block,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "Notas"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["A percentagem de popula\xE7\xE3o vacinada foi calculada com base no n\xFAmero total de segundas doses administradas e com o \xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html",
                children: "n\xFAmero de popula\xE7\xE3o da Regi\xE3o Aut\xF3noma da Madeira (dados da Dire\xE7\xE3o Regional de Estat\xEDstica da Madeira)"
              }), ". Os", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120",
                children: "dados de cada regi\xE3o da Madeira"
              }), ' ', "s\xE3o dados provis\xF3rios de at\xE9 31/12 e foram retirados do PORDATA De acordo com o\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",
                children: "Instituto Ricardo Jorge, ser\xE1 preciso imunizar entre 60% a 70% da popula\xE7\xE3o para se atingir a imunidade de grupo."
              }), ' ', "Os valores apresentados aqui foram calculados com uma percentagem de 70%."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["A popula\xE7\xE3o suscet\xEDvel a infe\xE7\xE3o foi calculada com base na popula\xE7\xE3o total menos a soma do n\xFAmero de \xF3bitos, casos ativos, popula\xE7\xE3o infectada, vacinada e recuperada assumindo que casos de reinfe\xE7\xF5es s\xE3o raros.", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",
                target: ":blank",
                children: "At\xE9 25/02 foram confirmados 57 casos de reinfec\xE7\xE3o com o novo coronav\xEDrus."
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            className: Home_module_default.a.sources_block,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "Fontes"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["Os dados apresentados s\xE3o retirados dos boletins publicados pela\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covidmadeira.pt/boletim-vacinacao-covid-19/",
                children: "Dire\xE7\xE3o Regional de Sa\xFAde"
              }), ". A atualiza\xE7\xE3o destes dados \xE9 semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus s\xE3o retirados dos", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covidmadeira.pt/ponto-de-situacao/",
                children: "pontos de situa\xE7\xE3o"
              }), ' ', "publicados pela mesma entidade"]
            })]
          })]
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          display: 'block',
          width: 50,
          margin: 'auto '
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spinners_kit_["GooSpinner"], {
          size: 50,
          color: colors_v2.main
        })
      })
    })
  });
}

/***/ }),

/***/ "MCc/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ys+F");
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_count_to__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);






function Counter({
  from,
  to,
  yesterday,
  title,
  subtitle,
  ps,
  colors,
  digits,
  suffix,
  tempo
}) {
  if (!tempo) tempo = 'no dia anterior';

  if (!digits) {
    digits = 0;
  }

  let numberFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2
  });
  let difference = to - yesterday || 0;
  let [foreground] = colors;

  const fn = value => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
    style: {
      color: foreground
    },
    className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_highlight,
    children: [numberFormatter.format(value).replace(/,/gm, ' '), " ", suffix ? suffix : '']
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [title == '' ? '' : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_title,
      children: title
    }), subtitle == '' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        height: 20
      }
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_subtitle,
      children: subtitle
    }), to === null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_highlight,
      style: {
        color: foreground
      },
      children: "N/A"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_count_to__WEBPACK_IMPORTED_MODULE_1___default.a, {
        digits: digits,
        delay: 1,
        from: from || 0,
        to: to || 0,
        speed: 800,
        children: fn
      }), Math.abs(to - yesterday) > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_subtitle,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
            style: {
              color: foreground
            },
            className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_subtitle_highlight,
            children: [Math.sign(difference) == 1 ? '+' : '-', " ", numberFormatter.format(Math.abs(difference)).replace(',', ' ')]
          }), "\xA0 que ", tempo]
        })
      }) : '', ps != null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_subtitle,
          children: ps.split('\n').map((el, idx) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
            children: [el, " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
          }, idx))
        })
      }) : '']
    })]
  });
}

/***/ }),

/***/ "PWcZ":
/***/ (function(module, exports) {

module.exports = require("react-spinners-kit");

/***/ }),

/***/ "Q/64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieVacinadosInfectadosRecuperadosObitos; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5PhN");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lLkP");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GyP+");






function PieVacinadosInfectadosRecuperadosObitos({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let vaccines = statistics.getLastVaccineAvaliable();
  let lastCase = statistics.getLastCaseAvaliable();
  let {
    main,
    shades,
    complements
  } = colors;

  const data = canvas => {
    return {
      labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos'],
      datasets: [{
        backgroundColor: [main, complements[0], complements[2], shades[2]],
        data: [vaccines.dose_2, lastCase.ativos, lastCase.recuperados, lastCase.obitos]
      }]
    };
  };

  const options = () => {
    return {
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: 'white',
          formatter: (value, chart) => {
            let sum = chart.dataset.data.reduce((prev, curr) => {
              return prev + curr;
            }, 0);
            sum = value / sum * 100;

            if (sum > 5) {
              return sum.toFixed(2) + '%';
            }

            return '';
          }
        }
      },
      onResize: (a, b, c) => {},
      legend: {
        position: 'bottom',
        align: 'start'
      },
      animation: {
        duration: 1000
      },
      tooltips: {
        callbacks: {
          label: function ({
            index
          }, {
            datasets,
            labels
          }) {
            let label = labels[index];
            let data = datasets[0].data[index];
            return `${label}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* formatNumber */ "c"])(data)}`;
          }
        }
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_3__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
        plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default.a],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}

/***/ }),

/***/ "SSzp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCheckbox; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("j8iR");
/* harmony import */ var _CustomCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function CustomCheckbox({
  onChange,
  label,
  checked,
  styles: propStyles
}) {
  let {
    0: isChecked,
    1: setIsChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(checked || false);

  function wrapper(el) {
    setIsChecked(el.target.checked);
    onChange(el.target.checked);
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
    className: _CustomCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    style: _objectSpread({}, propStyles),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      onChange: wrapper,
      type: "checkbox",
      checked: isChecked
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: _CustomCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkmark
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: _CustomCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.label,
        children: label
      })]
    })]
  });
}

/***/ }),

/***/ "UG6H":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__uZ6RZ",
	"container": "Card_container__o0EtH",
	"collapsed": "Card_collapsed__3u7lu",
	"card_graph": "Card_card_graph__3Ytwc",
	"card_checkboxes": "Card_card_checkboxes__phAHc",
	"card_align_left": "Card_card_align_left__GpzsC",
	"card_graph_updated": "Card_card_graph_updated__3qvEq",
	"card_highlight": "Card_card_highlight__3nHgE",
	"card_highlight_2": "Card_card_highlight_2__pGhlA",
	"card_title": "Card_card_title__23exo",
	"card_title_2": "Card_card_title_2__1gfN_",
	"card_subtitle_2": "Card_card_subtitle_2__p7--G",
	"card_subtitle": "Card_card_subtitle__3invo",
	"card_subtitle_highlight": "Card_card_subtitle_highlight__2aNt8",
	"card_chart": "Card_card_chart__37hzo",
	"card_scrollable": "Card_card_scrollable__1Eiau",
	"text_left": "Card_text_left__1G5SI",
	"ram_subchart": "Card_ram_subchart__36M-A",
	"ram_subchart_bar": "Card_ram_subchart_bar__hmsNC",
	"ram": "Card_ram__1OaS2"
};


/***/ }),

/***/ "WMh8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieSuscetiveisProporcao; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5PhN");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lLkP");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GyP+");






function PieSuscetiveisProporcao({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let vaccines = statistics.getLastVaccineAvaliable();
  let lastCase = statistics.getLastCaseAvaliable(); // let infetadosVacinados = vaccines.dose_2 - lastCase.confirmados;

  let populacao_suscetivel = lastCase.populacao - (vaccines.dose_2 + lastCase.ativos + lastCase.recuperados + lastCase.obitos); //let populacao_suscetivel = 10286300 - (vaccines[vaccines.length - 1].Inoculacao2_Ac + infetadosVacinados + firstItem.Recuperados + firstItem.Obitos);

  let {
    main,
    shades,
    complements
  } = colors;

  const data = canvas => {
    return {
      //labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos', 'População suscetível'],
      labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos', 'População suscetível'],
      datasets: [{
        backgroundColor: [main, complements[0], complements[2], shades[2], complements[1]],
        data: [vaccines.dose_2, lastCase.ativos, lastCase.recuperados, lastCase.obitos, populacao_suscetivel] //data: [vaccines.dose_2 , valueCasesDiarios.reverse()[0].Activos, valueCasesDiarios.reverse()[0].Recuperados, valueCasesDiarios.reverse()[0].Obitos, populacao_suscetivel],

      }]
    };
  };

  const options = () => {
    return {
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: 'white',
          formatter: (value, chart) => {
            let sum = chart.dataset.data.reduce((prev, curr) => {
              return prev + curr;
            }, 0);
            sum = value / sum * 100;

            if (sum > 10) {
              return sum.toFixed(2) + '%';
            }

            return '';
          }
        }
      },
      onResize: (a, b, c) => {},
      legend: {
        position: 'bottom',
        align: 'start'
      },
      animation: {
        duration: 1000
      },
      tooltips: {
        callbacks: {
          label: function ({
            index
          }, {
            datasets,
            labels
          }) {
            let label = labels[index];
            let data = datasets[0].data[index];
            return `${label}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* formatNumber */ "c"])(data)}`;
          }
        }
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_3__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
        plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default.a],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}

/***/ }),

/***/ "WUak":
/***/ (function(module, exports) {

module.exports = require("plausible-tracker");

/***/ }),

/***/ "Ys+F":
/***/ (function(module, exports) {

module.exports = require("react-count-to");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cNEh":
/***/ (function(module, exports) {

module.exports = require("chartjs-plugin-annotation");

/***/ }),

/***/ "j8iR":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "CustomCheckbox_container__1pQEY",
	"card-actions": "CustomCheckbox_card-actions__3UXLw",
	"label": "CustomCheckbox_label__3-cK7",
	"checkmark": "CustomCheckbox_checkmark__3k_6i"
};


/***/ }),

/***/ "lLkP":
/***/ (function(module, exports) {

module.exports = require("chartjs-plugin-datalabels");

/***/ }),

/***/ "lN74":
/***/ (function(module) {

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

/***/ }),

/***/ "m5rz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineRt; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xPX6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GyP+");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5PhN");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function LineRt({
  statistics,
  colors,
  regiao
}) {
  let {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let {
    main
  } = colors;
  let {
    0: currentRegiao,
    1: setCurrentRegiao
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(regiao !== null && regiao !== void 0 ? regiao : 'continente');
  let {
    0: rtData,
    1: setRtData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!loaded) return;
    statistics.getRtRegiao(currentRegiao).then(data => setRtData(data));
  }, [currentRegiao]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    statistics.getRtRegiao(currentRegiao).then(data => {
      setRtData(data);
      setLoaded(true);
    });
  }, []);

  const data = canvas => {
    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    const gradient = ctx === null || ctx === void 0 ? void 0 : ctx.createLinearGradient(0, 0, 0, 400);
    let color = '';
    let {
      r,
      g,
      b
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* hexToRgb */ "d"])(main);

    try {
      //See if supports transperancy
      gradient.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',30%)');
      color = 'rgba(' + r + ',' + g + ',' + b + ',30%)';
    } catch (e) {
      gradient.addColorStop(0, '#d9f3ef');
      color = '#d9f3ef';
    }

    if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"]) {
      canvas.parentNode.style.width = _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"]) {
        canvas.parentNode.style.width = _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: rtData.labels,
      datasets: [_objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* lineChartCommon2 */ "u"]), {}, {
        label: 'R(t) limite superior',
        backgroundColor: color,
        borderColor: 'transparent',
        type: 'line',
        fill: '2',
        //fill until previous dataset
        data: rtData.rt.map(el => el.limite_superior_IC95.toFixed(2)),
        order: 1,
        yAxisID: 'rt'
      }), _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* lineChartCommon */ "t"]), {}, {
        label: 'R(t)',
        backgroundColor: main,
        borderColor: main,
        type: 'line',
        fill: false,
        data: rtData.rt.map(el => el.rt_numero_de_reproducao.toFixed(2)),
        order: 2,
        yAxisID: 'rt'
      }), _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* lineChartCommon2 */ "u"]), {}, {
        label: 'R(t) limite inferior',
        backgroundColor: 'white',
        borderColor: 'transparent',
        type: 'line',
        fill: false,
        data: rtData.rt.map(el => el.limite_inferior_IC95.toFixed(2)),
        order: 3,
        yAxisID: 'rt'
      })
      /* 	{
      	...lineChartCommon,
      	fill: false,
      	borderColor: complements[1],
      	label: 'Casos Confirmados',
      	backgroundColor: complements[1],
      	pointBorderColor: complements[1],
      	pointBackgroundColor: complements[1],
      	pointHoverBackgroundColor: complements[1],
      	pointHoverBorderColor: complements[1],
      	data: casesData.filter((el) => el.Data >= 1609070400000).map((el) => el.ConfirmadosNovos),
      	order: 4,
      }, */

      /* {
      	...lineChartCommon,
      	fill: false,
      	borderColor: complements[2],
      	label: 'Totalmente inoculados',
      	backgroundColor: complements[2],
      	pointBorderColor: complements[2],
      	pointBackgroundColor: complements[2],
      	pointHoverBackgroundColor: complements[2],
      	pointHoverBorderColor: complements[2],
      	data: valuesIn2,
      	order: -1,
      }, */
      ]
    };
  };

  const options = () => {
    let max = parseInt(Math.max(...rtData.rt.map(el => el.limite_superior_IC95.toFixed(2))) + 1);
    let annotation_percentage = 1 / max;
    return {
      plugins: {
        datalabels: {
          display: false
        }
      },
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          filter: function (item, chart) {
            return !item.text.match('limite');
          }
        }
      },
      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: annotation_percentage,
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
            content: 'R(t) = 1'
          }
        }]
      },
      animation: {
        duration: 1000
      },
      tooltips: {
        mode: 'index',
        intersect: true,
        callbacks: {
          title: (tooltipItem, data) => {
            return 'Dia ' + tooltipItem[0].label;
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10
          },
          display: false
        }, {
          id: 'rt',
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            max: max
          },
          display: true
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: 30,
            minTicksLimit: 30
          },
          stacked: true
        }]
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_Card__WEBPACK_IMPORTED_MODULE_5__[/* Card */ "a"], {
    textLeft: true,
    allowOverflow: true,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: [_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.card_scrollable].join(' '),
      children: regiao === undefined ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: 'toggle_buttons',
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'continente'
            }),
            onClick: () => {
              setCurrentRegiao('continente');
            },
            children: "Continente"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'nacional'
            }),
            onClick: () => {
              setCurrentRegiao('nacional');
            },
            children: "Nacional"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'lvt'
            }),
            onClick: () => {
              setCurrentRegiao('lvt');
            },
            children: "Lisboa e Vale do Tejo"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'algarve'
            }),
            onClick: () => {
              setCurrentRegiao('algarve');
            },
            children: "Algarve"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'alentejo'
            }),
            onClick: () => {
              setCurrentRegiao('alentejo');
            },
            children: "Alentejo"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'centro'
            }),
            onClick: () => {
              setCurrentRegiao('centro');
            },
            children: "Centro"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'madeira'
            }),
            onClick: () => {
              setCurrentRegiao('madeira');
            },
            children: "Madeira"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('toggle_button', {
              active: currentRegiao === 'acores'
            }),
            onClick: () => {
              setCurrentRegiao('acores');
            },
            children: "A\xE7ores"
          })]
        })
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: loaded ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        height: 80,
        ref: canvasRef,
        options: options(),
        data: data
      }) : ''
    })]
  });
}

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "uAdN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegiaoContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RegiaoContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('portugal');

/***/ }),

/***/ "vga7":
/***/ (function(module) {

module.exports = JSON.parse("{\"date\":1618916457183,\"dateSnsStartWeirdFormat\":\"05/04/2021\",\"dateSnsStart\":\"2021-04-05T00:00:00\",\"dateSns\":\"2021-04-11T00:00:00\",\"dateEcdc\":\"2021-04-11T00:00:00\",\"dateRt\":\"20210-03-28\",\"dateMadeira\":\"2021-04-12\",\"dateMadeiraCases\":\"2021-04-16\",\"dateAcores\":\"2021-04-15T00:00:00\",\"dateAcoresCases\":\"2021-04-17\"}");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TINT_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TINT_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TINT_30; });
/* unused harmony export COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SHADE_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SHADE_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SHADE_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COMPLEMENT_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COMPLEMENT_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COMPLEMENT_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RESIZE_TRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return lineChartCommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return lineChartCommon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REGIOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ECDC_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MADEIRA_DICOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACORES_DICOS; });
/* unused harmony export ACORES_DICOS_CONCELHOS */
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

/***/ })

/******/ });