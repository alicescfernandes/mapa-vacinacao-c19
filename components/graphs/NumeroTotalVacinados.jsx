import { createRef, useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber, hexToRgb } from '../../utils';
import 'chartjs-plugin-annotation';
import { CustomCheckbox } from './../CustomCheckbox';

export function NumeroTotalVacinados({ colors, statistics }) {
	let { labels, values } = statistics.getDailyData();
	let { valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();
	let [annotationsToggle, setAnnotationsToggle] = useState({
		imunidade: true,
		primeira_fase: true,
	});

	let [loading, setLoading] = useState(true);
	let [height, setHeight] = useState(400);
	let [foreground, color_1, color_2] = colors;
	let commonProps = {
		fill: true,
		lineTension: 0.5,
		lineBorder: 1,
		borderWidth: 3,
		borderJoinStyle: 'miter',
		pointBorderWidth: 1,
		pointHoverRadius: 3,
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
	};
	let chartRef = createRef();
	const data = (canvas, cenas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
		let { r, g, b } = hexToRgb(foreground);
		try {
			gradient.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',15%)');
			gradient.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
		} catch (e) {
			gradient.addColorStop(0, '#d9f3ef');
			gradient.addColorStop(1, '#ffffff');
		}

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
				},
			},
			legend: {
				position: 'bottom',
				align: 'start',
			},

			animation: {
				duration: 1000,
			},
			annotation: {
				annotations: [
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: annotationsToggle?.primeira_fase ? 1800000 : null,
						borderColor: '#0A9DD1',
						borderWidth: 2,
						borderDash: [5, 5],

						label: {
							backgroundColor: 'rgba(0,0,0,0.0)',

							drawTime: 'afterDatasetsDraw',

							fontSize: 13,

							textAlign: 'left',
							fontColor: '#0A9DD1',
							position: 'left',
							xAdjust: 10,
							yAdjust: -10,
							fontSize: '13px',
							fontStyle: 'bold',

							enabled: true,
							content: '1ª Fase',
						},
					},
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: annotationsToggle?.primeira_fase ? 1900000 : null,
						borderColor: 'transparent',
						label: {
							enabled: false,
						},
					},

					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: annotationsToggle?.imunidade ? 10286300 * 0.7 : null,
						borderColor: '#D17615',
						borderWidth: 2,
						borderDash: [5, 5],

						label: {
							backgroundColor: 'rgba(0,0,0,0.0)',

							drawTime: 'afterDatasetsDraw',

							fontSize: 13,

							textAlign: 'left',
							font: {
								style: 'bold',
							},
							fontStyle: 'bold',

							fontColor: '#D17615',
							fontSize: '13px',
							position: 'left',
							xAdjust: 10,
							yAdjust: -10,
							enabled: true,
							content: 'Imunidade de Grupo',
						},
					},
				],
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
							//max: 10000000,
							callback: (value) => formatNumber(value, false),
						},
					},
				],
			},
		};
	};
	useEffect(() => {
		console.log(0, chartRef);
		console.log(1, chartRef?.current?.chartInstance?.scales['y-axis-0']?.end);
	}, [chartRef.current]);

	useEffect(() => {
		if (values.length > 0) {
			setLoading(false);
		}
	}, [values, labels, height]);

	return (
		<Card allowOverflow={true}>
			<div style={{ textAlign: 'left' }}>
				<CustomCheckbox
					checked={annotationsToggle.primeira_fase}
					label={'1ª Fase'}
					onChange={(checked) => {
						setAnnotationsToggle({
							...annotationsToggle,
							primeira_fase: checked,
						});
					}}
				/>
				<CustomCheckbox
					checked={annotationsToggle.imunidade}
					label={'Imunidade de Grupo'}
					onChange={(checked) => {
						setAnnotationsToggle({
							...annotationsToggle,
							imunidade: checked,
						});
					}}
				/>
			</div>
			<div> {!loading ? <Line height={80} ref={chartRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
