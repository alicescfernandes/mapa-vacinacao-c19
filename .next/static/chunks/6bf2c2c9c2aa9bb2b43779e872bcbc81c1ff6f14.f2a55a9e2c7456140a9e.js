(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var u,s=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!l){var t=a(h);l=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||l||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},DSFK:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("DSFK");var o=n("BsWD"),i=n("PYwp");function c(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||Object(o.a)(t,e)||Object(i.a)()}},PYwp:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},X9Eg:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=n("jiGp");function o(t){const e=(e,n,o)=>{Object(r.a)(e,{...{hashMode:!1,trackLocalhost:!1,url:location.href,domain:location.hostname,referrer:document.referrer||null,deviceWidth:window.innerWidth,apiHost:"https://plausible.io",...t},...o},n)},n=(t,n)=>{e("pageview",n,t)};return{trackEvent:e,trackPageview:n,enableAutoPageviews:()=>{const e=()=>n(),r=history.pushState;return r&&(history.pushState=function(t,n,o){r.apply(this,[t,n,o]),e()},addEventListener("popstate",e)),t&&t.hashMode&&addEventListener("hashchange",e),n(),function(){r&&(history.pushState=r,removeEventListener("popstate",e)),t&&t.hashMode&&removeEventListener("hashchange",e)}},enableAutoOutboundTracking:(t=document,n={subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]})=>{function r(t){e("Outbound Link: Click",{props:{url:this.href}}),setTimeout((()=>{location.href=this.href}),150),t.preventDefault()}const o=new Set;function i(t){t instanceof HTMLAnchorElement?t.host!==location.host&&(t.addEventListener("click",r),o.add(t)):"querySelectorAll"in t&&t.querySelectorAll("a").forEach(i)}function c(t){t instanceof HTMLAnchorElement?(t.removeEventListener("click",r),o.delete(t)):"querySelectorAll"in t&&t.querySelectorAll("a").forEach(c)}const a=new MutationObserver((t=>{t.forEach((t=>{"attributes"===t.type?(c(t.target),i(t.target)):"childList"===t.type&&(t.addedNodes.forEach(i),t.removedNodes.forEach(c))}))}));return t.querySelectorAll("a").forEach(i),a.observe(t,n),function(){o.forEach((t=>{t.removeEventListener("click",r)})),o.clear(),a.disconnect()}}}}}).call(this,n("8oxB"))},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},bMHE:function(t,e,n){"use strict";var r=n("X9Eg");e.a=r.a},jiGp:function(t,e,n){"use strict";function r(t,e,n){const r=/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname)||"file:"===location.protocol;if(!e.trackLocalhost&&r)return console.warn("[Plausible] Ignoring event because website is running locally");const o={n:t,u:e.url,d:e.domain,r:e.referrer,w:e.deviceWidth,h:e.hashMode?1:0,p:n&&n.props?JSON.stringify(n.props):void 0},i=new XMLHttpRequest;i.open("POST",`${e.apiHost}/api/event`,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(o)),i.onreadystatechange=()=>{4===i.readyState&&n&&n.callback&&n.callback()}}n.d(e,"a",(function(){return r}))},uAdN:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("q1tI"),o=n.n(r).a.createContext("portugal")},vUet:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("wx14");var r=n("q1tI"),o=n.n(r),i=o.a.createContext({});i.Consumer,i.Provider;function c(t,e){var n=Object(r.useContext)(i);return t||n[e]||e}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}}]);