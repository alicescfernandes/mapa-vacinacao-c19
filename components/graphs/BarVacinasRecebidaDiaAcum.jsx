import { useEffect, useState } from 'react';
//import 'chartjs-plugin-annotation';
import { Bar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import generic from '../../data/generic.json';
import { CustomCheckbox } from '../CustomCheckbox';
import { RESIZE_TRESHOLD } from '../../constants';
import styles from './../Card.module.scss';
import { useCanvasResizer } from '../../hooks/useCanvasResizer';

export function BarVacinasRecebidaDiaAcum({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let [graphData, setGraphData] = useState({});
	let [foreground, color_1, color_2, , color_3, ,] = colors;
	let [annotationsToggle, setAnnotationsToggle] = useState({
		dose: true,
		dose2: true,
		dose3: true,
	});
	let { setCanvasNode } = useCanvasResizer();
	const data = (canvas) => {
		let { labels, mod, com, az, janss } = graphData;

		setCanvasNode(canvas.parentNode);

		return {
			labels: labels.map(({ from, to }) => {
				let fromDate = new Date(from);
				let toDate = new Date(to);

				return `De ${formatNumber(fromDate.getDate())}/${formatNumber(fromDate.getMonth() + 1)} a ${formatNumber(
					toDate.getDate()
				)}/${formatNumber(toDate.getMonth() + 1)}`;
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
				{
					label: 'Janssen',
					backgroundColor: color_2,
					borderColor: color_2,
					type: 'bar',
					data: janss,
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
				legend: {
					position: 'bottom',
					align: 'start',
					onHover: function (event, legend) {
						document.body.classList.add('mouse-pointer');
					},
					onLeave: function (event, legend) {
						document.body.classList.remove('mouse-pointer');
					},
				},

				annotation: {
					annotations: [
						{
							type: 'line',
							mode: 'horizontal',
							scaleID: 'y',
							value: annotationsToggle.dose ? generic.doses.valor : null,
							borderColor: '#0A9DD1',
							borderWidth: 2,
							borderDash: [5, 5],

							label: {
								backgroundColor: 'rgba(0,0,0,0.0)',

								font: {
									style: 'normal',
								},
								textAlign: 'left',
								color: '#0A9DD1',
								position: 'start',
								xAdjust: 10,
								yAdjust: -10,

								enabled: true,
								content: `Doses adquiridas - ${generic.doses.legenda} (01/03/2021) `,
							},
						},
						{
							type: 'line',
							mode: 'horizontal',
							scaleID: 'y',
							value: annotationsToggle.dose ? 41000000 : null,
							borderColor: 'transparent',
							borderWidth: 0,

							label: {
								backgroundColor: 'rgba(0,0,0,0.0)',

								xAdjust: 0,
								yAdjust: -10,

								enabled: false,
							},
						},
						{
							type: 'line',
							mode: 'horizontal',
							scaleID: 'y',
							value: annotationsToggle.dose3 ? generic.doses3.valor : null,
							borderColor: '#D17615',
							borderWidth: 2,
							borderDash: [5, 5],

							label: {
								backgroundColor: 'rgba(0,0,0,0.0)',

								textAlign: 'left',
								font: {
									style: 'normal',
								},

								color: '#D11541',

								position: 'start',
								xAdjust: 0,
								yAdjust: -10,
								enabled: true,
								content: `Doses adquiridas - ${generic.doses3.legenda} (21/01/2020) `,
							},
						},
						{
							type: 'line',
							mode: 'horizontal',
							scaleID: 'y',
							value: annotationsToggle.dose2 ? generic.doses2.valor : null,
							borderColor: '#D17615',
							borderWidth: 2,
							borderDash: [5, 5],

							label: {
								backgroundColor: 'rgba(0,0,0,0.0)',

								textAlign: 'left',
								font: {
									style: 'normal',
								},

								color: '#D17615',

								position: 'start',
								xAdjust: 0,
								yAdjust: -10,
								enabled: true,
								content: `Doses adquiridas - ${generic.doses2.legenda} (04/12/2020) `,
							},
						},
					],
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
						return tooltipItem[0].label;
					},
				},
			},

			scales: {
				y: {
					stacked: true,

					ticks: {
						beginAtZero: true,
						maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,

						callback: (value) => formatNumber(value, false),
					},
				},

				x: {
					stacked: true,
					ticks: {
						beginAtZero: true,
					},
				},
			},
		};
	};

	useEffect(async () => {
		setGraphData(await statistics.getDosesRecebidasAcum());
		setLoading(false);
	}, []);

	return (
		<Card allowOverflow={true}>
			<div className={[styles.card_checkboxes, styles.card_dynamic_scroll].join(' ')} style={{ textAlign: 'left' }}>
				<CustomCheckbox
					checked={annotationsToggle.dose}
					label={'Doses adquiridas (01/03/2021)'}
					onChange={(checked) => {
						setAnnotationsToggle({
							...annotationsToggle,
							dose: checked,
						});
					}}
				/>
				<CustomCheckbox
					checked={annotationsToggle.dose3}
					label={'Doses adquiridas (21/01/2021)'}
					onChange={(checked) => {
						setAnnotationsToggle({
							...annotationsToggle,
							dose3: checked,
						});
					}}
				/>
				<CustomCheckbox
					checked={annotationsToggle.dose2}
					label={'Doses adquiridas (04/12/2020)'}
					onChange={(checked) => {
						setAnnotationsToggle({
							...annotationsToggle,
							dose2: checked,
						});
					}}
				/>
			</div>
			<div>{!loading ? <Bar height={100} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
