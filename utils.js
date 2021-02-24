import fetchNode from 'node-fetch';
var https = require('follow-redirects').https;

export const formatNumber = (number, isDate = true) => {
	let numberFormatter = new Intl.NumberFormat('pt-PT', {
		minimumIntegerDigits: isDate ? 2 : 1,
	});
	return numberFormatter.format(number).replace(/,/gm, ' ');
};

//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}

export function dateWithoutTimezone(unix) {
	const dt = new Date(unix);
	return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
}

export function trackPlausible(req) {
	let host = req.headers.host;
	let url = req.url;
	let userAgent = req.headers['user-agent'];
	let referer = req.headers?.referer || '';
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	if (ip.substr(0, 7) == '::ffff:') {
		ip = ip.substr(7);
	}

	let headers = {
		'user-agent': userAgent,
		'x-forwarded-for': ip,
		referer: referer,
	};
	let data = { name: 'pageview', url: 'https://www.vacinacaocovid19.pt' + url, domain: 'vacinacaocovid19.pt', referrer: referer, screen_width: null };

	console.log('own app sending');
	if (host.match('localhost')) return;
	if (host.match('vacinacaocovid19.pt')) return;
	if (host.match('mapa-vacinacao-c19.vercel.app')) return;
	trackLogFlare(headers, data);
	fetchNode('https://plausible.io/api/event', {
		method: 'post',
		headers,
		body: JSON.stringify(data),
	})
		.then(() => {
			console.log('request', 'post', JSON.stringify(data), headers);
		})
		.catch(() => {
			console.log('err');
		});
}

function trackLogFlare(headers, body) {
	var options = {
		method: 'POST',
		hostname: 'api.logflare.app',
		path: '/logs?api_key=&source=' + process.env.LOGFLARE_SOURCE,
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': process.env.LOGFLARE_API_KEY,
		},
		maxRedirects: 20,
	};

	var req = https.request(options, function (res) {});

	var postData = JSON.stringify({
		log_entry: `API ACCESS - ${headers['x-forwarded-for']} - ${body.url}`,
		metadata: {
			...headers,
			...body,
		},
	});

	req.write(postData);

	req.end();
}
