import { useEffect, useRef, useState } from 'react';
//import 'chartjs-plugin-annotation';
import { Bar, Line } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import generic from '../../data/generic.json';
import { CustomCheckbox } from '../CustomCheckbox';
export function BarVacinasRecebidaDia({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let [graphData, setGraphData] = useState({});
	let [foreground, color_1, color_2, color_3, color_4] = colors;
	let [annotationsToggle, setAnnotationsToggle] = useState({
		dose: true,
		dose2: true,
	});
	const data = (canvas) => {
		let { labels, mod, com, az } = graphData;

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
				onHover: function (event, legend) {
					document.body.classList.add('mouse-pointer');
				},
				onLeave: function (event, legend) {
					document.body.classList.remove('mouse-pointer');
				},
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
						value: annotationsToggle.dose ? generic.doses.valor : null,
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
							content: 'Doses compradas - ' + generic.doses.legenda,
							content: `Doses compradas - ${generic.doses.legenda} (21/01/2021) `,
						},
					},

					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: annotationsToggle.dose2 ? generic.doses2.valor : null,
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
							content: `Doses compradas - ${generic.doses2.legenda} (04/12/2020) `,
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
						return label + ': ' + (parseInt(tooltipItem.value) ? formatNumber(parseInt(tooltipItem.value), false) : 0);
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
							beginAtZero: true,
							callback: (value) => formatNumber(value, false),
						},
					},
				],
				xAxes: [
					{
						stacked: true,
						ticks: {
							beginAtZero: true,
						},
					},
					{
						stacked: false,
						id: 'unstacked',
						ticks: {
							beginAtZero: true,
							display: false,
						},
						scaleLabel: {
							display: false,
						},
						gridLines: {
							display: false,
							drawBorder: false,
						},
					},
				],
			},
		};
	};

	useEffect(() => {
		statistics.getReceivedDosesByBrandByWeek().then((recievedData) => {
			setGraphData(recievedData);
			setLoading(false);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div style={{ textAlign: 'left' }}>
				<CustomCheckbox
					checked={annotationsToggle.dose}
					label={'Doses compradas (21/01)'}
					onChange={(checked) => {
						setAnnotationsToggle({
							...annotationsToggle,
							dose: checked,
						});
					}}
				/>
				<CustomCheckbox
					checked={annotationsToggle.dose2}
					label={'Doses compradas (04/12/2020)'}
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
