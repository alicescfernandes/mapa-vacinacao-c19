module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pFPs");


/***/ }),

/***/ "Z4us":
/***/ (function(module) {

module.exports = JSON.parse("[{\"data\":\"2021-03-17\",\"total\":\"4034\",\"total_novos\":\"15\",\"ativos\":\"114\",\"ativos_var\":\"9\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3783\",\"recuperados_novos\":\"6\"},{\"data\":\"2021-03-18\",\"total\":\"4040\",\"total_novos\":\"6\",\"ativos\":\"115\",\"ativos_var\":\"1\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3788\",\"recuperados_novos\":\"5\"},{\"data\":\"2021-03-19\",\"total\":\"4049\",\"total_novos\":\"9\",\"ativos\":\"121\",\"ativos_var\":\"6\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3791\",\"recuperados_novos\":\"3\"},{\"data\":\"2021-03-20\",\"total\":\"4058\",\"total_novos\":\"9\",\"ativos\":\"129\",\"ativos_var\":\"8\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3792\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-03-21\",\"total\":\"4067\",\"total_novos\":\"9\",\"ativos\":\"111\",\"ativos_var\":\"-18\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3819\",\"recuperados_novos\":\"27\"},{\"data\":\"2021-03-22\",\"total\":\"4080\",\"total_novos\":\"13\",\"ativos\":\"124\",\"ativos_var\":\"13\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3819\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-03-23\",\"total\":\"4101\",\"total_novos\":\"21\",\"ativos\":\"128\",\"ativos_var\":\"4\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3836\",\"recuperados_novos\":\"17\"},{\"data\":\"2021-03-24\",\"total\":\"4108\",\"total_novos\":\"7\",\"ativos\":\"124\",\"ativos_var\":\"-4\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3847\",\"recuperados_novos\":\"11\"},{\"data\":\"2021-03-25\",\"total\":\"4117\",\"total_novos\":\"9\",\"ativos\":\"125\",\"ativos_var\":\"1\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3855\",\"recuperados_novos\":\"8\"},{\"data\":\"2021-03-26\",\"total\":\"4126\",\"total_novos\":\"9\",\"ativos\":\"123\",\"ativos_var\":\"-2\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3866\",\"recuperados_novos\":\"11\"},{\"data\":\"2021-03-27\",\"total\":\"4142\",\"total_novos\":\"16\",\"ativos\":\"125\",\"ativos_var\":\"2\",\"obitos\":\"30\",\"obitos_var\":\"1\",\"recuperados\":\"3879\",\"recuperados_novos\":\"13\"},{\"data\":\"2021-03-28\",\"total\":\"4149\",\"total_novos\":\"7\",\"ativos\":\"131\",\"ativos_var\":\"6\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3880\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-03-29\",\"total\":\"4158\",\"total_novos\":\"9\",\"ativos\":\"134\",\"ativos_var\":\"3\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3886\",\"recuperados_novos\":\"6\"},{\"data\":\"2021-03-30\",\"total\":\"4171\",\"total_novos\":\"13\",\"ativos\":\"129\",\"ativos_var\":\"-5\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3904\",\"recuperados_novos\":\"18\"},{\"data\":\"2021-03-31\",\"total\":\"4179\",\"total_novos\":\"8\",\"ativos\":\"131\",\"ativos_var\":\"2\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3910\",\"recuperados_novos\":\"6\"},{\"data\":\"2021-04-01\",\"total\":\"4190\",\"total_novos\":\"11\",\"ativos\":\"125\",\"ativos_var\":\"-6\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3927\",\"recuperados_novos\":\"17\"},{\"data\":\"2021-04-02\",\"total\":\"4195\",\"total_novos\":\"5\",\"ativos\":\"115\",\"ativos_var\":\"-10\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3942\",\"recuperados_novos\":\"15\"},{\"data\":\"2021-04-03\",\"total\":\"4205\",\"total_novos\":\"10\",\"ativos\":\"124\",\"ativos_var\":\"9\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3943\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-04-04\",\"total\":\"4227\",\"total_novos\":\"22\",\"ativos\":\"133\",\"ativos_var\":\"9\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3956\",\"recuperados_novos\":\"13\"},{\"data\":\"2021-04-05\",\"total\":\"4230\",\"total_novos\":\"3\",\"ativos\":\"136\",\"ativos_var\":\"3\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3956\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-04-06\",\"total\":\"4247\",\"total_novos\":\"17\",\"ativos\":\"127\",\"ativos_var\":\"-9\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3982\",\"recuperados_novos\":\"26\"},{\"data\":\"2021-04-07\",\"total\":\"4295\",\"total_novos\":\"48\",\"ativos\":\"168\",\"ativos_var\":\"41\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3989\",\"recuperados_novos\":\"7\"},{\"data\":\"2021-04-08\",\"total\":\"4324\",\"total_novos\":\"29\",\"ativos\":\"186\",\"ativos_var\":\"18\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4000\",\"recuperados_novos\":\"11\"}]");

/***/ }),

/***/ "pFPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data_acores_pds_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Z4us");
var _data_acores_pds_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("Z4us", 1);

async function handler(req, res) {
  res.statusCode = 200;
  res.json(_data_acores_pds_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ })

/******/ });