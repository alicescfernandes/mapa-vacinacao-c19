import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from './../Card';
export function LineVacinadosInfecoesRecuperados({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: valueCasesDiarios } = statistics.getDiariosCases();
	let { main, shades, tints, complements } = colors;

	let [height, setHeight] = useState(400);

	const canvasRef = useRef(null);

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);

		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		gradient.addColorStop(0, 'rgba(1,174,151,60%)');
		gradient.addColorStop(1, 'rgba(1,174,151,20%)');

		return {
			labels: labels.slice(valuesIn1.length - 14, valuesIn1.length),
			datasets: [
				{
					label: 'Inoculação - 2ª Dose',
					fill: false,
					type: 'bar',
					backgroundColor: main,
					data: valuesIn2.slice(valuesIn1.length - 14, valuesIn1.length),
					stack: 'stack0',
					yAxisID: 'total',

					//	xAxisID: 'group1',
				},
				{
					label: 'Inoculação - 1ª Dose',
					backgroundColor: shades[0],
					borderColor: shades[0],
					data: valuesIn1.slice(valuesIn1.length - 14, valuesIn1.length),
					stack: 'stack0',
				},
				{
					label: 'Vacinas Totais',
					type: 'bar',
					backgroundColor: shades[1],
					data: values.slice(valuesIn1.length - 14, valuesIn1.length),
					stack: 'stack0',
					yAxisID: 'total',
				},
				{
					label: 'Numero de infectados diário',
					type: 'bar',
					backgroundColor: complements[1],
					data: valueCasesDiarios.slice(valuesIn1.length - 14, valuesIn1.length).map((el) => el.confirmados_novos),
					stack: 'stack1',
					yAxisID: 'total',
				},
				{
					label: 'Numero de recuperados diário',
					type: 'bar',
					backgroundColor: complements[2],
					data: valueCasesDiarios.slice(valuesIn1.length - 14, valuesIn1.length).map((el) => el.recuperados_novos),
					stack: 'stack2',
					yAxisID: 'total',
				},
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	const options = () => {
		return {
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
						stacked: true,
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
