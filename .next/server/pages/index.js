(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6081:
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
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__(6873);
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);
// EXTERNAL MODULE: ./data/generic.json
var generic = __webpack_require__(3574);
;// CONCATENATED MODULE: ./data/fases.json
var fases_namespaceObject = JSON.parse('{"p":5,"P":[{"nome":"1ª Fase","inicio":1609027200000,"objetivo_formatado":"950 mil pessoas","fim":null,"objetivo":950000,"bullet_points":["Profissionais de saúde envolvidos na prestação de cuidados a doentes","Profissionais das forças armadas, forças de segurança e serviços críticos","Profissionais e residentes em Estruturas Residenciais para Pessoas Idosas (ERPI) e instituições similares","Profissionais e utentes da Rede Nacional de Cuidados Continuados Integrados (RNCCI)."],"fontes":[{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"1ª Fase","inicio":1580515200000,"fim":null,"objetivo":950000,"objetivo_formatado":"950 mil pessoas","bullet_points":["Pessoas com 80 ou mais anos de idade","Pessoas com 50 ou mais anos de idade, que sofram de infsuficiência cardíaca, doença coronária, insuficiência renal (TFG < 60ml/min) ou doença respiratória crónicas "],"fontes":[{"nome":"SNS","permalink":"https://covid19.min-saude.pt/vacinacao/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"2ª Fase","inicio":1585699200000,"fim":null,"objetivo":2700000,"objetivo_formatado":"2.7 milhões de pessoas","bullet_points":["Pessoas com 65 anos ou mais que não tenham sido vacinadas previamente","Pessoas entre os 50 e os 64 anos de idade que sofram de diabetes, neoplasia maligna ativa, doença renal crónica, insuficiência hepática, hipertensão arterial ou obesidade"],"fontes":[{"nome":"SNS","permalink":"https://covid19.min-saude.pt/vacinacao/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"25 ou mais","inicio":null,"fim":null,"objetivo":null,"objetivo_formatado":null,"bullet_points":[],"fontes":[{"nome":"Portal de Autoagendamento","permalink":"https://covid19.min-saude.pt/pedido-de-agendamento/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"23 ou mais","inicio":null,"fim":null,"objetivo":null,"objetivo_formatado":null,"bullet_points":[],"fontes":[{"nome":"Portal de Autoagendamento","permalink":"https://covid19.min-saude.pt/pedido-de-agendamento/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"18 ou mais","inicio":null,"fim":null,"objetivo":null,"objetivo_formatado":null,"bullet_points":[],"fontes":[{"nome":"Portal de Autoagendamento","permalink":"https://covid19.min-saude.pt/pedido-de-agendamento/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"16 e 17","inicio":null,"fim":null,"objetivo":null,"objetivo_formatado":null,"bullet_points":[],"fontes":[{"nome":"Portal de Autoagendamento","permalink":"https://covid19.min-saude.pt/pedido-de-agendamento/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]},{"nome":"3ª Fase","inicio":null,"fim":null,"objetivo":null,"objetivo_formatado":"950 mil pessoas","bullet_points":["TBA"],"fontes":[{"nome":"SNS","permalink":"https://covid19.min-saude.pt/vacinacao/"},{"nome":"SNS","permalink":"https://www.sns24.gov.pt/tema/doencas-infecciosas/covid-19/vacina-covid-19/#sec-0"}]}]}');
// EXTERNAL MODULE: ./components/Card.jsx
var Card = __webpack_require__(6806);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(8182);
// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__(3254);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2859);
// EXTERNAL MODULE: ./hooks/useCanvasResizer.js
var useCanvasResizer = __webpack_require__(3972);
;// CONCATENATED MODULE: ./components/graphs/LineVacinadosInfecoesRecuperados.jsx


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
  } = (0,external_react_.useState)(true);
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
  } = colors;
  const numeroDias = 30;
  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)(); // map the last {numeroDias} days in data
  // Marry the data pls
  // https://www.youtube.com/watch?v=O4IgYxHEAuk

  if (labels.length > 0) {
    let datesVaccines = Array.from(rawDiarios).reverse().slice(0, numeroDias);
    let datesCases = Array.from(rawCasos).reverse().slice(0, numeroDias);
    datesVaccines.forEach(element => {
      let date = new Date(element.Data);
      let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;
      marriedData[key] = element;
    });
    datesCases.forEach((element, i) => {
      let date = new Date(element.data);
      let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;

      if (marriedData[key] !== undefined) {
        marriedData[key] = _objectSpread(_objectSpread({}, element), marriedData[key]);
      }
    });
  }

  marriedData = Object.values(marriedData).reverse();

  const data = canvas => {
    setCanvasNode(canvas.parentNode);
    return {
      labels: labels.slice(labels.length - numeroDias, labels.length),
      datasets: [{
        label: 'Inoculação - 2ª Dose',
        fill: false,
        type: 'bar',
        backgroundColor: main,
        data: valuesIn2.slice(valuesIn2.length - numeroDias, valuesIn2.length),
        stack: 'stack0',
        order: 1
      }, {
        label: 'Inoculação - 1ª Dose / Unidpse',
        backgroundColor: shades[0],
        borderColor: shades[0],
        data: valuesIn1.slice(valuesIn1.length - numeroDias, valuesIn1.length),
        stack: 'stack0',
        order: 2
      }, {
        label: 'Vacinas administradas',
        backgroundColor: shades[0],
        borderColor: shades[0],
        data: values.slice(values.length - numeroDias, valuesIn1.length),
        stack: 'stack0',
        order: 2
      }, {
        label: 'Número de infectados diário',
        type: 'bar',
        backgroundColor: complements[1],
        data: marriedData.map(el => el.confirmados_novos),
        stack: 'stack1',
        order: 4
      }, {
        label: 'Número de recuperados diário',
        type: 'bar',
        backgroundColor: complements[2],
        data: marriedData.map(el => el.var_recuperados),
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
            return label + ': ' + (0,utils/* formatNumber */.uf)(parseInt(tooltipItem.value), false);
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
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            callback: function (value, index, values) {
              return (0,utils/* formatNumber */.uf)(value, false);
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

  (0,external_react_.useEffect)(() => {
    if (values.length > 0) {
      setLoading(false);
    }
  }, [values, labels]);
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
    allowOverflow: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: !loading ? /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
        height: 80,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// EXTERNAL MODULE: ./components/graphs/PieVacinadosInfectadosRecuperadosObitos.jsx
var PieVacinadosInfectadosRecuperadosObitos = __webpack_require__(9299);
// EXTERNAL MODULE: ./components/graphs/PieSuscetiveisProporcao.jsx
var PieSuscetiveisProporcao = __webpack_require__(5268);
;// CONCATENATED MODULE: ./components/graphs/BarVacinasRecebidaDia.jsx

 //import 'chartjs-plugin-annotation';






function BarVacinasRecebidaDia({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  let {
    0: graphData,
    1: setGraphData
  } = (0,external_react_.useState)({});
  let [foreground, color_1, color_2,, color_3,,] = colors;
  /* let [annotationsToggle, setAnnotationsToggle] = useState({
  	dose: true,
  	dose2: true,
  	dose3: true,
  }); */

  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();

  const data = canvas => {
    let {
      labels,
      mod,
      com,
      az,
      janss
    } = graphData;
    setCanvasNode(canvas.parentNode);
    return {
      labels: labels.map(({
        from,
        to
      }) => {
        let fromDate = new Date(from);
        let toDate = new Date(to);
        return `De ${(0,utils/* formatNumber */.uf)(fromDate.getDate())}/${(0,utils/* formatNumber */.uf)(fromDate.getMonth() + 1)} a ${(0,utils/* formatNumber */.uf)(toDate.getDate())}/${(0,utils/* formatNumber */.uf)(toDate.getMonth() + 1)}`;
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
            return label + ': ' + (parseInt(tooltipItem.value) ? (0,utils/* formatNumber */.uf)(parseInt(tooltipItem.value), false) : 0);
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
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            callback: value => (0,utils/* formatNumber */.uf)(value, false)
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

  (0,external_react_.useEffect)(() => {
    statistics.getReceivedDosesByBrandByWeek().then(recievedData => {
      setGraphData(recievedData);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
    allowOverflow: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: !loading ? /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
        height: 80,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/graphs/BarAdministradasPorFaixaEtaria.jsx










function BarAdministradasPorFaixaEtaria({
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
  } = (0,external_react_.useState)(1);
  const canvasRef = (0,external_react_.useRef)(null);
  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();
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

  const data = canvas => {
    let {
      labels,
      groups
    } = graphData;
    setCanvasNode(canvas.parentNode);
    return {
      labels: Object.keys(graphData.labels).map(key => {
        let fromDate = new Date(labels[key].from);
        let toDate = new Date(labels[key].to);
        return `De ${(0,utils/* formatNumber */.uf)(fromDate.getDate())}/${(0,utils/* formatNumber */.uf)(fromDate.getMonth() + 1)} a ${(0,utils/* formatNumber */.uf)(toDate.getDate())}/${(0,utils/* formatNumber */.uf)(toDate.getMonth() + 1)}`;
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
        callbacks: {
          label: (tooltipItem, data) => {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + (0,utils/* formatNumber */.uf)(parseInt(tooltipItem.value, false));
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
            callback: value => (0,utils/* formatNumber */.uf)(value, false)
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
            callback: value => (0,utils/* formatNumber */.uf)(value, false)
          }
        }],
        xAxes: [{
          stacked: true
        }]
      }
    };
  };

  (0,external_react_.useEffect)(() => {
    statistics.getAdministredDosesByAgeByWeek().then(data => {
      setGraphData(data);
      setLoaded(true);
      setActiveDose(1);
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
                active: activeDose === 1
              }),
              onClick: () => {
                setActiveDose(1);
              },
              children: "1\xAA Dose"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
              className: external_classnames_default()('toggle_button', {
                active: activeDose === 2
              }),
              onClick: () => {
                setActiveDose(2);
              },
              children: "2\xAA Dose"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
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
;// CONCATENATED MODULE: ./components/graphs/BarTotaisPorFaixaEtaria.jsx








let styles = {
  'vaccine-label': {
    textAlign: 'right',
    fontSize: '12px',
    lineHeight: '25px',
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
        backgroundColor: shades[1],
        data_actual: [data.mod[1], data.com[1], data.az[1], data.janss[1]],
        data: [data.mod[1], data.com[1], data.az[1], data.janss[1]],
        stack: 'stack1'
      }, {
        label: '1ª Dose',
        type: 'bar',
        backgroundColor: main,
        data_actual: [data.mod[0], data.com[0], data.az[0], data.janss[0]],
        data: [data.mod[0] - data.mod[1], data.com[0] - data.com[1], data.az[0] - data.az[1], data.janss[0] - data.janss[1]],
        stack: 'stack1'
      }]
    };
  };

  const options = () => {
    return {
      indexAxis: 'y',
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: true,
          callbacks: {
            label: (tooltipItem, b) => {
              let data = tooltipItem.dataset.data_actual[tooltipItem.dataIndex];
              return `${tooltipItem.dataset.label}: ${(0,utils/* formatNumber */.uf)(data, false)}`;
            }
          }
        },
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
            return label + ': ' + (0,utils/* formatNumber */.uf)(parseInt(tooltipItem.value), false);
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
              return (0,utils/* formatNumber */.uf)(value, false);
            }
          },
          max: 2000000
        }
      }
    };
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        display: 'inline-block',
        lineHeight: '40px',
        position: 'relative',
        width: '19%',
        height: 150,
        overflow: 'hidden'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        style: styles['vaccine-label'],
        children: type
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        style: styles['vaccine-label'],
        children: "Pfizer/BioNTech"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        style: styles['vaccine-label'],
        children: "AstraZeneca"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        style: styles['vaccine-label'],
        children: "Janssen"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      style: {
        display: 'inline-block',
        lineHeight: '40200',
        position: 'relative',
        width: '80%',
        height: 150,
        overflow: 'hidden'
      },
      className: 'scrollable',
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        style: {
          height: '100%'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
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
  } = (0,external_react_.useState)(true);
  let {
    main,
    shades
  } = colors;
  let {
    0: graphData,
    1: setGraphData
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    statistics.getTotalAdministredDosesByAgeByWeek().then(data => {
      setGraphData(data);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
    allowOverflow: true,
    is_dynamic_scroll: false,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: !loading ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
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
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
                children: "Entre os 18 e 24 anos"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: graphData['Age18_24'].target,
              data: graphData['Age18_24'],
              type: 'Moderna'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
                children: "Entre os 25 e 49 anos"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomBarChart, {
              colors: colors,
              total: graphData['Age25_49'].target,
              data: graphData['Age25_49'],
              type: 'Moderna'
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
                children: "Entre os 50 e 59 anos"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: graphData['Age50_59'].target,
              data: graphData['Age50_59'],
              type: 'Moderna'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
                children: "Entre os 60 e 69 anos"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomBarChart, {
              colors: colors,
              total: graphData['Age60_69'].target,
              data: graphData['Age60_69'],
              type: 'Moderna'
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
                children: "Entre os 70 e 79 anos"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomBarChart, {
              colors: colors,
              showHeading: true,
              total: graphData['Age70_79'].target,
              data: graphData['Age70_79'],
              type: 'Moderna'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            xs: 12,
            lg: 6,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: 'subchart-data',
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
                children: "Com mais de 80 anos"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomBarChart, {
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
;// CONCATENATED MODULE: ./components/graphs/PieRecebidasAdquiridas.jsx





function PieRecebidasAdquiridas({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
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
              return `${(0,utils/* formatNumber */.uf)(value)} ( ${sum.toFixed(2)}% )`;
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

            return `${label}: ${(0,utils/* formatNumber */.uf)(data)}`;
          }
        }
      }
    };
  };

  (0,external_react_.useEffect)(() => {
    setLoading(false);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
    allowOverflow: true,
    is_dynamic_scroll: false,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: !loading ? /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Pie, {
        plugins: [],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}
;// CONCATENATED MODULE: ./components/graphs/PieAdministradasDoses.jsx





function PieAdministradasDoses({
  statistics,
  colors
}) {
  let {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  let {
    main,
    shades
  } = colors;

  const data = canvas => {
    return {
      labels: ['Vacinação Iniciada', 'Vacinação Completa', 'Doses por administrar'],
      datasets: [{
        backgroundColor: [main, shades[0], shades[1]],
        data: [statistics.iniciada, statistics.completa, statistics.recebidas - statistics.administradas]
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

            return `${label}: ${(0,utils/* formatNumber */.uf)(data)}`;
          }
        }
      }
    };
  };

  (0,external_react_.useEffect)(() => {
    setLoading(false);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
    allowOverflow: true,
    is_dynamic_scroll: false,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: !loading ? /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Pie, {
        plugins: [],
        height: 350,
        options: options(),
        data: data
      }) : ''
    })
  });
}
// EXTERNAL MODULE: ./components/CustomCheckbox.jsx
var CustomCheckbox = __webpack_require__(1144);
;// CONCATENATED MODULE: ./components/graphs/BarVacinasRecebidaDiaAcum.jsx



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
  } = (0,external_react_.useState)(true);
  let {
    0: graphData,
    1: setGraphData
  } = (0,external_react_.useState)({});
  let [foreground, color_1, color_2,, color_3,,] = colors;
  let {
    0: annotationsToggle,
    1: setAnnotationsToggle
  } = (0,external_react_.useState)({
    dose: true,
    dose2: true,
    dose3: true
  });
  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();

  const data = canvas => {
    let {
      labels,
      mod,
      com,
      az,
      janss
    } = graphData;
    setCanvasNode(canvas.parentNode);
    return {
      labels: labels.map(({
        from,
        to
      }) => {
        let fromDate = new Date(from);
        let toDate = new Date(to);
        return `De ${(0,utils/* formatNumber */.uf)(fromDate.getDate())}/${(0,utils/* formatNumber */.uf)(fromDate.getMonth() + 1)} a ${(0,utils/* formatNumber */.uf)(toDate.getDate())}/${(0,utils/* formatNumber */.uf)(toDate.getMonth() + 1)}`;
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
            value: annotationsToggle.dose ? generic/* doses.valor */._w.IK : null,
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
              content: `Doses adquiridas - ${generic/* doses.legenda */._w.Q2} (01/03/2021) `
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
            value: annotationsToggle.dose3 ? generic/* doses3.valor */.XE.IK : null,
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
              content: `Doses adquiridas - ${generic/* doses3.legenda */.XE.Q2} (21/01/2020) `
            }
          }, {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: annotationsToggle.dose2 ? generic/* doses2.valor */.lK.IK : null,
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
              content: `Doses adquiridas - ${generic/* doses2.legenda */.lK.Q2} (04/12/2020) `
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
            return label + ': ' + (parseInt(tooltipItem.value) ? (0,utils/* formatNumber */.uf)(parseInt(tooltipItem.value), false) : 0);
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
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            callback: value => (0,utils/* formatNumber */.uf)(value, false)
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

  (0,external_react_.useEffect)(async () => {
    setGraphData(await statistics.getDosesRecebidasAcum());
    setLoading(false);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
    allowOverflow: true,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: [(Card_module_default()).card_checkboxes, (Card_module_default()).card_dynamic_scroll].join(' '),
      style: {
        textAlign: 'left'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(CustomCheckbox/* CustomCheckbox */.X, {
        checked: annotationsToggle.dose,
        label: 'Doses adquiridas (01/03/2021)',
        onChange: checked => {
          setAnnotationsToggle(BarVacinasRecebidaDiaAcum_objectSpread(BarVacinasRecebidaDiaAcum_objectSpread({}, annotationsToggle), {}, {
            dose: checked
          }));
        }
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomCheckbox/* CustomCheckbox */.X, {
        checked: annotationsToggle.dose3,
        label: 'Doses adquiridas (21/01/2021)',
        onChange: checked => {
          setAnnotationsToggle(BarVacinasRecebidaDiaAcum_objectSpread(BarVacinasRecebidaDiaAcum_objectSpread({}, annotationsToggle), {}, {
            dose3: checked
          }));
        }
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomCheckbox/* CustomCheckbox */.X, {
        checked: annotationsToggle.dose2,
        label: 'Doses adquiridas (04/12/2020)',
        onChange: checked => {
          setAnnotationsToggle(BarVacinasRecebidaDiaAcum_objectSpread(BarVacinasRecebidaDiaAcum_objectSpread({}, annotationsToggle), {}, {
            dose2: checked
          }));
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: !loading ? /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
        height: 100,
        options: options(),
        data: data
      }) : ''
    })]
  });
}
;// CONCATENATED MODULE: ./components/graphs/LineVacinadosEu.jsx




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
  } = (0,external_react_.useState)({
    labels: '',
    pt: '',
    eu: ''
  });
  const {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(loaded);
  let {
    main,
    complements
  } = colors;
  let {
    0: activeDose,
    1: setActiveDose
  } = (0,external_react_.useState)(0);
  let doses_map = {
    normal: ['total_vaccinations', 'people_vaccinated', 'people_fully_vaccinated'],
    per_hundred: ['total_vaccinations_per_hundred', 'people_vaccinated_per_hundred', 'people_fully_vaccinated_per_hundred']
  };
  let {
    0: toggleStats,
    1: setToggleStats
  } = (0,external_react_.useState)({
    perHundred: true
  });
  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();

  const data = canvas => {
    setCanvasNode(canvas.parentNode);
    return {
      labels: owidData.labels,
      datasets: [LineVacinadosEu_objectSpread(LineVacinadosEu_objectSpread({}, constants/* lineChartCommon */.jF), {}, {
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
      }), LineVacinadosEu_objectSpread(LineVacinadosEu_objectSpread({}, constants/* lineChartCommon */.jF), {}, {
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
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            callback: value => (0,utils/* formatNumber */.uf)(value, false)
          }
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 30 : 60,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 30 : 60
          }
        }]
      }
    };
  };

  (0,external_react_.useEffect)(async () => {
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
  return loaded === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
    textLeft: true,
    allowOverflow: true,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: [(Card_module_default()).card_dynamic_scroll].join(' '),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: 'toggle_buttons',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 0
            }),
            onClick: () => {
              setActiveDose(0);
            },
            children: "Doses Totais"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 1
            }),
            onClick: () => {
              setActiveDose(1);
            },
            children: "1\xAA Dose"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 2
            }),
            onClick: () => {
              setActiveDose(2);
            },
            children: "2\xAA Dose"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomCheckbox/* CustomCheckbox */.X, {
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
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Line, {
        height: 80,
        options: options(),
        data: data
      })
    })]
  }) : /*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
}
;// CONCATENATED MODULE: ./components/graphs/BarVacinadosEu.jsx



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
  } = (0,external_react_.useState)({
    labels: '',
    pt: '',
    eu: ''
  });
  const {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(loaded);
  let {
    main,
    complements
  } = colors;
  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();
  let {
    0: activeDose,
    1: setActiveDose
  } = (0,external_react_.useState)(0);
  let doses_map = {
    normal: ['total_vaccinations', 'new_1_doses', 'new_2_doses'],
    per_hundred: ['total_vaccinations_per_hundred', 'new_1_doses_per_hundred', 'new_2_doses_per_hundred']
  };
  let {
    0: toggleStats,
    1: setToggleStats
  } = (0,external_react_.useState)({
    perHundred: true
  });
  const canvasRef = (0,external_react_.useRef)(null);

  const data = canvas => {
    setCanvasNode(canvas.parentNode);
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
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 8 : 10,
            callback: value => (0,utils/* formatNumber */.uf)(value, false)
          }
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 30 : 60,
            minTicksLimit: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 30 : 60
          }
        }]
      }
    };
  };

  (0,external_react_.useEffect)(async () => {
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
  return loaded === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
    textLeft: true,
    allowOverflow: true,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: [(Card_module_default()).card_dynamic_scroll].join(' '),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: 'toggle_buttons',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 0
            }),
            onClick: () => {
              setActiveDose(0);
            },
            children: "Doses Totais"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 1
            }),
            onClick: () => {
              setActiveDose(1);
            },
            children: "1\xAA Dose"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: activeDose === 2
            }),
            onClick: () => {
              setActiveDose(2);
            },
            children: "2\xAA Dose"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomCheckbox/* CustomCheckbox */.X, {
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
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Line, {
        height: 80,
        ref: canvasRef,
        options: options(),
        data: data
      })
    })]
  }) : '';
}
;// CONCATENATED MODULE: ./components/graphs/LineAdministradasPorFaixaEtaria.jsx




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
  } = (0,external_react_.useState)(false);
  let {
    main,
    shades,
    complements
  } = colors;
  let {
    0: graphData,
    1: setGraphData
  } = (0,external_react_.useState)({});
  let {
    0: activeDose,
    1: setActiveDose
  } = (0,external_react_.useState)(1);
  const canvasRef = (0,external_react_.useRef)(null);

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

  let {
    setCanvasNode
  } = (0,useCanvasResizer/* useCanvasResizer */.z)();

  const data = canvas => {
    setCanvasNode(canvas.parentNode);
    let labels = {};
    graphData.map(values => {
      labels[values.DATE] = '';
    });
    return {
      labels: Object.keys(labels).map(el => constants/* SNS_WEEKS */.FD[el]),
      datasets: [LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(main)), {}, {
        label: 'Até aos 17 anos',
        labelGroup: 'Grupo 18/24',
        fill: false,
        lineTension: 0.3,
        data: graphData.filter(el => el.AGEGROUP == '0-17 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].toString().replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(shades[0])), {}, {
        label: 'Entre 18 anos e 24 anos',
        labelGroup: 'Grupo 18/24',
        fill: false,
        lineTension: 0.3,
        data: graphData.filter(el => el.AGEGROUP == '18-24 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].toString().replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(complements[2])), {}, {
        label: 'Entre 25 anos e 49 anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        lineTension: 0.3,
        data: graphData.filter(el => el.AGEGROUP == '25-49 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].toString().replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(shades[2])), {}, {
        label: 'Entre 50 anos e 64 anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        lineTension: 0.3,
        data: graphData.filter(el => el.AGEGROUP == '50-64 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].toString().replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(complements[0])), {}, {
        label: 'Entre 60 e 79 anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        lineTension: 0.3,
        data: graphData.filter(el => el.AGEGROUP == '65-79 anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].toString().replace(',', '.')) * 100),
        order: 1,
        customDose: 2
      }), LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(complements[1])), {}, {
        label: '80 ou mais anos',
        labelGroup: 'Grupo 25/49',
        fill: false,
        lineTension: 0.3,
        data: graphData.filter(el => el.AGEGROUP == '80 ou mais anos').map(el => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].toString().replace(',', '.')) * 100),
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
        callbacks: LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread(LineAdministradasPorFaixaEtaria_objectSpread({}, constants/* lineChartCommon */.jF), generateColor(shades[0])), {}, {
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
            callback: value => (0,utils/* formatNumber */.uf)(value, false) + '%'
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

  (0,external_react_.useEffect)(() => {
    statistics.getTotalSNSIdade().then(data => {
      setGraphData(data);
      setLoaded(true);
      setActiveDose(1);
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
                active: activeDose === 1
              }),
              onClick: () => {
                setActiveDose(1);
              },
              children: "1\xAA Dose"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
              className: external_classnames_default()('toggle_button', {
                active: activeDose === 2
              }),
              onClick: () => {
                setActiveDose(2);
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
// EXTERNAL MODULE: ./components/graphs/LineRt.jsx
var LineRt = __webpack_require__(5476);
// EXTERNAL MODULE: ./components/context/regiao.js
var regiao = __webpack_require__(2642);
;// CONCATENATED MODULE: ./components/graphs/ArsMapa.jsx



function ArsMapa_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArsMapa_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArsMapa_ownKeys(Object(source), true).forEach(function (key) { ArsMapa_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArsMapa_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArsMapa_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ArsMapa({
  statistics,
  colors
}) {
  let {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false);
  let {
    main,
    shades
  } = colors;
  const {
    0: snsData,
    1: setSNSData
  } = (0,external_react_.useState)({});
  const {
    0: mapLayers,
    1: setMapLayers
  } = (0,external_react_.useState)(0);
  const {
    0: options,
    1: setOptions
  } = (0,external_react_.useState)({
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
      fillColor: (0,utils/* getColor */.Lq)(percentagem),
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
						</br>1ª Dose: ${(0,utils/* formatNumber */.uf)(parseInt(data.TOTAL_VAC_1))} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${(0,utils/* formatNumber */.uf)(parseInt(data.TOTAL_VAC_2))} (${percentagem_2.toFixed(2)}%)
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

      for (var i = 0; i < constants/* grades.length */.Tb.length; i++) {
        let grade = constants/* grades */.Tb[i];
        let grade_pretty = constants/* grades_pretty */.XS[grade];
        div.innerHTML += `<p>
						<i style="background:${(0,utils/* getColor */.Lq)(constants/* grades */.Tb[i] + 1)}"></i>${grade_pretty}</p>`;
      }

      return div;
    };

    legend.addTo(arsMapa);
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
          data_actual: el.CUMUL_VAC_1,
          data_cover: Math.floor(parseFloat(el.COVER_1_VAC.replace(',', '.')) * 100),
          data: [el.CUMUL_VAC_1 - el.CUMUL_VAC_2]
        }, {
          label: 'Total de vacinas administradas - 2ª Dose',
          borderColor: shades[1],
          backgroundColor: shades[1],
          data_actual: el.CUMUL_VAC_2,
          data_cover: Math.floor(parseFloat(el.COVER.replace(',', '.')) * 100),
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
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (tooltipItem, b) => {
                let data = tooltipItem.dataset.data_actual;
                return `${tooltipItem.dataset.label}: ${(0,utils/* formatNumber */.uf)(data, false)} (${tooltipItem.dataset.data_cover}%)`;
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
        scales: {
          y: {
            stacked: true,
            ticks: {
              beginAtZero: true
            },
            max: populacao_residente
          },
          x: {
            stacked: true,
            ticks: {
              beginAtZero: true,
              stepSize: Math.round(window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? populacao_residente / 3 : populacao_residente / 6),
              callback: value => (0,utils/* formatNumber */.uf)(value, false)
            },
            max: populacao_residente
          }
        }
      };
    };

    return /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
      xs: 12,
      lg: 6,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Card_module_default()).ram_subchart_bar,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
          className: (Card_module_default()).text_left,
          children: el.REGION
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_chartjs_2_.Bar, {
          height: window.innerWidth <= constants/* RESIZE_TRESHOLD */.WT ? 40 : 55,
          options: options(),
          data: data
        })]
      })
    });
  }

  (0,external_react_.useEffect)(async () => {
    if (loaded === false) {
      setSNSData(await statistics.getTotalSNS());
      setLoaded(true);
    }

    if (loaded === true) {
      renderMap();
    }
  }, [loaded]);
  (0,external_react_.useEffect)(() => {
    if (mapLayers) mapLayers.setStyle(layerStyle);
  }, [options.current_dose]);
  return loaded === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
    is_dynamic_scroll: false,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: 'toggle_buttons hide_mobile',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
            className: external_classnames_default()('toggle_button', {
              active: options.current_dose === 1
            }),
            onClick: () => {
              setOptions({
                current_dose: 1
              });
            },
            children: "1\xAA Dose"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
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
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
        xs: 0,
        lg: 4,
        className: 'hide_mobile',
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          id: "mapaars",
          style: {
            height: '500px'
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
        xs: 12,
        lg: 8,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: 'legends',
          style: {
            paddingLeft: '10px'
          },
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
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
          children: Object.values(graphData).map(renderGraph)
        })]
      })]
    })]
  }) : '';
} //<Row>{renderGraph(graphData.concelhos.ribeira_brava)}</Row>
;// CONCATENATED MODULE: ./pages/index.js




function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 //data





 // import { BarsVacinacaoArs } from '../components/graphs/BarsVacinacaoArs';




 // import { BarArs } from '../components/graphs/BarArs';










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
  } = (0,useData/* useData */.e)({
    regiao: 'portugal'
  });
  let rawData = statistics.getRaw();
  let {
    0: selectedItem,
    1: setSelectedItem
  } = (0,external_react_.useState)({});
  let {
    0: previousItem,
    1: setPreviousItem
  } = (0,external_react_.useState)({});
  let beacons = {
    mid_page: false,
    end_page: false
  };
  let {
    0: previousSelectedItem,
    1: setPreviousSelectedItem
  } = (0,external_react_.useState)({});
  let {
    0: currentDate,
    1: setCurrentDate
  } = (0,external_react_.useState)('');
  let {
    0: updating,
    1: setUpdating
  } = (0,external_react_.useState)(false);
  let {
    0: last,
    1: setLast
  } = (0,external_react_.useState)({});
  let {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false);
  let numberFormatter = new Intl.NumberFormat('pt-PT');
  let {
    0: derivedNumbers,
    1: setDerivedNumbers
  } = (0,external_react_.useState)({
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
  } = (0,external_react_.useState)({
    encomendadas: generic/* doses.valor */._w.IK,
    recebidas: 0,
    administradas: 0,
    primeiras: 0,
    segundas: 0,
    data: '',
    dataLong: ''
  });
  let {
    colors,
    colors_v2
  } = (0,useColors/* useColors */.c)();

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
    let prev_d = (0,external_date_fns_.subDays)(d, 1);

    if ((0,external_date_fns_.compareAsc)(d, new Date('2021-03-30')) >= 1) {
      setCurrentDate((0,external_date_fns_.format)(prev_d, 'dd/LL/yyyy', {
        locale: locale_.pt
      }) + ' 23:59');
    } else {
      setCurrentDate((0,external_date_fns_.format)(d, 'dd/LL/yyyy', {
        locale: locale_.pt
      }) + ' 00:00');
    }

    if ((0,external_date_fns_.isSameDay)(d, new Date(1616716800000))) {
      //26 is an exception...
      setCurrentDate((0,external_date_fns_.format)(d, 'dd/LL/yyyy', {
        locale: locale_.pt
      }) + ' 13:00');
    }
  }

  function onDateSelect(d) {
    let item = rawData.filter((el, elIdx) => {
      if ((0,external_date_fns_.isSameDay)(el.Data, d.getTime())) {
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

    let prev_d = (0,external_date_fns_.subDays)(d, 1);

    if ((0,external_date_fns_.compareAsc)(d, new Date('2021-03-30')) >= 1) {
      setCurrentDate((0,external_date_fns_.format)(prev_d, 'dd/LL/yyyy', {
        locale: locale_.pt
      }) + ' 23:59');
    } else {
      setCurrentDate((0,external_date_fns_.format)(d, 'dd/LL/yyyy', {
        locale: locale_.pt
      }) + ' 00:00');
    }

    if ((0,external_date_fns_.isSameDay)(d, new Date(1616716800000))) {
      //26 is an exception...
      setCurrentDate((0,external_date_fns_.format)(d, 'dd/LL/yyyy', {
        locale: locale_.pt
      }) + ' 13:00');
    }
  }

  (0,external_react_.useEffect)(() => {
    var _rawData;

    let rawData = statistics.getRaw();

    if (((_rawData = rawData[rawData.length - 1]) === null || _rawData === void 0 ? void 0 : _rawData.Data) != last.Data) {
      onDateSelect(new Date(rawData[rawData.length - 1].Data));
      setLast(rawData[rawData.length - 1]);
      setPreviousItem(rawData[rawData.length - 2]);
    }
  }, [versioning]);
  (0,external_react_.useEffect)(() => {
    let object = {
      pessoasAVacinar: {
        prev: derivedNumbers.pessoasAVacinar.current,
        current: numberFormatter.format(generic/* populacao.valor */.Q_.IK * 0.7 - selectedItem.Inoculacao2_Ac)
      },
      percentagem: {
        prev: derivedNumbers.percentagem.current,
        current: selectedItem.Inoculacao2_Ac / generic/* populacao.valor */.Q_.IK * 100
      },
      percentagem_1d: {
        prev: derivedNumbers.percentagem.current,
        current: selectedItem.Inoculacao1_Ac / generic/* populacao.valor */.Q_.IK * 100
      }
    };
    setDerivedNumbers(object);

    if (selectedItem.Data) {
      updateCurrentDate(new Date(selectedItem.Data));
    }
  }, [selectedItem]);
  (0,external_react_.useEffect)(async () => {
    if (dataReady === false) return;
    let rawData = statistics.getRaw();
    setLast(rawData[rawData.length - 1]);
    setSelectedItem(rawData[rawData.length - 1]);
    setPreviousItem(rawData[rawData.length - 2]);
    plausible.trackPageview();
    let {
      RECEIVED: sum,
      CUMUL_VAC_LEAST: least,
      CUMUL_VAC_COMPLETE: complete,
      CUMUL: total
    } = await (statistics === null || statistics === void 0 ? void 0 : statistics.getTotalSNSRecebidas());
    setDoses(pages_objectSpread(pages_objectSpread({}, doses), {}, {
      recebidas: sum,
      administradas: total,
      iniciada: least,
      completa: complete,
      data: (0,external_date_fns_.format)(new Date(last_update/* dateSns */.Xf).getTime(), 'dd/LL/yyyy', {
        locale: locale_.pt
      }),
      dataLong: (0,external_date_fns_.format)(new Date(last_update/* dateSns */.Xf).getTime(), "dd 'de' LLLL 'de' yyyy", {
        locale: locale_.pt
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

  let renderCounterGroupV2 = () => {
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
            children: ["Atualizado a ", f.format(new Date(last.Data)), " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "Dados at\xE9 ", currentDate, " para Portugal Continental", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "Percentagens calculadas com base na popula\xE7\xE3o de Portugal Continental"]
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
              colors: colors,
              title: "Doses totais",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Vacinados_Ac,
              from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Vacinados_Ac) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Vacinados_Ac
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              colors: colors,
              title: "1\xAA Inocula\xE7\xE3o e Unidose",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao1_Ac,
              from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao1_Ac) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao1_Ac
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Col, {
          lg: 4,
          xs: 6,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Card/* Card */.Z, {
            type: 'counter',
            isUpdating: updating,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Counter/* Counter */.A, {
              colors: colors,
              title: "2\xAA Inocula\xE7\xE3o",
              yesterday: previousItem === null || previousItem === void 0 ? void 0 : previousItem.Inoculacao2_Ac,
              from: (previousSelectedItem === null || previousSelectedItem === void 0 ? void 0 : previousSelectedItem.Inoculacao2_Ac) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac) * 0.98,
              to: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.Inoculacao2_Ac
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
              digits: 2,
              suffix: '%',
              colors: colors,
              title: "Popula\xE7\xE3o vacinada com pelo menos uma dose",
              from: derivedNumbers.percentagem_1d.prev,
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
              digits: 2,
              suffix: '%',
              colors: colors,
              title: "Popula\xE7\xE3o totalmente vacinada",
              from: derivedNumbers.percentagem.prev,
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
              children: "Autoagendamento (por idade)"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              title: "Consultar notas ou o plano de informa\xE7\xE3o para mais informa\xE7\xE3o",
              style: {
                color: colors[0]
              },
              className: (Card_module_default()).card_highlight_2,
              children: [fases_namespaceObject.P[fases_namespaceObject.p].nome, " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                className: 'hide_mobile',
                children: "anos"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              rel: "noopener noreferrer",
              target: "_blank",
              href: fases_namespaceObject.P[fases_namespaceObject.p].fontes[0].permalink,
              className: `${(Card_module_default()).card_subtitle} ${(Home_module_default()).link}`,
              children: "Portal de autoagendamento"
            })]
          })
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsx)(regiao/* RegiaoContext.Provider */.B.Provider, {
    value: 'portugal',
    children: loaded ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [renderCounterGroupV2(), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        className: "container-fluid app",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "N\xFAmero de vacinas administradas - Portugal Continental"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(NumeroTotalVacinados/* NumeroTotalVacinados */.R, {
              statistics: statistics,
              colors: colors
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "N\xFAmero de vacinas administradas por dia - Portugal Continental"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
              className: (Home_module_default()).subtitle,
              children: "A linha de stock de vacinas apresentada abaixo \xE9 uma estimativa com base nos dados do Centro Europeu de Controlo de Doen\xE7as. Para calcular este valor, assumimos que todas as entregas s\xE3o recebidas na Segunda-Feira, mesmo que logisticamente n\xE3o se verifique."
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
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(LineAdministradasPorFaixaEtaria, {
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
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "Evolu\xE7\xE3o do programa de vacina\xE7\xE3o por ARS"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados deste 21 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateSns */.Xf).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ArsMapa, {
                statistics: statistics,
                colors: colors_v2
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
                }), ' ', "por regi\xE3o (desde 01/01/2021)"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
                className: (Home_module_default()).subtitle,
                children: "Nem todas as regi\xF5es apresentam dados no mesmo per\xEDodo temporal"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(LineRt/* LineRt */.g, {
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
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "N\xFAmero de doses recebidas por semana"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(BarVacinasRecebidaDia, {
                colors: colors,
                statistics: statistics
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
          height: 500,
          once: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "N\xFAmero de doses recebidas (acumulado)"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(BarVacinasRecebidaDiaAcum, {
                colors: colors,
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
                children: "Propor\xE7\xE3o de doses recebidas relativamente \xE0s doses adquiridas"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados desde 21 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateSns */.Xf).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(PieRecebidasAdquiridas, {
                colors: colors_v2,
                statistics: doses
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "Propor\xE7\xE3o de doses administradas relativamente \xE0s doses recebidas"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados desde 21 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateSns */.Xf).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(PieAdministradasDoses, {
                colors: colors_v2,
                statistics: doses
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
              className: (Home_module_default()).title,
              children: "N\xFAmero de doses administradas por semana e faixa et\xE1ria"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(BarAdministradasPorFaixaEtaria, {
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
                children: "Doses totais administradas por faixa et\xE1ria"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: (Home_module_default()).subtitle,
                children: ["Dados acumulados deste 21 de Dezembro de 2021 at\xE9", ' ', (0,external_date_fns_.format)(new Date(last_update/* dateEcdc */.bb).getTime(), "dd 'de' LLLL 'de' yyyy", {
                  locale: locale_.pt
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(BarTotaisPorFaixaEtaria, {
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
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "N\xFAmero de vacinas administradas por dia com o n\xFAmero de infectados e de recuperados nos \xFAltimos 30 dias"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(LineVacinadosInfecoesRecuperados, {
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
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                className: (Home_module_default()).title,
                children: ["Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "recuperados e \xF3bito"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(PieVacinadosInfectadosRecuperadosObitos/* PieVacinadosInfectadosRecuperadosObitos */.G, {
                colors: colors_v2,
                statistics: statistics
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              lg: 6,
              xs: 12,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                className: (Home_module_default()).title,
                children: ["Propor\xE7\xE3o do n\xFAmero total de vacinas administradas com o n\xFAmero de infectados, recuperados ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), " \xF3bitos e popula\xE7\xE3o suscet\xEDvel"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(PieSuscetiveisProporcao/* PieSuscetiveisProporcao */.o, {
                colors: colors_v2,
                statistics: statistics
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_lazyload_default()), {
          height: 500,
          once: true,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "N\xFAmero de vacinas administradas em Portugal mais Ilhas e na Uni\xE3o Europeia"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(LineVacinadosEu, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h2", {
                className: (Home_module_default()).title,
                children: "N\xFAmero de vacinas administradas por dia em Portugal mais Ilhas e na Uni\xE3o Europeia"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(BarVacinadosEu, {
                colors: colors_v2,
                statistics: statistics
              })]
            })
          })]
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
                href: "https://www.pordata.pt/Municipios/Popula%C3%A7%C3%A3o+residente+total+e+por+grandes+grupos+et%C3%A1rios-390",
                children: "n\xFAmero de popula\xE7\xE3o de Portugal Continetal (dados do PORDATA)"
              }), ". De acordo com o\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",
                children: "Instituto Ricardo Jorge, ser\xE1 preciso imunizar entre 60% a 70% da popula\xE7\xE3o para se atingir a imunidade de grupo."
              }), ' ', "Os valores apresentados aqui foram calculados com uma percentagem de 70%."]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["A popula\xE7\xE3o suscet\xEDvel a infe\xE7\xE3o foi calculada com base na popula\xE7\xE3o total menos a soma do n\xFAmero de \xF3bitos, casos ativos, popula\xE7\xE3o infectada, vacinada e recuperada assumindo que casos de reinfe\xE7\xF5es s\xE3o raros.", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                className: (Home_module_default()).link,
                href: "https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",
                target: ":blank",
                children: "At\xE9 25/02 foram confirmados 57 casos de reinfec\xE7\xE3o com o novo coronav\xEDrus."
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["No in\xEDcio da campanha de vacina\xE7\xE3o foi anunciadas que ia haver 3 fases de vacina\xE7\xE3o, e que a primeria iria ser dividida em duas partes. A partir de Dezembro iriam ser administradas vacinas a Profissionais de sa\xFAde envolvidos na presta\xE7\xE3o de cuidados a doentes, profissionais das for\xE7as armadas, for\xE7as de seguran\xE7a e servi\xE7os cr\xEDticos, profissionais e residentes em ERPIs e institui\xE7\xF5es similares e profissionais e utentes da RNCCI. ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "A partir de Fevereiro iriam ser administradas vacinas a pessoas com mais de 50 ano, e com Insufici\xEAncia card\xEDaca, Doen\xE7a coron\xE1ria, Insufici\xEAncia renal (TFG menor que 60ml/min) ou com doen\xE7a respirat\xF3ria cr\xF3nica. ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "Para a segunda fase est\xE1 previsto vacinar pessoas com 65 ou mais anos com ou sem patologias que n\xE3o tenham sido vacinadas previamente e pessoas entre os 50 e os 64 anos com pelo menos uma das seguintes patologias descritas no plano de vacina\xE7\xE3o. Mais informa\xE7\xE3o sobre o plano de vacina\xE7\xE3o pode ser consultada", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://www.sns.gov.pt/wp-content/uploads/2020/12/Plano_Vacinacao_COVID-19.pdf",
                target: ":blank",
                children: "aqui"
              }), ' ', "e", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://covid19.min-saude.pt/vacinacao/",
                target: ":blank",
                children: "aqui"
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
              children: ["Os dados apresentados s\xE3o retirados do portal\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/",
                children: "Monitoriza\xE7\xE3o do SNS da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), "\xA0e do s\xEDtio\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",
                children: "Ponto de Situa\xE7\xE3o da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), ". A atualiza\xE7\xE3o destes dados \xE9 di\xE1ria.", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "Os dados relativos \xE0 distribui\xE7\xE3o das vacinas e administra\xE7\xE3o das mesmas por grupo et\xE1ria s\xE3o disponibilizados pelo", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://www.ecdc.europa.eu/en",
                target: "_blank",
                children: "ECDC (European Centre for Disease Prevention and Control)"
              }), "\xA0 e s\xE3o atualizados atrav\xE9s dos\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://covid19-vaccine-report.ecdc.europa.eu/#6_Reported_data",
                children: "relat\xF3rios publicados semanalmente."
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["Os dados relativos \xE0 vacina\xE7\xE3o por ARS \xE9 tirada do portal sobre", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://covid19.min-saude.pt/",
                target: "_blank",
                children: "a COVID-19 da Dire\xE7\xE3o-Geral da Sa\xFAde"
              }), "\xA0 e s\xE3o atualizados atrav\xE9s dos\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://covid19.min-saude.pt/relatorio-de-vacinacao/",
                children: "relat\xF3rios publicados semanalmente."
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["O n\xFAmero total de vacinas adquiridas anunciado pela Dire\xE7\xE3o-Geral de Sa\xFAde foi divulgado atrav\xE9s de um comunicado feito no s\xEDtio do Governo de Portugal, que", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C",
                target: "_blank",
                children: "pode ser consultado aqui."
              }), ' ', "No dia 01 de Mar\xE7o de 2021, foi anunciado que o n\xFAmero total de vacinas adquiridas aumentou para 38 milh\xF5es de doses, num comunicado dirigido \xE0 imprensa que", ' ', /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                href: "https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19",
                target: "_blank",
                children: "pode ser consultado aqui."
              }), "\xA0Como base para as contas, assumimos que Portugal adquiriu 38 milh\xF5es de doses."]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (Home_module_default()).text,
              children: ["Os dados relativos \xE0 vacina\xE7\xE3o na Uni\xE3o Europeia s\xE3o atualizados pelo\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://ourworldindata.org/",
                children: "Our World In Data"
              }), "\xA0 e est\xE3o dispon\xEDveis\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv",
                children: "no reposit\xF3rio de Github"
              }), ". Os dados relativos ao", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
                children: ["R", /*#__PURE__*/(0,jsx_runtime_.jsx)("sub", {
                  children: "t"
                }), ' ']
              }), "s\xE3o atualizados pelo\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "https://ourworldindata.org/",
                children: "Instituto Nacional Doutor Ricardo Jorge"
              }), "\xA0 e est\xE3o dispon\xEDveis\xA0", /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                rel: "noopener noreferrer",
                className: (Home_module_default()).link,
                target: "_blank",
                href: "http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/",
                children: "nesta p\xE1gina."
              })]
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
Home.whyDidYouRender = true;

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
var __webpack_exports__ = __webpack_require__.X(0, [859,872,358], function() { return __webpack_exec__(6081); });
module.exports = __webpack_exports__;

})();