import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import fetchNode from 'node-fetch';
import { RESIZE_TRESHOLD } from './constants';

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

export function downloadPNG(canvasElement, graphName) {
	var link = document.createElement('a');
	link.download = 'filename.png';
	link.href = canvasElement.toDataURL();
	link.click();
}

export function perHundred(total, populacaoTotal = populacao.valor) {
	return (total / populacaoTotal) * 100;
}

export function isSameDay(dateA, dateB) {
	let parsedDateA = new Date(dateA);
	let parsedDateB = new Date(dateB);
	let isSame = parsedDateA.toLocaleDateString() === parsedDateB.toLocaleDateString();
	return isSame;
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

export function formatDateShort(date) {
	return format(new Date(date), "dd'/'MM'/'yyyy", {
		locale: pt,
	});
}

export function makeAnnotations(annotationsArray) {
	let annotationBoilerplate = {
		type: 'line',
		mode: 'horizontal',
		scaleID: 'y',
		value: null,
		borderColor: '#0A9DD1',
		borderWidth: 1,
		borderDash: [5, 5],

		label: {
			font: {
				style: 'normal',
			},
			backgroundColor: 'rgba(255,255,255,0.8)',
			cornerRadius: 0,
			drawTime: 'afterDraw',
			color: '#0A9DD1',
			rotation: 270,
			xAdjust: 8,
			//xAdjust: -8,
			yAdjust: 0,
			fontSize: '13px',
			enabled: true,
			content: '',
		},
	};
	let arr = [];
	annotationsArray.forEach((el) => {
		let annotation = {
			...annotationBoilerplate,
			mode: el.mode,
			scaleID: el.mode === 'horizontal' ? 'y' : 'x',
			borderColor: el.color,
			value: el.position,
			display: el.display,
			label: {
				...annotationBoilerplate.label,
				content: el.marcador,
				color: el.color,
				xAdjust: el.xAdjust ?? 0,
			},
		};
		arr.push(annotation);
	});

	return arr;
}

export function calculateDims() {
	if (window.innerWidth <= RESIZE_TRESHOLD) {
		return {
			width: 2000,
			height: 350,
		};
	} else {
		return {
			width: 3000,
			height: 500,
		};
	}
}

export function getColor(d) {
	if (d >= 80) {
		return '#01ae97';
	}

	if (d >= 60) {
		return '#4dc6b6';
	}

	if (d >= 40) {
		return '#80d7cb';
	}

	if (d >= 20) {
		return '#b3e7e0';
	}

	if (d >= 0) {
		return '#e6f7f5';
	}
}
