var csv = require('csvtojson');
const { default: fetch } = require('node-fetch');
let fs = require('fs');
let json = require('./../data/last-update.json');

(async () => {
	/* 	csv()
		.fromFile('./data/csv/ecdc.csv')
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			fs.writeFile('./data/ecdc.json', JSON.stringify(jsonArrayObj), () => {});
		});
 */
	let contents = await fetch(
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpzFwxU4mwhgN7aN7AqNLBEqPDNviSbPeU1AZRAPoiWk0b1Fl40vJOPNlm6hzd0w1H6PeJkQ97nNXQ/pub?output=csv'
	).then((res) => res.buffer());

	csv()
		.fromString(contents.toString())
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			fs.writeFile('./data/madeira_pds.json', JSON.stringify(jsonArrayObj), () => {});
			json.dateMadeiraCases = jsonArrayObj[jsonArrayObj.length - 1].data;
			fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {});
		});
})();
