import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { RESIZE_TRESHOLD } from '../../constants';
import { formatNumber } from '../../utils';
import { Card } from './../Card';

export function VacinadosPorDia({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: values2 } = statistics.getMediaMovelDiaria(7);
	let [vacinas_stock, setVacinas_stock] = useState([]);
	let { main, tints, shades, complements } = colors;

	const canvasRef = useRef(null);

	const data = (canvas) => {
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
				/* 	{
					label: 'Stock de Vacinas - Estimativa',
					fill: false,
					lineTension: 0.5,
					overlayBars: false,
					type: 'line',
					lineBorder: 1,
					borderWidth: 3,
					borderColor: complements[2],
					borderJoinStyle: 'miter',
					pointBorderColor: complements[2],
					pointBackgroundColor: complements[2],
					pointBorderWidth: 1,
					pointHoverRadius: 3,
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 3,
					data: vacinas_stock,
					order: 1,
					yAxisID: 'total',
				}, */
				{
					label: 'Vacinas diárias - Média movel de 7 dias',
					fill: false,
					lineTension: 0.5,
					overlayBars: true,
					type: 'line',
					lineBorder: 1,
					borderWidth: 3,
					borderColor: complements[1],
					borderJoinStyle: 'miter',
					pointBorderColor: complements[1],
					pointBackgroundColor: complements[1],
					pointBorderWidth: 1,
					pointHoverRadius: 3,
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 3,
					data: values2,
					order: 2,
				},

				{
					label: 'Inoculação - 2ª Dose',
					fill: false,
					type: 'bar',
					overlayBars: true,
					backgroundColor: tints[0],
					data: valuesIn2,
					order: 3,
					display: false,
					stack: 'stack0',
				},
				{
					label: 'Inoculação - 1ª Dose',
					backgroundColor: shades[0],
					borderColor: shades[0],
					data: valuesIn1,
					overlayBars: true,
					order: 4,
					stack: 'stack0',
				},
				{
					label: 'Vacinas Totais',
					type: 'bar',
					overlayBars: true,
					fill: false,
					borderColor: main,
					backgroundColor: 'transparent',
					data: values,
					borderWidth: 2,
					order: 5,
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
						return label + ': ' + numberFormatter.format(parseInt(tooltipItem.value)).replace(',', ' ');
					},
					title: (tooltipItem, data) => {
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				y: {
					stacked: true,
					display: false,
					ticks: {
						beginAtZero: false,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
						//max: 900_000,
					},
				},

				x: {
					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
					},
				},
			},
		};
	};

	useEffect(() => {
		if (values.length && loading === true) {
			statistics.getEstimativaStock().then(({ vaccines_stock_var }) => {
				setVacinas_stock(vaccines_stock_var);
				setLoading(false);
			});
		}
	}, [values]);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Bar height={80} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
