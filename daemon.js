#!/usr/bin/env node
require('dotenv').config();
const schedule = require('node-schedule');
var shell = require('shelljs');
const fetch = require('node-fetch');
const fs = require('fs');
const Pusher = require('pusher');

if (!shell.which('git')) {
	shell.echo('Sorry, this script requires git');
	shell.exit(1);
}

let options = {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
};

let f = new Intl.DateTimeFormat('pt', options);
let formatted = f.format(new Date());

const pusher = new Pusher({
	appId: process.env.PUSHER_APP_ID,
	key: process.env.PUSHER_APP_KEY,
	secret: process.env.PUSHER_APP_SECRET,
	cluster: 'eu',
	useTLS: true,
});

function gitCommit(name) {
	shell.exec('git add data/*');

	if (shell.exec(`git commit -m  "covid update - ${name} - ${formatted}"`).code !== 0) {
		shell.echo('Error: Git commit failed');
		shell.exit(1);
	} else {
		shell.echo('Success: Git commit success');
	}

	shell.exec('git push');
	shell.exec('git checkout master');
	shell.exec('git pull --rebase');
	shell.exec('git merge develop --no-ff --no-edit');
	shell.exec('git push');
	shell.exec('git checkout develop');
}

function updateOWID() {
	shell.exec('git checkout develop');
	shell.exec('git pull --rebase');
	shell.exec('python3 owid_parser.py');
	gitCommit('owid');
}
function publishEvent(type, data) {
	pusher.trigger('covid19', 'update', {
		type,
		data,
	});
}

async function updateJSON() {
	//update the repo
	shell.exec('git checkout develop');
	shell.exec('git pull --rebase');

	let date = new Date();
	date.setMinutes(0);
	date.setMilliseconds(0);
	date.setSeconds(0);
	date.setHours(0);

	let dataLocalVacinas = JSON.parse(fs.readFileSync('./data/vaccines.json'));
	let dataLocalVacinasV2 = JSON.parse(fs.readFileSync('./data/vaccines_v2.json'));
	let dataLocalCases = JSON.parse(fs.readFileSync('./data/cases.json'));

	if (date.getTime() > dataLocalVacinas[dataLocalVacinas.length - 1].Data) {
		let dataVacinas = await fetch(
			'https://services5.arcgis.com/eoFbezv6KiXqcnKq/arcgis/rest/services/Covid19_Total_Vacinados/FeatureServer/0/query?f=json&where=FID=1&outFields=*&resultType=standard&cacheHint=true'
		).then((res) => res.json());

		let sourceData = dataVacinas.features[0].attributes;
		if (parseInt(sourceData.Vacinados_Ac) > dataLocalVacinas[dataLocalVacinas.length - 1].Vacinados_Ac) {
			console.log('updating vaccines');
			sourceData.Data = date.getTime();
			dataLocalVacinas.push(sourceData);
			fs.writeFileSync('./data/vaccines.json', JSON.stringify(dataLocalVacinas));
			let item = dataLocalVacinas[dataLocalVacinas.length - 1];
			item.Inoculacao1 = item.Inoculacao1_Ac - dataLocalVacinas[dataLocalVacinas.length - 2].Inoculacao1_Ac;
			item.Inoculacao2 = item.Inoculacao2_Ac - dataLocalVacinas[dataLocalVacinas.length - 2].Inoculacao2_Ac;
			item.Vacinados = item.Vacinados_Ac - dataLocalVacinas[dataLocalVacinas.length - 2].Vacinados_Ac;
			dataLocalVacinasV2.push(item);
			fs.writeFileSync('./data/vaccines_v2.json', JSON.stringify(dataLocalVacinasV2));
			publishEvent('vacinas', dataVacinas.features[0].attributes);
			updatedVaccines = true;

			gitCommit('vaccines');
			//Update twitter
			shell.exec('yarn twitter');
		} else {
			console.log('not updating', 'vaccines', parseInt(sourceData.Vacinados_Ac), dataLocalVacinas[dataLocalVacinas.length - 1].Vacinados_Ac);
		}
	}

	if (date.getTime() > dataLocalCases[dataLocalCases.length - 1].Data) {
		let dataCasos = await fetch(
			`https://services.arcgis.com/CCZiGSEQbAxxFVh3/arcgis/rest/services/COVID_Concelhos_DadosDiariosARS_VIEW2/FeatureServer/0/query?f=json&where=ARSNome='Nacional' and Data>'${
				date.getMonth() + 1
			}/${date.getDate()}/${date.getFullYear()}'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=Data, ConfirmadosAcumulado, ConfirmadosNovos, Recuperados, Obitos,ObitosNovos,  RecuperadosNovos, VarRecuperados, Activos&orderByFields=data asc&resultOffset=0&resultRecordCount=1&resultType=standard&cacheHint=true`
		).then((res) => res.json());
		//Update cases
		if (dataCasos.features.length > 0) {
			console.log('updating cases');
			sourceData = dataCasos.features[0].attributes;
			if (parseInt(sourceData.OBJECTID) > dataLocalCases[dataLocalCases.length - 1].OBJECTID) {
				console.log(new Date().toLocaleString(), 'updating');
				sourceData.Data = date.getTime();
				dataLocalCases.push(sourceData);
				fs.writeFileSync('./data/cases.json', JSON.stringify(dataLocalCases));
				updatedCases = true;
				publishEvent('casos', dataCasos.features[0].attributes);

				gitCommit('cases');
			} else {
				console.log('not updating', 'cases', sourceData.OBJECTID, dataLocalCases[dataLocalCases.length - 1].OBJECTID);
			}
		} else {
			console.log('not updating', 'cases', dataCasos.features.length, dataLocalCases[dataLocalCases.length - 1].Data);
		}
	}
}

console.log(new Date().toLocaleString(), 'daemon running');
// ““At every 5th minute from 0 through 59 past hour 13.”
// https://crontab.guru/#0-59/5_13_*_*_*
updateJSON();
updateOWID();
schedule.scheduleJob('0-59/5 12-15 * * *', function () {
	updateJSON();
});

schedule.scheduleJob('00 12 * * *', function () {
	updateOWID();
});
