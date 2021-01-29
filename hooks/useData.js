import { useEffect, useState } from 'react';
import vaccines from '../data/vaccines.json';

export function useData() {
	let vals = [];
	let labls = [];
	let [labels, setLabels] = useState([]);
	let [values, setValues] = useState([]);

	let options = {
		month: 'short',
		day: 'numeric',
	};
	let f = new Intl.DateTimeFormat('pt-PT', options);

	vaccines.forEach((el) => {
		labls.push(f.format(new Date(el.Data)));
		vals.push(el.Vacinados_Ac);
	});

	let statistics = {
		getRaw: () => {
			// console.log('vaccines', JSON.parse(JSON.stringify(vaccines)));
			return vaccines;
		},
		getDesvioPadrao: () => {},

		getMediaMovel: (dias) => {
			let medias = [];
			let labelsMedias = [];
			for (let start = 0, end = dias; end < values.length; start += dias, end += dias) {
				let sum = Math.round(values.slice(start, end).reduce((prev, current) => prev + current, 0) / dias);
				medias.push(sum);
				labelsMedias.push(labels[end]);
				console.log(labels[start], labels[end]);
			}
			return {
				values: medias,
				labels: labelsMedias,
			};
		},

		getVacinadosPorDia: () => {
			let vacinadosPorDia = values.map((val, idx) => {
				let nextDay = idx + 1;
				if (idx > 0 && nextDay < values.length && values[nextDay] != null) {
					console.log({ diaAaSeguir: [nextDay, values[nextDay]], diaAtua: [idx, val], diferenca: values[nextDay] - val });
					return values[nextDay] - val;
				} else {
					return 0;
				}
			});
			return {
				values: vacinadosPorDia,
				labels,
			};
		},
	};

	useEffect(() => {
		setValues(vals);
		setLabels(labls);
	}, []);

	return { labels, values, statistics };
}
