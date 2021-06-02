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

module.exports = JSON.parse("[{\"data\":\"2021-03-17\",\"total\":\"4034\",\"total_novos\":\"15\",\"ativos\":\"114\",\"ativos_var\":\"9\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3783\",\"recuperados_novos\":\"6\"},{\"data\":\"2021-03-18\",\"total\":\"4040\",\"total_novos\":\"6\",\"ativos\":\"115\",\"ativos_var\":\"1\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3788\",\"recuperados_novos\":\"5\"},{\"data\":\"2021-03-19\",\"total\":\"4049\",\"total_novos\":\"9\",\"ativos\":\"121\",\"ativos_var\":\"6\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3791\",\"recuperados_novos\":\"3\"},{\"data\":\"2021-03-20\",\"total\":\"4058\",\"total_novos\":\"9\",\"ativos\":\"129\",\"ativos_var\":\"8\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3792\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-03-21\",\"total\":\"4067\",\"total_novos\":\"9\",\"ativos\":\"111\",\"ativos_var\":\"-18\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3819\",\"recuperados_novos\":\"27\"},{\"data\":\"2021-03-22\",\"total\":\"4080\",\"total_novos\":\"13\",\"ativos\":\"124\",\"ativos_var\":\"13\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3819\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-03-23\",\"total\":\"4101\",\"total_novos\":\"21\",\"ativos\":\"128\",\"ativos_var\":\"4\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3836\",\"recuperados_novos\":\"17\"},{\"data\":\"2021-03-24\",\"total\":\"4108\",\"total_novos\":\"7\",\"ativos\":\"124\",\"ativos_var\":\"-4\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3847\",\"recuperados_novos\":\"11\"},{\"data\":\"2021-03-25\",\"total\":\"4117\",\"total_novos\":\"9\",\"ativos\":\"125\",\"ativos_var\":\"1\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3855\",\"recuperados_novos\":\"8\"},{\"data\":\"2021-03-26\",\"total\":\"4126\",\"total_novos\":\"9\",\"ativos\":\"123\",\"ativos_var\":\"-2\",\"obitos\":\"29\",\"obitos_var\":\"0\",\"recuperados\":\"3866\",\"recuperados_novos\":\"11\"},{\"data\":\"2021-03-27\",\"total\":\"4142\",\"total_novos\":\"16\",\"ativos\":\"125\",\"ativos_var\":\"2\",\"obitos\":\"30\",\"obitos_var\":\"1\",\"recuperados\":\"3879\",\"recuperados_novos\":\"13\"},{\"data\":\"2021-03-28\",\"total\":\"4149\",\"total_novos\":\"7\",\"ativos\":\"131\",\"ativos_var\":\"6\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3880\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-03-29\",\"total\":\"4158\",\"total_novos\":\"9\",\"ativos\":\"134\",\"ativos_var\":\"3\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3886\",\"recuperados_novos\":\"6\"},{\"data\":\"2021-03-30\",\"total\":\"4171\",\"total_novos\":\"13\",\"ativos\":\"129\",\"ativos_var\":\"-5\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3904\",\"recuperados_novos\":\"18\"},{\"data\":\"2021-03-31\",\"total\":\"4179\",\"total_novos\":\"8\",\"ativos\":\"131\",\"ativos_var\":\"2\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3910\",\"recuperados_novos\":\"6\"},{\"data\":\"2021-04-01\",\"total\":\"4190\",\"total_novos\":\"11\",\"ativos\":\"125\",\"ativos_var\":\"-6\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3927\",\"recuperados_novos\":\"17\"},{\"data\":\"2021-04-02\",\"total\":\"4195\",\"total_novos\":\"5\",\"ativos\":\"115\",\"ativos_var\":\"-10\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3942\",\"recuperados_novos\":\"15\"},{\"data\":\"2021-04-03\",\"total\":\"4205\",\"total_novos\":\"10\",\"ativos\":\"124\",\"ativos_var\":\"9\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3943\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-04-04\",\"total\":\"4227\",\"total_novos\":\"22\",\"ativos\":\"133\",\"ativos_var\":\"9\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3956\",\"recuperados_novos\":\"13\"},{\"data\":\"2021-04-05\",\"total\":\"4230\",\"total_novos\":\"3\",\"ativos\":\"136\",\"ativos_var\":\"3\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3956\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-04-06\",\"total\":\"4247\",\"total_novos\":\"17\",\"ativos\":\"127\",\"ativos_var\":\"-9\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3982\",\"recuperados_novos\":\"26\"},{\"data\":\"2021-04-07\",\"total\":\"4295\",\"total_novos\":\"48\",\"ativos\":\"168\",\"ativos_var\":\"41\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"3989\",\"recuperados_novos\":\"7\"},{\"data\":\"2021-04-08\",\"total\":\"4324\",\"total_novos\":\"29\",\"ativos\":\"186\",\"ativos_var\":\"18\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4000\",\"recuperados_novos\":\"11\"},{\"data\":\"2021-04-09\",\"total\":\"4355\",\"total_novos\":\"31\",\"ativos\":\"208\",\"ativos_var\":\"22\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4009\",\"recuperados_novos\":\"9\"},{\"data\":\"2021-04-10\",\"total\":\"4431\",\"total_novos\":\"76\",\"ativos\":\"264\",\"ativos_var\":\"56\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4028\",\"recuperados_novos\":\"19\"},{\"data\":\"2021-04-11\",\"total\":\"4471\",\"total_novos\":\"40\",\"ativos\":\"304\",\"ativos_var\":\"40\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4028\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-04-12\",\"total\":\"4498\",\"total_novos\":\"27\",\"ativos\":\"330\",\"ativos_var\":\"27\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4028\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-04-13\",\"total\":\"4515\",\"total_novos\":\"17\",\"ativos\":\"326\",\"ativos_var\":\"-4\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4048\",\"recuperados_novos\":\"20\"},{\"data\":\"2021-04-14\",\"total\":\"4549\",\"total_novos\":\"34\",\"ativos\":\"343\",\"ativos_var\":\"17\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4065\",\"recuperados_novos\":\"17\"},{\"data\":\"2021-04-15\",\"total\":\"4575\",\"total_novos\":\"26\",\"ativos\":\"360\",\"ativos_var\":\"17\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4074\",\"recuperados_novos\":\"9\"},{\"data\":\"2021-04-16\",\"total\":\"4614\",\"total_novos\":\"39\",\"ativos\":\"391\",\"ativos_var\":\"31\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4082\",\"recuperados_novos\":\"8\"},{\"data\":\"2021-04-17\",\"total\":\"4645\",\"total_novos\":\"31\",\"ativos\":\"377\",\"ativos_var\":\"-14\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4118\",\"recuperados_novos\":\"36\"},{\"data\":\"2021-04-18\",\"total\":\"4678\",\"total_novos\":\"33\",\"ativos\":\"388\",\"ativos_var\":\"11\",\"obitos\":\"30\",\"obitos_var\":\"0\",\"recuperados\":\"4140\",\"recuperados_novos\":\"22\"},{\"data\":\"2021-04-19\",\"total\":\"4687\",\"total_novos\":\"9\",\"ativos\":\"362\",\"ativos_var\":\"-26\",\"obitos\":\"31\",\"obitos_var\":\"1\",\"recuperados\":\"4175\",\"recuperados_novos\":\"35\"},{\"data\":\"2021-04-20\",\"total\":\"4708\",\"total_novos\":\"21\",\"ativos\":\"315\",\"ativos_var\":\"-47\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4242\",\"recuperados_novos\":\"67\"},{\"data\":\"2021-04-21\",\"total\":\"4730\",\"total_novos\":\"22\",\"ativos\":\"315\",\"ativos_var\":\"0\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4264\",\"recuperados_novos\":\"22\"},{\"data\":\"2021-04-22\",\"total\":\"4755\",\"total_novos\":\"25\",\"ativos\":\"306\",\"ativos_var\":\"-9\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4298\",\"recuperados_novos\":\"34\"},{\"data\":\"2021-04-23\",\"total\":\"4772\",\"total_novos\":\"17\",\"ativos\":\"292\",\"ativos_var\":\"-14\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4328\",\"recuperados_novos\":\"30\"},{\"data\":\"2021-04-24\",\"total\":\"4786\",\"total_novos\":\"14\",\"ativos\":\"279\",\"ativos_var\":\"-13\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4355\",\"recuperados_novos\":\"27\"},{\"data\":\"2021-04-25\",\"total\":\"4802\",\"total_novos\":\"16\",\"ativos\":\"265\",\"ativos_var\":\"-14\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4385\",\"recuperados_novos\":\"30\"},{\"data\":\"2021-04-26\",\"total\":\"4823\",\"total_novos\":\"21\",\"ativos\":\"284\",\"ativos_var\":\"19\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4387\",\"recuperados_novos\":\"2\"},{\"data\":\"2021-04-27\",\"total\":\"4837\",\"total_novos\":\"14\",\"ativos\":\"227\",\"ativos_var\":\"-57\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4458\",\"recuperados_novos\":\"71\"},{\"data\":\"2021-04-28\",\"total\":\"4863\",\"total_novos\":\"26\",\"ativos\":\"227\",\"ativos_var\":\"0\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4484\",\"recuperados_novos\":\"26\"},{\"data\":\"2021-04-29\",\"total\":\"4878\",\"total_novos\":\"15\",\"ativos\":\"228\",\"ativos_var\":\"1\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4498\",\"recuperados_novos\":\"14\"},{\"data\":\"2021-04-29\",\"total\":\"4893\",\"total_novos\":\"15\",\"ativos\":\"220\",\"ativos_var\":\"-8\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4521\",\"recuperados_novos\":\"23\"},{\"data\":\"2021-05-01\",\"total\":\"4903\",\"total_novos\":\"10\",\"ativos\":\"199\",\"ativos_var\":\"-21\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4552\",\"recuperados_novos\":\"31\"},{\"data\":\"2021-05-02\",\"total\":\"4922\",\"total_novos\":\"19\",\"ativos\":\"215\",\"ativos_var\":\"16\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4554\",\"recuperados_novos\":\"2\"},{\"data\":\"2021-05-03\",\"total\":\"4930\",\"total_novos\":\"8\",\"ativos\":\"195\",\"ativos_var\":\"-20\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4582\",\"recuperados_novos\":\"28\"},{\"data\":\"2021-05-04\",\"total\":\"4946\",\"total_novos\":\"16\",\"ativos\":\"191\",\"ativos_var\":\"-4\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4602\",\"recuperados_novos\":\"20\"},{\"data\":\"2021-05-05\",\"total\":\"4964\",\"total_novos\":\"18\",\"ativos\":\"188\",\"ativos_var\":\"-3\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4623\",\"recuperados_novos\":\"21\"},{\"data\":\"2021-05-06\",\"total\":\"4981\",\"total_novos\":\"17\",\"ativos\":\"174\",\"ativos_var\":\"-14\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4654\",\"recuperados_novos\":\"31\"},{\"data\":\"2021-05-07\",\"total\":\"4999\",\"total_novos\":\"18\",\"ativos\":\"183\",\"ativos_var\":\"9\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4663\",\"recuperados_novos\":\"9\"},{\"data\":\"2021-05-08\",\"total\":\"5026\",\"total_novos\":\"27\",\"ativos\":\"185\",\"ativos_var\":\"2\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4688\",\"recuperados_novos\":\"25\"},{\"data\":\"2021-05-09\",\"total\":\"5042\",\"total_novos\":\"16\",\"ativos\":\"185\",\"ativos_var\":\"0\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4704\",\"recuperados_novos\":\"16\"},{\"data\":\"2021-05-10\",\"total\":\"5052\",\"total_novos\":\"10\",\"ativos\":\"195\",\"ativos_var\":\"10\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4704\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-05-11\",\"total\":\"5085\",\"total_novos\":\"33\",\"ativos\":\"212\",\"ativos_var\":\"17\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4720\",\"recuperados_novos\":\"16\"},{\"data\":\"2021-05-12\",\"total\":\"5099\",\"total_novos\":\"14\",\"ativos\":\"200\",\"ativos_var\":\"-12\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4746\",\"recuperados_novos\":\"26\"},{\"data\":\"2021-05-13\",\"total\":\"5126\",\"total_novos\":\"27\",\"ativos\":\"206\",\"ativos_var\":\"6\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4765\",\"recuperados_novos\":\"19\"},{\"data\":\"2021-05-14\",\"total\":\"5156\",\"total_novos\":\"30\",\"ativos\":\"226\",\"ativos_var\":\"20\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4773\",\"recuperados_novos\":\"8\"},{\"data\":\"2021-05-15\",\"total\":\"5183\",\"total_novos\":\"27\",\"ativos\":\"237\",\"ativos_var\":\"11\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4789\",\"recuperados_novos\":\"16\"},{\"data\":\"2021-05-16\",\"total\":\"5195\",\"total_novos\":\"12\",\"ativos\":\"228\",\"ativos_var\":\"-9\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4810\",\"recuperados_novos\":\"21\"},{\"data\":\"2021-05-17\",\"total\":\"5203\",\"total_novos\":\"8\",\"ativos\":\"235\",\"ativos_var\":\"7\",\"obitos\":\"31\",\"obitos_var\":\"0\",\"recuperados\":\"4811\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-05-18\",\"total\":\"5237\",\"total_novos\":\"34\",\"ativos\":\"246\",\"ativos_var\":\"11\",\"obitos\":\"32\",\"obitos_var\":\"1\",\"recuperados\":\"4833\",\"recuperados_novos\":\"22\"},{\"data\":\"2021-05-18\",\"total\":\"5237\",\"total_novos\":\"0\",\"ativos\":\"246\",\"ativos_var\":\"0\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4833\",\"recuperados_novos\":\"0\"},{\"data\":\"2021-05-19\",\"total\":\"5258\",\"total_novos\":\"21\",\"ativos\":\"236\",\"ativos_var\":\"-10\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4862\",\"recuperados_novos\":\"29\"},{\"data\":\"2021-05-20\",\"total\":\"5279\",\"total_novos\":\"21\",\"ativos\":\"239\",\"ativos_var\":\"3\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4880\",\"recuperados_novos\":\"18\"},{\"data\":\"2021-05-21\",\"total\":\"5305\",\"total_novos\":\"26\",\"ativos\":\"239\",\"ativos_var\":\"0\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4905\",\"recuperados_novos\":\"25\"},{\"data\":\"2021-05-22\",\"total\":\"5329\",\"total_novos\":\"24\",\"ativos\":\"245\",\"ativos_var\":\"6\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4923\",\"recuperados_novos\":\"18\"},{\"data\":\"2021-05-23\",\"total\":\"5359\",\"total_novos\":\"30\",\"ativos\":\"245\",\"ativos_var\":\"0\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4953\",\"recuperados_novos\":\"30\"},{\"data\":\"2021-05-24\",\"total\":\"5371\",\"total_novos\":\"12\",\"ativos\":\"254\",\"ativos_var\":\"9\",\"obitos\":\"32\",\"obitos_var\":\"0\",\"recuperados\":\"4954\",\"recuperados_novos\":\"1\"},{\"data\":\"2021-05-25\",\"total\":\"5404\",\"total_novos\":\"33\",\"ativos\":\"264\",\"ativos_var\":\"10\",\"obitos\":\"33\",\"obitos_var\":\"1\",\"recuperados\":\"4978\",\"recuperados_novos\":\"24\"},{\"data\":\"2021-05-26\",\"total\":\"5425\",\"total_novos\":\"21\",\"ativos\":\"257\",\"ativos_var\":\"-7\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5006\",\"recuperados_novos\":\"28\"},{\"data\":\"2021-05-27\",\"total\":\"5467\",\"total_novos\":\"42\",\"ativos\":\"285\",\"ativos_var\":\"28\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5020\",\"recuperados_novos\":\"14\"},{\"data\":\"2021-05-28\",\"total\":\"5486\",\"total_novos\":\"19\",\"ativos\":\"277\",\"ativos_var\":\"-8\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5046\",\"recuperados_novos\":\"26\"},{\"data\":\"2021-05-29\",\"total\":\"5504\",\"total_novos\":\"18\",\"ativos\":\"276\",\"ativos_var\":\"-1\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5065\",\"recuperados_novos\":\"19\"},{\"data\":\"2021-05-30\",\"total\":\"5536\",\"total_novos\":\"32\",\"ativos\":\"287\",\"ativos_var\":\"11\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5086\",\"recuperados_novos\":\"21\"},{\"data\":\"2021-05-31\",\"total\":\"5559\",\"total_novos\":\"23\",\"ativos\":\"289\",\"ativos_var\":\"2\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5107\",\"recuperados_novos\":\"21\"},{\"data\":\"2021-06-01\",\"total\":\"5578\",\"total_novos\":\"19\",\"ativos\":\"277\",\"ativos_var\":\"-12\",\"obitos\":\"33\",\"obitos_var\":\"0\",\"recuperados\":\"5138\",\"recuperados_novos\":\"31\"}]");

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