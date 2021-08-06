module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		29: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"141fca9ef9ad4347ff69","1":"4dfbbc3cd52a402ba87e","2":"8743f2623a0389b29dd4","3":"f225f77b2cb9c8bde28d","4":"00cab8913d764e629459","5":"badf962bbbf91e7dd1e8","6":"29b4fa76f1a6a244ef87","7":"e5c9912b680de808f62c","8":"1849f14c005786c6af7a","9":"26ba845c4aefa0341463"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jrQc");


/***/ }),

/***/ "jrQc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
const regioes = {
  continente: 'rt_continente.json',
  nacional: 'rt_nacional.json',
  alentejo: 'rt_alentejo.json',
  algarve: 'rt_algarve.json',
  lvt: 'rt_lvt.json',
  madeira: 'rt_ram.json',
  centro: 'rt_centro.json',
  norte: 'rt_norte.json',
  acores: 'rt_raa.json',
  todas: 'rt_todas.json'
};
async function handler(req, res) {
  const {
    regiao
  } = req.query;

  if (!regiao || !(regiao in regioes)) {
    res.statusCode = 404;
    res.end();
  }

  let data = await __webpack_require__("lN6R")(`./${regioes[regiao]}`);
  res.end(JSON.stringify(data.default));
}

/***/ }),

/***/ "lN6R":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./rt_alentejo": [
		"MqY5",
		0
	],
	"./rt_alentejo.json": [
		"MqY5",
		0
	],
	"./rt_algarve": [
		"j6kF",
		1
	],
	"./rt_algarve.json": [
		"j6kF",
		1
	],
	"./rt_centro": [
		"cFKF",
		2
	],
	"./rt_centro.json": [
		"cFKF",
		2
	],
	"./rt_continente": [
		"9Xo1",
		3
	],
	"./rt_continente.json": [
		"9Xo1",
		3
	],
	"./rt_lvt": [
		"mwjs",
		4
	],
	"./rt_lvt.json": [
		"mwjs",
		4
	],
	"./rt_nacional": [
		"7Qq5",
		5
	],
	"./rt_nacional.json": [
		"7Qq5",
		5
	],
	"./rt_norte": [
		"l9UX",
		6
	],
	"./rt_norte.json": [
		"l9UX",
		6
	],
	"./rt_raa": [
		"2rsY",
		7
	],
	"./rt_raa.json": [
		"2rsY",
		7
	],
	"./rt_ram": [
		"7HNt",
		8
	],
	"./rt_ram.json": [
		"7HNt",
		8
	],
	"./rt_todas": [
		"Js8a",
		9
	],
	"./rt_todas.json": [
		"Js8a",
		9
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "lN6R";
module.exports = webpackAsyncContext;

/***/ })

/******/ });