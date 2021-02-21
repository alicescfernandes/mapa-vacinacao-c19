import { useEffect, useRef, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';

function CustomBarChart({ type, total, colors, data, showHeading }) {
	let { main, shades, tints, complements } = colors;

	const graphData = (canvas) => {
		if (window.outerWidth <= 800) {
			canvas.parentNode.style.width = '800px';
		} else {
			canvas.parentNode.style.width = '100%';
		}

		window.addEventListener('resize', () => {
			if (window.outerWidth <= 800) {
				canvas.parentNode.style.width = '800px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: [type],
			datasets: [
				{
					label: 'Inoculados',
					type: 'horizontalBar',
					backgroundColor: main,
					data: [100_000],
					stack: 'stack1',
				},
				{
					label: 'Casos Ativos',
					type: 'horizontalBar',
					backgroundColor: 'red',
					data: [300_00],
					fill: false,
					stack: 'stack1',
				},
				{
					label: 'Casos Recuperados',
					type: 'horizontalBar',
					backgroundColor: shades[1],
					data: [300_00],
					stack: 'stack1',
				},
			],
		};
	};

	const options = () => {
		return {
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					display: false,
					color: 'white',
				},
			},
			layout: {
				padding: -5,
			},
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

			animation: {
				duration: 1000,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
				callbacks: {
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label + ': ' + formatNumber(parseInt(tooltipItem.value), false);
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
							display: true,
						},
						ticks: {
							display: false,
						},
					},
				],
				xAxes: [
					{
						stacked: true,
						gridLines: {
							display: true,
						},

						ticks: {
							beginAtZero: true,
							display: true,
							max: 500_000,
							stepSize: 500_000 / 5,
							callback: function (value, index, values) {
								return formatNumber(value, false);
							},
						},
					},
				],
			},
		};
	};

	return (
		<>
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '100%', height: 80, overflow: 'hidden' }} className={'scrollable'}>
				<div style={{ height: '100%' }}>
					<HorizontalBar options={options()} data={graphData}></HorizontalBar>
				</div>
			</div>
		</>
	);
}

export function BarArs({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades } = colors;
	//let [graphData, setGraphData] = useState({});
	let { values: valueCasesDiarios } = statistics.getDiariosCases();
	let snsData = statistics.getTotalArs();
	console.log(snsData);
	let firstItem = valueCasesDiarios.reverse()[0];
	let graphData = {
		Nacional: {},
		'ARS Alentejo': {},
		'ARS Algarve': {},
		'ARS Centro': {},
		'ARS Norte': {},
		'ARS Lisboa e Vale do Tejo': {},
	};

	//map the data
	for (let key in graphData) {
		console.log(key);
		let obj1 = Object.assign({}, snsData.filter((el) => el.REGION == key)[0]);
		let obj2 = { 1: 2 };

		graphData[key] = { ...obj2, ...obj1 };
	}
	console.log(firstItem);
	useEffect(() => {
		statistics.getTotalAdministredDosesByAgeByWeek().then((data) => {
			//setGraphData(data);
			//setLoading(false);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<div className={'legends'}>
							<p>
								<span className={'legend'}>
									<span style={{ backgroundColor: shades[1] }} className={'color_sample'}></span>1ª Dose
								</span>
								<span className={'legend'}>
									<span style={{ backgroundColor: main }} className={'color_sample'}></span>2ª Dose
								</span>
								{/*<span>
									<span></span>População-Alvo
								</span>*/}
							</p>
						</div>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Nacional</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age18_24'].target} data={graphData['Age18_24'].az} type={'AstraZeneca'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>ARS Lisboa</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age25_49'].target} data={graphData['Age25_49'].az} type={'AstraZeneca'}></CustomBarChart>
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
