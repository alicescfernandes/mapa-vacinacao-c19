(function() {
var exports = {};
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 9615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(479);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
;// CONCATENATED MODULE: ./data/ars.json
var ars_namespaceObject = JSON.parse('{"objectIdFieldName":"OBJECTID","uniqueIdField":{"name":"OBJECTID","isSystemMaintained":true},"globalIdFieldName":"","geometryType":"esriGeometryPoint","spatialReference":{"wkid":102100,"latestWkid":3857},"fields":[{"name":"ARSNome","type":"esriFieldTypeString","alias":"ARSNome","sqlType":"sqlTypeOther","length":254,"domain":null,"defaultValue":null},{"name":"Data","type":"esriFieldTypeDate","alias":"Data","sqlType":"sqlTypeOther","length":8,"domain":null,"defaultValue":"-2209161600000"},{"name":"ConfirmadosAcumulado","type":"esriFieldTypeInteger","alias":"ConfirmadosAcumulado","sqlType":"sqlTypeOther","domain":null},{"name":"ConfirmadosNovos","type":"esriFieldTypeInteger","alias":"ConfirmadosNovos","sqlType":"sqlTypeOther","domain":null},{"name":"VarObitos","type":"esriFieldTypeInteger","alias":"Variação de Óbitos","sqlType":"sqlTypeOther","domain":null,"defaultValue":null},{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID","sqlType":"sqlTypeOther","domain":null,"defaultValue":null}],"features":[{"attributes":{"ARSNome":"Nacional","Data":1618225200000,"ConfirmadosAcumulado":827765,"ConfirmadosNovos":271,"VarObitos":2,"OBJECTID":4704}},{"attributes":{"ARSNome":"ARS Norte","Data":1618225200000,"ConfirmadosAcumulado":332482,"ConfirmadosNovos":70,"VarObitos":1,"OBJECTID":4705}},{"attributes":{"ARSNome":"ARS Centro","Data":1618225200000,"ConfirmadosAcumulado":117808,"ConfirmadosNovos":18,"VarObitos":0,"OBJECTID":4706}},{"attributes":{"ARSNome":"ARS Lisboa e Vale do Tejo","Data":1618225200000,"ConfirmadosAcumulado":313675,"ConfirmadosNovos":60,"VarObitos":1,"OBJECTID":4707}},{"attributes":{"ARSNome":"ARS Alentejo","Data":1618225200000,"ConfirmadosAcumulado":29398,"ConfirmadosNovos":52,"VarObitos":0,"OBJECTID":4708}},{"attributes":{"ARSNome":"ARS Algarve","Data":1618225200000,"ConfirmadosAcumulado":21167,"ConfirmadosNovos":21,"VarObitos":0,"OBJECTID":4709}},{"attributes":{"ARSNome":"Açores","Data":1618225200000,"ConfirmadosAcumulado":4373,"ConfirmadosNovos":23,"VarObitos":0,"OBJECTID":4710}},{"attributes":{"ARSNome":"Madeira","Data":1618225200000,"ConfirmadosAcumulado":8862,"ConfirmadosNovos":27,"VarObitos":0,"OBJECTID":4711}},{"attributes":{"ARSNome":"Nacional","Data":1618311600000,"ConfirmadosAcumulado":828173,"ConfirmadosNovos":408,"VarObitos":5,"OBJECTID":4712}},{"attributes":{"ARSNome":"ARS Norte","Data":1618311600000,"ConfirmadosAcumulado":332635,"ConfirmadosNovos":153,"VarObitos":1,"OBJECTID":4713}},{"attributes":{"ARSNome":"ARS Centro","Data":1618311600000,"ConfirmadosAcumulado":117856,"ConfirmadosNovos":48,"VarObitos":1,"OBJECTID":4714}},{"attributes":{"ARSNome":"ARS Lisboa e Vale do Tejo","Data":1618311600000,"ConfirmadosAcumulado":313812,"ConfirmadosNovos":137,"VarObitos":3,"OBJECTID":4715}},{"attributes":{"ARSNome":"ARS Alentejo","Data":1618311600000,"ConfirmadosAcumulado":29422,"ConfirmadosNovos":24,"VarObitos":0,"OBJECTID":4716}},{"attributes":{"ARSNome":"ARS Algarve","Data":1618311600000,"ConfirmadosAcumulado":21180,"ConfirmadosNovos":13,"VarObitos":0,"OBJECTID":4717}},{"attributes":{"ARSNome":"Açores","Data":1618311600000,"ConfirmadosAcumulado":4397,"ConfirmadosNovos":24,"VarObitos":0,"OBJECTID":4718}},{"attributes":{"ARSNome":"Madeira","Data":1618311600000,"ConfirmadosAcumulado":8871,"ConfirmadosNovos":9,"VarObitos":0,"OBJECTID":4719}},{"attributes":{"ARSNome":"Nacional","Data":1618398000000,"ConfirmadosAcumulado":828857,"ConfirmadosNovos":684,"VarObitos":8,"OBJECTID":4720}},{"attributes":{"ARSNome":"ARS Norte","Data":1618398000000,"ConfirmadosAcumulado":332900,"ConfirmadosNovos":265,"VarObitos":3,"OBJECTID":4721}},{"attributes":{"ARSNome":"ARS Centro","Data":1618398000000,"ConfirmadosAcumulado":117922,"ConfirmadosNovos":66,"VarObitos":0,"OBJECTID":4722}},{"attributes":{"ARSNome":"ARS Lisboa e Vale do Tejo","Data":1618398000000,"ConfirmadosAcumulado":314000,"ConfirmadosNovos":188,"VarObitos":5,"OBJECTID":4723}},{"attributes":{"ARSNome":"ARS Alentejo","Data":1618398000000,"ConfirmadosAcumulado":29465,"ConfirmadosNovos":43,"VarObitos":0,"OBJECTID":4724}},{"attributes":{"ARSNome":"ARS Algarve","Data":1618398000000,"ConfirmadosAcumulado":21246,"ConfirmadosNovos":66,"VarObitos":0,"OBJECTID":4725}},{"attributes":{"ARSNome":"Açores","Data":1618398000000,"ConfirmadosAcumulado":4420,"ConfirmadosNovos":23,"VarObitos":0,"OBJECTID":4726}},{"attributes":{"ARSNome":"Madeira","Data":1618398000000,"ConfirmadosAcumulado":8904,"ConfirmadosNovos":33,"VarObitos":0,"OBJECTID":4727}},{"attributes":{"ARSNome":"Nacional","Data":1618484400000,"ConfirmadosAcumulado":829358,"ConfirmadosNovos":501,"VarObitos":2,"OBJECTID":4728}},{"attributes":{"ARSNome":"ARS Norte","Data":1618484400000,"ConfirmadosAcumulado":333056,"ConfirmadosNovos":156,"VarObitos":2,"OBJECTID":4729}},{"attributes":{"ARSNome":"ARS Centro","Data":1618484400000,"ConfirmadosAcumulado":117995,"ConfirmadosNovos":73,"VarObitos":0,"OBJECTID":4730}},{"attributes":{"ARSNome":"ARS Lisboa e Vale do Tejo","Data":1618484400000,"ConfirmadosAcumulado":314188,"ConfirmadosNovos":188,"VarObitos":0,"OBJECTID":4731}},{"attributes":{"ARSNome":"ARS Alentejo","Data":1618484400000,"ConfirmadosAcumulado":29486,"ConfirmadosNovos":21,"VarObitos":0,"OBJECTID":4732}},{"attributes":{"ARSNome":"ARS Algarve","Data":1618484400000,"ConfirmadosAcumulado":21278,"ConfirmadosNovos":32,"VarObitos":0,"OBJECTID":4733}},{"attributes":{"ARSNome":"Açores","Data":1618484400000,"ConfirmadosAcumulado":4436,"ConfirmadosNovos":16,"VarObitos":0,"OBJECTID":4734}},{"attributes":{"ARSNome":"Madeira","Data":1618484400000,"ConfirmadosAcumulado":8919,"ConfirmadosNovos":15,"VarObitos":0,"OBJECTID":4735}},{"attributes":{"ARSNome":"Nacional","Data":1618570800000,"ConfirmadosAcumulado":829911,"ConfirmadosNovos":553,"VarObitos":4,"OBJECTID":4736}},{"attributes":{"ARSNome":"ARS Norte","Data":1618570800000,"ConfirmadosAcumulado":333284,"ConfirmadosNovos":228,"VarObitos":2,"OBJECTID":4737}},{"attributes":{"ARSNome":"ARS Centro","Data":1618570800000,"ConfirmadosAcumulado":118027,"ConfirmadosNovos":32,"VarObitos":1,"OBJECTID":4738}},{"attributes":{"ARSNome":"ARS Lisboa e Vale do Tejo","Data":1618570800000,"ConfirmadosAcumulado":314370,"ConfirmadosNovos":182,"VarObitos":1,"OBJECTID":4739}},{"attributes":{"ARSNome":"ARS Alentejo","Data":1618570800000,"ConfirmadosAcumulado":29511,"ConfirmadosNovos":25,"VarObitos":0,"OBJECTID":4740}},{"attributes":{"ARSNome":"ARS Algarve","Data":1618570800000,"ConfirmadosAcumulado":21301,"ConfirmadosNovos":23,"VarObitos":0,"OBJECTID":4741}},{"attributes":{"ARSNome":"Açores","Data":1618570800000,"ConfirmadosAcumulado":4474,"ConfirmadosNovos":38,"VarObitos":0,"OBJECTID":4742}},{"attributes":{"ARSNome":"Madeira","Data":1618570800000,"ConfirmadosAcumulado":8944,"ConfirmadosNovos":25,"VarObitos":0,"OBJECTID":4743}},{"attributes":{"ARSNome":"Nacional","Data":1618657200000,"ConfirmadosAcumulado":530560,"ConfirmadosNovos":649,"VarObitos":5,"OBJECTID":4744}},{"attributes":{"ARSNome":"ARS Norte","Data":1618657200000,"ConfirmadosAcumulado":33542,"ConfirmadosNovos":258,"VarObitos":0,"OBJECTID":4745}},{"attributes":{"ARSNome":"ARS Centro","Data":1618657200000,"ConfirmadosAcumulado":118079,"ConfirmadosNovos":52,"VarObitos":0,"OBJECTID":4746}},{"attributes":{"ARSNome":"ARS Lisboa e Vale do Tejo","Data":1618657200000,"ConfirmadosAcumulado":314568,"ConfirmadosNovos":198,"VarObitos":3,"OBJECTID":4747}},{"attributes":{"ARSNome":"ARS Alentejo","Data":1618657200000,"ConfirmadosAcumulado":29554,"ConfirmadosNovos":43,"VarObitos":0,"OBJECTID":4748}},{"attributes":{"ARSNome":"ARS Algarve","Data":1618657200000,"ConfirmadosAcumulado":21348,"ConfirmadosNovos":47,"VarObitos":1,"OBJECTID":4749}},{"attributes":{"ARSNome":"Açores","Data":1618657200000,"ConfirmadosAcumulado":4507,"ConfirmadosNovos":33,"VarObitos":1,"OBJECTID":4750}},{"attributes":{"ARSNome":"Madeira","Data":1618657200000,"ConfirmadosAcumulado":8962,"ConfirmadosNovos":18,"VarObitos":0,"OBJECTID":4751}}]}');
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2859);
;// CONCATENATED MODULE: ./pages/api/ars.js




function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const cors = initMiddleware(external_cors_default()({
  methods: ['GET']
}));
async function handler(req, res) {
  (0,utils/* trackPlausible */.DG)(req);
  await cors(req, res);
  res.statusCode = 200;
  res.json(ars_namespaceObject);
}

/***/ }),

/***/ 479:
/***/ (function(module) {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ 3879:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ 5931:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns/locale");;

/***/ }),

/***/ 6786:
/***/ (function(module) {

"use strict";
module.exports = require("node-fetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [859], function() { return __webpack_exec__(9615); });
module.exports = __webpack_exports__;

})();