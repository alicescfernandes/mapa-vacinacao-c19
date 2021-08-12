(function() {
var exports = {};
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 4772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
__webpack_require__(334).config({
  path: './../.env'
});

const crypto = __webpack_require__(6417);

var shell = __webpack_require__(5524);

const config = {
  api: {
    bodyParser: false
  }
};

const webhookPayloadParser = req => new Promise(resolve => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    resolve(Buffer.from(data).toString());
  });
});

function verifyPostData(req, res) {
  return new Promise((resolve, rej) => {
    if (!req.rawBody) {
      resolve(false);
    }

    const sig = Buffer.from(req.headers[process.env.HOOKS_HEADER_NAME] || '', 'utf8');
    const hmac = crypto.createHmac(process.env.HOOKS_SHA, process.env.HOOKS_SECRET);
    const digest = Buffer.from(process.env.HOOKS_SHA + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8');

    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      console.log(`Request body digest (${digest}) did not match ${process.env.HOOKS_HEADER_NAME} (${sig})`);
      resolve(false);
    } else {
      let json_string = decodeURIComponent(req.rawBody).split('payload=')[1];
      let json = JSON.parse(json_string);
      resolve(json.ref === 'refs/heads/compiled' ? true : false);
    }
  });
}

async function handler(req, res) {
  const data = await webhookPayloadParser(req);
  req.rawBody = data;
  let allowed = await verifyPostData(req, res);
  console.log('hook received');

  if (allowed) {
    shell.exec('echo "working" & yarn update:server &');
  } //set out to execute the command


  res.statusCode = 200;
  res.json({});
}

/***/ }),

/***/ 6417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 5524:
/***/ (function(module) {

"use strict";
module.exports = require("shelljs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4772));
module.exports = __webpack_exports__;

})();