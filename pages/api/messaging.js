var admin = require('firebase-admin');
var client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/fcm';
var serviceAccount = require('./../../firebase_account.json');

export default async function handler(req, res) {
	if (req.method === 'POST' && req.body?.fcm_token !== undefined) {
		client.connect(url, function (err, db) {
			if (err) throw err;
			var dbo = db.db('fcm');
			let collection = dbo.collection('fcm_tokens');
			let record_exists = false;
			let record = { token: req.body.fcm_token };
			collection.findOne(record, function (err, res) {
				if (err) {
					res.statusCode = 400;
				}

				if (res !== null) {
					record_exists = true;
					console.log('fcm exists');
				} else {
					collection.insertOne(record, function (err, res) {
						if (err) {
							res.statusCode = 400;
						}
						console.log('fcm added');
						db.close();
					});
				}
			});
		});

		if (!admin.apps.length) {
			admin.initializeApp({
				credential: admin.credential.cert(serviceAccount),
			});
		}

		admin
			.messaging()
			.subscribeToTopic([req.body.fcm_token], 'covid19')
			.then(function (response) {
				console.log('Successfully subscribed to topic:', response);
			})
			.catch(function (error) {
				console.log('Error subscribing to topic:', error);
			});
	}

	res.statusCode = 200;
	res.json({});
}
