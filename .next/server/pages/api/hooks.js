<<<<<<< Updated upstream
(function() {
var exports = {};
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 4772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
__webpack_require__(334).config({
  path: './../.env'
});

const crypto = __webpack_require__(6417);

var shell = __webpack_require__(5524);
=======
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eRP7");


/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "bSrw":
/***/ (function(module, exports) {

module.exports = require("shelljs");

/***/ }),

/***/ "eRP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
__webpack_require__("qW5S").config({
  path: './../.env'
});

const crypto = __webpack_require__("PJMN");

var shell = __webpack_require__("bSrw");
>>>>>>> Stashed changes

const config = {
  api: {
    bodyParser: false
  }
};

const webhookPayloadParser = req => new Promise(resolve => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    resolve(Buffer.from(data).toString());
  });
});

function verifyPostData(req, res) {
  return new Promise((resolve, rej) => {
    if (!req.rawBody) {
      resolve(false);
    }

    const sig = Buffer.from(req.headers[process.env.HOOKS_HEADER_NAME] || '', 'utf8');
    const hmac = crypto.createHmac(process.env.HOOKS_SHA, process.env.HOOKS_SECRET);
    const digest = Buffer.from(process.env.HOOKS_SHA + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8');

    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      console.log(`Request body digest (${digest}) did not match ${process.env.HOOKS_HEADER_NAME} (${sig})`);
      resolve(false);
    } else {
      let json_string = decodeURIComponent(req.rawBody).split('payload=')[1];
      let json = JSON.parse(json_string);
      resolve(json.ref === 'refs/heads/compiled' ? true : false);
    }
  });
}

async function handler(req, res) {
  const data = await webhookPayloadParser(req);
  req.rawBody = data;
  let allowed = await verifyPostData(req, res);
  console.log('hook received');

  if (allowed) {
    shell.exec('echo "working" & yarn update:server &');
  } //set out to execute the command


  res.statusCode = 200;
  res.json({});
}

/***/ }),

<<<<<<< Updated upstream
/***/ 6417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 5524:
/***/ (function(module) {

"use strict";
module.exports = require("shelljs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4772));
module.exports = __webpack_exports__;

})();
=======
/***/ "qW5S":
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })

/******/ });
>>>>>>> Stashed changes
