exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 2578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ FirebaseConnector; }
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(334).config({
  path: './../.env'
});

const admin = __webpack_require__(4054);

class FirebaseConnector {
  constructor() {
    _defineProperty(this, "initialized", false);

    _defineProperty(this, "fcm", null);

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          project_id: process.env.FIREBASE_project_id,
          private_key_id: process.env.FIREBASE_private_key_id,
          private_key: process.env.FIREBASE_private_key.replace(/\\n/g, '\n'),
          client_email: process.env.FIREBASE_client_email,
          client_id: process.env.FIREBASE_client_id
        })
      });
    }

    this.initialized = true;
    this.fcm = admin.messaging();
  }

  registerDevice(token) {
    console.log('cenas', token);
    return this.fcm.subscribeToTopic([token], 'covid19');
    /* .then(function (response) {
    		console.log('Successfully subscribed to topic:', response);
    	})
    	.catch(function (error) {
    		console.log('Error subscribing to topic:', error);
    	}); */
  }

  unregisterDevice(token) {
    return this.fcm.unsubscribeToTopic([token], 'covid19');
  }

}

/***/ })

};
;