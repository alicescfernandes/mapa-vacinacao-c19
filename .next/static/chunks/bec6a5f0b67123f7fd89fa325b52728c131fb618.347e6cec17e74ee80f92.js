(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{Cgje:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("nKUr"),i=a("YFqc"),c=a.n(i),o=a("q1tI"),r=a("7vrA"),s=a("uAdN"),l=a("OXQD"),d=a.n(l),C=a("bMHE"),h={apiKey:"AIzaSyBcHZc1Rk5CeJDkwwaBOdCzYgdA6V5WK3g",authDomain:"covid19-249f1.firebaseapp.com",projectId:"covid19-249f1",storageBucket:"covid19-249f1.appspot.com",messagingSenderId:"636238011730",appId:"1:636238011730:web:bf4a0deef86c884c3b6e8b",measurementId:"G-DYYRVR03RS"};function u(e){var t=e.children,a=Object(C.a)({domain:"vacinacaocovid19.pt",trackLocalhost:!0});function i(e){0===firebase.apps.length&&firebase.initializeApp(h);var t=firebase.messaging();t.getToken({vapidKey:"BHtOyn7DJeWzTT1uCITnVOzCpFI4jyOGNo_NQCKoJktP56tHqSVCPtyn99tgpWPRsWzRTu07ahM6fjljP_01K3g"}).then((function(t,n,i){t?fetch("/api/messaging/register",{method:"POST",body:JSON.stringify({fcm_token:t}),headers:{"content-type":"application/json"}}).then((function(t){a.trackEvent("notifications",{type:"granted"}),null===e||void 0===e||e()})):console.log("No registration token available. Request permission to generate one.")})).catch((function(e){alert("N\xe3o conseguimos ativar as notifica\xe7\xf5es. Certifique-se que n\xe3o est\xe3o bloqueadas para este site ou tente mais tarde.")})),t.onMessage((function(e){new Notification(e.notification.title,{body:e.notification.body,icon:"/android-icon-192x192.png"}).onclick=function(e){window.open("https://www.vacinacaocovid19.pt/?utm_source=notifications&utm_medium=notifications&utm_campaign=notifications")}}))}return Object(o.useEffect)((function(){"granted"===Notification.permission&&i()}),[]),Object(n.jsxs)("span",{onClick:function(){"granted"!==Notification.permission?i((function(){new Notification("Vacina\xe7\xe3o COVID-19",{body:"Subscreveste \xe0s nossas notifica\xe7\xf5es di\xe1rias com os dados das vacinas",icon:"/android-icon-192x192.png"})})):alert("J\xe1 recebes as nossas notifica\xe7\xf5es")},children:[t," "]})}var f=a("t5hz"),j=a.n(f),b=a("mYdt"),p=a.n(b),g=a("RQMA"),m=a.n(g),v=a("oM7c"),O=a.n(v);function x(){var e=Object(o.useState)(!1),t=e[0],a=e[1],i=Object(o.useContext)(s.a),l={portugal:{nome:"",tagline:"Dados atualizados diariamente entre as 13h e as 14h"},madeira:{nome:" - Madeira",tagline:"Dados atualizados semanalmente"},acores:{nome:" - A\xe7ores",tagline:"Dados atualizados semanalmente"}};return Object(o.useEffect)((function(){a("Notification"in window)}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{className:"".concat(d.a.header," card-shadow"),children:Object(n.jsxs)(r.a,{className:d.a.content,children:[Object(n.jsxs)("div",{className:d.a.logo,children:[Object(n.jsxs)("h1",{children:["vacina\xe7\xe3o COVID 19 ",l[i].nome," "]}),Object(n.jsx)("p",{children:l[i].tagline})]}),Object(n.jsx)("nav",{className:"".concat(d.a.nav," ").concat(d.a.hide_mobile),children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/",children:Object(n.jsx)("a",{className:"portugal"===i?d.a.highlight:"",children:"Portugal"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/madeira",children:Object(n.jsx)("a",{className:"madeira"===i?d.a.highlight:"",children:"Madeira"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/acores",children:Object(n.jsx)("a",{className:"acores"===i?d.a.highlight:"",children:"A\xe7ores"})})}),t&&Object(n.jsx)("li",{children:Object(n.jsx)(u,{children:Object(n.jsx)("a",{href:"#",children:"Notifica\xe7\xf5es"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://twitter.com/vacinacaocovid1",children:"Twitter"})})]})})]})}),Object(n.jsx)("header",{className:"".concat(d.a.header," ").concat(d.a.header_mobile," card-shadow"),children:Object(n.jsx)(r.a,{className:d.a.content,children:Object(n.jsx)("nav",{className:"".concat(d.a.nav,"  ").concat(d.a.hide_mobile),children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/",children:Object(n.jsxs)("a",{className:"portugal"===i?d.a.highlight:"",children:[Object(n.jsx)("span",{children:Object(n.jsx)(p.a,{height:30})}),Object(n.jsx)("span",{children:"Portugal"})]})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/madeira",children:Object(n.jsxs)("a",{className:"madeira"===i?d.a.highlight:"",children:[Object(n.jsx)("span",{children:Object(n.jsx)(j.a,{height:25})}),Object(n.jsx)("span",{children:"Madeira"})]})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/acores",children:Object(n.jsxs)("a",{className:"acores"===i?d.a.highlight:"",children:[Object(n.jsx)("span",{children:Object(n.jsx)(O.a,{width:70,height:40})}),Object(n.jsx)("span",{children:"A\xe7ores"})]})})}),t&&Object(n.jsx)("li",{children:Object(n.jsx)(u,{children:Object(n.jsxs)("a",{children:[Object(n.jsx)("span",{children:Object(n.jsx)(m.a,{width:30,height:30})}),Object(n.jsx)("span",{children:"Notifica\xe7\xf5es"})]})})})]})})})}),Object(n.jsx)("div",{className:"".concat(d.a.submenu),children:Object(n.jsx)(r.a,{className:d.a.content,children:Object(n.jsx)("nav",{className:d.a.nav,children:Object(n.jsxs)("ul",{children:["portugal"===i&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19estamoson.gov.pt/vacinacao-covid19/",children:"Fases de Vacina\xe7\xe3o"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/vacinacao/",children:"Fa\xe7o parte das listas de vacina\xe7\xe3o?"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://pandemiaclara.sapo.pt/plano-de-vacinacao",children:"Quando posso ser vacinado?"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/relatorio-de-vacinacao/",children:"Relat\xf3rios de Vacina\xe7\xe3o"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",children:"Ponto de Situa\xe7\xe3o"})})]}),"madeira"===i&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/",children:"Sit\xedo oficial - Dire\xe7\xe3o Regional de Sa\xfade"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/ponto-de-situacao/",children:"Ponto de Situa\xe7\xe3o"})})]}),"acores"===i&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://destinoseguro.azores.gov.pt/",children:"Portal COVID-19 - Governo dos A\xe7ores"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://vacinacao-covid19.azores.gov.pt/",children:"Portal Vacina\xe7\xe3o - Governo dos A\xe7ores"})})]})]})})})})]})}},OXQD:function(e,t,a){e.exports={header:"Header_header__3Z-q0",submenu:"Header_submenu__y6vbr",header_mobile:"Header_header_mobile__3F0A4",submenu_mobile:"Header_submenu_mobile__2NpLk",content:"Header_content__3--fg",highlight:"Header_highlight__Drolj",logo:"Header_logo__2UB2g",hide_mobile:"Header_hide_mobile__2Rzv1"}},RQMA:function(e,t,a){var n=a("q1tI");function i(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:" M 1943.094 226.684 C 1931.149 216.588 1924.3 201.83 1924.3 186.196 L 1924.3 164.171 C 1924.3 136.371 1903.649 113.358 1876.9 109.503 L 1876.9 100.971 C 1876.9 96.602 1873.361 93.071 1869 93.071 C 1864.639 93.071 1861.1 96.602 1861.1 100.971 L 1861.1 109.503 C 1834.343 113.358 1813.7 136.371 1813.7 164.171 L 1813.7 186.196 C 1813.7 201.83 1806.851 216.588 1794.835 226.747 C 1791.762 229.378 1790 233.201 1790 237.246 C 1790 244.87 1796.202 251.071 1803.825 251.071 L 1934.175 251.071 C 1941.799 251.071 1948 244.87 1948 237.246 C 1948 233.201 1946.238 229.378 1943.094 226.684 Z ",fill:"rgb(1,174,151)",key:0}),n.createElement("path",{d:" M 1869 282.671 C 1883.307 282.671 1895.275 272.472 1898.025 258.971 L 1839.975 258.971 C 1842.725 272.472 1854.693 282.671 1869 282.671 Z ",fill:"rgb(1,174,151)",key:1})]))}i.defaultProps={style:{isolation:"isolate"},viewBox:"1790 93.071 158 189.6",width:"158pt",height:"189.6pt"},e.exports=i,i.default=i},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("J4zp"),i=a("284h");t.__esModule=!0,t.default=void 0;var c=i(a("q1tI")),o=a("elyg"),r=a("nOHt"),s=a("vNVm"),l={};function d(e,t,a,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,a,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+a+(i?"%"+i:"")]=!0}}var C=function(e){var t=!1!==e.prefetch,a=(0,r.useRouter)(),i=a&&a.pathname||"/",C=c.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),a=n(t,2),c=a[0],r=a[1];return{href:c,as:e.as?(0,o.resolveHref)(i,e.as):r||c}}),[i,e.href,e.as]),h=C.href,u=C.as,f=e.children,j=e.replace,b=e.shallow,p=e.scroll,g=e.locale;"string"===typeof f&&(f=c.default.createElement("a",null,f));var m=c.Children.only(f),v=m&&"object"===typeof m&&m.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),x=n(O,2),_=x[0],y=x[1],L=c.default.useCallback((function(e){_(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,_]);(0,c.useEffect)((function(){var e=y&&t&&(0,o.isLocalURL)(h),n="undefined"!==typeof g?g:a&&a.locale,i=l[h+"%"+u+(n?"%"+n:"")];e&&!i&&d(a,h,u,{locale:n})}),[u,h,y,g,t,a]);var w={ref:L,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,a,n,i,c,r,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(a))&&(e.preventDefault(),null==r&&(r=n.indexOf("#")<0),t[i?"replace":"push"](a,n,{shallow:c,locale:s,scroll:r}).then((function(e){e&&r&&document.body.focus()})))}(e,a,h,u,j,b,p,g)},onMouseEnter:function(e){(0,o.isLocalURL)(h)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),d(a,h,u,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof g?g:a&&a.locale,k=(0,o.getDomainLocale)(u,N,a&&a.locales,a&&a.domainLocales);w.href=k||(0,o.addBasePath)((0,o.addLocale)(u,N,a&&a.defaultLocale))}return c.default.cloneElement(m,w)};t.default=C},mYdt:function(e,t,a){var n=a("q1tI");function i(e){return n.createElement("svg",e,n.createElement("g",null,n.createElement("path",{d:" M 246.163 251.37 C 247.002 239.858 240.408 217.275 244.939 209.079 C 247.577 203.145 239.37 189.262 232.409 176.45 C 230.37 169.512 243.032 174.579 246.807 169.291 C 254.603 163.375 252.37 158.45 257.215 151.138 C 260.952 144.892 267.62 143.825 274.28 139.412 C 281.094 134.901 292.245 125.2 302.016 116.482 C 307.292 111.53 307.682 105.762 312.186 98.029 C 314.057 93.637 319.682 84.012 314.495 80.45 C 304.432 74.512 283.053 69.915 279.495 67.45 C 275.745 62.825 279.37 42.325 277.058 35.242 C 275.87 24.7 268.995 26.825 266.008 31.037 C 256.429 35.775 246.041 28.495 239.498 27.761 C 226.133 24.882 205.833 19.75 202.201 26.506 C 201.958 31.703 205.329 38.799 197.864 41.647 C 191.533 47.445 190.37 46.95 181.495 46.45 C 173.62 44.45 175.559 41.393 167.27 39.551 C 145.745 41.2 133.245 37.7 119.495 35.634 C 105.826 35.634 107.675 51.986 97.525 52.067 C 87.78 51.249 81.332 37.985 81.79 32.435 C 84.648 25.09 93.557 22.881 96.04 16.574 C 96.854 3.832 80.469 17.601 83.364 4.723 C 84.507 -2.836 80.718 0.765 76.482 1.503 C 67.702 8.987 56.406 7.826 45.576 9.562 C 35.916 11.281 32.407 12.135 25.79 18.182 C 19.935 24.147 11.053 32.435 11.053 32.435 C 5.62 37.316 0.908 45.006 0 53.551 C 1.23 63.166 8.376 69.695 8.22 78.214 C 8.948 84.239 11.936 93.495 11.79 93.342 C 12.288 100.038 13.861 105.194 14.001 111.807 C 16.631 122.24 19.218 133.549 20.411 145.057 C 20.486 151.43 29.083 168.036 28.551 173.233 C 26.362 192.493 21.888 208.888 16.948 227.721 C 15.889 230.216 17.27 229.525 16.996 231.152 C 15.031 237.778 13.46 244.554 11.969 251.37 L 246.163 251.37 L 246.163 251.37 Z ",fill:"rgb(1,174,151)"})))}i.defaultProps={style:{isolation:"isolate"},viewBox:"0 0 316.638 251.37"},e.exports=i,i.default=i},oM7c:function(e,t,a){var n=a("q1tI");function i(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:" M 1324.46 206.605 C 1323.651 207.664 1323.216 209.78 1323.343 211.078 C 1322.66 212.196 1321.303 213.19 1320.74 214.22 C 1319.558 216.384 1320.297 219.297 1319.531 221.473 C 1319.39 221.874 1318.536 222.72 1318.322 223.165 C 1316.531 226.891 1318.177 230.443 1319.717 233.922 C 1324.086 236.66 1327.527 241.273 1331.339 244.68 C 1333.172 246.318 1335.463 248.379 1337.569 249.637 C 1338.686 250.303 1340.376 250.582 1341.382 251.329 C 1342.814 252.393 1344.363 254.198 1345.752 255.438 C 1347.684 257.165 1350.275 258.286 1352.167 260.032 C 1357.206 264.681 1364.985 272.118 1371.6 274.174 C 1377.503 276.009 1380.867 272.076 1384.152 271.878 C 1385.744 271.781 1387.513 272.289 1389.08 272.119 C 1390.862 271.927 1392.052 271.271 1394.008 271.635 C 1394.917 272.983 1396.519 273.564 1397.913 274.254 C 1400.294 275.434 1402.01 277.102 1404.794 277.438 C 1407.382 277.749 1410.367 277.292 1412.884 278.042 C 1413.509 278.228 1414.121 278.784 1414.743 279.009 C 1416.831 279.767 1419.17 279.896 1421.252 280.822 C 1424.546 282.287 1427.545 287.298 1430.828 287.591 C 1432.26 286.345 1434.297 285.024 1436.222 284.811 C 1440.041 284.388 1442.812 288.014 1446.914 287.711 C 1449.163 287.546 1450.938 286.115 1453.05 285.657 L 1454.724 285.496 C 1456.613 285.314 1458.544 285.68 1460.49 285.536 C 1462.362 285.399 1464.128 284.908 1465.975 284.73 L 1467.648 284.569 C 1469.03 284.608 1470.27 285.019 1471.739 284.932 C 1475.775 284.694 1479.087 281.506 1482.804 280.218 C 1486.115 279.07 1489.671 280.042 1493.032 279.614 C 1494.339 279.447 1498.694 276.647 1499.447 275.504 C 1502.807 274.525 1514.138 273.726 1517.671 273.811 C 1520.22 273.873 1522.48 274.801 1525.11 274.416 C 1528.633 270.471 1540.036 274.723 1545.101 267.043 C 1547.521 263.371 1547.874 253.463 1548.541 248.831 C 1548.785 247.139 1550.258 246.23 1550.214 243.955 C 1550.177 241.961 1548.892 239.364 1548.355 237.428 C 1547.952 235.976 1547.944 234.227 1547.425 232.836 C 1545.489 227.644 1535.678 221.333 1530.131 222.198 C 1528.183 222.502 1526.269 224.286 1524.552 224.857 L 1522.941 225.019 C 1521.869 225.125 1522.396 225.167 1521.36 224.898 C 1518.969 224.276 1517.237 224.915 1514.882 224.857 C 1510.806 224.758 1506.637 223.281 1502.516 223.165 C 1500.287 223.102 1498.145 224.065 1495.914 224.011 C 1492.594 223.931 1489.917 221.961 1486.523 222.681 C 1483.858 223.247 1481.551 225.15 1479.085 226.066 C 1478.141 226.417 1477.139 226.431 1476.172 226.832 L 1474.808 227.395 C 1473.714 228.107 1473.026 229.145 1471.739 229.813 C 1469.434 231.013 1465.731 230.919 1464.301 233.318 C 1462.114 234.032 1459.763 234.068 1457.607 234.769 C 1451.875 236.632 1445.543 237.036 1439.661 235.252 C 1438.414 233.704 1436.729 232.287 1436.222 230.297 L 1433.803 229.934 C 1430.111 231.299 1419.487 238.042 1417.346 238.274 C 1414.85 238.545 1412.979 236.682 1410.465 236.703 C 1405.859 239.681 1400.171 236.45 1395.682 235.252 C 1392.937 234.521 1389.954 234.406 1387.221 233.56 C 1385.928 233.16 1384.482 232.13 1383.13 231.989 C 1380.721 231.738 1378.129 232.709 1375.691 231.626 C 1374.54 231.115 1372.301 228.974 1371.414 228 C 1367.922 224.159 1371.012 221.083 1369.74 217 C 1367.609 215.643 1365.165 213.912 1363.232 212.286 C 1362.272 211.48 1361.44 210.21 1360.443 209.506 C 1357.935 207.737 1353.048 206.941 1350.121 205.88 C 1348.041 205.125 1346.437 203.585 1344.078 203.462 C 1336.608 203.073 1335.815 210.98 1327.806 206.121 L 1324.46 206.605 Z ",fillRule:"evenodd",fill:"rgb(1,174,151)",key:0}),n.createElement("path",{d:" M 1494.544 82.733 C 1493.933 85.481 1494.133 89.448 1497.241 90.589 C 1497.928 91.795 1498.403 93.445 1498.542 94.82 C 1501.28 97.762 1505.742 102.011 1509.421 103.644 C 1510.853 104.28 1511.861 104.395 1513.232 105.337 C 1514.947 106.513 1516.105 108.354 1517.696 109.446 C 1520.073 111.077 1523.925 111.829 1526.715 112.347 C 1529.779 112.916 1537.736 111.728 1539.732 113.919 C 1540.024 115.159 1540.506 116.389 1541.034 117.545 C 1542.294 118.102 1544.137 118.333 1545.497 118.149 C 1546.351 117.397 1547.076 116.059 1547.45 115.006 L 1549.123 113.919 C 1554.661 117.92 1554.611 115.188 1559.63 115.732 C 1560.935 116.404 1561.663 117.496 1562.792 118.271 C 1565.518 120.141 1570.074 121.677 1573.205 120.566 C 1575.205 119.857 1576.888 118.262 1579.062 118.149 C 1582.414 117.975 1584.259 120.607 1587.431 120.446 C 1591.086 120.26 1593.917 117.237 1597.194 116.215 C 1600.632 113.048 1598.167 106.78 1598.403 102.798 C 1600.269 98.106 1608.349 98.092 1608.909 94.095 C 1607.555 89.63 1602.92 89.748 1601.842 86.964 C 1601.525 85.194 1602.862 83.417 1604.26 82.491 L 1604.725 80.194 C 1604.398 78.966 1603.678 77.549 1602.865 76.568 L 1600.913 75.601 C 1600.065 74.741 1599.372 72.926 1599.332 71.734 C 1598.708 70.743 1597.119 69.686 1595.985 69.436 C 1595.095 68.537 1594.317 66.936 1594.125 65.689 C 1593.093 64.844 1590.783 64.687 1589.57 65.085 C 1588.101 63.964 1580.594 59.362 1579.062 58.8 C 1576.898 58.005 1574.656 58.351 1572.461 57.107 C 1571.143 56.36 1570.225 55.38 1568.556 55.294 C 1567.768 55.254 1566.833 55.697 1566.046 55.657 C 1563.19 55.511 1560.218 53.556 1557.399 52.998 C 1556.309 53.706 1554.166 53.891 1552.935 53.602 C 1549.655 49.898 1522.198 49.369 1516.766 50.338 C 1510.995 51.369 1505.394 55.212 1499.657 55.899 C 1498.821 56.943 1497.714 57.697 1496.869 58.679 L 1496.124 59.807 C 1495.979 60.027 1495.859 60.131 1495.753 60.371 C 1495.006 62.058 1494.773 63.307 1493.707 64.924 L 1492.963 66.052 C 1492.365 67.754 1492.89 69.689 1492.591 71.371 C 1492.481 71.995 1491.912 72.677 1491.754 73.305 C 1490.886 76.787 1492.578 79.935 1494.544 82.733 Z ",fillRule:"evenodd",fill:"rgb(1,174,151)",key:1}),n.createElement("path",{d:" M 1229.321 157.963 C 1234.357 159.575 1239.101 153.666 1244.353 154.143 C 1249.469 158.848 1255.348 154.038 1260.853 155.025 C 1266.853 159.786 1269.625 157.523 1276.222 157.523 C 1279.678 157.523 1283.173 158.111 1286.695 158.111 C 1294.88 158.111 1304.546 156.196 1306.961 166.142 C 1307.55 168.563 1308.145 170.698 1307.865 173.243 L 1309.561 174.859 C 1319.794 176.721 1325.764 160.385 1333.746 158.257 C 1335.057 157.909 1350.225 158.325 1351.602 158.698 C 1357.735 160.359 1359.779 163.102 1367.423 162.517 C 1368.234 163.671 1370.328 164.766 1371.718 164.869 C 1376.001 163.39 1381.765 163.568 1386.297 163.693 C 1387.939 162.246 1392.201 158.641 1393.416 157.376 C 1394.136 155.838 1394.185 153.088 1393.642 151.499 C 1391.622 149.876 1391.093 147.344 1389.348 145.623 C 1388.15 144.442 1386.381 144.037 1385.053 143.125 C 1382.91 141.655 1382.373 139.1 1379.854 137.983 C 1374.032 135.399 1368.426 139.115 1362.677 138.423 C 1359.404 138.03 1354.753 137.194 1351.828 135.633 C 1350.462 134.904 1349.132 133.567 1347.533 133.282 C 1346.485 133.095 1345.213 133.41 1344.143 133.282 C 1335.883 132.287 1332.183 129.136 1326.286 124.026 C 1325.078 122.979 1324.12 121.57 1322.557 120.941 C 1320.802 120.234 1319.096 120.258 1317.358 119.178 C 1316.003 117.17 1314.694 115.095 1313.742 112.86 L 1311.369 111.684 C 1301.097 114.716 1300.583 103.09 1291.817 105.514 C 1290.109 102.507 1287.808 98.679 1284.924 96.7 C 1275.839 90.466 1256.395 83.917 1245.483 82.008 C 1239.204 80.909 1234.487 83.881 1228.192 81.714 C 1226.373 82.052 1224.847 83.256 1223.219 83.624 C 1221.405 84.033 1219.248 83.19 1217.455 83.33 C 1209.516 83.95 1201.115 91.536 1196.209 97.14 C 1194.8 98.75 1195.652 110.675 1196.661 113.007 C 1197.31 114.508 1198.725 115.674 1199.148 117.415 C 1199.646 119.468 1198.99 121.579 1199.148 123.585 C 1199.42 127.028 1201.72 127.376 1202.877 130.05 C 1204.421 133.619 1203.854 136.448 1206.606 139.893 C 1208.754 142.583 1212.124 143.497 1214.404 145.77 C 1214.94 146.303 1215.218 147.304 1215.761 147.826 C 1218.449 150.418 1223.319 151.434 1226.157 154.292 C 1227.312 155.453 1227.946 156.888 1229.321 157.963 Z ",fillRule:"evenodd",fill:"rgb(1,174,151)",key:2})]))}i.defaultProps={style:{isolation:"isolate"},viewBox:"1195.467 49.913 413.442 237.816",width:"413.442pt",height:"237.816pt"},e.exports=i,i.default=i},t5hz:function(e,t,a){var n=a("q1tI");function i(e){return n.createElement("svg",e,n.createElement("g",null,n.createElement("path",{d:" M 933.912 251.37 C 934.789 249.984 935.387 248.474 935.455 246.697 C 935.654 241.484 936.874 236.508 940.742 233.362 C 945.53 229.467 945.865 222.294 951.771 219.789 C 957.482 217.366 963.635 216.017 968.697 212.401 C 974.859 208 982.184 215.127 988.982 213.102 C 993.543 211.743 998.382 204.915 1003.085 209.503 C 1008.561 214.845 1009.833 205 1003.977 205.722 C 998.544 206.392 993.072 202.101 987.832 204.21 C 981.29 206.844 973.922 207.971 967.26 204.591 C 962.212 202.029 955.504 203.082 952.113 198.401 C 949.053 194.177 941.956 195.929 936.752 195.406 C 929.978 194.725 921.941 196.668 916.488 191.473 C 911.697 186.909 905.608 189.807 900.333 188.373 C 894.515 186.791 889.008 184.882 883.268 183.499 C 877.397 182.086 876.843 174.611 874.083 169.949 C 869.972 163.005 861.069 161.402 854.851 156.757 C 849.9 153.058 851.848 146.283 847.839 142.295 C 842.875 137.357 835.502 134.652 832.626 128.122 C 830.227 122.677 823.713 121.601 818.819 119.246 C 813.82 116.84 809.032 111.503 803.029 113.578 C 791.909 117.423 780.303 117.207 769.069 119.73 C 763.015 121.09 757.009 123.324 750.723 122.729 C 744.72 122.16 738.716 118.498 732.861 121.44 C 726.215 124.779 720.37 129.426 713.838 132.919 C 706.061 137.077 696.553 136.418 688.202 139.283 C 681.407 141.613 674.387 141.005 668.243 138.103 C 659.571 134.007 650.167 137.048 641.703 133.419 C 636.197 131.058 633.918 122.952 627.184 122.767 C 620.359 122.58 613.376 121.663 608.937 116.655 C 604.268 111.388 599.57 106.376 595.637 100.617 C 592.029 95.333 588.235 90.879 584.054 86.512 C 581.012 83.334 577.835 78.079 572.729 79.723 C 566.142 81.845 560.838 76.438 554.574 77.224 C 547.97 78.052 545.87 85.74 541.631 90.029 C 538.055 93.647 533.347 96.013 530.162 100.002 C 524.177 107.498 516.02 112.807 510.479 120.645 C 506.747 125.923 502.019 129.824 496.822 133.176 C 491.25 136.77 494.955 144.801 500.394 145.609 C 506.339 146.493 507.319 154.398 508.451 159.673 C 509.644 165.233 511.199 170.61 511.22 176.204 C 511.243 182.786 517.217 186.513 520.758 191.173 C 524.392 195.955 527.464 200.886 531.987 204.616 C 537.294 208.994 537.823 216.299 543.21 220.276 C 547.338 223.323 552.341 224.985 556.492 228.006 C 564.479 233.821 574.18 236.83 582.803 241.653 C 588.662 244.931 594.942 247.442 600.396 251.37 L 933.912 251.37 L 933.912 251.37 Z ",fill:"rgb(1,174,151)"})))}i.defaultProps={style:{isolation:"isolate"},viewBox:"494.057 77.145 513.762 174.225"},e.exports=i,i.default=i},vNVm:function(e,t,a){"use strict";var n=a("J4zp"),i=a("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!r,i=(0,c.useRef)(),l=(0,c.useState)(!1),d=n(l,2),C=d[0],h=d[1],u=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),a||C||e&&e.tagName&&(i.current=function(e,t,a){var n=function(e){var t=e.rootMargin||"",a=s.get(t);if(a)return a;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return s.set(t,a={id:t,observer:i,elements:n}),a}(a),i=n.id,c=n.observer,o=n.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[a,t,C]);return(0,c.useEffect)((function(){r||C||(0,o.default)((function(){return h(!0)}))}),[C]),[u,C]};var c=a("q1tI"),o=i(a("0G5g")),r="undefined"!==typeof IntersectionObserver;var s=new Map}}]);