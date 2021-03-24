import fetchNode from 'node-fetch';

export const formatNumber = (number, isDate = true) => {
	let numberFormatter = new Intl.NumberFormat('pt-PT', {
		minimumIntegerDigits: isDate ? 2 : 1,
	});
	return numberFormatter.format(number).replace(/,/gm, ' ');
};

import { populacao } from './data/generic.json';
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
	if (req === undefined) {
		return;
	}
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
	let data = {
		name: 'pageview',
		url: 'https://www.vacinacaocovid19.pt' + url,
		domain: 'vacinacaocovid19.pt',
		referrer: referer,
		screen_width: null,
	};

	if (host.match('localhost')) return;
	if (req.headers['x-request-self'] === 'true') return;
	console.log('track', headers, JSON.stringify(data));
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

export function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

export function downloadPNG(canvasElement, graphName) {
	var link = document.createElement('a');
	link.download = 'filename.png';
	link.href = canvasElement.toDataURL();
	link.click();
}

export function perHundred(total) {
	return (total / populacao.valor) * 100;
}

export function fetchWithLocalCache(url, options) {
	let useCache = true;
	let [path, cacheBuster] = url.split('?');

	let items = JSON.parse(JSON.stringify(localStorage));

	for (var k in items) {
		let [lsPath, lsCacheBuster] = k.split('?');
		if (lsPath === path && lsCacheBuster !== cacheBuster) {
			useCache = false;
			localStorage.removeItem(k);
		}
	}

	if (window && localStorage.getItem(url) && useCache === true) {
		let data = JSON.parse(localStorage.getItem(url));
		return Promise.resolve(data);
	} else {
		return fetch(url, {
			...options,
			headers: {
				'X-Request-Self': true,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem(url, JSON.stringify(data));
				return data;
			});
	}
}
