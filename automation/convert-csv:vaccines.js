var csv = require('csvtojson');
const { default: fetch } = require('node-fetch');
let fs = require('fs');
let json = require('./../data/last-update.json');
var parse = require('date-fns/parse');

const fetch_remote = false;
const { zonedTimeToUtc, utcToZonedTime } = require('date-fns-tz');

const timeZone = 'Europe/London';

async function convertVaccines(cb = null, write = false, error_cb = null) {
	try {

		if(fetch_remote === false){
			throw new Error('fetch local')
		}
		let contents = await fetch('https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/vacinas.csv').then((res) => res.buffer());

		let rawJsonArrayObj = await csv({
			colParser: {
				doses: 'number',
				doses_novas: 'number',
				doses1: 'number',
				doses1_novas: 'number',
				doses2: 'number',
				doses2_novas: 'number',
				pessoas_vacinadas_completamente: 'number',
				pessoas_vacinadas_completamente_novas: 'number',
				pessoas_vacinadas_parcialmente: 'number',
				pessoas_vacinadas_parcialmente_novas: 'number',
				pessoas_inoculadas: 'number',
				pessoas_inoculadas_novas: 'number',
				vacinas: 'number',
				vacinas_novas: 'number',
			},
		}).fromString(contents.toString());

		let jsonArrayObj = rawJsonArrayObj.map((item) => {
			let date_utc = parse(item.data, 'dd-MM-yyyy', new Date());
			date_utc = zonedTimeToUtc(date_utc, 'UTC');
			const zonedDate = utcToZonedTime(date_utc, timeZone);
			return {
				data_vac: item.data,
				doses: item.doses || null,
				doses_novas: item.doses_novas || null,
				doses1: item.doses1 || null,
				doses1_novas: item.doses1_novas || null,
				doses2: item.doses2 || null,
				doses2_novas: item.doses2_novas || null,
				pessoas_vacinadas_completamente: item.pessoas_vacinadas_completamente || null,
				pessoas_vacinadas_completamente_novas: item.pessoas_vacinadas_completamente_novas || null,
				pessoas_vacinadas_parcialmente: item.pessoas_vacinadas_parcialmente || null,
				pessoas_vacinadas_parcialmente_novas: item.pessoas_vacinadas_parcialmente_novas || null,
				pessoas_inoculadas: item.pessoas_inoculadas || null,
				pessoas_inoculadas_novas: item.pessoas_inoculadas_novas || null,
				vacinas: item.vacinas || null,
				vacinas_novas: item.vacinas_novas || null,
				data_vac_iso: zonedDate,
			};
		});

		if (cb) cb(jsonArrayObj);
		return jsonArrayObj;
	} catch (e) {
		let filedir = process.cwd() + '/data/vaccines_dssg.json';
		data = JSON.parse(fs.readFileSync(filedir)); //fallback to the stored data
		if (error_cb) error_cb();
		return data
	}
}
//(async () => {
//	await convertVaccines();
//})();

module.exports = convertVaccines;
