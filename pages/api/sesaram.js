const fetch = require('node-fetch');

export default async function handler(req, res) {
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

	let body = {
		total: parseInt(total),
		dose_1: parseInt(d1),
		dose_2: parseInt(d2),
		data: Date.now(),
	};

	res.statusCode = 200;
	res.json(body);
}
