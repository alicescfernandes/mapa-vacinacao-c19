_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),c=a.n(i),s=a("q1tI"),o=a.n(s),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.noGutters,d=e.as,f=void 0===d?"div":d,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(l.a)(a,"row"),b=p+"-cols",_=[];return u.forEach((function(e){var t,a=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&_.push(""+b+n+"-"+t)})),o.a.createElement(f,Object(n.a)({ref:t},h,{className:c.a.apply(void 0,[i,p,s&&"no-gutters"].concat(_))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"3h2D":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("q1tI"),i=s(r),c=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var o={from:c.default.number,to:c.default.number.isRequired,speed:c.default.number.isRequired,delay:c.default.number,onComplete:c.default.func,digits:c.default.number,className:c.default.string,tagName:c.default.string,children:c.default.func,easing:c.default.func},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.from;return a.state={counter:n},a.start=a.start.bind(a),a.clear=a.clear.bind(a),a.next=a.next.bind(a),a.updateCounter=a.updateCounter.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.start()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.from,n=t.to;e.to===n&&e.from===a||this.start(e)}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"start",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;this.clear();var a=t.from;this.setState({counter:a},(function(){var t=e.props,a=t.speed,n=t.delay,r=Date.now();e.endDate=r+a,e.scheduleNextUpdate(r,n),e.raf=requestAnimationFrame(e.next)}))}},{key:"next",value:function(){var e=Date.now(),t=this.props,a=t.speed,n=t.onComplete,r=t.delay;if(e>=this.nextUpdate){var i=Math.max(0,Math.min(1,1-(this.endDate-e)/a));this.updateCounter(i),this.scheduleNextUpdate(e,r)}e<this.endDate?this.raf=requestAnimationFrame(this.next):n&&n()}},{key:"scheduleNextUpdate",value:function(e,t){this.nextUpdate=Math.min(e+t,this.endDate)}},{key:"updateCounter",value:function(e){var t=this.props,a=t.from,n=a+(t.to-a)*(0,t.easing)(e);this.setState({counter:n})}},{key:"clear",value:function(){cancelAnimationFrame(this.raf)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.digits,n=e.tagName,r=e.children,c=this.state.counter.toFixed(a);return r?r(c):i.default.createElement(n,{className:t},c)}}]),t}(r.PureComponent);l.propTypes=o,l.defaultProps={from:0,delay:100,digits:0,tagName:"span",easing:function(e){return e}},t.default=l},"5PhN":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("nKUr"),r=a("UG6H"),i=a.n(r),c=a("TSYQ"),s=a.n(c);function o(e){var t=e.children,a=e.allowOverflow,r=e.isUpdating,c=e.textLeft,o={};o[i.a.card_align_left]=c,o[i.a.card_graph_updated]=r,o[i.a.card_chart]=a;var l=s()(i.a.card_graph,"card-shadow",o);return Object(n.jsx)("div",{className:i.a.container,children:Object(n.jsx)("div",{className:l,children:t})})}},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),c=a.n(i),s=a("q1tI"),o=a.n(s),l=a("vUet"),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,s=e.as,u=void 0===s?"div":s,d=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),h=Object(l.a)(a,"container"),p="string"===typeof i?"-"+i:"-fluid";return o.a.createElement(u,Object(n.a)({ref:t},f,{className:c()(d,i?""+h+p:h)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},BsWD:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("a3WO");function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},Cgje:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("nKUr"),r=a("7vrA"),i=a("OXQD"),c=a.n(i),s=a("q1tI");function o(e){var t=e.children;return Object(s.useEffect)((function(){window.OneSignal=window.OneSignal||[];var e=window.OneSignal;e.push((function(){e.init({appId:"cfd30a9a-e080-4657-851f-e5063de051c6",safari_web_id:"web.onesignal.auto.2c31ff0c-1624-4aec-8f89-a4f0b1da0ea1"}),e.getNotificationPermission().then((function(e){})),e.on("notificationDisplay",(function(e){new Notification(e.heading,{body:e.content,icon:"/android-icon-192x192.png"})})),e.on("subscriptionChange",(function(e){}))}))}),[]),Object(n.jsxs)("span",{onClick:function(){OneSignal.getNotificationPermission().then((function(e){"granted"!==e?OneSignal.showNativePrompt():alert("J\xe1 recebe as nossas notifica\xe7\xf5es")}))},children:[t," "]})}function l(){return Object(n.jsx)("header",{className:"".concat(c.a.header," card-shadow"),children:Object(n.jsxs)(r.a,{className:c.a.content,children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:c.a.logo,children:"vacina\xe7\xe3o COVID 19"})}),Object(n.jsx)("nav",{className:c.a.nav,children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o,{children:Object(n.jsx)("a",{className:c.a.highlight,href:"#",children:"Notifica\xe7\xf5es"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:c.a.highlight,target:"_blank",href:"https://twitter.com/vacinacaocovid1",children:"Twitter"})}),Object(n.jsx)("li",{className:c.a.hide_mobile,children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19estamoson.gov.pt/vacinacao-covid19/",children:"Fases de Vacina\xe7\xe3o"})}),Object(n.jsx)("li",{className:c.a.hide_mobile,children:Object(n.jsx)("a",{target:"_blank",href:"https://covid19.min-saude.pt/vacinacao/",children:"Fa\xe7o parte das listas de vacina\xe7\xe3o?"})}),Object(n.jsx)("li",{className:c.a.hide_mobile,children:Object(n.jsx)("a",{target:"_blank",href:"https://pandemiaclara.sapo.pt/plano-de-vacinacao",children:"Quando posso ser vacinado?"})})]})})]})})}},DSFK:function(e,t,a){"use strict";function n(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return n}))},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),c=a.n(i),s=a("q1tI"),o=a.n(s),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,d=void 0===s?"div":s,f=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(l.a)(a,"col"),p=[],b=[];return u.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],"object"===typeof r&&null!=r){var i=r.span;t=void 0===i||i,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+h+c:""+h+c+"-"+t),null!=n&&b.push("order"+c+"-"+n),null!=a&&b.push("offset"+c+"-"+a)})),p.length||p.push(h),o.a.createElement(d,Object(n.a)({},f,{ref:t,className:c.a.apply(void 0,[i].concat(p,b))}))}));d.displayName="Col",t.a=d},"MCc/":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("nKUr"),r=a("ODXe"),i=(a("5PhN"),a("3h2D")),c=a.n(i),s=a("UG6H"),o=a.n(s),l=a("q1tI");function u(e){var t=e.from,a=e.to,i=e.yesterday,s=e.title,u=e.subtitle,d=e.ps,f=e.colors,h=e.digits,p=e.suffix;h||(h=0);var b=new Intl.NumberFormat("en-US",{maximumFractionDigits:2}),_=a-i||0,j=Object(r.a)(f,1)[0];return Object(n.jsxs)(n.Fragment,{children:[""==s?"":Object(n.jsx)("h2",{className:o.a.card_title,children:s}),""==u?Object(n.jsx)("div",{style:{height:20}}):Object(n.jsx)("p",{className:o.a.card_subtitle,children:u}),null===a?Object(n.jsx)("span",{className:o.a.card_highlight,style:{color:j},children:"N/A"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.a,{digits:h,delay:1,from:t||0,to:a||0,speed:800,children:function(e){return Object(n.jsxs)("span",{style:{color:j},className:o.a.card_highlight,children:[b.format(e).replace(/,/gm," ")," ",p||""]})}}),Math.abs(a-i)>0?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("p",{className:o.a.card_subtitle,children:[Object(n.jsxs)("span",{style:{color:j},className:o.a.card_subtitle_highlight,children:[1==Math.sign(_)?"+":"-"," ",b.format(Math.abs(_)).replace(","," ")]}),"\xa0 que no dia anterior"]})}):"",null!=d?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{className:o.a.card_subtitle,children:d.split("\n").map((function(e,t){return Object(n.jsxs)(l.Fragment,{children:[e," ",Object(n.jsx)("br",{})]},t)}))})}):""]})]})}},ODXe:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("DSFK");var r=a("BsWD"),i=a("PYwp");function c(e,t){return Object(n.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,i=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return a}}(e,t)||Object(r.a)(e,t)||Object(i.a)()}},OXQD:function(e,t,a){e.exports={header:"Header_header__3Z-q0",content:"Header_content__3--fg",highlight:"Header_highlight__Drolj",logo:"Header_logo__2UB2g",hide_mobile:"Header_hide_mobile__2Rzv1"}},PYwp:function(e,t,a){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}a.d(t,"a",(function(){return n}))},Qetd:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===i)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},UG6H:function(e,t,a){e.exports={card:"Card_card__uZ6RZ",container:"Card_container__o0EtH",collapsed:"Card_collapsed__3u7lu",card_graph:"Card_card_graph__3Ytwc",card_checkboxes:"Card_card_checkboxes__phAHc",card_align_left:"Card_card_align_left__GpzsC",card_graph_updated:"Card_card_graph_updated__3qvEq",card_highlight:"Card_card_highlight__3nHgE",card_highlight_2:"Card_card_highlight_2__pGhlA",card_title:"Card_card_title__23exo",card_subtitle:"Card_card_subtitle__3invo",card_subtitle_highlight:"Card_card_subtitle_highlight__2aNt8",card_chart:"Card_card_chart__37hzo",card_scrollable:"Card_card_scrollable__1Eiau"}},ZzZX:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fases",function(){return a("mB1w")}])},a3WO:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},mB1w:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("nKUr"),r=a("7vrA"),i=a("3Z9Z"),c=a("JI6e"),s=(a("MCc/"),a("Cgje"));function o(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(r.a,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(c.a,{children:Object(n.jsx)("p",{children:"fases"})})})})]})}},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("wx14");var n=a("q1tI"),r=a.n(n),i=r.a.createContext({});i.Consumer,i.Provider;function c(e,t){var a=Object(n.useContext)(i);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}},[["ZzZX",0,1]]]);