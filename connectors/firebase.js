require('dotenv').config({ path: './../.env' });
const admin = require('firebase-admin');

export class FirebaseConnector {
	initialized = false;
	fcm = null;
	constructor() {
		if (!admin.apps.length) {
			admin.initializeApp({
				credential: admin.credential.cert({
					project_id: process.env.FIREBASE_project_id,
					private_key_id: process.env.FIREBASE_private_key_id,
					private_key: process.env.FIREBASE_private_key.replace(/\\n/g, '\n'),
					client_email: process.env.FIREBASE_client_email,
					client_id: process.env.FIREBASE_client_id,
				}),
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
