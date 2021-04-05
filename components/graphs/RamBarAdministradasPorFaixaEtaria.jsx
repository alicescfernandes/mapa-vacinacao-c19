import { useEffect, useRef, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';

import { RESIZE_TRESHOLD, lineChartCommon } from './../../constants';
export function RamBarAdministradasPorFaixaEtaria({ statistics, colors }) {
	let [loaded, setLoaded] = useState(false);
	let { main, shades, tints, complements } = colors;
	let [graphData, setGraphData] = useState({});
	let [activeDose, setActiveDose] = useState(1);
	const canvasRef = useRef(null);

	function generateColor(color) {
		return {
			borderColor: color,
			pointBorderColor: color,
			pointBackgroundColor: color,
			pointHoverBackgroundColor: color,
			pointHoverBorderColor: color,
		};
	}
	useEffect(() => {
		if (canvasRef?.current?.chartInstance) {
			canvasRef.current.chartInstance.data.datasets.forEach((dataset) => {
				if (dataset.customDose == activeDose) {
					dataset.hidden = false;
				} else {
					dataset.hidden = true;
				}
				canvasRef.current.chartInstance.update();
			});
		}
	}, [activeDose]);

	const data = (canvas) => {
		let { labels, groups, maxValue } = graphData;

		if (window.innerWidth <= RESIZE_TRESHOLD) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= RESIZE_TRESHOLD) {
				canvas.parentNode.style.width = '1000px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});
		return {
			labels: Object.keys(graphData.labels).map((key) => {
				let fromDate = new Date(labels[key]);
				return `${formatNumber(fromDate.getDate())}/${formatNumber(fromDate.getMonth() + 1)}`;
			}),
			datasets: [
				{
					...lineChartCommon,
					...generateColor(shades[0]),
					label: 'Grupo 18/24 - 2ª Dose',
					labelGroup: 'Grupo 18/24',
					fill: false,

					backgroundColor: shades[0],
					data: groups.map((group) => group.e1824.dose_2 || 0),

					order: 1,
					hidden: true,
					display: false,
					customDose: 2,
					yAxisID: 'axis',
				},
				{
					...lineChartCommon,
					...generateColor(shades[0]),
					label: 'Grupo 18/24 - 1ª Dose',
					labelGroup: 'Grupo 18/24',
					fill: false,
					backgroundColor: shades[0],
					data: groups.map((group) => group.e1824.dose_1 || 0),

					order: 2,
					hidden: false,
					display: true,
					customDose: 1,
					yAxisID: 'axis',
				},
				{
					...lineChartCommon,
					...generateColor(tints[1]),
					label: 'Grupo 25/49 - 2ª Dose',
					labelGroup: 'Grupo 25/49',
					fill: false,

					backgroundColor: tints[1],
					data: groups.map((group) => group.e2549.dose_2 || 0),

					order: 3,
					hidden: true,
					display: false,
					customDose: 2,
					yAxisID: 'axis',
				},
				{
					...lineChartCommon,
					...generateColor(tints[1]),
					label: 'Grupo 25/49 - 1ª Dose',
					labelGroup: 'Grupo 25/49',
					backgroundColor: tints[1],
					fill: false,
					data: groups.map((group) => group.e2549.dose_1 || 0),

					order: 4,
					hidden: false,
					display: true,
					customDose: 1,
					yAxisID: 'axis',
				},

				{
					...lineChartCommon,
					...generateColor(main),
					label: 'Grupo 50/59 - 2ª Dose',
					labelGroup: 'Grupo 50/59',
					fill: false,

					backgroundColor: main,
					data: groups.map((group) => group.e5059.dose_2 || 0),
					stack: 'stack1',
					order: 5,
					hidden: true,
					display: false,
					customDose: 2,
					yAxisID: 'axis',
				},
				{
					...lineChartCommon,
					...generateColor(main),
					label: 'Grupo 50/59 - 1ª Dose',
					labelGroup: 'Grupo 50/59',
					backgroundColor: main,
					fill: false,
					data: groups.map((group) => group.e5059.dose_1 || 0),
					stack: 'stack1',
					order: 6,
					hidden: false,
					display: true,
					customDose: 1,
					yAxisID: 'axis',
				},

				{
					...lineChartCommon,
					...generateColor(shades[2]),
					label: 'Grupo 60/69 - 2ª Dose',
					labelGroup: 'Grupo 60/69',
					fill: false,

					backgroundColor: shades[2],
					data: groups.map((group) => group.e6064.dose_2 + group.e6569.dose_2 || 0),
					yAxisID: 'axis',
					xAxisID: 'xaxis',

					order: 7,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					...lineChartCommon,
					...generateColor(shades[2]),
					label: 'Grupo 60/69 - 1ª Dose',
					labelGroup: 'Grupo 60/69',
					backgroundColor: shades[2],
					data: groups.map((group) => group.e6064.dose_1 + group.e6569.dose_1 || 0),
					xAxisID: 'xaxis',

					order: 8,
					hidden: false,
					fill: false,
					display: true,
					customDose: 1,
					yAxisID: 'axis',
				},

				{
					...lineChartCommon,
					...generateColor(complements[2]),
					label: 'Grupo 70/79 - 2ª Dose',
					labelGroup: 'Grupo 70/79',
					fill: false,

					backgroundColor: complements[2],
					data: groups.map((group) => group.e7079.dose_2 || 0),

					order: 9,
					hidden: true,
					display: false,
					customDose: 2,
					yAxisID: 'axis',
				},
				{
					...lineChartCommon,
					...generateColor(complements[2]),
					label: 'Grupo 70/79 - 1ª Dose',
					labelGroup: 'Grupo 70/79',
					backgroundColor: complements[2],
					data: groups.map((group) => group.e7079.dose_1 || 0),

					order: 10,
					hidden: false,
					fill: false,
					display: true,
					customDose: 1,
					yAxisID: 'axis',
				},

				{
					...lineChartCommon,
					...generateColor(complements[1]),
					label: 'Grupo 80+ - 2ª Dose',
					labelGroup: 'Grupo 80+',
					xAxisID: 'xaxis',
					backgroundColor: complements[1],
					data: groups.map((group) => group.e80.dose_2 || 0),

					order: 11,
					hidden: true,
					stack: 'stack2',
					fill: false,
					display: false,
					customDose: 2,
					yAxisID: 'axis',
				},
				{
					...lineChartCommon,
					...generateColor(complements[1]),
					label: 'Grupo 80+ - 1ª Dose',
					labelGroup: 'Grupo 80+',
					backgroundColor: complements[1],
					data: groups.map((group) => group.e80.dose_1 || 0),
					stack: 'stack2',
					xAxisID: 'xaxis',
					yAxisID: 'axis',

					order: 12,
					hidden: false,
					fill: false,
					display: true,
					customDose: 1,
				},
			],
		};
	};
	const options = () => {
		let maxValue = 100;
		return {
			//maintainAspectRatio: false,

			plugins: {
				datalabels: {
					display: false,
					color: 'blue',
				},
			},
			onResize: (a, b, c) => {
				if (window.innerWidth <= RESIZE_TRESHOLD) {
					a.canvas.parentNode.style.width = '1000px';
				} else {
					a.canvas.parentNode.style.width = 'auto';
				}
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
				labels: {
					filter: function (item, chart) {
						return chart.datasets[item.datasetIndex].hidden == false;
					},
				},
			},

			animation: {
				duration: 1000,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
				callbacks: {
					...lineChartCommon,
					...generateColor(shades[0]),
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + parseFloat(tooltipItem.value).toFixed(2) + '%';
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
						id: 'axis',
						stacked: false,
						ticks: {
							beginAtZero: false,
							min: 0,
							max: maxValue,
							stepSize: (maxValue / 5).toFixed(0),
							callback: (value) => formatNumber(value, false) + '%',
						},
					},
				],
				xAxes: [
					{
						id: 'xaxis',
						stacked: false,
						ticks: {
							beginAtZero: false,
						},
					},
				],
			},
		};
	};

	useEffect(() => {
		statistics.getAdministredDosesByAgeByWeekRam().then((data) => {
			setGraphData(data);
			setLoaded(true);
			setActiveDose(1);
		});
	}, []);

	return (
		<Card textLeft={true} allowOverflow={true}>
			<div>
				{loaded === true ? (
					<>
						<div className={'toggle_buttons'}>
							<p>
								<button
									className={classNames('toggle_button', {
										active: activeDose === 1,
									})}
									onClick={() => {
										setActiveDose(1);
									}}
								>
									1ª Dose
								</button>
								<button
									className={classNames('toggle_button', {
										active: activeDose === 2,
									})}
									onClick={() => {
										setActiveDose(2);
									}}
								>
									2ª Dose
								</button>
							</p>
						</div>
						<div>
							<Line height={80} ref={canvasRef} options={options()} data={data} />
						</div>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	);
}
