import { useEffect, useState } from 'react';
import vaccinesData from '../data/vaccines.json';
import casesData from '../data/cases.json';
import ecdcData from '../data/ecdc.json';
export function useData() {
	let [vaccines, setVaccines] = useState(vaccinesData);
	let [casos, setCasos] = useState({});
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

		getVacinadosAcum: () => {
			let in1 = [];
			let in2 = [];
			let total = [];
			values.forEach((val, idx, vals) => {
				in1.push(vaccines[idx].Inoculacao1_Ac);
				in2.push(vaccines[idx].Inoculacao2_Ac);
				total.push(vaccines[idx].Vacinados_Ac);
			});

			return {
				valuesIn1: in1,
				valuesIn2: in2,
				values: total,
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
				raw: vaccines,
				labels,
			};
		},
		getDiariosCases: () => {
			let labels2 = [];
			let values2 = [];

			casesData.forEach((el) => {
				labels2.push(new Date(el.Data));
				values2.push(el);
			});

			return { labels: labels2, values: values2, raw: casesData };
		},
		getReceivedDosesByBrandByWeek: async () => {
			let labels = {};

			let [data, weeks] = await Promise.all([fetch('/api/ecdc').then((res) => res.json()), fetch('/api/weeks').then((res) => res.json())]);

			let com = {};
			let mod = {};

			data.forEach((el) => {
				var obj = {};
				if (el['Doses received'] > 0) {
					com[el['Week']] = com[el['Week']] || null;
					mod[el['Week']] = mod[el['Week']] || null;
					labels[el['Week']] = weeks[el['Week']];

					if (el['Vaccine brand'] === 'COM') {
						com[el['Week']] = el['Doses received'];
					}

					if (el['Vaccine brand'] === 'MOD') {
						mod[el['Week']] = el['Doses received'];
					}
				}
			});

			com = Object.values(com);
			mod = Object.values(mod);

			labels = Object.values(labels);

			return {
				com,
				mod,
				labels,
			};
		},
		getAdministredDosesByAgeByWeek: async () => {
			let labels = {};
			let maxValue = 0;
			let [data, weeks] = await Promise.all([fetch('/api/ecdc').then((res) => res.json()), fetch('/api/weeks').then((res) => res.json())]);

			let groups = {};

			data.forEach((el) => {
				if (el['Doses received'] == '') {
					if (!labels.hasOwnProperty(el['Week'])) {
						labels[el['Week'].replace('-', '')] = weeks[el['Week']];
					}

					groups[el['Group']] = groups[el['Group']] || {
						dose_1: [],
						dose_2: [],
					};

					maxValue = Math.max(el['First dose'], el['Second dose']);
					groups[el['Group']].dose_1[el['Week']] = (groups[el['Group']].dose_1[el['Week']] || 0) + el['First dose'];
					groups[el['Group']].dose_2[el['Week']] = (groups[el['Group']].dose_2[el['Week']] || 0) + el['Second dose'];
				}
			});
			console.log('labels', JSON.stringify(labels));
			return {
				maxValue,
				labels,
				groups,
			};
		},
		getTotalAdministredDosesByAgeByWeek: async () => {
			let labels = {};

			let data = await fetch('/api/ecdc').then((res) => res.json());
			let groups = {};

			data.forEach((el) => {
				if (el['Doses received'] == '') {
					groups[el['Group']] = groups[el['Group']] || {
						mod: [],
						com: [],
					};

					if (el['Vaccine brand'] === 'COM') {
						groups[el['Group']].com[0] = (groups[el['Group']].com[0] || 0) + el['First dose'];
						groups[el['Group']].com[1] = (groups[el['Group']].com[1] || 0) + el['Second dose'];
					}

					if (el['Vaccine brand'] === 'MOD') {
						groups[el['Group']].mod[0] = (groups[el['Group']].mod[0] || 0) + el['First dose'];
						groups[el['Group']].mod[1] = (groups[el['Group']].mod[1] || 0) + el['Second dose'];
					}
				}
			});

			return groups;
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

	function update(type, data) {
		switch (type) {
			case 'vacinas':
				let arr = Array.from(vaccines);
				arr.push(data);

				setVaccines(arr);
				break;

			case 'casos':
				casos.push(data);
				setCasos(casos);
				break;

			case 'reload':
				window.location.reload();
				break;
		}
	}

	return { labels, values, statistics, update };
}
