(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"7vrA":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),c=a("TSYQ"),r=a.n(c),o=a("q1tI"),s=a.n(o),l=a("vUet"),d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.fluid,o=e.as,d=void 0===o?"div":o,u=e.className,f=Object(i.a)(e,["bsPrefix","fluid","as","className"]),h=Object(l.a)(a,"container"),j="string"===typeof c?"-"+c:"-fluid";return s.a.createElement(d,Object(n.a)({ref:t},f,{className:r()(u,c?""+h+j:h)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},Cgje:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a("nKUr"),i=a("YFqc"),c=a.n(i),r=a("q1tI"),o=a("7vrA"),s=a("uAdN"),l=a("OXQD"),d=a.n(l),u={apiKey:"AIzaSyBcHZc1Rk5CeJDkwwaBOdCzYgdA6V5WK3g",authDomain:"covid19-249f1.firebaseapp.com",projectId:"covid19-249f1",storageBucket:"covid19-249f1.appspot.com",messagingSenderId:"636238011730",appId:"1:636238011730:web:bf4a0deef86c884c3b6e8b",measurementId:"G-DYYRVR03RS"};function f(e){var t=e.children;function a(e){0===firebase.apps.length&&firebase.initializeApp(u);var t=firebase.messaging();t.getToken({vapidKey:"BHtOyn7DJeWzTT1uCITnVOzCpFI4jyOGNo_NQCKoJktP56tHqSVCPtyn99tgpWPRsWzRTu07ahM6fjljP_01K3g"}).then((function(t,a,n){console.log(a,n),t?fetch("/api/messaging/register",{method:"POST",body:JSON.stringify({fcm_token:t}),headers:{"content-type":"application/json"}}).then((function(t){console.log(t.status),null===e||void 0===e||e()})):console.log("No registration token available. Request permission to generate one.")})).catch((function(e){alert("N\xe3o conseguimos ativar as notifica\xe7\xf5es. Certifique-se que n\xe3o est\xe3o bloqueadas para este site ou tente mais tarde.")})),t.onMessage((function(e){new Notification(e.notification.title,{body:e.notification.body,icon:"/android-icon-192x192.png"})}))}return Object(r.useEffect)((function(){"granted"===Notification.permission&&a()}),[]),Object(n.jsxs)("span",{onClick:function(){"granted"!==Notification.permission?a((function(){new Notification("Vacina\xe7\xe3o COVID-19",{body:"Subscreveste \xe0s nossas notifica\xe7\xf5es di\xe1rias com os dados das vacinas",icon:"/android-icon-192x192.png"})})):alert("J\xe1 recebes as nossas notifica\xe7\xf5es")},children:[t," "]})}var h=a("t5hz"),j=a.n(h),b=a("mYdt"),p=a.n(b);function C(){var e=Object(r.useContext)(s.a),t={portugal:{nome:"",tagline:"Dados atualizados diariamente entre as 13h e as 14h"},madeira:{nome:" - Madeira",tagline:"Dados atualizados semanalmente"},acores:{nome:" - A\xe7ores",tagline:""}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{className:"".concat(d.a.header," card-shadow"),children:Object(n.jsxs)(o.a,{className:d.a.content,children:[Object(n.jsxs)("div",{className:d.a.logo,children:[Object(n.jsxs)("h1",{children:["vacina\xe7\xe3o COVID 19 ",t[e].nome," "]}),Object(n.jsx)("p",{children:t[e].tagline})]}),Object(n.jsx)("nav",{className:"".concat(d.a.nav," ").concat(d.a.hide_mobile),children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/",children:Object(n.jsx)("a",{className:"portugal"===e?d.a.highlight:"",children:"Portugal"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/madeira",children:Object(n.jsx)("a",{className:"madeira"===e?d.a.highlight:"",children:"Madeira"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(f,{children:Object(n.jsx)("a",{href:"#",children:"Notifica\xe7\xf5es"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://twitter.com/vacinacaocovid1",children:"Twitter"})})]})})]})}),Object(n.jsx)("header",{className:"".concat(d.a.header," ").concat(d.a.header_mobile," card-shadow"),children:Object(n.jsx)(o.a,{className:d.a.content,children:Object(n.jsx)("nav",{className:"".concat(d.a.nav,"  ").concat(d.a.hide_mobile),children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/",children:Object(n.jsxs)("a",{className:"portugal"===e?d.a.highlight:"",children:[Object(n.jsx)("span",{children:Object(n.jsx)(p.a,{height:30})}),Object(n.jsx)("span",{children:"Portugal"})]})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/madeira",children:Object(n.jsxs)("a",{className:"madeira"===e?d.a.highlight:"",children:[Object(n.jsx)("span",{children:Object(n.jsx)(j.a,{height:25})}),Object(n.jsx)("span",{children:"Madeira"})]})})})]})})})}),Object(n.jsx)("div",{className:"".concat(d.a.submenu),children:Object(n.jsx)(o.a,{className:d.a.content,children:Object(n.jsx)("nav",{className:d.a.nav,children:Object(n.jsxs)("ul",{children:["portugal"===e&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19estamoson.gov.pt/vacinacao-covid19/",children:"Fases de Vacina\xe7\xe3o"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/vacinacao/",children:"Fa\xe7o parte das listas de vacina\xe7\xe3o?"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://pandemiaclara.sapo.pt/plano-de-vacinacao",children:"Quando posso ser vacinado?"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/relatorio-de-vacinacao/",children:"Relat\xf3rios de Vacina\xe7\xe3o"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/",children:"Ponto de Situa\xe7\xe3o"})})]}),"madeira"===e&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/",children:"Sit\xedo oficial - Dire\xe7\xe3o Regional de Sa\xfade"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{target:"_blank",href:"https://covidmadeira.pt/ponto-de-situacao/",children:"Ponto de Situa\xe7\xe3o"})})]})]})})})})]})}},OXQD:function(e,t,a){e.exports={header:"Header_header__3Z-q0",submenu:"Header_submenu__y6vbr",header_mobile:"Header_header_mobile__3F0A4",submenu_mobile:"Header_submenu_mobile__2NpLk",content:"Header_content__3--fg",highlight:"Header_highlight__Drolj",logo:"Header_logo__2UB2g",hide_mobile:"Header_hide_mobile__2Rzv1"}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("J4zp"),i=a("284h");t.__esModule=!0,t.default=void 0;var c=i(a("q1tI")),r=a("elyg"),o=a("nOHt"),s=a("vNVm"),l={};function d(e,t,a,n){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,a,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+a+(i?"%"+i:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,a=(0,o.useRouter)(),i=a&&a.pathname||"/",u=c.default.useMemo((function(){var t=(0,r.resolveHref)(i,e.href,!0),a=n(t,2),c=a[0],o=a[1];return{href:c,as:e.as?(0,r.resolveHref)(i,e.as):o||c}}),[i,e.href,e.as]),f=u.href,h=u.as,j=e.children,b=e.replace,p=e.shallow,C=e.scroll,m=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var g=c.Children.only(j),v=g&&"object"===typeof g&&g.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),x=n(O,2),_=x[0],y=x[1],N=c.default.useCallback((function(e){_(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,_]);(0,c.useEffect)((function(){var e=y&&t&&(0,r.isLocalURL)(f),n="undefined"!==typeof m?m:a&&a.locale,i=l[f+"%"+h+(n?"%"+n:"")];e&&!i&&d(a,f,h,{locale:n})}),[h,f,y,m,t,a]);var w={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,a,n,i,c,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(a))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[i?"replace":"push"](a,n,{shallow:c,locale:s,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,a,f,h,b,p,C,m)},onMouseEnter:function(e){(0,r.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(a,f,h,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof m?m:a&&a.locale,E=(0,r.getDomainLocale)(h,k,a&&a.locales,a&&a.domainLocales);w.href=E||(0,r.addBasePath)((0,r.addLocale)(h,k,a&&a.defaultLocale))}return c.default.cloneElement(g,w)};t.default=u},mYdt:function(e,t,a){var n=a("q1tI");function i(e){return n.createElement("svg",e,n.createElement("g",null,n.createElement("path",{d:" M 246.163 251.37 C 247.002 239.858 240.408 217.275 244.939 209.079 C 247.577 203.145 239.37 189.262 232.409 176.45 C 230.37 169.512 243.032 174.579 246.807 169.291 C 254.603 163.375 252.37 158.45 257.215 151.138 C 260.952 144.892 267.62 143.825 274.28 139.412 C 281.094 134.901 292.245 125.2 302.016 116.482 C 307.292 111.53 307.682 105.762 312.186 98.029 C 314.057 93.637 319.682 84.012 314.495 80.45 C 304.432 74.512 283.053 69.915 279.495 67.45 C 275.745 62.825 279.37 42.325 277.058 35.242 C 275.87 24.7 268.995 26.825 266.008 31.037 C 256.429 35.775 246.041 28.495 239.498 27.761 C 226.133 24.882 205.833 19.75 202.201 26.506 C 201.958 31.703 205.329 38.799 197.864 41.647 C 191.533 47.445 190.37 46.95 181.495 46.45 C 173.62 44.45 175.559 41.393 167.27 39.551 C 145.745 41.2 133.245 37.7 119.495 35.634 C 105.826 35.634 107.675 51.986 97.525 52.067 C 87.78 51.249 81.332 37.985 81.79 32.435 C 84.648 25.09 93.557 22.881 96.04 16.574 C 96.854 3.832 80.469 17.601 83.364 4.723 C 84.507 -2.836 80.718 0.765 76.482 1.503 C 67.702 8.987 56.406 7.826 45.576 9.562 C 35.916 11.281 32.407 12.135 25.79 18.182 C 19.935 24.147 11.053 32.435 11.053 32.435 C 5.62 37.316 0.908 45.006 0 53.551 C 1.23 63.166 8.376 69.695 8.22 78.214 C 8.948 84.239 11.936 93.495 11.79 93.342 C 12.288 100.038 13.861 105.194 14.001 111.807 C 16.631 122.24 19.218 133.549 20.411 145.057 C 20.486 151.43 29.083 168.036 28.551 173.233 C 26.362 192.493 21.888 208.888 16.948 227.721 C 15.889 230.216 17.27 229.525 16.996 231.152 C 15.031 237.778 13.46 244.554 11.969 251.37 L 246.163 251.37 L 246.163 251.37 Z ",fill:"rgb(1,174,151)"})))}i.defaultProps={style:{isolation:"isolate"},viewBox:"0 0 316.638 251.37"},e.exports=i,i.default=i},t5hz:function(e,t,a){var n=a("q1tI");function i(e){return n.createElement("svg",e,n.createElement("g",null,n.createElement("path",{d:" M 933.912 251.37 C 934.789 249.984 935.387 248.474 935.455 246.697 C 935.654 241.484 936.874 236.508 940.742 233.362 C 945.53 229.467 945.865 222.294 951.771 219.789 C 957.482 217.366 963.635 216.017 968.697 212.401 C 974.859 208 982.184 215.127 988.982 213.102 C 993.543 211.743 998.382 204.915 1003.085 209.503 C 1008.561 214.845 1009.833 205 1003.977 205.722 C 998.544 206.392 993.072 202.101 987.832 204.21 C 981.29 206.844 973.922 207.971 967.26 204.591 C 962.212 202.029 955.504 203.082 952.113 198.401 C 949.053 194.177 941.956 195.929 936.752 195.406 C 929.978 194.725 921.941 196.668 916.488 191.473 C 911.697 186.909 905.608 189.807 900.333 188.373 C 894.515 186.791 889.008 184.882 883.268 183.499 C 877.397 182.086 876.843 174.611 874.083 169.949 C 869.972 163.005 861.069 161.402 854.851 156.757 C 849.9 153.058 851.848 146.283 847.839 142.295 C 842.875 137.357 835.502 134.652 832.626 128.122 C 830.227 122.677 823.713 121.601 818.819 119.246 C 813.82 116.84 809.032 111.503 803.029 113.578 C 791.909 117.423 780.303 117.207 769.069 119.73 C 763.015 121.09 757.009 123.324 750.723 122.729 C 744.72 122.16 738.716 118.498 732.861 121.44 C 726.215 124.779 720.37 129.426 713.838 132.919 C 706.061 137.077 696.553 136.418 688.202 139.283 C 681.407 141.613 674.387 141.005 668.243 138.103 C 659.571 134.007 650.167 137.048 641.703 133.419 C 636.197 131.058 633.918 122.952 627.184 122.767 C 620.359 122.58 613.376 121.663 608.937 116.655 C 604.268 111.388 599.57 106.376 595.637 100.617 C 592.029 95.333 588.235 90.879 584.054 86.512 C 581.012 83.334 577.835 78.079 572.729 79.723 C 566.142 81.845 560.838 76.438 554.574 77.224 C 547.97 78.052 545.87 85.74 541.631 90.029 C 538.055 93.647 533.347 96.013 530.162 100.002 C 524.177 107.498 516.02 112.807 510.479 120.645 C 506.747 125.923 502.019 129.824 496.822 133.176 C 491.25 136.77 494.955 144.801 500.394 145.609 C 506.339 146.493 507.319 154.398 508.451 159.673 C 509.644 165.233 511.199 170.61 511.22 176.204 C 511.243 182.786 517.217 186.513 520.758 191.173 C 524.392 195.955 527.464 200.886 531.987 204.616 C 537.294 208.994 537.823 216.299 543.21 220.276 C 547.338 223.323 552.341 224.985 556.492 228.006 C 564.479 233.821 574.18 236.83 582.803 241.653 C 588.662 244.931 594.942 247.442 600.396 251.37 L 933.912 251.37 L 933.912 251.37 Z ",fill:"rgb(1,174,151)"})))}i.defaultProps={style:{isolation:"isolate"},viewBox:"494.057 77.145 513.762 174.225"},e.exports=i,i.default=i},vNVm:function(e,t,a){"use strict";var n=a("J4zp"),i=a("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!o,i=(0,c.useRef)(),l=(0,c.useState)(!1),d=n(l,2),u=d[0],f=d[1],h=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),a||u||e&&e.tagName&&(i.current=function(e,t,a){var n=function(e){var t=e.rootMargin||"",a=s.get(t);if(a)return a;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return s.set(t,a={id:t,observer:i,elements:n}),a}(a),i=n.id,c=n.observer,r=n.elements;return r.set(e,t),c.observe(e),function(){r.delete(e),c.unobserve(e),0===r.size&&(c.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[a,t,u]);return(0,c.useEffect)((function(){o||u||(0,r.default)((function(){return f(!0)}))}),[u]),[h,u]};var c=a("q1tI"),r=i(a("0G5g")),o="undefined"!==typeof IntersectionObserver;var s=new Map}}]);