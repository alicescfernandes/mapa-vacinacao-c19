(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./wydr.js


if (false) {}
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
;// CONCATENATED MODULE: external "@babel/polyfill"
var polyfill_namespaceObject = require("@babel/polyfill");;
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2859);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/Footer.module.scss
var Footer_module = __webpack_require__(2761);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./data/last-update.json
var last_update = __webpack_require__(4520);
// EXTERNAL MODULE: ./components/Card.module.scss
var Card_module = __webpack_require__(1547);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/Footer.jsx







function Footer({
  last
}) {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  let f = new Intl.DateTimeFormat('pt-PT', options);
  let options2 = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let f2 = new Intl.DateTimeFormat('pt-PT', options2);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: `${(Footer_module_default()).footer} hide_mobile card-shadow`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Container, {
        className: `hide_mobile`,
        style: {
          padding: '15px',
          display: 'block'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
              className: (Card_module_default()).card_subtitle,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Casos (DSSG-PT)"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Card_module_default()).card_subtitle,
              children: ["Dados at\xE9 ", f2.format(new Date(last_update/* dateCases */.XB))]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
              className: (Card_module_default()).card_subtitle,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Vacinas"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Card_module_default()).card_subtitle,
              children: ["Dados at\xE9 ", f2.format(new Date(last_update/* dateVaccines */.hg))]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
              className: (Card_module_default()).card_subtitle,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Relat\xF3rios de Vacina\xE7\xE3o"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Card_module_default()).card_subtitle,
              children: ["Dados at\xE9 ", f2.format(new Date(last_update/* dateSns */.Xf))]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
              className: (Card_module_default()).card_subtitle,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Dados RT"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Card_module_default()).card_subtitle,
              children: ["Dados at\xE9 ", f2.format(new Date(last_update/* dateRt */.KK))]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
              className: (Card_module_default()).card_subtitle,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Relat\xF3rios ECDC"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Card_module_default()).card_subtitle,
              children: ["Dados at\xE9 ", f2.format(new Date(last_update/* dateEcdc */.bb))]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
              className: (Card_module_default()).card_subtitle,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Dados OWID"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Card_module_default()).card_subtitle,
              children: ["Dados at\xE9 ", f2.format(new Date(last_update/* dateOwid */.jh))]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("script", {
      src: "/leaflet.js"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/pusher/7.0.3/pusher.min.js",
      integrity: "sha512-XVnzJolpkbYuMeISFQk6sQIkn3iYUbMX3f0STFUvT6f4+MZR6RJvlM5JFA2ritAN3hn+C0Bkckx2/+lCoJl3yg==",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("script", {
      src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("script", {
      src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("footer", {
      className: `${(Footer_module_default()).footer} card-shadow`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        className: (Footer_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              target: "_blank",
              href: "https://twitter.com/vacinacaocovid1",
              children: "Twitter"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              target: "_blank",
              href: "/api/vaccines",
              children: "API"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              target: "_blank",
              href: "https://github.com/alicescfernandes/mapa-vacinacao-c19#embeds",
              children: "Embeds"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              target: "_blank",
              href: "https://github.com/alicescfernandes/mapa-vacinacao-c19",
              children: "C\xF3digo-Fonte"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "mailto:alicescfernandes+mapa@gmail.com",
              children: "Contacto"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              target: "_blank",
              href: "https://plausible.io/vacinacaocovid19.pt",
              children: "Analytics"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Footer_module_default()).update,
          children: ["\xDAltima Atualiza\xE7\xE3o: ", f.format(new Date(last_update/* date */.hT))]
        })]
      })
    })]
  }); //
}
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/MetaTags.jsx




function Metatags({
  isUpdating
}) {
  let title = 'Vacinação COVID-19 - Dashboard sobre os dados da campanha de vacinação contra a COVID-19 em Portugal e Arquipélagos';
  let descricao = `Site informativo sobre a administração das vacinas em Portugal. É atualizado sempre que possível, assim que os dados forem sendo atualizados. Contamos com dados da Direção-Geral da Saúde, Our World in Data, Centro Europeu de Controlo de Doenças e informação do Governo de Portugal, temos gráficos sobre as vacinas administradas por dia e desde o início da campanha de vacinação, compradas, a faixa etária dos inoculados, infeções, óbitos, entre outros e temos números relacionados com a imunidade de grupo entre outros. Todo o nosso código é open-source, e pode ser consultado no github onde está alojado. Temos ainda uma conta no twitter onde pode seguir as últimas atualizações em relação aos números da campanha de vacinação da COVID-19.`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "title",
        content: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "description",
        content: descricao
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "og:url",
        content: "https://vacinacaocovid19.pt/"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "og:title",
        content: "Vacina\xE7\xE3o - COVID 19"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "og:description",
        content: descricao
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "og:image",
        content: "https://vacinacaocovid19.pt/imagem.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "twitter:url",
        content: "https://vacinacaocovid19.pt/"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "twitter:title",
        content: "Vacina\xE7\xE3o - COVID 19"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "twitter:description",
        content: descricao
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        property: "twitter:image",
        content: "https://vacinacaocovid19.pt/imagem.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "msapplication-TileColor",
        content: "#01AE97"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "msapplication-TileColor",
        content: "#01AE97"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "theme-color",
        content: "#01AE97"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("title", {
        children: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "stylesheet",
        href: "/leaflet.min.css"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
      className: "hide-except-seo",
      children: descricao
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/context/regiao.js
var context_regiao = __webpack_require__(2642);
// EXTERNAL MODULE: ./components/Header.module.scss
var Header_module = __webpack_require__(451);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "plausible-tracker"
var external_plausible_tracker_ = __webpack_require__(6987);
var external_plausible_tracker_default = /*#__PURE__*/__webpack_require__.n(external_plausible_tracker_);
;// CONCATENATED MODULE: ./components/Notifications.jsx



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

  (0,external_react_.useEffect)(function () {
    if (Notification.permission === 'granted') {
      registerOnFirebase();
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
    onClick: allowNotifications,
    children: [children, " "]
  });
}
// EXTERNAL MODULE: ./assets/bell.svg
var bell = __webpack_require__(8967);
var bell_default = /*#__PURE__*/__webpack_require__.n(bell);
// EXTERNAL MODULE: ./assets/twitter.svg
var twitter = __webpack_require__(4697);
var twitter_default = /*#__PURE__*/__webpack_require__.n(twitter);
// EXTERNAL MODULE: ./assets/plus.svg
var plus = __webpack_require__(6231);
var plus_default = /*#__PURE__*/__webpack_require__.n(plus);
;// CONCATENATED MODULE: ./components/Header.jsx












function Header() {
  let {
    0: supportsNotifications,
    1: setSupportsNotifications
  } = (0,external_react_.useState)(false);
  let {
    0: isSidebarOpen,
    1: setIsSidebarOpen
  } = (0,external_react_.useState)(false);
  let regiao = (0,external_react_.useContext)(context_regiao/* RegiaoContext */.B);
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
  (0,external_react_.useEffect)(() => {
    setSupportsNotifications('Notification' in window);
  }, []);

  function renderLocalInfo() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [regiao === 'portugal' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://covid19.min-saude.pt/vacinacao/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
              children: "Quando posso ser vacinado?"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://pandemiaclara.sapo.pt/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
              children: "Medidas de Desconfinamento"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://quadradinhodocosta.pt/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
              children: "Matriz de Risco"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://covid19.min-saude.pt/relatorio-de-vacinacao/",
            children: "Relat\xF3rios de Vacina\xE7\xE3o"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",
            children: "Ponto de Situa\xE7\xE3o"
          })
        })]
      }), regiao === 'madeira' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://covidmadeira.pt/",
            children: "Sit\xEDo oficial - Dire\xE7\xE3o Regional de Sa\xFAde"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://covidmadeira.pt/ponto-de-situacao/",
            children: "Ponto de Situa\xE7\xE3o"
          })
        })]
      }), regiao === 'acores' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://destinoseguro.azores.gov.pt/",
            children: "Portal COVID-19 - Governo dos A\xE7ores"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            target: "_blank",
            href: "https://vacinacao-covid19.azores.gov.pt/",
            children: "Portal Vacina\xE7\xE3o - Governo dos A\xE7ores"
          })
        })]
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("header", {
      className: `${(Header_module_default()).header} card-shadow`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        className: (Header_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Header_module_default()).logo,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            children: ["vacina\xE7\xE3o COVID 19 ", regioes[regiao].nome, " "]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: regioes[regiao].tagline
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("nav", {
          className: `${(Header_module_default()).nav} ${(Header_module_default()).hide_mobile}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
                href: "/",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                  className: regiao === 'portugal' ? (Header_module_default()).highlight : '',
                  children: "Portugal"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
                href: "/madeira",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                  className: regiao === 'madeira' ? (Header_module_default()).highlight : '',
                  children: "Madeira"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
                href: "/acores",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                  className: regiao === 'acores' ? (Header_module_default()).highlight : '',
                  children: "A\xE7ores"
                })
              })
            }), supportsNotifications && /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Notifications, {
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                  href: "#",
                  children: "Notifica\xE7\xF5es"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                target: "_blank",
                href: "https://twitter.com/vacinacaocovid1",
                children: "Twitter"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("header", {
      className: `${(Header_module_default()).header} ${(Header_module_default()).header_mobile} card-shadow`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Container, {
        className: (Header_module_default()).content,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("nav", {
          className: `${(Header_module_default()).nav}  ${(Header_module_default()).hide_mobile}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                onClick: () => {
                  setIsSidebarOpen(true);
                },
                children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((plus_default()), {
                  width: 25,
                  height: 25
                }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  children: "Mais"
                })]
              })
            }), supportsNotifications && /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(Notifications, {
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsx)((bell_default()), {
                      width: 21,
                      height: 21
                    })
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                children: "Notifica\xE7\xF5es"
              })]
            }), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((twitter_default()), {
                  width: 25,
                  height: 25
                }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  children: "Twitter"
                })]
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: `${(Header_module_default()).submenu}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Container, {
        className: (Header_module_default()).content,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("nav", {
          className: (Header_module_default()).nav,
          children: renderLocalInfo()
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
      onClick: () => {
        setIsSidebarOpen(false);
      },
      className: `${(Header_module_default()).sidemenu} ${isSidebarOpen ? (Header_module_default()).sidemenu_visible : ''}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
        className: (Header_module_default()).sidemenu_close,
        children: "\u2715"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).sidemenu_container,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h1", {
          children: "Mais dados"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
              href: "/",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                className: regiao === 'portugal' ? (Header_module_default()).highlight : '',
                children: "Portugal"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
              href: "/madeira",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                className: regiao === 'madeira' ? (Header_module_default()).highlight : '',
                children: "Madeira"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
              href: "/acores",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                className: regiao === 'acores' ? (Header_module_default()).highlight : '',
                children: "A\xE7ores"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("h1", {
          children: "Mais informa\xE7\xE3o"
        }), renderLocalInfo()]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./hooks/initSockets.js
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
;// CONCATENATED MODULE: ./pages/_app.js














let allowed_regioes = ['/', 'acores', 'madeira'];

function NextApp({
  Component,
  props
}) {
  // Unconventional way of not having multiple sockets connected between pages
  (0,external_react_.useEffect)(() => {
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(context_regiao/* RegiaoContext.Provider */.B.Provider, {
    value: props.regiao || 'portugal',
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(Metatags, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(Component, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(Footer, {})]
  });
}

NextApp.getInitialProps = async app => {
  var _app$ctx, _app$ctx$req;

  (0,utils/* trackPlausible */.DG)(app.ctx.req);
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

/* harmony default export */ var _app = (NextApp);

/***/ }),

/***/ 2761:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__a95ok",
	"content": "Footer_content__3vLWb",
	"update": "Footer_update__fFFAx",
	"logo": "Footer_logo__3hNs2"
};


/***/ }),

/***/ 451:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__3Z-q0",
	"submenu": "Header_submenu__y6vbr",
	"header_mobile": "Header_header_mobile__3F0A4",
	"submenu_mobile": "Header_submenu_mobile__2NpLk",
	"content": "Header_content__3--fg",
	"logo": "Header_logo__2UB2g",
	"highlight": "Header_highlight__Drolj",
	"sidemenu": "Header_sidemenu__3ITQW",
	"sidemenu_visible": "Header_sidemenu_visible__38qgO",
	"sidemenu_container": "Header_sidemenu_container__350uV",
	"sidemenu_close": "Header_sidemenu_close__zRbMz",
	"hide_mobile": "Header_hide_mobile__2Rzv1"
};


/***/ }),

/***/ 5994:
/***/ (function() {



/***/ }),

/***/ 8967:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(9297);

function Bell (props) {
    return React.createElement("svg",props,React.createElement("g",null,[React.createElement("path",{"d":" M 1943.094 226.684 C 1931.149 216.588 1924.3 201.83 1924.3 186.196 L 1924.3 164.171 C 1924.3 136.371 1903.649 113.358 1876.9 109.503 L 1876.9 100.971 C 1876.9 96.602 1873.361 93.071 1869 93.071 C 1864.639 93.071 1861.1 96.602 1861.1 100.971 L 1861.1 109.503 C 1834.343 113.358 1813.7 136.371 1813.7 164.171 L 1813.7 186.196 C 1813.7 201.83 1806.851 216.588 1794.835 226.747 C 1791.762 229.378 1790 233.201 1790 237.246 C 1790 244.87 1796.202 251.071 1803.825 251.071 L 1934.175 251.071 C 1941.799 251.071 1948 244.87 1948 237.246 C 1948 233.201 1946.238 229.378 1943.094 226.684 Z ","fill":"rgb(1,174,151)","key":0}),React.createElement("path",{"d":" M 1869 282.671 C 1883.307 282.671 1895.275 272.472 1898.025 258.971 L 1839.975 258.971 C 1842.725 272.472 1854.693 282.671 1869 282.671 Z ","fill":"rgb(1,174,151)","key":1})]));
}

Bell.defaultProps = {"style":{"isolation":"isolate"},"viewBox":"1790 93.071 158 189.6","width":"158pt","height":"189.6pt"};

module.exports = Bell;

Bell.default = Bell;


/***/ }),

/***/ 6231:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(9297);

function Plus (props) {
    return React.createElement("svg",props,React.createElement("g",null,React.createElement("path",{"fill":"rgb(1,174,151)","d":"M 1408,800 V 608 q 0,-40 -28,-68 -28,-28 -68,-28 H 896 V 96 Q 896,56 868,28 840,0 800,0 H 608 Q 568,0 540,28 512,56 512,96 V 512 H 96 Q 56,512 28,540 0,568 0,608 v 192 q 0,40 28,68 28,28 68,28 h 416 v 416 q 0,40 28,68 28,28 68,28 h 192 q 40,0 68,-28 28,-28 28,-68 V 896 h 416 q 40,0 68,-28 28,-28 28,-68 z","id":"path3017"})));
}

Plus.defaultProps = {"viewBox":"0 -256 1792 1792","width":"100%","height":"100%"};

module.exports = Plus;

Plus.default = Plus;


/***/ }),

/***/ 4697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(9297);

function Twitter (props) {
    return React.createElement("svg",props,React.createElement("path",{"fill":"rgb(1,174,151)","d":"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}));
}

Twitter.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24"};

module.exports = Twitter;

Twitter.default = Twitter;


/***/ }),

/***/ 3879:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ 5931:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns/locale");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6786:
/***/ (function(module) {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ 6987:
/***/ (function(module) {

"use strict";
module.exports = require("plausible-tracker");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9226:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,859,872], function() { return __webpack_exec__(1941); });
module.exports = __webpack_exports__;

})();