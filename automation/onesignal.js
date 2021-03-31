require('dotenv').config({ path: './../.env' });
let data = require('../data/vaccines.json');
let fs = require('fs');
const { default: fetch } = require('node-fetch');
let notificationTexts = fs.readFileSync('./onesignal.txt').toString();
let numberFormatter = new Intl.NumberFormat();
var https = require('follow-redirects').https;

let lastUpdate = {
	last_update: 0,
};
if (fs.existsSync('./onesignal-conf.json')) {
	lastUpdate = JSON.parse(fs.readFileSync('./onesignal-conf.json')); //do not cache this pls
}

let todayDate = new Date();
todayDate.setMinutes(0);
todayDate.setMilliseconds(0);
todayDate.setSeconds(0);
todayDate.setHours(0);

if (data[data.length - 1].Data > lastUpdate.last_update) {
	let yesterday = data[data.length - 2];
	let today = data[data.length - 1];
	lastUpdate.last_update = today.Data;
	fs.writeFileSync('./onesignal-conf.json', JSON.stringify(lastUpdate));

	let postVariables = {
		'{{novas_total}}': numberFormatter.format(today.Vacinados_Ac - yesterday.Vacinados_Ac).replace(/,/gm, ' '),
		'{{total_total}}': numberFormatter.format(today.Vacinados_Ac).replace(/,/gm, ' '),
		'{{novas_in1}}': numberFormatter.format(today.Inoculacao1_Ac - yesterday.Inoculacao1_Ac).replace(/,/gm, ' '),
		'{{novas_in2}}': numberFormatter.format(today.Inoculacao2_Ac - yesterday.Inoculacao2_Ac).replace(/,/gm, ' '),
		'{{total_in1}}': numberFormatter.format(today.Inoculacao1_Ac).replace(/,/gm, ' '),
		'{{total_in2}}': numberFormatter.format(today.Inoculacao2_Ac).replace(/,/gm, ' '),
	};
	let post = notificationTexts;

	for (let key of Object.keys(postVariables)) {
		post = post.replace(key, postVariables[key]);
	}

	let dia = todayDate.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
	let mes = (todayDate.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
	let ano = todayDate.getFullYear().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
	var raw = {
		app_id: process.env.ONESIGNAL_APP_ID,
		contents: {
			en: post,
		},
		headings: {
			en: `Os dados da vacinação de ${dia}/${mes}/${ano.replace(/,/gm, '')}`,
		},
		url: 'https://www.vacinacaocovid19.pt',
		included_segments: ['Subscribed Users'],
	};

	var options = {
		method: 'POST',
		hostname: 'onesignal.com',
		path: '/api/v1/notifications',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
		},
	};

	var req = https.request(options, function (res) {
		var chunks = [];

		res.on('end', function (chunk) {
			var body = Buffer.concat(chunks);
			console.log('done');
		});
	});

	req.write(JSON.stringify(raw));

	req.end();
}
