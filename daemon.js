#!/usr/bin/env node

let vaccines = require('./data/vaccines.json');
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

function gitCommit() {
	shell.exec('git add vaccines.json');
	if (shell.exec(`git commit -m  "covid update - ${formatted}"`).code !== 0) {
		shell.echo('Error: Git commit failed');
		shell.exit(1);
	} else {
		shell.echo('Success: Git commit success');
	}

	shell.exec('git push');
	shell.exec('yarn deploy');
}
function updateJSON() {
	let promises = [
		fetch('https://services5.arcgis.com/eoFbezv6KiXqcnKq/arcgis/rest/services/Covid19_Total_Vacinados/FeatureServer/0/query?f=json&where=FID=1&outFields=*&resultType=standard&cacheHint=true').then((res) => res.json()),
		fetch('http://localhost:3000/api/vaccines').then((res) => res.json()),
	];
	console.log(new Date().toLocaleString(), 'checking');
	Promise.all(promises).then(([dataArcgis, dataLocal]) => {
		let sourceData = dataArcgis.features[0].attributes;
		if (dataLocal.Data !== parseInt(sourceData.Data)) {
			console.log(new Date().toLocaleString(), 'updating');
			dataLocal.push(sourceData);

			fs.writeFile('./data/vaccines.json', JSON.stringify(dataLocal), () => {
				console.log(new Date().toLocaleString(), 'success');
				gitCommit();
			});
		} else {
			console.log('not updating', dataLocal.Data !== parseInt(sourceData.Data));
		}
	});
}

console.log(new Date().toLocaleString(), 'daemon running');
// ““At every 2nd minute from 20 through 50 past hour 13.”
// https://crontab.guru/#20-50/2_13_*_*_*
updateJSON();
schedule.scheduleJob('20-50/2 13 * * *', function () {
	//updateJSON();
});
