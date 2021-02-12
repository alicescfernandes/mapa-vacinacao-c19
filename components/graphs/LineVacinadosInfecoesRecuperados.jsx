import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from './../Card';
export function LineVacinadosInfecoesRecuperados({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let marriedData = {};
	let { values, labels, valuesIn1, valuesIn2, raw: rawDiarios } = statistics.getDiariosInoculacoes();
	let { values: valueCasesDiarios, raw: rawCasos } = statistics.getDiariosCases();
	let { main, shades, tints, complements } = colors;
	let [height, setHeight] = useState(400);

	const canvasRef = useRef(null);

	//map the last 30 days in data
	//Marry the data pls
	if (labels.length > 0) {
		let datesVaccines = Array.from(rawDiarios).reverse().slice(0, 14);
		let datesCases = Array.from(rawCasos).reverse().slice(0, 14);
		datesVaccines.forEach((element) => {
			let date = new Date(element.Data);
			let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;
			marriedData[key] = element;
		});

		datesCases.forEach((element, i) => {
			let date = new Date(element.Data);
			let key = `${date.getUTCFullYear()}_${date.getMonth()}_${date.getDate()}`;
			console.log(key, marriedData[key]);
			if (marriedData[key] !== undefined) {
				marriedData[key] = {
					...element,
					...marriedData[key],
				};
			}
		});
	}
	marriedData = Object.values(marriedData).reverse();

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);

		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		window.addEventListener('resize', () => {
			if (window.outerWidth <= 800) {
				canvas.parentNode.style.width = '1000px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

		gradient.addColorStop(0, 'rgba(1,174,151,60%)');
		gradient.addColorStop(1, 'rgba(1,174,151,20%)');

		return {
			labels: labels.slice(labels.length - 14, labels.length),
			datasets: [
				{
					label: 'Inoculação - 2ª Dose',
					fill: false,
					type: 'bar',
					backgroundColor: main,
					data: valuesIn2.slice(valuesIn2.length - 14, valuesIn2.length),
					stack: 'stack0',
					order: 1,
				},
				{
					label: 'Inoculação - 1ª Dose',
					backgroundColor: shades[0],
					borderColor: shades[0],
					data: valuesIn1.slice(valuesIn1.length - 14, valuesIn1.length),
					stack: 'stack0',
					order: 2,
				},
				{
					label: 'Vacinas Totais',
					type: 'bar',
					backgroundColor: shades[1],
					data: values.slice(values.length - 14, values.length),
					stack: 'stack0',
					yAxisID: 'total',

					order: 3,
				},
				{
					label: 'Número de infectados diário',
					type: 'bar',
					backgroundColor: complements[1],
					data: marriedData.map((el) => el.ConfirmadosNovos),
					stack: 'stack1',
					yAxisID: 'total',
					order: 4,
				},
				{
					label: 'Número de recuperados diário',
					type: 'bar',
					backgroundColor: complements[2],
					data: marriedData.map((el) => el.VarRecuperados),
					stack: 'stack2',
					yAxisID: 'total',
					order: 5,
				},
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	const options = () => {
		return {
			plugins: {
				datalabels: {
					display: false,
					color: 'blue',
				},
			},
			onResize: (a, b, c) => {
				if (window.innerWidth <= 800) {
					a.canvas.parentNode.style.width = '1000px';
				} else {
					a.canvas.parentNode.style.width = 'auto';
				}
			},
			legend: {
				position: 'bottom',
				align: 'start',
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
						return label + ': ' + numberFormatter.format(parseInt(tooltipItem.value) || 0).replace(',', ' ');
					},
					title: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem[0].datasetIndex];
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				yAxes: [
					{
						stacked: true,
					},
					{
						stacked: false,
						id: 'total',
						display: false,
					},
				],
				xAxes: [
					{
						stacked: true,
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		};
	};
	useEffect(() => {
		if (canvasRef?.current?.chartInstance?.canvas?.height > 0) {
			setHeight(canvasRef?.current?.chartInstance?.canvas?.height);
		}
	}, [canvasRef.current]);

	useEffect(() => {
		if (values.length > 0 && height > 0) {
			setLoading(false);
		}
	}, [values, labels, height]);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Bar height={100} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
