import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';

import { RESIZE_TRESHOLD, lineChartCommon } from './../../constants';
import { useCanvasResizer } from '../../hooks/useCanvasResizer';
export function RamBarAdministradasPorFaixaEtaria({ statistics, colors }) {
	let [loaded, setLoaded] = useState(false);
	let { main, shades, tints, complements } = colors;
	let [graphData, setGraphData] = useState({});
	let [activeDose, setActiveDose] = useState('dose_1');
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

	let { setCanvasNode } = useCanvasResizer();
	const data = (canvas) => {
		let { labels, groups } = graphData;

		setCanvasNode(canvas.parentNode);

		console.log(
			activeDose,
			groups.map((group) => group.e1824[activeDose] || 0)
		);

		return {
			labels: Object.keys(graphData.labels).map((key) => {
				let fromDate = new Date(labels[key]);
				return `${formatNumber(fromDate.getDate())}/${formatNumber(fromDate.getMonth() + 1)}`;
			}),
			datasets: [
				{
					...lineChartCommon,
					...generateColor(shades[0]),
					label: 'Grupo 18/24',
					labelGroup: 'Grupo 18/24',
					fill: false,

					backgroundColor: shades[0],
					data: groups.map((group) => group.e1824[activeDose] || 0),

					order: 1,

					customDose: 2,
				},

				{
					...lineChartCommon,
					...generateColor(tints[1]),
					label: 'Grupo 25/49',
					labelGroup: 'Grupo 25/49',
					fill: false,

					backgroundColor: tints[1],
					data: groups.map((group) => group.e2549[activeDose] || 0),

					order: 3,

					customDose: 2,
				},

				{
					...lineChartCommon,
					...generateColor(main),
					label: 'Grupo 50/59',
					labelGroup: 'Grupo 50/59',
					fill: false,

					backgroundColor: main,
					data: groups.map((group) => group.e5059[activeDose] || 0),
					stack: 'stack1',
					order: 5,

					customDose: 2,
				},

				{
					...lineChartCommon,
					...generateColor(shades[2]),
					label: 'Grupo 60/69',
					labelGroup: 'Grupo 60/69',
					fill: false,

					backgroundColor: shades[2],
					data: groups.map((group) => (group.e6064[activeDose] + group.e6569[activeDose]) / 2 || 0),

					order: 7,

					customDose: 2,
				},

				{
					...lineChartCommon,
					...generateColor(complements[2]),
					label: 'Grupo 70/79',
					labelGroup: 'Grupo 70/79',
					fill: false,

					backgroundColor: complements[2],
					data: groups.map((group) => group.e7079.dose_2 || 0),

					order: 9,

					customDose: 2,
				},

				{
					...lineChartCommon,
					...generateColor(complements[1]),
					label: 'Grupo 80+',
					labelGroup: 'Grupo 80+',
					backgroundColor: complements[1],
					data: groups.map((group) => group.e80.dose_2 || 0),

					order: 11,

					stack: 'stack2',
					fill: false,

					customDose: 2,
				},
			],
		};
	};
	const options = () => {
		let maxValue = 100;
		return {
			plugins: {
				datalabels: {
					display: false,
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
			},
			onResize: (a, b, c) => {
				if (window.innerWidth <= RESIZE_TRESHOLD) {
					a.canvas.parentNode.style.width = '1000px';
				} else {
					a.canvas.parentNode.style.width = 'auto';
				}
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
						return tooltipItem[0].label;
					},
				},
			},
			scales: {
				y: {
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

				x: {
					id: 'xaxis',
					stacked: false,
					ticks: {
						beginAtZero: false,
					},
				},
			},
		};
	};

	useEffect(() => {
		statistics.getAdministredDosesByAgeByWeekRam().then((data) => {
			setGraphData(data);
			setLoaded(true);
			setActiveDose('dose_1');
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
										active: activeDose === 'dose_1',
									})}
									onClick={() => {
										setActiveDose('dose_1');
									}}
								>
									1ª Dose
								</button>
								<button
									className={classNames('toggle_button', {
										active: activeDose === 'dose_2',
									})}
									onClick={() => {
										setActiveDose('dose_2');
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
