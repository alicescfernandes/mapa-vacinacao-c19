var csv = require('csvtojson');
const { default: fetch } = require('node-fetch');
let fs = require('fs');
let json = require('./../data/last-update.json');
var parse = require('date-fns/parse');
var format = require('date-fns/format');
var isAfter = require('date-fns/isAfter');
var parseIso = require('date-fns/parseIso');

async function updateCases(cb) {
	let contents = await fetch('https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/data.csv').then((res) => res.buffer());

	csv({
		includeColumns: /(data|confirmados|confirmados_novos|obitos|recuperados)\b/,
	})
		.fromString(contents.toString())
		.then(function (rawJsonArrayObj) {
			return rawJsonArrayObj.filter((item) => isAfter(parse(item.data, 'dd-MM-yyyy', new Date()), parseIso('2020-12-20')));
		})
		.then(function (jsonArrayObj) {
			for (var i = 0; i !== jsonArrayObj.length; i++) {
				let item = jsonArrayObj[i];
				delete item.n_confirmados;
				item.confirmados = parseInt(item.confirmados);
				item.data = parse(item.data, 'dd-MM-yyyy', new Date()).getTime();
				item.confirmados_novos = parseInt(item.confirmados_novos);
				item.obitos = parseInt(item.obitos);
				item.recuperados = parseInt(item.recuperados);

				if (i > 0) {
					let item_anterior = jsonArrayObj[i - 1];
					item.var_recuperados = parseInt(item.recuperados) - parseInt(item_anterior.recuperados);
					item.var_obitos = parseInt(item.obitos) - parseInt(item_anterior.obitos);
					item.ativos = parseInt(item.confirmados) - parseInt(item.obitos) - parseInt(item.recuperados);
				} else {
					item.var_recuperados = 0;
					item.var_obitos = 0;
					item.ativos = 0;
				}
			}
			fs.writeFile('./data/cases_v2.json', JSON.stringify(jsonArrayObj), () => {});
			json.date = new Date();
			fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {});

			if (cb) cb();
		});
}
(async () => {
	await updateCases();
})();

module.exports = updateCases;
