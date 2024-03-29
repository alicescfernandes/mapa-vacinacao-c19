import { useContext, useEffect, useState } from 'react';
import { Line, Chart, defaults } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber, hexToRgb, makeAnnotations, perHundred, calculateDims } from '../../utils';
import annotationPlugin from 'chartjs-plugin-annotation';
import datalabelsPlugin from 'chartjs-plugin-datalabels';
import acontecimentos from './../../data/acontecimentos.json';

import { CustomCheckbox } from './../CustomCheckbox';
import { REGIOES, RESIZE_TRESHOLD } from '../../constants';
import styles from './../Card.module.scss';
import { RegiaoContext } from '../context/regiao';

Chart.register([annotationPlugin, datalabelsPlugin]);

export function NumeroTotalVacinados({ colors, statistics }) {
	let regiao = useContext(RegiaoContext);
	let { labels } = statistics.getDailyData();
	let { values, valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();
	let casesData = statistics.getCases();
	let [dim, setDim] = useState(calculateDims());

	let [toggleStats, setToggleStats] = useState({
		imunidade: false,
		primeira_fase: false,
		segunda_fase: false,
		infetados: true,
		perHundred: false,
	});

	// Disable animations for mobile devices
	if (window.innerWidth <= RESIZE_TRESHOLD) {
		defaults.animation = false;
	}

	let [loading, setLoading] = useState(true);
	let [foreground, color_1, color_2] = colors;
	let commonProps = {
		fill: true,
		lineTension: 0.3,
		lineBorder: 1,
		borderWidth: 3,
		borderJoinStyle: 'miter',
		pointBorderWidth: 1,
		pointHoverRadius: 3,
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		usePointStyle: true,
	};
	let horizontalAnnotations = makeAnnotations(acontecimentos);
	let annotations = {
		annotations: [
			...horizontalAnnotations,
			{
				type: 'line',
				mode: 'horizontal',
				scaleID: 'y',
				value: toggleStats?.segunda_fase ? (toggleStats.perHundred ? perHundred(2700000) : 2700000) : null,
				borderColor: '#0A9DD1',
				borderWidth: 2,
				borderDash: [5, 5],

				label: {
					font: {
						style: 'normal',
					},
					backgroundColor: 'rgba(0,0,0,0.0)',

					textAlign: 'left',
					color: '#0A9DD1',
					position: 'end',
					xAdjust: 10,
					yAdjust: 10,
					fontSize: '13px',
					enabled: true,
					content: '2ª Fase - Abril (2.7 milhões de pessoas, ver notas)',
				},
			},
			{
				type: 'line',
				mode: 'horizontal',
				scaleID: 'y',
				value: toggleStats?.segunda_fase ? (toggleStats.perHundred ? 20 : 1900000) : null,
				borderColor: 'transparent',
				label: {
					font: {
						style: 'normal',
					},
					enabled: false,
				},
			},
			{
				type: 'line',
				mode: 'horizontal',
				scaleID: 'y',
				value: toggleStats?.primeira_fase ? (toggleStats.perHundred ? 11 : 1200000) : null,
				borderColor: 'transparent',
				label: {
					font: {
						style: 'normal',
					},
					enabled: false,
				},
			},
			{
				type: 'line',
				mode: 'horizontal',
				scaleID: 'y',
				value: toggleStats?.primeira_fase ? (toggleStats.perHundred ? perHundred(950000) : 950000) : null,
				borderColor: '#0A9DD1',
				borderWidth: 2,
				borderDash: [5, 5],

				label: {
					font: {
						style: 'normal',
					},
					backgroundColor: 'rgba(0,0,0,0.0)',

					textAlign: 'left',
					color: '#0A9DD1',
					position: 'end',
					xAdjust: 5,
					yAdjust: 10,
					fontSize: '13px',

					enabled: true,
					content: '1ª Fase - Dezembro (950 mil pessoas)',
				},
			},
			{
				type: 'line',
				mode: 'horizontal',
				scaleID: 'y',
				value: toggleStats?.imunidade ? (toggleStats.perHundred ? perHundred(10286300 * 0.7) : 10286300 * 0.7) : null,
				borderColor: '#D17615',
				borderWidth: 2,
				borderDash: [5, 5],

				label: {
					font: {
						style: 'normal',
					},
					backgroundColor: 'rgba(0,0,0,0.0)',

					textAlign: 'left',

					color: '#D17615',
					fontSize: '13px',
					position: 'end',
					xAdjust: 5,
					yAdjust: 10,
					enabled: true,
					content: 'Imunidade de Grupo (cerca de 7.2 milhões de pessoas)',
				},
			},
			{
				type: 'line',
				mode: 'horizontal',
				scaleID: 'y',
				borderColor: 'transparent',
				label: {
					font: {
						style: 'normal',
					},
					enabled: false,
				},
			},
		],
	};

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, dim.height);
		let { r, g, b } = hexToRgb(foreground);
		try {
			gradient.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',15%)');
			gradient.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
		} catch (e) {
			gradient.addColorStop(0, '#d9f3ef');
			gradient.addColorStop(1, '#ffffff');
		}

		canvas.parentNode.parentNode.scrollLeft = dim.width;

		const chartData = {
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
			],
		};

		if (regiao == REGIOES.PORTUGAL) {
			chartData.datasets.push({
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
				data: casesData
					.filter((el) => el.data >= 1609070400000)
					.map((el) => (toggleStats.perHundred ? perHundred(el.confirmados) : el.confirmados)),
			});
		}

		return chartData;
	};

	let aspectRatio = dim.width / dim.height;
	const options = () => {
		return {
			aspectRatio,
			plugins: {
				datalabels: {
					display: false,
				},
				annotation: regiao == 'portugal' ? annotations : {},
				legend: {
					position: 'bottom',
					align: 'end',
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
						return label + ': ' + formatNumber(tooltipItem.value);
					},
					title: (tooltipItem, data) => {
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				y: {
					position: 'right',
					ticks: {
						beginAtZero: false,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 10 : 12,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 10 : 12,
						//max: 10000000,
						callback: (value) => formatNumber(value, false),
					},
				},

				x: {
					ticks: {
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 90 : 120,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 90 : 120,
					},
				},
			},
		};
	};

	useEffect(() => {
		if (values.length > 0) {
			setLoading(false);
		}
	}, [values]);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDim(calculateDims());
		});

		return () => {
			window.removeEventListener('resize', () => {
				setDim(calculateDims());
			});
		};
	}, []);

	return (
		<Card allowOverflow={true} is_fixed_scroll={true}>
			{regiao === 'portugal' && (
				<div className={[styles.card_sticky, styles.card_checkboxes, styles.card_dynamic_scroll].join(' ')} style={{ textAlign: 'left' }}>
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
			)}

			<div style={{ width: dim.width }}>{!loading ? <Line plugins={[annotationPlugin]} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
