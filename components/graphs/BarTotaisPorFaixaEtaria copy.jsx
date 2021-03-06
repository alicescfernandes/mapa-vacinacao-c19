/* import { useEffect, useRef, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';

function CustomBarChart({ type, total, colors, data, showHeading }) {
	let { main, shades, tints, complements } = colors;

	const graphData = (canvas) => {
		if (window.innerWidth <= 800) {
			canvas.parentNode.style.width = '800px';
		} else {
			canvas.parentNode.style.width = '100%';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 800) {
				canvas.parentNode.style.width = '800px';
			} else {
				canvas.parentNode.style.width = '100%';
			}
		});

		return {
			labels: [type],
			datasets: [
				{
					label: '2ª Dose',
					type: 'bar',
					backgroundColor: main,
					data: [data[1]],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					type: 'bar',
					backgroundColor: shades[1],
					data: [data[0]],
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
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '19%', height: 80, overflow: 'hidden' }}>
				<p className={'vaccine-label'}>{type}</p>
			</div>
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '80%', height: 80, overflow: 'hidden' }} className={'scrollable'}>
				<div style={{ height: '100%' }}>
					<HorizontalBar options={options()} data={graphData}></HorizontalBar>
				</div>
			</div>
		</>
	);
}

export function BarTotaisPorFaixaEtaria({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades } = colors;
	let [graphData, setGraphData] = useState({});

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
						<div className={'legends'}>
							<p>
								<span className={'legend'}>
									<span style={{ backgroundColor: shades[1] }} className={'color_sample'}></span>1ª Dose
								</span>
								<span className={'legend'}>
									<span style={{ backgroundColor: main }} className={'color_sample'}></span>2ª Dose
								</span>
							
							</p>
						</div>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age18_24'].target} data={graphData['Age18_24'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age18_24'].target} data={graphData['Age18_24'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age18_24'].target} data={graphData['Age18_24'].az} type={'AstraZeneca'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 25 e 49 anos</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age25_49'].target} data={graphData['Age25_49'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age25_49'].target} data={graphData['Age25_49'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age25_49'].target} data={graphData['Age25_49'].az} type={'AstraZeneca'}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 50 e 59 anos</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age50_59'].target} data={graphData['Age50_59'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age50_59'].target} data={graphData['Age50_59'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age50_59'].target} data={graphData['Age50_59'].az} type={'AstraZeneca'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 60 e 69 anos</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age60_69'].target} data={graphData['Age60_69'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age60_69'].target} data={graphData['Age60_69'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age60_69'].target} data={graphData['Age60_69'].az} type={'AstraZeneca'}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 70 e 79 anos</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age70_79'].target} data={graphData['Age70_79'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age70_79'].target} data={graphData['Age70_79'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age70_79'].target} data={graphData['Age70_79'].az} type={'AstraZeneca'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Com mais de 80 anos</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age80+'].target} data={graphData['Age80+'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age80+'].target} data={graphData['Age80+'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age80+'].target} data={graphData['Age80+'].az} type={'AstraZeneca'}></CustomBarChart>
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
 */
