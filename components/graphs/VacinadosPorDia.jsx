import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { RESIZE_TRESHOLD } from '../../constants';
import { formatNumber } from '../../utils';
import { Card } from './../Card';

export function VacinadosPorDia({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: values2, labels2 } = statistics.getMediaMovelDiaria(7);
	let [foreground, color_1, color_2, color_3, color_4] = colors;

	let [height, setHeight] = useState(400);

	const canvasRef = useRef(null);

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');

		if (window.innerWidth <= RESIZE_TRESHOLD) {
			canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
		} else {
			canvas.parentNode.style.width = '100%';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= RESIZE_TRESHOLD) {
				canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

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
					borderWidth: 3,
					borderColor: color_4,
					borderJoinStyle: 'miter',
					pointBorderColor: color_4,
					pointBackgroundColor: color_4,
					pointBorderWidth: 1,
					pointHoverRadius: 3,
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: values2,
					order: 1,
				},
				{
					label: 'Inoculação - 2ª Dose',
					fill: false,
					type: 'bar',
					overlayBars: true,
					backgroundColor: foreground,
					data: valuesIn2,
					order: 2,
					display: false,
					stack: 'stack0',
				},
				{
					label: 'Inoculação - 1ª Dose',
					backgroundColor: color_1,
					borderColor: color_1,
					data: valuesIn1,
					overlayBars: true,
					order: 3,
					stack: 'stack0',
				},
				{
					label: 'Vacinas Totais',
					type: 'bar',
					overlayBars: true,
					overlayBars: true,
					backgroundColor: color_2,
					data: values,
					order: 4,
					yAxisID: 'total',
					stack: 'stack0',
				},
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	const options = () => {
		return {
			layout: {
				padding: -5,
			},
			plugins: {
				datalabels: {
					display: false,
					color: 'blue',
				},
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
						return label + ': ' + numberFormatter.format(parseInt(tooltipItem.value)).replace(',', ' ');
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

						ticks: {
							beginAtZero: false,
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							callback: function (value, index, values) {
								return formatNumber(value, false);
							},
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
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
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
			<div>{!loading ? <Bar height={80} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
