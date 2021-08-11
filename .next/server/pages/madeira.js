(function() {
var exports = {};
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 755:
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
// EXTERNAL MODULE: ./components/graphs/LineRt.jsx
var LineRt = __webpack_require__(5476);
// EXTERNAL MODULE: ./components/context/regiao.js
var regiao = __webpack_require__(2642);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(8182);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2859);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__(3254);
// EXTERNAL MODULE: ./hooks/useCanvasResizer.js
var useCanvasResizer = __webpack_require__(3972);
;// CONCATENATED MODULE: ./components/graphs/RamBarAdministradasPorFaixaEtaria.jsx




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
  } = (0,external_react_.useState)(false);
  let {
    main,
    shades,
    tints,
    complements
  } = colors;
  let {
    0: graphData,
    1: setGraphData
  } = (0,external_react_.useState)({});
  let {
    0: activeDose,
    1: setActiveDose
  } = (0,external_react_.useState)('dose_1');
  const canvasRef = (0,external_react_.useRef)(null);

  function generateColor(color) {
    return {
      borderColor: color,
      pointBorderColor: color,
      pointBackgroundColor: color,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: color
    };
  }

  (0,external_react_.useEffect)(() => {
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
  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();

  const data = canvas => {
    let {
      labels,
      groups
    } = graphData;
    setCanvasNode(canvas.parentNode);
    return {
      labels: Object.keys(graphData.labels).map(key => {
        let fromDate = new Date(labels[key]);
        return `${(0,utils/* formatNumber */.uf)(fromDate.getDate())}/${(0,utils/* formatNumber */.uf)(fromDate.getMonth() + 1)}`;
      }),
      datasets: [_objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(shades[0])), {}, {
        label: 'Grupo 18/24',
        labelGroup: 'Grupo 18/24',
        fill: false,
        lineTension: 0.3,
        backgroundColor: shades[0],
        data: groups.map(group => group.e1824[activeDose] || 0),
        order: 1,
        customDose: 2
      }), _objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(tints[1])), {}, {
        label: 'Grupo 25/49',
        labelGroup: 'Grupo 25/49',
        fill: false,
        lineTension: 0.3,
        backgroundColor: tints[1],
        data: groups.map(group => group.e2549[activeDose] || 0),
        order: 3,
        customDose: 2
      }), _objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(main)), {}, {
        label: 'Grupo 50/59',
        labelGroup: 'Grupo 50/59',
        fill: false,
        lineTension: 0.3,
        backgroundColor: main,
        data: groups.map(group => group.e5059[activeDose] || 0),
        stack: 'stack1',
        order: 5,
        customDose: 2
      }), _objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(shades[2])), {}, {
        label: 'Grupo 60/69',
        labelGroup: 'Grupo 60/69',
        fill: false,
        lineTension: 0.3,
        backgroundColor: shades[2],
        data: groups.map(group => (group.e6064[activeDose] + group.e6569[activeDose]) / 2 || 0),
        order: 7,
        customDose: 2
      }), _objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(complements[2])), {}, {
        label: 'Grupo 70/79',
        labelGroup: 'Grupo 70/79',
        fill: false,
        lineTension: 0.3,
        backgroundColor: complements[2],
        data: groups.map(group => group.e7079.dose_2 || 0),
        order: 9,
        customDose: 2
      }), _objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(complements[1])), {}, {
        label: 'Grupo 80+',
        labelGroup: 'Grupo 80+',
        backgroundColor: complements[1],
        data: groups.map(group => group.e80.dose_2 || 0),
        order: 11,
        stack: 'stack2',
        fill: false,
        lineTension: 0.3,
        customDose: 2
      })]
    };
  };

  const options = () => {
    let maxValue = 100;
    return {
      plugins: {
        datalabels: {
          display: false
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
        if (window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT) {
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
        callbacks: _objectSpread(_objectSpread(_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(shades[0])), {}, {
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
          id: 'axis',
          stacked: false,
          ticks: {
            beginAtZero: false,
            min: 0,
            max: maxValue,
            stepSize: (maxValue / 5).toFixed(0),
            callback: value => (0,utils/* formatNumber */.uf)(value, false) + '%'
          }
        },
        x: {
          id: 'xaxis',
          stacked: false,
          ticks: {
            beginAtZero: false
          }
        }
      }
    };
  };

  (0,external_react_.useEffect)(() => {
    statistics.getAdministredDosesByAgeByWeekRam().then(data => {
      setGraphData(data);
      setLoaded(true);
      setActiveDose('dose_1');
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
    textLeft: true,
    allowOverflow: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: loaded === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: 'toggle_buttons',
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
              className: external_classnames_default()('toggle_button', {
                active: activeDose === 'dose_1'
              }),
              onClick: () => {
                setActiveDose('dose_1');
              },
              children: "1\xAA Dose"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
              className: external_classnames_default()('toggle_button', {
                active: activeDose === 'dose_2'
              }),
              onClick: () => {
                setActiveDose('dose_2');
              },
              children: "2\xAA Dose"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Line, {
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
;// CONCATENATED MODULE: ./components/graphs/RamMapa.jsx










function RamMapa({
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
    const madeira = await fetch('/madeira.geojson').then(r => r.json());
    const madeiraMapa = L.map('map', {
      zoomSnap: 0.1,
      doubleClickZoom: false,
      closePopupOnClick: false,
      dragging: false,
      zoomDelta: false,
      trackResize: false,
      touchZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
      draggable: false
    });
    let layers = L.geoJSON(madeira, {
      onEachFeature: (feature, shape) => {
        let concelho = constants/* MADEIRA_DICOS */.de[feature.properties.Dico];
        let data = graphData.concelhos[concelho];
        let percentagem_1 = data.dose_1 / generic/* populacao_residente_ram */.dU[feature.properties.Dico].valor * 100;
        let percentagem_2 = data.dose_2 / generic/* populacao_residente_ram */.dU[feature.properties.Dico].valor * 100;
        shape.bindPopup(`<p>
						<strong>${feature.properties.Municipio}</strong>
						<br>1ª Dose: ${(0,utils/* formatNumber */.uf)(data.dose_1)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${(0,utils/* formatNumber */.uf)(data.dose_2)} (${percentagem_2.toFixed(2)}%)
					</p>`);
        shape.on('click', () => {//console.log('click');
        });
      },
      style: function (feature) {
        let concelho = constants/* MADEIRA_DICOS */.de[feature.properties.Dico];
        let data = graphData.concelhos[concelho];
        let percentagem = data.dose_2 / generic/* populacao_residente_ram */.dU[feature.properties.Dico].valor * 100;
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
    madeiraMapa.setZoom(10); //Create legend

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
    const data = (canvas, cenas) => {
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
          data: [el.dose_2],
          data_actual: el.dose_2,
          stack: 'stack0',
          order: 1
        }]
      };
      return chartData;
    };

    const options = () => {
      let dico = constants/* MADEIRA_DICOS */.de[el.chave];
      let populacao_residente = generic/* populacao_residente_ram */.dU[dico].valor;
      console.log(1, populacao_residente);
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
            id: 'y-axis',
            ticks: {
              beginAtZero: true
            }
          },
          x: {
            stacked: true,
            ticks: {
              beginAtZero: true,
              max: populacao_residente,
              stepSize: Math.round(window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? populacao_residente / 3 : populacao_residente / 6),
              callback: value => (0,utils/* formatNumber */.uf)(value, false)
            }
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
} //<Row>{renderGraph(graphData.concelhos.ribeira_brava)}</Row>
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__(6873);
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);
;// CONCATENATED MODULE: ./pages/madeira.js























 // import { RamGruposPrioritarios } from '../components/graphs/RamGruposPrioritarios';




const plausible = external_plausible_tracker_default()({
  domain: 'vacinacaocovid19.pt',
  trackLocalhost: true
});
function Home() {
  let {
    statistics,
    ready: dataReady
  } = (0,useData/* useData */.e)({
    regiao: 'madeira'
  });
  let {
    0: selectedItem,
    1: setSelectedItem
  } = (0,external_react_.useState)({});
  let {
    0: updating,
    1: isUpdating
  } = (0,external_react_.useState)(false);
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

  let startDate = new Date(last_update/* dateMadeira */.Vi);
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
    let timeout = window.setInterval(async () => {
      let data = await statistics.getSesaram();
      setSelectedItem(data);
    }, 60000);
    return function () {
      // Unconventional way of doing this
      window.removeEventListener('socket_update', onSocketUpdate);
      window.removeEventListener('scroll', trackScrollEvents);
      window.clearInterval(timeout);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    let object = {
      pessoasAVacinar: {
        current: numberFormatter.format(generic/* populacao_ram.valor */.mI.IK * 0.7 - selectedItem.dose_2)
      },
      percentagem: {
        current: selectedItem.dose_2 / generic/* populacao_ram.valor */.mI.IK * 100
      },
      percentagem_1d: {
        current: selectedItem.dose_1 / generic/* populacao_ram.valor */.mI.IK * 100
      }
    };
    setDerivedNumbers(object);
  }, [selectedItem]);
  (0,external_react_.useEffect)(async () => {
    if (dataReady === false) return;
    let rawData = await statistics.getArquipelagoData();
    plausible.trackPageview();
    let data = await statistics.getSesaram();
    setSelectedItem(data);
    /* let { sum } = statistics?.getDosesRecebidasAcum();
    sum = sum.reverse()[0];
    let item = rawData.filter((el) => {
    	return isSameDay(el.Data, new Date(json.dateSnsStart));
    });
     */

    setLoaded(true);
  }, [dataReady]); //TODO: Share this markup

  let renderCounterGroupV2 = () => {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    let f = new Intl.DateTimeFormat('pt-PT', options);
    let horas = new Intl.DateTimeFormat('pt-PT', {
      hour: 'numeric',
      minute: 'numeric'
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
        className: (Home_module_default()).datepickerRow,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          style: {
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: (Card_module_default()).card_subtitle_2,
            children: ["Atualizado a ", f.format(new Date(selectedItem.data)), " \xE0s ", horas.format(new Date(selectedItem.data)), " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {})]
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
              tempo: 'na semana anterior',
              colors: colors,
              title: "Doses totais",
              from: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.total) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.total,
              yesterday: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.total
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              tempo: 'na semana anterior',
              colors: colors,
              title: "Doses  - 1\xAA Inocula\xE7\xE3o",
              from: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1) * 0.98,
              yesterday: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_1,
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
              tempo: 'na semana anterior',
              colors: colors,
              title: "Doses - 2\xAA Inocula\xE7\xE3o",
              from: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2,
              yesterday: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dose_2
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
              tempo: 'na semana anterior',
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
              tempo: 'na semana anterior',
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
    value: 'madeira',
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
              children: "N\xFAmero de vacinas administradas por Semana"
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
                children: "Percentagem da popula\xE7\xE3o vacinada por faixa et\xE1ria"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(RamBarAdministradasPorFaixaEtaria, {
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
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "Vacina\xE7\xE3o por regi\xE3o"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados desde 31 de Dezembro de 2020 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateMadeira */.Vi).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                }), "."]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(RamMapa, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
          height: 500,
          once: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                className: (Home_module_default()).title,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
                  children: ["R", /*#__PURE__*/(0,jsx_runtime_.jsx)("sub", {
                    children: "t"
                  })]
                }), ' ', "na Regi\xE3o Aut\xF3noma da Madeira (desde 01/01/2021)"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(LineRt/* LineRt */.g, {
                regiao: 'madeira',
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
                children: ["Dados acumulados desde 31 de Dezembro de 2020 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateMadeira */.Vi), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                }), ", \xE0 exce\xE7\xE3o das doses administradas, cujo os ultimos dados dispon\xEDveis s\xE3o de", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateMadeiraCases */.cY), "dd 'de' LLLL 'de' yyyy", {
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
                children: ["Dados acumulados desde 31 de Dezembro de 2020 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateMadeira */.Vi).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                }), ", \xE0 exce\xE7\xE3o das doses administradas, cujo os ultimos dados dispon\xEDveis s\xE3o de", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateMadeiraCases */.cY).getTime(), "dd 'de' LLLL 'de' yyyy", {
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
                href: "https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html",
                children: "n\xFAmero de popula\xE7\xE3o da Regi\xE3o Aut\xF3noma da Madeira (dados da Dire\xE7\xE3o Regional de Estat\xEDstica da Madeira)"
              }), ". Os", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120",
                children: "dados de cada regi\xE3o da Madeira"
              }), ' ', "s\xE3o dados provis\xF3rios de at\xE9 31/12 e foram retirados do PORDATA De acordo com o\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
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
              children: ["Os dados apresentados s\xE3o retirados dos boletins publicados pela\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://covidmadeira.pt/boletim-vacinacao-covid-19/",
                children: "Dire\xE7\xE3o Regional de Sa\xFAde"
              }), ". A atualiza\xE7\xE3o destes dados \xE9 semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus s\xE3o retirados dos", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://covidmadeira.pt/ponto-de-situacao/",
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
var __webpack_exports__ = __webpack_require__.X(0, [859,872,358], function() { return __webpack_exec__(755); });
module.exports = __webpack_exports__;

})();