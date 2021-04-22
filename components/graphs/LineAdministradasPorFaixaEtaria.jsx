import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';

import { RESIZE_TRESHOLD, lineChartCommon, SNS_WEEKS } from './../../constants';
export function LineAdministradasPorFaixaEtaria({ statistics, colors }) {
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
			backgroundColor: color,
		};
	}

	const data = (canvas) => {
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
		let labels = {};
		graphData.map((values) => {
			labels[values.DATE] = '';
		});
		return {
			labels: Object.keys(labels).map((el) => SNS_WEEKS[el]),
			datasets: [
				{
					...lineChartCommon,
					...generateColor(main),
					label: 'Até aos 17 anos',
					labelGroup: 'Grupo 18/24',
					fill: false,

					data: graphData
						.filter((el) => el.AGEGROUP == '0-17 anos')
						.map((el) => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),

					order: 1,
					customDose: 2,
				},
				{
					...lineChartCommon,
					...generateColor(shades[0]),
					label: 'Entre 18 anos e 24 anos',
					labelGroup: 'Grupo 18/24',
					fill: false,

					data: graphData
						.filter((el) => el.AGEGROUP == '18-24 anos')
						.map((el) => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),

					order: 1,
					customDose: 2,
				},
				{
					...lineChartCommon,
					...generateColor(complements[2]),
					label: 'Entre 25 anos e 49 anos',
					labelGroup: 'Grupo 25/49',
					fill: false,

					data: graphData
						.filter((el) => el.AGEGROUP == '25-49 anos')
						.map((el) => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),

					order: 1,
					customDose: 2,
				},
				{
					...lineChartCommon,
					...generateColor(shades[2]),
					label: 'Entre 50 anos e 64 anos',
					labelGroup: 'Grupo 25/49',
					fill: false,

					data: graphData
						.filter((el) => el.AGEGROUP == '50-64 anos')
						.map((el) => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),

					order: 1,
					customDose: 2,
				},
				{
					...lineChartCommon,
					...generateColor(complements[0]),
					label: 'Entre 60 e 79 anos',
					labelGroup: 'Grupo 25/49',
					fill: false,

					data: graphData
						.filter((el) => el.AGEGROUP == '65-79 anos')
						.map((el) => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),

					order: 1,
					customDose: 2,
				},
				{
					...lineChartCommon,
					...generateColor(complements[1]),
					label: '80 ou mais anos',
					labelGroup: 'Grupo 25/49',
					fill: false,

					data: graphData
						.filter((el) => el.AGEGROUP == '80 ou mais anos')
						.map((el) => parseFloat(el[activeDose === 1 ? 'COVER_1_VAC' : 'COVER'].replace(',', '.')) * 100),
					order: 1,
					customDose: 2,
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
					ticks: {
						beginAtZero: false,
						min: 0,
						max: maxValue,
						stepSize: (maxValue / 5).toFixed(0),
						callback: (value) => formatNumber(value, false) + '%',
					},
				},

				x: {
					ticks: {
						beginAtZero: false,
					},
				},
			},
		};
	};

	useEffect(() => {
		statistics.getTotalSNSIdade().then((data) => {
			console.log(1, data);
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
