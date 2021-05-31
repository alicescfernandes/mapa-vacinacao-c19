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

module.exports = __webpack_require__("RNiq");


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
  type,
  allowOverflow,
  isUpdating,
  textLeft,
  classes,
  sticky
}) {
  let styles2 = {};
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_align_left] = textLeft;
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_graph_updated] = isUpdating;
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_chart] = allowOverflow;
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_sticky] = sticky;
  styles2[_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_counter] = type === 'counter';
  let className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_graph, styles2);
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
/* harmony import */ var _data_acontecimentos_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bEWT");
var _data_acontecimentos_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("bEWT", 1);
/* harmony import */ var _context_regiao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uAdN");
/* harmony import */ var _CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("SSzp");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_9__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function VacinadosPorDia({
  statistics,
  colors
}) {
  let regiao = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_regiao__WEBPACK_IMPORTED_MODULE_7__[/* RegiaoContext */ "a"]);
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
  let {
    0: vacinas_stock,
    1: setVacinas_stock
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  let {
    main,
    tints,
    shades,
    complements
  } = colors;
  let {
    0: dim,
    1: setDim
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* calculateDims */ "a"])());
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    stock: true
  });
  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const data = canvas => {
    canvas.parentNode.parentNode.scrollLeft = dim.width;
    window.addEventListener('resize', () => {
      setDim(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* calculateDims */ "a"])());
    });
    let datasets = [{
      label: 'Vacinas diárias - Média movel de 7 dias',
      fill: false,
      lineTension: 0.5,
      overlayBars: true,
      type: 'line',
      lineBorder: 1,
      borderWidth: 3,
      borderColor: complements[1],
      borderJoinStyle: 'miter',
      pointBorderColor: complements[1],
      pointBackgroundColor: complements[1],
      pointBorderWidth: 1,
      pointHoverRadius: 3,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 3,
      data: values2,
      order: 2,
      stack: 'stack1'
    }, {
      label: 'Inoculação - 2ª Dose',
      fill: false,
      type: 'bar',
      overlayBars: true,
      backgroundColor: tints[0],
      data: valuesIn2,
      order: 3,
      display: false,
      stack: 'stack0'
    }, {
      label: 'Inoculação - 1ª Dose',
      backgroundColor: shades[0],
      borderColor: shades[0],
      data: valuesIn1,
      overlayBars: true,
      order: 4,
      stack: 'stack0'
    }, {
      label: 'Vacinas Totais',
      type: 'bar',
      overlayBars: true,
      fill: false,
      borderColor: main,
      backgroundColor: 'transparent',
      data: values,
      borderWidth: 2,
      order: 5,
      stack: 'stack0',
      yAxisID: 'axisy2'
    }];

    if (regiao === _constants__WEBPACK_IMPORTED_MODULE_3__[/* REGIOES */ "l"].PORTUGAL) {
      datasets.push({
        label: 'Stock de Vacinas - Estimativa',
        fill: false,
        lineTension: 0.5,
        overlayBars: true,
        type: 'line',
        lineBorder: 1,
        borderWidth: 3,
        borderColor: complements[2],
        borderJoinStyle: 'miter',
        pointBorderColor: complements[2],
        pointBackgroundColor: complements[2],
        pointBorderWidth: 1,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 3,
        data: vacinas_stock,
        order: 6,
        hidden: !toggleStats.stock,
        stack: 'stack2'
      });
    }

    return {
      labels: labels,
      datasets
    };
  };

  let numberFormatter = new Intl.NumberFormat();
  let horizontalAnnotations = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* makeAnnotations */ "f"])(_data_acontecimentos_json__WEBPACK_IMPORTED_MODULE_6__);
  let annotations = {
    annotations: [...horizontalAnnotations]
  };
  let aspectRatio = dim.width / dim.height;

  const options = () => {
    let max = Math.max(...values); //alert(max);

    if (regiao == _constants__WEBPACK_IMPORTED_MODULE_3__[/* REGIOES */ "l"].PORTUGAL) {
      max = Math.max(...(toggleStats.stock === true ? vacinas_stock : values));
    }

    return {
      aspectRatio,
      layout: {
        padding: -5
      },
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
        },
        annotation: regiao == 'portugal' ? annotations : {},
        legend: {
          position: 'bottom',
          align: 'end'
        }
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
        y: {
          position: 'right',
          stacked: true,
          display: true,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 10 : 12,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 10 : 12,
            callback: function (value, index, values) {
              return Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "d"])(value, false);
            }
          },
          suggestedMax: max
        },
        axisy2: {
          position: 'right',
          display: false,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 10 : 12,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 10 : 12,
            callback: function (value, index, values) {
              return Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "d"])(value, false);
            }
          },
          suggestedMax: max
        },
        x: {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 90 : 120,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 90 : 120
          }
        }
      }
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (values.length && loading === true) {
      statistics.getEstimativaStock().then(({
        vaccines_stock_var
      }) => {
        setVacinas_stock(vaccines_stock_var);
        setLoading(false);
      });
    }
  }, [values]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_Card__WEBPACK_IMPORTED_MODULE_5__[/* Card */ "a"], {
    allowOverflow: true,
    children: [regiao == _constants__WEBPACK_IMPORTED_MODULE_3__[/* REGIOES */ "l"].PORTUGAL && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: [_Card_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.card_sticky, _Card_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.card_checkboxes, _Card_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.card_scrollable].join(' '),
      style: {
        textAlign: 'left'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.stock,
        label: 'Stock de Vacinas - Estimativa',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            stock: checked
          }));
        }
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        width: dim.width
      },
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
        ref: canvasRef,
        options: options(),
        data: data
      }) : ''
    })]
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_constants__WEBPACK_IMPORTED_MODULE_1__[/* TINT_30 */ "r"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* TINT_50 */ "s"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* TINT_70 */ "t"]]);
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
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lLkP");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_acontecimentos_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bEWT");
var _data_acontecimentos_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t("bEWT", 1);
/* harmony import */ var _CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("SSzp");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xPX6");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_regiao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("uAdN");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Chart"].register([chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_5___default.a, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_6___default.a]);
function NumeroTotalVacinados({
  colors,
  statistics
}) {
  let regiao = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_regiao__WEBPACK_IMPORTED_MODULE_11__[/* RegiaoContext */ "a"]);
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
    0: dim,
    1: setDim
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* calculateDims */ "a"])());
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
  let [foreground, color_1, color_2] = colors;
  let commonProps = {
    fill: true,
    lineTension: 0.3,
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
  let horizontalAnnotations = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* makeAnnotations */ "f"])(_data_acontecimentos_json__WEBPACK_IMPORTED_MODULE_7__);
  let annotations = {
    annotations: [...horizontalAnnotations, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.segunda_fase ? toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(2700000) : 2700000 : null,
      borderColor: '#0A9DD1',
      borderWidth: 2,
      borderDash: [5, 5],
      label: {
        font: {
          style: 'normal'
        },
        backgroundColor: 'rgba(0,0,0,0.0)',
        textAlign: 'left',
        color: '#0A9DD1',
        position: 'end',
        xAdjust: 10,
        yAdjust: 10,
        fontSize: '13px',
        enabled: true,
        content: '2ª Fase - Abril (2.7 milhões de pessoas, ver notas)'
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.segunda_fase ? toggleStats.perHundred ? 20 : 1900000 : null,
      borderColor: 'transparent',
      label: {
        font: {
          style: 'normal'
        },
        enabled: false
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.primeira_fase ? toggleStats.perHundred ? 11 : 1200000 : null,
      borderColor: 'transparent',
      label: {
        font: {
          style: 'normal'
        },
        enabled: false
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.primeira_fase ? toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(950000) : 950000 : null,
      borderColor: '#0A9DD1',
      borderWidth: 2,
      borderDash: [5, 5],
      label: {
        font: {
          style: 'normal'
        },
        backgroundColor: 'rgba(0,0,0,0.0)',
        textAlign: 'left',
        color: '#0A9DD1',
        position: 'end',
        xAdjust: 5,
        yAdjust: 10,
        fontSize: '13px',
        enabled: true,
        content: '1ª Fase - Dezembro (950 mil pessoas)'
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y',
      value: toggleStats !== null && toggleStats !== void 0 && toggleStats.imunidade ? toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(10286300 * 0.7) : 10286300 * 0.7 : null,
      borderColor: '#D17615',
      borderWidth: 2,
      borderDash: [5, 5],
      label: {
        font: {
          style: 'normal'
        },
        backgroundColor: 'rgba(0,0,0,0.0)',
        textAlign: 'left',
        color: '#D17615',
        fontSize: '13px',
        position: 'end',
        xAdjust: 5,
        yAdjust: 10,
        enabled: true,
        content: 'Imunidade de Grupo (cerca de 7.2 milhões de pessoas)'
      }
    }, {
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y',
      borderColor: 'transparent',
      label: {
        font: {
          style: 'normal'
        },
        enabled: false
      }
    }]
  };
  let chartRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

  const data = (canvas, cenas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, dim.height);
    let {
      r,
      g,
      b
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* hexToRgb */ "e"])(foreground);

    try {
      gradient.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',15%)');
      gradient.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
    } catch (e) {
      gradient.addColorStop(0, '#d9f3ef');
      gradient.addColorStop(1, '#ffffff');
    }

    canvas.parentNode.parentNode.scrollLeft = dim.width;
    window.addEventListener('resize', () => {
      setDim(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* calculateDims */ "a"])());
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
        data: toggleStats.perHundred ? values.map(el => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(el)) : values
      }), _objectSpread(_objectSpread({}, commonProps), {}, {
        label: 'Total de vacinas administradas - 1ª Dose',
        fill: false,
        borderColor: color_1,
        pointBorderColor: color_1,
        pointBackgroundColor: color_1,
        pointHoverBackgroundColor: color_1,
        pointHoverBorderColor: color_1,
        data: toggleStats.perHundred ? valuesIn1.map(el => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(el)) : valuesIn1
      }), _objectSpread(_objectSpread({}, commonProps), {}, {
        label: 'Total de vacinas administradas - 2ª Dose',
        fill: false,
        borderColor: color_2,
        pointBorderColor: color_2,
        pointBackgroundColor: color_2,
        pointHoverBackgroundColor: color_2,
        pointHoverBorderColor: color_2,
        data: toggleStats.perHundred ? valuesIn2.map(el => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(el)) : valuesIn2
      })]
    };

    if (regiao == _constants__WEBPACK_IMPORTED_MODULE_9__[/* REGIOES */ "l"].PORTUGAL) {
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
        data: casesData.filter(el => el.Data >= 1609070400000).map(el => toggleStats.perHundred ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* perHundred */ "g"])(el.ConfirmadosAcumulado) : el.ConfirmadosAcumulado)
      }));
    }

    return chartData;
  };

  let aspectRatio = dim.width / dim.height;

  const options = () => {
    return {
      aspectRatio,
      plugins: {
        datalabels: {
          display: false
        },
        annotation: regiao == 'portugal' ? annotations : {},
        legend: {
          position: 'bottom',
          align: 'end'
        }
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
            return label + ': ' + Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "d"])(tooltipItem.value);
          },
          title: (tooltipItem, data) => {
            return 'Dia ' + tooltipItem[0].label;
          }
        }
      },
      scales: {
        y: {
          position: 'right',
          ticks: {
            beginAtZero: false,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_9__[/* RESIZE_TRESHOLD */ "m"] ? 10 : 12,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_9__[/* RESIZE_TRESHOLD */ "m"] ? 10 : 12,
            //max: 10000000,
            callback: value => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "d"])(value, false)
          }
        },
        x: {
          ticks: {
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_9__[/* RESIZE_TRESHOLD */ "m"] ? 90 : 120,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_9__[/* RESIZE_TRESHOLD */ "m"] ? 90 : 120
          }
        }
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
      className: [_Card_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.card_sticky, _Card_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.card_checkboxes, _Card_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.card_scrollable].join(' '),
      style: {
        textAlign: 'left'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.primeira_fase,
        label: '1ª Fase',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            primeira_fase: checked
          }));
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.primeira_fase,
        label: '2ª Fase',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            segunda_fase: checked
          }));
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.imunidade,
        label: 'Imunidade de Grupo',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            imunidade: checked
          }));
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_8__[/* CustomCheckbox */ "a"], {
        checked: toggleStats.infetados,
        label: 'Casos Confirmados',
        onChange: checked => {
          setToggleStats(_objectSpread(_objectSpread({}, toggleStats), {}, {
            infetados: checked
          }));
        }
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        width: dim.width
      },
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        plugins: [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_5___default.a],
        ref: chartRef,
        options: options(),
        data: data
      }) : ''
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
  }; 
  console.log(1)
  */

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
      let DAYS_PER_WEEK = 7;
      let totalDays = _data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.week * DAYS_PER_WEEK;
      let {
        values: totalDiarios,
        labels
      } = statistics.getDiariosInoculacoes();
      let vaccines_stock = Array(totalDiarios.length).fill(0);
      let vaccines_stock_var = Array(totalDays).fill(0);
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
      vaccines_stock_var = vaccines_stock_var.map((el, idx) => {
        current_vaccine_stock = current_vaccine_stock - (totalDiarios[idx] || 0) + vaccines_stock[idx];
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
        let lastItem = casesData[casesData.length - 1];
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
      let data2 = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/rt/${regiao}?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`).then(responseRt => {
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
      let data = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/rt/todas?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`).then(responseRt => {
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
      let owid = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/owid?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`);
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
      let weeks = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/weeks`, false);
      let com = {};
      let mod = {};
      let az = {};
      let janss = {};
      let ecdcRegion = _constants__WEBPACK_IMPORTED_MODULE_1__[/* ECDC_MAPPING */ "i"][regiao];
      ecdc.forEach(el => {
        if (parseInt(el['NumberDosesReceived']) > 0 && el['Region'] === ecdcRegion) {
          com[el['YearWeekISO']] = com[el['YearWeekISO']] || null;
          mod[el['YearWeekISO']] = mod[el['YearWeekISO']] || null;
          az[el['YearWeekISO']] = az[el['YearWeekISO']] || null;
          janss[el['YearWeekISO']] = janss[el['YearWeekISO']] || null;
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

          if (el['Vaccine'] === 'JANSS') {
            janss[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
          }
        }
      });
      com = Object.values(com);
      mod = Object.values(mod);
      az = Object.values(az);
      janss = Object.values(janss);
      labels = Object.values(labels);
      return {
        com,
        mod,
        az,
        janss,
        labels
      };
    },
    getAdministredDosesByAgeByWeek: async () => {
      let labels = {};
      let maxValue = 0;
      let weeks = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/weeks`, false);
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
            janss: [],
            target: 0,
            max: 0
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

          if (el['Vaccine'] === 'JANSS') {
            groups[el['TargetGroup']].janss[0] = (groups[el['TargetGroup']].janss[0] || 0) + parseInt(el['FirstDose']);
            groups[el['TargetGroup']].janss[1] = (groups[el['TargetGroup']].janss[1] || 0) + parseInt(el['SecondDose']);
          }

          groups[el['TargetGroup']].target = (groups[el['TargetGroup']].target || 0) + parseInt(el['Denominator']);
        }
      });
      return groups;
    },
    getTotalSNS: async () => {
      let sns = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/sns?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat)}`, false);
      return sns.filter(el => {
        return (el.TYPE === 'REGIONAL' || el.TYPE === 'GENERAL') && el.DATE == _data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat;
      });
    },
    getTotalSNSIdade: async () => {
      let sns = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/sns?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat)}`, false);
      return sns.filter(el => {
        return el.TYPE === 'AGES';
      });
    },
    getTotalSNSRecebidas: async () => {
      let sns = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/sns?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat)}`, false);
      let [item] = sns.filter(el => {
        return el.TYPE === 'GENERAL' && el.RECEIVED !== 'NA' && el.DATE == _data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat;
      });
      return item;
    },
    getTotalARS: async () => {
      let ars = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/ars?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateSnsStartWeirdFormat)}`, false);
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
      let weeks = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/weeks`, false);
      if (ecdc == false) return;
      let labels = {};
      let com = {};
      let mod = {};
      let az = {};
      let janss = {};
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
        janss[el['YearWeekISO']] = janss[el['YearWeekISO']] || 0;

        if (el['Vaccine'] === 'COM') {
          com[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }

        if (el['Vaccine'] === 'MOD') {
          mod[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }

        if (el['Vaccine'] === 'AZ') {
          az[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }

        if (el['Vaccine'] === 'JANSS') {
          janss[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
        }
      });
      com = Object.values(com).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      az = Object.values(az).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      mod = Object.values(mod).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      janss = Object.values(janss).reverse().map((el, idx, arr) => sumArray(arr.slice(idx, arr.length))).reverse();
      sum = mod.map((el, idx, arr) => {
        return com[idx] + az[idx] + mod[idx] + janss[idx];
      });
      return {
        mod,
        com,
        az,
        janss,
        sum,
        labels: Object.values(labels)
      };
    },
    getArquipelagoData: async () => {
      let res = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/${regiao}?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeira)}`);
      return res;
    },
    getMadeiraPDS: async () => {
      let res = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/${regiao}/pontosituacao?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeiraCases)}`);
      return res;
    },
    getSesaram: async () => {
      let res = await fetch(`/api/sesaram?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`);
      let json = res.json();
      return json;
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Promise.all([Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/ecdc?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateEcdc)}`, false), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/vaccinesold?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/cases?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.date)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/madeira?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeira)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/madeira/pontosituacao?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateMadeiraCases)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/acores?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateAcores)}`), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* fetchWithLocalCache */ "b"])(`/api/acores/pontosituacao?${btoa(_data_last_update_json__WEBPACK_IMPORTED_MODULE_3__.dateAcoresCases)}`)]).then(([ecdc, vaccines, cases, madeira, madeiraPDS, acores, acoresPDS]) => {
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

/***/ "MA5j":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"datepicker": "DatePickerButton_datepicker__2Fmgf"
};


/***/ }),

/***/ "MCc/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





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
  if (!tempo) tempo = window.innerWidth <= 500 ? 'ontem' : 'no dia anterior';

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
    className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_highlight,
    children: [numberFormatter.format(value).replace(/,/gm, ' '), " ", suffix ? suffix : '']
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [title == '' ? '' : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_title,
      children: title
    }), subtitle == '' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        height: 20
      }
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_subtitle,
      children: subtitle
    }), to === null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_highlight,
      style: {
        color: foreground
      },
      children: "N/A"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
        style: {
          color: foreground
        },
        className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_highlight,
        children: [numberFormatter.format(to).replace(/,/gm, ' '), " ", suffix ? suffix : '']
      }), Math.abs(to - yesterday) > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_subtitle,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
            style: {
              color: foreground
            },
            className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_subtitle_highlight,
            children: [Math.sign(difference) == 1 ? '+' : '-', " ", numberFormatter.format(Math.abs(difference)).replace(',', ' ')]
          }), "\xA0 que ", tempo]
        })
      }) : '', ps != null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_subtitle,
          children: ps.split('\n').map((el, idx) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
            children: [el, " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
          }, idx))
        })
      }) : '']
    })]
  });
}

/***/ }),

/***/ "NGrp":
/***/ (function(module, exports) {



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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GyP+");





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
    tints,
    shades,
    complements
  } = colors;

  const data = canvas => {
    return {
      labels: ['Vacinados apenas com uma dose', 'Vacinados com as duas doses', 'Casos Ativos', 'Casos Recuperados', 'Óbitos'],
      datasets: [{
        backgroundColor: [tints[1], main, complements[0], complements[2], shades[2]],
        data: [Math.abs(vaccines.dose_1 - vaccines.dose_2), vaccines.dose_2, lastCase.ativos, lastCase.recuperados, lastCase.obitos]
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
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
      },
      onResize: (a, b, c) => {},
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
            return `${label}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "d"])(data)}`;
          }
        }
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_3__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
        plugins: [],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}

/***/ }),

/***/ "RNiq":
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

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: ./components/DatePickerButton.module.scss
var DatePickerButton_module = __webpack_require__("MA5j");
var DatePickerButton_module_default = /*#__PURE__*/__webpack_require__.n(DatePickerButton_module);

// EXTERNAL MODULE: ./assets/arrow.svg
var arrow = __webpack_require__("aSZT");
var arrow_default = /*#__PURE__*/__webpack_require__.n(arrow);

// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__("tDG4");

// CONCATENATED MODULE: ./components/DatePickerButton.jsx









function DatePickerButton({
  minDate,
  maxDate,
  onDateSelect,
  colors
}) {
  const {
    0: startDate,
    1: setStartDate
  } = Object(external_react_["useState"])(new Date(maxDate));
  var [first, ...restDate] = Object(external_date_fns_["format"])(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
    locale: locale_["pt"]
  }).replace('-feira', '').split('');
  let d = [first.toUpperCase(), ...restDate].join('');
  var [first, ...restDate] = Object(external_date_fns_["format"])(startDate, "dd 'de' LLL 'de' yyyy", {
    locale: locale_["pt"]
  }).replace('-feira', '').split('');
  let d2 = [first.toUpperCase(), ...restDate].join('');
  Object(external_react_["useEffect"])(() => {
    onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(new Date(startDate));
  }, [startDate]);
  Object(external_react_["useEffect"])(() => {
    setStartDate(new Date(maxDate));
  }, [maxDate]);

  class ExampleCustomInput extends external_react_["Component"] {
    constructor(props) {
      super(props);
    }

    render() {
      let {
        onClick
      } = this.props;
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: DatePickerButton_module_default.a.datepicker,
            disabled: startDate.getTime() <= minDate,
            onClick: () => {
              let prevDay = Object(external_date_fns_["subDays"])(startDate, 1);
              return setStartDate(new Date(prevDay));
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(arrow_default.a, {
              className: DatePickerButton_module_default.a.svg
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            style: {
              width: '60vw',
              maxWidth: 285
            },
            className: DatePickerButton_module_default.a.datepicker,
            onClick: onClick,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: 'hide_micro_mobile',
              children: d
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: 'show_micro_mobile',
              children: d2
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: DatePickerButton_module_default.a.datepicker,
            disabled: startDate.getTime() >= maxDate,
            onClick: () => {
              let prevDay = startDate.getTime() + 86400 * 1000;
              return setStartDate(new Date(prevDay));
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(arrow_default.a, {
              className: DatePickerButton_module_default.a.svg
            })
          })]
        })
      });
    }

  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_datepicker_default.a, {
    minDate: minDate,
    maxDate: maxDate,
    selected: startDate,
    onChange: date => {
      setStartDate(date);
    },
    customInput: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExampleCustomInput, {})
  });
}
// EXTERNAL MODULE: ./components/graphs/NumeroTotalVacinados.jsx
var NumeroTotalVacinados = __webpack_require__("HWxk");

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

// EXTERNAL MODULE: external "plausible-tracker"
var external_plausible_tracker_ = __webpack_require__("WUak");
var external_plausible_tracker_default = /*#__PURE__*/__webpack_require__.n(external_plausible_tracker_);

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: ./data/generic.json
var generic = __webpack_require__("lN74");

// EXTERNAL MODULE: ./data/fases.json
var fases = __webpack_require__("paFH");

// EXTERNAL MODULE: ./components/Card.jsx
var Card = __webpack_require__("5PhN");

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__("xPX6");

// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__("GyP+");

// CONCATENATED MODULE: ./components/graphs/LineVacinadosInfecoesRecuperados.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function LineVacinadosInfecoesRecuperados({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let marriedData = {};
  let {
    values,
    labels,
    valuesIn1,
    valuesIn2,
    raw: rawDiarios
  } = statistics.getDiariosInoculacoes();
  let {
    raw: rawCasos
  } = statistics.getDiariosCases();
  let {
    main,
    shades,
    complements
  } = colors; //map the last 30 days in data
  //Marry the data pls

  if (labels.length > 0) {
    let datesVaccines = Array.from(rawDiarios).reverse().slice(0, 14);
    let datesCases = Array.from(rawCasos).reverse().slice(0, 14);
    datesVaccines.forEach(element => {
      let date = new Date(element.Data);
      let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;
      marriedData[key] = element;
    });
    datesCases.forEach((element, i) => {
      let date = new Date(element.Data);
      let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;

      if (marriedData[key] !== undefined) {
        marriedData[key] = _objectSpread(_objectSpread({}, element), marriedData[key]);
      }
    });
  }

  marriedData = Object.values(marriedData).reverse();

  const data = canvas => {
    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
    } else {
      canvas.parentNode.style.width = 'auto';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: labels.slice(labels.length - 14, labels.length),
      datasets: [{
        label: 'Inoculação - 2ª Dose',
        fill: false,
        type: 'bar',
        backgroundColor: main,
        data: valuesIn2.slice(valuesIn2.length - 14, valuesIn2.length),
        stack: 'stack0',
        order: 1
      }, {
        label: 'Inoculação - 1ª Dose',
        backgroundColor: shades[0],
        borderColor: shades[0],
        data: valuesIn1.slice(valuesIn1.length - 14, valuesIn1.length),
        stack: 'stack0',
        order: 2
      }, {
        label: 'Número de infectados diário',
        type: 'bar',
        backgroundColor: complements[1],
        data: marriedData.map(el => el.ConfirmadosNovos),
        stack: 'stack1',
        order: 4
      }, {
        label: 'Número de recuperados diário',
        type: 'bar',
        backgroundColor: complements[2],
        data: marriedData.map(el => el.VarRecuperados),
        stack: 'stack2',
        order: 5
      }]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
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
            return label + ': ' + Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: (tooltipItem, data) => {
            return 'Dia ' + tooltipItem[0].label;
          }
        }
      },
      scales: {
        y: {
          stacked: true,
          ticks: {
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: function (value, index, values) {
              return Object(utils["d" /* formatNumber */])(value, false);
            }
          }
        },
        x: {
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    if (values.length > 0) {
      setLoading(false);
    }
  }, [values, labels]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
        height: 80,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// EXTERNAL MODULE: ./components/graphs/PieVacinadosInfectadosRecuperadosObitos.jsx
var PieVacinadosInfectadosRecuperadosObitos = __webpack_require__("Q/64");

// CONCATENATED MODULE: ./components/graphs/BarsVacinacaoArs.jsx







function BarsVacinacaoArs({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let {
    main,
    tints
  } = colors;
  const {
    0: snsData,
    1: setSNSData
  } = Object(external_react_["useState"])({});

  const data = canvas => {
    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: snsData.filter(el => el.REGION != 'All').map(el => el.REGION.replace('All', 'Nacional')),
      datasets: [{
        label: '1ª Dose',
        backgroundColor: main,
        data: snsData.filter(el => el.REGION != 'All').map(el => el.CUMUL_VAC_1),
        fill: false,
        stack: 'stack1'
      }, {
        label: '2ª Dose',
        backgroundColor: tints[1],
        data: snsData.filter(el => el.REGION != 'All').map(el => el.CUMUL_VAC_2),
        stack: 'stack1'
      }]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false,
          color: 'white'
        }
      },
      layout: {
        padding: -5
      },
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        onHover: function (event, legend) {
          document.body.classList.add('mouse-pointer');
        },
        onLeave: function (event, legend) {
          document.body.classList.remove('mouse-pointer');
        }
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
            return label + ': ' + Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: () => {
            return '';
          }
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: true
          },
          ticks: {
            display: true,
            maxTicksLimit: 7,
            minTicksLimit: 7,
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        }],
        xAxes: [{
          stacked: true,
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero: true,
            display: true
          }
        }]
      }
    };
  };

  Object(external_react_["useEffect"])(async () => {
    setSNSData(await statistics.getTotalSNS());
    setLoading(false);
  }, []);
  return !loading === true ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
          height: 80,
          options: options(),
          data: data
        })
      }) : ''
    })
  }) : '';
}
// EXTERNAL MODULE: ./components/graphs/PieSuscetiveisProporcao.jsx
var PieSuscetiveisProporcao = __webpack_require__("WMh8");

// CONCATENATED MODULE: ./components/graphs/BarVacinasRecebidaDia.jsx

 //import 'chartjs-plugin-annotation';





function BarVacinasRecebidaDia({
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
  let [foreground, color_1, color_2,, color_3,,] = colors;
  /* let [annotationsToggle, setAnnotationsToggle] = useState({
  	dose: true,
  	dose2: true,
  	dose3: true,
  }); */

  const data = canvas => {
    let {
      labels,
      mod,
      com,
      az,
      janss
    } = graphData;

    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: labels.map(({
        from,
        to
      }) => {
        let fromDate = new Date(from);
        let toDate = new Date(to);
        return `De ${Object(utils["d" /* formatNumber */])(fromDate.getDate())}/${Object(utils["d" /* formatNumber */])(fromDate.getMonth() + 1)} a ${Object(utils["d" /* formatNumber */])(toDate.getDate())}/${Object(utils["d" /* formatNumber */])(toDate.getMonth() + 1)}`;
      }),
      datasets: [{
        label: 'Comirnaty (Pfizer/BioNTech)',
        fill: false,
        type: 'bar',
        overlayBars: true,
        backgroundColor: foreground,
        data: com,
        order: 2,
        display: false,
        stack: 'stack0'
      }, {
        label: 'Moderna',
        backgroundColor: color_1,
        borderColor: color_1,
        data: mod,
        type: 'bar',
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }, {
        label: 'AstraZeneca',
        backgroundColor: color_3,
        borderColor: color_3,
        type: 'bar',
        data: az,
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }, {
        label: 'Janssen',
        backgroundColor: color_2,
        borderColor: color_2,
        type: 'bar',
        data: janss,
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
        },
        legend: {
          position: 'bottom',
          align: 'start',
          onHover: function (event, legend) {
            document.body.classList.add('mouse-pointer');
          },
          onLeave: function (event, legend) {
            document.body.classList.remove('mouse-pointer');
          }
        }
      },
      animation: {
        duration: 1000
      },

      /* annotation: {
      	annotations: [
      		{
      			type: 'line',
      			mode: 'horizontal',
      			scaleID: 'y-axis-0',
      			value: annotationsToggle.dose ? generic.doses.valor : null,
      			borderColor: '#0A9DD1',
      			borderWidth: 2,
      			borderDash: [5, 5],
      				label: {
      				backgroundColor: 'rgba(0,0,0,0.0)',
      					drawTime: 'afterDatasetsDraw',
      					fontSize: 13,
      					textAlign: 'left',
      				fontColor: '#0A9DD1',
      				position: 'left',
      				xAdjust: 10,
      				yAdjust: -10,
      				fontSize: '13px',
      				fontStyle: 'bold',
      					enabled: true,
      				content: `Doses adquiridas - ${generic.doses.legenda} (01/03/2021) `,
      			},
      		},
      		{
      			type: 'line',
      			mode: 'horizontal',
      			scaleID: 'y-axis-0',
      			value: annotationsToggle.dose ? 41000000 : null,
      			borderColor: 'transparent',
      			borderWidth: 0,
      				label: {
      				backgroundColor: 'rgba(0,0,0,0.0)',
      					xAdjust: 0,
      				yAdjust: -10,
      					enabled: false,
      			},
      		},
      		{
      			type: 'line',
      			mode: 'horizontal',
      			scaleID: 'y-axis-0',
      			value: annotationsToggle.dose3 ? generic.doses3.valor : null,
      			borderColor: '#D17615',
      			borderWidth: 2,
      			borderDash: [5, 5],
      				label: {
      				backgroundColor: 'rgba(0,0,0,0.0)',
      					drawTime: 'afterDatasetsDraw',
      					fontSize: 13,
      					textAlign: 'left',
      				font: {
      					style: 'bold',
      				},
      				fontStyle: 'bold',
      					fontColor: '#D11541',
      				fontSize: '13px',
      				position: 'left',
      				xAdjust: 0,
      				yAdjust: -10,
      				enabled: true,
      				content: `Doses adquiridas - ${generic.doses3.legenda} (21/01/2020) `,
      			},
      		},
      		{
      			type: 'line',
      			mode: 'horizontal',
      			scaleID: 'y-axis-0',
      			value: annotationsToggle.dose2 ? generic.doses2.valor : null,
      			borderColor: '#D17615',
      			borderWidth: 2,
      			borderDash: [5, 5],
      				label: {
      				backgroundColor: 'rgba(0,0,0,0.0)',
      					drawTime: 'afterDatasetsDraw',
      					fontSize: 13,
      					textAlign: 'left',
      				font: {
      					style: 'bold',
      				},
      				fontStyle: 'bold',
      					fontColor: '#D17615',
      				fontSize: '13px',
      				position: 'left',
      				xAdjust: 0,
      				yAdjust: -10,
      				enabled: true,
      				content: `Doses adquiridas - ${generic.doses2.legenda} (04/12/2020) `,
      			},
      		},
      	],
      }, */
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label + ': ' + (parseInt(tooltipItem.value) ? Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value), false) : 0);
          },
          title: (tooltipItem, data) => {
            return tooltipItem[0].label;
          }
        }
      },
      scales: {
        y: {
          stacked: true,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        },
        x: {
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    statistics.getReceivedDosesByBrandByWeek().then(recievedData => {
      setGraphData(recievedData);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
        height: 80,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/graphs/BarAdministradasPorFaixaEtaria.jsx









function BarAdministradasPorFaixaEtaria({
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
        let fromDate = new Date(labels[key].from);
        let toDate = new Date(labels[key].to);
        return `De ${Object(utils["d" /* formatNumber */])(fromDate.getDate())}/${Object(utils["d" /* formatNumber */])(fromDate.getMonth() + 1)} a ${Object(utils["d" /* formatNumber */])(toDate.getDate())}/${Object(utils["d" /* formatNumber */])(toDate.getMonth() + 1)}`;
      }),
      datasets: [{
        label: 'Grupo 18/24 - 2ª Dose',
        labelGroup: 'Grupo 18/24',
        fill: false,
        type: 'bar',
        backgroundColor: shades[0],
        data: Object.values(groups['Age18_24'].dose_2),
        stack: 'stack',
        order: 1,
        hidden: true,
        display: false,
        customDose: 2
      }, {
        label: 'Grupo 18/24 - 1ª Dose',
        labelGroup: 'Grupo 18/24',
        backgroundColor: shades[0],
        data: Object.values(groups['Age18_24'].dose_1),
        stack: 'stack',
        order: 2,
        hidden: false,
        display: true,
        customDose: 1
      }, {
        label: 'Grupo 25/49 - 2ª Dose',
        labelGroup: 'Grupo 25/49',
        fill: false,
        type: 'bar',
        backgroundColor: tints[1],
        data: Object.values(groups['Age25_49'].dose_2),
        stack: 'stack',
        order: 3,
        hidden: true,
        display: false,
        customDose: 2
      }, {
        label: 'Grupo 25/49 - 1ª Dose',
        labelGroup: 'Grupo 25/49',
        backgroundColor: tints[1],
        data: Object.values(groups['Age25_49'].dose_1),
        stack: 'stack',
        order: 4,
        hidden: false,
        display: true,
        customDose: 1
      }, {
        label: 'Grupo 50/59 - 2ª Dose',
        labelGroup: 'Grupo 50/59',
        fill: false,
        type: 'bar',
        backgroundColor: main,
        data: Object.values(groups['Age50_59'].dose_2),
        stack: 'stack',
        order: 5,
        hidden: true,
        display: false,
        customDose: 2
      }, {
        label: 'Grupo 50/59 - 1ª Dose',
        labelGroup: 'Grupo 50/59',
        backgroundColor: main,
        data: Object.values(groups['Age50_59'].dose_1),
        stack: 'stack',
        order: 6,
        hidden: false,
        display: true,
        customDose: 1
      }, {
        label: 'Grupo 60/69 - 2ª Dose',
        labelGroup: 'Grupo 60/69',
        fill: false,
        type: 'bar',
        backgroundColor: shades[2],
        data: Object.values(groups['Age60_69'].dose_2),
        stack: 'stack',
        order: 7,
        hidden: true,
        display: false,
        customDose: 2
      }, {
        label: 'Grupo 60/69 - 1ª Dose',
        labelGroup: 'Grupo 60/69',
        backgroundColor: shades[2],
        data: Object.values(groups['Age60_69'].dose_1),
        stack: 'stack',
        order: 8,
        hidden: false,
        display: true,
        customDose: 1
      }, {
        label: 'Grupo 70/79 - 2ª Dose',
        labelGroup: 'Grupo 70/79',
        fill: false,
        type: 'bar',
        backgroundColor: complements[2],
        data: Object.values(groups['Age70_79'].dose_2),
        stack: 'stack',
        order: 9,
        hidden: true,
        display: false,
        customDose: 2
      }, {
        label: 'Grupo 70/79 - 1ª Dose',
        labelGroup: 'Grupo 70/79',
        backgroundColor: complements[2],
        data: Object.values(groups['Age70_79'].dose_1),
        stack: 'stack',
        order: 10,
        hidden: false,
        display: true,
        customDose: 1
      }, {
        label: 'Grupo 80+ - 2ª Dose',
        labelGroup: 'Grupo 80+',
        type: 'bar',
        backgroundColor: complements[1],
        data: Object.values(groups['Age80+'].dose_2),
        stack: 'stack',
        order: 11,
        hidden: true,
        display: false,
        customDose: 2
      }, {
        label: 'Grupo 80+ - 1ª Dose',
        labelGroup: 'Grupo 80+',
        backgroundColor: complements[1],
        data: Object.values(groups['Age80+'].dose_1),
        stack: 'stack',
        order: 12,
        hidden: false,
        display: true,
        customDose: 1
      }]
    };
  };

  const options = () => {
    let maxValue = 300000;
    return {
      //maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
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
        }
      },
      onResize: (a, b, c) => {
        if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
          a.canvas.parentNode.style.width = '1000px';
        } else {
          a.canvas.parentNode.style.width = 'auto';
        }
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
            return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value, false));
          },
          title: (tooltipItem, data) => {
            //var label = data.datasets[tooltipItem[0].datasetIndex];
            return tooltipItem[0].label;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: false,
            min: 0,
            max: maxValue,
            stepSize: (maxValue / 5).toFixed(0),
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        }, {
          stacked: false,
          id: 'total',
          display: false,
          ticks: {
            beginAtZero: false,
            min: 0,
            max: maxValue,
            stepSize: (maxValue / 5).toFixed(0),
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        }],
        xAxes: [{
          stacked: true
        }]
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    statistics.getAdministredDosesByAgeByWeek().then(data => {
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
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
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
// CONCATENATED MODULE: ./components/graphs/BarTotaisPorFaixaEtaria.jsx








let styles = {
  'vaccine-label': {
    textAlign: 'right',
    fontSize: '12px',
    lineHeight: '32px',
    margin: '0px'
  }
};

function CustomBarChart({
  type,
  total,
  colors,
  data,
  showHeading
}) {
  let {
    main,
    shades
  } = colors;

  const graphData = canvas => {
    return {
      labels: ['', '', '', ''],
      datasets: [{
        label: '2ª Dose',
        type: 'bar',
        backgroundColor: main,
        data: [data.mod[1], data.com[1], data.az[1], data.janss[1]],
        stack: 'stack1'
      }, {
        label: '1ª Dose',
        type: 'bar',
        backgroundColor: shades[1],
        data: [data.mod[0], data.com[0], data.az[0], data.janss[0]],
        stack: 'stack1'
      }]
    };
  };

  const options = () => {
    return {
      indexAxis: 'y',
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
          color: 'white'
        },
        legend: {
          display: false,
          position: 'top',
          align: 'start',
          onHover: function (event, legend) {
            document.body.classList.add('mouse-pointer');
          },
          onLeave: function (event, legend) {
            document.body.classList.remove('mouse-pointer');
          }
        }
      },
      layout: {
        padding: -5
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
            return label + ': ' + Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: (tooltipItem, data) => {
            return '';
          }
        }
      },
      scales: {
        y: {
          gridLines: {
            display: true
          },
          ticks: {
            display: false
          }
        },
        x: {
          stacked: true,
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero: true,
            display: true,
            stepSize: 1000000 / 5,
            callback: function (value, index, values) {
              return Object(utils["d" /* formatNumber */])(value, false);
            }
          },
          max: 1200000
        }
      }
    };
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        display: 'inline-block',
        lineHeight: '40px',
        position: 'relative',
        width: '19%',
        height: 150,
        overflow: 'hidden'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: styles['vaccine-label'],
        children: type
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: styles['vaccine-label'],
        children: "Pfizer/BioNTech"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: styles['vaccine-label'],
        children: "AstraZeneca"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: styles['vaccine-label'],
        children: "Janssen"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        display: 'inline-block',
        lineHeight: '40200',
        position: 'relative',
        width: '80%',
        height: 150,
        overflow: 'hidden'
      },
      className: 'scrollable',
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: '100%'
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
          options: options(),
          data: graphData
        })
      })
    })]
  });
}

function BarTotaisPorFaixaEtaria({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let {
    main,
    shades
  } = colors;
  let {
    0: graphData,
    1: setGraphData
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    statistics.getTotalAdministredDosesByAgeByWeek().then(data => {
      setGraphData(data);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: 'legends',
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: 'legend',
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                style: {
                  backgroundColor: shades[1]
                },
                className: 'color_sample'
              }), "1\xAA Dose"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: 'legend',
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                style: {
                  backgroundColor: main
                },
                className: 'color_sample'
              }), "2\xAA Dose"]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Entre os 18 e 24 anos"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: graphData['Age18_24'].target,
              data: graphData['Age18_24'],
              type: 'Moderna'
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Entre os 25 e 49 anos"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomBarChart, {
              colors: colors,
              total: graphData['Age25_49'].target,
              data: graphData['Age25_49'],
              type: 'Moderna'
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Entre os 50 e 59 anos"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: graphData['Age50_59'].target,
              data: graphData['Age50_59'],
              type: 'Moderna'
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Entre os 60 e 69 anos"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomBarChart, {
              colors: colors,
              total: graphData['Age60_69'].target,
              data: graphData['Age60_69'],
              type: 'Moderna'
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Entre os 70 e 79 anos"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: graphData['Age70_79'].target,
              data: graphData['Age70_79'],
              type: 'Moderna'
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Com mais de 80 anos"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomBarChart, {
              colors: colors,
              total: graphData['Age80+'].target,
              data: graphData['Age80+'],
              type: 'Moderna'
            })]
          })]
        })]
      }) : ''
    })
  });
}
// CONCATENATED MODULE: ./components/graphs/BarArs.jsx




function BarArs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BarArs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BarArs_ownKeys(Object(source), true).forEach(function (key) { BarArs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BarArs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BarArs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let BarArs_styles = {
  'labels-container': {
    display: 'inline-block',
    position: 'relative',
    //width: '15%',
    width: '0%',
    height: '126px',
    overflow: 'hidden',
    verticalAlign: 'top',
    padding: '15px 0px'
  },
  'labels-label': {
    textAlign: 'right',
    fontSize: '12px',
    marginBottom: '0px',
    lineHeight: 'calc(100px / 3)'
  },
  'graph-container': {
    display: 'inline-block',
    lineHeight: '40px',
    position: 'relative',
    width: '100%',
    height: 100,
    overflow: 'hidden'
  }
};

function BarArs_CustomBarChart({
  type,
  total,
  colors,
  data,
  showHeading
}) {
  let {
    main,
    shades,
    tints
  } = colors;

  const graphData = canvas => {
    return {
      //labels: ['Inoculados', 'Óbitos Novos', 'cenas3'],
      datasets: [{
        label: 'Inoculados Totais Novos (Acumulado 7 dias)',
        type: 'bar',
        backgroundColor: main,
        data: [data['TOTAL_VAC_2']],
        stack: 'stack1'
      }, {
        label: 'Casos Novos (Acumulado 7 dias)',
        type: 'bar',
        backgroundColor: tints[1],
        data: [data['casosNovos7Dias']],
        fill: false,
        stack: 'stack2'
      }, {
        label: 'Óbitos Novos (Acumulado 7 dias)',
        type: 'bar',
        backgroundColor: shades[1],
        data: [data['obitosNovos7Dias']],
        stack: 'stack3'
      }]
    };
  };

  const options = () => {
    return {
      indexAxis: 'y',
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
          color: 'white'
        }
      },
      layout: {
        padding: -5
      },
      legend: {
        display: false,
        position: 'top',
        align: 'start',
        onHover: function (event, legend) {
          document.body.classList.add('mouse-pointer');
        },
        onLeave: function (event, legend) {
          document.body.classList.remove('mouse-pointer');
        }
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
            return label + ': ' + Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: () => {
            return '';
          }
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: true
          },
          ticks: {
            display: true
          }
        }],
        xAxes: [{
          stacked: false,
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero: true,
            display: true,
            max: 120000,
            stepSize: 100000 / 5,
            callback: function (value, index, values) {
              return Object(utils["d" /* formatNumber */])(value, false);
            }
          }
        }]
      }
    };
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: BarArs_styles['labels-container'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: BarArs_styles['labels-label'],
        children: "Inoculados"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: BarArs_styles['labels-label'],
        children: "Casos Novos"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: BarArs_styles['labels-label'],
        children: "Casos Recuperados"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: BarArs_styles['graph-container'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: '100%'
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
          height: 5,
          options: options(),
          data: graphData
        })
      })
    })]
  });
}

function BarArs({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let {
    main,
    shades,
    tints
  } = colors;
  const {
    0: snsData,
    1: setSNSData
  } = Object(external_react_["useState"])({});
  const {
    0: ars,
    1: setArs
  } = Object(external_react_["useState"])({});
  let graphData = {
    All: {},
    'ARS Alentejo': {},
    'ARS Algarve': {},
    'ARS Centro': {},
    'ARS Norte': {},
    'ARS Lisboa e Vale do Tejo': {},
    Madeira: {},
    Açores: {}
  };

  if (!loading) {
    //map the data
    for (let key in graphData) {
      let obj1 = Object.assign(graphData[key], snsData.filter(el => el.REGION.replace('RA ', '') == key)[0]);
      let obj2 = ars[key];

      if (key in graphData) {
        graphData[key] = BarArs_objectSpread(BarArs_objectSpread({}, obj2), obj1);
      }
    }
  }

  Object(external_react_["useEffect"])(async () => {
    let d = await statistics.getTotalSNS();
    setSNSData(d);
    let arsD = await statistics.getTotalARS();
    setArs(arsD);
    setLoading(false);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: loading === false ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: 'legends',
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: 'legend',
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                style: {
                  backgroundColor: main
                },
                className: 'color_sample'
              }), "Inoculados Novos"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: 'legend',
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                style: {
                  backgroundColor: tints[1]
                },
                className: 'color_sample'
              }), "Casos Novos"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: 'legend',
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                style: {
                  backgroundColor: shades[1]
                },
                className: 'color_sample'
              }), "\xD3bitos Novos"]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Nacional"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: 400,
              data: graphData['All']
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: graphData['ARS Algarve'].REGION
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              data: graphData['ARS Algarve'],
              total: 5000
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: graphData['ARS Alentejo'].REGION
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: 400,
              data: graphData['ARS Alentejo']
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: graphData['ARS Centro'].REGION
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              data: graphData['ARS Centro'],
              total: 5000
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: graphData['ARS Lisboa e Vale do Tejo'].REGION
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: 400,
              data: graphData['ARS Lisboa e Vale do Tejo']
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: graphData['ARS Norte'].REGION
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              data: graphData['ARS Norte'],
              total: 5000
            })]
          })]
        })]
      }) : ''
    })
  });
}
// CONCATENATED MODULE: ./components/graphs/PieRecebidasAdquiridas.jsx





function PieRecebidasAdquiridas({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let {
    main
  } = colors;

  const data = canvas => {
    return {
      labels: ['Doses a Receber', 'Doses Recebidas'],
      datasets: [{
        backgroundColor: ['transparent', main],
        borderColor: [main, main],
        data: [statistics.encomendadas - statistics.recebidas, statistics.recebidas]
      }]
    };
  };

  const options = () => {
    return {
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: [main, 'white'],
          formatter: (value, chart) => {
            let sum = 0;

            if (value === statistics.encomendadas - statistics.recebidas) {
              sum = 1 - statistics.recebidas / statistics.encomendadas;
            }

            sum = sum * 100;

            if (sum > 10) {
              return `${Object(utils["d" /* formatNumber */])(value)} ( ${sum.toFixed(2)}% )`;
            }

            return '';
          }
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
      },
      onResize: (a, b, c) => {},
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

            if (label === 'Doses Adquiridas') {
              data = statistics.encomendadas;
            }

            return `${label}: ${Object(utils["d" /* formatNumber */])(data)}`;
          }
        }
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    setLoading(false);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Pie"], {
        plugins: [],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// CONCATENATED MODULE: ./components/graphs/PieAdministradasDoses.jsx





function PieAdministradasDoses({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  let {
    main,
    shades
  } = colors;

  const data = canvas => {
    return {
      labels: ['Doses Adminstradas - 1ª Inoculação', 'Doses Adminstradas - 2ª Inoculação', 'Doses por administrar'],
      datasets: [{
        backgroundColor: [main, shades[0], shades[1]],
        data: [statistics.primeiras, statistics.segundas, statistics.recebidas - statistics.administradas]
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
            let sum = 0;

            if (value === statistics.primeiras) {
              sum = statistics.primeiras / statistics.recebidas;
            }

            if (value === statistics.segundas) {
              sum = statistics.segundas / statistics.recebidas;
            }

            if (value === statistics.recebidas - statistics.administradas) {
              sum = 1 - statistics.administradas / statistics.recebidas;
            }

            sum = sum * 100;

            if (sum > 10) {
              return sum.toFixed(2) + '%';
            }

            return '';
          }
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
      },
      onResize: (a, b, c) => {},
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

            if (label === 'Doses Recebidas') {
              data = statistics.recebidas;
            }

            return `${label}: ${Object(utils["d" /* formatNumber */])(data)}`;
          }
        }
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    setLoading(false);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Pie"], {
        plugins: [],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// EXTERNAL MODULE: ./components/CustomCheckbox.jsx
var CustomCheckbox = __webpack_require__("SSzp");

// CONCATENATED MODULE: ./components/graphs/BarVacinasRecebidaDiaAcum.jsx



function BarVacinasRecebidaDiaAcum_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BarVacinasRecebidaDiaAcum_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BarVacinasRecebidaDiaAcum_ownKeys(Object(source), true).forEach(function (key) { BarVacinasRecebidaDiaAcum_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BarVacinasRecebidaDiaAcum_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BarVacinasRecebidaDiaAcum_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import 'chartjs-plugin-annotation';








function BarVacinasRecebidaDiaAcum({
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
  let [foreground, color_1, color_2,, color_3,,] = colors;
  let {
    0: annotationsToggle,
    1: setAnnotationsToggle
  } = Object(external_react_["useState"])({
    dose: true,
    dose2: true,
    dose3: true
  });

  const data = canvas => {
    let {
      labels,
      mod,
      com,
      az,
      janss
    } = graphData;

    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: labels.map(({
        from,
        to
      }) => {
        let fromDate = new Date(from);
        let toDate = new Date(to);
        return `De ${Object(utils["d" /* formatNumber */])(fromDate.getDate())}/${Object(utils["d" /* formatNumber */])(fromDate.getMonth() + 1)} a ${Object(utils["d" /* formatNumber */])(toDate.getDate())}/${Object(utils["d" /* formatNumber */])(toDate.getMonth() + 1)}`;
      }),
      datasets: [{
        label: 'Comirnaty (Pfizer/BioNTech)',
        fill: false,
        type: 'bar',
        overlayBars: true,
        backgroundColor: foreground,
        data: com,
        order: 2,
        display: false,
        stack: 'stack0'
      }, {
        label: 'Moderna',
        backgroundColor: color_1,
        borderColor: color_1,
        data: mod,
        type: 'bar',
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }, {
        label: 'AstraZeneca',
        backgroundColor: color_3,
        borderColor: color_3,
        type: 'bar',
        data: az,
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }, {
        label: 'Janssen',
        backgroundColor: color_2,
        borderColor: color_2,
        type: 'bar',
        data: janss,
        overlayBars: true,
        order: 3,
        stack: 'stack0'
      }]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
        },
        legend: {
          position: 'bottom',
          align: 'start',
          onHover: function (event, legend) {
            document.body.classList.add('mouse-pointer');
          },
          onLeave: function (event, legend) {
            document.body.classList.remove('mouse-pointer');
          }
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: annotationsToggle.dose ? generic.doses.valor : null,
            borderColor: '#0A9DD1',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              backgroundColor: 'rgba(0,0,0,0.0)',
              font: {
                style: 'normal'
              },
              textAlign: 'left',
              color: '#0A9DD1',
              position: 'start',
              xAdjust: 10,
              yAdjust: -10,
              enabled: true,
              content: `Doses adquiridas - ${generic.doses.legenda} (01/03/2021) `
            }
          }, {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: annotationsToggle.dose ? 41000000 : null,
            borderColor: 'transparent',
            borderWidth: 0,
            label: {
              backgroundColor: 'rgba(0,0,0,0.0)',
              xAdjust: 0,
              yAdjust: -10,
              enabled: false
            }
          }, {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: annotationsToggle.dose3 ? generic.doses3.valor : null,
            borderColor: '#D17615',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              backgroundColor: 'rgba(0,0,0,0.0)',
              textAlign: 'left',
              font: {
                style: 'normal'
              },
              color: '#D11541',
              position: 'start',
              xAdjust: 0,
              yAdjust: -10,
              enabled: true,
              content: `Doses adquiridas - ${generic.doses3.legenda} (21/01/2020) `
            }
          }, {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: annotationsToggle.dose2 ? generic.doses2.valor : null,
            borderColor: '#D17615',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              backgroundColor: 'rgba(0,0,0,0.0)',
              textAlign: 'left',
              font: {
                style: 'normal'
              },
              color: '#D17615',
              position: 'start',
              xAdjust: 0,
              yAdjust: -10,
              enabled: true,
              content: `Doses adquiridas - ${generic.doses2.legenda} (04/12/2020) `
            }
          }]
        }
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
            return label + ': ' + (parseInt(tooltipItem.value) ? Object(utils["d" /* formatNumber */])(parseInt(tooltipItem.value), false) : 0);
          },
          title: (tooltipItem, data) => {
            return tooltipItem[0].label;
          }
        }
      },
      scales: {
        y: {
          stacked: true,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        },
        x: {
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }
      }
    };
  };

  Object(external_react_["useEffect"])(async () => {
    setGraphData(await statistics.getDosesRecebidasAcum());
    setLoading(false);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
    allowOverflow: true,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [Card_module_default.a.card_checkboxes, Card_module_default.a.card_scrollable].join(' '),
      style: {
        textAlign: 'left'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCheckbox["a" /* CustomCheckbox */], {
        checked: annotationsToggle.dose,
        label: 'Doses adquiridas (01/03/2021)',
        onChange: checked => {
          setAnnotationsToggle(BarVacinasRecebidaDiaAcum_objectSpread(BarVacinasRecebidaDiaAcum_objectSpread({}, annotationsToggle), {}, {
            dose: checked
          }));
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCheckbox["a" /* CustomCheckbox */], {
        checked: annotationsToggle.dose3,
        label: 'Doses adquiridas (21/01/2021)',
        onChange: checked => {
          setAnnotationsToggle(BarVacinasRecebidaDiaAcum_objectSpread(BarVacinasRecebidaDiaAcum_objectSpread({}, annotationsToggle), {}, {
            dose3: checked
          }));
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCheckbox["a" /* CustomCheckbox */], {
        checked: annotationsToggle.dose2,
        label: 'Doses adquiridas (04/12/2020)',
        onChange: checked => {
          setAnnotationsToggle(BarVacinasRecebidaDiaAcum_objectSpread(BarVacinasRecebidaDiaAcum_objectSpread({}, annotationsToggle), {}, {
            dose2: checked
          }));
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
        height: 100,
        options: options(),
        data: data
      }) : ''
    })]
  });
}
// CONCATENATED MODULE: ./components/graphs/LineVacinadosEu.jsx




function LineVacinadosEu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LineVacinadosEu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LineVacinadosEu_ownKeys(Object(source), true).forEach(function (key) { LineVacinadosEu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LineVacinadosEu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LineVacinadosEu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function LineVacinadosEu({
  statistics,
  colors
}) {
  const {
    0: owidData,
    1: setOwidData
  } = Object(external_react_["useState"])({
    labels: '',
    pt: '',
    eu: ''
  });
  const {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(loaded);
  let {
    main,
    complements
  } = colors;
  let {
    0: activeDose,
    1: setActiveDose
  } = Object(external_react_["useState"])(0);
  let doses_map = {
    normal: ['total_vaccinations', 'people_vaccinated', 'people_fully_vaccinated'],
    per_hundred: ['total_vaccinations_per_hundred', 'people_vaccinated_per_hundred', 'people_fully_vaccinated_per_hundred']
  };
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(external_react_["useState"])({
    perHundred: true
  });
  const canvasRef = Object(external_react_["useRef"])(null);

  const data = canvas => {
    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    return {
      labels: owidData.labels,
      datasets: [LineVacinadosEu_objectSpread(LineVacinadosEu_objectSpread({}, constants["u" /* lineChartCommon */]), {}, {
        label: 'Portugal',
        backgroundColor: main,
        borderColor: main,
        type: 'line',
        fill: false,
        data: owidData.pt.map(el => {
          if (toggleStats.perHundred) {
            return el[doses_map.per_hundred[activeDose]];
          }

          return el[doses_map.normal[activeDose]];
        })
      }), LineVacinadosEu_objectSpread(LineVacinadosEu_objectSpread({}, constants["u" /* lineChartCommon */]), {}, {
        label: 'União Europeia',
        type: 'line',
        fill: false,
        backgroundColor: complements[2],
        borderColor: complements[2],
        data: owidData.eu.map(el => {
          if (toggleStats.perHundred) {
            return el[doses_map.per_hundred[activeDose]];
          }

          return el[doses_map.normal[activeDose]];
        })
      })]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
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
            beginAtZero: false,
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 30 : 60,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 30 : 60
          }
        }]
      }
    };
  };

  Object(external_react_["useEffect"])(async () => {
    let {
      labels,
      pt,
      eu
    } = await statistics.getOwid();
    setOwidData({
      labels,
      pt,
      eu
    });
    setLoaded(true);
  }, []);
  return loaded === true ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
    textLeft: true,
    allowOverflow: true,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [Card_module_default.a.card_scrollable].join(' '),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: 'toggle_buttons',
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 0
            }),
            onClick: () => {
              setActiveDose(0);
            },
            children: "Doses Totais"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
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
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCheckbox["a" /* CustomCheckbox */], {
        styles: {
          marginLeft: '50px'
        },
        checked: toggleStats.perHundred,
        label: 'Por cada 100 habitantes',
        onChange: checked => {
          setToggleStats({
            perHundred: checked
          });
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Line"], {
        height: 80,
        ref: canvasRef,
        options: options(),
        data: data
      })
    })]
  }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {});
}
// CONCATENATED MODULE: ./components/graphs/BarVacinadosEu.jsx



function BarVacinadosEu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BarVacinadosEu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BarVacinadosEu_ownKeys(Object(source), true).forEach(function (key) { BarVacinadosEu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BarVacinadosEu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BarVacinadosEu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function BarVacinadosEu({
  statistics,
  colors
}) {
  const {
    0: owidData,
    1: setOwidData
  } = Object(external_react_["useState"])({
    labels: '',
    pt: '',
    eu: ''
  });
  const {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(loaded);
  let {
    main,
    complements
  } = colors;
  let {
    0: activeDose,
    1: setActiveDose
  } = Object(external_react_["useState"])(0);
  let doses_map = {
    normal: ['total_vaccinations', 'new_1_doses', 'new_2_doses'],
    per_hundred: ['total_vaccinations_per_hundred', 'new_1_doses_per_hundred', 'new_2_doses_per_hundred']
  };
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(external_react_["useState"])({
    perHundred: true
  });
  const canvasRef = Object(external_react_["useRef"])(null);

  const data = canvas => {
    if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
      canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
    } else {
      canvas.parentNode.style.width = '100%';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
        canvas.parentNode.style.width = constants["m" /* RESIZE_TRESHOLD */] + 'px';
      } else {
        canvas.parentNode.style.width = '100%';
      }
    });
    let lineChartCommon = {
      lineTension: 0.0,
      lineBorder: 0,
      borderWidth: 0,
      borderJoinStyle: 'miter',
      pointBorderWidth: 1,
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      pointHitRadius: 5
    };
    return {
      labels: owidData.labels,
      datasets: [BarVacinadosEu_objectSpread(BarVacinadosEu_objectSpread({}, lineChartCommon), {}, {
        label: 'Portugal',
        backgroundColor: main,
        borderColor: main,
        fill: false,
        lineTension: 0,
        data: owidData.pt.map(el => {
          if (toggleStats.perHundred) {
            return el[doses_map.per_hundred[activeDose]];
          }

          return el[doses_map.normal[activeDose]];
        })
      }), BarVacinadosEu_objectSpread(BarVacinadosEu_objectSpread({}, lineChartCommon), {}, {
        label: 'União Europeia',
        fill: false,
        lineTension: 0,
        backgroundColor: complements[2],
        borderColor: complements[2],
        data: owidData.eu.map(el => {
          if (toggleStats.perHundred) {
            return el[doses_map.per_hundred[activeDose]];
          }

          return el[doses_map.normal[activeDose]];
        })
      })]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
      },
      bezierCurve: false,
      lineTension: 0,
      animation: {
        duration: 1000
      },
      tooltips: {
        mode: 'index',
        intersect: true,
        callbacks: {
          title: (tooltipItem, data) => {
            return 'Dia ' + tooltipItem[0].label;
          },
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label + ': ' + parseFloat(tooltipItem.value).toFixed(2);
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["d" /* formatNumber */])(value, false)
          }
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 30 : 60,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 30 : 60
          }
        }]
      }
    };
  };

  Object(external_react_["useEffect"])(async () => {
    let {
      labels,
      pt,
      eu
    } = await statistics.getOwid();
    setOwidData({
      labels,
      pt,
      eu
    });
    setLoaded(true);
  }, []);
  return loaded === true ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
    textLeft: true,
    allowOverflow: true,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: [Card_module_default.a.card_scrollable].join(' '),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: 'toggle_buttons',
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 0
            }),
            onClick: () => {
              setActiveDose(0);
            },
            children: "Doses Totais"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
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
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCheckbox["a" /* CustomCheckbox */], {
        styles: {
          marginLeft: '50px'
        },
        checked: toggleStats.perHundred,
        label: 'Por cada 100 habitantes',
        onChange: checked => {
          setToggleStats({
            perHundred: checked
          });
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Line"], {
        height: 80,
        ref: canvasRef,
        options: options(),
        data: data
      })
    })]
  }) : '';
}
// CONCATENATED MODULE: ./components/graphs/LineAdministradasPorFaixaEtaria.jsx




function LineAdministradasPorFaixaEtaria_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LineAdministradasPorFaixaEtaria_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LineAdministradasPorFaixaEtaria_ownKeys(Object(source), true).forEach(function (key) { LineAdministradasPorFaixaEtaria_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LineAdministradasPorFaixaEtaria_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LineAdministradasPorFaixaEtaria_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function LineAdministradasPorFaixaEtaria({
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
      pointHoverBorderColor: color,
      backgroundColor: color
    };
  }

  const data = canvas => {
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
    let labels = {};
    graphData.map(values => {
      labels[values.DATE] = '';
    });
    return {
      labels: Object.keys(labels).map(el => constants["q" /* SNS_WEEKS */][el]),
      datasets: [LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(main)), {}, {
        label: 'Até aos 17 anos',
        labelGroup: 'Grupo 18/24',
        fill: false,
        data: graphData.filter(el => el.AGEGROUP == '0-17 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(shades[0])), {}, {
        label: 'Entre 18 anos e 24 anos',
        labelGroup: 'Grupo 18/24',
        fill: false,
        data: graphData.filter(el => el.AGEGROUP == '18-24 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(complements[2])), {}, {
        label: 'Entre 25 anos e 49 anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        data: graphData.filter(el => el.AGEGROUP == '25-49 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(shades[2])), {}, {
        label: 'Entre 50 anos e 64 anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        data: graphData.filter(el => el.AGEGROUP == '50-64 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(complements[0])), {}, {
        label: 'Entre 60 e 79 anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        data: graphData.filter(el => el.AGEGROUP == '65-79 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(complements[1])), {}, {
        label: '80 ou mais anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        data: graphData.filter(el => el.AGEGROUP == '80 ou mais anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
        order: 1,
        customDose: 2
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
        },
        legend: {
          position: 'bottom',
          align: 'start',
          onHover: function (event, legend) {
            document.body.classList.add('mouse-pointer');
          },
          onLeave: function (event, legend) {
            document.body.classList.remove('mouse-pointer');
          }
        }
      },
      onResize: (a, b, c) => {
        if (window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */]) {
          a.canvas.parentNode.style.width = '1000px';
        } else {
          a.canvas.parentNode.style.width = 'auto';
        }
      },
      animation: {
        duration: 1000
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants["u" /* lineChartCommon */]), generateColor(shades[0])), {}, {
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
        y: {
          ticks: {
            beginAtZero: false,
            min: 0,
            stepSize: (maxValue / 5).toFixed(0),
            callback: value => Object(utils["d" /* formatNumber */])(value, false) + '%'
          },
          max: maxValue
        },
        x: {
          ticks: {
            beginAtZero: false
          }
        }
      }
    };
  };

  Object(external_react_["useEffect"])(() => {
    statistics.getTotalSNSIdade().then(data => {
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
// EXTERNAL MODULE: ./components/graphs/LineRt.jsx
var LineRt = __webpack_require__("m5rz");

// EXTERNAL MODULE: ./components/context/regiao.js
var regiao = __webpack_require__("uAdN");

// CONCATENATED MODULE: ./components/graphs/ArsMapa.jsx



function ArsMapa_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArsMapa_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArsMapa_ownKeys(Object(source), true).forEach(function (key) { ArsMapa_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArsMapa_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArsMapa_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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

function ArsMapa({
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
    tints
  } = colors;
  const {
    0: snsData,
    1: setSNSData
  } = Object(external_react_["useState"])({});
  const {
    0: mapLayers,
    1: setMapLayers
  } = Object(external_react_["useState"])(0);
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])({
    current_dose: 1
  });
  let layers2 = [];
  let graphData = {
    'ARS Alentejo': {},
    'ARS Algarve': {},
    'ARS Centro': {},
    'ARS Norte': {},
    'ARS Lisboa e Vale do Tejo': {}
  };

  if (loaded) {
    //map the data
    for (let key in graphData) {
      let obj1 = Object.assign(graphData[key], snsData.filter(el => el.REGION.replace('RA ', '') == key)[0]); //let obj2 = ars[key];

      if (key in graphData) {
        graphData[key] = ArsMapa_objectSpread({}, obj1);
      }
    }
  }

  const grades = [0, 20, 40, 60, 80];
  const grades_pretty = {
    0: '0% a 19%',
    20: '20% a 39%',
    40: '40% a 59%',
    60: '60% a 89%',
    80: '80% a 100%'
  };

  function layerStyle(feature) {
    let ars = feature.properties.ARS;
    let data = graphData[ars];
    let percentagem = parseFloat(data.COVER_1_VAC.replace(',', '.')) * 100; //(data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;

    if (options.current_dose === 2) {
      percentagem = parseFloat(data.COVER.replace(',', '.')) * 100; //(data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;
    }

    layers2.push(feature);
    return {
      fillOpacity: 1,
      fillColor: getColor(percentagem),
      lineJoin: 'round',
      stroke: true,
      weight: 2,
      color: '#018b79'
    };
  }

  const renderMap = async map => {
    const arsGeo = await fetch('/ars.geojson').then(r => r.json());
    const arsMapa = L.map('mapaars', {
      zoomSnap: 0.1,
      doubleClickZoom: false,
      closePopupOnClick: false,
      dragging: false,
      zoomSnap: false,
      zoomDelta: false,
      trackResize: false,
      touchZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
      draggable: false
    });
    arsMapa.dragging.disable();
    let layers = L.geoJSON(arsGeo, {
      onEachFeature: (feature, shape) => {
        let ars = feature.properties.ARS;
        let data = graphData[ars];
        let percentagem_1 = parseFloat(data.COVER_1_VAC.replace(',', '.')) * 100; //(data.dose_1 / populacao_residente_ram[feature.properties.Dico].valor) * 100;

        let percentagem_2 = parseFloat(data.COVER.replace(',', '.')) * 100; //(data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;

        shape.bindPopup(`<p>
						<strong>${feature.properties.Nome_Alternativo}</strong>
						<br>1ª Dose: ${Object(utils["d" /* formatNumber */])(400)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${Object(utils["d" /* formatNumber */])(200)} (${percentagem_2.toFixed(2)}%)
					</p>`);
        shape.on('click', () => {//console.log('click');
        });
      },
      style: layerStyle
    }).addTo(arsMapa); //Create legend

    setMapLayers(layers);
    arsMapa.fitBounds(layers.getBounds());
    arsMapa.setZoom(6.5);
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

    legend.addTo(arsMapa);
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
        labels: [''],
        datasets: [{
          label: 'Total de vacinas administradas - 1ª Dose',
          borderColor: main,
          backgroundColor: main,
          stack: 'stack0',
          order: 2,
          data: [el.CUMUL_VAC_1]
        }, {
          label: 'Total de vacinas administradas - 2ª Dose',
          borderColor: shades[1],
          backgroundColor: shades[1],
          data: [el.CUMUL_VAC_2],
          stack: 'stack0',
          order: 1
        }]
      };
      return chartData;
    };

    const options = () => {
      let populacao_residente = Math.floor(el.CUMUL_VAC_2 / parseFloat(el.COVER.replace(',', '.'))) || 100000;
      return {
        indexAxis: 'y',
        plugins: {
          datalabels: {
            display: false
          },
          legend: {
            position: 'bottom',
            align: 'start',
            display: false
          }
        },
        layout: {
          padding: {
            left: -12
          }
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
          y: {
            ticks: {
              beginAtZero: true
            },
            max: populacao_residente
          },
          x: {
            ticks: {
              beginAtZero: true,
              stepSize: Math.round(window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? populacao_residente / 3 : populacao_residente / 6),
              callback: value => Object(utils["d" /* formatNumber */])(value, false)
            },
            max: populacao_residente
          }
        }
      };
    };

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
      xs: 12,
      lg: 6,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Card_module_default.a.ram_subchart_bar,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: Card_module_default.a.text_left,
          children: el.REGION
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
          height: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 40 : 55,
          options: options(),
          data: data
        })]
      })
    });
  }

  Object(external_react_["useEffect"])(async () => {
    if (loaded === false) {
      setSNSData(await statistics.getTotalSNS());
      setLoaded(true);
    }

    if (loaded === true) {
      renderMap();
    }
  }, [loaded]);
  Object(external_react_["useEffect"])(() => {
    if (mapLayers) mapLayers.setStyle(layerStyle);
  }, [options.current_dose]);
  return loaded === true ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: 'toggle_buttons hide_mobile',
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: external_classnames_default()('toggle_button', {
              active: options.current_dose === 1
            }),
            onClick: () => {
              setOptions({
                current_dose: 1
              });
            },
            children: "1\xAA Dose"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: external_classnames_default()('toggle_button', {
              active: options.current_dose === 2
            }),
            onClick: () => {
              setOptions({
                current_dose: 2
              });
            },
            children: "2\xAA Dose"
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        xs: 0,
        lg: 4,
        className: 'hide_mobile',
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: "mapaars",
          style: {
            height: '500px'
          }
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
        xs: 12,
        lg: 8,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: 'legends',
          style: {
            paddingLeft: '10px'
          },
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
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: Object.values(graphData).map(renderGraph)
        })]
      })]
    })]
  }) : '';
} //<Row>{renderGraph(graphData.concelhos.ribeira_brava)}</Row>
// EXTERNAL MODULE: ./components/CounterGroup.jsx
var CounterGroup = __webpack_require__("NGrp");

// CONCATENATED MODULE: ./pages/index.js




function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















 //data























const plausible = external_plausible_tracker_default()({
  domain: 'vacinacaocovid19.pt',
  trackLocalhost: true
});
function Home() {
  let {
    statistics,
    update: updateData,
    ready: dataReady,
    versioning
  } = Object(useData["a" /* useData */])({
    regiao: 'portugal'
  });
  let rawData = statistics.getRaw();
  let {
    0: selectedItem,
    1: setSelectedItem
  } = Object(external_react_["useState"])({});
  let {
    0: previousItem,
    1: setPreviousItem
  } = Object(external_react_["useState"])({});
  let beacons = {
    mid_page: false,
    end_page: false
  };
  let {
    0: previousSelectedItem,
    1: setPreviousSelectedItem
  } = Object(external_react_["useState"])({});
  let {
    0: currentDate,
    1: setCurrentDate
  } = Object(external_react_["useState"])('');
  let {
    0: updating,
    1: setUpdating
  } = Object(external_react_["useState"])(false);
  let {
    0: last,
    1: setLast
  } = Object(external_react_["useState"])({});
  let {
    0: first,
    1: setFirst
  } = Object(external_react_["useState"])({});
  let {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  let numberFormatter = new Intl.NumberFormat('pt-PT');
  let {
    0: derivedNumbers,
    1: setDerivedNumbers
  } = Object(external_react_["useState"])({
    pessoasAVacinar: {
      prev: 0,
      current: 0
    },
    percentagem: {
      prev: 0,
      current: 0
    },
    percentagem_1d: {
      prev: 0,
      current: 0
    }
  }); //TODO: Move this to the hook

  let {
    0: doses,
    1: setDoses
  } = Object(external_react_["useState"])({
    encomendadas: generic.doses.valor,
    recebidas: 0,
    administradas: 0,
    primeiras: 0,
    segundas: 0,
    data: '',
    dataLong: ''
  });
  let {
    colors,
    colors_v2,
    setColors
  } = Object(useColors["a" /* useColors */])();

  function onSocketUpdate({
    data
  }) {
    updateData(data.type, data.data);
    setUpdating(true);
    setTimeout(() => {
      setUpdating(false);
    }, 1000);
  }

  function updateCurrentDate(d) {
    let prev_d = Object(external_date_fns_["subDays"])(d, 1);

    if (Object(external_date_fns_["compareAsc"])(d, new Date('2021-03-30')) >= 1) {
      setCurrentDate(Object(external_date_fns_["format"])(prev_d, 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }) + ' 23:59');
    } else {
      setCurrentDate(Object(external_date_fns_["format"])(d, 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }) + ' 00:00');
    }

    if (Object(external_date_fns_["isSameDay"])(d, new Date(1616716800000))) {
      //26 is an exception...
      setCurrentDate(Object(external_date_fns_["format"])(d, 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }) + ' 13:00');
    }
  }

  function onDateSelect(d) {
    let item = rawData.filter((el, elIdx) => {
      if (Object(external_date_fns_["isSameDay"])(el.Data, d.getTime())) {
        if (elIdx - 1 >= 0) {
          setPreviousItem(rawData[elIdx - 1]);
        } else {
          setPreviousItem(el);
        }

        return true;
      }
    });

    if (item.length > 0 && selectedItem.Data != item[0].Data) {
      setPreviousSelectedItem(selectedItem);
      setSelectedItem(item[0]);
    }

    let prev_d = Object(external_date_fns_["subDays"])(d, 1);

    if (Object(external_date_fns_["compareAsc"])(d, new Date('2021-03-30')) >= 1) {
      setCurrentDate(Object(external_date_fns_["format"])(prev_d, 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }) + ' 23:59');
    } else {
      setCurrentDate(Object(external_date_fns_["format"])(d, 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }) + ' 00:00');
    }

    if (Object(external_date_fns_["isSameDay"])(d, new Date(1616716800000))) {
      //26 is an exception...
      setCurrentDate(Object(external_date_fns_["format"])(d, 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }) + ' 13:00');
    }
  }

  Object(external_react_["useEffect"])(() => {
    var _rawData;

    let rawData = statistics.getRaw();

    if (((_rawData = rawData[rawData.length - 1]) === null || _rawData === void 0 ? void 0 : _rawData.Data) != last.Data) {
      onDateSelect(new Date(rawData[rawData.length - 1].Data));
      setLast(rawData[rawData.length - 1]);
      setPreviousItem(rawData[rawData.length - 2]);
    }
  }, [versioning]);
  Object(external_react_["useEffect"])(() => {
    let object = {
      pessoasAVacinar: {
        prev: derivedNumbers.pessoasAVacinar.current,
        current: numberFormatter.format(generic.populacao.valor * 0.7 - selectedItem.Inoculacao2_Ac)
      },
      percentagem: {
        prev: derivedNumbers.percentagem.current,
        current: selectedItem.Inoculacao2_Ac / generic.populacao.valor * 100
      },
      percentagem_1d: {
        prev: derivedNumbers.percentagem.current,
        current: selectedItem.Inoculacao1_Ac / generic.populacao.valor * 100
      }
    };
    setDerivedNumbers(object);

    if (selectedItem.Data) {
      updateCurrentDate(new Date(selectedItem.Data));
    }
  }, [selectedItem]);
  Object(external_react_["useEffect"])(async () => {
    if (dataReady === false) return;
    let rawData = statistics.getRaw();
    setLast(rawData[rawData.length - 1]);
    setSelectedItem(rawData[rawData.length - 1]);
    setPreviousItem(rawData[rawData.length - 2]);
    setFirst(rawData[0]);
    plausible.trackPageview();
    let {
      RECEIVED: sum
    } = await (statistics === null || statistics === void 0 ? void 0 : statistics.getTotalSNSRecebidas()); //sum = 4218420; //TODO: Remove this after SNS updates the CSV. https://covid19.min-saude.pt/wp-content/uploads/2021/05/Relato%CC%81rio-de-Vacinac%CC%A7a%CC%83o-n.o-12.pdf

    let item = rawData.filter(el => {
      return Object(external_date_fns_["isSameDay"])(el.Data, new Date(last_update.dateSns));
    });
    setDoses(pages_objectSpread(pages_objectSpread({}, doses), {}, {
      recebidas: sum,
      administradas: item[0].Vacinados_Ac,
      primeiras: item[0].Inoculacao1_Ac,
      segundas: item[0].Inoculacao2_Ac,
      data: Object(external_date_fns_["format"])(new Date(last_update.dateSns).getTime(), 'dd/LL/yyyy', {
        locale: locale_["pt"]
      }),
      dataLong: Object(external_date_fns_["format"])(new Date(last_update.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
        locale: locale_["pt"]
      })
    }));
    setLoaded(true);
  }, [dataReady]);

  function trackScrollEvents(e) {
    if (window.scrollY > 5580 && beacons.end_page === false) {
      beacons.end_page = true;
      plausible.trackEvent('end_page', {
        page: 'index'
      });
      return;
    }

    if (window.scrollY > 1657 && beacons.mid_page === false) {
      beacons.mid_page = true;
      plausible.trackEvent('mid_page', {
        page: 'index'
      });
      return;
    }
  }

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

  let renderCounterGroupV2 = () => {
    console.log(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    let f = new Intl.DateTimeFormat('pt-PT', options);
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: Home_module_default.a.datepickerRow,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          style: {
            textAlign: 'center'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            className: Card_module_default.a.card_subtitle_2,
            children: ["Atualizado a ", f.format(new Date(last.Data)), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Dados at\xE9 ", currentDate, " para Portugal Continental"]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
        className: "counterRow",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
              colors: colors,
              title: "Doses totais",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Vacinados_Ac,
              from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Vacinados_Ac) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
              colors: colors,
              title: "Doses  - 1\xAA Inocula\xE7\xE3o",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao1_Ac,
              from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao1_Ac) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
              colors: colors,
              title: "Doses - 2\xAA Inocula\xE7\xE3o",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao2_Ac,
              from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao2_Ac) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          id: "vacin1d",
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
              digits: 2,
              suffix: '%',
              colors: colors,
              title: "Popula\xE7\xE3o vacinada com pelo menos uma dose",
              from: derivedNumbers.percentagem_1d.prev,
              to: derivedNumbers.percentagem_1d.current
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          id: "vacin2d",
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
              digits: 2,
              suffix: '%',
              colors: colors,
              title: "Popula\xE7\xE3o totalmente vacinada",
              from: derivedNumbers.percentagem.prev,
              to: derivedNumbers.percentagem.current
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          id: "vacinfase",
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
            type: 'counter',
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              style: {
                marginBottom: '10px'
              },
              className: Card_module_default.a.card_title,
              children: "Fase atual de vacina\xE7\xE3o"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              title: "Consultar notas ou o plano de informa\xE7\xE3o para mais informa\xE7\xE3o",
              style: {
                color: colors[0]
              },
              className: Card_module_default.a.card_highlight_2,
              children: fases.fases[fases.fase_atual].nome
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              rel: "noopener noreferrer",
              target: "_blank",
              href: fases.fases[fases.fase_atual].fontes[0].permalink,
              className: `${Card_module_default.a.card_subtitle} ${Home_module_default.a.link}`,
              children: "+ mais info"
            })]
          })
        })]
      })]
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(regiao["a" /* RegiaoContext */].Provider, {
    value: 'portugal',
    children: loaded ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [renderCounterGroupV2(), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Container"], {
        className: "container-fluid app",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "N\xFAmero de vacinas administradas - Portugal Continental"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NumeroTotalVacinados["a" /* NumeroTotalVacinados */], {
              statistics: statistics,
              colors: colors
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
              className: Home_module_default.a.title,
              children: ["N\xFAmero de vacinas administradas por dia - Portugal Continental ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
                className: 'new',
                children: "atualizado"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: Home_module_default.a.subtitle,
              children: "A linha de stock de vacinas apresentada abaixo \xE9 uma estimativa com base nos dados do Centro Europeu de Controlo de Doen\xE7as. Para calcular este valor, assumimos que todas as entregas s\xE3o recebidas na Segunda-Feira, mesmo que logisticamente n\xE3o se verifique."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(VacinadosPorDia["a" /* VacinadosPorDia */], {
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
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LineAdministradasPorFaixaEtaria, {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Evolu\xE7\xE3o do programa de vacina\xE7\xE3o por ARS"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados deste 21 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArsMapa, {
                statistics: statistics,
                colors: colors_v2
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
                }), ' ', "por regi\xE3o (desde 01/01/2021)"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: Home_module_default.a.subtitle,
                children: "Nem todas as regi\xF5es apresentam dados no mesmo per\xEDodo temporal"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LineRt["a" /* LineRt */], {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de doses recebidas por semana"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarVacinasRecebidaDia, {
                colors: colors,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazyload_default.a, {
          height: 500,
          once: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de doses recebidas (acumulado)"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarVacinasRecebidaDiaAcum, {
                colors: colors,
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
                children: "Propor\xE7\xE3o de doses recebidas relativamente \xE0s doses adquiridas"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados desde 21 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieRecebidasAdquiridas, {
                colors: colors_v2,
                statistics: doses
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
                className: Home_module_default.a.title,
                children: ["Propor\xE7\xE3o de doses administradas relativamente \xE0s doses recebidas ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
                  className: 'new',
                  children: "atualizado"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados desde 21 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieAdministradasDoses, {
                colors: colors_v2,
                statistics: doses
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: Home_module_default.a.title,
              children: "N\xFAmero de doses administradas por semana e faixa et\xE1ria"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarAdministradasPorFaixaEtaria, {
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
                children: "Doses totais administradas por faixa et\xE1ria"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados deste 21 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateEcdc).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarTotaisPorFaixaEtaria, {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de vacinas administradas por dia com o n\xFAmero de infectados e de recuperados nos \xFAltimos 14 dias"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LineVacinadosInfecoesRecuperados, {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
                className: Home_module_default.a.title,
                children: ["Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "recuperados e \xF3bitos ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
                  className: 'new',
                  children: "atualizado"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieVacinadosInfectadosRecuperadosObitos["a" /* PieVacinadosInfectadosRecuperadosObitos */], {
                colors: colors_v2,
                statistics: statistics
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
                className: Home_module_default.a.title,
                children: ["Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " \xF3bitos e popula\xE7\xE3o suscet\xEDvel ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
                  className: 'new',
                  children: "atualizado"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieSuscetiveisProporcao["a" /* PieSuscetiveisProporcao */], {
                colors: colors_v2,
                statistics: statistics
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_lazyload_default.a, {
          height: 500,
          once: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de vacinas administradas em Portugal mais Ilhas e na Uni\xE3o Europeia"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LineVacinadosEu, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de vacinas administradas por dia em Portugal mais Ilhas e na Uni\xE3o Europeia"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarVacinadosEu, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })]
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
                href: "https://www.pordata.pt/Portugal",
                children: "n\xFAmero de popula\xE7\xE3o de Portugal (dados do PORDATA)"
              }), ". De acordo com o\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",
                children: "Instituto Ricardo Jorge, ser\xE1 preciso imunizar entre 60% a 70% da popula\xE7\xE3o para se atingir a imunidade de grupo."
              }), ' ', "Os valores apresentados aqui foram calculados com uma percentagem de 70%."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["A popula\xE7\xE3o suscet\xEDvel a infe\xE7\xE3o foi calculada com base na popula\xE7\xE3o total menos a soma do n\xFAmero de \xF3bitos, casos ativos, popula\xE7\xE3o infectada, vacinada e recuperada assumindo que casos de reinfe\xE7\xF5es s\xE3o raros.", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                href: "https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",
                target: ":blank",
                children: "At\xE9 25/02 foram confirmados 57 casos de reinfec\xE7\xE3o com o novo coronav\xEDrus."
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["No in\xEDcio da campanha de vacina\xE7\xE3o foi anunciadas que ia haver 3 fases de vacina\xE7\xE3o, e que a primeria iria ser dividida em duas partes. A partir de Dezembro iriam ser administradas vacinas a Profissionais de sa\xFAde envolvidos na presta\xE7\xE3o de cuidados a doentes, profissionais das for\xE7as armadas, for\xE7as de seguran\xE7a e servi\xE7os cr\xEDticos, profissionais e residentes em ERPIs e institui\xE7\xF5es similares e profissionais e utentes da RNCCI. ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "A partir de Fevereiro iriam ser administradas vacinas a pessoas com mais de 50 ano, e com Insufici\xEAncia card\xEDaca, Doen\xE7a coron\xE1ria, Insufici\xEAncia renal (TFG menor que 60ml/min) ou com doen\xE7a respirat\xF3ria cr\xF3nica. ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Para a segunda fase est\xE1 previsto vacinar pessoas com 65 ou mais anos com ou sem patologias que n\xE3o tenham sido vacinadas previamente e pessoas entre os 50 e os 64 anos com pelo menos uma das seguintes patologias descritas no plano de vacina\xE7\xE3o. Mais informa\xE7\xE3o sobre o plano de vacina\xE7\xE3o pode ser consultada", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://www.sns.gov.pt/wp-content/uploads/2020/12/Plano_Vacinacao_COVID-19.pdf",
                target: ":blank",
                children: "aqui"
              }), ' ', "e", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://covid19.min-saude.pt/vacinacao/",
                target: ":blank",
                children: "aqui"
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
              children: ["Os dados apresentados s\xE3o retirados do portal\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/",
                children: "Monitoriza\xE7\xE3o do SNS da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), "\xA0e do s\xEDtio\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",
                children: "Ponto de Situa\xE7\xE3o da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), ". A atualiza\xE7\xE3o destes dados \xE9 di\xE1ria.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Os dados relativos \xE0 distribui\xE7\xE3o das vacinas e administra\xE7\xE3o das mesmas por grupo et\xE1ria s\xE3o disponibilizados pelo", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://www.ecdc.europa.eu/en",
                target: "_blank",
                children: "ECDC (European Centre for Disease Prevention and Control)"
              }), "\xA0 e s\xE3o atualizados atrav\xE9s dos\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covid19-vaccine-report.ecdc.europa.eu/#6_Reported_data",
                children: "relat\xF3rios publicados semanalmente."
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["Os dados relativos \xE0 vacina\xE7\xE3o por ARS \xE9 tirada do portal sobre", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://covid19.min-saude.pt/",
                target: "_blank",
                children: "a COVID-19 da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), "\xA0 e s\xE3o atualizados atrav\xE9s dos\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covid19.min-saude.pt/relatorio-de-vacinacao/",
                children: "relat\xF3rios publicados semanalmente."
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["O n\xFAmero total de vacinas adquiridas anunciado pela Dire\xE7\xE3o-Geral de Sa\xFAde foi divulgado atrav\xE9s de um comunicado feito no s\xEDtio do Governo de Portugal, que", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C",
                target: "_blank",
                children: "pode ser consultado aqui."
              }), ' ', "No dia 01 de Mar\xE7o de 2021, foi anunciado que o n\xFAmero total de vacinas adquiridas aumentou para 38 milh\xF5es de doses, num comunicado dirigido \xE0 imprensa que", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                href: "https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19",
                target: "_blank",
                children: "pode ser consultado aqui."
              }), "\xA0Como base para as contas, assumimos que Portugal adquiriu 38 milh\xF5es de doses."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["Os dados relativos \xE0 vacina\xE7\xE3o na Uni\xE3o Europeia s\xE3o atualizados pelo\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://ourworldindata.org/",
                children: "Our World In Data"
              }), "\xA0 e est\xE3o dispon\xEDveis\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv",
                children: "no reposit\xF3rio de Github"
              }), ". Os dados relativos ao", ' ', /*#__PURE__*/Object(jsx_runtime_["jsxs"])("em", {
                children: ["R", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sub", {
                  children: "t"
                }), ' ']
              }), "s\xE3o atualizados pelo\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://ourworldindata.org/",
                children: "Instituto Nacional Doutor Ricardo Jorge"
              }), "\xA0 e est\xE3o dispon\xEDveis\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                rel: "noopener noreferrer",
                className: Home_module_default.a.link,
                target: "_blank",
                href: "http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/",
                children: "nesta p\xE1gina."
              })]
            })]
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
	"card_counter": "Card_card_counter__2AlBw",
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
	"card_sticky": "Card_card_sticky__2cnJF",
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GyP+");





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

  let vacinados_apenas_uma = Math.abs(vaccines.dose_1 - vaccines.dose_2);
  let populacao_suscetivel = lastCase.populacao - (vacinados_apenas_uma + vaccines.dose_2 + lastCase.ativos + lastCase.recuperados + lastCase.obitos); //let populacao_suscetivel = 10286300 - (vaccines[vaccines.length - 1].Inoculacao2_Ac + infetadosVacinados + firstItem.Recuperados + firstItem.Obitos);

  let {
    main,
    tints,
    shades,
    complements
  } = colors;

  const data = canvas => {
    return {
      //labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos', 'População suscetível'],
      labels: ['Vacinados apenas com uma dose', 'Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos', 'População suscetível'],
      datasets: [{
        backgroundColor: [tints[1], main, complements[0], complements[2], shades[2], complements[1]],
        data: [vacinados_apenas_uma, vaccines.dose_2, lastCase.ativos, lastCase.recuperados, lastCase.obitos, populacao_suscetivel] //data: [vaccines.dose_2 , valueCasesDiarios.reverse()[0].Activos, valueCasesDiarios.reverse()[0].Recuperados, valueCasesDiarios.reverse()[0].Obitos, populacao_suscetivel],

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
        },
        legend: {
          position: 'bottom',
          align: 'start'
        }
      },
      onResize: (a, b, c) => {},
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
            return `${label}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "d"])(data)}`;
          }
        }
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_3__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
        plugins: [],
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

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "aSZT":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Arrow (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M0 9.155V.439C0 .047.275-.112.614.084l3.775 2.179 3.774 2.179c.339.196.339.514 0 .71L4.389 7.331.614 9.51C.275 9.706 0 9.547 0 9.155z"}));
}

Arrow.defaultProps = {"style":{"isolation":"isolate"},"viewBox":"0 0 8.418 9.594","width":"11.224","height":"12.792"};

module.exports = Arrow;

Arrow.default = Arrow;


/***/ }),

/***/ "bEWT":
/***/ (function(module) {

module.exports = JSON.parse("[{\"data\":\"2021-01-06\",\"mode\":\"vertical\",\"color\":\"#01ae97\",\"display\":true,\"position\":20,\"marcador\":\"Aprovação Moderna\",\"fonte\":\"https://www.ema.europa.eu/en/news/ema-recommends-covid-19-vaccine-moderna-authorisation-eu\"},{\"data\":\"2021-01-29\",\"mode\":\"vertical\",\"color\":\"#01ae97\",\"display\":true,\"position\":33,\"marcador\":\"Aprovação AstraZeneca\",\"fonte\":\"https://www.ema.europa.eu/en/news/ema-recommends-covid-19-vaccine-astrazeneca-authorisation-eu\"},{\"data\":\"2021-03-11\",\"mode\":\"vertical\",\"color\":\"#01ae97\",\"display\":true,\"position\":74,\"marcador\":\"Aprovação Janssen\",\"fonte\":\"https://www.ema.europa.eu/en/news/ema-recommends-covid-19-vaccine-janssen-authorisation-eu\"},{\"data\":\"2021-03-15\",\"mode\":\"vertical\",\"color\":\"#D11541\",\"display\":true,\"position\":78,\"marcador\":\"Suspensão AstraZeneca\",\"fonte\":\"https://sicnoticias.pt/especiais/vacinar-portugal/2021-03-15-Portugal-suspende-administracao-da-vacina-da-AstraZeneca\"},{\"data\":\"2021-03-18\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":true,\"position\":81,\"marcador\":\"Retoma AstraZeneca\",\"fonte\":\"https://tvi24.iol.pt/sociedade/31-03-2021/covid-19-portugal-retoma-vacinacao-com-astrazeneca-tres-depois-de-suspensao\"},{\"data\":\"2021-04-15\",\"mode\":\"vertical\",\"color\":\"#D11541\",\"display\":false,\"position\":109,\"marcador\":\"Suspensão AstraZeneca (Grupos etários mais jovens)\",\"fonte\":\"https://www.publico.pt./2021/03/15/sociedade/noticia/suspensao-vacina-astrazeneca-adia-abril-imunizacao-professores-1954569\"},{\"data\":\"2021-04-13\",\"mode\":\"vertical\",\"color\":\"#D11541\",\"display\":true,\"position\":107,\"marcador\":\"Adiamento Envio Janssen\",\"fonte\":\"https://eco.sapo.pt/2021/04/13/chegada-da-vacina-da-janssen-a-portugal-foi-adiada-confirma-infarmed/\"},{\"data\":\"2021-04-20\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":true,\"position\":114,\"xAdjust\":-8,\"marcador\":\"Retoma Envio Janssen\",\"fonte\":\"https://www.irishtimes.com/news/health/johnson-johnson-to-resume-deliveries-of-covid-19-vaccine-to-eu-1.4542574\"},{\"data\":\"2021-04-21\",\"mode\":\"vertical\",\"color\":\"#01ae97\",\"display\":true,\"position\":115,\"marcador\":\"Inicío da 2ª Fase de Vacinação \",\"fonte\":\"https://www.sns.gov.pt/noticias/2021/04/21/plano-de-vacinacao-2/\"},{\"data\":\"2021-04-23\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":true,\"position\":117,\"marcador\":\"Autoagendamento - 65+\",\"fonte\":\"https://covid19.min-saude.pt/utentes-com-mais-de-65-anos-podem-agendar-a-vacinacao-a-partir-de-hoje/\"},{\"data\":\"2021-04-30\",\"mode\":\"vertical\",\"color\":\"#01ae97\",\"display\":true,\"position\":124,\"marcador\":\"Administração Janssen\",\"fonte\":\"https://covid19.min-saude.pt/utentes-com-mais-de-65-anos-podem-agendar-a-vacinacao-a-partir-de-hoje/\"},{\"data\":\"2021-05-09\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":true,\"position\":132,\"marcador\":\"Autoagendamento - 60+ \",\"fonte\":\"https://www.publico.pt/2021/05/09/sociedade/noticia/autoagendamento-vacinacao-anticovid-pessoas-partir-60-anos-ja-disponivel-1961830\"},{\"data\":\"2021-05-13\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":true,\"position\":136,\"marcador\":\"Autoagendamento - 55+ \",\"fonte\":\"https://www.tsf.pt/portugal/sociedade/agendamento-automatico-para-a-vacinacao-ja-esta-aberto-as-pessoas-com-mais-de-55-anos-13716509.html\"},{\"data\":\"2021-05-27\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":true,\"position\":150,\"marcador\":\"Autoagendamento - 50+ \",\"fonte\":\"https://www.tsf.pt/portugal/sociedade/tem-mais-de-50-anos-ja-pode-agendar-a-vacina-contra-a-covid-19-13777710.html\"},{\"data\":\"2021-06-06\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":false,\"position\":150,\"marcador\":\"Autoagendamento - 40+ \",\"fonte\":\"https://www.dn.pt/sociedade/auto-agendamento-da-vacinacao-para-pessoas-com-mais-de-50-anos-ja-esta-disponivel-13777746.html\"},{\"data\":\"2021-06-20\",\"mode\":\"vertical\",\"color\":\"#D17615\",\"display\":false,\"position\":150,\"marcador\":\"Autoagendamento - 30+ \",\"fonte\":\"https://www.dn.pt/sociedade/auto-agendamento-da-vacinacao-para-pessoas-com-mais-de-50-anos-ja-esta-disponivel-13777746.html\"}]");

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

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":12435,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

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
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* hexToRgb */ "e"])(main);

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
      datasets: [_objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* lineChartCommon2 */ "v"]), {}, {
        label: 'R(t) limite superior',
        backgroundColor: color,
        borderColor: 'transparent',
        type: 'line',
        fill: '2',
        //fill until previous dataset
        data: rtData.rt.map(el => el.limite_superior_IC95.toFixed(2)),
        order: 1
      }), _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* lineChartCommon */ "u"]), {}, {
        label: 'R(t)',
        backgroundColor: main,
        borderColor: main,
        type: 'line',
        fill: false,
        data: rtData.rt.map(el => el.rt_numero_de_reproducao.toFixed(2)),
        order: 2
      }), _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* lineChartCommon2 */ "v"]), {}, {
        label: 'R(t) limite inferior',
        backgroundColor: 'white',
        borderColor: 'transparent',
        type: 'line',
        fill: false,
        data: rtData.rt.map(el => el.limite_inferior_IC95.toFixed(2)),
        order: 3
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
    return {
      plugins: {
        datalabels: {
          display: false
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
            scaleID: 'y',
            value: 1,
            borderColor: '#0A9DD1',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              backgroundColor: 'rgba(0,0,0,0.0)',
              drawTime: 'beforeDatasetsDraw',
              font: {
                style: 'normal'
              },
              textAlign: 'left',
              color: '#0A9DD1',
              position: 'end',
              xAdjust: 10,
              yAdjust: -10,
              enabled: true,
              content: 'R(t) = 1'
            }
          }]
        }
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
        y: {
          type: 'linear',
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            minTicksLimit: window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESIZE_TRESHOLD */ "m"] ? 8 : 10,
            stepSize: max / 4
          },
          min: 0,
          max: max
        },
        x: {
          ticks: {
            maxTicksLimit: 30,
            minTicksLimit: 30
          }
        }
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
              active: currentRegiao === 'norte'
            }),
            onClick: () => {
              setCurrentRegiao('norte');
            },
            children: "Norte"
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

/***/ "paFH":
/***/ (function(module) {

module.exports = JSON.parse("{\"fase_atual\":2,\"fases\":[{\"nome\":\"1ª Fase\",\"inicio\":1609027200000,\"objetivo_formatado\":\"950 mil pessoas\",\"fim\":null,\"objetivo\":950000,\"bullet_points\":[\"Profissionais de saúde envolvidos na prestação de cuidados a doentes\",\"Profissionais das forças armadas, forças de segurança e serviços críticos\",\"Profissionais e residentes em Estruturas Residenciais para Pessoas Idosas (ERPI) e instituições similares\",\"Profissionais e utentes da Rede Nacional de Cuidados Continuados Integrados (RNCCI).\"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]},{\"nome\":\"1ª Fase\",\"inicio\":1580515200000,\"fim\":null,\"objetivo\":950000,\"objetivo_formatado\":\"950 mil pessoas\",\"bullet_points\":[\"Pessoas com 80 ou mais anos de idade\",\"Pessoas com 50 ou mais anos de idade, que sofram de infsuficiência cardíaca, doença coronária, insuficiência renal (TFG < 60ml/min) ou doença respiratória crónicas \"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://covid19.min-saude.pt/vacinacao/\"},{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]},{\"nome\":\"2ª Fase\",\"inicio\":1585699200000,\"fim\":null,\"objetivo\":2700000,\"objetivo_formatado\":\"2.7 milhões de pessoas\",\"bullet_points\":[\"Pessoas com 65 anos ou mais que não tenham sido vacinadas previamente\",\"Pessoas entre os 50 e os 64 anos de idade que sofram de diabetes, neoplasia maligna ativa, doença renal crónica, insuficiência hepática, hipertensão arterial ou obesidade\"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://covid19.min-saude.pt/vacinacao/\"},{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]},{\"nome\":\"3ª Fase\",\"inicio\":null,\"fim\":null,\"objetivo\":null,\"objetivo_formatado\":\"950 mil pessoas\",\"bullet_points\":[\"TBA\"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://covid19.min-saude.pt/vacinacao/\"},{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]}]}");

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

module.exports = JSON.parse("{\"date\":1622502349282,\"dateSnsStartWeirdFormat\":\"17/05/21\",\"dateSnsStart\":\"2021-05-17\",\"dateSns\":\"2021-05-23\",\"dateEcdc\":\"2021-05-23\",\"dateRt\":\"20210-03-28\",\"dateMadeira\":\"2021-05-26\",\"dateMadeiraCases\":\"2021-05-25\",\"dateAcores\":\"2021-05-28\",\"dateAcoresCases\":\"2021-05-26\",\"week\":21}");

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