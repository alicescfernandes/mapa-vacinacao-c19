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

/***/ "/jVO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initSockets; });
//TODO: Turn this into a hook
function initSockets(onUpdate) {
  if (!window.pusher) {
    window.pusher = new Pusher('4dd4d1d504254af64544', {
      cluster: 'eu'
    });
    let channel = window.pusher.subscribe('covid19');
    channel.bind('update', function (data) {
      onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(data);
    });
  }
}
/* initSockets(function (data) {
	updateData(data.type, data.data);
	setUpdating(true);
	setTimeout(() => {
		setUpdating(false);
	}, 1000);
});
 */

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "10Vi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metatags; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);




function Metatags({
  isUpdating
}) {
  let title = 'Vacinação COVID-19 - Dashboard sobre os dados da campanha de vacinação contra a COVID-19 em Portugal e Arquipélagos';
  let descricao = `Site informativo sobre a administração das vacinas em Portugal. É atualizado sempre que possível, assim que os dados forem sendo atualizados. Contamos com dados da Direção-Geral da Saúde, Our World in Data, Centro Europeu de Controlo de Doenças e informação do Governo de Portugal, temos gráficos sobre as vacinas administradas por dia e desde o início da campanha de vacinação, compradas, a faixa etária dos inoculados, infeções, óbitos, entre outros e temos números relacionados com a imunidade de grupo entre outros. Todo o nosso código é open-source, e pode ser consultado no github onde está alojado. Temos ainda uma conta no twitter onde pode seguir as últimas atualizações em relação aos números da campanha de vacinação da COVID-19.`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "title",
        content: title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "description",
        content: descricao
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:url",
        content: "https://vacinacaocovid19.pt/"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:title",
        content: "Vacina\xE7\xE3o - COVID 19"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:description",
        content: descricao
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:image",
        content: "https://vacinacaocovid19.pt/imagem.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "twitter:url",
        content: "https://vacinacaocovid19.pt/"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "twitter:title",
        content: "Vacina\xE7\xE3o - COVID 19"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "twitter:description",
        content: descricao
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "twitter:image",
        content: "https://vacinacaocovid19.pt/imagem.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "msapplication-TileColor",
        content: "#01AE97"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "msapplication-TileColor",
        content: "#01AE97"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "theme-color",
        content: "#01AE97"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.css"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      className: "hide-except-seo",
      children: descricao
    })]
  });
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3Nti":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__a95ok",
	"content": "Footer_content__3vLWb",
	"update": "Footer_update__fFFAx",
	"logo": "Footer_logo__3hNs2"
};


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
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

/***/ "Cgje":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/context/regiao.js
var context_regiao = __webpack_require__("uAdN");

// EXTERNAL MODULE: ./components/Header.module.scss
var Header_module = __webpack_require__("OXQD");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Notifications.jsx


var firebaseConfig = {
  apiKey: 'AIzaSyBcHZc1Rk5CeJDkwwaBOdCzYgdA6V5WK3g',
  authDomain: 'covid19-249f1.firebaseapp.com',
  projectId: 'covid19-249f1',
  storageBucket: 'covid19-249f1.appspot.com',
  messagingSenderId: '636238011730',
  appId: '1:636238011730:web:bf4a0deef86c884c3b6e8b',
  measurementId: 'G-DYYRVR03RS'
};
function Notifications({
  children
}) {
  function registerOnFirebase(callback) {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    const messaging = firebase.messaging();
    messaging.getToken({
      vapidKey: 'BHtOyn7DJeWzTT1uCITnVOzCpFI4jyOGNo_NQCKoJktP56tHqSVCPtyn99tgpWPRsWzRTu07ahM6fjljP_01K3g'
    }).then((currentToken, b, c) => {
      console.log(b, c);

      if (currentToken) {
        fetch('/api/messaging/register', {
          method: 'POST',
          body: JSON.stringify({
            fcm_token: currentToken
          }),
          headers: {
            'content-type': 'application/json'
          }
        }).then(res => {
          console.log(res.status);
          callback === null || callback === void 0 ? void 0 : callback();
        });
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      alert('Não conseguimos ativar as notificações. Certifique-se que não estão bloqueadas para este site ou tente mais tarde.');
    });
    messaging.onMessage(payload => {
      let n = new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/android-icon-192x192.png'
      });

      n.onclick = function (event) {
        window.open('https://www.vacinacaocovid19.pt/?utm_source=notifications&utm_medium=notifications&utm_campaign=notifications');
      };
    });
  }

  function allowNotifications() {
    if (Notification.permission === 'granted') {
      alert('Já recebes as nossas notificações');
      return;
    }

    registerOnFirebase(function () {
      new Notification('Vacinação COVID-19', {
        body: 'Subscreveste às nossas notificações diárias com os dados das vacinas',
        icon: '/android-icon-192x192.png'
      });
    });
  }

  Object(external_react_["useEffect"])(function () {
    if (Notification.permission === 'granted') {
      registerOnFirebase();
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
    onClick: allowNotifications,
    children: [children, " "]
  });
}
// EXTERNAL MODULE: ./assets/madeira.svg
var madeira = __webpack_require__("t5hz");
var madeira_default = /*#__PURE__*/__webpack_require__.n(madeira);

// EXTERNAL MODULE: ./assets/portugal.svg
var portugal = __webpack_require__("mYdt");
var portugal_default = /*#__PURE__*/__webpack_require__.n(portugal);

// EXTERNAL MODULE: ./assets/bell.svg
var bell = __webpack_require__("RQMA");
var bell_default = /*#__PURE__*/__webpack_require__.n(bell);

// EXTERNAL MODULE: ./assets/azores.svg
var azores = __webpack_require__("oM7c");
var azores_default = /*#__PURE__*/__webpack_require__.n(azores);

// CONCATENATED MODULE: ./components/Header.jsx













function Header() {
  let {
    0: supportsNotifications,
    1: setSupportsNotifications
  } = Object(external_react_["useState"])(false);
  let regiao = Object(external_react_["useContext"])(context_regiao["a" /* RegiaoContext */]);
  let regioes = {
    portugal: {
      nome: '',
      tagline: 'Dados atualizados diariamente entre as 13h e as 14h'
    },
    madeira: {
      nome: ' - Madeira',
      tagline: 'Dados atualizados semanalmente'
    },
    acores: {
      nome: ' - Açores',
      tagline: 'Dados atualizados semanalmente'
    }
  };
  Object(external_react_["useEffect"])(() => {
    setSupportsNotifications('Notification' in window);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
      className: `${Header_module_default.a.header} card-shadow`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Container"], {
        className: Header_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Header_module_default.a.logo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
            children: ["vacina\xE7\xE3o COVID 19 ", regioes[regiao].nome, " "]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: regioes[regiao].tagline
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
          className: `${Header_module_default.a.nav} ${Header_module_default.a.hide_mobile}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: regiao === 'portugal' ? Header_module_default.a.highlight : '',
                  children: "Portugal"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/madeira",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: regiao === 'madeira' ? Header_module_default.a.highlight : '',
                  children: "Madeira"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/acores",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: regiao === 'acores' ? Header_module_default.a.highlight : '',
                  children: "A\xE7ores"
                })
              })
            }), supportsNotifications && /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Notifications, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "#",
                  children: "Notifica\xE7\xF5es"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                target: "_blank",
                href: "https://twitter.com/vacinacaocovid1",
                children: "Twitter"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
      className: `${Header_module_default.a.header} ${Header_module_default.a.header_mobile} card-shadow`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
        className: Header_module_default.a.content,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
          className: `${Header_module_default.a.nav}  ${Header_module_default.a.hide_mobile}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: regiao === 'portugal' ? Header_module_default.a.highlight : '',
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(portugal_default.a, {
                      height: 30
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: "Portugal"
                  })]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/madeira",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: regiao === 'madeira' ? Header_module_default.a.highlight : '',
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(madeira_default.a, {
                      height: 25
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: "Madeira"
                  })]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/acores",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: regiao === 'acores' ? Header_module_default.a.highlight : '',
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(azores_default.a, {
                      width: 70,
                      height: 40
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: "A\xE7ores"
                  })]
                })
              })
            }), supportsNotifications && /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Notifications, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bell_default.a, {
                      width: 30,
                      height: 30
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: "Notifica\xE7\xF5es"
                  })]
                })
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${Header_module_default.a.submenu}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
        className: Header_module_default.a.content,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
          className: Header_module_default.a.nav,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [regiao === 'portugal' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://covid19estamoson.gov.pt/vacinacao-covid19/",
                  children: "Fases de Vacina\xE7\xE3o"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://covid19.min-saude.pt/vacinacao/",
                  children: "Fa\xE7o parte das listas de vacina\xE7\xE3o?"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://pandemiaclara.sapo.pt/plano-de-vacinacao",
                  children: "Quando posso ser vacinado?"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://covid19.min-saude.pt/relatorio-de-vacinacao/",
                  children: "Relat\xF3rios de Vacina\xE7\xE3o"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",
                  children: "Ponto de Situa\xE7\xE3o"
                })
              })]
            }), regiao === 'madeira' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://covidmadeira.pt/",
                  children: "Sit\xEDo oficial - Dire\xE7\xE3o Regional de Sa\xFAde"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://covidmadeira.pt/ponto-de-situacao/",
                  children: "Ponto de Situa\xE7\xE3o"
                })
              })]
            }), regiao === 'acores' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://destinoseguro.azores.gov.pt/",
                  children: "Portal COVID-19 - Governo dos A\xE7ores"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://vacinacao-covid19.azores.gov.pt/",
                  children: "Portal Vacina\xE7\xE3o - Governo dos A\xE7ores"
                })
              })]
            })]
          })
        })
      })
    })]
  });
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

  return;
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
    console.log('sw', 'fetch', url);
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5PhN");
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ys+F");
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_count_to__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);








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
    className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_highlight,
    children: [numberFormatter.format(value).replace(/,/gm, ' '), " ", suffix ? suffix : '']
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [title == '' ? '' : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_title,
      children: title
    }), subtitle == '' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        height: 20
      }
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_subtitle,
      children: subtitle
    }), to === null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_highlight,
      style: {
        color: foreground
      },
      children: "N/A"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_count_to__WEBPACK_IMPORTED_MODULE_2___default.a, {
        digits: digits,
        delay: 1,
        from: from || 0,
        to: to || 0,
        speed: 800,
        children: fn
      }), Math.abs(to - yesterday) > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_subtitle,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
            style: {
              color: foreground
            },
            className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_subtitle_highlight,
            children: [Math.sign(difference) == 1 ? '+' : '-', " ", numberFormatter.format(Math.abs(difference)).replace(',', ' ')]
          }), "\xA0 que ", tempo]
        })
      }) : '', ps != null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card_subtitle,
          children: ps.split('\n').map((el, idx) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
            children: [el, " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
          }, idx))
        })
      }) : '']
    })]
  });
}

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "OXQD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__3Z-q0",
	"submenu": "Header_submenu__y6vbr",
	"header_mobile": "Header_header_mobile__3F0A4",
	"submenu_mobile": "Header_submenu_mobile__2NpLk",
	"content": "Header_content__3--fg",
	"highlight": "Header_highlight__Drolj",
	"logo": "Header_logo__2UB2g",
	"hide_mobile": "Header_hide_mobile__2Rzv1"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xPX6");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5PhN");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lLkP");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GyP+");
/* harmony import */ var _context_regiao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uAdN");









function PieVacinadosInfectadosRecuperadosObitos({
  statistics,
  colors
}) {
  let regiao = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_regiao__WEBPACK_IMPORTED_MODULE_7__[/* RegiaoContext */ "a"]);
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let vaccines = statistics.getLastVaccineAvaliable();
  let lastCase = statistics.getLastCaseAvaliable();
  let {
    main,
    shades,
    tints,
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
            return `${label}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* formatNumber */ "c"])(data)}`;
          }
        }
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_4__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
        plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5___default.a],
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

// EXTERNAL MODULE: ./components/DatePickerButton.jsx
var DatePickerButton = __webpack_require__("uEit");

// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__("naWs");

// EXTERNAL MODULE: ./components/Header.jsx + 1 modules
var Header = __webpack_require__("Cgje");

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

// EXTERNAL MODULE: ./components/MetaTags.jsx
var MetaTags = __webpack_require__("10Vi");

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
    values: valueCasesDiarios,
    raw: rawCasos
  } = statistics.getDiariosCases();
  let {
    main,
    shades,
    tints,
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
        label: 'Vacinas Totais',
        type: 'bar',
        backgroundColor: shades[1],
        data: values.slice(values.length - 14, values.length),
        stack: 'stack0',
        yAxisID: 'total',
        order: 3
      }, {
        label: 'Número de infectados diário',
        type: 'bar',
        backgroundColor: complements[1],
        data: marriedData.map(el => el.ConfirmadosNovos),
        stack: 'stack1',
        yAxisID: 'total',
        order: 4
      }, {
        label: 'Número de recuperados diário',
        type: 'bar',
        backgroundColor: complements[2],
        data: marriedData.map(el => el.VarRecuperados),
        stack: 'stack2',
        yAxisID: 'total',
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
            return label + ': ' + Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value), false);
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
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: function (value, index, values) {
              return Object(utils["c" /* formatNumber */])(value, false);
            }
          }
        }, {
          stacked: false,
          id: 'total',
          display: false,
          ticks: {
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }]
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

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/graphs/BarsVacinacaoArs.jsx









let styles = {
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
    height: 150,
    overflow: 'hidden'
  }
};
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
    shades,
    tints,
    complements
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
            return label + ': ' + Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
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

// EXTERNAL MODULE: ./components/CustomCheckbox.jsx
var CustomCheckbox = __webpack_require__("SSzp");

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
  let [foreground, color_1, color_2, color_3, color_4] = colors;
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
      az
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
        return `De ${Object(utils["c" /* formatNumber */])(fromDate.getDate())}/${Object(utils["c" /* formatNumber */])(fromDate.getMonth() + 1)} a ${Object(utils["c" /* formatNumber */])(toDate.getDate())}/${Object(utils["c" /* formatNumber */])(toDate.getMonth() + 1)}`;
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
      }]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
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
            return label + ': ' + (parseInt(tooltipItem.value) ? Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value), false) : 0);
          },
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
            return tooltipItem[0].label;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }]
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
// CONCATENATED MODULE: ./components/graphs/BarAdministradasPorFaixaEtaria.jsx









function BarAdministradasPorFaixaEtaria({
  statistics,
  colors
}) {
  let {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  let marriedData = {};
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
  marriedData = Object.values(marriedData).reverse();

  const data = canvas => {
    let {
      labels,
      groups,
      maxValue
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
        return `De ${Object(utils["c" /* formatNumber */])(fromDate.getDate())}/${Object(utils["c" /* formatNumber */])(fromDate.getMonth() + 1)} a ${Object(utils["c" /* formatNumber */])(toDate.getDate())}/${Object(utils["c" /* formatNumber */])(toDate.getMonth() + 1)}`;
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
    let maxValue = 180000;
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
        callbacks: {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value, false));
          },
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
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
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
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









let BarTotaisPorFaixaEtaria_styles = {
  'vaccine-label': {
    textAlign: 'right',
    fontSize: '12px',
    lineHeight: '40px',
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
    shades,
    tints,
    complements
  } = colors;

  const graphData = canvas => {
    return {
      labels: ['moderna', 'cenas', 'cenas'],
      datasets: [{
        label: '2ª Dose',
        type: 'horizontalBar',
        backgroundColor: main,
        data: [data.mod[1], data.com[1], data.az[1]],
        stack: 'stack1'
      }, {
        label: '1ª Dose',
        type: 'horizontalBar',
        backgroundColor: shades[1],
        data: [data.mod[0], data.com[0], data.az[0]],
        stack: 'stack1'
      }]
    };
  };

  const options = () => {
    return {
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
            return label + ': ' + Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
          }
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: true
          },
          ticks: {
            display: false
          }
        }],
        xAxes: [{
          stacked: true,
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero: true,
            display: true,
            max: 600000,
            stepSize: 600000 / 5,
            callback: function (value, index, values) {
              return Object(utils["c" /* formatNumber */])(value, false);
            }
          }
        }]
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
        style: BarTotaisPorFaixaEtaria_styles['vaccine-label'],
        children: type
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: BarTotaisPorFaixaEtaria_styles['vaccine-label'],
        children: "Pfizer/BioNTech"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        style: BarTotaisPorFaixaEtaria_styles['vaccine-label'],
        children: "AstraZeneca"
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
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["HorizontalBar"], {
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
    height: 150,
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
    tints,
    complements
  } = colors;

  const graphData = canvas => {
    return {
      //labels: ['Inoculados', 'Óbitos Novos', 'cenas3'],
      datasets: [{
        label: 'Inoculados Totais Novos (Acumulado 7 dias)',
        type: 'horizontalBar',
        backgroundColor: main,
        data: [data['TOTAL_VAC_2']],
        stack: 'stack1'
      }, {
        label: 'Casos Novos (Acumulado 7 dias)',
        type: 'horizontalBar',
        backgroundColor: tints[1],
        data: [data['casosNovos7Dias']],
        fill: false,
        stack: 'stack2'
      }, {
        label: 'Óbitos Novos (Acumulado 7 dias)',
        type: 'horizontalBar',
        backgroundColor: shades[1],
        data: [data['obitosNovos7Dias']],
        stack: 'stack3'
      }]
    };
  };

  const options = () => {
    return {
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
            return label + ': ' + Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value), false);
          },
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
              return Object(utils["c" /* formatNumber */])(value, false);
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
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["HorizontalBar"], {
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
      graphData[key] = BarArs_objectSpread(BarArs_objectSpread({}, obj2), obj1);
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
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: graphData['Madeira'].REGION
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs_CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: 400,
              data: graphData['Madeira']
            })]
          })
        })]
      }) : ''
    })
  });
}
// EXTERNAL MODULE: external "chartjs-plugin-datalabels"
var external_chartjs_plugin_datalabels_ = __webpack_require__("lLkP");
var external_chartjs_plugin_datalabels_default = /*#__PURE__*/__webpack_require__.n(external_chartjs_plugin_datalabels_);

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
    main,
    shades,
    tints,
    complements
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
              return `${Object(utils["c" /* formatNumber */])(value)} ( ${sum.toFixed(2)}% )`;
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

            if (label === 'Doses Adquiridas') {
              data = statistics.encomendadas;
            }

            return `${label}: ${Object(utils["c" /* formatNumber */])(data)}`;
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
        plugins: [external_chartjs_plugin_datalabels_default.a],
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
    shades,
    tints,
    complements
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

            if (label === 'Doses Recebidas') {
              data = statistics.recebidas;
            }

            return `${label}: ${Object(utils["c" /* formatNumber */])(data)}`;
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
        plugins: [external_chartjs_plugin_datalabels_default.a],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}
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
  let [foreground, color_1, color_2, color_3, color_4] = colors;
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
      az
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
        return `De ${Object(utils["c" /* formatNumber */])(fromDate.getDate())}/${Object(utils["c" /* formatNumber */])(fromDate.getMonth() + 1)} a ${Object(utils["c" /* formatNumber */])(toDate.getDate())}/${Object(utils["c" /* formatNumber */])(toDate.getMonth() + 1)}`;
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
      }]
    };
  };

  const options = () => {
    return {
      plugins: {
        datalabels: {
          display: false,
          color: 'blue'
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
        }
      },
      animation: {
        duration: 1000
      },
      annotation: {
        annotations: [{
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
            content: `Doses adquiridas - ${generic.doses.legenda} (01/03/2021) `
          }
        }, {
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
            enabled: false
          }
        }, {
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
              style: 'bold'
            },
            fontStyle: 'bold',
            fontColor: '#D11541',
            fontSize: '13px',
            position: 'left',
            xAdjust: 0,
            yAdjust: -10,
            enabled: true,
            content: `Doses adquiridas - ${generic.doses3.legenda} (21/01/2020) `
          }
        }, {
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
              style: 'bold'
            },
            fontStyle: 'bold',
            fontColor: '#D17615',
            fontSize: '13px',
            position: 'left',
            xAdjust: 0,
            yAdjust: -10,
            enabled: true,
            content: `Doses adquiridas - ${generic.doses2.legenda} (04/12/2020) `
          }
        }]
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label + ': ' + (parseInt(tooltipItem.value) ? Object(utils["c" /* formatNumber */])(parseInt(tooltipItem.value), false) : 0);
          },
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
            return tooltipItem[0].label;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }]
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
    shades,
    tints,
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
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(400);
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(external_react_["useState"])({
    perHundred: true
  });
  const canvasRef = Object(external_react_["useRef"])(null);

  const data = canvas => {
    const ctx = canvas.getContext('2d');

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
      datasets: [LineVacinadosEu_objectSpread(LineVacinadosEu_objectSpread({}, constants["t" /* lineChartCommon */]), {}, {
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
      }), LineVacinadosEu_objectSpread(LineVacinadosEu_objectSpread({}, constants["t" /* lineChartCommon */]), {}, {
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

  let numberFormatter = new Intl.NumberFormat();

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
      tooltips: {
        mode: 'index',
        intersect: true,
        callbacks: {
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
            maxTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants["m" /* RESIZE_TRESHOLD */] ? 8 : 10,
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
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
    shades,
    tints,
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
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(400);
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(external_react_["useState"])({
    perHundred: true
  });
  const canvasRef = Object(external_react_["useRef"])(null);

  const data = canvas => {
    const ctx = canvas.getContext('2d');

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
      datasets: [BarVacinadosEu_objectSpread(BarVacinadosEu_objectSpread({}, constants["t" /* lineChartCommon */]), {}, {
        label: 'Portugal',
        backgroundColor: main,
        borderColor: main,
        fill: false,
        data: owidData.pt.map(el => {
          if (toggleStats.perHundred) {
            return el[doses_map.per_hundred[activeDose]];
          }

          return el[doses_map.normal[activeDose]];
        })
      }), BarVacinadosEu_objectSpread(BarVacinadosEu_objectSpread({}, constants["t" /* lineChartCommon */]), {}, {
        label: 'União Europeia',
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

  let numberFormatter = new Intl.NumberFormat();

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
      tooltips: {
        mode: 'index',
        intersect: true,
        callbacks: {
          title: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
            callback: value => Object(utils["c" /* formatNumber */])(value, false)
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
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
        height: 80,
        ref: canvasRef,
        options: options(),
        data: data
      })
    })]
  }) : '';
}
// EXTERNAL MODULE: ./components/graphs/LineRt.jsx
var LineRt = __webpack_require__("m5rz");

// EXTERNAL MODULE: ./components/context/regiao.js
var regiao = __webpack_require__("uAdN");

// EXTERNAL MODULE: ./hooks/initSockets.js
var initSockets = __webpack_require__("/jVO");

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
  let dates_exception = {
    '26/03/2021': '13:00'
  };
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
  let pusher = null;
  let channel = null;
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
      }
    };
    setDerivedNumbers(object);
  }, [selectedItem]);
  Object(external_react_["useEffect"])(async () => {
    if (dataReady === false) return;
    let rawData = statistics.getRaw();
    setLast(rawData[rawData.length - 1]);
    setSelectedItem(rawData[rawData.length - 1]);
    setPreviousItem(selectedItem);
    setFirst(rawData[0]);
    plausible.trackPageview();
    let {
      sum
    } = await (statistics === null || statistics === void 0 ? void 0 : statistics.getDosesRecebidasAcum());
    sum = sum.reverse()[0];
    let item = rawData.filter(el => {
      return Object(external_date_fns_["isSameDay"])(el.Data, new Date(last_update.dateSnsStart));
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
      plausible.trackEvent('end_page');
      return;
    }

    if (window.scrollY > 1657 && beacons.mid_page === false) {
      beacons.mid_page = true;
      plausible.trackEvent('mid_page');
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
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(regiao["a" /* RegiaoContext */].Provider, {
    value: 'portugal',
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
      className: "container-fluid app",
      children: loaded ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: Home_module_default.a.datepickerRow,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            style: {
              textAlign: 'center'
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: Card_module_default.a.card_title_2,
              children: "Data de publica\xE7\xE3o"
            }), loaded ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(DatePickerButton["a" /* DatePickerButton */], {
              onDateSelect: onDateSelect,
              minDate: first === null || first === void 0 ? void 0 : first.Data,
              maxDate: last === null || last === void 0 ? void 0 : last.Data
            }) : '', /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Card_module_default.a.card_subtitle_2,
              children: ["Dados at\xE9 ", currentDate]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          className: "counterRow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
              isUpdating: updating,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                colors: colors,
                title: "N\xFAmero total de vacinas administradas",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Vacinados_Ac,
                from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Vacinados_Ac) || 1200000,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
              isUpdating: updating,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                colors: colors,
                title: "N\xFAmero de doses administradas - 1\xAA Dose",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao1_Ac,
                from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao1_Ac) || 905000,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                style: {
                  marginTop: '10px'
                },
                class: Card_module_default.a.card_subtitle,
                children: [Object(utils["e" /* perHundred */])(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac).toFixed(2), " doses administradas por cada 100 pessoas", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), Object(utils["c" /* formatNumber */])((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac) - (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac)), " pessoas inoculadas com a 1\xAA dose"]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
              isUpdating: updating,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                colors: colors,
                title: "N\xFAmero de doses administradas - 2\xAA Dose",
                yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao2_Ac,
                from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao2_Ac) || 300000,
                to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                style: {
                  marginTop: '10px'
                },
                class: Card_module_default.a.card_subtitle,
                children: [Object(utils["e" /* perHundred */])(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac).toFixed(2), " doses administradas por cada 100 pessoas", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), Object(utils["c" /* formatNumber */])(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac), " pessoas inoculadas com a 2\xAA dose"]
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          className: "counterRow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
              isUpdating: updating,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                ps: "Percentagem calculada com base no n\xFAmero total de segundas doses administradas",
                digits: 2,
                suffix: '%',
                colors: colors,
                title: "Percentagem de popula\xE7\xE3o inoculada com a 2\xAA dose ",
                from: derivedNumbers.percentagem.prev,
                to: derivedNumbers.percentagem.current
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* Card */], {
              isUpdating: updating,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Counter["a" /* Counter */], {
                ps: `Ou seja, será preciso vacinar totalmente mais ${derivedNumbers.pessoasAVacinar.current} pessoas para se atingir imuninade de grupo`,
                digits: 2,
                suffix: '%',
                colors: colors,
                title: "Percentagem para atingir imunidade de grupo",
                from: 70 - derivedNumbers.percentagem.prev,
                to: 70 - derivedNumbers.percentagem.current
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            lg: 4,
            xs: 12,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* Card */], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
                style: {
                  marginBottom: '10px'
                },
                className: Card_module_default.a.card_title,
                children: [fases.fases[fases.fase_atual].nome, " de vacina\xE7\xE3o"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                title: "Consultar notas ou o plano de informa\xE7\xE3o para mais informa\xE7\xE3o",
                style: {
                  margin: '5px 0px'
                },
                class: Card_module_default.a.card_subtitle,
                children: "Espera-se vacinar cerca de"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                title: "Consultar notas ou o plano de informa\xE7\xE3o para mais informa\xE7\xE3o",
                style: {
                  color: colors[0]
                },
                className: Card_module_default.a.card_highlight_2,
                children: fases.fases[fases.fase_atual].objetivo_formatado
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                target: "_blank",
                href: fases.fases[fases.fase_atual].fontes[0].permalink,
                className: `${Card_module_default.a.card_subtitle} ${Home_module_default.a.link}`,
                children: "Ver mais informa\xE7\xE3o sobre o plano de vacina\xE7\xE3o"
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
              children: "N\xFAmero de vacinas administradas por dia"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(VacinadosPorDia["a" /* VacinadosPorDia */], {
              colors: colors,
              statistics: statistics
            })]
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
                children: ["Dados acumulados desde 21 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateEcdc).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieRecebidasAdquiridas, {
                colors: colors_v2,
                statistics: doses
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Propor\xE7\xE3o de doses administradas relativamente \xE0s doses recebidas"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados desde 21 de Dezembro de 2021 at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateEcdc).getTime(), "dd 'de' LLLL 'de' yyyy", {
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
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados e \xF3bitos"
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
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PieSuscetiveisProporcao["a" /* PieSuscetiveisProporcao */], {
                colors: colors_v2,
                statistics: statistics
              })]
            })]
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
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarsVacinacaoArs, {
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
                children: "Ponto de situa\xE7\xE3o por ARS"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                className: Home_module_default.a.subtitle,
                children: ["Dados acumulados relativos \xE0 semana de", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateSnsStart).getTime(), "dd 'de' LLLL", {
                  locale: locale_["pt"]
                }), ' ', "at\xE9", ' ', Object(external_date_fns_["format"])(new Date(last_update.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_["pt"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BarArs, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_lazyload_default.a, {
          height: 500,
          once: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de vacinas administradas em Portugal e na Uni\xE3o Europeia"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LineVacinadosEu, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: Home_module_default.a.title,
                children: "N\xFAmero de vacinas administradas por dia em Portugal e na Uni\xE3o Europeia"
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
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://www.pordata.pt/Portugal",
                children: "n\xFAmero de popula\xE7\xE3o de Portugal (dados do PORDATA)"
              }), ". De acordo com o\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
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
                className: Home_module_default.a.link,
                href: "https://www.sns.gov.pt/wp-content/uploads/2020/12/Plano_Vacinacao_COVID-19.pdf",
                target: ":blank",
                children: "aqui"
              }), ' ', "e", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
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
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/",
                children: "Monitoriza\xE7\xE3o do SNS da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), "\xA0e do s\xEDtio\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",
                children: "Ponto de Situa\xE7\xE3o da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), ". A atualiza\xE7\xE3o destes dados \xE9 di\xE1ria.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Os dados relativos \xE0 distribui\xE7\xE3o das vacinas e administra\xE7\xE3o das mesmas por grupo et\xE1ria s\xE3o disponibilizados pelo", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                href: "https://www.ecdc.europa.eu/en",
                target: "_blank",
                children: "ECDC (European Centre for Disease Prevention and Control)"
              }), "\xA0 e s\xE3o atualizados atrav\xE9s dos\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covid19-vaccine-report.ecdc.europa.eu/#6_Reported_data",
                children: "relat\xF3rios publicados semanalmente."
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["Os dados relativos \xE0 vacina\xE7\xE3o por ARS \xE9 tirada do portal sobre", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                href: "https://covid19.min-saude.pt/",
                target: "_blank",
                children: "a COVID-19 da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), "\xA0 e s\xE3o atualizados atrav\xE9s dos\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://covid19.min-saude.pt/relatorio-de-vacinacao/",
                children: "relat\xF3rios publicados semanalmente."
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["O n\xFAmero total de vacinas adquiridas anunciado pela Dire\xE7\xE3o-Geral de Sa\xFAde foi divulgado atrav\xE9s de um comunicado feito no s\xEDtio do Governo de Portugal, que", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                href: "https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C",
                target: "_blank",
                children: "pode ser consultado aqui."
              }), ' ', "No dia 01 de Mar\xE7o de 2021, foi anunciado que o n\xFAmero total de vacinas adquiridas aumentou para 38 milh\xF5es de doses, num comunicado dirigido \xE0 imprensa que", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                href: "https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19",
                target: "_blank",
                children: "pode ser consultado aqui."
              }), "\xA0Como base para as contas, assumimos que Portugal adquiriu 38 milh\xF5es de doses."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: Home_module_default.a.text,
              children: ["Os dados relativos \xE0 vacina\xE7\xE3o na Uni\xE3o Europeia s\xE3o atualizados pelo\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://ourworldindata.org/",
                children: "Our World In Data"
              }), "\xA0 e est\xE3o dispon\xEDveis\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv",
                children: "no reposit\xF3rio de Github"
              }), ". Os dados relativos ao", ' ', /*#__PURE__*/Object(jsx_runtime_["jsxs"])("em", {
                children: ["R", /*#__PURE__*/Object(jsx_runtime_["jsx"])("sub", {
                  children: "t"
                }), ' ']
              }), "s\xE3o atualizados pelo\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "https://ourworldindata.org/",
                children: "Instituto Nacional Doutor Ricardo Jorge"
              }), "\xA0 e est\xE3o dispon\xEDveis\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Home_module_default.a.link,
                target: "_blank",
                href: "http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/",
                children: "nesta p\xE1gina."
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
    })
  });
}

/***/ }),

/***/ "RQMA":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Bell (props) {
    return React.createElement("svg",props,React.createElement("g",null,[React.createElement("path",{"d":" M 1943.094 226.684 C 1931.149 216.588 1924.3 201.83 1924.3 186.196 L 1924.3 164.171 C 1924.3 136.371 1903.649 113.358 1876.9 109.503 L 1876.9 100.971 C 1876.9 96.602 1873.361 93.071 1869 93.071 C 1864.639 93.071 1861.1 96.602 1861.1 100.971 L 1861.1 109.503 C 1834.343 113.358 1813.7 136.371 1813.7 164.171 L 1813.7 186.196 C 1813.7 201.83 1806.851 216.588 1794.835 226.747 C 1791.762 229.378 1790 233.201 1790 237.246 C 1790 244.87 1796.202 251.071 1803.825 251.071 L 1934.175 251.071 C 1941.799 251.071 1948 244.87 1948 237.246 C 1948 233.201 1946.238 229.378 1943.094 226.684 Z ","fill":"rgb(1,174,151)","key":0}),React.createElement("path",{"d":" M 1869 282.671 C 1883.307 282.671 1895.275 272.472 1898.025 258.971 L 1839.975 258.971 C 1842.725 272.472 1854.693 282.671 1869 282.671 Z ","fill":"rgb(1,174,151)","key":1})]));
}

Bell.defaultProps = {"style":{"isolation":"isolate"},"viewBox":"1790 93.071 158 189.6","width":"158pt","height":"189.6pt"};

module.exports = Bell;

Bell.default = Bell;


/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xPX6");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5PhN");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lLkP");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GyP+");








function PieSuscetiveisProporcao({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let vaccines = statistics.getLastVaccineAvaliable();
  let lastCase = statistics.getLastCaseAvaliable();
  let infetadosVacinados = vaccines.dose_2 - lastCase.confirmados;
  let populacao_suscetivel = lastCase.populacao - (vaccines.dose_2 + lastCase.ativos + lastCase.recuperados + lastCase.obitos); //let populacao_suscetivel = 10286300 - (vaccines[vaccines.length - 1].Inoculacao2_Ac + infetadosVacinados + firstItem.Recuperados + firstItem.Obitos);

  let {
    main,
    shades,
    tints,
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
            return `${label}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* formatNumber */ "c"])(data)}`;
          }
        }
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Card__WEBPACK_IMPORTED_MODULE_4__[/* Card */ "a"], {
    allowOverflow: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: !loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
        plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_5___default.a],
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

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

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

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cNEh":
/***/ (function(module, exports) {

module.exports = require("chartjs-plugin-annotation");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

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
/* harmony import */ var _CustomCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("SSzp");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UG6H");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function LineRt({
  statistics,
  colors,
  regiao
}) {
  let casesData = statistics.getCases();
  let {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let {
    valuesIn1,
    valuesIn2
  } = statistics.getVacinadosAcum();
  let {
    main,
    shades,
    tints,
    complements
  } = colors;
  let {
    0: currentRegiao,
    1: setCurrentRegiao
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(regiao !== null && regiao !== void 0 ? regiao : 'continente');
  let doses_map = {
    normal: ['total_vaccinations', 'people_vaccinated', 'people_fully_vaccinated'],
    per_hundred: ['total_vaccinations_per_hundred', 'people_vaccinated_per_hundred', 'people_fully_vaccinated_per_hundred']
  };
  let {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(400);
  let {
    0: toggleStats,
    1: setToggleStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    perHundred: true
  });
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
  let numberFormatter = new Intl.NumberFormat();

  const data = canvas => {
    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    const gradient = ctx === null || ctx === void 0 ? void 0 : ctx.createLinearGradient(0, 0, 0, height);
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
            var label = data.datasets[tooltipItem[0].datasetIndex];
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
      className: [_Card_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.card_scrollable].join(' '),
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

/***/ "mYdt":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Portugal (props) {
    return React.createElement("svg",props,React.createElement("g",null,React.createElement("path",{"d":" M 246.163 251.37 C 247.002 239.858 240.408 217.275 244.939 209.079 C 247.577 203.145 239.37 189.262 232.409 176.45 C 230.37 169.512 243.032 174.579 246.807 169.291 C 254.603 163.375 252.37 158.45 257.215 151.138 C 260.952 144.892 267.62 143.825 274.28 139.412 C 281.094 134.901 292.245 125.2 302.016 116.482 C 307.292 111.53 307.682 105.762 312.186 98.029 C 314.057 93.637 319.682 84.012 314.495 80.45 C 304.432 74.512 283.053 69.915 279.495 67.45 C 275.745 62.825 279.37 42.325 277.058 35.242 C 275.87 24.7 268.995 26.825 266.008 31.037 C 256.429 35.775 246.041 28.495 239.498 27.761 C 226.133 24.882 205.833 19.75 202.201 26.506 C 201.958 31.703 205.329 38.799 197.864 41.647 C 191.533 47.445 190.37 46.95 181.495 46.45 C 173.62 44.45 175.559 41.393 167.27 39.551 C 145.745 41.2 133.245 37.7 119.495 35.634 C 105.826 35.634 107.675 51.986 97.525 52.067 C 87.78 51.249 81.332 37.985 81.79 32.435 C 84.648 25.09 93.557 22.881 96.04 16.574 C 96.854 3.832 80.469 17.601 83.364 4.723 C 84.507 -2.836 80.718 0.765 76.482 1.503 C 67.702 8.987 56.406 7.826 45.576 9.562 C 35.916 11.281 32.407 12.135 25.79 18.182 C 19.935 24.147 11.053 32.435 11.053 32.435 C 5.62 37.316 0.908 45.006 0 53.551 C 1.23 63.166 8.376 69.695 8.22 78.214 C 8.948 84.239 11.936 93.495 11.79 93.342 C 12.288 100.038 13.861 105.194 14.001 111.807 C 16.631 122.24 19.218 133.549 20.411 145.057 C 20.486 151.43 29.083 168.036 28.551 173.233 C 26.362 192.493 21.888 208.888 16.948 227.721 C 15.889 230.216 17.27 229.525 16.996 231.152 C 15.031 237.778 13.46 244.554 11.969 251.37 L 246.163 251.37 L 246.163 251.37 Z ","fill":"rgb(1,174,151)"})));
}

Portugal.defaultProps = {"style":{"isolation":"isolate"},"viewBox":"0 0 316.638 251.37"};

module.exports = Portugal;

Portugal.default = Portugal;


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "naWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3Nti");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_last_update_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vga7");
var _data_last_update_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("vga7", 1);







function Footer() {
  let options = {
    month: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  let f = new Intl.DateTimeFormat('pt-PT', options);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      src: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/pusher/7.0.3/pusher.min.js",
      integrity: "sha512-XVnzJolpkbYuMeISFQk6sQIkn3iYUbMX3f0STFUvT6f4+MZR6RJvlM5JFA2ritAN3hn+C0Bkckx2/+lCoJl3yg==",
      crossorigin: "anonymous"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
      className: `${_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer} card-shadow`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              target: "_blank",
              href: "https://twitter.com/vacinacaocovid1",
              children: "Twitter"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              target: "_blank",
              href: "/api/vaccines",
              children: "API"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              target: "_blank",
              href: "https://github.com/alicescfernandes/mapa-vacinacao-c19#embeds",
              children: "Embeds"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              target: "_blank",
              href: "https://github.com/alicescfernandes/mapa-vacinacao-c19",
              children: "C\xF3digo-Fonte"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "mailto:alicescfernandes+mapa@gmail.com",
              children: "Contacto"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              target: "_blank",
              href: "https://plausible.io/vacinacaocovid19.pt",
              children: "Analytics"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.update,
          children: ["\xDAltima Atualiza\xE7\xE3o: ", f.format(new Date(_data_last_update_json__WEBPACK_IMPORTED_MODULE_4__.date))]
        })]
      })
    })]
  }); //
}

/***/ }),

/***/ "oM7c":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Azores (props) {
    return React.createElement("svg",props,React.createElement("g",null,[React.createElement("path",{"d":" M 1324.46 206.605 C 1323.651 207.664 1323.216 209.78 1323.343 211.078 C 1322.66 212.196 1321.303 213.19 1320.74 214.22 C 1319.558 216.384 1320.297 219.297 1319.531 221.473 C 1319.39 221.874 1318.536 222.72 1318.322 223.165 C 1316.531 226.891 1318.177 230.443 1319.717 233.922 C 1324.086 236.66 1327.527 241.273 1331.339 244.68 C 1333.172 246.318 1335.463 248.379 1337.569 249.637 C 1338.686 250.303 1340.376 250.582 1341.382 251.329 C 1342.814 252.393 1344.363 254.198 1345.752 255.438 C 1347.684 257.165 1350.275 258.286 1352.167 260.032 C 1357.206 264.681 1364.985 272.118 1371.6 274.174 C 1377.503 276.009 1380.867 272.076 1384.152 271.878 C 1385.744 271.781 1387.513 272.289 1389.08 272.119 C 1390.862 271.927 1392.052 271.271 1394.008 271.635 C 1394.917 272.983 1396.519 273.564 1397.913 274.254 C 1400.294 275.434 1402.01 277.102 1404.794 277.438 C 1407.382 277.749 1410.367 277.292 1412.884 278.042 C 1413.509 278.228 1414.121 278.784 1414.743 279.009 C 1416.831 279.767 1419.17 279.896 1421.252 280.822 C 1424.546 282.287 1427.545 287.298 1430.828 287.591 C 1432.26 286.345 1434.297 285.024 1436.222 284.811 C 1440.041 284.388 1442.812 288.014 1446.914 287.711 C 1449.163 287.546 1450.938 286.115 1453.05 285.657 L 1454.724 285.496 C 1456.613 285.314 1458.544 285.68 1460.49 285.536 C 1462.362 285.399 1464.128 284.908 1465.975 284.73 L 1467.648 284.569 C 1469.03 284.608 1470.27 285.019 1471.739 284.932 C 1475.775 284.694 1479.087 281.506 1482.804 280.218 C 1486.115 279.07 1489.671 280.042 1493.032 279.614 C 1494.339 279.447 1498.694 276.647 1499.447 275.504 C 1502.807 274.525 1514.138 273.726 1517.671 273.811 C 1520.22 273.873 1522.48 274.801 1525.11 274.416 C 1528.633 270.471 1540.036 274.723 1545.101 267.043 C 1547.521 263.371 1547.874 253.463 1548.541 248.831 C 1548.785 247.139 1550.258 246.23 1550.214 243.955 C 1550.177 241.961 1548.892 239.364 1548.355 237.428 C 1547.952 235.976 1547.944 234.227 1547.425 232.836 C 1545.489 227.644 1535.678 221.333 1530.131 222.198 C 1528.183 222.502 1526.269 224.286 1524.552 224.857 L 1522.941 225.019 C 1521.869 225.125 1522.396 225.167 1521.36 224.898 C 1518.969 224.276 1517.237 224.915 1514.882 224.857 C 1510.806 224.758 1506.637 223.281 1502.516 223.165 C 1500.287 223.102 1498.145 224.065 1495.914 224.011 C 1492.594 223.931 1489.917 221.961 1486.523 222.681 C 1483.858 223.247 1481.551 225.15 1479.085 226.066 C 1478.141 226.417 1477.139 226.431 1476.172 226.832 L 1474.808 227.395 C 1473.714 228.107 1473.026 229.145 1471.739 229.813 C 1469.434 231.013 1465.731 230.919 1464.301 233.318 C 1462.114 234.032 1459.763 234.068 1457.607 234.769 C 1451.875 236.632 1445.543 237.036 1439.661 235.252 C 1438.414 233.704 1436.729 232.287 1436.222 230.297 L 1433.803 229.934 C 1430.111 231.299 1419.487 238.042 1417.346 238.274 C 1414.85 238.545 1412.979 236.682 1410.465 236.703 C 1405.859 239.681 1400.171 236.45 1395.682 235.252 C 1392.937 234.521 1389.954 234.406 1387.221 233.56 C 1385.928 233.16 1384.482 232.13 1383.13 231.989 C 1380.721 231.738 1378.129 232.709 1375.691 231.626 C 1374.54 231.115 1372.301 228.974 1371.414 228 C 1367.922 224.159 1371.012 221.083 1369.74 217 C 1367.609 215.643 1365.165 213.912 1363.232 212.286 C 1362.272 211.48 1361.44 210.21 1360.443 209.506 C 1357.935 207.737 1353.048 206.941 1350.121 205.88 C 1348.041 205.125 1346.437 203.585 1344.078 203.462 C 1336.608 203.073 1335.815 210.98 1327.806 206.121 L 1324.46 206.605 Z ","fillRule":"evenodd","fill":"rgb(1,174,151)","key":0}),React.createElement("path",{"d":" M 1494.544 82.733 C 1493.933 85.481 1494.133 89.448 1497.241 90.589 C 1497.928 91.795 1498.403 93.445 1498.542 94.82 C 1501.28 97.762 1505.742 102.011 1509.421 103.644 C 1510.853 104.28 1511.861 104.395 1513.232 105.337 C 1514.947 106.513 1516.105 108.354 1517.696 109.446 C 1520.073 111.077 1523.925 111.829 1526.715 112.347 C 1529.779 112.916 1537.736 111.728 1539.732 113.919 C 1540.024 115.159 1540.506 116.389 1541.034 117.545 C 1542.294 118.102 1544.137 118.333 1545.497 118.149 C 1546.351 117.397 1547.076 116.059 1547.45 115.006 L 1549.123 113.919 C 1554.661 117.92 1554.611 115.188 1559.63 115.732 C 1560.935 116.404 1561.663 117.496 1562.792 118.271 C 1565.518 120.141 1570.074 121.677 1573.205 120.566 C 1575.205 119.857 1576.888 118.262 1579.062 118.149 C 1582.414 117.975 1584.259 120.607 1587.431 120.446 C 1591.086 120.26 1593.917 117.237 1597.194 116.215 C 1600.632 113.048 1598.167 106.78 1598.403 102.798 C 1600.269 98.106 1608.349 98.092 1608.909 94.095 C 1607.555 89.63 1602.92 89.748 1601.842 86.964 C 1601.525 85.194 1602.862 83.417 1604.26 82.491 L 1604.725 80.194 C 1604.398 78.966 1603.678 77.549 1602.865 76.568 L 1600.913 75.601 C 1600.065 74.741 1599.372 72.926 1599.332 71.734 C 1598.708 70.743 1597.119 69.686 1595.985 69.436 C 1595.095 68.537 1594.317 66.936 1594.125 65.689 C 1593.093 64.844 1590.783 64.687 1589.57 65.085 C 1588.101 63.964 1580.594 59.362 1579.062 58.8 C 1576.898 58.005 1574.656 58.351 1572.461 57.107 C 1571.143 56.36 1570.225 55.38 1568.556 55.294 C 1567.768 55.254 1566.833 55.697 1566.046 55.657 C 1563.19 55.511 1560.218 53.556 1557.399 52.998 C 1556.309 53.706 1554.166 53.891 1552.935 53.602 C 1549.655 49.898 1522.198 49.369 1516.766 50.338 C 1510.995 51.369 1505.394 55.212 1499.657 55.899 C 1498.821 56.943 1497.714 57.697 1496.869 58.679 L 1496.124 59.807 C 1495.979 60.027 1495.859 60.131 1495.753 60.371 C 1495.006 62.058 1494.773 63.307 1493.707 64.924 L 1492.963 66.052 C 1492.365 67.754 1492.89 69.689 1492.591 71.371 C 1492.481 71.995 1491.912 72.677 1491.754 73.305 C 1490.886 76.787 1492.578 79.935 1494.544 82.733 Z ","fillRule":"evenodd","fill":"rgb(1,174,151)","key":1}),React.createElement("path",{"d":" M 1229.321 157.963 C 1234.357 159.575 1239.101 153.666 1244.353 154.143 C 1249.469 158.848 1255.348 154.038 1260.853 155.025 C 1266.853 159.786 1269.625 157.523 1276.222 157.523 C 1279.678 157.523 1283.173 158.111 1286.695 158.111 C 1294.88 158.111 1304.546 156.196 1306.961 166.142 C 1307.55 168.563 1308.145 170.698 1307.865 173.243 L 1309.561 174.859 C 1319.794 176.721 1325.764 160.385 1333.746 158.257 C 1335.057 157.909 1350.225 158.325 1351.602 158.698 C 1357.735 160.359 1359.779 163.102 1367.423 162.517 C 1368.234 163.671 1370.328 164.766 1371.718 164.869 C 1376.001 163.39 1381.765 163.568 1386.297 163.693 C 1387.939 162.246 1392.201 158.641 1393.416 157.376 C 1394.136 155.838 1394.185 153.088 1393.642 151.499 C 1391.622 149.876 1391.093 147.344 1389.348 145.623 C 1388.15 144.442 1386.381 144.037 1385.053 143.125 C 1382.91 141.655 1382.373 139.1 1379.854 137.983 C 1374.032 135.399 1368.426 139.115 1362.677 138.423 C 1359.404 138.03 1354.753 137.194 1351.828 135.633 C 1350.462 134.904 1349.132 133.567 1347.533 133.282 C 1346.485 133.095 1345.213 133.41 1344.143 133.282 C 1335.883 132.287 1332.183 129.136 1326.286 124.026 C 1325.078 122.979 1324.12 121.57 1322.557 120.941 C 1320.802 120.234 1319.096 120.258 1317.358 119.178 C 1316.003 117.17 1314.694 115.095 1313.742 112.86 L 1311.369 111.684 C 1301.097 114.716 1300.583 103.09 1291.817 105.514 C 1290.109 102.507 1287.808 98.679 1284.924 96.7 C 1275.839 90.466 1256.395 83.917 1245.483 82.008 C 1239.204 80.909 1234.487 83.881 1228.192 81.714 C 1226.373 82.052 1224.847 83.256 1223.219 83.624 C 1221.405 84.033 1219.248 83.19 1217.455 83.33 C 1209.516 83.95 1201.115 91.536 1196.209 97.14 C 1194.8 98.75 1195.652 110.675 1196.661 113.007 C 1197.31 114.508 1198.725 115.674 1199.148 117.415 C 1199.646 119.468 1198.99 121.579 1199.148 123.585 C 1199.42 127.028 1201.72 127.376 1202.877 130.05 C 1204.421 133.619 1203.854 136.448 1206.606 139.893 C 1208.754 142.583 1212.124 143.497 1214.404 145.77 C 1214.94 146.303 1215.218 147.304 1215.761 147.826 C 1218.449 150.418 1223.319 151.434 1226.157 154.292 C 1227.312 155.453 1227.946 156.888 1229.321 157.963 Z ","fillRule":"evenodd","fill":"rgb(1,174,151)","key":2})]));
}

Azores.defaultProps = {"style":{"isolation":"isolate"},"viewBox":"1195.467 49.913 413.442 237.816","width":"413.442pt","height":"237.816pt"};

module.exports = Azores;

Azores.default = Azores;


/***/ }),

/***/ "paFH":
/***/ (function(module) {

module.exports = JSON.parse("{\"fase_atual\":1,\"fases\":[{\"nome\":\"1ª Fase\",\"inicio\":1609027200000,\"objetivo_formatado\":\"950 mil pessoas\",\"fim\":null,\"objetivo\":950000,\"bullet_points\":[\"Profissionais de saúde envolvidos na prestação de cuidados a doentes\",\"Profissionais das forças armadas, forças de segurança e serviços críticos\",\"Profissionais e residentes em Estruturas Residenciais para Pessoas Idosas (ERPI) e instituições similares\",\"Profissionais e utentes da Rede Nacional de Cuidados Continuados Integrados (RNCCI).\"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]},{\"nome\":\"1ª Fase\",\"inicio\":1580515200000,\"fim\":null,\"objetivo\":950000,\"objetivo_formatado\":\"950 mil pessoas\",\"bullet_points\":[\"Pessoas com 80 ou mais anos de idade\",\"Pessoas com 50 ou mais anos de idade, que sofram de infsuficiência cardíaca, doença coronária, insuficiência renal (TFG < 60ml/min) ou doença respiratória crónicas \"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://covid19.min-saude.pt/vacinacao/\"},{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]},{\"nome\":\"2ª Fase\",\"inicio\":1585699200000,\"fim\":null,\"objetivo\":2700000,\"objetivo_formatado\":\"2.7 milhões pessoas\",\"bullet_points\":[\"Pessoas com 65 anos ou mais que não tenham sido vacinadas previamente\",\"Pessoas entre os 50 e os 64 anos de idade que sofram de diabetes, neoplasia maligna ativa, doença renal crónica, insuficiência hepática, hipertensão arterial ou obesidade\"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://covid19.min-saude.pt/vacinacao/\"},{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]},{\"nome\":\"3ª Fase\",\"inicio\":null,\"fim\":null,\"objetivo\":null,\"objetivo_formatado\":\"950 mil pessoas\",\"bullet_points\":[\"TBA\"],\"fontes\":[{\"nome\":\"SNS\",\"permalink\":\"https://covid19.min-saude.pt/vacinacao/\"},{\"nome\":\"SNS\",\"permalink\":\"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0\"}]}]}");

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "t5hz":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Madeira (props) {
    return React.createElement("svg",props,React.createElement("g",null,React.createElement("path",{"d":" M 933.912 251.37 C 934.789 249.984 935.387 248.474 935.455 246.697 C 935.654 241.484 936.874 236.508 940.742 233.362 C 945.53 229.467 945.865 222.294 951.771 219.789 C 957.482 217.366 963.635 216.017 968.697 212.401 C 974.859 208 982.184 215.127 988.982 213.102 C 993.543 211.743 998.382 204.915 1003.085 209.503 C 1008.561 214.845 1009.833 205 1003.977 205.722 C 998.544 206.392 993.072 202.101 987.832 204.21 C 981.29 206.844 973.922 207.971 967.26 204.591 C 962.212 202.029 955.504 203.082 952.113 198.401 C 949.053 194.177 941.956 195.929 936.752 195.406 C 929.978 194.725 921.941 196.668 916.488 191.473 C 911.697 186.909 905.608 189.807 900.333 188.373 C 894.515 186.791 889.008 184.882 883.268 183.499 C 877.397 182.086 876.843 174.611 874.083 169.949 C 869.972 163.005 861.069 161.402 854.851 156.757 C 849.9 153.058 851.848 146.283 847.839 142.295 C 842.875 137.357 835.502 134.652 832.626 128.122 C 830.227 122.677 823.713 121.601 818.819 119.246 C 813.82 116.84 809.032 111.503 803.029 113.578 C 791.909 117.423 780.303 117.207 769.069 119.73 C 763.015 121.09 757.009 123.324 750.723 122.729 C 744.72 122.16 738.716 118.498 732.861 121.44 C 726.215 124.779 720.37 129.426 713.838 132.919 C 706.061 137.077 696.553 136.418 688.202 139.283 C 681.407 141.613 674.387 141.005 668.243 138.103 C 659.571 134.007 650.167 137.048 641.703 133.419 C 636.197 131.058 633.918 122.952 627.184 122.767 C 620.359 122.58 613.376 121.663 608.937 116.655 C 604.268 111.388 599.57 106.376 595.637 100.617 C 592.029 95.333 588.235 90.879 584.054 86.512 C 581.012 83.334 577.835 78.079 572.729 79.723 C 566.142 81.845 560.838 76.438 554.574 77.224 C 547.97 78.052 545.87 85.74 541.631 90.029 C 538.055 93.647 533.347 96.013 530.162 100.002 C 524.177 107.498 516.02 112.807 510.479 120.645 C 506.747 125.923 502.019 129.824 496.822 133.176 C 491.25 136.77 494.955 144.801 500.394 145.609 C 506.339 146.493 507.319 154.398 508.451 159.673 C 509.644 165.233 511.199 170.61 511.22 176.204 C 511.243 182.786 517.217 186.513 520.758 191.173 C 524.392 195.955 527.464 200.886 531.987 204.616 C 537.294 208.994 537.823 216.299 543.21 220.276 C 547.338 223.323 552.341 224.985 556.492 228.006 C 564.479 233.821 574.18 236.83 582.803 241.653 C 588.662 244.931 594.942 247.442 600.396 251.37 L 933.912 251.37 L 933.912 251.37 Z ","fill":"rgb(1,174,151)"})));
}

Madeira.defaultProps = {"style":{"isolation":"isolate"},"viewBox":"494.057 77.145 513.762 174.225"};

module.exports = Madeira;

Madeira.default = Madeira;


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
        value,
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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vga7":
/***/ (function(module) {

module.exports = JSON.parse("{\"date\":1617448391613,\"dateSnsStartWeirdFormat\":\"22/03/2021\",\"dateSnsStart\":\"2021-03-22T00:00:00\",\"dateSns\":\"2021-03-28T00:00:00\",\"dateEcdc\":\"2021-03-28\",\"dateRt\":\"20210-03-28\",\"dateMadeira\":\"2021-03-28\",\"dateMadeiraCases\":\"2021-04-01\",\"dateAcores\":\"2021-03-30\",\"dateAcoresCases\":\"2021-04-01\"}");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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
  4101: 'santa_maria',
  corvo: 4901,
  flores: 4802,
  flores: 4801,
  faial: 4701,
  pico: 4602,
  pico: 4603,
  pico: 4601,
  sao_jorge: 4501,
  sao_jorge: 4502,
  graciosa: 4401,
  terceira: 4301,
  terceira: 4302,
  sao_miguel: 4201,
  sao_miguel: 4202,
  sao_miguel: 4203,
  sao_miguel: 4204,
  sao_miguel: 4205,
  sao_miguel: 4206,
  santa_maria: 4101
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });