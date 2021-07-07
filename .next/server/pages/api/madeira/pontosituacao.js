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

module.exports = JSON.parse("[{\"dia\":\"2020/12/16\",\"total\":1112,\"total_novos\":0,\"recuperados\":784,\"recuperados_novos\":0,\"obitos\":7,\"obitos_var\":0,\"ativos\":321,\"ativos_var\":0},{\"dia\":\"2020/12/17\",\"total\":1130,\"total_novos\":18,\"recuperados\":816,\"recuperados_novos\":32,\"obitos\":7,\"obitos_var\":0,\"ativos\":307,\"ativos_var\":-14},{\"dia\":\"2020/12/18\",\"total\":1147,\"total_novos\":17,\"recuperados\":835,\"recuperados_novos\":19,\"obitos\":8,\"obitos_var\":1,\"ativos\":304,\"ativos_var\":-3},{\"dia\":\"2020/12/19\",\"total\":1190,\"total_novos\":43,\"recuperados\":861,\"recuperados_novos\":26,\"obitos\":8,\"obitos_var\":0,\"ativos\":321,\"ativos_var\":17},{\"dia\":\"2020/12/20\",\"total\":1221,\"total_novos\":31,\"recuperados\":880,\"recuperados_novos\":19,\"obitos\":9,\"obitos_var\":1,\"ativos\":332,\"ativos_var\":11},{\"dia\":\"2020/12/21\",\"total\":1247,\"total_novos\":26,\"recuperados\":903,\"recuperados_novos\":23,\"obitos\":10,\"obitos_var\":1,\"ativos\":334,\"ativos_var\":2},{\"dia\":\"2020/12/22\",\"total\":1289,\"total_novos\":42,\"recuperados\":931,\"recuperados_novos\":28,\"obitos\":10,\"obitos_var\":0,\"ativos\":348,\"ativos_var\":14},{\"dia\":\"2020/12/23\",\"total\":1343,\"total_novos\":54,\"recuperados\":941,\"recuperados_novos\":10,\"obitos\":11,\"obitos_var\":1,\"ativos\":391,\"ativos_var\":43},{\"dia\":\"2020/12/24\",\"total\":1381,\"total_novos\":38,\"recuperados\":951,\"recuperados_novos\":10,\"obitos\":11,\"obitos_var\":0,\"ativos\":419,\"ativos_var\":28},{\"dia\":\"2020/12/25\",\"total\":1429,\"total_novos\":48,\"recuperados\":977,\"recuperados_novos\":26,\"obitos\":11,\"obitos_var\":0,\"ativos\":441,\"ativos_var\":22},{\"dia\":\"2020/12/26\",\"total\":1464,\"total_novos\":35,\"recuperados\":994,\"recuperados_novos\":17,\"obitos\":12,\"obitos_var\":1,\"ativos\":458,\"ativos_var\":17},{\"dia\":\"2020/12/27\",\"total\":1513,\"total_novos\":49,\"recuperados\":1008,\"recuperados_novos\":14,\"obitos\":12,\"obitos_var\":0,\"ativos\":493,\"ativos_var\":35},{\"dia\":\"2020/12/28\",\"total\":1560,\"total_novos\":47,\"recuperados\":1031,\"recuperados_novos\":23,\"obitos\":12,\"obitos_var\":0,\"ativos\":517,\"ativos_var\":24},{\"dia\":\"2020/12/29\",\"total\":1620,\"total_novos\":60,\"recuperados\":1045,\"recuperados_novos\":14,\"obitos\":12,\"obitos_var\":0,\"ativos\":563,\"ativos_var\":46},{\"dia\":\"2020/12/30\",\"total\":1687,\"total_novos\":67,\"recuperados\":1064,\"recuperados_novos\":19,\"obitos\":13,\"obitos_var\":1,\"ativos\":610,\"ativos_var\":47},{\"dia\":\"2020/12/31\",\"total\":1760,\"total_novos\":73,\"recuperados\":1094,\"recuperados_novos\":30,\"obitos\":14,\"obitos_var\":1,\"ativos\":652,\"ativos_var\":42},{\"dia\":\"2021/01/01\",\"total\":1836,\"total_novos\":76,\"recuperados\":1125,\"recuperados_novos\":31,\"obitos\":14,\"obitos_var\":0,\"ativos\":697,\"ativos_var\":45},{\"dia\":\"2021/01/02\",\"total\":1901,\"total_novos\":65,\"recuperados\":1153,\"recuperados_novos\":28,\"obitos\":14,\"obitos_var\":0,\"ativos\":734,\"ativos_var\":37},{\"dia\":\"2021/01/03\",\"total\":2000,\"total_novos\":99,\"recuperados\":1187,\"recuperados_novos\":34,\"obitos\":14,\"obitos_var\":0,\"ativos\":799,\"ativos_var\":65},{\"dia\":\"2021/01/04\",\"total\":2110,\"total_novos\":110,\"recuperados\":1218,\"recuperados_novos\":31,\"obitos\":16,\"obitos_var\":2,\"ativos\":876,\"ativos_var\":77},{\"dia\":\"2021/01/05\",\"total\":2192,\"total_novos\":82,\"recuperados\":1264,\"recuperados_novos\":46,\"obitos\":16,\"obitos_var\":0,\"ativos\":912,\"ativos_var\":36},{\"dia\":\"2021/01/06\",\"total\":2302,\"total_novos\":110,\"recuperados\":1295,\"recuperados_novos\":31,\"obitos\":16,\"obitos_var\":0,\"ativos\":991,\"ativos_var\":79},{\"dia\":\"2021/01/07\",\"total\":2379,\"total_novos\":77,\"recuperados\":1334,\"recuperados_novos\":39,\"obitos\":18,\"obitos_var\":2,\"ativos\":1027,\"ativos_var\":36},{\"dia\":\"2021/01/08\",\"total\":2470,\"total_novos\":91,\"recuperados\":1370,\"recuperados_novos\":36,\"obitos\":18,\"obitos_var\":0,\"ativos\":1082,\"ativos_var\":55},{\"dia\":\"2021/01/09\",\"total\":2585,\"total_novos\":115,\"recuperados\":1412,\"recuperados_novos\":42,\"obitos\":18,\"obitos_var\":0,\"ativos\":1155,\"ativos_var\":73},{\"dia\":\"2021/01/10\",\"total\":2678,\"total_novos\":93,\"recuperados\":1459,\"recuperados_novos\":47,\"obitos\":18,\"obitos_var\":0,\"ativos\":1201,\"ativos_var\":46},{\"dia\":\"2021/01/11\",\"total\":2766,\"total_novos\":88,\"recuperados\":1512,\"recuperados_novos\":53,\"obitos\":20,\"obitos_var\":2,\"ativos\":1234,\"ativos_var\":33},{\"dia\":\"2021/01/12\",\"total\":2861,\"total_novos\":95,\"recuperados\":1557,\"recuperados_novos\":45,\"obitos\":20,\"obitos_var\":0,\"ativos\":1284,\"ativos_var\":50},{\"dia\":\"2021/01/13\",\"total\":2967,\"total_novos\":106,\"recuperados\":1613,\"recuperados_novos\":56,\"obitos\":22,\"obitos_var\":2,\"ativos\":1332,\"ativos_var\":48},{\"dia\":\"2021/01/14\",\"total\":3078,\"total_novos\":111,\"recuperados\":1651,\"recuperados_novos\":38,\"obitos\":23,\"obitos_var\":1,\"ativos\":1404,\"ativos_var\":72},{\"dia\":\"2021/01/15\",\"total\":3218,\"total_novos\":140,\"recuperados\":1692,\"recuperados_novos\":41,\"obitos\":23,\"obitos_var\":0,\"ativos\":1503,\"ativos_var\":99},{\"dia\":\"2021/01/16\",\"total\":3335,\"total_novos\":117,\"recuperados\":1799,\"recuperados_novos\":107,\"obitos\":27,\"obitos_var\":4,\"ativos\":1509,\"ativos_var\":6},{\"dia\":\"2021/01/17\",\"total\":3491,\"total_novos\":156,\"recuperados\":1864,\"recuperados_novos\":65,\"obitos\":27,\"obitos_var\":0,\"ativos\":1600,\"ativos_var\":91},{\"dia\":\"2021/01/18\",\"total\":3639,\"total_novos\":148,\"recuperados\":1930,\"recuperados_novos\":66,\"obitos\":29,\"obitos_var\":2,\"ativos\":1680,\"ativos_var\":80},{\"dia\":\"2021/01/19\",\"total\":3777,\"total_novos\":138,\"recuperados\":2011,\"recuperados_novos\":81,\"obitos\":31,\"obitos_var\":2,\"ativos\":1735,\"ativos_var\":55},{\"dia\":\"2021/01/20\",\"total\":3906,\"total_novos\":129,\"recuperados\":2110,\"recuperados_novos\":99,\"obitos\":31,\"obitos_var\":0,\"ativos\":1765,\"ativos_var\":30},{\"dia\":\"2021/01/21\",\"total\":4062,\"total_novos\":156,\"recuperados\":2200,\"recuperados_novos\":90,\"obitos\":31,\"obitos_var\":0,\"ativos\":1831,\"ativos_var\":66},{\"dia\":\"2021/01/22\",\"total\":4185,\"total_novos\":123,\"recuperados\":2279,\"recuperados_novos\":79,\"obitos\":31,\"obitos_var\":0,\"ativos\":1875,\"ativos_var\":44},{\"dia\":\"2021/01/23\",\"total\":4310,\"total_novos\":125,\"recuperados\":2365,\"recuperados_novos\":86,\"obitos\":32,\"obitos_var\":1,\"ativos\":1913,\"ativos_var\":38},{\"dia\":\"2021/01/24\",\"total\":4395,\"total_novos\":85,\"recuperados\":2460,\"recuperados_novos\":95,\"obitos\":32,\"obitos_var\":0,\"ativos\":1903,\"ativos_var\":-10},{\"dia\":\"2021/01/25\",\"total\":4501,\"total_novos\":106,\"recuperados\":2582,\"recuperados_novos\":122,\"obitos\":34,\"obitos_var\":2,\"ativos\":1885,\"ativos_var\":-18},{\"dia\":\"2021/01/26\",\"total\":4661,\"total_novos\":160,\"recuperados\":2680,\"recuperados_novos\":98,\"obitos\":35,\"obitos_var\":1,\"ativos\":1946,\"ativos_var\":61},{\"dia\":\"2021/01/27\",\"total\":4767,\"total_novos\":106,\"recuperados\":2777,\"recuperados_novos\":97,\"obitos\":35,\"obitos_var\":0,\"ativos\":1955,\"ativos_var\":9},{\"dia\":\"2021/01/28\",\"total\":4898,\"total_novos\":131,\"recuperados\":2889,\"recuperados_novos\":112,\"obitos\":38,\"obitos_var\":3,\"ativos\":1971,\"ativos_var\":16},{\"dia\":\"2021/01/29\",\"total\":4986,\"total_novos\":88,\"recuperados\":2974,\"recuperados_novos\":85,\"obitos\":40,\"obitos_var\":2,\"ativos\":1972,\"ativos_var\":1},{\"dia\":\"2021/01/30\",\"total\":5084,\"total_novos\":98,\"recuperados\":3033,\"recuperados_novos\":59,\"obitos\":44,\"obitos_var\":4,\"ativos\":2007,\"ativos_var\":35},{\"dia\":\"2021/01/31\",\"total\":5178,\"total_novos\":94,\"recuperados\":3151,\"recuperados_novos\":118,\"obitos\":45,\"obitos_var\":1,\"ativos\":1982,\"ativos_var\":-25},{\"dia\":\"2021/02/01\",\"total\":5239,\"total_novos\":61,\"recuperados\":3300,\"recuperados_novos\":149,\"obitos\":46,\"obitos_var\":1,\"ativos\":1893,\"ativos_var\":-89},{\"dia\":\"2021/02/02\",\"total\":5338,\"total_novos\":99,\"recuperados\":3386,\"recuperados_novos\":86,\"obitos\":47,\"obitos_var\":1,\"ativos\":1905,\"ativos_var\":12},{\"dia\":\"2021/02/03\",\"total\":5428,\"total_novos\":90,\"recuperados\":3509,\"recuperados_novos\":123,\"obitos\":49,\"obitos_var\":2,\"ativos\":1870,\"ativos_var\":-35},{\"dia\":\"2021/02/04\",\"total\":5525,\"total_novos\":97,\"recuperados\":3601,\"recuperados_novos\":92,\"obitos\":49,\"obitos_var\":0,\"ativos\":1875,\"ativos_var\":5},{\"dia\":\"2021/02/05\",\"total\":5633,\"total_novos\":108,\"recuperados\":3741,\"recuperados_novos\":140,\"obitos\":50,\"obitos_var\":1,\"ativos\":1842,\"ativos_var\":-33},{\"dia\":\"2021/02/06\",\"total\":5724,\"total_novos\":91,\"recuperados\":3798,\"recuperados_novos\":57,\"obitos\":51,\"obitos_var\":1,\"ativos\":1875,\"ativos_var\":33},{\"dia\":\"2021/02/07\",\"total\":5803,\"total_novos\":79,\"recuperados\":3950,\"recuperados_novos\":152,\"obitos\":54,\"obitos_var\":3,\"ativos\":1799,\"ativos_var\":-76},{\"dia\":\"2021/02/08\",\"total\":5886,\"total_novos\":83,\"recuperados\":4022,\"recuperados_novos\":72,\"obitos\":55,\"obitos_var\":1,\"ativos\":1809,\"ativos_var\":10},{\"dia\":\"2021/02/09\",\"total\":5974,\"total_novos\":88,\"recuperados\":4160,\"recuperados_novos\":138,\"obitos\":57,\"obitos_var\":2,\"ativos\":1757,\"ativos_var\":-52},{\"dia\":\"2021/02/10\",\"total\":6056,\"total_novos\":82,\"recuperados\":4291,\"recuperados_novos\":131,\"obitos\":60,\"obitos_var\":3,\"ativos\":1705,\"ativos_var\":-52},{\"dia\":\"2021/02/11\",\"total\":6142,\"total_novos\":86,\"recuperados\":4442,\"recuperados_novos\":151,\"obitos\":60,\"obitos_var\":0,\"ativos\":1640,\"ativos_var\":-65},{\"dia\":\"2021/02/12\",\"total\":6253,\"total_novos\":111,\"recuperados\":4531,\"recuperados_novos\":89,\"obitos\":62,\"obitos_var\":2,\"ativos\":1660,\"ativos_var\":20},{\"dia\":\"2021/02/13\",\"total\":6338,\"total_novos\":85,\"recuperados\":4646,\"recuperados_novos\":115,\"obitos\":62,\"obitos_var\":0,\"ativos\":1630,\"ativos_var\":-30},{\"dia\":\"2021/02/14\",\"total\":6398,\"total_novos\":60,\"recuperados\":4704,\"recuperados_novos\":58,\"obitos\":62,\"obitos_var\":0,\"ativos\":1632,\"ativos_var\":2},{\"dia\":\"2021/02/15\",\"total\":6470,\"total_novos\":72,\"recuperados\":4813,\"recuperados_novos\":109,\"obitos\":62,\"obitos_var\":0,\"ativos\":1595,\"ativos_var\":-37},{\"dia\":\"2021/02/16\",\"total\":6549,\"total_novos\":79,\"recuperados\":4919,\"recuperados_novos\":106,\"obitos\":62,\"obitos_var\":0,\"ativos\":1568,\"ativos_var\":-27},{\"dia\":\"2021/02/17\",\"total\":6621,\"total_novos\":72,\"recuperados\":5006,\"recuperados_novos\":87,\"obitos\":62,\"obitos_var\":0,\"ativos\":1553,\"ativos_var\":-15},{\"dia\":\"2021/02/18\",\"total\":6680,\"total_novos\":59,\"recuperados\":5073,\"recuperados_novos\":67,\"obitos\":62,\"obitos_var\":0,\"ativos\":1545,\"ativos_var\":-8},{\"dia\":\"2021/02/19\",\"total\":6746,\"total_novos\":66,\"recuperados\":5132,\"recuperados_novos\":59,\"obitos\":62,\"obitos_var\":0,\"ativos\":1552,\"ativos_var\":7},{\"dia\":\"2021/02/20\",\"total\":6799,\"total_novos\":53,\"recuperados\":5225,\"recuperados_novos\":93,\"obitos\":63,\"obitos_var\":1,\"ativos\":1511,\"ativos_var\":-41},{\"dia\":\"2021/02/21\",\"total\":6861,\"total_novos\":62,\"recuperados\":5287,\"recuperados_novos\":62,\"obitos\":63,\"obitos_var\":0,\"ativos\":1511,\"ativos_var\":0},{\"dia\":\"2021/02/22\",\"total\":6904,\"total_novos\":43,\"recuperados\":5395,\"recuperados_novos\":108,\"obitos\":63,\"obitos_var\":0,\"ativos\":1446,\"ativos_var\":-65},{\"dia\":\"2021/02/23\",\"total\":6959,\"total_novos\":55,\"recuperados\":5491,\"recuperados_novos\":96,\"obitos\":63,\"obitos_var\":0,\"ativos\":1405,\"ativos_var\":-41},{\"dia\":\"2021/02/24\",\"total\":7033,\"total_novos\":74,\"recuperados\":5577,\"recuperados_novos\":86,\"obitos\":64,\"obitos_var\":1,\"ativos\":1392,\"ativos_var\":-13},{\"dia\":\"2021/02/25\",\"total\":7086,\"total_novos\":53,\"recuperados\":5672,\"recuperados_novos\":95,\"obitos\":64,\"obitos_var\":0,\"ativos\":1350,\"ativos_var\":-42},{\"dia\":\"2021/02/26\",\"total\":7144,\"total_novos\":58,\"recuperados\":5734,\"recuperados_novos\":62,\"obitos\":64,\"obitos_var\":0,\"ativos\":1346,\"ativos_var\":-4},{\"dia\":\"2021/02/27\",\"total\":7190,\"total_novos\":46,\"recuperados\":5830,\"recuperados_novos\":96,\"obitos\":64,\"obitos_var\":0,\"ativos\":1296,\"ativos_var\":-50},{\"dia\":\"2021/02/28\",\"total\":7238,\"total_novos\":48,\"recuperados\":5908,\"recuperados_novos\":78,\"obitos\":64,\"obitos_var\":0,\"ativos\":1266,\"ativos_var\":-30},{\"dia\":\"2021/03/01\",\"total\":7276,\"total_novos\":38,\"recuperados\":6031,\"recuperados_novos\":123,\"obitos\":64,\"obitos_var\":0,\"ativos\":1181,\"ativos_var\":-85},{\"dia\":\"2021/03/02\",\"total\":7337,\"total_novos\":61,\"recuperados\":6151,\"recuperados_novos\":120,\"obitos\":64,\"obitos_var\":0,\"ativos\":1122,\"ativos_var\":-59},{\"dia\":\"2021/03/03\",\"total\":7382,\"total_novos\":45,\"recuperados\":6281,\"recuperados_novos\":130,\"obitos\":64,\"obitos_var\":0,\"ativos\":1037,\"ativos_var\":-85},{\"dia\":\"2021/03/04\",\"total\":7432,\"total_novos\":50,\"recuperados\":6475,\"recuperados_novos\":194,\"obitos\":64,\"obitos_var\":0,\"ativos\":893,\"ativos_var\":-144},{\"dia\":\"2021/03/05\",\"total\":7478,\"total_novos\":46,\"recuperados\":6595,\"recuperados_novos\":120,\"obitos\":64,\"obitos_var\":0,\"ativos\":819,\"ativos_var\":-74},{\"dia\":\"2021/03/06\",\"total\":7537,\"total_novos\":59,\"recuperados\":6677,\"recuperados_novos\":82,\"obitos\":65,\"obitos_var\":1,\"ativos\":795,\"ativos_var\":-24},{\"dia\":\"2021/03/07\",\"total\":7570,\"total_novos\":33,\"recuperados\":6725,\"recuperados_novos\":48,\"obitos\":66,\"obitos_var\":1,\"ativos\":779,\"ativos_var\":-16},{\"dia\":\"2021/03/08\",\"total\":7613,\"total_novos\":43,\"recuperados\":6755,\"recuperados_novos\":30,\"obitos\":66,\"obitos_var\":0,\"ativos\":792,\"ativos_var\":13},{\"dia\":\"2021/03/09\",\"total\":7671,\"total_novos\":58,\"recuperados\":6874,\"recuperados_novos\":119,\"obitos\":67,\"obitos_var\":1,\"ativos\":730,\"ativos_var\":-62},{\"dia\":\"2021/03/10\",\"total\":7719,\"total_novos\":48,\"recuperados\":6904,\"recuperados_novos\":30,\"obitos\":67,\"obitos_var\":0,\"ativos\":748,\"ativos_var\":18},{\"dia\":\"2021/03/11\",\"total\":7757,\"total_novos\":38,\"recuperados\":6992,\"recuperados_novos\":88,\"obitos\":67,\"obitos_var\":0,\"ativos\":698,\"ativos_var\":-50},{\"dia\":\"2021/03/12\",\"total\":7805,\"total_novos\":48,\"recuperados\":7030,\"recuperados_novos\":38,\"obitos\":67,\"obitos_var\":0,\"ativos\":708,\"ativos_var\":10},{\"dia\":\"2021/03/13\",\"total\":7835,\"total_novos\":30,\"recuperados\":7070,\"recuperados_novos\":40,\"obitos\":67,\"obitos_var\":0,\"ativos\":698,\"ativos_var\":-10},{\"dia\":\"2021/03/14\",\"total\":7878,\"total_novos\":43,\"recuperados\":7117,\"recuperados_novos\":47,\"obitos\":67,\"obitos_var\":0,\"ativos\":694,\"ativos_var\":-4},{\"dia\":\"2021/03/15\",\"total\":7901,\"total_novos\":23,\"recuperados\":7175,\"recuperados_novos\":58,\"obitos\":67,\"obitos_var\":0,\"ativos\":659,\"ativos_var\":-35},{\"dia\":\"2021/03/16\",\"total\":7941,\"total_novos\":40,\"recuperados\":7223,\"recuperados_novos\":48,\"obitos\":67,\"obitos_var\":0,\"ativos\":651,\"ativos_var\":-8},{\"dia\":\"2021/03/17\",\"total\":7986,\"total_novos\":45,\"recuperados\":7257,\"recuperados_novos\":34,\"obitos\":67,\"obitos_var\":0,\"ativos\":662,\"ativos_var\":11},{\"dia\":\"2021/03/18\",\"total\":8021,\"total_novos\":35,\"recuperados\":7298,\"recuperados_novos\":41,\"obitos\":68,\"obitos_var\":1,\"ativos\":655,\"ativos_var\":-7},{\"dia\":\"2021/03/19\",\"total\":8047,\"total_novos\":26,\"recuperados\":7356,\"recuperados_novos\":58,\"obitos\":68,\"obitos_var\":0,\"ativos\":623,\"ativos_var\":-32},{\"dia\":\"2021/03/20\",\"total\":8076,\"total_novos\":29,\"recuperados\":7408,\"recuperados_novos\":52,\"obitos\":68,\"obitos_var\":0,\"ativos\":600,\"ativos_var\":-23},{\"dia\":\"2021/03/21\",\"total\":8105,\"total_novos\":29,\"recuperados\":7449,\"recuperados_novos\":41,\"obitos\":68,\"obitos_var\":0,\"ativos\":588,\"ativos_var\":-12},{\"dia\":\"2021/03/22\",\"total\":8128,\"total_novos\":23,\"recuperados\":7502,\"recuperados_novos\":53,\"obitos\":69,\"obitos_var\":1,\"ativos\":557,\"ativos_var\":-31},{\"dia\":\"2021/03/23\",\"total\":8162,\"total_novos\":34,\"recuperados\":7554,\"recuperados_novos\":52,\"obitos\":69,\"obitos_var\":0,\"ativos\":539,\"ativos_var\":-18},{\"dia\":\"2021/03/24\",\"total\":8185,\"total_novos\":23,\"recuperados\":7606,\"recuperados_novos\":52,\"obitos\":69,\"obitos_var\":0,\"ativos\":510,\"ativos_var\":-29},{\"dia\":\"2021/03/25\",\"total\":8214,\"total_novos\":29,\"recuperados\":7643,\"recuperados_novos\":37,\"obitos\":70,\"obitos_var\":1,\"ativos\":501,\"ativos_var\":-9},{\"dia\":\"2021/03/26\",\"total\":8245,\"total_novos\":31,\"recuperados\":7686,\"recuperados_novos\":43,\"obitos\":70,\"obitos_var\":0,\"ativos\":489,\"ativos_var\":-12},{\"dia\":\"2021/03/27\",\"total\":8286,\"total_novos\":41,\"recuperados\":7722,\"recuperados_novos\":36,\"obitos\":71,\"obitos_var\":1,\"ativos\":493,\"ativos_var\":4},{\"dia\":\"2021/03/28\",\"total\":8308,\"total_novos\":22,\"recuperados\":7748,\"recuperados_novos\":26,\"obitos\":71,\"obitos_var\":0,\"ativos\":489,\"ativos_var\":-4},{\"dia\":\"2021/03/29\",\"total\":8332,\"total_novos\":24,\"recuperados\":7783,\"recuperados_novos\":35,\"obitos\":71,\"obitos_var\":0,\"ativos\":478,\"ativos_var\":-11},{\"dia\":\"2021/03/30\",\"total\":8356,\"total_novos\":24,\"recuperados\":7859,\"recuperados_novos\":76,\"obitos\":71,\"obitos_var\":0,\"ativos\":426,\"ativos_var\":-52},{\"dia\":\"2021/03/31\",\"total\":8378,\"total_novos\":22,\"recuperados\":7896,\"recuperados_novos\":37,\"obitos\":71,\"obitos_var\":0,\"ativos\":411,\"ativos_var\":-15},{\"dia\":\"2021/04/01\",\"total\":8395,\"total_novos\":17,\"recuperados\":7929,\"recuperados_novos\":33,\"obitos\":71,\"obitos_var\":0,\"ativos\":395,\"ativos_var\":-16},{\"dia\":\"2021/04/02\",\"total\":8412,\"total_novos\":17,\"recuperados\":7961,\"recuperados_novos\":32,\"obitos\":71,\"obitos_var\":0,\"ativos\":380,\"ativos_var\":-15},{\"dia\":\"2021/04/03\",\"total\":8433,\"total_novos\":21,\"recuperados\":7999,\"recuperados_novos\":38,\"obitos\":71,\"obitos_var\":0,\"ativos\":363,\"ativos_var\":-17},{\"dia\":\"2021/04/04\",\"total\":8447,\"total_novos\":14,\"recuperados\":8016,\"recuperados_novos\":17,\"obitos\":71,\"obitos_var\":0,\"ativos\":360,\"ativos_var\":-3},{\"dia\":\"2021/04/05\",\"total\":8466,\"total_novos\":19,\"recuperados\":8045,\"recuperados_novos\":29,\"obitos\":71,\"obitos_var\":0,\"ativos\":350,\"ativos_var\":-10},{\"dia\":\"2021/04/06\",\"total\":8486,\"total_novos\":20,\"recuperados\":8073,\"recuperados_novos\":28,\"obitos\":71,\"obitos_var\":0,\"ativos\":342,\"ativos_var\":-8},{\"dia\":\"2021/04/07\",\"total\":8511,\"total_novos\":25,\"recuperados\":8098,\"recuperados_novos\":25,\"obitos\":71,\"obitos_var\":0,\"ativos\":342,\"ativos_var\":0},{\"dia\":\"2021/04/08\",\"total\":8535,\"total_novos\":24,\"recuperados\":8127,\"recuperados_novos\":29,\"obitos\":71,\"obitos_var\":0,\"ativos\":337,\"ativos_var\":-5},{\"dia\":\"2021/04/09\",\"total\":8549,\"total_novos\":14,\"recuperados\":8168,\"recuperados_novos\":41,\"obitos\":71,\"obitos_var\":0,\"ativos\":310,\"ativos_var\":-27},{\"dia\":\"2021/04/10\",\"total\":8575,\"total_novos\":26,\"recuperados\":8195,\"recuperados_novos\":27,\"obitos\":71,\"obitos_var\":0,\"ativos\":309,\"ativos_var\":-1},{\"dia\":\"2021/04/11\",\"total\":8599,\"total_novos\":24,\"recuperados\":8218,\"recuperados_novos\":23,\"obitos\":71,\"obitos_var\":0,\"ativos\":310,\"ativos_var\":1},{\"dia\":\"2021/04/12\",\"total\":8617,\"total_novos\":18,\"recuperados\":8239,\"recuperados_novos\":21,\"obitos\":71,\"obitos_var\":0,\"ativos\":307,\"ativos_var\":-3},{\"dia\":\"2021/04/13\",\"total\":8647,\"total_novos\":30,\"recuperados\":8268,\"recuperados_novos\":29,\"obitos\":71,\"obitos_var\":0,\"ativos\":308,\"ativos_var\":1},{\"dia\":\"2021/04/14\",\"total\":8667,\"total_novos\":20,\"recuperados\":8282,\"recuperados_novos\":14,\"obitos\":71,\"obitos_var\":0,\"ativos\":314,\"ativos_var\":6},{\"dia\":\"2021/04/15\",\"total\":8687,\"total_novos\":20,\"recuperados\":8301,\"recuperados_novos\":19,\"obitos\":71,\"obitos_var\":0,\"ativos\":315,\"ativos_var\":1},{\"dia\":\"2021/04/16\",\"total\":8701,\"total_novos\":14,\"recuperados\":8315,\"recuperados_novos\":14,\"obitos\":71,\"obitos_var\":0,\"ativos\":315,\"ativos_var\":0},{\"dia\":\"2021/04/17\",\"total\":8720,\"total_novos\":19,\"recuperados\":8335,\"recuperados_novos\":20,\"obitos\":71,\"obitos_var\":0,\"ativos\":314,\"ativos_var\":-1},{\"dia\":\"2021/04/18\",\"total\":8737,\"total_novos\":17,\"recuperados\":8351,\"recuperados_novos\":16,\"obitos\":71,\"obitos_var\":0,\"ativos\":315,\"ativos_var\":1},{\"dia\":\"2021/04/19\",\"total\":8757,\"total_novos\":20,\"recuperados\":8374,\"recuperados_novos\":23,\"obitos\":71,\"obitos_var\":0,\"ativos\":312,\"ativos_var\":-3},{\"dia\":\"2021/04/20\",\"total\":8774,\"total_novos\":17,\"recuperados\":8422,\"recuperados_novos\":48,\"obitos\":71,\"obitos_var\":0,\"ativos\":281,\"ativos_var\":-31},{\"dia\":\"2021/04/21\",\"total\":8789,\"total_novos\":15,\"recuperados\":8446,\"recuperados_novos\":24,\"obitos\":71,\"obitos_var\":0,\"ativos\":272,\"ativos_var\":-9},{\"dia\":\"2021/04/22\",\"total\":8801,\"total_novos\":12,\"recuperados\":8464,\"recuperados_novos\":18,\"obitos\":71,\"obitos_var\":0,\"ativos\":266,\"ativos_var\":-6},{\"dia\":\"2021/04/23\",\"total\":8823,\"total_novos\":22,\"recuperados\":8493,\"recuperados_novos\":29,\"obitos\":71,\"obitos_var\":0,\"ativos\":259,\"ativos_var\":-7},{\"dia\":\"2021/04/24\",\"total\":8857,\"total_novos\":34,\"recuperados\":8518,\"recuperados_novos\":25,\"obitos\":71,\"obitos_var\":0,\"ativos\":268,\"ativos_var\":9},{\"dia\":\"2021/04/25\",\"total\":8879,\"total_novos\":22,\"recuperados\":8534,\"recuperados_novos\":16,\"obitos\":71,\"obitos_var\":0,\"ativos\":274,\"ativos_var\":6},{\"dia\":\"2021/04/26\",\"total\":8895,\"total_novos\":16,\"recuperados\":8560,\"recuperados_novos\":26,\"obitos\":71,\"obitos_var\":0,\"ativos\":264,\"ativos_var\":-10},{\"dia\":\"2021/04/27\",\"total\":8908,\"total_novos\":13,\"recuperados\":8581,\"recuperados_novos\":21,\"obitos\":71,\"obitos_var\":0,\"ativos\":256,\"ativos_var\":-8},{\"dia\":\"2021/04/28\",\"total\":8929,\"total_novos\":21,\"recuperados\":8600,\"recuperados_novos\":19,\"obitos\":71,\"obitos_var\":0,\"ativos\":258,\"ativos_var\":2},{\"dia\":\"2021/04/29\",\"total\":8947,\"total_novos\":18,\"recuperados\":8616,\"recuperados_novos\":16,\"obitos\":71,\"obitos_var\":0,\"ativos\":260,\"ativos_var\":2},{\"dia\":\"2021/04/30\",\"total\":8971,\"total_novos\":24,\"recuperados\":8639,\"recuperados_novos\":23,\"obitos\":71,\"obitos_var\":0,\"ativos\":261,\"ativos_var\":1},{\"dia\":\"2021/05/01\",\"total\":8988,\"total_novos\":17,\"recuperados\":8659,\"recuperados_novos\":20,\"obitos\":71,\"obitos_var\":0,\"ativos\":258,\"ativos_var\":-3},{\"dia\":\"2021/05/02\",\"total\":9010,\"total_novos\":22,\"recuperados\":8673,\"recuperados_novos\":14,\"obitos\":71,\"obitos_var\":0,\"ativos\":266,\"ativos_var\":8},{\"dia\":\"2021/05/03\",\"total\":9019,\"total_novos\":9,\"recuperados\":8686,\"recuperados_novos\":13,\"obitos\":71,\"obitos_var\":0,\"ativos\":262,\"ativos_var\":-4},{\"dia\":\"2021/05/04\",\"total\":9035,\"total_novos\":16,\"recuperados\":8697,\"recuperados_novos\":11,\"obitos\":71,\"obitos_var\":0,\"ativos\":267,\"ativos_var\":5},{\"dia\":\"2021/05/05\",\"total\":9055,\"total_novos\":20,\"recuperados\":8708,\"recuperados_novos\":11,\"obitos\":71,\"obitos_var\":0,\"ativos\":276,\"ativos_var\":9},{\"dia\":\"2021/05/06\",\"total\":9068,\"total_novos\":13,\"recuperados\":8724,\"recuperados_novos\":16,\"obitos\":71,\"obitos_var\":0,\"ativos\":273,\"ativos_var\":-3},{\"dia\":\"2021/05/07\",\"total\":9083,\"total_novos\":15,\"recuperados\":8762,\"recuperados_novos\":38,\"obitos\":71,\"obitos_var\":0,\"ativos\":250,\"ativos_var\":-23},{\"dia\":\"2021/05/08\",\"total\":9095,\"total_novos\":12,\"recuperados\":8785,\"recuperados_novos\":23,\"obitos\":71,\"obitos_var\":0,\"ativos\":239,\"ativos_var\":-11},{\"dia\":\"2021/05/09\",\"total\":9105,\"total_novos\":10,\"recuperados\":8798,\"recuperados_novos\":13,\"obitos\":71,\"obitos_var\":0,\"ativos\":236,\"ativos_var\":-3},{\"dia\":\"2021/05/10\",\"total\":9116,\"total_novos\":11,\"recuperados\":8815,\"recuperados_novos\":17,\"obitos\":71,\"obitos_var\":0,\"ativos\":230,\"ativos_var\":-6},{\"dia\":\"2021/05/11\",\"total\":9134,\"total_novos\":18,\"recuperados\":8836,\"recuperados_novos\":21,\"obitos\":71,\"obitos_var\":0,\"ativos\":227,\"ativos_var\":-3},{\"dia\":\"2021/05/12\",\"total\":9152,\"total_novos\":18,\"recuperados\":8855,\"recuperados_novos\":19,\"obitos\":71,\"obitos_var\":0,\"ativos\":226,\"ativos_var\":-1},{\"dia\":\"2021/05/13\",\"total\":9178,\"total_novos\":26,\"recuperados\":8883,\"recuperados_novos\":28,\"obitos\":71,\"obitos_var\":0,\"ativos\":224,\"ativos_var\":-2},{\"dia\":\"2021/05/14\",\"total\":9207,\"total_novos\":29,\"recuperados\":8904,\"recuperados_novos\":21,\"obitos\":71,\"obitos_var\":0,\"ativos\":232,\"ativos_var\":8},{\"dia\":\"2021/05/15\",\"total\":9246,\"total_novos\":39,\"recuperados\":8925,\"recuperados_novos\":21,\"obitos\":71,\"obitos_var\":0,\"ativos\":250,\"ativos_var\":18},{\"dia\":\"2021/05/16\",\"total\":9254,\"total_novos\":8,\"recuperados\":8931,\"recuperados_novos\":6,\"obitos\":71,\"obitos_var\":0,\"ativos\":252,\"ativos_var\":2},{\"dia\":\"2021/05/17\",\"total\":9263,\"total_novos\":9,\"recuperados\":8952,\"recuperados_novos\":21,\"obitos\":71,\"obitos_var\":0,\"ativos\":240,\"ativos_var\":-12},{\"dia\":\"2021/05/18\",\"total\":9280,\"total_novos\":17,\"recuperados\":8969,\"recuperados_novos\":17,\"obitos\":71,\"obitos_var\":0,\"ativos\":240,\"ativos_var\":0},{\"dia\":\"2021/05/19\",\"total\":9295,\"total_novos\":15,\"recuperados\":8981,\"recuperados_novos\":12,\"obitos\":71,\"obitos_var\":0,\"ativos\":243,\"ativos_var\":3},{\"dia\":\"2021/05/20\",\"total\":9317,\"total_novos\":22,\"recuperados\":8997,\"recuperados_novos\":16,\"obitos\":71,\"obitos_var\":0,\"ativos\":249,\"ativos_var\":6},{\"dia\":\"2021/05/21\",\"total\":9342,\"total_novos\":25,\"recuperados\":9008,\"recuperados_novos\":11,\"obitos\":71,\"obitos_var\":0,\"ativos\":263,\"ativos_var\":14},{\"dia\":\"2021/05/22\",\"total\":9360,\"total_novos\":18,\"recuperados\":9024,\"recuperados_novos\":16,\"obitos\":71,\"obitos_var\":0,\"ativos\":265,\"ativos_var\":2},{\"dia\":\"2021/05/23\",\"total\":9374,\"total_novos\":14,\"recuperados\":9035,\"recuperados_novos\":11,\"obitos\":71,\"obitos_var\":0,\"ativos\":268,\"ativos_var\":3},{\"dia\":\"2021/05/24\",\"total\":9387,\"total_novos\":13,\"recuperados\":9049,\"recuperados_novos\":14,\"obitos\":71,\"obitos_var\":0,\"ativos\":267,\"ativos_var\":-1},{\"dia\":\"2021/05/25\",\"total\":9400,\"total_novos\":13,\"recuperados\":9065,\"recuperados_novos\":16,\"obitos\":72,\"obitos_var\":1,\"ativos\":263,\"ativos_var\":-4},{\"dia\":\"2021/05/26\",\"total\":9416,\"total_novos\":16,\"recuperados\":9084,\"recuperados_novos\":19,\"obitos\":72,\"obitos_var\":0,\"ativos\":260,\"ativos_var\":-3},{\"dia\":\"2021/05/27\",\"total\":9422,\"total_novos\":6,\"recuperados\":9125,\"recuperados_novos\":41,\"obitos\":72,\"obitos_var\":0,\"ativos\":225,\"ativos_var\":-35},{\"dia\":\"2021/05/28\",\"total\":9433,\"total_novos\":11,\"recuperados\":9154,\"recuperados_novos\":29,\"obitos\":72,\"obitos_var\":0,\"ativos\":207,\"ativos_var\":-18},{\"dia\":\"2021/05/29\",\"total\":9445,\"total_novos\":12,\"recuperados\":9179,\"recuperados_novos\":25,\"obitos\":72,\"obitos_var\":0,\"ativos\":194,\"ativos_var\":-13},{\"dia\":\"2021/05/30\",\"total\":9460,\"total_novos\":15,\"recuperados\":9195,\"recuperados_novos\":16,\"obitos\":72,\"obitos_var\":0,\"ativos\":193,\"ativos_var\":-1},{\"dia\":\"2021/05/31\",\"total\":9461,\"total_novos\":1,\"recuperados\":9211,\"recuperados_novos\":16,\"obitos\":72,\"obitos_var\":0,\"ativos\":178,\"ativos_var\":-15},{\"dia\":\"2021/06/01\",\"total\":9470,\"total_novos\":9,\"recuperados\":9227,\"recuperados_novos\":16,\"obitos\":72,\"obitos_var\":0,\"ativos\":171,\"ativos_var\":-7},{\"dia\":\"2021/06/02\",\"total\":9478,\"total_novos\":8,\"recuperados\":9245,\"recuperados_novos\":18,\"obitos\":72,\"obitos_var\":0,\"ativos\":161,\"ativos_var\":-10},{\"dia\":\"2021/06/03\",\"total\":9486,\"total_novos\":8,\"recuperados\":9264,\"recuperados_novos\":19,\"obitos\":72,\"obitos_var\":0,\"ativos\":150,\"ativos_var\":-11},{\"dia\":\"2021/06/04\",\"total\":9493,\"total_novos\":7,\"recuperados\":9281,\"recuperados_novos\":17,\"obitos\":72,\"obitos_var\":0,\"ativos\":140,\"ativos_var\":-10},{\"dia\":\"2021/06/05\",\"total\":9496,\"total_novos\":3,\"recuperados\":9297,\"recuperados_novos\":16,\"obitos\":72,\"obitos_var\":0,\"ativos\":127,\"ativos_var\":-13},{\"dia\":\"2021/06/06\",\"total\":9499,\"total_novos\":3,\"recuperados\":9309,\"recuperados_novos\":12,\"obitos\":72,\"obitos_var\":0,\"ativos\":118,\"ativos_var\":-9},{\"dia\":\"2021/06/07\",\"total\":9503,\"total_novos\":4,\"recuperados\":9323,\"recuperados_novos\":14,\"obitos\":72,\"obitos_var\":0,\"ativos\":108,\"ativos_var\":-10},{\"dia\":\"2021/06/08\",\"total\":9507,\"total_novos\":4,\"recuperados\":9338,\"recuperados_novos\":15,\"obitos\":72,\"obitos_var\":0,\"ativos\":97,\"ativos_var\":-11},{\"dia\":\"2021/06/09\",\"total\":9511,\"total_novos\":4,\"recuperados\":9347,\"recuperados_novos\":9,\"obitos\":72,\"obitos_var\":0,\"ativos\":92,\"ativos_var\":-5},{\"dia\":\"2021/06/10\",\"total\":9514,\"total_novos\":3,\"recuperados\":9364,\"recuperados_novos\":17,\"obitos\":72,\"obitos_var\":0,\"ativos\":78,\"ativos_var\":-14},{\"dia\":\"2021/06/11\",\"total\":9521,\"total_novos\":7,\"recuperados\":9375,\"recuperados_novos\":11,\"obitos\":72,\"obitos_var\":0,\"ativos\":74,\"ativos_var\":-4},{\"dia\":\"2021/06/12\",\"total\":9525,\"total_novos\":4,\"recuperados\":9387,\"recuperados_novos\":12,\"obitos\":72,\"obitos_var\":0,\"ativos\":66,\"ativos_var\":-8},{\"dia\":\"2021/06/13\",\"total\":9531,\"total_novos\":6,\"recuperados\":9389,\"recuperados_novos\":2,\"obitos\":72,\"obitos_var\":0,\"ativos\":70,\"ativos_var\":4},{\"dia\":\"2021/06/14\",\"total\":9539,\"total_novos\":8,\"recuperados\":9396,\"recuperados_novos\":7,\"obitos\":72,\"obitos_var\":0,\"ativos\":71,\"ativos_var\":1},{\"dia\":\"2021/06/15\",\"total\":9542,\"total_novos\":3,\"recuperados\":9408,\"recuperados_novos\":12,\"obitos\":72,\"obitos_var\":0,\"ativos\":62,\"ativos_var\":-9},{\"dia\":\"2021/06/16\",\"total\":9550,\"total_novos\":8,\"recuperados\":9417,\"recuperados_novos\":9,\"obitos\":72,\"obitos_var\":0,\"ativos\":61,\"ativos_var\":-1},{\"dia\":\"2021/06/17\",\"total\":9562,\"total_novos\":12,\"recuperados\":9424,\"recuperados_novos\":7,\"obitos\":72,\"obitos_var\":0,\"ativos\":66,\"ativos_var\":5},{\"dia\":\"2021/06/18\",\"total\":9568,\"total_novos\":6,\"recuperados\":9428,\"recuperados_novos\":4,\"obitos\":72,\"obitos_var\":0,\"ativos\":68,\"ativos_var\":2},{\"dia\":\"2021/06/19\",\"total\":9573,\"total_novos\":5,\"recuperados\":9432,\"recuperados_novos\":4,\"obitos\":72,\"obitos_var\":0,\"ativos\":69,\"ativos_var\":1},{\"dia\":\"2021/06/20\",\"total\":9577,\"total_novos\":4,\"recuperados\":9441,\"recuperados_novos\":9,\"obitos\":72,\"obitos_var\":0,\"ativos\":64,\"ativos_var\":-5},{\"dia\":\"2021/06/21\",\"total\":9580,\"total_novos\":3,\"recuperados\":9448,\"recuperados_novos\":7,\"obitos\":72,\"obitos_var\":0,\"ativos\":60,\"ativos_var\":-4},{\"dia\":\"2021/06/22\",\"total\":9589,\"total_novos\":9,\"recuperados\":9450,\"recuperados_novos\":2,\"obitos\":72,\"obitos_var\":0,\"ativos\":67,\"ativos_var\":7},{\"dia\":\"2021/06/23\",\"total\":9600,\"total_novos\":11,\"recuperados\":9456,\"recuperados_novos\":6,\"obitos\":72,\"obitos_var\":0,\"ativos\":72,\"ativos_var\":5},{\"dia\":\"2021/06/24\",\"total\":9603,\"total_novos\":3,\"recuperados\":9464,\"recuperados_novos\":8,\"obitos\":72,\"obitos_var\":0,\"ativos\":67,\"ativos_var\":-5},{\"dia\":\"2021/06/25\",\"total\":9612,\"total_novos\":9,\"recuperados\":9475,\"recuperados_novos\":11,\"obitos\":72,\"obitos_var\":0,\"ativos\":65,\"ativos_var\":-2},{\"dia\":\"2021/06/26\",\"total\":9619,\"total_novos\":7,\"recuperados\":9486,\"recuperados_novos\":11,\"obitos\":72,\"obitos_var\":0,\"ativos\":61,\"ativos_var\":-4},{\"dia\":\"2021/06/27\",\"total\":9624,\"total_novos\":5,\"recuperados\":9491,\"recuperados_novos\":5,\"obitos\":72,\"obitos_var\":0,\"ativos\":61,\"ativos_var\":0},{\"dia\":\"2021/06/28\",\"total\":9627,\"total_novos\":3,\"recuperados\":9498,\"recuperados_novos\":7,\"obitos\":72,\"obitos_var\":0,\"ativos\":57,\"ativos_var\":-4},{\"dia\":\"2021/06/29\",\"total\":9642,\"total_novos\":15,\"recuperados\":9502,\"recuperados_novos\":4,\"obitos\":73,\"obitos_var\":1,\"ativos\":67,\"ativos_var\":10},{\"dia\":\"2021/06/30\",\"total\":9655,\"total_novos\":13,\"recuperados\":9506,\"recuperados_novos\":4,\"obitos\":73,\"obitos_var\":0,\"ativos\":76,\"ativos_var\":9},{\"dia\":\"2021/07/01\",\"total\":9660,\"total_novos\":5,\"recuperados\":9512,\"recuperados_novos\":6,\"obitos\":73,\"obitos_var\":0,\"ativos\":75,\"ativos_var\":-1},{\"dia\":\"2021/07/02\",\"total\":9668,\"total_novos\":8,\"recuperados\":9519,\"recuperados_novos\":7,\"obitos\":73,\"obitos_var\":0,\"ativos\":76,\"ativos_var\":1},{\"dia\":\"2021/07/03\",\"total\":9674,\"total_novos\":6,\"recuperados\":9523,\"recuperados_novos\":4,\"obitos\":73,\"obitos_var\":0,\"ativos\":78,\"ativos_var\":2},{\"dia\":\"2021/07/04\",\"total\":9686,\"total_novos\":12,\"recuperados\":9533,\"recuperados_novos\":10,\"obitos\":73,\"obitos_var\":0,\"ativos\":80,\"ativos_var\":2},{\"dia\":\"2021/07/05\",\"total\":9695,\"total_novos\":9,\"recuperados\":9547,\"recuperados_novos\":14,\"obitos\":73,\"obitos_var\":0,\"ativos\":75,\"ativos_var\":-5},{\"dia\":\"2021/07/06\",\"total\":9705,\"total_novos\":10,\"recuperados\":9553,\"recuperados_novos\":6,\"obitos\":73,\"obitos_var\":0,\"ativos\":79,\"ativos_var\":4}]");

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