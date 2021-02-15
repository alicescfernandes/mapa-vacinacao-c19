import { useEffect, useRef, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import { CustomBarChart } from '../CustomBarChart';
export function BarTotaisPorFaixaEtaria({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades, tints, complements } = colors;
	let [height, setHeight] = useState(400);
	let [graphData, setGraphData] = useState({});
	let [activeDose, setActiveDose] = useState(1);
	const canvasRef = useRef(null);

	const data = (canvas) => {
		let { labels, groups, maxValue } = graphData;

		if (window.innerWidth <= 800) {
			//canvas.parentNode.style.width = '1000px';
		} else {
			//canvas.parentNode.style.width = 'auto';
		}

		window.addEventListener('resize', () => {
			if (window.outerWidth <= 800) {
				//canvas.parentNode.style.width = '1000px';
			} else {
				//canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: ['Pfizer/BioNTech'],
			datasets: [
				{
					label: '2ª Dose',
					labelGroup: 'Grupo 18/24',
					type: 'horizontalBar',
					backgroundColor: 'blue',
					data: [200],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					labelGroup: 'Grupo 18/24',
					type: 'horizontalBar',
					backgroundColor: 'red',
					data: [300],
					stack: 'stack1',
				},
				{
					label: 'População-Alvo',
					labelGroup: 'Grupo 18/24',
					type: 'horizontalBar',
					backgroundColor: 'green',
					data: [500],
					stack: 'stack1',
					order: 1,
				},
			],
		};
	};

	const data2 = (canvas) => {
		let { labels, groups, maxValue } = graphData;

		if (window.innerWidth <= 800) {
			//canvas.parentNode.style.width = '1000px';
		} else {
			//canvas.parentNode.style.width = 'auto';
		}

		window.addEventListener('resize', () => {
			if (window.outerWidth <= 800) {
				//canvas.parentNode.style.width = '1000px';
			} else {
				//canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: ['Moderna'],
			datasets: [
				{
					label: '2ª Dose',
					labelGroup: 'Grupo 18/24',
					type: 'horizontalBar',
					backgroundColor: 'blue',
					data: [200],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					labelGroup: 'Grupo 18/24',
					type: 'horizontalBar',
					backgroundColor: 'red',
					data: [300],
					stack: 'stack1',
				},
				{
					label: 'População-Alvo',
					labelGroup: 'Grupo 18/24',
					type: 'horizontalBar',
					backgroundColor: 'green',
					data: [500],
					stack: 'stack1',
					order: 1,
				},
			],
		};
	};
	const options = () => {
		return {
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					display: true,
					color: 'white',
				},
			},
			layout: {
				padding: -10,
			},
			legend: {
				position: 'top',
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
			tooltips: {
				mode: 'index',
				intersect: false,
				callbacks: {
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label.replace('- 1ª Dose', '').replace('- 2ª Dose', '') + ': ' + formatNumber(parseInt(tooltipItem.value) || 0);
					},
					title: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem[0].datasetIndex];
					},
				},
			},
			scales: {
				yAxes: [
					{
						gridLines: {
							display: false,
						},
						ticks: {
							display: false,
						},
					},
				],
				xAxes: [
					{
						stacked: false,
						gridLines: {
							display: false,
						},

						ticks: {
							beginAtZero: true,
							display: false,
						},
					},
				],
			},
		};
	};

	const options2 = () => {
		return {
			...options(),
			legend: {
				display: false,
				position: 'top',
				align: 'start',
				onHover: function (event, legend) {
					document.body.classList.add('mouse-pointer');
				},
				onLeave: function (event, legend) {
					document.body.classList.remove('mouse-pointer');
				},
			},
		};
	};

	useEffect(() => {
		statistics.getTotalAdministredDosesByAgeByWeek().then((data) => {
			setGraphData(data);
			setLoading(false);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<div className={'subchart-data'}>
							<p>
								Legenda:
								<span>
									<span></span>1ª Dose
								</span>{' '}
								<span>
									<span></span>2ª Dose
								</span>{' '}
								<span>
									<span></span>População-Alvo
								</span>
							</p>
						</div>

						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart options={options2()} showHeading={true} data={data}></CustomBarChart>
								<CustomBarChart options={options2()} showHeading={true} data={data}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart options={options2()} data={data}></CustomBarChart>
								<CustomBarChart options={options2()} data={data}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart options={options2()} showHeading={true} data={data}></CustomBarChart>
								<CustomBarChart options={options2()} showHeading={true} data={data}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart options={options2()} data={data}></CustomBarChart>
								<CustomBarChart options={options2()} data={data}></CustomBarChart>
							</Col>
						</Row>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	);
}
