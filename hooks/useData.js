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
			return vaccines;
		},
		getDesvioPadrao: () => {},

		getMediaMovel: (dias) => {
			let medias = [];
			let labelsMedias = [];
			for (let start = 1; start <= dias; start++) {
				let sum = Math.round(values.slice(0, start).reduce((prev, current) => prev + current, 0) / start);
				medias.push(sum);
				labelsMedias.push(labels[start]);
			}

			for (let start = dias; start <= values.length; start++) {
				let sum = Math.round(values.slice(start - dias, start).reduce((prev, current) => prev + current, 0) / dias);
				medias.push(sum);
				labelsMedias.push(labels[start]);
			}

			return {
				values: medias,
				labels: labelsMedias,
			};
		},

		getMediaMovelDiaria: (dias) => {
			let medias = [];
			let labelsMedias = [];
			let { values } = statistics.getVacinadosPorDia();

			for (let start = 1; start <= dias; start++) {
				if (values[start] === null) {
					medias.push(null);
					continue;
				}

				let sum = Math.round(values.slice(0, start).reduce((prev, current) => prev + current, 0) / start);
				medias.push(sum);
				labelsMedias.push(labels[start]);
			}

			for (let start = dias; start <= values.length; start++) {
				let slice = values.slice(start - dias, start);

				if (values[start] === null || slice.includes(null) > 0) {
					medias.push(null);
					continue;
				}

				let sum = Math.round(slice.reduce((prev, current) => prev + current, 0) / dias);
				medias.push(sum);
				labelsMedias.push(labels[start]);
			}

			return {
				values: medias,
				labels: labelsMedias,
			};
		},

		getVacinadosPorDia: () => {
			let vacinadosPorDia = values.map((val, idx, vals) => {
				//The first one
				if (idx === 0) {
					return val;
				}

				let nextDay = idx - 1;
				if (vals[nextDay] == null || val == null) {
					return null;
				}
				return val - vals[nextDay];
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
