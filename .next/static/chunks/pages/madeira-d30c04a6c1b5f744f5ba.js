_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"20a2":function(e,a,t){e.exports=t("nOHt")},"4Zmp":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/madeira",function(){return t("M+4D")}])},"7vrA":function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),c=t("TSYQ"),r=t.n(c),n=t("q1tI"),i=t.n(n),d=t("vUet"),l=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,n=e.as,l=void 0===n?"div":n,u=e.className,j=Object(o.a)(e,["bsPrefix","fluid","as","className"]),b=Object(d.a)(t,"container"),p="string"===typeof c?"-"+c:"-fluid";return i.a.createElement(l,Object(s.a)({ref:a},j,{className:r()(u,c?""+b+p:b)}))}));l.displayName="Container",l.defaultProps={fluid:!1},a.a=l},"M+4D":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return X}));var s=t("nKUr"),o=t("o0o1"),c=t.n(o),r=t("HaE+"),n=t("KQm4"),i=t("T5bk"),d=t("q1tI"),l=t("7vrA"),u=t("3Z9Z"),j=t("JI6e"),b=t("9BaP"),p=t("MCc/"),m=t("HWxk"),x=t("sWYD"),h=t("KaNb"),O=t("L2Vc"),f=t("GITI"),g=t.n(f),v=t("9m9c"),y=(t("10Vi"),t("UG6H")),D=t.n(y),_=t("vga7"),k=t("PSO/"),w=t("bMHE"),N=t("20a2"),A=t("lN74"),G=t("5PhN"),I=t("Q/64"),C=t("WMh8"),P=t("GyP+"),E=t("m5rz"),M=t("uAdN"),S=t("UDbo"),T=t("TSYQ"),F=t.n(T),R=t("3h2D"),z=t.n(R);function B(e){var a=e.statistics,t=e.colors,o=Object(d.useState)(!0),c=o[0],r=o[1],n=(t.main,t.shades,Object(d.useState)({})),i=n[0],l=n[1];Object(d.useEffect)((function(){a.getMadeiraData().then((function(e){l(e[e.length-1]),r(!1)}))}),[]);var b=new Intl.NumberFormat("en-US",{maximumFractionDigits:2}),p=function(e){return Object(s.jsx)("h2",{children:b.format(e).replace(/,/gm," ")})};return Object(s.jsx)(G.a,{allowOverflow:!0,children:Object(s.jsx)("div",{children:c?"":Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(u.a,{className:D.a.ram,children:Object.values(i.grupos).map((function(e){if(e.nome)return Object(s.jsx)(j.a,{xs:12,lg:6,children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)(j.a,{xs:12,lg:12,children:Object(s.jsx)("div",{className:D.a.ram_subchart,children:Object(s.jsx)("p",{children:e.nome})})}),Object(s.jsx)(j.a,{xs:6,lg:6,children:Object(s.jsxs)("div",{className:D.a.ram_subchart,children:[Object(s.jsx)("h3",{children:"1\xba Dose"}),Object(s.jsx)(z.a,{digits:0,delay:1,from:0,to:e.dose_1,speed:800,children:p})]})}),Object(s.jsx)(j.a,{xs:6,lg:6,children:Object(s.jsxs)("div",{className:D.a.ram_subchart,children:[Object(s.jsx)("h3",{children:"2\xba Dose"}),Object(s.jsx)(z.a,{digits:0,delay:1,from:0,to:e.dose_2,speed:800,children:p})]})})]})})}))})})})})}var U=t("rePB"),H=t("xPX6");function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function W(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach((function(a){Object(U.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function Z(e){var a=e.statistics,t=e.colors,o=Object(d.useState)(!1),c=o[0],r=o[1],n={},i=t.main,l=t.shades,u=t.tints,j=t.complements,b=Object(d.useState)({}),p=b[0],m=b[1],x=Object(d.useState)(1),h=x[0],O=x[1],f=Object(d.useRef)(null);function g(e){return{borderColor:e,pointBorderColor:e,pointBackgroundColor:e,pointHoverBackgroundColor:e,pointHoverBorderColor:e}}Object(d.useEffect)((function(){var e;null!==f&&void 0!==f&&null!==(e=f.current)&&void 0!==e&&e.chartInstance&&f.current.chartInstance.data.datasets.forEach((function(e){e.customDose==h?e.hidden=!1:e.hidden=!0,f.current.chartInstance.update()}))}),[h]),n=Object.values(n).reverse();return Object(d.useEffect)((function(){a.getAdministredDosesByAgeByWeekRam().then((function(e){m(e),r(!0),O(1)}))}),[]),Object(s.jsx)(G.a,{textLeft:!0,allowOverflow:!0,children:Object(s.jsx)("div",{children:!0===c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"toggle_buttons",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("button",{className:F()("toggle_button",{active:1===h}),onClick:function(){O(1)},children:"1\xaa Dose"}),Object(s.jsx)("button",{className:F()("toggle_button",{active:2===h}),onClick:function(){O(2)},children:"2\xaa Dose"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(S.Line,{height:80,ref:f,options:{plugins:{datalabels:{display:!1,color:"blue"}},onResize:function(e,a,t){window.innerWidth<=H.l?e.canvas.parentNode.style.width="1000px":e.canvas.parentNode.style.width="auto"},legend:{position:"bottom",align:"start",onHover:function(e,a){document.body.classList.add("mouse-pointer")},onLeave:function(e,a){document.body.classList.remove("mouse-pointer")},labels:{filter:function(e,a){return 0==a.datasets[e.datasetIndex].hidden}}},animation:{duration:1e3},tooltips:{mode:"index",intersect:!1,callbacks:W(W(W({},H.s),g(l[0])),{},{label:function(e,a){var t=a.datasets[e.datasetIndex].label;return t.replace("- 1\xaa Dose","").replace("- 2\xaa Dose","")+": "+parseFloat(e.value,!1).toFixed(2)+"%"},title:function(e,a){return a.datasets[e[0].datasetIndex],e[0].label}})},scales:{yAxes:[{id:"axis",stacked:!1,ticks:{beginAtZero:!1,min:0,max:100,stepSize:20..toFixed(0),callback:function(e){return Object(P.b)(e,!1)+"%"}}}],xAxes:[{id:"xaxis",stacked:!1,ticks:{beginAtZero:!1}}]}},data:function(e){var a,t=p.labels,s=p.groups;p.maxValue;return window.innerWidth<=H.l?e.parentNode.style.width="1000px":e.parentNode.style.width="auto",window.addEventListener("resize",(function(){window.innerWidth<=H.l?e.parentNode.style.width="1000px":e.parentNode.style.width="100%"})),{labels:Object.keys(p.labels).map((function(e){var a=new Date(t[e]);return"".concat(Object(P.b)(a.getDate()),"/").concat(Object(P.b)(a.getMonth()+1))})),datasets:[W(W(W({},H.s),g(l[0])),{},{label:"Grupo 18/24 - 2\xaa Dose",labelGroup:"Grupo 18/24",fill:!1,backgroundColor:l[0],data:s.map((function(e){return e.e1824.dose_2||0})),order:1,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),W(W(W({},H.s),g(l[0])),{},{label:"Grupo 18/24 - 1\xaa Dose",labelGroup:"Grupo 18/24",fill:!1,backgroundColor:l[0],data:s.map((function(e){return e.e1824.dose_1||0})),order:2,hidden:!1,display:!0,customDose:1,yAxisID:"axis"}),W(W(W({},H.s),g(u[1])),{},{label:"Grupo 25/49 - 2\xaa Dose",labelGroup:"Grupo 25/49",fill:!1,backgroundColor:u[1],data:s.map((function(e){return e.e2549.dose_2||0})),order:3,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),W(W(W({},H.s),g(u[1])),{},{label:"Grupo 25/49 - 1\xaa Dose",labelGroup:"Grupo 25/49",backgroundColor:u[1],fill:!1,data:s.map((function(e){return e.e2549.dose_1||0})),order:4,hidden:!1,display:!0,customDose:1,yAxisID:"axis"}),W(W(W({},H.s),g(i)),{},{label:"Grupo 50/59 - 2\xaa Dose",labelGroup:"Grupo 50/59",fill:!1,backgroundColor:i,data:s.map((function(e){return e.e5059.dose_2||0})),stack:"stack1",order:5,hidden:!0,display:!1,customDose:2,yAxisID:"axis"}),W(W(W({},H.s),g(i)),{},{label:"Grupo 50/59 - 1\xaa Dose",labelGroup:"Grupo 50/59",backgroundColor:i,fill:!1,data:s.map((function(e){return e.e5059.dose_1||0})),stack:"stack1",order:6,hidden:!1,display:!0,customDose:1,yAxisID:"axis"}),W(W(W({},H.s),g(l[2])),{},Object(U.a)({label:"Grupo 60/69 - 2\xaa Dose",labelGroup:"Grupo 60/69",fill:!1,backgroundColor:l[2],data:s.map((function(e){return e.e6064.dose_2+e.e6569.dose_2||0})),yAxisID:"axis",xAxisID:"xaxis",order:7,hidden:!0,display:!1,customDose:2},"yAxisID","axis")),W(W(W({},H.s),g(l[2])),{},Object(U.a)({label:"Grupo 60/69 - 1\xaa Dose",labelGroup:"Grupo 60/69",backgroundColor:l[2],data:s.map((function(e){return e.e6064.dose_1+e.e6569.dose_1||0})),yAxisID:"axis",xAxisID:"xaxis",order:8,hidden:!1,fill:!1,display:!0,customDose:1},"yAxisID","axis")),W(W(W({},H.s),g(j[2])),{},(a={label:"Grupo 70/79 - 2\xaa Dose",labelGroup:"Grupo 70/79",fill:!1,backgroundColor:j[2],data:s.map((function(e){return e.e7079.dose_2||0})),order:9},Object(U.a)(a,"fill",!1),Object(U.a)(a,"hidden",!0),Object(U.a)(a,"display",!1),Object(U.a)(a,"customDose",2),Object(U.a)(a,"yAxisID","axis"),a)),W(W(W({},H.s),g(j[2])),{},{label:"Grupo 70/79 - 1\xaa Dose",labelGroup:"Grupo 70/79",backgroundColor:j[2],data:s.map((function(e){return e.e7079.dose_1||0})),order:10,hidden:!1,fill:!1,display:!0,customDose:1,yAxisID:"axis"}),W(W(W({},H.s),g(j[1])),{},Object(U.a)({label:"Grupo 80+ - 2\xaa Dose",labelGroup:"Grupo 80+",xAxisID:"xaxis",yAxisID:"axis",backgroundColor:j[1],data:s.map((function(e){return e.e80.dose_2||0})),order:11,hidden:!0,stack:"stack2",fill:!1,display:!1,customDose:2},"yAxisID","axis")),W(W(W({},H.s),g(j[1])),{},Object(U.a)({label:"Grupo 80+ - 1\xaa Dose",labelGroup:"Grupo 80+",backgroundColor:j[1],data:s.map((function(e){return e.e80.dose_1||0})),stack:"stack2",xAxisID:"xaxis",yAxisID:"axis",order:12,hidden:!1,fill:!1,display:!0,customDose:1},"yAxisID","axis"))]}}})})]}):""})})}function J(e){return e>=80?"#01ae97":e>=60?"#4dc6b6":e>=40?"#80d7cb":e>=20?"#b3e7e0":e>=0?"#e6f7f5":void 0}function Y(e){var a=e.statistics,t=e.colors,o=Object(d.useState)(),n=o[0],i=o[1],l=(Object(d.useRef)(null),Object(d.useState)(!1)),b=l[0],p=l[1],m=t.main,x=t.shades,h=(t.tints,t.complements,[0,20,40,60,80]),O={0:"0% a 19%",20:"20% a 39%",40:"40% a 59%",60:"60% a 89%",80:"80% a 100%"},f=function(){var e=Object(r.a)(c.a.mark((function e(a){var t,s,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/madeira.geojson").then((function(e){return e.json()}));case 2:t=e.sent,s=L.map("map"),(o=L.geoJSON(t,{onEachFeature:function(e,a){var t=H.j[e.properties.Dico],s=n.concelhos[t],o=s.dose_1/A.populacao_residente_ram[e.properties.Dico].valor*100,c=s.dose_2/A.populacao_residente_ram[e.properties.Dico].valor*100;a.bindPopup("<p>\n\t\t\t\t\t\t<strong>".concat(e.properties.Municipio,"</strong>\n\t\t\t\t\t\t<br>1\xaa Dose: ").concat(Object(P.b)(s.dose_1)," (").concat(o.toFixed(2),"%)\n\t\t\t\t\t\t</br>2\xaa Dose: ").concat(Object(P.b)(s.dose_2)," (").concat(c.toFixed(2),"%)\n\t\t\t\t\t</p>")),a.on("click",(function(){}))},style:function(e){var a=H.j[e.properties.Dico];return{fillOpacity:1,fillColor:J(n.concelhos[a].dose_2/A.populacao_residente_ram[e.properties.Dico].valor*100),lineJoin:"round",stroke:!0,weight:2,color:"#018b79"}}}).addTo(s)).eachLayer((function(e){e.feature.properties.layerID=e.feature.properties.DICOFRE})),s.fitBounds(o.getBounds()),(r=L.control({position:"bottomleft"})).onAdd=function(e){for(var a=L.DomUtil.create("div","info legend"),t=0;t<h.length;t++){var s=O[h[t]];a.innerHTML+='<p>\n\t\t\t\t\t\t<i style="background:'.concat(J(h[t]+1),'"></i>').concat(s,"</p>")}return a},r.addTo(s),(i=L.control({position:"topleft"})).onAdd=function(e){var a=L.DomUtil.create("div","info legend");return a.innerHTML='<img style="width:20px" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-location-1.png">',a},i.addTo(s),i._container.onclick=function(){s.fitBounds(o.getBounds())};case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(d.useEffect)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.getMadeiraData().then((function(e){i(e[5]),!1===b&&p(!0),!0===b&&f()}));case 1:case"end":return e.stop()}}),e)}))),[b]),!0===b?Object(s.jsxs)(G.a,{children:[Object(s.jsx)(u.a,{children:Object(s.jsx)(j.a,{children:Object(s.jsx)("div",{id:"map",style:{height:"350px"}})})}),Object(s.jsx)(u.a,{style:{marginTop:15},children:Object.values(n.concelhos).map((function(e){return Object(s.jsx)(j.a,{xs:12,lg:4,children:Object(s.jsxs)("div",{className:D.a.ram_subchart_bar,children:[Object(s.jsx)("h2",{className:D.a.text_left,children:e.nome}),Object(s.jsx)(S.HorizontalBar,{height:(window.innerWidth,H.l,60),options:function(){var a=H.j[e.chave],t=A.populacao_residente_ram[a].valor;return{plugins:{datalabels:{display:!1}},layout:{padding:{left:-12}},legend:{position:"bottom",align:"start",display:!1},animation:{duration:1e3},tooltips:{mode:"index",intersect:!1,callbacks:{title:function(e,a){return""}}},scales:{yAxes:[{stacked:!0,id:"y-axis",ticks:{beginAtZero:!0}}],xAxes:[{stacked:!1,ticks:{beginAtZero:!0,max:t,stepSize:Math.round(window.innerWidth<=H.l?t/3:t/6),callback:function(e){return Object(P.b)(e,!1)}}}]}}}(),data:function(a,t){return{labels:[],datasets:[{label:"Total de vacinas administradas - 1\xaa Dose",borderColor:m,backgroundColor:m,stack:"stack0",order:2,data:[e.dose_1]},{label:"Total de vacinas administradas - 2\xaa Dose",borderColor:x[0],backgroundColor:x[0],data:[e.dose_2],stack:"stack0",order:1}]}}})]})})}))}),Object(s.jsx)(u.a,{children:Object(s.jsx)("div",{className:"legends",children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("span",{className:"legend",children:[Object(s.jsx)("span",{style:{backgroundColor:m},className:"color_sample"}),"1\xaa Dose"]}),Object(s.jsxs)("span",{className:"legend",children:[Object(s.jsx)("span",{style:{backgroundColor:x[1]},className:"color_sample"}),"2\xaa Dose"]})]})})})]}):""}var q=t("HMs9"),Q=t.n(q),K=Object(w.a)({domain:"vacinacaocovid19.pt",trackLocalhost:!0});function X(){var e=Object(O.a)({regiao:"madeira"}),a=e.statistics,t=(e.update,e.ready),o=(e.versioning,Object(d.useState)({})),f=o[0],y=o[1],w=Object(d.useState)({}),L=w[0],S=w[1],T=Object(d.useState)(!1),F=T[0],R=(T[1],Object(d.useState)(!1)),z=R[0],U=R[1],H={mid_page:!1,end_page:!1},V=Object(N.useRouter)(),W=new Intl.NumberFormat("pt-PT"),J=Object(d.useState)({pessoasAVacinar:{current:0},percentagem:{current:0}}),q=J[0],X=J[1],$=Object(d.useState)({encomendadas:A.doses.valor,recebidas:0,administradas:0,primeiras:0,segundas:0,data:"",dataLong:""}),ee=($[0],$[1]);function ae(e){return window.scrollY>3576&&!1===H.end_page?(H.end_page=!0,void K.trackEvent("end_page")):window.scrollY>1657&&!1===H.mid_page?(H.mid_page=!0,void K.trackEvent("mid_page")):void 0}var te=new Date(_.dateMadeira),se=Object(x.a)(te,"eeee, dd 'de' LLLL 'de' yyyy",{locale:k.pt}).replace("-feira","").split(""),oe=Object(i.a)(se),ce=oe[0],re=oe.slice(1),ne=[ce.toUpperCase()].concat(Object(n.a)(re)).join("");function ie(){V.push("/")}var de=Object(v.a)(),le=de.colors,ue=de.colors_v2;de.setColors;return Object(d.useEffect)((function(){return window.addEventListener("socket_update",ie),window.addEventListener("scroll",ae),function(){window.removeEventListener("socket_update",ie),window.removeEventListener("scroll",ae)}}),[]),Object(d.useEffect)((function(){var e={pessoasAVacinar:{current:W.format(.7*A.populacao_ram.valor-f.dose_2)},percentagem:{current:f.dose_2/A.populacao_ram.valor*100}};X(e)}),[f]),Object(d.useEffect)(Object(r.a)(c.a.mark((function e(){var s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.getMadeiraData();case 4:s=e.sent,K.trackPageview(),o=s[s.length-1],y(s[s.length-1]),S(s[s.length-2]),ee({recebidas:0,administradas:o.total,primeiras:o.dose_1,segundas:o.dose_2,data:"",dataLong:""}),U(!0);case 11:case"end":return e.stop()}}),e)}))),[t]),Object(s.jsx)(M.a.Provider,{value:"madeira",children:Object(s.jsx)(l.a,{className:"container-fluid app",children:z?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u.a,{children:Object(s.jsx)(j.a,{children:Object(s.jsxs)("h2",{className:g.a.datepicker_static,children:[" ",ne," "]})})}),Object(s.jsxs)(u.a,{className:"counterRow",children:[Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsx)(G.a,{isUpdating:F,children:Object(s.jsx)(p.a,{colors:le,tempo:"na semana",title:"N\xfamero total de vacinas administradas",yesterday:null===L||void 0===L?void 0:L.total,from:null===L||void 0===L?void 0:L.total,to:null===f||void 0===f?void 0:f.total})})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsxs)(G.a,{isUpdating:F,children:[Object(s.jsx)(p.a,{colors:le,tempo:"na semana",title:"N\xfamero de doses administradas - 1\xaa Dose",yesterday:null===L||void 0===L?void 0:L.dose_1,from:null===L||void 0===L?void 0:L.dose_1,to:null===f||void 0===f?void 0:f.dose_1}),Object(s.jsxs)("p",{style:{marginTop:"10px"},class:D.a.card_subtitle,children:[Object(P.d)(null===f||void 0===f?void 0:f.dose_1,A.populacao_ram.valor).toFixed(2)," doses administradas por cada 100 pessoas",Object(s.jsx)("br",{}),Object(P.b)((null===f||void 0===f?void 0:f.dose_1)-(null===f||void 0===f?void 0:f.dose_2))," pessoas inoculadas com a 1\xaa dose"]})]})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsxs)(G.a,{isUpdating:F,children:[Object(s.jsx)(p.a,{colors:le,tempo:"na \tsemana",title:"N\xfamero de doses administradas - 2\xaa Dose",yesterday:null===L||void 0===L?void 0:L.dose_2,from:null===L||void 0===L?void 0:L.dose_2,to:null===f||void 0===f?void 0:f.dose_2}),Object(s.jsxs)("p",{style:{marginTop:"10px"},class:D.a.card_subtitle,children:[Object(P.d)(null===f||void 0===f?void 0:f.dose_2,A.populacao_ram.valor).toFixed(2)," doses administradas por cada 100 pessoas",Object(s.jsx)("br",{}),Object(P.b)(null===f||void 0===f?void 0:f.dose_2)," pessoas inoculadas com a 2\xaa dose"]})]})})]}),Object(s.jsxs)(u.a,{className:"counterRow",children:[Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsx)(G.a,{isUpdating:F,children:Object(s.jsx)(p.a,{ps:"Percentagem calculada com base no n\xfamero total de segundas doses administradas",digits:2,suffix:"%",colors:le,title:"Percentagem de popula\xe7\xe3o inoculada com a 2\xaa dose ",from:0,to:q.percentagem.current})})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsx)(G.a,{isUpdating:F,children:Object(s.jsx)(p.a,{ps:"Ou seja, ser\xe1 preciso vacinar totalmente mais ".concat(q.pessoasAVacinar.current," pessoas para se atingir imuninade de grupo"),digits:2,suffix:"%",colors:le,title:"Percentagem para atingir imunidade de grupo",from:0,to:70-q.percentagem.current})})}),Object(s.jsx)(j.a,{lg:4,xs:12,children:Object(s.jsxs)(G.a,{children:[Object(s.jsx)("h2",{style:{marginBottom:"10px"},className:D.a.card_title,children:"Plano de Vacina\xe7\xe3o"}),Object(s.jsx)("p",{title:"Consultar notas ou o plano de informa\xe7\xe3o para mais informa\xe7\xe3o",style:{margin:"5px 0px"},class:D.a.card_subtitle,children:"O plano de vacina\xe7\xe3o aplicado pela Madeira n\xe3o divulga n\xfameros a atingir."}),Object(s.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/vacinacao/",className:"".concat(D.a.card_subtitle," ").concat(g.a.link),children:"Consultar plano de vacina\xe7\xe3o"})]})})]}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"N\xfamero de vacinas administradas"}),Object(s.jsx)("hr",{}),Object(s.jsx)(m.a,{statistics:a,colors:le})]})}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"N\xfamero de vacinas administradas"}),Object(s.jsx)("hr",{}),Object(s.jsx)(b.a,{colors:le,statistics:a})]})}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"Vacina\xe7\xe3o por grupos priorit\xe1rios"}),Object(s.jsx)("hr",{}),Object(s.jsx)(B,{colors:ue,statistics:a})]})}),Object(s.jsx)(Q.a,{height:500,once:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"Percentagem da popula\xe7\xe3o vacinada por faixa et\xe1ria"}),Object(s.jsx)("hr",{}),Object(s.jsx)(Z,{colors:ue,statistics:a})]})})}),Object(s.jsx)(Q.a,{height:500,once:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)("h2",{className:g.a.title,children:"Vacina\xe7\xe3o por regi\xe3o"}),Object(s.jsx)("h3",{className:g.a.subtitle,children:"Dados acumulados desde 31 de Dezembro de 2021 at\xe9 14 de mar\xe7o de 20210."}),Object(s.jsx)("hr",{}),Object(s.jsx)(Y,{colors:ue,statistics:a})]})})}),Object(s.jsx)(Q.a,{height:500,once:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsxs)(j.a,{children:[Object(s.jsxs)("h2",{className:g.a.title,children:[Object(s.jsxs)("em",{children:["R",Object(s.jsx)("sub",{children:"t"})]})," ","na Regi\xe3o Aut\xf3noma da Madeira"]}),Object(s.jsx)("hr",{}),Object(s.jsx)(E.a,{regiao:"madeira",colors:ue,statistics:a})]})})}),Object(s.jsx)(Q.a,{height:500,once:!0,children:Object(s.jsxs)(u.a,{children:[Object(s.jsxs)(j.a,{lg:6,xs:12,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Propor\xe7\xe3o do n\xfamero total de vacinas administradas com o n\xfamero de infectados, recuperados e \xf3bitos"}),Object(s.jsxs)("h3",{className:g.a.subtitle,children:["Dados acumulados desde 31 de Dezembro de 2021 at\xe9"," ",Object(x.a)(new Date(_.dateMadeiraCases),"dd 'de' LLLL 'de' yyyy",{locale:k.pt}),", \xe0 exce\xe7\xe3o das doses administradas, cujo os ultimos dados dispon\xedveis s\xe3o de"," ",Object(x.a)(new Date(_.dateMadeira),"dd 'de' LLLL 'de' yyyy",{locale:k.pt})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(I.a,{colors:ue,statistics:a})]}),Object(s.jsxs)(j.a,{lg:6,xs:12,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Propor\xe7\xe3o do n\xfamero total de vacinas administradas com o n\xfamero de infectados, recuperados e \xf3bitos e popula\xe7\xe3o suscet\xedvel"}),Object(s.jsxs)("h3",{className:g.a.subtitle,children:["Dados acumulados desde 31 de Dezembro de 2021 at\xe9"," ",Object(x.a)(new Date(_.dateMadeiraCases).getTime(),"dd 'de' LLLL 'de' yyyy",{locale:k.pt}),", \xe0 exce\xe7\xe3o das doses administradas, cujo os ultimos dados dispon\xedveis s\xe3o de"," ",Object(x.a)(new Date(_.dateMadeira).getTime(),"dd 'de' LLLL 'de' yyyy",{locale:k.pt})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(C.a,{colors:ue,statistics:a})]})]})}),Object(s.jsxs)(u.a,{children:[Object(s.jsxs)(j.a,{xs:12,className:g.a.sources_block,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Notas"}),Object(s.jsxs)("p",{className:g.a.text,children:["A percentagem de popula\xe7\xe3o vacinada foi calculada com base no n\xfamero total de segundas doses administradas e com o \xa0",Object(s.jsx)("a",{className:g.a.link,target:"_blank",href:"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html",children:"n\xfamero de popula\xe7\xe3o da Regi\xe3o Aut\xf3noma da Madeira (dados da Dire\xe7\xe3o Regional de Estat\xedstica da Madeira)"}),". Os"," ",Object(s.jsx)("a",{className:g.a.link,target:"_blank",href:"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120",children:"dados de cada regi\xe3o da Madeira"})," ","s\xe3o dados provis\xf3rios de at\xe9 31/12 e foram retirados do PORDATA De acordo com o\xa0",Object(s.jsx)("a",{className:g.a.link,target:"_blank",href:"https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",children:"Instituto Ricardo Jorge, ser\xe1 preciso imunizar entre 60% a 70% da popula\xe7\xe3o para se atingir a imunidade de grupo."})," ","Os valores apresentados aqui foram calculados com uma percentagem de 70%."]}),Object(s.jsxs)("p",{className:g.a.text,children:["A popula\xe7\xe3o suscet\xedvel a infe\xe7\xe3o foi calculada com base na popula\xe7\xe3o total menos a soma do n\xfamero de \xf3bitos, casos ativos, popula\xe7\xe3o infectada, vacinada e recuperada assumindo que casos de reinfe\xe7\xf5es s\xe3o raros."," ",Object(s.jsx)("a",{className:g.a.link,href:"https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",target:":blank",children:"At\xe9 25/02 foram confirmados 57 casos de reinfec\xe7\xe3o com o novo coronav\xedrus."})]})]}),Object(s.jsxs)(j.a,{xs:12,className:g.a.sources_block,children:[Object(s.jsx)("h2",{className:g.a.title,children:"Fontes"}),Object(s.jsxs)("p",{className:g.a.text,children:["Os dados apresentados s\xe3o retirados dos boletins publicados pela\xa0",Object(s.jsx)("a",{className:g.a.link,target:"_blank",href:"https://covidmadeira.pt/boletim-vacinacao-covid-19/",children:"Dire\xe7\xe3o Regional de Sa\xfade"}),". A atualiza\xe7\xe3o destes dados \xe9 semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus s\xe3o retirados dos"," ",Object(s.jsx)("a",{className:g.a.link,target:"_blank",href:"https://covidmadeira.pt/ponto-de-situacao/",children:"pontos de situa\xe7\xe3o"})," ","publicados pela mesma entidade"]})]})]})]}):Object(s.jsx)("div",{style:{display:"block",width:50,margin:"auto "},children:Object(s.jsx)(h.GooSpinner,{size:50,color:ue.main})})})})}}},[["4Zmp",0,2,5,6,1,3,4,9]]]);