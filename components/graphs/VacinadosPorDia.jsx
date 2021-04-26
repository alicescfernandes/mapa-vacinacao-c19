import { useContext, useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { RESIZE_TRESHOLD } from '../../constants';
import { formatNumber, makeAnnotations } from '../../utils';
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

	let [toggleStats, setToggleStats] = useState({
		stock: true,
	});

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
		console.log('totais', values);

		return {
			labels: labels,
			datasets: [
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
				/* 	{
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
				}, */
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	let horizontalAnnotations = makeAnnotations(acontecimentos);
	let annotations = {
		annotations: [...horizontalAnnotations],
	};

	const options = () => {
		//const max = Math.max(...(toggleStats.stock === true ? vacinas_stock : values));
		const max = Math.max(...values);
		return {
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
					display: true,
					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
					},
					suggestedMax: max,
				},
				axisy2: {
					display: false,
					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
					},
					suggestedMax: max,
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
			{/* <div className={[styles.card_checkboxes, styles.card_scrollable].join(' ')} style={{ textAlign: 'left' }}>
				<CustomCheckbox
					checked={toggleStats.stock}
					label={'1ª Fase'}
					onChange={(checked) => {
						setToggleStats({
							...toggleStats,
							stock: checked,
						});
					}}
				/>
			</div> */}
			<div>{!loading ? <Bar height={80} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
