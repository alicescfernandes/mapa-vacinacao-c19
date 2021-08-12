(function() {
var exports = {};
exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 8066:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const regioes = {
  continente: '/api/rt/continente',
  nacional: '/api/rt/nacional',
  alentejo: '/api/rt/alentejo',
  algarve: '/api/rt/algarve',
  lvt: '/api/rt/lvt',
  madeira: '/api/rt/madeira',
  acores: '/api/rt/acores',
  todas: '/api/rt/todas'
};
async function handler(req, res) {
  res.end(JSON.stringify(regioes));
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8066));
module.exports = __webpack_exports__;

})();