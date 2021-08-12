(function() {
var exports = {};
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 7984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/graphs/VacinadosPorDia.jsx
var VacinadosPorDia = __webpack_require__(6292);
// EXTERNAL MODULE: ./components/Counter.jsx
var Counter = __webpack_require__(1745);
// EXTERNAL MODULE: ./components/graphs/NumeroTotalVacinados.jsx
var NumeroTotalVacinados = __webpack_require__(1516);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
// EXTERNAL MODULE: external "react-spinners-kit"
var external_react_spinners_kit_ = __webpack_require__(1047);
// EXTERNAL MODULE: ./hooks/useData.js
var useData = __webpack_require__(1410);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(2870);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./hooks/useColors.js
var useColors = __webpack_require__(5681);
// EXTERNAL MODULE: ./components/Card.module.scss
var Card_module = __webpack_require__(1547);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
// EXTERNAL MODULE: ./data/last-update.json
var last_update = __webpack_require__(4520);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(5931);
// EXTERNAL MODULE: external "plausible-tracker"
var external_plausible_tracker_ = __webpack_require__(6987);
var external_plausible_tracker_default = /*#__PURE__*/__webpack_require__.n(external_plausible_tracker_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./data/generic.json
var generic = __webpack_require__(3574);
// EXTERNAL MODULE: ./components/Card.jsx
var Card = __webpack_require__(6806);
// EXTERNAL MODULE: ./components/graphs/PieVacinadosInfectadosRecuperadosObitos.jsx
var PieVacinadosInfectadosRecuperadosObitos = __webpack_require__(9299);
// EXTERNAL MODULE: ./components/graphs/PieSuscetiveisProporcao.jsx
var PieSuscetiveisProporcao = __webpack_require__(5268);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2859);
// EXTERNAL MODULE: ./components/graphs/LineRt.jsx
var LineRt = __webpack_require__(5476);
// EXTERNAL MODULE: ./components/context/regiao.js
var regiao = __webpack_require__(2642);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(8182);
// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__(3254);
;// CONCATENATED MODULE: ./components/graphs/RaaMapa.jsx










function RaaMapa({
  statistics,
  colors
}) {
  let {
    0: graphData,
    1: setGraphData
  } = (0,external_react_.useState)();
  let {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false);
  let {
    main,
    shades
  } = colors;

  const renderMap = async map => {
    const madeira = await fetch('/acores.geojson').then(r => r.json());
    const madeiraMapa = L.map('map', {
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
    let layers = L.geoJSON(madeira, {
      onEachFeature: (feature, shape) => {
        let concelho = constants/* ACORES_DICOS */.ty[feature.properties.DicoShort];
        let data = graphData.concelhos[concelho];
        let percentagem_1 = data.dose_1 / generic/* populacao_residente_raa */.KN[feature.properties.DicoShort].valor * 100;
        let percentagem_2 = data.dose_2 / generic/* populacao_residente_raa */.KN[feature.properties.DicoShort].valor * 100;
        shape.bindPopup(`<p>
						<strong>${feature.properties.ILHA}</strong>
						<br>1ª Dose: ${(0,utils/* formatNumber */.uf)(data.dose_1)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${(0,utils/* formatNumber */.uf)(data.dose_2)} (${percentagem_2.toFixed(2)}%)
					</p>`);
        shape.on('click', () => {//console.log('click');
        });
      },
      style: function (feature) {
        let concelho = constants/* ACORES_DICOS */.ty[feature.properties.DicoShort];
        let data = graphData.concelhos[concelho];
        let percentagem = data.dose_2 / generic/* populacao_residente_raa */.KN[feature.properties.DicoShort].valor * 100;
        return {
          fillOpacity: 1,
          fillColor: (0,utils/* getColor */.Lq)(percentagem),
          lineJoin: 'round',
          stroke: true,
          weight: 2,
          color: '#018b79'
        };
      }
    }).addTo(madeiraMapa);
    layers.eachLayer(function (layer) {
      layer.feature.properties.layerID = layer.feature.properties.DICOFRE;
    });
    madeiraMapa.fitBounds(layers.getBounds());
    madeiraMapa.setZoom(7.8); //Create legend

    var legend = L.control({
      position: 'bottomleft'
    });

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend');

      for (var i = 0; i < constants/* grades.length */.Tb.length; i++) {
        let grade = constants/* grades */.Tb[i];
        let grade_pretty = constants/* grades_pretty */.XS[grade];
        div.innerHTML += `<p>
						<i style="background:${(0,utils/* getColor */.Lq)(constants/* grades */.Tb[i] + 1)}"></i>${grade_pretty}</p>`;
      }

      return div;
    };

    legend.addTo(madeiraMapa);
  };

  function renderGraph(el) {
    const data = () => {
      const chartData = {
        labels: [''],
        datasets: [{
          label: 'Total de vacinas administradas - 1ª Dose',
          borderColor: main,
          backgroundColor: main,
          stack: 'stack0',
          order: 2,
          data_actual: el.dose_1,
          data: [el.dose_1 - el.dose_2]
        }, {
          label: 'Total de vacinas administradas - 2ª Dose',
          borderColor: shades[0],
          backgroundColor: shades[0],
          data_actual: el.dose_2,
          data: [el.dose_2],
          stack: 'stack0',
          order: 1
        }]
      };
      return chartData;
    };

    const options = () => {
      let dico = constants/* ACORES_DICOS */.ty[el.chave];
      let populacao_residente = generic/* populacao_residente_raa */.KN[dico].valor;
      return {
        indexAxis: 'y',
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: true,
            callbacks: {
              label: (tooltipItem, b) => {
                let data = tooltipItem.dataset.data_actual;
                return `${tooltipItem.dataset.label}: ${(0,utils/* formatNumber */.uf)(data, false)}`;
              }
            }
          },
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
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          },
          x: {
            stacked: true,
            ticks: {
              beginAtZero: true,
              stepSize: Math.round(populacao_residente / 5),
              callback: value => (0,utils/* formatNumber */.uf)(value, false)
            },
            max: populacao_residente
          }
        }
      };
    };

    return /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
      xs: 12,
      lg: 4,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Card_module_default()).ram_subchart_bar,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
          className: (Card_module_default()).text_left,
          children: el.nome
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
          height: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 60 : 60,
          options: options(),
          data: data
        })]
      })
    });
  }

  (0,external_react_.useEffect)(async () => {
    statistics.getArquipelagoData().then(data => {
      setGraphData(data[data.length - 1]);

      if (loaded === false) {
        setLoaded(true);
      }

      if (loaded === true) {
        renderMap();
      }
    });
  }, [loaded]);
  return loaded === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          id: "map",
          style: {
            height: '350px'
          }
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
      style: {
        marginTop: 15
      },
      children: Object.values(graphData.concelhos).map(renderGraph)
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: 'legends',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: 'legend',
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              style: {
                backgroundColor: main
              },
              className: 'color_sample'
            }), "1\xAA Dose"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: 'legend',
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
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
}
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__(6873);
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);
;// CONCATENATED MODULE: ./pages/acores.js

















 //data










const plausible = external_plausible_tracker_default()({
  domain: 'vacinacaocovid19.pt',
  trackLocalhost: true
});
function Home() {
  let {
    statistics,
    ready: dataReady
  } = (0,useData/* useData */.e)({
    regiao: 'acores'
  });
  let {
    0: selectedItem,
    1: setSelectedItem
  } = (0,external_react_.useState)({});
  let {
    0: previousItem,
    1: setPreviousItem
  } = (0,external_react_.useState)({});
  let {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false);
  let beacons = {
    mid_page: false,
    end_page: false
  };
  const router = (0,router_.useRouter)();
  let numberFormatter = new Intl.NumberFormat('pt-PT');
  let {
    0: derivedNumbers,
    1: setDerivedNumbers
  } = (0,external_react_.useState)({
    pessoasAVacinar: {
      current: 0
    },
    percentagem: {
      current: 0
    },
    percentagem_1d: {
      current: 0
    }
  });

  function trackScrollEvents(e) {
    if (window.scrollY > 3576 && beacons.end_page === false) {
      beacons.end_page = true;
      plausible.trackEvent('end_page', {
        page: 'açores'
      });
      return;
    }

    if (window.scrollY > 1657 && beacons.mid_page === false) {
      beacons.mid_page = true;
      plausible.trackEvent('mid_page', {
        page: 'açores'
      });
      return;
    }
  }

  let startDate = new Date(last_update/* dateAcores */.k0);
  let [first, ...restDate] = (0,external_date_fns_.format)(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
    locale: locale_.pt
  }).replace('-feira', '').split('');

  function onSocketUpdate() {
    router.push('/');
  }

  let {
    colors,
    colors_v2
  } = (0,useColors/* useColors */.c)();
  (0,external_react_.useEffect)(() => {
    // Unconventional way of doing this
    window.addEventListener('socket_update', onSocketUpdate);
    window.addEventListener('scroll', trackScrollEvents);
    return function () {
      // Unconventional way of doing this
      window.removeEventListener('socket_update', onSocketUpdate);
      window.removeEventListener('scroll', trackScrollEvents);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    let object = {
      pessoasAVacinar: {
        current: numberFormatter.format(generic/* populacao_raa.valor */.tV.IK * 0.7 - selectedItem.dose_2)
      },
      percentagem: {
        current: selectedItem.dose_2 / generic/* populacao_raa.valor */.tV.IK * 100
      },
      percentagem_1d: {
        current: selectedItem.dose_1 / generic/* populacao_raa.valor */.tV.IK * 100
      }
    };
    setDerivedNumbers(object);
  }, [selectedItem]);
  (0,external_react_.useEffect)(async () => {
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

  let renderCounterGroupV2 = (updating = false) => {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    let f = new Intl.DateTimeFormat('pt-PT', options);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
        className: (Home_module_default()).datepickerRow,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          style: {
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: (Card_module_default()).card_subtitle_2,
            children: ["Atualizado a ", f.format(startDate), " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {})]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        className: "counterRow",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              tempo: (0,utils/* formatDateShort */.mn)(previousItem.data),
              colors: colors,
              title: "Doses totais",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.total,
              from: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.total) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.total
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              tempo: (0,utils/* formatDateShort */.mn)(previousItem.data),
              colors: colors,
              title: "Doses  - 1\xAA Inocula\xE7\xE3o",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.dose_1,
              from: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              tempo: (0,utils/* formatDateShort */.mn)(previousItem.data),
              colors: colors,
              title: "Doses - 2\xAA Inocula\xE7\xE3o",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.dose_2,
              from: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          id: "vacin1d",
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              tempo: (0,utils/* formatDateShort */.mn)(previousItem.data),
              digits: 2,
              suffix: '%',
              colors: colors,
              title: "Popula\xE7\xE3o vacinada com pelo menos uma dose",
              from: 0,
              to: derivedNumbers.percentagem_1d.current
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          id: "vacin2d",
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              tempo: (0,utils/* formatDateShort */.mn)(previousItem.data),
              digits: 2,
              suffix: '%',
              colors: colors,
              title: "Popula\xE7\xE3o totalmente vacinada",
              from: 0,
              to: derivedNumbers.percentagem.current
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          id: "vacinfase",
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
            type: 'counter',
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              style: {
                marginBottom: '10px'
              },
              className: (Card_module_default()).card_title,
              children: "Plano de Vacina\xE7\xE3o"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("h1", {
              title: "Consultar notas ou o plano de informa\xE7\xE3o para mais informa\xE7\xE3o",
              style: {
                color: colors[0]
              },
              className: (Card_module_default()).card_highlight_2,
              children: "N/A"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              target: "_blank",
              href: 'https://covidmadeira.pt/vacinacao/',
              className: `${(Card_module_default()).card_subtitle} ${(Home_module_default()).link}`,
              children: "+ info"
            })]
          })
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsx)(regiao/* RegiaoContext.Provider */.B.Provider, {
    value: 'acores',
    children: loaded ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [renderCounterGroupV2(), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        className: "container-fluid app",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "N\xFAmero de vacinas administradas"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(NumeroTotalVacinados/* NumeroTotalVacinados */.R, {
              statistics: statistics,
              colors: colors
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "N\xFAmero de vacinas administradas"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(VacinadosPorDia/* VacinadosPorDia */.Z, {
              colors: colors_v2,
              statistics: statistics
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
          height: 500,
          once: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "Vacina\xE7\xE3o por regi\xE3o"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados desde 31 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateAcores */.k0).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                }), "."]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(RaaMapa, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
          height: 500,
          offset: 300,
          once: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                className: (Home_module_default()).title,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
                  children: ["R", /*#__PURE__*/(0,jsx_runtime_.jsx)("sub", {
                    children: "t"
                  })]
                }), ' ', "na Regi\xE3o Aut\xF3noma dos A\xE7ores (desde 01/01/2021)"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(LineRt/* LineRt */.g, {
                regiao: 'acores',
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
          height: 500,
          once: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados e \xF3bitos"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados desde 31 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateAcores */.k0), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                }), ", \xE0 exce\xE7\xE3o das doses administradas, cujo os ultimos dados dispon\xEDveis s\xE3o de", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateAcoresCases */.vI), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(PieVacinadosInfectadosRecuperadosObitos/* PieVacinadosInfectadosRecuperadosObitos */.G, {
                colors: colors_v2,
                statistics: statistics
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados e \xF3bitos e popula\xE7\xE3o suscet\xEDvel"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados desde 31 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateAcores */.k0).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                }), ", \xE0 exce\xE7\xE3o das doses administradas, cujo os ultimos dados dispon\xEDveis s\xE3o de", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateAcoresCases */.vI).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(PieSuscetiveisProporcao/* PieSuscetiveisProporcao */.o, {
                colors: colors_v2,
                statistics: statistics
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            className: (Home_module_default()).sources_block,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "Notas"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["A percentagem de popula\xE7\xE3o vacinada foi calculada com base no n\xFAmero total de segundas doses administradas e com o \xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater",
                children: "n\xFAmero de popula\xE7\xE3o da Regi\xE3o Aut\xF3noma dos A\xE7ores (dados do PORDATA)"
              }), ". Os", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://www.facebook.com/DirecaoSaudeAcores/photos/a.228768877313421/1596814803842148/?type=3&theater",
                children: "dados de cada regi\xE3o dos A\xE7ores"
              }), ' ', "s\xE3o dados provis\xF3rios 26/05/2015 e foram retirados do PORDATA. De acordo com o\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",
                children: "Instituto Ricardo Jorge, ser\xE1 preciso imunizar entre 60% a 70% da popula\xE7\xE3o para se atingir a imunidade de grupo."
              }), ' ', "Os valores apresentados aqui foram calculados com uma percentagem de 70%."]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["A popula\xE7\xE3o suscet\xEDvel a infe\xE7\xE3o foi calculada com base na popula\xE7\xE3o total menos a soma do n\xFAmero de \xF3bitos, casos ativos, popula\xE7\xE3o infectada, vacinada e recuperada assumindo que casos de reinfe\xE7\xF5es s\xE3o raros.", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",
                target: ":blank",
                children: "At\xE9 25/02 foram confirmados 57 casos de reinfec\xE7\xE3o com o novo coronav\xEDrus."
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            className: (Home_module_default()).sources_block,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "Fontes"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["Os dados apresentados s\xE3o retirados do portal de vacina\xE7\xE3o do", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://vacinacao-covid19.azores.gov.pt/",
                children: "Governo dos A\xE7ores"
              }), ". A atualiza\xE7\xE3o destes dados \xE9 semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus s\xE3o retirados dos", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://destinoseguro.azores.gov.pt/",
                children: "pontos de situa\xE7\xE3o"
              }), ' ', "publicados pela mesma entidade"]
            })]
          })]
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      style: {
        display: 'block',
        width: 50,
        margin: 'auto '
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_spinners_kit_.GooSpinner, {
        size: 50,
        color: colors_v2.main
      })
    })
  });
}

/***/ }),

/***/ 9950:
/***/ (function(module) {

"use strict";
module.exports = require("chartjs-plugin-annotation");;

/***/ }),

/***/ 9942:
/***/ (function(module) {

"use strict";
module.exports = require("chartjs-plugin-datalabels");;

/***/ }),

/***/ 4058:
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 8182:
/***/ (function(module) {

"use strict";
module.exports = require("react-chartjs-2");;

/***/ }),

/***/ 6873:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazyload");;

/***/ }),

/***/ 1047:
/***/ (function(module) {

"use strict";
module.exports = require("react-spinners-kit");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [859,872,358], function() { return __webpack_exec__(7984); });
module.exports = __webpack_exports__;

})();