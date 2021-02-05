import { useEffect, createRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { FOREGROUND_COLOR } from '../constants';
import { Card } from './Card';
import convert from 'color-convert';

export function LineChart({ labels, values, valuesIn1, valuesIn2, colors }) {
	let [loading, setLoading] = useState(true);
	let [height, setHeight] = useState(400);

	const canvasRef = createRef(null);

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
		if (colors[0]) {
			let [r, g, b] = convert.hex.rgb('#' + colors[0]);
			console.log(r, g, b);
			gradient.addColorStop(0, `rgba(${r},${g},${b},15%)`);
			gradient.addColorStop(1, `rgba(${r},${g},${b},0%)`);
		} else {
			gradient.addColorStop(0, 'rgba(1,174,151,15%)');
			gradient.addColorStop(1, 'rgba(1,174,151,0%)');
		}

		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		return {
			labels: labels,
			datasets: [
				{
					label: 'Total vacinas administradas',
					fill: true,
					lineTension: 0.5,
					lineBorder: 1,
					borderWidth: 3,
					backgroundColor: gradient,
					borderColor: '#' + colors[0] || FOREGROUND_COLOR,
					borderJoinStyle: 'miter',
					pointBorderColor: '#' + colors[0] || 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: '#' + colors[0] || 'rgba(75,192,192,1)',
					pointHoverBorderColor: '#' + colors[0] || 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 3,
					pointHitRadius: 10,
					data: values,
				},
				{
					label: 'Total de vacinas administradas - 1ª Dose',
					fill: false,
					lineTension: 0.5,
					lineBorder: 1,
					borderWidth: 3,
					borderColor: '#' + colors[1] || 'rgba(3,109,95,1)',
					borderJoinStyle: 'miter',
					pointBorderColor: '#' + colors[1] || 'rgba(3,109,95,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: '#' + colors[1] || 'rgba(3,109,95,1)',
					pointHoverBorderColor: '#' + colors[1] || 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 3,
					pointHitRadius: 10,
					data: valuesIn1,
				},
				{
					label: 'Total de vacinas administradas - 2ª Dose',
					fill: false,
					lineTension: 0.5,
					lineBorder: 1,
					borderWidth: 3,
					borderColor: '#' + colors[2] || 'rgba(1,76,67,1)',
					borderJoinStyle: 'miter',
					pointBorderColor: '#' + colors[2] || 'rgba(1,76,67,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: '#' + colors[2] || 'rgba(1,76,67,1)',
					pointHoverBorderColor: '#' + colors[2] || 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 3,
					pointHitRadius: 10,
					data: valuesIn2,
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

	return (
		<Card allowOverflow={true}>
			<div> {!loading ? <Line height={100} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
