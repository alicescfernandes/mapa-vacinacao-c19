#!/usr/bin/env node

//TODO: Only a single merge to master pls

require('dotenv').config();
const schedule = require('node-schedule');
var shell = require('shelljs');
const fetch = require('node-fetch');
const fs = require('fs');
const Pusher = require('pusher');
const scrapSesaram = require('./automation/sesaram');
const updateCases = require('./automation/convert-csv:cases');
const scrapRt = require('./automation/convert-xls');
var argv = require('minimist')(process.argv.slice(2));
console.log(process.env.HARDWARE);
let json = require('./data/last-update');
const convertVaccines = require('./automation/convert-csv:vaccines');
const { isAfter } = require('date-fns');

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
		return;
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
	shell.exec('python3 ./automation/owid_parser.py');
	gitCommit('owid');
}

function updateEDCD() {
	shell.exec('git checkout develop');
	shell.exec('git pull --rebase');
	shell.exec('python3 ./automation/ecdc_parser.py');
	gitCommit('ecdc');
}

function updatedCasesMadeira() {
	shell.exec('yarn convert:csv'); //update aos acores
	gitCommit('casos açores');
	shell.exec('yarn casos:ram'); //update aos casos da madeira
}

async function updateRT() {
	console.log('update rt');
	await scrapRt(function () {
		gitCommit('rt');
	});
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

		var sourceData = dataVacinas.features[0].attributes;
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
			updatedVaccines = true;

			json.date = new Date();
			json.dateVaccines = sourceData.Data;
			fs.writeFileSync('./data/last-update.json', JSON.stringify(json));

			gitCommit('vaccines');
			//Update twitter
			if (process.env.HARDWARE == 'raspberry') {
				shell.exec('sleep 180');
				publishEvent('vacinas', dataVacinas.features[0].attributes);
				shell.exec('yarn twitter');
				shell.exec('yarn notification:push');
				// bot runs on a raspberry pi
				shell.exec('sleep 180');
				shell.exec('sudo poweroff');
			}
		} else {
			console.log(
				new Date(),
				'not updating',
				'vaccines',
				parseInt(sourceData.Vacinados_Ac),
				dataLocalVacinas[dataLocalVacinas.length - 1].Vacinados_Ac,
				new Date(sourceData.Data),
				new Date(date.getTime()),
				sourceData.Data > date.getTime()
			);
			console.log(new Date(), 'not updating', 'vaccines', date.getTime(), dataLocalVacinas[dataLocalVacinas.length - 1].Data);
		}
	} else {
		console.log('Not fetching new vaccines');
	}
}

async function updateVaccinesDssg(cb) {
	let vac_local = JSON.parse(fs.readFileSync('./data/vaccines_dssg.json'));
	const local_date = new Date(vac_local.reverse()[0].data_vac_iso);

	await convertVaccines((vac_remote) => {
		const remote_date = new Date(vac_remote.reverse()[0].data_vac_iso);
		const updated = remote_date.getTime() > local_date.getTime();
		if (updated) {
			console.log('updated');
			fs.writeFileSync('./data/vaccines_dssg.json', JSON.stringify(vac_remote.reverse()));
			json.date = new Date();
			json.dateVaccines = remote_date;
			fs.writeFileSync('./data/last-update.json', JSON.stringify(json));
			if (cb) cb();
		}
	});
}

console.log(new Date().toLocaleString(), 'daemon running');
// ““At every 5th minute from 0 through 59 past hour 13.”
// https://crontab.guru/#0-59/5_13_*_*_*

(async () => {
	if (argv.scrap) {
		//Run particular commands
		shell.exec('git checkout develop');
		shell.exec('git pull --rebase');

		switch (argv.scrap) {
			case 'sesaram':
				await scrapSesaram(function () {
					gitCommit('sesaram');
				});
				break;
			case 'vaccines-sns':
				await updateJSON();
				break;
			case 'cases':
				await updateCases(function () {
					console.log('called');
					gitCommit('cases-dssgpt');
				});
				break;
			case 'vaccines':
				await updateVaccinesDssg(() => {
					gitCommit('vaccines-dssgpt');

					//Update twitter
					if (process.env.HARDWARE == 'raspberry') {
						shell.exec('sleep 180');
						shell.exec('yarn twitter');
						shell.exec('yarn notification:push');
						// bot runs on a raspberry pi
						shell.exec('sleep 180');
						shell.exec('sudo poweroff');
					}
				});
				break;
			case 'owid':
				updateOWID();
				await updateRT();
				updatedCasesMadeira();
				break;
		}
		process.exit(0);
	} else {
		//Set the schedule

		//Try publish after 14h
		schedule.scheduleJob('0-59/5 14-15 * * *', function () {
			updateJSON();
		});

		//If its running after 16h is because the data wasn't updated

		schedule.scheduleJob('*/20 16-18 * * *', function () {
			updateJSON();
		});

		if (process.env.HARDWARE == 'raspberry') {
			schedule.scheduleJob('10 16 * * *', function () {
				shell.exec('sleep 180');
				shell.exec('sudo poweroff');
			});
		}

		/*
		// This is done by docker 
		//Update SESARAM at midnight again
		schedule.scheduleJob('50 23 * * *', function () {
			shell.exec('git checkout develop');
			shell.exec('git pull --rebase');
			scrapSesaram(function () {
				gitCommit('sesaram');
			});
		});

		schedule.scheduleJob('20 21 * * *', function () {
			console.log('Saving to web archive');
			shell.exec('waybackpy --save --url "https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/"');
		});

		schedule.scheduleJob('30 21 * * *', function () {
			console.log('Saving to web archive');
			shell.exec('waybackpy --save --url "https://vacinacao-covid19.azores.gov.pt/" ');
		});

		schedule.scheduleJob('40 21 * * *', function () {
			console.log('Saving to web archive');
			shell.exec('waybackpy --save --url "https://web.sesaram.pt/COVID19_INFO" ');
		}); */

		/* schedule.scheduleJob('00 12-30 * * *', function () {
			updateOWID();
			updateRT();
			updatedCasesMadeira();
		}); */
	}
})();
