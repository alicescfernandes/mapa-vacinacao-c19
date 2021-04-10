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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

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

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__("H/sG");

// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__("GyP+");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/Footer.module.scss
var Footer_module = __webpack_require__("3Nti");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// EXTERNAL MODULE: ./data/last-update.json
var last_update = __webpack_require__("vga7");

// CONCATENATED MODULE: ./components/Footer.jsx






function Footer() {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  let f = new Intl.DateTimeFormat('pt-PT', options);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/pusher/7.0.3/pusher.min.js",
      integrity: "sha512-XVnzJolpkbYuMeISFQk6sQIkn3iYUbMX3f0STFUvT6f4+MZR6RJvlM5JFA2ritAN3hn+C0Bkckx2/+lCoJl3yg==",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: `${Footer_module_default.a.footer} card-shadow`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Container"], {
        className: Footer_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              target: "_blank",
              href: "https://twitter.com/vacinacaocovid1",
              children: "Twitter"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              target: "_blank",
              href: "/api/vaccines",
              children: "API"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              target: "_blank",
              href: "https://github.com/alicescfernandes/mapa-vacinacao-c19#embeds",
              children: "Embeds"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              target: "_blank",
              href: "https://github.com/alicescfernandes/mapa-vacinacao-c19",
              children: "C\xF3digo-Fonte"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "mailto:alicescfernandes+mapa@gmail.com",
              children: "Contacto"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              target: "_blank",
              href: "https://plausible.io/vacinacaocovid19.pt",
              children: "Analytics"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: Footer_module_default.a.update,
          children: ["\xDAltima Atualiza\xE7\xE3o: ", f.format(new Date(last_update.date))]
        })]
      })
    })]
  }); //
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/MetaTags.jsx




function Metatags({
  isUpdating
}) {
  let title = 'Vacinação COVID-19 - Dashboard sobre os dados da campanha de vacinação contra a COVID-19 em Portugal e Arquipélagos';
  let descricao = `Site informativo sobre a administração das vacinas em Portugal. É atualizado sempre que possível, assim que os dados forem sendo atualizados. Contamos com dados da Direção-Geral da Saúde, Our World in Data, Centro Europeu de Controlo de Doenças e informação do Governo de Portugal, temos gráficos sobre as vacinas administradas por dia e desde o início da campanha de vacinação, compradas, a faixa etária dos inoculados, infeções, óbitos, entre outros e temos números relacionados com a imunidade de grupo entre outros. Todo o nosso código é open-source, e pode ser consultado no github onde está alojado. Temos ainda uma conta no twitter onde pode seguir as últimas atualizações em relação aos números da campanha de vacinação da COVID-19.`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "title",
        content: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: descricao
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:url",
        content: "https://vacinacaocovid19.pt/"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: "Vacina\xE7\xE3o - COVID 19"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:description",
        content: descricao
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:image",
        content: "https://vacinacaocovid19.pt/imagem.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:url",
        content: "https://vacinacaocovid19.pt/"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:title",
        content: "Vacina\xE7\xE3o - COVID 19"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:description",
        content: descricao
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:image",
        content: "https://vacinacaocovid19.pt/imagem.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "msapplication-TileColor",
        content: "#01AE97"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "msapplication-TileColor",
        content: "#01AE97"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "theme-color",
        content: "#01AE97"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.css"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "hide-except-seo",
      children: descricao
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/context/regiao.js
var context_regiao = __webpack_require__("uAdN");

// EXTERNAL MODULE: ./components/Header.module.scss
var Header_module = __webpack_require__("OXQD");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: external "plausible-tracker"
var external_plausible_tracker_ = __webpack_require__("WUak");
var external_plausible_tracker_default = /*#__PURE__*/__webpack_require__.n(external_plausible_tracker_);

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
  const plausible = external_plausible_tracker_default()({
    domain: 'vacinacaocovid19.pt',
    trackLocalhost: true
  });

  function registerOnFirebase(callback) {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    const messaging = firebase.messaging();
    messaging.getToken({
      vapidKey: 'BHtOyn7DJeWzTT1uCITnVOzCpFI4jyOGNo_NQCKoJktP56tHqSVCPtyn99tgpWPRsWzRTu07ahM6fjljP_01K3g'
    }).then((currentToken, b, c) => {
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
          plausible.trackEvent('notifications', {
            type: 'granted'
          });
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
// CONCATENATED MODULE: ./hooks/initSockets.js
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
// CONCATENATED MODULE: ./pages/_app.js












let allowed_regioes = ['/', 'acores', 'madeira'];

function NextApp({
  Component,
  props
}) {
  // Unconventional way of not having multiple sockets connected between pages
  Object(external_react_["useEffect"])(() => {
    initSockets(function (data) {
      let event = new Event('socket_update');
      event.data = data;
      window.dispatchEvent(event);
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        scope: './'
      }).then(function (registration) {
        /* success */
      }, function (error) {
        /* error */
      });
    } else {//not supported
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(context_regiao["a" /* RegiaoContext */].Provider, {
    value: props.regiao || 'portugal',
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Metatags, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}

NextApp.getInitialProps = async app => {
  var _app$ctx, _app$ctx$req;

  Object(utils["f" /* trackPlausible */])(app.ctx.req);
  let url = (app === null || app === void 0 ? void 0 : (_app$ctx = app.ctx) === null || _app$ctx === void 0 ? void 0 : (_app$ctx$req = _app$ctx.req) === null || _app$ctx$req === void 0 ? void 0 : _app$ctx$req.url.replace('/', '')) || app.ctx.pathname.replace('/', '');
  url = url.split('?')[0];
  let regiao = 'portugal';

  if (url !== '') {
    regiao = url;
  }

  if (!allowed_regioes.includes(regiao)) regiao = 'portugal';
  return {
    props: {
      regiao: regiao,
      pusher: ''
    }
  };
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (NextApp);

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

/***/ "5Buo":
/***/ (function(module, exports) {



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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

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

/***/ "H/sG":
/***/ (function(module, exports) {



/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

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

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
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
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
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
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
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
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

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
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
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

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

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
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

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

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
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
  // In-flight Server Data Requests, for deduping
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
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
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
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
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
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

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
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

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

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
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
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
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
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

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
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
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

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
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
        }), resolvedAs, __N_SSG, this.locale);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
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
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
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

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
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

/***/ "lN74":
/***/ (function(module) {

module.exports = JSON.parse("{\"populacao\":{\"valor\":10286300,\"legenda\":\"10,28 milhões (2019)\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.pordata.pt/Portugal\"}},\"populacao_ram\":{\"valor\":254254,\"legenda\":\"254 mil 254 pessoas\",\"fonte\":{\"nome\":\"Direção Regional de Estatística da Madeira\",\"permalink\":\"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html\"}},\"populacao_raa\":{\"valor\":202572,\"legenda\":\"202 mil 575 pessoas\",\"fonte\":{\"nome\":\"PORDATA\",\"permalink\":\"https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater\"}},\"populacao_residente_ram\":{\"3101\":{\"dico\":3101,\"concelho\":\"calheta\",\"valor\":10867,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3102\":{\"dico\":3102,\"concelho\":\"camara_lobos\",\"valor\":33675,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3103\":{\"dico\":3103,\"concelho\":\"funchal\",\"valor\":104024,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3104\":{\"dico\":3104,\"concelho\":\"machico\",\"valor\":19981,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3105\":{\"dico\":3105,\"concelho\":\"ponta_sol\",\"valor\":8593,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3106\":{\"dico\":3106,\"concelho\":\"porto_moniz\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3107\":{\"dico\":3107,\"concelho\":\"ribeira_brava\",\"valor\":2342,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3108\":{\"dico\":3108,\"concelho\":\"santa_cruz\",\"valor\":45281,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3109\":{\"dico\":3109,\"concelho\":\"santana\",\"valor\":6711,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3110\":{\"dico\":3110,\"concelho\":\"svicente\",\"valor\":5143,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"populacao_residente_raa\":{\"41\":{\"dico\":41,\"concelho\":\"santa_maria\",\"valor\":4589,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"42\":{\"dico\":42,\"concelho\":\"sao_miguel\",\"valor\":110731,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"43\":{\"dico\":43,\"concelho\":\"terceira\",\"valor\":47270,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"44\":{\"dico\":44,\"concelho\":\"graciosa\",\"valor\":3741,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"45\":{\"dico\":45,\"concelho\":\"sao_jorge\",\"valor\":7836,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"46\":{\"dico\":46,\"concelho\":\"pico\",\"valor\":12199,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"47\":{\"dico\":47,\"concelho\":\"faial\",\"valor\":12591,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"48\":{\"dico\":48,\"concelho\":\"flores\",\"valor\":3249,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"49\":{\"dico\":49,\"concelho\":\"corvo\",\"valor\":369,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}},\"3201\":{\"dico\":3201,\"concelho\":\"porto_santo\",\"valor\":5202,\"fonte\":{\"nome\":\"PORDATA - Estimativas até 31/12\",\"permalink\":\"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120\"}}},\"doses\":{\"valor\":38000000,\"legenda\":\"38 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19\"}},\"doses3\":{\"valor\":31000000,\"legenda\":\"mais do que 31 milhões de doses\",\"fonte\":{\"nome\":\"Governo de Portugal\",\"permalink\":\"https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C\"}},\"doses2\":{\"valor\":22000000,\"legenda\":\"cerca de 22 milhões de doses\",\"fonte\":{\"nome\":\"Direção-Geral da Saúde\",\"permalink\":\"https://www.sns.gov.pt/noticias/2020/12/04/plano-de-vacinacao-contra-a-covid-19/\"}},\"populacao_grupos\":{\"18_24\":544575,\"25_49\":3373178,\"50_59\":1482121,\"60_69\":1293301,\"70_79\":973123,\"80_plus\":668660,\"fonte\":{\"nome\":\"PORDATA (2019)\",\"permalink\":\"https://www.pordata.pt/Portugal/Popula%c3%a7%c3%a3o+residente++m%c3%a9dia+anual+total+e+por+grupo+et%c3%a1rio-10-1126\"}}}");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
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

/***/ "q4sD":
/***/ (function(module, exports) {



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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

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
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
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

module.exports = JSON.parse("{\"date\":1618096404850,\"dateSnsStartWeirdFormat\":\"29/03/2021\",\"dateSnsStart\":\"2021-03-29T00:00:00\",\"dateSns\":\"2021-04-04T00:00:00\",\"dateEcdc\":\"2021-04-04\",\"dateRt\":\"20210-03-28\",\"dateMadeira\":\"2021-04-4\",\"dateMadeiraCases\":\"2021-04-09\",\"dateAcores\":\"2021-04-08T00:00:00\",\"dateAcoresCases\":\"2021-04-10\"}");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });