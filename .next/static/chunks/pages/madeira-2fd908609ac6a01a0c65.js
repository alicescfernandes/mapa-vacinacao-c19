_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"4Zmp":function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/madeira",function(){return s("M+4D")}])},"M+4D":function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return Z}));var t=s("nKUr"),o=s("o0o1"),c=s.n(o),i=s("HaE+"),r=s("KQm4"),n=s("T5bk"),d=s("q1tI"),l=s("7vrA"),j=s("3Z9Z"),p=s("JI6e"),u=s("9BaP"),m=s("MCc/"),b=s("HWxk"),h=s("sWYD"),x=s("KaNb"),O=s("L2Vc"),v=s("GITI"),g=s.n(v),f=s("9m9c"),_=(s("10Vi"),s("UG6H")),N=s.n(_),k=s("vga7"),w=s("PSO/"),y=s("bMHE"),D=s("20a2"),A=s("lN74"),M=s("5PhN"),E=s("Q/64"),P=s("WMh8"),T=s("GyP+"),C=s("m5rz"),S=s("uAdN"),R=s("Kyr6"),U=s("vksU"),z=s("UDbo"),F=s("xPX6");function H(e){return e>=80?"#01ae97":e>=60?"#4dc6b6":e>=40?"#80d7cb":e>=20?"#b3e7e0":e>=0?"#e6f7f5":void 0}function I(e){var a=e.statistics,s=e.colors,o=Object(d.useState)(),r=o[0],n=o[1],l=(Object(d.useRef)(null),Object(d.useState)(!1)),u=l[0],m=l[1],b=s.main,h=s.shades,x=(s.tints,s.complements,[0,20,40,60,80]),O={0:"0% a 19%",20:"20% a 39%",40:"40% a 59%",60:"60% a 89%",80:"80% a 100%"},v=function(){var e=Object(i.a)(c.a.mark((function e(a){var s,t,o,i,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/madeira.geojson").then((function(e){return e.json()}));case 2:s=e.sent,t=L.map("map"),(o=L.geoJSON(s,{onEachFeature:function(e,a){var s=F.k[e.properties.Dico],t=r.concelhos[s],o=t.dose_1/A.populacao_residente_ram[e.properties.Dico].valor*100,c=t.dose_2/A.populacao_residente_ram[e.properties.Dico].valor*100;a.bindPopup("<p>\n\t\t\t\t\t\t<strong>".concat(e.properties.Municipio,"</strong>\n\t\t\t\t\t\t<br>1\xaa Dose: ").concat(Object(T.c)(t.dose_1)," (").concat(o.toFixed(2),"%)\n\t\t\t\t\t\t</br>2\xaa Dose: ").concat(Object(T.c)(t.dose_2)," (").concat(c.toFixed(2),"%)\n\t\t\t\t\t</p>")),a.on("click",(function(){}))},style:function(e){var a=F.k[e.properties.Dico];return{fillOpacity:1,fillColor:H(r.concelhos[a].dose_2/A.populacao_residente_ram[e.properties.Dico].valor*100),lineJoin:"round",stroke:!0,weight:2,color:"#018b79"}}}).addTo(t)).eachLayer((function(e){e.feature.properties.layerID=e.feature.properties.DICOFRE})),t.fitBounds(o.getBounds()),(i=L.control({position:"bottomleft"})).onAdd=function(e){for(var a=L.DomUtil.create("div","info legend"),s=0;s<x.length;s++){var t=O[x[s]];a.innerHTML+='<p>\n\t\t\t\t\t\t<i style="background:'.concat(H(x[s]+1),'"></i>').concat(t,"</p>")}return a},i.addTo(t),(n=L.control({position:"topleft"})).onAdd=function(e){var a=L.DomUtil.create("div","info legend");return a.innerHTML='<img style="width:20px" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-location-1.png">',a},n.addTo(t),n._container.onclick=function(){t.fitBounds(o.getBounds())};case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(d.useEffect)(Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.getArquipelagoData().then((function(e){n(e[5]),!1===u&&m(!0),!0===u&&v()}));case 1:case"end":return e.stop()}}),e)}))),[u]),!0===u?Object(t.jsxs)(M.a,{children:[Object(t.jsx)(j.a,{children:Object(t.jsx)(p.a,{children:Object(t.jsx)("div",{id:"map",style:{height:"350px"}})})}),Object(t.jsx)(j.a,{style:{marginTop:15},children:Object.values(r.concelhos).map((function(e){return Object(t.jsx)(p.a,{xs:12,lg:4,children:Object(t.jsxs)("div",{className:N.a.ram_subchart_bar,children:[Object(t.jsx)("h2",{className:N.a.text_left,children:e.nome}),Object(t.jsx)(z.HorizontalBar,{height:(window.innerWidth,F.m,60),options:function(){var a=F.k[e.chave],s=A.populacao_residente_ram[a].valor;return{plugins:{datalabels:{display:!1}},layout:{padding:{left:-12}},legend:{position:"bottom",align:"start",display:!1},animation:{duration:1e3},tooltips:{mode:"index",intersect:!1,callbacks:{title:function(e,a){return""}}},scales:{yAxes:[{stacked:!0,id:"y-axis",ticks:{beginAtZero:!0}}],xAxes:[{stacked:!1,ticks:{beginAtZero:!0,max:s,stepSize:Math.round(window.innerWidth<=F.m?s/3:s/6),callback:function(e){return Object(T.c)(e,!1)}}}]}}}(),data:function(a,s){return{labels:[],datasets:[{label:"Total de vacinas administradas - 1\xaa Dose",borderColor:b,backgroundColor:b,stack:"stack0",order:2,data:[e.dose_1]},{label:"Total de vacinas administradas - 2\xaa Dose",borderColor:h[0],backgroundColor:h[0],data:[e.dose_2],stack:"stack0",order:1}]}}})]})})}))}),Object(t.jsx)(j.a,{children:Object(t.jsx)("div",{className:"legends",children:Object(t.jsxs)("p",{children:[Object(t.jsxs)("span",{className:"legend",children:[Object(t.jsx)("span",{style:{backgroundColor:b},className:"color_sample"}),"1\xaa Dose"]}),Object(t.jsxs)("span",{className:"legend",children:[Object(t.jsx)("span",{style:{backgroundColor:h[1]},className:"color_sample"}),"2\xaa Dose"]})]})})})]}):""}var V=s("HMs9"),B=s.n(V),J=Object(y.a)({domain:"vacinacaocovid19.pt",trackLocalhost:!0});function Z(){var e=Object(O.a)({regiao:"madeira"}),a=e.statistics,s=(e.update,e.ready),o=(e.versioning,Object(d.useState)({})),v=o[0],_=o[1],y=Object(d.useState)({}),L=y[0],z=y[1],F=Object(d.useState)(!1),H=F[0],V=(F[1],Object(d.useState)(!1)),Z=V[0],q=V[1],W={mid_page:!1,end_page:!1},G=Object(D.useRouter)(),K=new Intl.NumberFormat("pt-PT"),X=Object(d.useState)({pessoasAVacinar:{current:0},percentagem:{current:0}}),Y=X[0],Q=X[1],$=Object(d.useState)({encomendadas:A.doses.valor,recebidas:0,administradas:0,primeiras:0,segundas:0,data:"",dataLong:""}),ee=($[0],$[1]);function ae(e){return window.scrollY>3576&&!1===W.end_page?(W.end_page=!0,void J.trackEvent("end_page")):window.scrollY>1657&&!1===W.mid_page?(W.mid_page=!0,void J.trackEvent("mid_page")):void 0}var se=new Date(k.dateMadeira),te=Object(h.a)(se,"eeee, dd 'de' LLLL 'de' yyyy",{locale:w.pt}).replace("-feira","").split(""),oe=Object(n.a)(te),ce=oe[0],ie=oe.slice(1),re=[ce.toUpperCase()].concat(Object(r.a)(ie)).join("");function ne(){G.push("/")}var de=Object(f.a)(),le=de.colors,je=de.colors_v2;de.setColors;return Object(d.useEffect)((function(){return window.addEventListener("socket_update",ne),window.addEventListener("scroll",ae),function(){window.removeEventListener("socket_update",ne),window.removeEventListener("scroll",ae)}}),[]),Object(d.useEffect)((function(){var e={pessoasAVacinar:{current:K.format(.7*A.populacao_ram.valor-v.dose_2)},percentagem:{current:v.dose_2/A.populacao_ram.valor*100}};Q(e)}),[v]),Object(d.useEffect)(Object(i.a)(c.a.mark((function e(){var t,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==s){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.getArquipelagoData();case 4:t=e.sent,J.trackPageview(),o=t[t.length-1],_(t[t.length-1]),z(t[t.length-2]),ee({recebidas:0,administradas:o.total,primeiras:o.dose_1,segundas:o.dose_2,data:"",dataLong:""}),q(!0);case 11:case"end":return e.stop()}}),e)}))),[s]),Object(t.jsx)(S.a.Provider,{value:"madeira",children:Object(t.jsx)(l.a,{className:"container-fluid app",children:Z?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(j.a,{children:Object(t.jsx)(p.a,{children:Object(t.jsxs)("h2",{className:g.a.datepicker_static,children:[" ",re," "]})})}),Object(t.jsxs)(j.a,{className:"counterRow",children:[Object(t.jsx)(p.a,{lg:4,xs:12,children:Object(t.jsx)(M.a,{isUpdating:H,children:Object(t.jsx)(m.a,{colors:le,tempo:"na semana anterior",title:"N\xfamero total de vacinas administradas",yesterday:null===L||void 0===L?void 0:L.total,from:null===L||void 0===L?void 0:L.total,to:null===v||void 0===v?void 0:v.total})})}),Object(t.jsx)(p.a,{lg:4,xs:12,children:Object(t.jsxs)(M.a,{isUpdating:H,children:[Object(t.jsx)(m.a,{colors:le,tempo:"na semana anterior",title:"N\xfamero de doses administradas - 1\xaa Dose",yesterday:null===L||void 0===L?void 0:L.dose_1,from:null===L||void 0===L?void 0:L.dose_1,to:null===v||void 0===v?void 0:v.dose_1}),Object(t.jsxs)("p",{style:{marginTop:"10px"},className:N.a.card_subtitle,children:[Object(T.e)(null===v||void 0===v?void 0:v.dose_1,A.populacao_ram.valor).toFixed(2)," doses administradas por cada 100 pessoas",Object(t.jsx)("br",{}),Object(T.c)((null===v||void 0===v?void 0:v.dose_1)-(null===v||void 0===v?void 0:v.dose_2))," pessoas inoculadas com a 1\xaa dose"]})]})}),Object(t.jsx)(p.a,{lg:4,xs:12,children:Object(t.jsxs)(M.a,{isUpdating:H,children:[Object(t.jsx)(m.a,{colors:le,tempo:"na \tsemana anterior",title:"N\xfamero de doses administradas - 2\xaa Dose",yesterday:null===L||void 0===L?void 0:L.dose_2,from:null===L||void 0===L?void 0:L.dose_2,to:null===v||void 0===v?void 0:v.dose_2}),Object(t.jsxs)("p",{style:{marginTop:"10px"},className:N.a.card_subtitle,children:[Object(T.e)(null===v||void 0===v?void 0:v.dose_2,A.populacao_ram.valor).toFixed(2)," doses administradas por cada 100 pessoas",Object(t.jsx)("br",{}),Object(T.c)(null===v||void 0===v?void 0:v.dose_2)," pessoas inoculadas com a 2\xaa dose"]})]})})]}),Object(t.jsxs)(j.a,{className:"counterRow",children:[Object(t.jsx)(p.a,{lg:4,xs:12,children:Object(t.jsx)(M.a,{isUpdating:H,children:Object(t.jsx)(m.a,{ps:"Percentagem calculada com base no n\xfamero total de segundas doses administradas",digits:2,suffix:"%",colors:le,title:"Percentagem de popula\xe7\xe3o inoculada com a 2\xaa dose ",from:0,to:Y.percentagem.current})})}),Object(t.jsx)(p.a,{lg:4,xs:12,children:Object(t.jsx)(M.a,{isUpdating:H,children:Object(t.jsx)(m.a,{ps:"Ou seja, ser\xe1 preciso vacinar totalmente mais ".concat(Y.pessoasAVacinar.current," pessoas para se atingir imuninade de grupo"),digits:2,suffix:"%",colors:le,title:"Percentagem para atingir imunidade de grupo",from:0,to:70-Y.percentagem.current})})}),Object(t.jsx)(p.a,{lg:4,xs:12,children:Object(t.jsxs)(M.a,{children:[Object(t.jsx)("h2",{style:{marginBottom:"10px"},className:N.a.card_title,children:"Plano de Vacina\xe7\xe3o"}),Object(t.jsx)("p",{title:"Consultar notas ou o plano de informa\xe7\xe3o para mais informa\xe7\xe3o",style:{margin:"5px 0px"},className:N.a.card_subtitle,children:"O plano de vacina\xe7\xe3o aplicado pela Madeira n\xe3o divulga n\xfameros a atingir."}),Object(t.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/vacinacao/",className:"".concat(N.a.card_subtitle," ").concat(g.a.link),children:"Consultar plano de vacina\xe7\xe3o"})]})})]}),Object(t.jsx)(j.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsx)("h2",{className:g.a.title,children:"N\xfamero de vacinas administradas"}),Object(t.jsx)("hr",{}),Object(t.jsx)(b.a,{statistics:a,colors:le})]})}),Object(t.jsx)(j.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsx)("h2",{className:g.a.title,children:"N\xfamero de vacinas administradas"}),Object(t.jsx)("hr",{}),Object(t.jsx)(u.a,{colors:le,statistics:a})]})}),Object(t.jsx)(j.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsx)("h2",{className:g.a.title,children:"Vacina\xe7\xe3o por grupos priorit\xe1rios"}),Object(t.jsx)("hr",{}),Object(t.jsx)(R.a,{colors:je,statistics:a})]})}),Object(t.jsx)(B.a,{height:500,once:!0,children:Object(t.jsx)(j.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsx)("h2",{className:g.a.title,children:"Percentagem da popula\xe7\xe3o vacinada por faixa et\xe1ria"}),Object(t.jsx)("hr",{}),Object(t.jsx)(U.a,{colors:je,statistics:a})]})})}),Object(t.jsx)(B.a,{height:500,offset:300,once:!0,children:Object(t.jsx)(j.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsx)("h2",{className:g.a.title,children:"Vacina\xe7\xe3o por regi\xe3o"}),Object(t.jsx)("h3",{className:g.a.subtitle,children:"Dados acumulados desde 31 de Dezembro de 2021 at\xe9 14 de mar\xe7o de 20210."}),Object(t.jsx)("hr",{}),Object(t.jsx)(I,{colors:je,statistics:a})]})})}),Object(t.jsx)(B.a,{height:500,once:!0,children:Object(t.jsx)(j.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsxs)("h2",{className:g.a.title,children:[Object(t.jsxs)("em",{children:["R",Object(t.jsx)("sub",{children:"t"})]})," ","na Regi\xe3o Aut\xf3noma da Madeira (desde 01/01/2021)"]}),Object(t.jsx)("hr",{}),Object(t.jsx)(C.a,{regiao:"madeira",colors:je,statistics:a})]})})}),Object(t.jsx)(B.a,{height:500,once:!0,children:Object(t.jsxs)(j.a,{children:[Object(t.jsxs)(p.a,{lg:6,xs:12,children:[Object(t.jsx)("h2",{className:g.a.title,children:"Propor\xe7\xe3o do n\xfamero total de vacinas administradas com o n\xfamero de infectados, recuperados e \xf3bitos"}),Object(t.jsxs)("h3",{className:g.a.subtitle,children:["Dados acumulados desde 31 de Dezembro de 2021 at\xe9"," ",Object(h.a)(new Date(k.dateMadeiraCases),"dd 'de' LLLL 'de' yyyy",{locale:w.pt}),", \xe0 exce\xe7\xe3o das doses administradas, cujo os ultimos dados dispon\xedveis s\xe3o de"," ",Object(h.a)(new Date(k.dateMadeira),"dd 'de' LLLL 'de' yyyy",{locale:w.pt})]}),Object(t.jsx)("hr",{}),Object(t.jsx)(E.a,{colors:je,statistics:a})]}),Object(t.jsxs)(p.a,{lg:6,xs:12,children:[Object(t.jsx)("h2",{className:g.a.title,children:"Propor\xe7\xe3o do n\xfamero total de vacinas administradas com o n\xfamero de infectados, recuperados e \xf3bitos e popula\xe7\xe3o suscet\xedvel"}),Object(t.jsxs)("h3",{className:g.a.subtitle,children:["Dados acumulados desde 31 de Dezembro de 2021 at\xe9"," ",Object(h.a)(new Date(k.dateMadeiraCases).getTime(),"dd 'de' LLLL 'de' yyyy",{locale:w.pt}),", \xe0 exce\xe7\xe3o das doses administradas, cujo os ultimos dados dispon\xedveis s\xe3o de"," ",Object(h.a)(new Date(k.dateMadeira).getTime(),"dd 'de' LLLL 'de' yyyy",{locale:w.pt})]}),Object(t.jsx)("hr",{}),Object(t.jsx)(P.a,{colors:je,statistics:a})]})]})}),Object(t.jsxs)(j.a,{children:[Object(t.jsxs)(p.a,{xs:12,className:g.a.sources_block,children:[Object(t.jsx)("h2",{className:g.a.title,children:"Notas"}),Object(t.jsxs)("p",{className:g.a.text,children:["A percentagem de popula\xe7\xe3o vacinada foi calculada com base no n\xfamero total de segundas doses administradas e com o \xa0",Object(t.jsx)("a",{className:g.a.link,target:"_blank",href:"https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html",children:"n\xfamero de popula\xe7\xe3o da Regi\xe3o Aut\xf3noma da Madeira (dados da Dire\xe7\xe3o Regional de Estat\xedstica da Madeira)"}),". Os"," ",Object(t.jsx)("a",{className:g.a.link,target:"_blank",href:"https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120",children:"dados de cada regi\xe3o da Madeira"})," ","s\xe3o dados provis\xf3rios de at\xe9 31/12 e foram retirados do PORDATA De acordo com o\xa0",Object(t.jsx)("a",{className:g.a.link,target:"_blank",href:"https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/",children:"Instituto Ricardo Jorge, ser\xe1 preciso imunizar entre 60% a 70% da popula\xe7\xe3o para se atingir a imunidade de grupo."})," ","Os valores apresentados aqui foram calculados com uma percentagem de 70%."]}),Object(t.jsxs)("p",{className:g.a.text,children:["A popula\xe7\xe3o suscet\xedvel a infe\xe7\xe3o foi calculada com base na popula\xe7\xe3o total menos a soma do n\xfamero de \xf3bitos, casos ativos, popula\xe7\xe3o infectada, vacinada e recuperada assumindo que casos de reinfe\xe7\xf5es s\xe3o raros."," ",Object(t.jsx)("a",{className:g.a.link,href:"https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/",target:":blank",children:"At\xe9 25/02 foram confirmados 57 casos de reinfec\xe7\xe3o com o novo coronav\xedrus."})]})]}),Object(t.jsxs)(p.a,{xs:12,className:g.a.sources_block,children:[Object(t.jsx)("h2",{className:g.a.title,children:"Fontes"}),Object(t.jsxs)("p",{className:g.a.text,children:["Os dados apresentados s\xe3o retirados dos boletins publicados pela\xa0",Object(t.jsx)("a",{className:g.a.link,target:"_blank",href:"https://covidmadeira.pt/boletim-vacinacao-covid-19/",children:"Dire\xe7\xe3o Regional de Sa\xfade"}),". A atualiza\xe7\xe3o destes dados \xe9 semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus s\xe3o retirados dos"," ",Object(t.jsx)("a",{className:g.a.link,target:"_blank",href:"https://covidmadeira.pt/ponto-de-situacao/",children:"pontos de situa\xe7\xe3o"})," ","publicados pela mesma entidade"]})]})]})]}):Object(t.jsx)("div",{style:{display:"block",width:50,margin:"auto "},children:Object(t.jsx)(x.GooSpinner,{size:50,color:je.main})})})})}}},[["4Zmp",0,2,4,6,1,3,5,7,9]]]);