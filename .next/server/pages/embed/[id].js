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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4MLZ");


/***/ }),

/***/ "4MLZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Embed; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MCc/");
/* harmony import */ var _components_DatePickerButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uEit");
/* harmony import */ var _components_graphs_NumeroTotalVacinados__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("HWxk");
/* harmony import */ var _components_graphs_VacinadosPorDia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9BaP");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("L2Vc");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("GITI");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var plausible_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("WUak");
/* harmony import */ var plausible_tracker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(plausible_tracker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useColors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9m9c");














const plausible = plausible_tracker__WEBPACK_IMPORTED_MODULE_11___default()({
  domain: 'vacinacaocovid19.pt',
  trackLocalhost: true
});

function Embed() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const {
    id,
    colors: queryColors
  } = router.query;
  let {
    colors,
    tints,
    shades,
    complement,
    setColors
  } = Object(_hooks_useColors__WEBPACK_IMPORTED_MODULE_12__[/* useColors */ "a"])();
  let {
    statistics,
    labels,
    values
  } = Object(_hooks_useData__WEBPACK_IMPORTED_MODULE_7__[/* useData */ "a"])();
  let rawData = statistics.getRaw();
  let {
    valuesIn1,
    valuesIn2
  } = statistics.getVacinadosAcum();
  let {
    0: selectedItem,
    1: setSelectedItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let {
    0: previousItem,
    1: setPreviousItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let {
    0: previousSelectedItem,
    1: setPreviousSelectedItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let {
    0: last,
    1: setLast
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function onDateSelect(d) {
    let item = rawData.filter((el, elIdx) => {
      if (el.Data == d.getTime()) {
        if (elIdx - 1 >= 0) {
          setPreviousItem(rawData[elIdx - 1]);
        } else {
          setPreviousItem(el);
        }

        return true;
      }
    });

    if (selectedItem.Data != item[0].Data) {
      setPreviousSelectedItem(selectedItem);
      setSelectedItem(item[0]);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let rawData = statistics.getRaw();
    setLast(rawData[rawData.length - 1]);
    onDateSelect(new Date(rawData[rawData.length - 1].Data));
  }, [values]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLast(rawData[rawData.length - 1]);
    setSelectedItem(rawData[rawData.length - 1]);
    setPreviousItem(rawData[rawData.length - 2]);
    setFirst(rawData[0]);
    setLoaded(true);
    plausible.trackPageview();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (queryColors != undefined) {
      setColors([...queryColors.map(c => '#' + c)]);
    }
  }, [queryColors]);

  let content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        style: {
          padding: '20px',
          textAlign: 'center'
        },
        children: "A carregar..."
      })
    })
  });

  let css = `:root{
		--foreground:${colors[0]}
		}`;

  if (id) {
    switch (id) {
      case 'counter':
        content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {
              children: css
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.datepickerRow,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              style: {
                textAlign: 'center'
              },
              children: loaded ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_DatePickerButton__WEBPACK_IMPORTED_MODULE_4__[/* DatePickerButton */ "a"], {
                colors: colors,
                onDateSelect: onDateSelect,
                minDate: first.Data,
                maxDate: last.Data
              }) : ''
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              lg: 4,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__[/* Counter */ "a"], {
                colors: colors,
                title: "N\xFAmero total de vacinas administradas",
                subtitle: "",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Vacinados_Ac,
                from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Vacinados_Ac) || 0,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              lg: 4,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__[/* Counter */ "a"], {
                colors: colors,
                title: "N\xFAmero de doses administradas - 1\xAA Dose",
                subtitle: "Vacina Pfizer/BioNTech",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao1_Ac,
                from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao1_Ac) || 0,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              lg: 4,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__[/* Counter */ "a"], {
                colors: colors,
                title: "N\xFAmero de doses administradas - 2\xAA Dose",
                subtitle: "Vacina Pfizer/BioNTech",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao2_Ac,
                from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao2_Ac) || 0,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac
              })
            })]
          })]
        });
        break;

      case 'line':
        content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_graphs_NumeroTotalVacinados__WEBPACK_IMPORTED_MODULE_5__[/* NumeroTotalVacinados */ "a"], {
            colors: colors,
            labels: labels,
            values: values,
            valuesIn1: valuesIn1,
            valuesIn2: valuesIn2
          })
        });
        break;

      case 'bar':
        content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_graphs_VacinadosPorDia__WEBPACK_IMPORTED_MODULE_6__[/* VacinadosPorDia */ "a"], {
            colors: colors,
            labels: labels,
            values: values,
            statistics: statistics
          })
        });
        break;

      default:
        content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
          statusCode: 404
        });
    }
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: content
  }); // <Footer></Footer>
}

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
    values: values2,
    labels2
  } = statistics.getMediaMovelDiaria(7);
  let [foreground, color_1, color_2, color_3, color_4] = colors;
  let {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(400);
  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const data = canvas => {
    const ctx = canvas.getContext('2d');

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
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
    labels,
    values2
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
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
    0: labels,
    1: setLabels
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
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
  let options2 = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  let f = new Intl.DateTimeFormat('pt-PT', options);
  let f2 = new Intl.DateTimeFormat('pt-PT', options2);

  function parseData(data) {
    if (!ready) return;
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
        let lastItem = dados_regiao[dados_regiao.length - 1];
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
      let labelsMedias = [];

      if (regiao === _constants__WEBPACK_IMPORTED_MODULE_1__[/* REGIOES */ "l"].PORTUGAL) {
        let {
          values
        } = statistics.getVacinadosPorDia();

        for (let start = 1; start <= dias; start++) {
          if (values[start] === null) {
            medias.push(null);
            continue;
          }

          let sum = Math.round(values.slice(0, start).reduce((prev, current) => prev + current, 0) / start);
          medias.push(sum);
          labelsMedias.push(labels[start]);
        }

        for (let start = dias; start <= values.length - 1; start++) {
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
        var obj = {};

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
      let labels = {};
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
      let data = {};
      let com = {};
      let mod = {};
      let az = {};
      let sum = [];
      let ecdcCopy = JSON.parse(JSON.stringify(ecdc));
      let numbers = [1, 1, 1, 1];

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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "WUak":
/***/ (function(module, exports) {

module.exports = require("plausible-tracker");

/***/ }),

/***/ "Ys+F":
/***/ (function(module, exports) {

module.exports = require("react-count-to");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cNEh":
/***/ (function(module, exports) {

module.exports = require("chartjs-plugin-annotation");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


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

/***/ "lN74":
/***/ (function(module) {

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

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

/***/ "uEit":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerButton; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MA5j");
/* harmony import */ var _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("aSZT");
/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tDG4");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_6__);









function DatePickerButton({
  minDate,
  maxDate,
  onDateSelect,
  colors
}) {
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date(maxDate));
  var [first, ...restDate] = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_6__["pt"]
  }).replace('-feira', '').split('');
  let d = [first.toUpperCase(), ...restDate].join('');
  var [first, ...restDate] = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(startDate, "dd 'de' LLL 'de' yyyy", {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_6__["pt"]
  }).replace('-feira', '').split('');
  let d2 = [first.toUpperCase(), ...restDate].join('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(new Date(startDate));
  }, [startDate]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setStartDate(new Date(maxDate));
  }, [maxDate]);

  class ExampleCustomInput extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
      super(props);
    }

    render() {
      let {
        onClick
      } = this.props;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.datepicker,
            disabled: startDate.getTime() <= minDate,
            onClick: () => {
              let prevDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(startDate, 1);
              return setStartDate(new Date(prevDay));
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.svg
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
            style: {
              width: '60vw',
              maxWidth: 285
            },
            className: _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.datepicker,
            onClick: onClick,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: 'hide_micro_mobile',
              children: d
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: 'show_micro_mobile',
              children: d2
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.datepicker,
            disabled: startDate.getTime() >= maxDate,
            onClick: () => {
              let prevDay = startDate.getTime() + 86400 * 1000;
              return setStartDate(new Date(prevDay));
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: _DatePickerButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.svg
            })
          })]
        })
      });
    }

  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
    minDate: minDate,
    maxDate: maxDate,
    selected: startDate,
    onChange: date => {
      setStartDate(date);
    },
    customInput: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ExampleCustomInput, {})
  });
}

/***/ }),

/***/ "vga7":
/***/ (function(module) {

module.exports = JSON.parse("{\"date\":1617711905160,\"dateSnsStartWeirdFormat\":\"22/03/2021\",\"dateSnsStart\":\"2021-03-22T00:00:00\",\"dateSns\":\"2021-03-28T00:00:00\",\"dateEcdc\":\"2021-03-28\",\"dateRt\":\"20210-03-28\",\"dateMadeira\":\"2021-04-4\",\"dateMadeiraCases\":\"2021-04-05\",\"dateAcores\":\"2021-03-30\",\"dateAcoresCases\":\"2021-04-05\"}");

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