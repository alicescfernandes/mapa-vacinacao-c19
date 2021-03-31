//var client = require('mongodb').MongoClient;
//var url = 'mongodb://localhost:27017/fcm';
/* client.connect(url, function (err, db) {
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
		}); */
