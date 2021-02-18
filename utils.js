import fetchNode from 'node-fetch';

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

export function trackPlausible(host, url, userAgent) {
	if (host.match('localhost')) return;
	let data = { n: 'pageview', u: 'https://www.vacinacaocovid19.pt' + url, d: 'vacinacaocovid19.pt', r: null, w: 0 };

	fetchNode('https://plausible.io/api/event', {
		method: 'post',
		headers: {
			'user-agent': userAgent,
		},
		body: JSON.stringify(data),
	})
		.then(() => {
			console.log('done');
		})
		.catch(() => {
			console.log('err');
		});
}
