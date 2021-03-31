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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DPLS");


/***/ }),

/***/ "ALF3":
/***/ (function(module) {

module.exports = JSON.parse("[{\"Data\":1608552000000,\"ConfirmadosAcumulado\":376220,\"ConfirmadosNovos\":2099,\"Recuperados\":299603,\"Obitos\":6191,\"VarObitos\":57,\"VarRecuperados\":2370,\"Activos\":70426,\"conf5059total\":55100,\"conf6069total\":36404,\"conf7079total\":23731,\"conf80total\":30193,\"OBJECTID\":3792},{\"Data\":1608638400000,\"ConfirmadosAcumulado\":378656,\"ConfirmadosNovos\":2436,\"Recuperados\":304825,\"Obitos\":6254,\"VarObitos\":63,\"VarRecuperados\":5222,\"Activos\":67577,\"conf5059total\":55475,\"conf6069total\":36691,\"conf7079total\":23891,\"conf80total\":30420,\"OBJECTID\":3800},{\"Data\":1608724800000,\"ConfirmadosAcumulado\":383258,\"ConfirmadosNovos\":4602,\"Recuperados\":308446,\"Obitos\":6343,\"VarObitos\":89,\"VarRecuperados\":3621,\"Activos\":68469,\"conf5059total\":56173,\"conf6069total\":37154,\"conf7079total\":24228,\"conf80total\":30861,\"OBJECTID\":3808},{\"Data\":1608811200000,\"ConfirmadosAcumulado\":387636,\"ConfirmadosNovos\":4378,\"Recuperados\":312533,\"Obitos\":6413,\"VarObitos\":70,\"VarRecuperados\":4087,\"Activos\":68690,\"conf5059total\":56807,\"conf6069total\":37637,\"conf7079total\":24563,\"conf80total\":31248,\"OBJECTID\":3816},{\"Data\":1608897600000,\"ConfirmadosAcumulado\":391782,\"ConfirmadosNovos\":4146,\"Recuperados\":315126,\"Obitos\":6478,\"VarObitos\":65,\"VarRecuperados\":2593,\"Activos\":70178,\"conf5059total\":57414,\"conf6069total\":38057,\"conf7079total\":24865,\"conf80total\":31600,\"OBJECTID\":3824},{\"Data\":1608984000000,\"ConfirmadosAcumulado\":392996,\"ConfirmadosNovos\":1214,\"Recuperados\":316671,\"Obitos\":6556,\"VarObitos\":78,\"VarRecuperados\":1545,\"Activos\":69769,\"conf5059total\":57600,\"conf6069total\":38200,\"conf7079total\":24949,\"conf80total\":31701,\"OBJECTID\":3832},{\"Data\":1609070400000,\"ConfirmadosAcumulado\":394573,\"ConfirmadosNovos\":1577,\"Recuperados\":319746,\"Obitos\":6619,\"VarObitos\":63,\"VarRecuperados\":3075,\"Activos\":68208,\"conf5059total\":57846,\"conf6069total\":38369,\"conf7079total\":25058,\"conf80total\":31819,\"OBJECTID\":3840},{\"Data\":1609156800000,\"ConfirmadosAcumulado\":396666,\"ConfirmadosNovos\":2093,\"Recuperados\":321682,\"Obitos\":6677,\"VarObitos\":58,\"VarRecuperados\":1936,\"Activos\":68307,\"conf5059total\":58165,\"conf6069total\":38580,\"conf7079total\":25221,\"conf80total\":31981,\"OBJECTID\":3848},{\"Data\":1609243200000,\"ConfirmadosAcumulado\":400002,\"ConfirmadosNovos\":3336,\"Recuperados\":327794,\"Obitos\":6751,\"VarObitos\":74,\"VarRecuperados\":6112,\"Activos\":65457,\"conf5059total\":58688,\"conf6069total\":38963,\"conf7079total\":25449,\"conf80total\":32167,\"OBJECTID\":3856},{\"Data\":1609329600000,\"ConfirmadosAcumulado\":406051,\"ConfirmadosNovos\":6049,\"Recuperados\":331016,\"Obitos\":6830,\"VarObitos\":79,\"VarRecuperados\":3222,\"Activos\":68205,\"conf5059total\":59183,\"conf6069total\":39537,\"conf7079total\":25825,\"conf80total\":32590,\"OBJECTID\":3864},{\"Data\":1609416000000,\"ConfirmadosAcumulado\":413678,\"ConfirmadosNovos\":7627,\"Recuperados\":334276,\"Obitos\":6906,\"VarObitos\":76,\"VarRecuperados\":3260,\"Activos\":72496,\"conf5059total\":60750,\"conf6069total\":40248,\"conf7079total\":26318,\"conf80total\":33268,\"OBJECTID\":3872},{\"Data\":1609502400000,\"ConfirmadosAcumulado\":420629,\"ConfirmadosNovos\":6951,\"Recuperados\":338668,\"Obitos\":6972,\"VarObitos\":66,\"VarRecuperados\":4392,\"Activos\":74989,\"conf5059total\":61812,\"conf6069total\":40955,\"conf7079total\":26771,\"conf80total\":33849,\"OBJECTID\":3880},{\"Data\":1609588800000,\"ConfirmadosAcumulado\":423870,\"ConfirmadosNovos\":3241,\"Recuperados\":340150,\"Obitos\":7045,\"VarObitos\":73,\"VarRecuperados\":1482,\"Activos\":76675,\"conf5059total\":62261,\"conf6069total\":41299,\"conf7079total\":27017,\"conf80total\":34100,\"OBJECTID\":3888},{\"Data\":1609675200000,\"ConfirmadosAcumulado\":427254,\"ConfirmadosNovos\":3384,\"Recuperados\":342535,\"Obitos\":7118,\"VarObitos\":73,\"VarRecuperados\":2385,\"Activos\":77601,\"conf5059total\":62794,\"conf6069total\":41645,\"conf7079total\":27284,\"conf80total\":34434,\"OBJECTID\":3896},{\"Data\":1609761600000,\"ConfirmadosAcumulado\":431623,\"ConfirmadosNovos\":4369,\"Recuperados\":344419,\"Obitos\":7196,\"VarObitos\":78,\"VarRecuperados\":1884,\"Activos\":80008,\"conf5059total\":63442,\"conf6069total\":42098,\"conf7079total\":27608,\"conf80total\":34856,\"OBJECTID\":3904},{\"Data\":1609848000000,\"ConfirmadosAcumulado\":436579,\"ConfirmadosNovos\":4956,\"Recuperados\":349110,\"Obitos\":7286,\"VarObitos\":90,\"VarRecuperados\":4691,\"Activos\":80183,\"conf5059total\":64162,\"conf6069total\":42607,\"conf7079total\":27962,\"conf80total\":35254,\"OBJECTID\":3912},{\"Data\":1609934400000,\"ConfirmadosAcumulado\":446606,\"ConfirmadosNovos\":10027,\"Recuperados\":352225,\"Obitos\":7377,\"VarObitos\":91,\"VarRecuperados\":3115,\"Activos\":87004,\"conf5059total\":65630,\"conf6069total\":43591,\"conf7079total\":28572,\"conf80total\":36025,\"OBJECTID\":3920},{\"Data\":1610020800000,\"ConfirmadosAcumulado\":456533,\"ConfirmadosNovos\":9927,\"Recuperados\":355701,\"Obitos\":7472,\"VarObitos\":95,\"VarRecuperados\":3476,\"Activos\":93360,\"conf5059total\":67062,\"conf6069total\":44549,\"conf7079total\":29195,\"conf80total\":36866,\"OBJECTID\":3928},{\"Data\":1610107200000,\"ConfirmadosAcumulado\":466709,\"ConfirmadosNovos\":10176,\"Recuperados\":360181,\"Obitos\":7590,\"VarObitos\":118,\"VarRecuperados\":4480,\"Activos\":98938,\"conf5059total\":68536,\"conf6069total\":45585,\"conf7079total\":29831,\"conf80total\":37650,\"OBJECTID\":3936},{\"Data\":1610193600000,\"ConfirmadosAcumulado\":476187,\"ConfirmadosNovos\":9478,\"Recuperados\":366080,\"Obitos\":7701,\"VarObitos\":111,\"VarRecuperados\":5899,\"Activos\":102406,\"conf5059total\":69854,\"conf6069total\":46577,\"conf7079total\":30488,\"conf80total\":38519,\"OBJECTID\":3944},{\"Data\":1610280000000,\"ConfirmadosAcumulado\":483689,\"ConfirmadosNovos\":7502,\"Recuperados\":369108,\"Obitos\":7803,\"VarObitos\":102,\"VarRecuperados\":3028,\"Activos\":106778,\"conf5059total\":70945,\"conf6069total\":47356,\"conf7079total\":30985,\"conf80total\":39189,\"OBJECTID\":3952},{\"Data\":1610366400000,\"ConfirmadosAcumulado\":489293,\"ConfirmadosNovos\":5604,\"Recuperados\":372056,\"Obitos\":7925,\"VarObitos\":122,\"VarRecuperados\":2948,\"Activos\":109312,\"conf5059total\":71739,\"conf6069total\":47944,\"conf7079total\":31345,\"conf80total\":39725,\"OBJECTID\":3960},{\"Data\":1610452800000,\"ConfirmadosAcumulado\":496552,\"ConfirmadosNovos\":7259,\"Recuperados\":378084,\"Obitos\":8080,\"VarObitos\":155,\"VarRecuperados\":6028,\"Activos\":110388,\"conf5059total\":72805,\"conf6069total\":48791,\"conf7079total\":31888,\"conf80total\":40275,\"OBJECTID\":3968},{\"Data\":1610539200000,\"ConfirmadosAcumulado\":507108,\"ConfirmadosNovos\":10556,\"Recuperados\":382544,\"Obitos\":8236,\"VarObitos\":156,\"VarRecuperados\":4460,\"Activos\":116328,\"conf5059total\":74375,\"conf6069total\":49911,\"conf7079total\":32561,\"conf80total\":41085,\"OBJECTID\":3976},{\"Data\":1610625600000,\"ConfirmadosAcumulado\":517806,\"ConfirmadosNovos\":10698,\"Recuperados\":387607,\"Obitos\":8384,\"VarObitos\":148,\"VarRecuperados\":5063,\"Activos\":121815,\"conf5059total\":75938,\"conf6069total\":50991,\"conf7079total\":33293,\"conf80total\":42057,\"OBJECTID\":3984},{\"Data\":1610712000000,\"ConfirmadosAcumulado\":528469,\"ConfirmadosNovos\":10663,\"Recuperados\":394065,\"Obitos\":8543,\"VarObitos\":159,\"VarRecuperados\":6458,\"Activos\":125861,\"conf5059total\":77547,\"conf6069total\":51972,\"conf7079total\":34018,\"conf80total\":42888,\"OBJECTID\":3992},{\"Data\":1610798400000,\"ConfirmadosAcumulado\":539416,\"ConfirmadosNovos\":10947,\"Recuperados\":402542,\"Obitos\":8709,\"VarObitos\":166,\"VarRecuperados\":8477,\"Activos\":128165,\"conf5059total\":79182,\"conf6069total\":53000,\"conf7079total\":34763,\"conf80total\":43756,\"OBJECTID\":4000},{\"Data\":1610884800000,\"ConfirmadosAcumulado\":549801,\"ConfirmadosNovos\":10385,\"Recuperados\":406929,\"Obitos\":8861,\"VarObitos\":152,\"VarRecuperados\":4387,\"Activos\":134011,\"conf5059total\":81305,\"conf6069total\":54074,\"conf7079total\":35417,\"conf80total\":44749,\"OBJECTID\":4008},{\"Data\":1610971200000,\"ConfirmadosAcumulado\":556503,\"ConfirmadosNovos\":6702,\"Recuperados\":411589,\"Obitos\":9028,\"VarObitos\":167,\"VarRecuperados\":4660,\"Activos\":135886,\"conf5059total\":81520,\"conf6069total\":54754,\"conf7079total\":35852,\"conf80total\":45289,\"OBJECTID\":4016},{\"Data\":1611057600000,\"ConfirmadosAcumulado\":566958,\"ConfirmadosNovos\":10455,\"Recuperados\":421871,\"Obitos\":9246,\"VarObitos\":218,\"VarRecuperados\":10282,\"Activos\":135841,\"conf5059total\":83107,\"conf6069total\":55860,\"conf7079total\":36553,\"conf80total\":46361,\"OBJECTID\":4024},{\"Data\":1611144000000,\"ConfirmadosAcumulado\":581605,\"ConfirmadosNovos\":14647,\"Recuperados\":428364,\"Obitos\":9465,\"VarObitos\":219,\"VarRecuperados\":6493,\"Activos\":143776,\"conf5059total\":85268,\"conf6069total\":57288,\"conf7079total\":37543,\"conf80total\":47670,\"OBJECTID\":4032},{\"Data\":1611230400000,\"ConfirmadosAcumulado\":595149,\"ConfirmadosNovos\":13544,\"Recuperados\":434237,\"Obitos\":9686,\"VarObitos\":221,\"VarRecuperados\":5873,\"Activos\":151226,\"conf5059total\":87322,\"conf6069total\":58630,\"conf7079total\":38369,\"conf80total\":48743,\"OBJECTID\":4040},{\"Data\":1611316800000,\"ConfirmadosAcumulado\":609136,\"ConfirmadosNovos\":13987,\"Recuperados\":441556,\"Obitos\":9920,\"VarObitos\":234,\"VarRecuperados\":7319,\"Activos\":157660,\"conf5059total\":89428,\"conf6069total\":59972,\"conf7079total\":39234,\"conf80total\":49808,\"OBJECTID\":4048},{\"Data\":1611403200000,\"ConfirmadosAcumulado\":624469,\"ConfirmadosNovos\":15333,\"Recuperados\":451324,\"Obitos\":10194,\"VarObitos\":274,\"VarRecuperados\":9768,\"Activos\":162951,\"conf5059total\":91791,\"conf6069total\":61532,\"conf7079total\":40176,\"conf80total\":50960,\"OBJECTID\":4056},{\"Data\":1611489600000,\"ConfirmadosAcumulado\":636190,\"ConfirmadosNovos\":11721,\"Recuperados\":456491,\"Obitos\":10469,\"VarObitos\":275,\"VarRecuperados\":5167,\"Activos\":169230,\"conf5059total\":93522,\"conf6069total\":62736,\"conf7079total\":40891,\"conf80total\":51937,\"OBJECTID\":4064},{\"Data\":1611576000000,\"ConfirmadosAcumulado\":643113,\"ConfirmadosNovos\":6923,\"Recuperados\":461757,\"Obitos\":10721,\"VarObitos\":252,\"VarRecuperados\":5266,\"Activos\":170635,\"conf5059total\":94532,\"conf6069total\":63454,\"conf7079total\":41377,\"conf80total\":52469,\"OBJECTID\":4072},{\"Data\":1611662400000,\"ConfirmadosAcumulado\":653878,\"ConfirmadosNovos\":10765,\"Recuperados\":475485,\"Obitos\":11012,\"VarObitos\":291,\"VarRecuperados\":13728,\"Activos\":167381,\"conf5059total\":96181,\"conf6069total\":64597,\"conf7079total\":42139,\"conf80total\":53287,\"OBJECTID\":4080},{\"Data\":1611748800000,\"ConfirmadosAcumulado\":668951,\"ConfirmadosNovos\":15073,\"Recuperados\":484753,\"Obitos\":11305,\"VarObitos\":293,\"VarRecuperados\":9268,\"Activos\":172893,\"conf5059total\":98564,\"conf6069total\":66194,\"conf7079total\":43173,\"conf80total\":54390,\"OBJECTID\":4088},{\"Data\":1611835200000,\"ConfirmadosAcumulado\":685383,\"ConfirmadosNovos\":16432,\"Recuperados\":493699,\"Obitos\":11608,\"VarObitos\":303,\"VarRecuperados\":8946,\"Activos\":180076,\"conf5059total\":100972,\"conf6069total\":67997,\"conf7079total\":44231,\"conf80total\":55662,\"OBJECTID\":4096},{\"Data\":1611921600000,\"ConfirmadosAcumulado\":698583,\"ConfirmadosNovos\":13200,\"Recuperados\":504886,\"Obitos\":11886,\"VarObitos\":278,\"VarRecuperados\":11187,\"Activos\":181811,\"conf5059total\":103008,\"conf6069total\":69437,\"conf7079total\":45107,\"conf80total\":56723,\"OBJECTID\":4104},{\"Data\":1612008000000,\"ConfirmadosAcumulado\":711018,\"ConfirmadosNovos\":12435,\"Recuperados\":518900,\"Obitos\":12179,\"VarObitos\":293,\"VarRecuperados\":14014,\"Activos\":179939,\"conf5059total\":104913,\"conf6069total\":70830,\"conf7079total\":45949,\"conf80total\":57713,\"OBJECTID\":4112},{\"Data\":1612094400000,\"ConfirmadosAcumulado\":720516,\"ConfirmadosNovos\":9498,\"Recuperados\":526411,\"Obitos\":12482,\"VarObitos\":303,\"VarRecuperados\":7511,\"Activos\":181623,\"conf5059total\":106318,\"conf6069total\":71810,\"conf7079total\":46630,\"conf80total\":58457,\"OBJECTID\":4120},{\"Data\":1612180800000,\"ConfirmadosAcumulado\":726321,\"ConfirmadosNovos\":5805,\"Recuperados\":534384,\"Obitos\":12757,\"VarObitos\":275,\"VarRecuperados\":7973,\"Activos\":179180,\"conf5059total\":107215,\"conf6069total\":72408,\"conf7079total\":47042,\"conf80total\":59043,\"OBJECTID\":4128},{\"Data\":1612267200000,\"ConfirmadosAcumulado\":731861,\"ConfirmadosNovos\":5540,\"Recuperados\":551956,\"Obitos\":13017,\"VarObitos\":260,\"VarRecuperados\":17572,\"Activos\":166888,\"conf5059total\":108149,\"conf6069total\":73037,\"conf7079total\":47465,\"conf80total\":59604,\"OBJECTID\":4136},{\"Data\":1612353600000,\"ConfirmadosAcumulado\":740944,\"ConfirmadosNovos\":9083,\"Recuperados\":563174,\"Obitos\":13257,\"VarObitos\":240,\"VarRecuperados\":11218,\"Activos\":164513,\"conf5059total\":109467,\"conf6069total\":74107,\"conf7079total\":48105,\"conf80total\":60366,\"OBJECTID\":4144},{\"Data\":1612440000000,\"ConfirmadosAcumulado\":748858,\"ConfirmadosNovos\":7914,\"Recuperados\":573934,\"Obitos\":13482,\"VarObitos\":225,\"VarRecuperados\":10760,\"Activos\":161442,\"conf5059total\":110714,\"conf6069total\":75002,\"conf7079total\":48755,\"conf80total\":61085,\"OBJECTID\":4152},{\"Data\":1612526400000,\"ConfirmadosAcumulado\":755774,\"ConfirmadosNovos\":6916,\"Recuperados\":585276,\"Obitos\":13740,\"VarObitos\":258,\"VarRecuperados\":11342,\"Activos\":156758,\"conf5059total\":111714,\"conf6069total\":75780,\"conf7079total\":49275,\"conf80total\":61720,\"OBJECTID\":4160},{\"Data\":1612612800000,\"ConfirmadosAcumulado\":761906,\"ConfirmadosNovos\":6132,\"Recuperados\":599593,\"Obitos\":13954,\"VarObitos\":214,\"VarRecuperados\":14317,\"Activos\":148359,\"conf5059total\":112668,\"conf6069total\":76499,\"conf7079total\":49756,\"conf80total\":62407,\"OBJECTID\":4168},{\"Data\":1612699200000,\"ConfirmadosAcumulado\":765414,\"ConfirmadosNovos\":3508,\"Recuperados\":606166,\"Obitos\":14158,\"VarObitos\":204,\"VarRecuperados\":6573,\"Activos\":145090,\"conf5059total\":113235,\"conf6069total\":76893,\"conf7079total\":50041,\"conf80total\":62776,\"OBJECTID\":4176},{\"Data\":1612785600000,\"ConfirmadosAcumulado\":767919,\"ConfirmadosNovos\":2505,\"Recuperados\":612921,\"Obitos\":14354,\"VarObitos\":196,\"VarRecuperados\":6755,\"Activos\":140664,\"conf5059total\":113627,\"conf6069total\":77194,\"conf7079total\":50227,\"conf80total\":62985,\"OBJECTID\":4184},{\"Data\":1612872000000,\"ConfirmadosAcumulado\":770502,\"ConfirmadosNovos\":2583,\"Recuperados\":628078,\"Obitos\":14557,\"VarObitos\":203,\"VarRecuperados\":15157,\"Activos\":127867,\"conf5059total\":114025,\"conf6069total\":77475,\"conf7079total\":50468,\"conf80total\":63289,\"OBJECTID\":4192},{\"Data\":1612958400000,\"ConfirmadosAcumulado\":774889,\"ConfirmadosNovos\":4387,\"Recuperados\":636859,\"Obitos\":14718,\"VarObitos\":161,\"VarRecuperados\":8781,\"Activos\":123312,\"conf5059total\":114746,\"conf6069total\":77989,\"conf7079total\":50816,\"conf80total\":63764,\"OBJECTID\":4200},{\"Data\":1613044800000,\"ConfirmadosAcumulado\":778369,\"ConfirmadosNovos\":3480,\"Recuperados\":645122,\"Obitos\":14885,\"VarObitos\":167,\"VarRecuperados\":8263,\"Activos\":118362,\"conf5059total\":115290,\"conf6069total\":78461,\"conf7079total\":51103,\"conf80total\":64076,\"OBJECTID\":4208},{\"Data\":1613131200000,\"ConfirmadosAcumulado\":781223,\"ConfirmadosNovos\":2854,\"Recuperados\":652739,\"Obitos\":15034,\"VarObitos\":149,\"VarRecuperados\":7617,\"Activos\":113450,\"conf5059total\":115716,\"conf6069total\":78769,\"conf7079total\":51361,\"conf80total\":64361,\"OBJECTID\":4216},{\"Data\":1613217600000,\"ConfirmadosAcumulado\":784079,\"ConfirmadosNovos\":2856,\"Recuperados\":661525,\"Obitos\":15183,\"VarObitos\":149,\"VarRecuperados\":8786,\"Activos\":107371,\"conf5059total\":116167,\"conf6069total\":79086,\"conf7079total\":51580,\"conf80total\":64637,\"OBJECTID\":4224},{\"Data\":1613304000000,\"ConfirmadosAcumulado\":785756,\"ConfirmadosNovos\":1677,\"Recuperados\":665316,\"Obitos\":15321,\"VarObitos\":138,\"VarRecuperados\":3791,\"Activos\":105119,\"conf5059total\":116422,\"conf6069total\":79283,\"conf7079total\":51697,\"conf80total\":64835,\"OBJECTID\":4232},{\"Data\":1613390400000,\"ConfirmadosAcumulado\":787059,\"ConfirmadosNovos\":1303,\"Recuperados\":668854,\"Obitos\":15411,\"VarObitos\":90,\"VarRecuperados\":3538,\"Activos\":102794,\"conf5059total\":116611,\"conf6069total\":79440,\"conf7079total\":51827,\"conf80total\":64962,\"OBJECTID\":4240},{\"Data\":1613476800000,\"ConfirmadosAcumulado\":788561,\"ConfirmadosNovos\":1502,\"Recuperados\":677719,\"Obitos\":15522,\"VarObitos\":111,\"VarRecuperados\":8865,\"Activos\":95320,\"conf5059total\":116852,\"conf6069total\":79626,\"conf7079total\":51968,\"conf80total\":65119,\"OBJECTID\":4248},{\"Data\":1613563200000,\"ConfirmadosAcumulado\":790885,\"ConfirmadosNovos\":2324,\"Recuperados\":683061,\"Obitos\":15649,\"VarObitos\":127,\"VarRecuperados\":5342,\"Activos\":92175,\"conf5059total\":117214,\"conf6069total\":79867,\"conf7079total\":52154,\"conf80total\":65373,\"OBJECTID\":4256},{\"Data\":1613649600000,\"ConfirmadosAcumulado\":792829,\"ConfirmadosNovos\":1944,\"Recuperados\":687462,\"Obitos\":15754,\"VarObitos\":105,\"VarRecuperados\":4401,\"Activos\":89613,\"conf5059total\":117487,\"conf6069total\":80082,\"conf7079total\":52338,\"conf80total\":65543,\"OBJECTID\":4264},{\"Data\":1613736000000,\"ConfirmadosAcumulado\":794769,\"ConfirmadosNovos\":1940,\"Recuperados\":691866,\"Obitos\":15821,\"VarObitos\":67,\"VarRecuperados\":4404,\"Activos\":87082,\"conf5059total\":117791,\"conf6069total\":80325,\"conf7079total\":52486,\"conf80total\":65706,\"OBJECTID\":4272},{\"Data\":1613822400000,\"ConfirmadosAcumulado\":796339,\"ConfirmadosNovos\":1570,\"Recuperados\":696916,\"Obitos\":15897,\"VarObitos\":76,\"VarRecuperados\":5050,\"Activos\":83526,\"conf5059total\":118022,\"conf6069total\":80519,\"conf7079total\":52598,\"conf80total\":65858,\"OBJECTID\":4280},{\"Data\":1613908800000,\"ConfirmadosAcumulado\":797525,\"ConfirmadosNovos\":1186,\"Recuperados\":699222,\"Obitos\":15962,\"VarObitos\":65,\"VarRecuperados\":2306,\"Activos\":82341,\"conf5059total\":118192,\"conf6069total\":80668,\"conf7079total\":52701,\"conf80total\":65983,\"OBJECTID\":4288},{\"Data\":1613995200000,\"ConfirmadosAcumulado\":798074,\"ConfirmadosNovos\":549,\"Recuperados\":701409,\"Obitos\":16023,\"VarObitos\":61,\"VarRecuperados\":2187,\"Activos\":80642,\"conf5059total\":118289,\"conf6069total\":80724,\"conf7079total\":52755,\"conf80total\":66075,\"OBJECTID\":4304},{\"Data\":1614081600000,\"ConfirmadosAcumulado\":799106,\"ConfirmadosNovos\":1032,\"Recuperados\":705976,\"Obitos\":16086,\"VarObitos\":63,\"VarRecuperados\":4567,\"Activos\":77044,\"conf5059total\":118432,\"conf6069total\":80836,\"conf7079total\":52845,\"conf80total\":66204,\"OBJECTID\":4312},{\"Data\":1614168000000,\"ConfirmadosAcumulado\":800586,\"ConfirmadosNovos\":1480,\"Recuperados\":709054,\"Obitos\":16136,\"VarObitos\":50,\"VarRecuperados\":3078,\"Activos\":75396,\"conf5059total\":118645,\"conf6069total\":80997,\"conf7079total\":52961,\"conf80total\":66325,\"OBJECTID\":4320},{\"Data\":1614254400000,\"ConfirmadosAcumulado\":801746,\"ConfirmadosNovos\":1160,\"Recuperados\":711713,\"Obitos\":16185,\"VarObitos\":49,\"VarRecuperados\":2659,\"Activos\":73848,\"conf5059total\":118803,\"conf6069total\":81142,\"conf7079total\":53063,\"conf80total\":66455,\"OBJECTID\":4328},{\"Data\":1614340800000,\"ConfirmadosAcumulado\":802773,\"ConfirmadosNovos\":1027,\"Recuperados\":714493,\"Obitos\":16243,\"VarObitos\":58,\"VarRecuperados\":2780,\"Activos\":72037,\"conf5059total\":118957,\"conf6069total\":81264,\"conf7079total\":53143,\"conf80total\":66561,\"OBJECTID\":4336},{\"Data\":1614427200000,\"ConfirmadosAcumulado\":803844,\"ConfirmadosNovos\":1071,\"Recuperados\":717313,\"Obitos\":16276,\"VarObitos\":33,\"VarRecuperados\":2820,\"Activos\":70255,\"conf5059total\":119139,\"conf6069total\":81400,\"conf7079total\":53229,\"conf80total\":66648,\"OBJECTID\":4344},{\"Data\":1614513600000,\"ConfirmadosAcumulado\":804562,\"ConfirmadosNovos\":718,\"Recuperados\":718977,\"Obitos\":16317,\"VarObitos\":41,\"VarRecuperados\":1664,\"Activos\":69268,\"conf5059total\":119242,\"conf6069total\":81477,\"conf7079total\":53278,\"conf80total\":66718,\"OBJECTID\":4352},{\"Data\":1614600000000,\"ConfirmadosAcumulado\":804956,\"ConfirmadosNovos\":394,\"Recuperados\":720235,\"Obitos\":16351,\"VarObitos\":34,\"VarRecuperados\":1258,\"Activos\":68370,\"conf5059total\":119306,\"conf6069total\":81547,\"conf7079total\":53311,\"conf80total\":66761,\"OBJECTID\":4360},{\"Data\":1614686400000,\"ConfirmadosAcumulado\":805647,\"ConfirmadosNovos\":691,\"Recuperados\":723465,\"Obitos\":16389,\"VarObitos\":38,\"VarRecuperados\":3230,\"Activos\":65793,\"conf5059total\":119428,\"conf6069total\":81618,\"conf7079total\":53357,\"conf80total\":66824,\"OBJECTID\":4368},{\"Data\":1614772800000,\"ConfirmadosAcumulado\":806626,\"ConfirmadosNovos\":979,\"Recuperados\":725399,\"Obitos\":16430,\"VarObitos\":41,\"VarRecuperados\":1934,\"Activos\":64797,\"conf5059total\":119567,\"conf6069total\":81762,\"conf7079total\":53416,\"conf80total\":66883,\"OBJECTID\":4376},{\"Data\":1614859200000,\"ConfirmadosAcumulado\":806916,\"ConfirmadosNovos\":290,\"Recuperados\":727053,\"Obitos\":16458,\"VarObitos\":28,\"VarRecuperados\":1654,\"Activos\":63945,\"conf5059total\":119699,\"conf6069total\":81838,\"conf7079total\":53471,\"conf80total\":66972,\"OBJECTID\":4384},{\"Data\":1614945600000,\"ConfirmadosAcumulado\":808405,\"ConfirmadosNovos\":949,\"Recuperados\":728659,\"Obitos\":16486,\"VarObitos\":28,\"VarRecuperados\":1606,\"Activos\":63260,\"conf5059total\":119875,\"conf6069total\":81949,\"conf7079total\":53537,\"conf80total\":67043,\"OBJECTID\":4392},{\"Data\":1615032000000,\"ConfirmadosAcumulado\":809412,\"ConfirmadosNovos\":1007,\"Recuperados\":730601,\"Obitos\":16512,\"VarObitos\":26,\"VarRecuperados\":1942,\"Activos\":62699,\"conf5059total\":120028,\"conf6069total\":82054,\"conf7079total\":53619,\"conf80total\":67120,\"OBJECTID\":4400},{\"Data\":1615118400000,\"ConfirmadosAcumulado\":810094,\"ConfirmadosNovos\":682,\"Recuperados\":731567,\"Obitos\":16540,\"VarObitos\":28,\"VarRecuperados\":966,\"Activos\":61987,\"conf5059total\":120134,\"conf6069total\":82107,\"conf7079total\":53680,\"conf80total\":67166,\"OBJECTID\":4408},{\"Data\":1615204800000,\"ConfirmadosAcumulado\":810459,\"ConfirmadosNovos\":365,\"Recuperados\":732346,\"Obitos\":16565,\"VarObitos\":25,\"VarRecuperados\":779,\"Activos\":61548,\"conf5059total\":120208,\"conf6069total\":82156,\"conf7079total\":53712,\"conf80total\":67208,\"OBJECTID\":4416},{\"Data\":1615291200000,\"ConfirmadosAcumulado\":811306,\"ConfirmadosNovos\":847,\"Recuperados\":734218,\"Obitos\":16595,\"VarObitos\":30,\"VarRecuperados\":1872,\"Activos\":60493,\"conf5059total\":120354,\"conf6069total\":82259,\"conf7079total\":53780,\"conf80total\":67287,\"OBJECTID\":4424},{\"Data\":1615377600000,\"ConfirmadosAcumulado\":811948,\"ConfirmadosNovos\":642,\"Recuperados\":738179,\"Obitos\":16617,\"VarObitos\":22,\"VarRecuperados\":3961,\"Activos\":57152,\"conf5059total\":120441,\"conf6069total\":82329,\"conf7079total\":53827,\"conf80total\":67340,\"OBJECTID\":4432},{\"Data\":1615420800000,\"ConfirmadosAcumulado\":812575,\"ConfirmadosNovos\":627,\"Recuperados\":744196,\"Obitos\":16635,\"VarObitos\":18,\"VarRecuperados\":6017,\"Activos\":51744,\"conf5059total\":120527,\"conf6069total\":82399,\"conf7079total\":53879,\"conf80total\":67388,\"OBJECTID\":4440},{\"Data\":1615507200000,\"ConfirmadosAcumulado\":813152,\"ConfirmadosNovos\":577,\"Recuperados\":749770,\"Obitos\":16650,\"VarObitos\":15,\"VarRecuperados\":5574,\"Activos\":46732,\"conf5059total\":120622,\"conf6069total\":82468,\"conf7079total\":82468,\"conf80total\":67436,\"OBJECTID\":4448},{\"Data\":1615593600000,\"ConfirmadosAcumulado\":813716,\"ConfirmadosNovos\":564,\"Recuperados\":756259,\"Obitos\":16669,\"VarObitos\":19,\"VarRecuperados\":6489,\"Activos\":40788,\"conf5059total\":120711,\"conf6069total\":82519,\"conf7079total\":53967,\"conf80total\":67496,\"OBJECTID\":4456},{\"Data\":1615680000000,\"ConfirmadosAcumulado\":814257,\"ConfirmadosNovos\":541,\"Recuperados\":759417,\"Obitos\":16684,\"VarObitos\":15,\"VarRecuperados\":3158,\"Activos\":38156,\"conf5059total\":120790,\"conf6069total\":82569,\"conf7079total\":54005,\"conf80total\":67536,\"OBJECTID\":4464},{\"Data\":1615809600000,\"ConfirmadosAcumulado\":814513,\"ConfirmadosNovos\":256,\"Recuperados\":761788,\"Obitos\":16694,\"VarObitos\":10,\"VarRecuperados\":2371,\"Activos\":36031,\"conf5059total\":120843,\"conf6069total\":82609,\"conf7079total\":54035,\"conf80total\":67571,\"OBJECTID\":4472},{\"Data\":1615896000000,\"ConfirmadosAcumulado\":814897,\"ConfirmadosNovos\":384,\"Recuperados\":762961,\"Obitos\":16707,\"VarObitos\":13,\"VarRecuperados\":1173,\"Activos\":35229,\"conf5059total\":120901,\"conf6069total\":82662,\"conf7079total\":54065,\"conf80total\":67619,\"OBJECTID\":4480},{\"Data\":1615982400000,\"ConfirmadosAcumulado\":815570,\"ConfirmadosNovos\":673,\"Recuperados\":764019,\"Obitos\":16722,\"VarObitos\":15,\"VarRecuperados\":1058,\"Activos\":34829,\"conf5059total\":121017,\"conf6069total\":82743,\"conf7079total\":54116,\"conf80total\":67679,\"OBJECTID\":4488},{\"Data\":1616068800000,\"ConfirmadosAcumulado\":816055,\"ConfirmadosNovos\":485,\"Recuperados\":764599,\"Obitos\":16743,\"VarObitos\":21,\"VarRecuperados\":580,\"Activos\":34713,\"conf5059total\":121089,\"conf6069total\":82799,\"conf7079total\":54162,\"conf80total\":67709,\"OBJECTID\":4496},{\"Data\":1616155200000,\"ConfirmadosAcumulado\":816623,\"ConfirmadosNovos\":568,\"Recuperados\":766170,\"Obitos\":16754,\"VarObitos\":11,\"VarRecuperados\":1571,\"Activos\":33699,\"conf5059total\":121166,\"conf6069total\":82871,\"conf7079total\":54194,\"conf80total\":67747,\"OBJECTID\":4504},{\"Data\":1616241600000,\"ConfirmadosAcumulado\":817080,\"ConfirmadosNovos\":457,\"Recuperados\":766924,\"Obitos\":16762,\"VarObitos\":8,\"VarRecuperados\":754,\"Activos\":33394,\"conf5059total\":121236,\"conf6069total\":82928,\"conf7079total\":54231,\"conf80total\":67778,\"OBJECTID\":4512},{\"Data\":1616328000000,\"ConfirmadosAcumulado\":817530,\"ConfirmadosNovos\":450,\"Recuperados\":767319,\"Obitos\":16768,\"VarObitos\":6,\"VarRecuperados\":395,\"Activos\":33443,\"conf5059total\":121309,\"conf6069total\":82990,\"conf7079total\":54257,\"conf80total\":67812,\"OBJECTID\":4520},{\"Data\":1616414400000,\"ConfirmadosAcumulado\":817778,\"ConfirmadosNovos\":248,\"Recuperados\":767874,\"Obitos\":16784,\"VarObitos\":16,\"VarRecuperados\":555,\"Activos\":33120,\"conf5059total\":121360,\"conf6069total\":83030,\"conf7079total\":54275,\"conf80total\":67840,\"OBJECTID\":4528},{\"Data\":1616500800000,\"ConfirmadosAcumulado\":818212,\"ConfirmadosNovos\":434,\"Recuperados\":769086,\"Obitos\":16794,\"VarObitos\":10,\"VarRecuperados\":1212,\"Activos\":32332,\"conf5059total\":121432,\"conf6069total\":83086,\"conf7079total\":54313,\"conf80total\":67892,\"OBJECTID\":4536},{\"Data\":1616544000000,\"ConfirmadosAcumulado\":818787,\"ConfirmadosNovos\":575,\"Recuperados\":769838,\"Obitos\":37004,\"VarObitos\":11,\"VarRecuperados\":752,\"Activos\":32144,\"conf5059total\":121523,\"conf6069total\":83164,\"conf7079total\":54353,\"conf80total\":67925,\"OBJECTID\":4544},{\"Data\":1616630400000,\"ConfirmadosAcumulado\":819210,\"ConfirmadosNovos\":423,\"Recuperados\":770448,\"Obitos\":16814,\"VarObitos\":9,\"VarRecuperados\":610,\"Activos\":31948,\"conf5059total\":121590,\"conf6069total\":83239,\"conf7079total\":54387,\"conf80total\":67965,\"OBJECTID\":4552},{\"Data\":1616716800000,\"ConfirmadosAcumulado\":819698,\"ConfirmadosNovos\":488,\"Recuperados\":771339,\"Obitos\":16819,\"VarObitos\":5,\"VarRecuperados\":891,\"Activos\":31540,\"conf5059total\":121652,\"conf6069total\":83301,\"conf7079total\":54405,\"conf80total\":68009,\"OBJECTID\":4560},{\"Data\":1616803200000,\"ConfirmadosAcumulado\":820042,\"ConfirmadosNovos\":344,\"Recuperados\":775007,\"Obitos\":16827,\"VarObitos\":8,\"VarRecuperados\":3668,\"Activos\":28208,\"conf5059total\":121694,\"conf6069total\":83356,\"conf7079total\":54437,\"conf80total\":68073,\"OBJECTID\":4568},{\"Data\":1616889600000,\"ConfirmadosAcumulado\":820407,\"ConfirmadosNovos\":365,\"Recuperados\":775391,\"Obitos\":16837,\"VarObitos\":10,\"VarRecuperados\":384,\"Activos\":28179,\"conf5059total\":121748,\"conf6069total\":83415,\"conf7079total\":54469,\"conf80total\":68105,\"OBJECTID\":4576},{\"Data\":1616972400000,\"ConfirmadosAcumulado\":820716,\"ConfirmadosNovos\":309,\"Recuperados\":775849,\"Obitos\":16843,\"VarObitos\":6,\"VarRecuperados\":458,\"Activos\":28024,\"conf5059total\":121784,\"conf6069total\":83477,\"conf7079total\":54479,\"conf80total\":68134,\"OBJECTID\":4584},{\"Data\":1617058800000,\"ConfirmadosAcumulado\":821105,\"ConfirmadosNovos\":389,\"Recuperados\":777503,\"Obitos\":16845,\"VarObitos\":2,\"VarRecuperados\":1654,\"Activos\":26756,\"conf5059total\":121849,\"conf6069total\":83522,\"conf7079total\":54518,\"conf80total\":68163,\"OBJECTID\":4592},{\"Data\":1617145200000,\"ConfirmadosAcumulado\":821722,\"ConfirmadosNovos\":617,\"Recuperados\":778210,\"Obitos\":16848,\"VarObitos\":3,\"VarRecuperados\":707,\"Activos\":26664,\"conf5059total\":121930,\"conf6069total\":83587,\"conf7079total\":54555,\"conf80total\":68191,\"OBJECTID\":4600}]");

/***/ }),

/***/ "DPLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data_cases_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ALF3");
var _data_cases_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("ALF3", 1);

async function handler(req, res) {
  res.statusCode = 200;
  res.json(_data_cases_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ })

/******/ });