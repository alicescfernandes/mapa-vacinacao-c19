import { useEffect, useState } from 'react';
import vaccinesData from '../data/vaccines.json';

export function useData() {
	let [vaccines, setVaccines] = useState(vaccinesData);
	let [labels, setLabels] = useState([]);
	let [values, setValues] = useState([]);
	let [intervalId, setIntervalId] = useState(null);

	let options = {
		month: 'short',
		day: 'numeric',
	};
	let f = new Intl.DateTimeFormat('pt-PT', options);

	function parseData(data) {
		let values = [];
		let labels = [];

		console.count('parseData');
		data.forEach((el) => {
			labels.push(f.format(new Date(el.Data)));
			values.push(el.Vacinados_Ac);
		});

		return {
			values,
			labels,
		};
	}

	let { labels: labls, values: vals } = parseData(vaccines);

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

		getDiariosInoculacoes: () => {
			let in1 = [];
			let in2 = [];
			let total = values.map((val, idx, vals) => {
				//The first one
				if (idx === 0) {
					in1.push(vaccines[idx].Inoculacao1_Ac);
					in2.push(vaccines[idx].Inoculacao2_Ac);
					return val;
				}

				let prevDay = idx - 1;

				if (vaccines[prevDay].Inoculacao1_Ac == null || vaccines[idx].Inoculacao1_Ac == null) {
					in1.push(null);
				} else {
					in1.push(vaccines[idx].Inoculacao1_Ac - vaccines[prevDay].Inoculacao1_Ac);
				}

				if (vaccines[prevDay].Inoculacao2_Ac == null || vaccines[idx].Inoculacao2_Ac == null) {
					in2.push(null);
				} else {
					in2.push(vaccines[idx].Inoculacao2_Ac - vaccines[prevDay].Inoculacao2_Ac);
				}

				if (vals[prevDay] == null || val == null) {
					return null;
				}
				return val - vals[prevDay];
			});
			return {
				valuesIn1: in1,
				valuesIn2: in2,
				values: total,
				labels,
			};
		},
	};

	useEffect(() => {
		setValues(vals);
		setLabels(labls);
	}, []);

	useEffect(() => {
		let { labels: labls, values: vals } = parseData(vaccines);
		setValues(vals);
		setLabels(labls);
	}, [vaccines]);

	useEffect(() => {
		if (intervalId === null) {
			let interval = window.setInterval(() => {
				fetch('/api/vaccines')
					.then((data) => data.json())
					.then((d) => {
						if (d.length != vaccines.length && vaccines.length > 0) {
							setVaccines(d);
						}
					});
			}, 5 * 60 * 1000);
			setIntervalId(interval);
		}
	}, [vaccines]);

	return { labels, values, statistics };
}
