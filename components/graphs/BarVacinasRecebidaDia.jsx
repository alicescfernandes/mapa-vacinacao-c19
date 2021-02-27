import { useEffect, useRef, useState } from 'react';
import 'chartjs-plugin-annotation';
import { Bar, Line } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';

export function BarVacinasRecebidaDia({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let [graphData, setGraphData] = useState({});
	let [foreground, color_1, color_2, color_3, color_4] = colors;

	const data = (canvas) => {
		let { labels, mod, com, az } = graphData;

		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = '100%';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 800) {
				canvas.parentNode.style.width = '1000px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: labels.map(({ from, to }) => {
				let fromDate = new Date(from);
				let toDate = new Date(to);

				return `De ${formatNumber(fromDate.getDate())}/${formatNumber(fromDate.getMonth() + 1)} a ${formatNumber(toDate.getDate())}/${formatNumber(toDate.getMonth() + 1)}`;
			}),
			datasets: [
				{
					label: 'Número total de doses encomendadas',
					fill: false,
					type: 'line',
					overlayBars: true,
					backgroundColor: '#0A9DD1',
					borderColor: '#0A9DD1',
					data: com.map((el) => 31000000),
					order: 1,
					display: false,
					stack: 'stack0',
					pointBackgroundColor: color_4,
					pointBorderWidth: 0,
					pointHoverRadius: 0,
					hidden: true,
					pointHoverBorderWidth: 0,
					pointRadius: 0,
					pointHitRadius: 0,
				},

				{
					label: 'Comirnaty (Pfizer/BioNTech)',
					fill: false,
					type: 'bar',
					overlayBars: true,
					backgroundColor: foreground,
					data: com,
					order: 2,
					display: false,
					stack: 'stack0',
				},

				{
					label: 'Moderna',
					backgroundColor: color_1,
					borderColor: color_1,
					data: mod,
					type: 'bar',

					overlayBars: true,
					order: 3,
					stack: 'stack0',
				},
				{
					label: 'AstraZeneca',
					backgroundColor: color_3,
					borderColor: color_3,
					type: 'bar',
					data: az,
					overlayBars: true,
					order: 3,
					stack: 'stack0',
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
			},
			legend: {
				position: 'top',
				align: 'start',
				onHover: function (event, legend) {
					document.body.classList.add('mouse-pointer');
				},
				onLeave: function (event, legend) {
					document.body.classList.remove('mouse-pointer');
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
						return label + ': ' + (parseInt(tooltipItem.value) ? formatNumber(parseInt(tooltipItem.value), false) : 0);
					},
					title: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem[0].datasetIndex];

						return tooltipItem[0].label;
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
							beginAtZero: true,
							callback: (value) => formatNumber(value, false),
						},
					},
				],
				xAxes: [
					{
						stacked: false,
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		};
	};

	useEffect(() => {
		statistics.getReceivedDosesByBrandByWeek().then((recievedData) => {
			setGraphData(recievedData);
			setLoading(false);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Line height={100} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
