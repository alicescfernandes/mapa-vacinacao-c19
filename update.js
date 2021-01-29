let fs = require('fs');
let json = require('./data/last-update.json');

json.date = Date.now();
fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {
	console.log('done');
});
