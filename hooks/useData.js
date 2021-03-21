import { useEffect, useState } from 'react';
import { fetchWithLocalCache } from '../utils';
import data from './../data/last-update.json';
export function useData() {
	let [ready, setReady] = useState(false);
	let [versioning, bumpVersioning] = useState(false);
	let [weeks, setWeeks] = useState(false);
	let [sns, setSns] = useState(false);
	let [ecdc, setECDC] = useState(false);
	let [ars, setArs] = useState(false);
	let [owid, setOwid] = useState(false);
	let [vaccines, setVaccines] = useState(false);
	let [casesData, setCasesData] = useState(false);
	let [labels, setLabels] = useState([]);
	let [rt, setRt] = useState([]);

	let options = {
		month: 'short',
		day: 'numeric',
	};
	let options2 = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	};

	let f = new Intl.DateTimeFormat('pt-PT', options);
	let f2 = new Intl.DateTimeFormat('pt-PT', options2);
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
		getRtRegiao: async (regiao) => {
			let data2 = await fetchWithLocalCache(`/api/rt/${regiao}?${btoa(data.date)}`).then((responseRt) => {
				setRt(responseRt);
				return responseRt;
			});
			let date = new Date('2020-12-27T00:00:45.000Z').getTime();
			// let returnRt = data.filter((el) => new Date(el.Data).getTime() >= date);
			let returnRt = data2;
			return { labels: returnRt.map((el) => f.format(new Date(el.Data))), rt: returnRt };
		},
		getRtRegioes: async () => {
			let data = await fetchWithLocalCache(`/api/rt/todas?${btoa(data.date)}`).then((responseRt) => {
				return responseRt;
			});
			let dates = data.rt_continente.map((el) => el.Data);

			//get rt for each date
			let rtData = [];

			dates.forEach((el) => {
				let tempD = {
					continente: data.rt_continente.filter((tempEl) => tempEl.Data === el)[0],
					centro: data.rt_centro.filter((tempEl) => tempEl.Data === el)[0],
					nacional: data.rt_nacional.filter((tempEl) => tempEl.Data === el)[0],
					lvt: data.rt_lvt.filter((tempEl) => tempEl.Data === el)[0],
					alentejo: data.rt_alentejo.filter((tempEl) => tempEl.Data === el)[0],
					norte: data.rt_norte.filter((tempEl) => tempEl.Data === el)[0],
					algarve: data.rt_algarve.filter((tempEl) => tempEl.Data === el)[0],
					ram: data.rt_ram.filter((tempEl) => tempEl.Data === el)[0],
					raa: data.rt_raa.filter((tempEl) => tempEl.Data === el)[0],
				};

				rtData.push(tempD);
			});

			return { labels: dates.map((el) => f.format(new Date(el))), values: rtData };
		},
		getOwid: () => {
			let labels = owid.eun.data.map((el) => f.format(new Date(el.date)));
			let data = {
				pt: owid.prt.data,
				eu: owid.eun.data,
			};

			return { ...data, labels };
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
				if (parseInt(el['NumberDosesReceived']) > 0) {
					com[el['YearWeekISO']] = com[el['YearWeekISO']] || null;
					mod[el['YearWeekISO']] = mod[el['YearWeekISO']] || null;
					az[el['YearWeekISO']] = az[el['YearWeekISO']] || null;

					labels[el['YearWeekISO']] = weeks[el['YearWeekISO']];

					if (el['Vaccine'] === 'COM') {
						com[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
					}

					if (el['Vaccine'] === 'MOD') {
						mod[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
					}
					if (el['Vaccine'] === 'AZ') {
						az[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
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
				debugger;
				if (el['NumberDosesReceived'] == '') {
					if (!labels.hasOwnProperty(el['YearWeekISO'])) {
						labels[el['YearWeekISO'].replace('-', '')] = weeks[el['YearWeekISO']];
					}

					groups[el['TargetGroup']] = groups[el['TargetGroup']] || {
						dose_1: [],
						dose_2: [],
					};
					maxValue = Math.max(el['FirstDose'], el['SecondDose']);
					groups[el['TargetGroup']].dose_1[el['YearWeekISO']] =
						(groups[el['TargetGroup']].dose_1[el['YearWeekISO']] || 0) + parseInt(el['FirstDose']);
					groups[el['TargetGroup']].dose_2[el['YearWeekISO']] =
						(groups[el['TargetGroup']].dose_2[el['YearWeekISO']] || 0) + parseInt(el['SecondDose']);
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
				if (el['NumberDosesReceived'] == '') {
					groups[el['TargetGroup']] = groups[el['TargetGroup']] || {
						mod: [],
						com: [],
						az: [],
						target: 0,
					};

					if (el['Vaccine'] === 'COM') {
						groups[el['TargetGroup']].com[0] = parseInt((groups[el['TargetGroup']].com[0] || 0) + parseInt(el['FirstDose']));
						groups[el['TargetGroup']].com[1] = (groups[el['TargetGroup']].com[1] || 0) + parseInt(el['SecondDose']);
					}

					if (el['Vaccine'] === 'MOD') {
						groups[el['TargetGroup']].mod[0] = (groups[el['TargetGroup']].mod[0] || 0) + parseInt(el['FirstDose']);
						groups[el['TargetGroup']].mod[1] = (groups[el['TargetGroup']].mod[1] || 0) + parseInt(el['SecondDose']);
					}

					if (el['Vaccine'] === 'AZ') {
						groups[el['TargetGroup']].az[0] = (groups[el['TargetGroup']].az[0] || 0) + parseInt(el['FirstDose']);
						groups[el['TargetGroup']].az[1] = (groups[el['TargetGroup']].az[1] || 0) + parseInt(el['SecondDose']);
					}

					groups[el['TargetGroup']].target = (groups[el['TargetGroup']].target || 0) + parseInt(el['Denominator']);
				}
			});

			return groups;
		},
		getTotalSNS: () => {
			return sns.filter((el) => {
				return (el.TYPE === 'REGIONAL' || el.TYPE === 'GENERAL') && el.DATE == data.dateSnsStartWeirdFormat;
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
		getCases: () => {
			return casesData;
		},
		getDosesRecebidasAcum: () => {
			if (ecdc == false) return;
			let labels = {};
			let data = {};
			let com = {};
			let mod = {};
			let az = {};
			let sum = [];

			let ecdcCopy = JSON.parse(JSON.stringify(ecdc));

			let numbers = [1, 1, 1, 1];

			function sumArray(array) {
				return array.reduce((prev, current) => {
					return prev + current;
				}, 0);
			}

			ecdcCopy
				.filter((el) => el['NumberDosesReceived'] > 0)
				.forEach((el) => {
					if (!labels.hasOwnProperty(el['YearWeekISO'])) {
						labels[el['YearWeekISO']] = weeks[el['YearWeekISO']];
					}

					com[el['YearWeekISO']] = com[el['YearWeekISO']] || 0;
					mod[el['YearWeekISO']] = mod[el['YearWeekISO']] || 0;
					az[el['YearWeekISO']] = az[el['YearWeekISO']] || 0;

					if (el['Vaccine'] === 'COM') {
						com[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
					}

					if (el['Vaccine'] === 'MOD') {
						mod[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
					}

					if (el['Vaccine'] === 'AZ') {
						az[el['YearWeekISO']] = parseInt(el['NumberDosesReceived']);
					}
				});

			com = Object.values(com)
				.reverse()
				.map((el, idx, arr) => sumArray(arr.slice(idx, arr.length)))
				.reverse();

			az = Object.values(az)
				.reverse()
				.map((el, idx, arr) => sumArray(arr.slice(idx, arr.length)))
				.reverse();

			mod = Object.values(mod)
				.reverse()
				.map((el, idx, arr) => sumArray(arr.slice(idx, arr.length)))
				.reverse();

			sum = mod.map((el, idx, arr) => {
				return com[idx] + az[idx] + mod[idx];
			});

			return {
				mod,
				com,
				az,
				sum,
				labels: Object.values(labels),
			};
		},
	};

	useEffect(() => {
		Promise.all([
			fetchWithLocalCache(`/api/ecdc?${btoa(data.dateEcdc)}`, false),
			fetchWithLocalCache(`/api/weeks`, false),
			fetchWithLocalCache(`/api/sns?${btoa(data.dateSnsStartWeirdFormat)}`, false),
			fetchWithLocalCache(`/api/vaccinesold?${btoa(data.date)}`),
			fetchWithLocalCache(`/api/ars?${btoa(data.dateSnsStartWeirdFormat)}`, false),
			fetchWithLocalCache(`/api/cases?${btoa(data.date)}`),
			fetchWithLocalCache(`/api/owid?${btoa(data.date)}`),
			fetchWithLocalCache(`/api/rt/continente?${btoa(Date.now())}`),
		]).then(([ecdc, weeks, sns, vaccines, ars, cases, owid, rt]) => {
			setSns(sns);
			setWeeks(weeks);
			setECDC(ecdc);
			setVaccines(vaccines);
			setArs(ars);
			setCasesData(cases);
			setOwid(owid);
			setRt(rt);
			setReady(true);
		});
	}, []);

	function update(type, data) {
		switch (type) {
			case 'vacinas':
				let arr = Array.from(vaccines);
				arr.push(data);
				setVaccines(arr);
				bumpVersioning(versioning + 1);
				break;

			case 'casos':
				//casos.push(data);
				//setCasos(casos);
				bumpVersioning(versioning + 1);
				break;

			case 'reload':
				window.location.reload();
				break;
		}
	}

	return { versioning, statistics, ready, update };
}
