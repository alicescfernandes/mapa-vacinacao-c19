_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"20a2":function(e,a,t){e.exports=t("nOHt")},"4Zmp":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/madeira",function(){return t("M+4D")}])},"M+4D":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Y}));var s=t("nKUr"),o=t("o0o1"),r=t.n(o),c=t("HaE+"),i=t("KQm4"),n=t("T5bk"),d=t("q1tI"),l=t("7vrA"),u=t("3Z9Z"),j=t("JI6e"),p=t("9BaP"),b=t("MCc/"),m=t("HWxk"),x=t("sWYD"),h=t("KaNb"),O=t("L2Vc"),f=t("GITI"),g=t.n(f),v=t("9m9c"),y=t("UG6H"),D=t.n(y),_=t("vga7"),w=t("pMJh"),k=t("bMHE"),N=t("20a2"),G=t("lN74"),A=t("5PhN"),L=t("Q/64"),I=t("WMh8"),P=t("GyP+"),C=t("m5rz"),E=t("uAdN"),M=t("3h2D"),S=t.n(M);function R(e){var a=e.statistics,t=(e.colors,Object(d.useState)(!0)),o=t[0],r=t[1],c=Object(d.useState)({}),i=c[0],n=c[1];Object(d.useEffect)((function(){a.getArquipelagoData().then((function(e){n(e[8]),r(!1)}))}),[]);var l=new Intl.NumberFormat("en-US",{maximumFractionDigits:2}),p=function(e){return Object(s.jsx)("h2",{children:l.format(e).replace(/,/gm," ")})};return Object(s.jsx)(A.a,{allowOverflow:!0,children:Object(s.jsx)("div",{children:o?"":Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(u.a,{className:D.a.ram,children:Object.values(i.grupos).map((function(e){if(e.nome)return Object(s.jsx)(j.a,{xs:12,lg:6,children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)(j.a,{xs:12,lg:12,children:Object(s.jsx)("div",{className:D.a.ram_subchart,children:Object(s.jsx)("p",{children:e.nome})})}),Object(s.jsx)(j.a,{xs:6,lg:6,children:Object(s.jsxs)("div",{className:D.a.ram_subchart,children:[Object(s.jsx)("h3",{children:"1\xba Dose"}),Object(s.jsx)(S.a,{digits:0,delay:1,from:0,to:e.dose_1,speed:800,children:p})]})}),Object(s.jsx)(j.a,{xs:6,lg:6,children:Object(s.jsxs)("div",{className:D.a.ram_subchart,children:[Object(s.jsx)("h3",{children:"2\xba Dose"}),Object(s.jsx)(S.a,{digits:0,delay:1,from:0,to:e.dose_2,speed:800,children:p})]})})]})})}))})})})})}var z=t("rePB"),F=t("UDbo"),T=t("TSYQ"),B=t.n(T),H=t("xPX6");function W(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?W(Object(t),!0).forEach((function(a){Object(z.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function Z(e){var a=e.statistics,t=e.colors,o=Object(d.useState)(!1),r=o[0],c=o[1],i=t.main,n=t.shades,l=t.tints,u=t.complements,j=Object(d.useState)({}),p=j[0],b=j[1],m=Object(d.useState)(1),x=m[0],h=m[1],O=Object(d.useRef)(null);function f(e){return{borderColor:e,pointBorderColor:e,pointBackgroundColor:e,pointHoverBackgroundColor:e,pointHoverBorderColor:e}}Object(d.useEffect)((function(){var e;null!==O&&void 0!==O&&null!==(e=O.current)&&void 0!==e&&e.chartInstance&&O.current.chartInstance.data.datasets.forEach((function(e){e.customDose==x?e.hidden=!1:e.hidden=!0,O.current.chartInstance.update()}))}),[x]);return Object(d.useEffect)((function(){a.getAdministredDosesByAgeByWeekRam().then((function(e){b(e),c(!0),h(1)}))}),[]),Object(s.jsx)(A.a,{textLeft:!0,allowOverflow:!0,children:Object(s.jsx)("div",{children:!0===r?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"toggle_buttons",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("button",{className:B()("toggle_button",{active:1===x}),onClick:function(){h(1)},children:"1\xaa Dose"}),Object(s.jsx)("button",{className:B()("toggle_button",{active:2===x}),onClick:function(){h(2)},children:"2\xaa Dose"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(F.Line,{height:80,ref:O,options:{plugins:{datalabels:{display:!1,color:"blue"}},onResize:function(e,a,t){window.innerWidth<=H.m?e.canvas.parentNode.style.width="1000px":e.canvas.parentNode.style.width="auto"},legend:{position:"bottom",align:"start",onHover:function(e,a){document.body.classList.add("mouse-pointer")},onLeave:function(e,a){document.body.classList.remove("mouse-pointer")},labels:{filter:function(e,a){return 0==a.datasets[e.datasetIndex].hidden}}},animation:{duration:1e3},tooltips:{mode:"index",intersect:!1,callbacks:V(V(V({},H.t),f(n[0])),{},{label:function(e,a){var t=a.datasets[e.datasetIndex].label;return t.replace("- 1\xaa Dose","").replace("- 2\xaa Dose","")+": "+parseFloat(e.value).toFixed(2)+"%"},title:function(e,a){return e[0].label}})},scales:{yAxes:[{id:"axis",stacked:!1,ticks:{beginAtZero:!1,min:0,max:100,stepSize:20..toFixed(0),callback:function(e){return Object(P.c)(e,!1)+"%"}}}],xAxes:[{id:"xaxis",stacked:!1,ticks:{beginAtZero:!1}}]}},data:function(e){var a=p.labels,t=p.groups;return window.innerWidth<=H.m?e.parentNode.style.width="1000px":e.parentNode.style.width="auto",window.addEventListener("resize",(function(){window.innerWidth<=H.m?e.parentNode.style.width="1000px":e.parentNode.style.width="100%"})),{labels:Object.keys(p.labels).map((function(e){var t=new Date(a[e]);return"".concat(Object(P.c)(t.getDate()),"/").concat(Object(P.c)(t.getMonth()+1))})),datasets:[V(V(V({},H.t),f(n[0])),{},{label:"Grupo 18/24 - 2\xaa Dose",labelGroup:"Grupo 18/24",fill:!1,backgroundColor:n[0],data:t.map((function(e){return e.e1824.dose_2||0})),order:1,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),V(V(V({},H.t),f(n[0])),{},{label:"Grupo 18/24 - 1\xaa Dose",labelGroup:"Grupo 18/24",fill:!1,backgroundColor:n[0],data:t.map((function(e){return e.e1824.dose_1||0})),order:2,hidden:!1,display:!0,customDose:1,yAxisID:"axis"}),V(V(V({},H.t),f(l[1])),{},{label:"Grupo 25/49 - 2\xaa Dose",labelGroup:"Grupo 25/49",fill:!1,backgroundColor:l[1],data:t.map((function(e){return e.e2549.dose_2||0})),order:3,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),V(V(V({},H.t),f(l[1])),{},{label:"Grupo 25/49 - 1\xaa Dose",labelGroup:"Grupo 25/49",backgroundColor:l[1],fill:!1,data:t.map((function(e){return e.e2549.dose_1||0})),order:4,hidden:!1,display:!0,customDose:1,yAxisID:"axis"}),V(V(V({},H.t),f(i)),{},{label:"Grupo 50/59 - 2\xaa Dose",labelGroup:"Grupo 50/59",fill:!1,backgroundColor:i,data:t.map((function(e){return e.e5059.dose_2||0})),stack:"stack1",order:5,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),V(V(V({},H.t),f(i)),{},{label:"Grupo 50/59 - 1\xaa Dose",labelGroup:"Grupo 50/59",backgroundColor:i,fill:!1,data:t.map((function(e){return e.e5059.dose_1||0})),stack:"stack1",order:6,hidden:!1,display:!0,customDose:1,yAxisID:"axis"}),V(V(V({},H.t),f(n[2])),{},{label:"Grupo 60/69 - 2\xaa Dose",labelGroup:"Grupo 60/69",fill:!1,backgroundColor:n[2],data:t.map((function(e){return e.e6064.dose_2+e.e6569.dose_2||0})),yAxisID:"axis",xAxisID:"xaxis",order:7,hidden:!0,display:!1,customDose:2}),V(V(V({},H.t),f(n[2])),{},{label:"Grupo 60/69 - 1\xaa Dose",labelGroup:"Grupo 60/69",backgroundColor:n[2],data:t.map((function(e){return e.e6064.dose_1+e.e6569.dose_1||0})),xAxisID:"xaxis",order:8,hidden:!1,fill:!1,display:!0,customDose:1,yAxisID:"axis"}),V(V(V({},H.t),f(u[2])),{},{label:"Grupo 70/79 - 2\xaa Dose",labelGroup:"Grupo 70/79",fill:!1,backgroundColor:u[2],data:t.map((function(e){return e.e7079.dose_2||0})),order:9,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),V(V(V({},H.t),f(u[2])),{},{label:"Grupo 70/79 - 1\xaa Dose",labelGroup:"Grupo 70/79",backgroundColor:u[2],data:t.map((function(e){return e.e7079.dose_1||0})),order:10,hidden:!1,fill:!1,display:!0,customDose:1,yAxisID:"axis"}),V(V(V({},H.t),f(u[1])),{},{label:"Grupo 80+ - 2\xaa Dose",labelGroup:"Grupo 80+",xAxisID:"xaxis",backgroundColor:u[1],data:t.map((function(e){return e.e80.dose_2||0})),order:11,hidden:!0,stack:"stack2",fill:!1,display:!1,customDose:2,yAxisID:"axis"}),V(V(V({},H.t),f(u[1])),{},{label:"Grupo 80+ - 1\xaa Dose",labelGroup:"Grupo 80+",backgroundColor:u[1],data:t.map((function(e){return e.e80.dose_1||0})),stack:"stack2",xAxisID:"xaxis",yAxisID:"axis",order:12,hidden:!1,fill:!1,display:!0,customDose:1})]}}})})]}):""})})}var q=t("HMs9"),J=t.n(q),U=Object(k.a)({domain:"vacinacaocovid19.pt",trackLocalhost:!0});function Y(){var e=Object(O.a)({regiao:"madeira"}),a=e.statistics,t=e.ready,o=Object(d.useState)({}),f=o[0],y=o[1],k=Object(d.useState)({}),M=k[0],S=k[1],z=Object(d.useState)(!1),F=z[0],T=z[1],B={mid_page:!1,end_page:!1},H=Object(N.useRouter)(),W=new Intl.NumberFormat("pt-PT"),V=Object(d.useState)({pessoasAVacinar:{current:0},percentagem:{current:0}}),q=V[0],Y=V[1];function K(e){return window.scrollY>3576&&!1===B.end_page?(B.end_page=!0,void U.trackEvent("end_page",{page:"madeira"})):window.scrollY>1657&&!1===B.mid_page?(B.mid_page=!0,void U.trackEvent("mid_page",{page:"madeira"})):void 0}var Q=new Date(_.dateMadeira),X=Object(x.default)(Q,"eeee, dd 'de' LLLL 'de' yyyy",{locale:w.a}).replace("-feira","").split(""),$=Object(n.a)(X),ee=$[0],ae=$.slice(1),te=[ee.toUpperCase()].concat(Object(i.a)(ae)).join("");function se(){H.push("/")}var oe=Object(v.a)(),re=oe.colors,ce=oe.colors_v2;return Object(d.useEffect)((function(){return window.addEventListener("socket_update",se),window.addEventListener("scroll",K),function(){window.removeEventListener("socket_update",se),window.removeEventListener("scroll",K)}}),[]),Object(d.useEffect)((function(){var e={pessoasAVacinar:{current:W.format(.7*G.populacao_ram.valor-f.dose_2)},percentagem:{current:f.dose_2/G.populacao_ram.valor*100}};Y(e)}),[f]),Object(d.useEffect)(Object(c.a)(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.getArquipelagoData();case 4:s=e.sent,U.trackPageview(),y(s[s.length-1]),S(s[s.length-2]),T(!0);case 9:case"end":return e.stop()}}),e)}))),[t]),Object(s.jsx)(E.a.Provider,{value:"madeira",children:Object(s.jsx)(l.a,{className:"container-fluid app",children:F?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u.a,{children:Object(s.jsx)(j.a,{children:Object(s.jsxs)("h2",{className:g.a.datepicker_static,children:[" ",te," "]})})}),Object(s.jsxs)(u.a,{className:"counterRow",children:[Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsx)(A.a,{children:Object(s.jsx)(b.a,{colors:re,tempo:"na semana anterior",title:"N\xfamero total de vacinas administradas",yesterday:null===M||void 0===M?void 0:M.total,from:null===M||void 0===M?void 0:M.total,to:null===f||void 0===f?void 0:f.total})})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(b.a,{colors:re,tempo:"na semana anterior",title:"N\xfamero de doses administradas - 1\xaa Dose",yesterday:null===M||void 0===M?void 0:M.dose_1,from:null===M||void 0===M?void 0:M.dose_1,to:null===f||void 0===f?void 0:f.dose_1}),Object(s.jsxs)("p",{style:{marginTop:"10px"},className:D.a.card_subtitle,children:[Object(P.e)(null===f||void 0===f?void 0:f.dose_1,G.populacao_ram.valor).toFixed(2)," doses administradas por cada 100 pessoas",Object(s.jsx)("br",{}),Object(P.c)((null===f||void 0===f?void 0:f.dose_1)-(null===f||void 0===f?void 0:f.dose_2))," pessoas inoculadas com a 1\xaa dose"]})]})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(b.a,{colors:re,tempo:"na \tsemana anterior",title:"N\xfamero de doses administradas - 2\xaa Dose",yesterday:null===M||void 0===M?void 0:M.dose_2,from:null===M||void 0===M?void 0:M.dose_2,to:null===f||void 0===f?void 0:f.dose_2}),Object(s.jsxs)("p",{style:{marginTop:"10px"},className:D.a.card_subtitle,children:[Object(P.e)(null===f||void 0===f?void 0:f.dose_2,G.populacao_ram.valor).toFixed(2)," doses administradas por cada 100 pessoas",Object(s.jsx)("br",{}),Object(P.c)(null===f||void 0===f?void 0:f.dose_2)," pessoas inoculadas com a 2\xaa dose"]})]})})]}),Object(s.jsxs)(u.a,{className:"counterRow",children:[Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsx)(A.a,{children:Object(s.jsx)(b.a,{ps:"Percentagem calculada com base no n\xfamero total de segundas doses administradas",digits:2,suffix:"%",colors:re,title:"Percentagem de popula\xe7\xe3o inoculada com a 2\xaa dose ",from:0,to:q.percentagem.current})})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsx)(A.a,{children:Object(s.jsx)(b.a,{ps:"Ou seja, ser\xe1 preciso vacinar totalmente mais ".concat(q.pessoasAVacinar.current," pessoas para se atingir imuninade de grupo"),digits:2,suffix:"%",colors:re,title:"Percentagem para atingir imunidade de grupo",from:0,to:70-q.percentagem.current})})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)("h2",{style:{marginBottom:"10px"},className:D.a.card_title,children:"Plano de Vacina\xe7\xe3o"}),Object(s.jsx)("p",{title:"Consultar notas ou o plano de informa\xe7\xe3o para mais informa\xe7\xe3o",style:{margin:"5px 0px"},className:D.a.card_subtitle,children:"O plano de vacina\xe7\xe3o aplicado pela Madeira n\xe3o divulga n\xfameros a atingir."}),Object(s.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/vacinacao/",className:"".concat(D.a.card_subtitle," ").concat(g.a.link),children:"Consultar plano de vacina\xe7\xe3o"})]})})]}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"N\xfamero de vacinas administradas"}),Object(s.jsx)("hr",{}),Object(s.jsx)(m.a,{statistics:a,colors:re})]})}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"N\xfamero de vacinas administradas"}),Object(s.jsx)("hr",{}),Object(s.jsx)(p.a,{colors:re,statistics:a})]})}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"Vacina\xe7\xe3o por grupos priorit\xe1rios"}),Object(s.jsx)("h3",{className:g.a.subtitle,children:"Dados acumulados desde 31 de Dezembro de 2020 at\xe9 11 de Abril de 2021"}),Object(s.jsx)("hr",{}),Object(s.jsx)(R,{colors:ce,statistics:a})]})}),Object(s.jsx)(J.a,{height:500,once:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"Percentagem da popula\xe7\xe3o vacinada por faixa et\xe1ria"}),Object(s.jsx)("hr",{}),Object(s.jsx)(Z,{colors:ce,statistics:a})]})})}),Object(s.jsx)(J.a,{height:500,once:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsxs)("h2",{className:g.a.title,children:[Object(s.jsxs)("em",{children:["R",Object(s.jsx)("sub",{children:"t"})]})," ","na Regi\xe3o Aut\xf3noma da Madeira (desde 01/01/2021)"]}),Object(s.jsx)("hr",{}),Object(s.jsx)(C.a,{regiao:"madeira",colors:ce,statistics:a})]})})}),Object(s.jsx)(J.a,{height:500,once:!0,children:Object(s.jsxs)(u.a,{children:[Object(s.jsxs)(j.a,{lg:6,xs:12,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Propor\xe7\xe3o do n\xfamero total de vacinas administradas com o n\xfamero de infectados, recuperados e \xf3bitos"}),Object(s.jsxs)("h3",{className:g.a.subtitle,children:["Dados acumulados desde 31 de Dezembro de 2020 at\xe9"," ",Object(x.default)(new Date(_.dateMadeiraCases),"dd 'de' LLLL 'de' yyyy",{locale:w.a}),", \xe0 exce\xe7\xe3o das doses administradas, cujo os ultimos dados dispon\xedveis s\xe3o de"," ",Object(x.default)(new Date(_.dateMadeira),"dd 'de' LLLL 'de' yyyy",{locale:w.a})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(L.a,{colors:ce,statistics:a})]}),Object(s.jsxs)(j.a,{lg:6,xs:12,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Propor\xe7\xe3o do n\xfamero total de vacinas administradas com o n\xfamero de infectados, recuperados e \xf3bitos e popula\xe7\xe3o suscet\xedvel"}),Object(s.jsxs)("h3",{className:g.a.subtitle,children:["Dados acumulados desde 31 de Dezembro de 2020 at\xe9"," ",Object(x.default)(new Date(_.dateMadeiraCases).getTime(),"dd 'de' LLLL 'de' yyyy",{locale:w.a}),", \xe0 exce\xe7\xe3o das doses administradas, cujo os ultimos dados dispon\xedveis s\xe3o de"," ",Object(x.default)(new Date(_.dateMadeira).getTime(),"dd 'de' LLLL 'de' yyyy",{locale:w.a})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(I.a,{colors:ce,statistics:a})]})]})}),Object(s.jsxs)(u.a,{children:[Object(s.jsxs)(j.a,{xs:12,className:g.a.sources_block,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Notas"}),Object(s.jsxs)("p",{className:g.a.text,children:["A percentagem de popula\xe7\xe3o vacinada foi calculada com base no n\xfamero total de segundas doses administradas e com o \xa0",Object(s.jsx)("a",{rel:"noopener noreferrer",className:g.a.link,target:"_blank",href:"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html",children:"n\xfamero de popula\xe7\xe3o da Regi\xe3o Aut\xf3noma da Madeira (dados da Dire\xe7\xe3o Regional de Estat\xedstica da Madeira)"}),". Os"," ",Object(s.jsx)("a",{rel:"noopener noreferrer",className:g.a.link,target:"_blank",href:"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120",children:"dados de cada regi\xe3o da Madeira"})," ","s\xe3o dados provis\xf3rios de at\xe9 31/12 e foram retirados do PORDATA De acordo com o\xa0",Object(s.jsx)("a",{rel:"noopener noreferrer",className:g.a.link,target:"_blank",href:"https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",children:"Instituto Ricardo Jorge, ser\xe1 preciso imunizar entre 60% a 70% da popula\xe7\xe3o para se atingir a imunidade de grupo."})," ","Os valores apresentados aqui foram calculados com uma percentagem de 70%."]}),Object(s.jsxs)("p",{className:g.a.text,children:["A popula\xe7\xe3o suscet\xedvel a infe\xe7\xe3o foi calculada com base na popula\xe7\xe3o total menos a soma do n\xfamero de \xf3bitos, casos ativos, popula\xe7\xe3o infectada, vacinada e recuperada assumindo que casos de reinfe\xe7\xf5es s\xe3o raros."," ",Object(s.jsx)("a",{rel:"noopener noreferrer",className:g.a.link,href:"https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",target:":blank",children:"At\xe9 25/02 foram confirmados 57 casos de reinfec\xe7\xe3o com o novo coronav\xedrus."})]})]}),Object(s.jsxs)(j.a,{xs:12,className:g.a.sources_block,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Fontes"}),Object(s.jsxs)("p",{className:g.a.text,children:["Os dados apresentados s\xe3o retirados dos boletins publicados pela\xa0",Object(s.jsx)("a",{rel:"noopener noreferrer",className:g.a.link,target:"_blank",href:"https://covidmadeira.pt/boletim-vacinacao-covid-19/",children:"Dire\xe7\xe3o Regional de Sa\xfade"}),". A atualiza\xe7\xe3o destes dados \xe9 semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus s\xe3o retirados dos"," ",Object(s.jsx)("a",{rel:"noopener noreferrer",className:g.a.link,target:"_blank",href:"https://covidmadeira.pt/ponto-de-situacao/",children:"pontos de situa\xe7\xe3o"})," ","publicados pela mesma entidade"]})]})]})]}):Object(s.jsx)("div",{style:{display:"block",width:50,margin:"auto "},children:Object(s.jsx)(h.GooSpinner,{size:50,color:ce.main})})})})}}},[["4Zmp",0,2,6,7,1,3,4,5]]]);