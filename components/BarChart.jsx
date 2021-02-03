import { useEffect, createRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FOREGROUND_COLOR } from '../constants';
import { Card } from './Card';

export function BarChart({ statistics }) {
	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: values2, labels2 } = statistics.getMediaMovelDiaria(7);
	let [height, setHeight] = useState(400);

	const canvasRef = createRef(null);

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
			labels: labels,
			datasets: [
				{
					label: 'Vacinas diárias - Média movel de 7 dias',
					fill: false,
					lineTension: 0.5,
					overlayBars: true,

					type: 'line',
					lineBorder: 1,
					borderWidth: 2,
					backgroundColor: gradient,
					borderColor: 'rgb(220,220,200)',
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgb(220,220,200)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgb(220,220,200)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 3,
					pointHitRadius: 10,
					data: values2,
					order: 1,
				},
				{
					label: 'Inoculação - 2ª Dose',
					fill: false,
					type: 'bar',
					overlayBars: true,
					backgroundColor: '#006d5f',
					data: valuesIn2,
					order: 2,
					display: false,
				},
				{
					label: 'Inoculação - 1ª Dose',
					backgroundColor: FOREGROUND_COLOR,
					borderColor: FOREGROUND_COLOR,
					data: valuesIn1,
					overlayBars: true,
					order: 3,
				},
				{
					label: 'Vacinas Totais',
					type: 'bar',
					overlayBars: true,
					backgroundColor: '#caeae4',
					data: values,
					order: 4,
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
				callbacks: {
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label + ': ' + numberFormatter.format(tooltipItem.value).replace(',', ' ');
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
						scaleLabel: {
							display: true,
						},
						gridLines: {
							drawBorder: false,
						},
						ticks: {
							beginAtZero: false,
							callback: (value) => numberFormatter.format(value),
						},
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
