import { createRef, useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber, hexToRgb, perHundred } from '../../utils';
import 'chartjs-plugin-annotation';
import { CustomCheckbox } from './../CustomCheckbox';
import { RESIZE_TRESHOLD } from '../../constants';
import styles from './../Card.module.scss';

export function NumeroTotalVacinados({ colors, statistics }) {
	let { labels, values } = statistics.getDailyData();
	let { valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();
	let casesData = statistics.getCases();
	let [toggleStats, setToggleStats] = useState({
		imunidade: true,
		primeira_fase: true,
		segunda_fase: true,
		infetados: true,
		perHundred: false,
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
					...commonProps,
					label: 'Total vacinas administradas',
					backgroundColor: gradient,
					borderColor: foreground,
					pointBorderColor: foreground,
					pointBackgroundColor: foreground,
					pointHoverBackgroundColor: foreground,
					pointHoverBorderColor: foreground,
					data: toggleStats.perHundred ? values.map((el) => perHundred(el)) : values,
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
					data: toggleStats.perHundred ? valuesIn1.map((el) => perHundred(el)) : valuesIn1,
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
					data: toggleStats.perHundred ? valuesIn2.map((el) => perHundred(el)) : valuesIn2,
				},
				{
					...commonProps,
					label: 'Casos Confirmados',
					backgroundColor: '#D11541',
					borderColor: '#D11541',
					fill: false,
					pointBorderColor: '#D11541',
					pointBackgroundColor: '#D11541',
					pointHoverBackgroundColor: '#D11541',
					pointHoverBorderColor: '#D11541',
					hidden: toggleStats.infetados === false,
					data: casesData.map((el) => {
						return toggleStats.perHundred ? perHundred(el.ConfirmadosAcumulado) : el.ConfirmadosAcumulado;
					}),
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
						value: toggleStats?.segunda_fase ? (toggleStats.perHundred ? perHundred(1800000) : 1800000) : null,
						borderColor: '#0A9DD1',
						borderWidth: 2,
						borderDash: [5, 5],

						label: {
							backgroundColor: 'rgba(0,0,0,0.0)',

							drawTime: 'afterDatasetsDraw',

							textAlign: 'left',
							fontColor: '#0A9DD1',
							position: 'left',
							xAdjust: 10,
							yAdjust: -10,
							fontSize: '13px',
							enabled: true,
							content: '2ª Fase - Abril (1.8 milhões de pessoas)',
						},
					},
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: toggleStats?.segunda_fase ? (toggleStats.perHundred ? 20 : 1900000) : null,
						borderColor: 'transparent',
						label: {
							enabled: false,
						},
					},
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: toggleStats?.primeira_fase ? (toggleStats.perHundred ? 11 : 1200000) : null,
						borderColor: 'transparent',
						label: {
							enabled: false,
						},
					},
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: toggleStats?.primeira_fase ? (toggleStats.perHundred ? perHundred(950000) : 950000) : null,
						borderColor: '#0A9DD1',
						borderWidth: 2,
						borderDash: [5, 5],

						label: {
							backgroundColor: 'rgba(0,0,0,0.0)',

							drawTime: 'afterDatasetsDraw',

							textAlign: 'left',
							fontColor: '#0A9DD1',
							position: 'left',
							xAdjust: 5,
							yAdjust: -10,
							fontSize: '13px',

							enabled: true,
							content: '1ª Fase - Dezembro (950 mil pessoas)',
						},
					},
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: toggleStats?.imunidade ? (toggleStats.perHundred ? perHundred(10286300 * 0.7) : 10286300 * 0.7) : null,
						borderColor: '#D17615',
						borderWidth: 2,
						borderDash: [5, 5],

						label: {
							backgroundColor: 'rgba(0,0,0,0.0)',

							drawTime: 'afterDatasetsDraw',

							textAlign: 'left',

							fontColor: '#D17615',
							fontSize: '13px',
							position: 'left',
							xAdjust: 5,
							yAdjust: -10,
							enabled: true,
							content: 'Imunidade de Grupo (cerca de 7.2 milhões de pessoas)',
						},
					},
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: toggleStats?.imunidade && toggleStats.perHundred ? 75 : null,
						borderColor: 'transparent',
						label: {
							enabled: false,
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
						ticks: {
							beginAtZero: false,
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							//max: 10000000,
							callback: (value) => formatNumber(value, false),
						},
					},
				],
				xAxes: [
					{
						ticks: {
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
						},
					},
				],
			},
		};
	};
	useEffect(() => {}, [chartRef.current]);

	useEffect(() => {
		if (values.length > 0) {
			setLoading(false);
		}
	}, [values, labels, height]);

	return (
		<Card allowOverflow={true}>
			<div className={[styles.card_checkboxes, styles.card_scrollable].join(' ')} style={{ textAlign: 'left' }}>
				<CustomCheckbox
					checked={toggleStats.primeira_fase}
					label={'1ª Fase'}
					onChange={(checked) => {
						setToggleStats({
							...toggleStats,
							primeira_fase: checked,
						});
					}}
				/>
				<CustomCheckbox
					checked={toggleStats.primeira_fase}
					label={'2ª Fase'}
					onChange={(checked) => {
						setToggleStats({
							...toggleStats,
							segunda_fase: checked,
						});
					}}
				/>
				<CustomCheckbox
					checked={toggleStats.imunidade}
					label={'Imunidade de Grupo'}
					onChange={(checked) => {
						setToggleStats({
							...toggleStats,
							imunidade: checked,
						});
					}}
				/>

				<CustomCheckbox
					checked={toggleStats.infetados}
					label={'Casos Confirmados'}
					onChange={(checked) => {
						setToggleStats({
							...toggleStats,
							infetados: checked,
						});
					}}
				/>

				{/* <CustomCheckbox
					checked={toggleStats.perHundred}
					label={'Por Cada 100 habitantes'}
					onChange={(checked) => {
						setToggleStats({
							...toggleStats,
							perHundred: checked,
						});
					}}
				/> */}
			</div>
			<div> {!loading ? <Line height={100} ref={chartRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
