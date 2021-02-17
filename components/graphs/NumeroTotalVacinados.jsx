import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber, hexToRgb } from '../../utils';

export function NumeroTotalVacinados({ labels, values, valuesIn1, valuesIn2, colors }) {
	let [loading, setLoading] = useState(true);
	let [height, setHeight] = useState(400);
	let [foreground, color_1, color_2] = colors;
	const canvasRef = useRef(null);
	let commonProps = {
		fill: true,
		lineTension: 0.5,
		lineBorder: 1,
		borderWidth: 3,
		borderJoinStyle: 'miter',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBorderWidth: 2,
		pointRadius: 3,
		pointHitRadius: 10,
	};

	const data = (canvas) => {
		debugger;
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
		let { r, g, b } = hexToRgb(foreground);
		console.log(r,b,g)
		try{
			gradient.addColorStop(0, 'rgba('+r+','+g+','+b+',15%)');
			gradient.addColorStop(1, 'rgba('+r+','+g+','+b+',0)');
		}catch(e){
			gradient.addColorStop(0, '#d9f3ef');
			gradient.addColorStop(1, '#ffffff');
		}

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

		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		return {
			labels: labels,
			datasets: [
				{
					...commonProps,
					label: 'Total vacinas administradas',
					backgroundColor: gradient,
					borderColor: foreground,
					pointBorderColor: foreground,
					pointBackgroundColor: foreground,
					pointHoverBackgroundColor: foreground,
					pointHoverBorderColor: foreground,
					data: values,
				},
				{
					...commonProps,
					label: 'Total de vacinas administradas - 1ª Dose',
					fill: false,
					borderColor: color_1,
					pointBorderColor: color_1,
					pointBackgroundColor: color_1,
					pointHoverBackgroundColor: color_1,
					pointHoverBorderColor: color_1,
					data: valuesIn1,
				},
				{
					...commonProps,
					label: 'Total de vacinas administradas - 2ª Dose',
					fill: false,
					borderColor: color_2,
					pointBorderColor: color_2,
					pointBackgroundColor: color_2,
					pointHoverBackgroundColor: color_2,
					pointHoverBorderColor: color_2,
					data: valuesIn2,
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
						return label + ': ' + formatNumber(tooltipItem.value);
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
							callback: (value) => formatNumber(value, false),
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
