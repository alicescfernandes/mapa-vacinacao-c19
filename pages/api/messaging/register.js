import { FirebaseConnector } from './../../../connectors/firebase';

export default async function handler(req, res) {
	if (req.method === 'POST' && req.body?.fcm_token !== undefined) {
		let firebase = new FirebaseConnector();
		firebase.registerDevice(req.body.fcm_token).then(() => {
			console.log('registered');
		});
	}
	res.statusCode = 200;
	res.json({});
}
