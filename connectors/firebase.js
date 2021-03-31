const admin = require('firebase-admin');
const serviceAccount = require('./../firebase_account.json');
export class FirebaseConnector {
	initialized = false;
	fcm = null;
	constructor() {
		if (!admin.apps.length) {
			admin.initializeApp({
				credential: admin.credential.cert(serviceAccount),
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
