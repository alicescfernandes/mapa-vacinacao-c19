import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';

export function BarVacinasRecebidaDia({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let [graphData, setGraphData] = useState({});

	let [foreground, color_1, color_2, color_3, color_4] = colors;

	let [height, setHeight] = useState(400);

	const canvasRef = useRef(null);

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
		let { labels, mod, com } = graphData;
		if (window.outerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = '100%';
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
			labels: labels.map(({ from, to }) => {
				let fromDate = new Date(from);
				let toDate = new Date(to);

				return `De ${formatNumber(fromDate.getDate())}/${formatNumber(fromDate.getMonth() + 1)} a ${formatNumber(toDate.getDate())}/${formatNumber(toDate.getMonth() + 1)}`;
			}),
			datasets: [
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
					overlayBars: true,
					order: 3,
					stack: 'stack0',
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
						return label + ': ' + (parseInt(tooltipItem.value) ? formatNumber(parseInt(tooltipItem.value)) : 0);
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
		statistics.getReceivedDosesByBrandByWeek().then((recievedData) => {
			setGraphData(recievedData);
			setLoading(false);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Bar height={100} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
