var csv = require('csvtojson');
const { default: fetch } = require('node-fetch');
let fs = require('fs');
let json = require('./../data/last-update.json');
const { parse, add, sub } = require('date-fns');

(async () => {
	/* 	csv()
		.fromFile('./data/csv/ecdc.csv')
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			fs.writeFile('./data/ecdc.json', JSON.stringify(jsonArrayObj), () => {});
		});
 */
	/* let contents = await fetch(
		'https://docs.google.com/spreadsheets/d/16wucf-R89vxoL_QCmYL2ChYi-iKFVMQyIr7qsV_5kw0/export?format=csv&gid=0'
	).then((res) => res.buffer());

	csv()
		.fromString(contents.toString())
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			fs.writeFile('./data/madeira_pds.json', JSON.stringify(jsonArrayObj), () => {});
			json.dateMadeiraCases = jsonArrayObj[jsonArrayObj.length - 1].data;
			fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {});
		});
 */
	let contents = await fetch(
		'https://docs.google.com/spreadsheets/d/16wucf-R89vxoL_QCmYL2ChYi-iKFVMQyIr7qsV_5kw0/export?format=csv&gid=1371982439'
	).then((res) => res.buffer());

	csv()
		.fromString(contents.toString())
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			fs.writeFile('./data/acores_pds.json', JSON.stringify(jsonArrayObj), () => {});
			json.dateAcoresCases = jsonArrayObj[jsonArrayObj.length - 1].data;
			fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {});
		});

	const url = 'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/vacinas_detalhe.csv';

	let contents2 = await fetch(url).then((res) => res.buffer());

	csv()
		.fromString(contents2.toString())
		.then(function (jsonArrayObj) {
			//when parse finished, result will be emitted here.
			let data = jsonArrayObj[jsonArrayObj.length - 1].data;
			let parseDate = parse(data, 'dd-MM-yyyy', new Date());
			json.dateSnsStart = sub(parseDate, { days: 7 }).toDateString();
			json.dateSns = sub(parseDate, { days: 1 }).toDateString();
			console.log(json);
			fs.writeFile('./data/last-update.json', JSON.stringify(json), function () {});
		});
})();
