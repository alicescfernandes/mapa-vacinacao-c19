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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+iA2":
/***/ (function(module) {

module.exports = JSON.parse("[{\"data\":\"2021-03-13\",\"total\":\"7835\",\"total_novos\":\"40\",\"recuperados\":\"7070\",\"recuperados_novos\":\"40\",\"obitos\":\"67\",\"obitos_var\":\"0\",\"ativos\":\"698\",\"ativos_var\":\"-10\"},{\"data\":\"2021-03-14\",\"total\":\"7878\",\"total_novos\":\"43\",\"recuperados\":\"7117\",\"recuperados_novos\":\"47\",\"obitos\":\"67\",\"obitos_var\":\"0\",\"ativos\":\"694\",\"ativos_var\":\"-4\"},{\"data\":\"2021-03-15\",\"total\":\"7901\",\"total_novos\":\"23\",\"recuperados\":\"7175\",\"recuperados_novos\":\"58\",\"obitos\":\"67\",\"obitos_var\":\"0\",\"ativos\":\"659\",\"ativos_var\":\"-35\"},{\"data\":\"2021-03-16\",\"total\":\"7941\",\"total_novos\":\"40\",\"recuperados\":\"7223\",\"recuperados_novos\":\"48\",\"obitos\":\"67\",\"obitos_var\":\"0\",\"ativos\":\"651\",\"ativos_var\":\"-8\"},{\"data\":\"2021-03-17\",\"total\":\"7986\",\"total_novos\":\"45\",\"recuperados\":\"7257\",\"recuperados_novos\":\"34\",\"obitos\":\"67\",\"obitos_var\":\"0\",\"ativos\":\"662\",\"ativos_var\":\"11\"},{\"data\":\"2021-03-18\",\"total\":\"8021\",\"total_novos\":\"35\",\"recuperados\":\"7298\",\"recuperados_novos\":\"41\",\"obitos\":\"67\",\"obitos_var\":\"0\",\"ativos\":\"656\",\"ativos_var\":\"-6\"},{\"data\":\"2021-03-19\",\"total\":\"8047\",\"total_novos\":\"26\",\"recuperados\":\"7356\",\"recuperados_novos\":\"58\",\"obitos\":\"68\",\"obitos_var\":\"1\",\"ativos\":\"623\",\"ativos_var\":\"-33\"},{\"data\":\"2021-03-20\",\"total\":\"8076\",\"total_novos\":\"29\",\"recuperados\":\"7408\",\"recuperados_novos\":\"52\",\"obitos\":\"68\",\"obitos_var\":\"0\",\"ativos\":\"600\",\"ativos_var\":\"-23\"},{\"data\":\"2021-03-21\",\"total\":\"8105\",\"total_novos\":\"29\",\"recuperados\":\"7449\",\"recuperados_novos\":\"41\",\"obitos\":\"68\",\"obitos_var\":\"0\",\"ativos\":\"588\",\"ativos_var\":\"-12\"},{\"data\":\"2021-03-22\",\"total\":\"8128\",\"total_novos\":\"23\",\"recuperados\":\"7502\",\"recuperados_novos\":\"53\",\"obitos\":\"69\",\"obitos_var\":\"1\",\"ativos\":\"557\",\"ativos_var\":\"-31\"},{\"data\":\"2021-03-23\",\"total\":\"8162\",\"total_novos\":\"34\",\"recuperados\":\"7554\",\"recuperados_novos\":\"52\",\"obitos\":\"69\",\"obitos_var\":\"0\",\"ativos\":\"539\",\"ativos_var\":\"-18\"},{\"data\":\"2021-03-24\",\"total\":\"8185\",\"total_novos\":\"23\",\"recuperados\":\"7606\",\"recuperados_novos\":\"52\",\"obitos\":\"69\",\"obitos_var\":\"0\",\"ativos\":\"510\",\"ativos_var\":\"-29\"},{\"data\":\"2021-03-25\",\"total\":\"8214\",\"total_novos\":\"29\",\"recuperados\":\"7643\",\"recuperados_novos\":\"37\",\"obitos\":\"70\",\"obitos_var\":\"1\",\"ativos\":\"501\",\"ativos_var\":\"-9\"},{\"data\":\"2021-03-26\",\"total\":\"8245\",\"total_novos\":\"31\",\"recuperados\":\"7686\",\"recuperados_novos\":\"43\",\"obitos\":\"70\",\"obitos_var\":\"0\",\"ativos\":\"489\",\"ativos_var\":\"-9\"},{\"data\":\"2021-03-27\",\"total\":\"8286\",\"total_novos\":\"41\",\"recuperados\":\"7722\",\"recuperados_novos\":\"36\",\"obitos\":\"71\",\"obitos_var\":\"1\",\"ativos\":\"493\",\"ativos_var\":\"4\"},{\"data\":\"2021-03-28\",\"total\":\"8308\",\"total_novos\":\"22\",\"recuperados\":\"7748\",\"recuperados_novos\":\"26\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"489\",\"ativos_var\":\"-4\"},{\"data\":\"2021-03-29\",\"total\":\"8332\",\"total_novos\":\"24\",\"recuperados\":\"7783\",\"recuperados_novos\":\"35\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"478\",\"ativos_var\":\"-11\"},{\"data\":\"2021-03-30\",\"total\":\"8356\",\"total_novos\":\"24\",\"recuperados\":\"7859\",\"recuperados_novos\":\"76\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"426\",\"ativos_var\":\"-52\"},{\"data\":\"2021-03-31\",\"total\":\"8378\",\"total_novos\":\"22\",\"recuperados\":\"7896\",\"recuperados_novos\":\"37\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"411\",\"ativos_var\":\"-15\"},{\"data\":\"2021-04-01\",\"total\":\"8395\",\"total_novos\":\"17\",\"recuperados\":\"7929\",\"recuperados_novos\":\"33\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"395\",\"ativos_var\":\"-16\"},{\"data\":\"2021-04-02\",\"total\":\"8412\",\"total_novos\":\"17\",\"recuperados\":\"7961\",\"recuperados_novos\":\"32\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"380\",\"ativos_var\":\"-15\"},{\"data\":\"2021-04-03\",\"total\":\"8433\",\"total_novos\":\"21\",\"recuperados\":\"7999\",\"recuperados_novos\":\"38\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"363\",\"ativos_var\":\"-17\"},{\"data\":\"2021-04-04\",\"total\":\"8447\",\"total_novos\":\"14\",\"recuperados\":\"8016\",\"recuperados_novos\":\"17\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"360\",\"ativos_var\":\"-3\"},{\"data\":\"2021-04-05\",\"total\":\"8466\",\"total_novos\":\"19\",\"recuperados\":\"8045\",\"recuperados_novos\":\"29\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"350\",\"ativos_var\":\"-10\"},{\"data\":\"2021-04-06\",\"total\":\"8486\",\"total_novos\":\"20\",\"recuperados\":\"8073\",\"recuperados_novos\":\"28\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"342\",\"ativos_var\":\"-8\"},{\"data\":\"2021-04-07\",\"total\":\"8511\",\"total_novos\":\"25\",\"recuperados\":\"8098\",\"recuperados_novos\":\"25\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"342\",\"ativos_var\":\"0\"},{\"data\":\"2021-04-08\",\"total\":\"8535\",\"total_novos\":\"24\",\"recuperados\":\"8127\",\"recuperados_novos\":\"29\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"337\",\"ativos_var\":\"-5\"},{\"data\":\"2021-04-09\",\"total\":\"8549\",\"total_novos\":\"14\",\"recuperados\":\"8161\",\"recuperados_novos\":\"34\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"310\",\"ativos_var\":\"-27\"},{\"data\":\"2021-04-10\",\"total\":\"8575\",\"total_novos\":\"26\",\"recuperados\":\"8195\",\"recuperados_novos\":\"34\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"309\",\"ativos_var\":\"-1\"},{\"data\":\"2021-04-11\",\"total\":\"8599\",\"total_novos\":\"24\",\"recuperados\":\"8218\",\"recuperados_novos\":\"23\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"310\",\"ativos_var\":\"1\"},{\"data\":\"2021-04-12\",\"total\":\"8617\",\"total_novos\":\"18\",\"recuperados\":\"8239\",\"recuperados_novos\":\"21\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"307\",\"ativos_var\":\"-3\"},{\"data\":\"2021-04-13\",\"total\":\"8647\",\"total_novos\":\"30\",\"recuperados\":\"8268\",\"recuperados_novos\":\"29\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"308\",\"ativos_var\":\"1\"},{\"data\":\"2021-04-14\",\"total\":\"8667\",\"total_novos\":\"20\",\"recuperados\":\"8282\",\"recuperados_novos\":\"14\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"314\",\"ativos_var\":\"6\"},{\"data\":\"2021-04-15\",\"total\":\"8687\",\"total_novos\":\"20\",\"recuperados\":\"8301\",\"recuperados_novos\":\"19\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"315\",\"ativos_var\":\"1\"},{\"data\":\"2021-04-16\",\"total\":\"8701\",\"total_novos\":\"14\",\"recuperados\":\"8315\",\"recuperados_novos\":\"14\",\"obitos\":\"71\",\"obitos_var\":\"0\",\"ativos\":\"315\",\"ativos_var\":\"0\"}]");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9yB1");


/***/ }),

/***/ "9yB1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data_madeira_pds_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+iA2");
var _data_madeira_pds_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("+iA2", 1);

async function handler(req, res) {
  res.statusCode = 200;
  res.json(_data_madeira_pds_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ })

/******/ });