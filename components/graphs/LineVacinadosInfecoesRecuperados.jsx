import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { RESIZE_TRESHOLD } from '../../constants';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
export function LineVacinadosInfecoesRecuperados({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let marriedData = {};
	let { values, labels, valuesIn1, valuesIn2, raw: rawDiarios } = statistics.getDiariosInoculacoes();
	let { raw: rawCasos } = statistics.getDiariosCases();
	let { main, shades, complements } = colors;
	const numeroDias = 30;

	// map the last {numeroDias} days in data
	// Marry the data pls
	// https://www.youtube.com/watch?v=O4IgYxHEAuk
	if (labels.length > 0) {
		let datesVaccines = Array.from(rawDiarios).reverse().slice(0, numeroDias);
		let datesCases = Array.from(rawCasos).reverse().slice(0, numeroDias);
		datesVaccines.forEach((element) => {
			let date = new Date(element.Data);
			let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;
			marriedData[key] = element;
		});

		datesCases.forEach((element, i) => {
			let date = new Date(element.data);
			let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;
			if (marriedData[key] !== undefined) {
				marriedData[key] = {
					...element,
					...marriedData[key],
				};
			}
		});
	}
	marriedData = Object.values(marriedData).reverse();
	console.log(marriedData);
	const data = (canvas) => {
		if (window.innerWidth <= RESIZE_TRESHOLD) {
			canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= RESIZE_TRESHOLD) {
				canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: labels.slice(labels.length - numeroDias, labels.length),
			datasets: [
				/* {
					label: 'Inoculação - 2ª Dose',
					fill: false,
					type: 'bar',
					backgroundColor: main,
					data: valuesIn2.slice(valuesIn2.length - numeroDias, valuesIn2.length),
					stack: 'stack0',
					order: 1,
				},
				{
					label: 'Inoculação - 1ª Dose / Unidpse',
					backgroundColor: shades[0],
					borderColor: shades[0],
					data: valuesIn1.slice(valuesIn1.length - numeroDias, valuesIn1.length),
					stack: 'stack0',
					order: 2,
				}, */
				{
					label: 'Vacinas administradas',
					backgroundColor: shades[0],
					borderColor: shades[0],
					data: values.slice(values.length - numeroDias, valuesIn1.length),
					stack: 'stack0',
					order: 2,
				},

				{
					label: 'Número de infectados diário',
					type: 'bar',
					backgroundColor: complements[1],
					data: marriedData.map((el) => el.confirmados_novos),
					stack: 'stack1',
					order: 4,
				},
				{
					label: 'Número de recuperados diário',
					type: 'bar',
					backgroundColor: complements[2],
					data: marriedData.map((el) => el.var_recuperados),
					stack: 'stack2',
					order: 5,
				},
			],
		};
	};
	const options = () => {
		return {
			plugins: {
				datalabels: {
					display: false,
					color: 'blue',
				},
				legend: {
					position: 'bottom',
					align: 'start',
				},
			},

			animation: {
				duration: 1000,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
				callbacks: {
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label + ': ' + formatNumber(parseInt(tooltipItem.value), false);
					},
					title: (tooltipItem, data) => {
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				y: {
					stacked: true,
					ticks: {
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
					},
				},

				x: {
					stacked: true,
					ticks: {
						beginAtZero: true,
					},
				},
			},
		};
	};

	useEffect(() => {
		if (values.length > 0) {
			setLoading(false);
		}
	}, [values, labels]);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Bar height={80} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
