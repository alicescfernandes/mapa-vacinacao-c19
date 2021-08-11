(function() {
var exports = {};
exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 9962:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./rt_alentejo": [
		4252,
		252
	],
	"./rt_alentejo.json": [
		4252,
		252
	],
	"./rt_algarve": [
		4900,
		900
	],
	"./rt_algarve.json": [
		4900,
		900
	],
	"./rt_centro": [
		5030,
		30
	],
	"./rt_centro.json": [
		5030,
		30
	],
	"./rt_continente": [
		983,
		983
	],
	"./rt_continente.json": [
		983,
		983
	],
	"./rt_lvt": [
		7294,
		294
	],
	"./rt_lvt.json": [
		7294,
		294
	],
	"./rt_nacional": [
		8903,
		903
	],
	"./rt_nacional.json": [
		8903,
		903
	],
	"./rt_norte": [
		8820,
		89
	],
	"./rt_norte.json": [
		8820,
		89
	],
	"./rt_raa": [
		1133,
		133
	],
	"./rt_raa.json": [
		1133,
		133
	],
	"./rt_ram": [
		524,
		524
	],
	"./rt_ram.json": [
		524,
		524
	],
	"./rt_todas": [
		7447,
		447
	],
	"./rt_todas.json": [
		7447,
		447
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
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 9962;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
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

  let data = await __webpack_require__(9962)(`./${regioes[regiao]}`);
  res.end(JSON.stringify(data.default));
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1262));
module.exports = __webpack_exports__;

})();