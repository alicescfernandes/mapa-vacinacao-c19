require('dotenv').config({ path: './../.env' });
let fs = require('fs');
const fetch = require('node-fetch');

function createDate(date) {
	let dia = date.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
	let mes = (date.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
	let ano = date.getFullYear();
	return `${ano}-${mes}-${dia}`;
}

async function parseSesaram() {
	let resSesaram = await fetch('https://web.sesaram.pt/COVID19_INFO', {
		headers: {
			accept: '*/*',
			origin: 'https://web.sesaram.pt',
			'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
			'content-type': 'application/x-www-form-urlencoded',
			'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
			'sec-ch-ua-mobile': '?0',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
		},
		referrer: 'https://web.sesaram.pt/COVID19_INFO',
		referrerPolicy: 'strict-origin-when-cross-origin',
		method: 'POST',
		mode: 'cors',
		credentials: 'omit',
	});

	let text = await resSesaram.text();
	let url = new RegExp(/action="(.*)".*target/gm);
	let a = url.exec(text)[1];

	resSesaram = await fetch('https://web.sesaram.pt/' + a, {
		headers: {
			accept: '*/*',
			origin: 'https://web.sesaram.pt',
			'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
			'content-type': 'application/x-www-form-urlencoded',
			'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
			'sec-ch-ua-mobile': '?0',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
		},
		referrer: 'https://web.sesaram.pt/COVID19_INFO',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: 'WD_ACTION_=AJAXEXECUTE&EXECUTEPROC=PAGE_VACINACAO.obtemTotalVacinasAdministradas&WD_CONTEXTE_=',
		method: 'POST',
		mode: 'cors',
		credentials: 'omit',
	});
	text = await resSesaram.text();
	let [d1, d2, total] = text.split('|');
	let date = new Date();

	let body = {
		data: createDate(date),
		last_update: date.getTime(),
		total: parseInt(total),
		dose_1: parseInt(d1),
		dose_2: parseInt(d2),
	};

	return body;
}

export async function scrapSesaram(onUpdate) {
	let sesaram = [];
	if (fs.existsSync('./data/sesaram.json')) {
		sesaram = JSON.parse(fs.readFileSync('./data/sesaram.json')); //do not cache this pls
	}

	let data = await parseSesaram();

	let idx = sesaram.findIndex((i) => {
		return i.data === data.data;
	});

	if (idx > -1) {
		if (data.total > sesaram[idx].total) {
			sesaram[idx] = data;
			if (onUpdate) {
				console.log('Updating SESARAM');
				onUpdate();
			}
		}
	} else {
		sesaram.push(data);
	}

	fs.writeFileSync('././data/sesaram.json', JSON.stringify(sesaram));
}

scrapSesaram();
