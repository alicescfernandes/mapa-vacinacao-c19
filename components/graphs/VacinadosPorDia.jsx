import { useContext, useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { REGIOES, RESIZE_TRESHOLD } from '../../constants';
import { calculateDims, formatNumber, makeAnnotations } from '../../utils';
import { Card } from './../Card';
import acontecimentos from './../../data/acontecimentos.json';
import { RegiaoContext } from '../context/regiao';
import { CustomCheckbox } from './../CustomCheckbox';
import styles from './../Card.module.scss';

export function VacinadosPorDia({ statistics, colors }) {
	let regiao = useContext(RegiaoContext);

	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: values2 } = statistics.getMediaMovelDiaria(7);
	let [vacinas_stock, setVacinas_stock] = useState([]);
	let { main, tints, shades, complements } = colors;
	let [dim, setDim] = useState(calculateDims());

	let [toggleStats, setToggleStats] = useState({
		stock: false,
	});

	const canvasRef = useRef(null);

	const data = (canvas) => {
		canvas.parentNode.parentNode.scrollLeft = dim.width;
		let datasets = [
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
				stack: 'stack1',
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
				stack: 'stack0',
				yAxisID: 'axisy2',
			},
		];

		if (regiao === REGIOES.PORTUGAL) {
			datasets.push({
				label: 'Stock de Vacinas - Estimativa',
				fill: false,
				lineTension: 0.5,
				overlayBars: true,
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
				order: 6,
				hidden: !toggleStats.stock,
				stack: 'stack2',
			});
		}
		return {
			labels: labels,
			datasets,
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	let horizontalAnnotations = makeAnnotations(acontecimentos);
	let annotations = {
		annotations: [...horizontalAnnotations],
	};
	let aspectRatio = dim.width / dim.height;

	const options = () => {
		let max = Math.max(...values);
		//alert(max);
		if (regiao == REGIOES.PORTUGAL) {
			max = Math.max(...(toggleStats.stock === true ? vacinas_stock : values));
		}

		return {
			aspectRatio,
			layout: {
				padding: -5,
			},
			plugins: {
				datalabels: {
					display: false,
					color: 'blue',
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
						return label + ': ' + numberFormatter.format(parseInt(tooltipItem.value)).replace(',', ' ');
					},
					title: (tooltipItem, data) => {
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				y: {
					position: 'right',

					stacked: true,
					display: true,
					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 10 : 12,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 10 : 12,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
					},
					suggestedMax: max,
				},
				axisy2: {
					position: 'right',

					display: false,
					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 10 : 12,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 10 : 12,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
					},
					suggestedMax: max,
				},

				x: {
					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 90 : 120,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 90 : 120,
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
			{regiao == REGIOES.PORTUGAL && (
				<div className={[styles.card_sticky, styles.card_checkboxes, styles.card_dynamic_scroll].join(' ')} style={{ textAlign: 'left' }}>
					<CustomCheckbox
						checked={toggleStats.stock}
						label={'Stock de Vacinas - Estimativa'}
						onChange={(checked) => {
							setToggleStats({
								...toggleStats,
								stock: checked,
							});
						}}
					/>
				</div>
			)}

			<div style={{ width: dim.width }}>{!loading ? <Bar ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
