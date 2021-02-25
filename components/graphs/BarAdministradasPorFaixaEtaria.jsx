import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
export function BarAdministradasPorFaixaEtaria({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let marriedData = {};
	let { main, shades, tints, complements } = colors;
	let [graphData, setGraphData] = useState({});
	let [activeDose, setActiveDose] = useState(1);
	const canvasRef = useRef(null);

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

	marriedData = Object.values(marriedData).reverse();

	const data = (canvas) => {
		let { labels, groups, maxValue } = graphData;

		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '1000px';
		} else {
			canvas.parentNode.style.width = 'auto';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 800) {
				canvas.parentNode.style.width = '1000px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: Object.keys(graphData.labels).map((key) => {
				let fromDate = new Date(labels[key].from);
				let toDate = new Date(labels[key].to);
				return `De ${formatNumber(fromDate.getDate())}/${formatNumber(fromDate.getMonth() + 1)} a ${formatNumber(toDate.getDate())}/${formatNumber(toDate.getMonth() + 1)}`;
			}),
			datasets: [
				{
					label: 'Grupo 18/24 - 2ª Dose',
					labelGroup: 'Grupo 18/24',
					fill: false,
					type: 'bar',
					backgroundColor: shades[0],
					data: Object.values(groups['Age18_24'].dose_2),
					stack: 'stack',
					order: 1,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					label: 'Grupo 18/24 - 1ª Dose',
					labelGroup: 'Grupo 18/24',
					backgroundColor: shades[0],
					data: Object.values(groups['Age18_24'].dose_1),
					stack: 'stack',
					order: 2,
					hidden: false,
					display: true,
					customDose: 1,
				},
				{
					label: 'Grupo 25/49 - 2ª Dose',
					labelGroup: 'Grupo 25/49',
					fill: false,
					type: 'bar',
					backgroundColor: tints[1],
					data: Object.values(groups['Age25_49'].dose_2),
					stack: 'stack',
					order: 3,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					label: 'Grupo 25/49 - 1ª Dose',
					labelGroup: 'Grupo 25/49',
					backgroundColor: tints[1],
					data: Object.values(groups['Age25_49'].dose_1),
					stack: 'stack',
					order: 4,
					hidden: false,
					display: true,
					customDose: 1,
				},

				{
					label: 'Grupo 50/59 - 2ª Dose',
					labelGroup: 'Grupo 50/59',
					fill: false,
					type: 'bar',
					backgroundColor: main,
					data: Object.values(groups['Age50_59'].dose_2),
					stack: 'stack',
					order: 5,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					label: 'Grupo 50/59 - 1ª Dose',
					labelGroup: 'Grupo 50/59',
					backgroundColor: main,
					data: Object.values(groups['Age50_59'].dose_1),
					stack: 'stack',
					order: 6,
					hidden: false,
					display: true,
					customDose: 1,
				},

				{
					label: 'Grupo 60/69 - 2ª Dose',
					labelGroup: 'Grupo 60/69',
					fill: false,
					type: 'bar',
					backgroundColor: shades[2],
					data: Object.values(groups['Age60_69'].dose_2),
					stack: 'stack',
					order: 7,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					label: 'Grupo 60/69 - 1ª Dose',
					labelGroup: 'Grupo 60/69',
					backgroundColor: shades[2],
					data: Object.values(groups['Age60_69'].dose_1),
					stack: 'stack',
					order: 8,
					hidden: false,
					display: true,
					customDose: 1,
				},

				{
					label: 'Grupo 70/79 - 2ª Dose',
					labelGroup: 'Grupo 70/79',
					fill: false,
					type: 'bar',
					backgroundColor: complements[2],
					data: Object.values(groups['Age70_79'].dose_2),
					stack: 'stack',
					order: 9,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					label: 'Grupo 70/79 - 1ª Dose',
					labelGroup: 'Grupo 70/79',
					backgroundColor: complements[2],
					data: Object.values(groups['Age70_79'].dose_1),
					stack: 'stack',
					order: 10,
					hidden: false,
					display: true,
					customDose: 1,
				},

				{
					label: 'Grupo 80+ - 2ª Dose',
					labelGroup: 'Grupo 80+',
					type: 'bar',
					backgroundColor: complements[1],
					data: Object.values(groups['Age80+'].dose_2),
					stack: 'stack',
					order: 11,
					hidden: true,
					display: false,
					customDose: 2,
				},
				{
					label: 'Grupo 80+ - 1ª Dose',
					labelGroup: 'Grupo 80+',
					backgroundColor: complements[1],
					data: Object.values(groups['Age80+'].dose_1),
					stack: 'stack',
					order: 12,
					hidden: false,
					display: true,
					customDose: 1,
				},
			],
		};
	};
	const options = () => {
		let maxValue = 90000;
		return {
			//maintainAspectRatio: false,

			plugins: {
				datalabels: {
					display: false,
					color: 'blue',
				},
			},
			onResize: (a, b, c) => {
				if (window.innerWidth <= 800) {
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
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + formatNumber(parseInt(tooltipItem.value, false));
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
						ticks: {
							beginAtZero: false,
							min: 0,
							max: maxValue,
							stepSize: (maxValue / 5).toFixed(0),
							callback: (value) => formatNumber(value, false),
						},
					},
					{
						stacked: false,
						id: 'total',
						display: false,
						ticks: {
							beginAtZero: false,
							min: 0,
							max: maxValue,
							stepSize: (maxValue / 5).toFixed(0),
							callback: (value) => formatNumber(value, false),
						},
					},
				],
				xAxes: [
					{
						stacked: true,
					},
				],
			},
		};
	};

	useEffect(() => {
		statistics.getAdministredDosesByAgeByWeek().then((data) => {
			setGraphData(data);
			setLoading(false);
			setActiveDose(1);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
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
							<Bar height={100} ref={canvasRef} options={options()} data={data} />
						</div>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	);
}
