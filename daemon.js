#!/usr/bin/env node

const schedule = require('node-schedule');
var shell = require('shelljs');
const fetch = require('node-fetch');
const fs = require('fs');

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

function gitCommit(data) {
	shell.exec('git add data/*');

	if (shell.exec(`git commit -m  "covid update - ${formatted}"`).code !== 0) {
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
function updateJSON() {
	let updatedCases = false;
	let updatedVaccines = false;
	//update the repo
	shell.exec('git checkout develop');
	shell.exec('git pull --rebase');

	let date = new Date();
	date.setMinutes(0);
	date.setMilliseconds(0);
	date.setSeconds(0);
	date.setHours(0);
	let dataLocalVacinas = JSON.parse(fs.readFileSync('./data/vaccines.json'));
	let dataLocalCases = JSON.parse(fs.readFileSync('./data/cases.json'));
	let promises = [
		fetch('https://services5.arcgis.com/eoFbezv6KiXqcnKq/arcgis/rest/services/Covid19_Total_Vacinados/FeatureServer/0/query?f=json&where=FID=1&outFields=*&resultType=standard&cacheHint=true').then((res) => res.json()),
		fetch(
			`https://services.arcgis.com/CCZiGSEQbAxxFVh3/arcgis/rest/services/COVID_Concelhos_DadosDiariosARS_VIEW2/FeatureServer/0/query?f=json&where=ARSNome='Nacional' and Data>'${
				date.getMonth() + 1
			}/${date.getDate()}/${date.getFullYear()}'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=Data, ConfirmadosAcumulado, ConfirmadosNovos, Recuperados, Obitos,ObitosNovos,  RecuperadosNovos, VarRecuperados, Activos&orderByFields=data asc&resultOffset=0&resultRecordCount=1&resultType=standard&cacheHint=true`
		).then((res) => res.json()),
	];
	Promise.all(promises)
		.then(([dataVacinas, dataCasos]) => {
			//Update vacines
			let sourceData = dataVacinas.features[0].attributes;
			if (parseInt(sourceData.Vacinados_Ac) > dataLocalVacinas[dataLocalVacinas.length - 1].Vacinados_Ac) {
				sourceData.Data = date.getTime();
				dataLocalVacinas.push(sourceData);
				fs.writeFileSync('./data/vaccines.json', JSON.stringify(dataLocalVacinas));
				updatedVaccines = true;
			} else {
				console.log('not updating', 'vaccines', parseInt(sourceData.Vacinados_Ac), dataLocalVacinas[dataLocalVacinas.length - 1].Vacinados_Ac);
			}
			//Update cases
			if (dataCasos.features.length > 0) {
				sourceData = dataCasos.features[0].attributes;
				if (parseInt(sourceData.OBJECTID) > dataLocalCases[dataLocalCases.length - 1].OBJECTID) {
					console.log(new Date().toLocaleString(), 'updating');
					sourceData.Data = date.getTime();
					dataLocalCases.push(sourceData);
					fs.writeFileSync('./data/cases.json', JSON.stringify(dataLocalCases));
					updatedCases = true;
				} else {
					console.log('not updating', 'cases', sourceData.OBJECTID, dataLocalCases[dataLocalCases.length - 1].OBJECTID);
				}
			} else {
				console.log('not updating', 'cases', dataCasos.features.length, dataLocalCases[dataLocalCases.length - 1].Data);
			}
			if (updatedCases || updatedVaccines) {
				gitCommit();
				//Update twitter
				shell.exec('yarn twitter');
			}
		})
		.catch((err) => {
			console.log(err);
		});
}

console.log(new Date().toLocaleString(), 'daemon running');
// ““At every 5th minute from 0 through 59 past hour 13.”
// https://crontab.guru/#0-59/5_13_*_*_*
updateJSON();
schedule.scheduleJob('0-59/5 13-15 * * *', function () {
	updateJSON();
});
