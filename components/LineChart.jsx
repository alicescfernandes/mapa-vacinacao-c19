import { useEffect, createRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useData } from '../hooks/useData';
import { Line } from 'react-chartjs-2';
import { FOREGROUND_COLOR } from '../constants';
import { Card } from './Card';

export function LineChart() {
	let [loading, setLoading] = useState(true);
	let { values, labels } = useData();
	let [height, setHeight] = useState(400);

	const canvasRef = createRef(null);

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);

		gradient.addColorStop(0, 'rgba(1,174,151,30%)');
		gradient.addColorStop(1, 'rgba(1,174,151,0%)');

		return {
			labels: labels,
			datasets: [
				{
					label: 'Vacinados por dia',
					fill: true,
					lineTension: 0.5,
					lineBorder: 1,
					borderWidth: 3,
					backgroundColor: gradient,
					borderColor: FOREGROUND_COLOR,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 3,
					pointHitRadius: 10,
					data: values,
				},
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	const options = () => {
		return {
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
						console.log(tooltipItem, tooltipItem);
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label + ': ' + numberFormatter.format(tooltipItem.value).replace(',', ' ');
					},
					title: (tooltipItem, data) => {
						console.log(tooltipItem[0], tooltipItem[0]);
						var label = data.datasets[tooltipItem[0].datasetIndex];
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				yAxes: [
					{
						scaleLabel: {
							display: true,
						},
						gridLines: {
							drawBorder: false,
						},
						ticks: {
							beginAtZero: false,
							min: Math.min(...values),
							max: Math.max(...values) + Math.max(...values) * 0.05,
							stepSize: (Math.max(...values) / 5).toFixed(0),
							callback: (value) => numberFormatter.format(value),
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

	return <Card>{!loading ? <Line height={100} ref={canvasRef} options={options()} data={data} /> : ''}</Card>;
}
