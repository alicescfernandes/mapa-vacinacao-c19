var csv = require('csvtojson');
const { default: fetch } = require('node-fetch');
let fs = require('fs');
let json = require('./../data/last-update.json');

(async () => {
	let contents = await fetch('https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/data.csv').then((res) => res.buffer());

	csv({
		includeColumns: /(data_dados|confirmados|confirmados_novos|obitos|recuperados)\b/,
	})
		.fromString(contents.toString())
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			fs.writeFile('./data/cases_v2.json', JSON.stringify(jsonArrayObj), () => {});
			//json.dateMadeiraCases = jsonArrayObj[jsonArrayObj.length - 1].data;
			//fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {});
		});
})();
