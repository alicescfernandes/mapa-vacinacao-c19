var csv = require('csvtojson');
// Convert a csv file with csvtojson
var fs = require('fs');
csv()
	.fromFile('./../data/ecdc.csv')
	.then(function (jsonArrayObj) {
		//when parse finished, result will be emitted here.
		fs.writeFile('./../data/ecdc.json', JSON.stringify(jsonArrayObj), () => {});
	});
