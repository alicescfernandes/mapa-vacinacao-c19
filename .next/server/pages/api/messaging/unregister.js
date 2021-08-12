(function() {
var exports = {};
exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 8169:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _connectors_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2578);

async function handler(req, res) {
  var _req$body;

  if (req.method === 'POST' && ((_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.fcm_token) !== undefined) {
    let firebase = new _connectors_firebase__WEBPACK_IMPORTED_MODULE_0__/* .FirebaseConnector */ .$();
    firebase.unregisterDevice(req.body.fcm_token).then(() => {
      console.log('registered');
    });
  }

  res.statusCode = 200;
  res.json({});
}

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 4054:
/***/ (function(module) {

"use strict";
module.exports = require("firebase-admin");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [578], function() { return __webpack_exec__(8169); });
module.exports = __webpack_exports__;

})();