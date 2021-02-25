import { useEffect, useState } from 'react';
import vaccinesData from '../data/vaccines.json';
import casesData from '../data/cases.json';
import { fetcher, fetchWithLocalCache } from '../utils';
import { set } from 'core-js/fn/dict';
export function useData() {
	let [ready, setReady] = useState(false);
	let [versioning, bumpVersioning] = useState(false);
	let [weeks, setWeeks] = useState(false);
	let [sns, setSns] = useState(false);
	let [ecdc, setECDC] = useState(false);
	let [ars, setArs] = useState(false);
	let [vaccines, setVaccines] = useState(false);
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
		if (!ready) return;
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

	let statistics = {
		getRaw: () => {
			return vaccines;
		},
		getDailyData: () => {
			return parseData(vaccines);
		},
		getDesvioPadrao: () => {},

		getMediaMovel: (dias) => {
			let medias = [];
			let labelsMedias = [];
			let { labels, values } = parseData(vaccines);

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
			let { labels, values } = statistics.getDailyData();
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
			let { labels, values } = statistics.getDailyData();
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
			let { labels, values } = parseData(vaccines);

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

			let com = {};
			let mod = {};
			let az = {};

			ecdc.forEach((el) => {
				var obj = {};
				if (el['Doses received'] > 0) {
					com[el['Week']] = com[el['Week']] || null;
					mod[el['Week']] = mod[el['Week']] || null;
					az[el['Week']] = az[el['Week']] || null;
					labels[el['Week']] = weeks[el['Week']];

					if (el['Vaccine brand'] === 'COM') {
						com[el['Week']] = el['Doses received'];
					}

					if (el['Vaccine brand'] === 'MOD') {
						mod[el['Week']] = el['Doses received'];
					}
					if (el['Vaccine brand'] === 'AZ') {
						az[el['Week']] = el['Doses received'];
					}
				}
			});

			com = Object.values(com);
			mod = Object.values(mod);
			az = Object.values(az);

			labels = Object.values(labels);

			return {
				com,
				mod,
				az,
				labels,
			};
		},
		getAdministredDosesByAgeByWeek: async () => {
			let labels = {};
			let maxValue = 0;

			let groups = {};

			ecdc.forEach((el) => {
				if (el['Doses received'] == '') {
					if (!labels.hasOwnProperty(el['Week'])) {
						labels[el['Week'].replace('-', '')] = weeks[el['Week']];
					}

					groups[el['Group']] = groups[el['Group']] || {
						dose_1: [],
						dose_2: [],
					};
					maxValue = Math.max(el['First dose'], el['Second dose']);
					groups[el['Group']].dose_1[el['Week']] = (groups[el['Group']].dose_1[el['Week']] || 0) + parseInt(el['First dose']);
					groups[el['Group']].dose_2[el['Week']] = (groups[el['Group']].dose_2[el['Week']] || 0) + parseInt(el['Second dose']);
				}
			});
			return {
				maxValue,
				labels,
				groups,
			};
		},
		getTotalAdministredDosesByAgeByWeek: async () => {
			let labels = {};

			let groups = {};

			ecdc.forEach((el) => {
				if (el['Doses received'] == '') {
					groups[el['Group']] = groups[el['Group']] || {
						mod: [],
						com: [],
						az: [],
						target: 0,
					};

					if (el['Vaccine brand'] === 'COM') {
						groups[el['Group']].com[0] = parseInt((groups[el['Group']].com[0] || 0) + parseInt(el['First dose']));
						groups[el['Group']].com[1] = (groups[el['Group']].com[1] || 0) + parseInt(el['Second dose']);
					}

					if (el['Vaccine brand'] === 'MOD') {
						groups[el['Group']].mod[0] = (groups[el['Group']].mod[0] || 0) + parseInt(el['First dose']);
						groups[el['Group']].mod[1] = (groups[el['Group']].mod[1] || 0) + parseInt(el['Second dose']);
					}

					if (el['Vaccine brand'] === 'AZ') {
						groups[el['Group']].az[0] = (groups[el['Group']].az[0] || 0) + parseInt(el['First dose']);
						groups[el['Group']].az[1] = (groups[el['Group']].az[1] || 0) + parseInt(el['Second dose']);
					}

					groups[el['Group']].target = (groups[el['Group']].target || 0) + parseInt(el['Group population']);
				}
			});

			return groups;
		},
		getTotalSNS: () => {
			return sns.filter((el) => {
				return el.TYPE === 'REGIONAL' || el.TYPE === 'GENERAL';
			});
		},
		getTotalARS: () => {
			let data = {};
			ars.features.forEach((el) => {
				if (el.attributes.ARSNome === 'Nacional') el.attributes.ARSNome = 'All';
				if (!(el.attributes.ARSNome in data)) {
					data[el.attributes.ARSNome] = {
						obitosNovos7Dias: 0,
						casosNovos7Dias: 0,
					};
				}

				data[el.attributes.ARSNome].obitosNovos7Dias += el.attributes.VarObitos;
				data[el.attributes.ARSNome].casosNovos7Dias += el.attributes.ConfirmadosNovos;
			});
			return data;
		},
	};

	useEffect(() => {
		Promise.all([fetchWithLocalCache('/api/ecdc'), fetchWithLocalCache('/api/weeks'), fetchWithLocalCache('/api/sns'), fetchWithLocalCache('/api/vaccinesold'), fetchWithLocalCache('/api/ars')]).then(([ecdc, weeks, sns, vaccines, ars]) => {
			setSns(sns);
			setWeeks(weeks);
			setECDC(ecdc);
			setVaccines(vaccines);
			setArs(ars);
			setReady(true);
		});
	}, []);

	useEffect(() => {
		/* let { labels: labls, values: vals } = parseData(vaccines);
		setValues(vals);
		setLabels(labls); */
	}, [vaccines]);

	function update(type, data) {
		switch (type) {
			case 'vacinas':
				let arr = Array.from(vaccines);
				arr.push(data);
				setVaccines(arr);
				bumpVersioning(versioning + 1);
				break;

			case 'casos':
				casos.push(data);
				setCasos(casos);
				bumpVersioning(versioning + 1);
				break;

			case 'reload':
				window.location.reload();
				break;
		}
	}

	return { versioning, statistics, ready, update };
}
