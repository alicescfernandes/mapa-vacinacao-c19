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
	shell.exec('git add */data/vaccines.json');
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
	console.log(new Date().toLocaleString(), 'checking');
	fetch('https://services5.arcgis.com/eoFbezv6KiXqcnKq/arcgis/rest/services/Covid19_Total_Vacinados/FeatureServer/0/query?f=json&where=FID=1&outFields=*&resultType=standard&cacheHint=true')
		.then((res) => res.json())
		.then((data) => {
			let sourceData = data.features[0].attributes;
			if (vaccines[vaccines.length - 1].Data !== parseInt(sourceData.Data)) {
				console.log(new Date().toLocaleString(), 'updating');
				vaccines.push(sourceData);

				fs.writeFile('./data/vaccines.json', JSON.stringify(vaccines), () => {
					console.log(new Date().toLocaleString(), 'success');
					gitCommit();
				});
			} else {
				console.log('not updating');
			}
		});
}

console.log(new Date().toLocaleString(), 'daemon running');
// ““At every 2nd minute from 20 through 40 past hour 13.”
// https://crontab.guru/#20-40/2_13_*_*_*
schedule.scheduleJob('20-40/2 13 * * *', function () {
	updateJSON();
});
