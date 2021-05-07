import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import { Col, Row } from 'react-bootstrap';

let styles = {
	'vaccine-label': {
		textAlign: 'right',
		fontSize: '12px',
		lineHeight: '32px',
		margin: '0px',
	},
};
function CustomBarChart({ type, total, colors, data, showHeading }) {
	let { main, shades } = colors;

	const graphData = (canvas) => {
		return {
			labels: ['', '', '', ''],
			datasets: [
				{
					label: '2ª Dose',
					type: 'bar',
					backgroundColor: main,
					data: [data.mod[1], data.com[1], data.az[1]],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					type: 'bar',
					backgroundColor: shades[1],
					data: [data.mod[0], data.com[0], data.az[0]],
					stack: 'stack1',
				},
			],
		};
	};

	const options = () => {
		return {
			indexAxis: 'y',
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					display: false,
					color: 'white',
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
			},
			layout: {
				padding: -5,
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
						return '';
					},
				},
			},
			scales: {
				y: {
					gridLines: {
						display: true,
					},
					ticks: {
						display: false,
					},
				},

				x: {
					stacked: true,
					gridLines: {
						display: true,
					},

					ticks: {
						beginAtZero: true,
						display: true,
						stepSize: 1000_000 / 5,
						callback: function (value, index, values) {
							return formatNumber(value, false);
						},
					},
					max: 1_200_000,
				},
			},
		};
	};

	return (
		<>
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '19%', height: 150, overflow: 'hidden' }}>
				<p style={styles['vaccine-label']}>{type}</p>
				<p style={styles['vaccine-label']}>Pfizer/BioNTech</p>
				<p style={styles['vaccine-label']}>AstraZeneca</p>
				<p style={styles['vaccine-label']}>Janssen</p>
			</div>
			<div
				style={{ display: 'inline-block', lineHeight: '40200', position: 'relative', width: '80%', height: 150, overflow: 'hidden' }}
				className={'scrollable'}
			>
				<div style={{ height: '100%' }}>
					<Bar options={options()} data={graphData} />
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
								{/*<span>
									<span></span>População-Alvo
								</span>*/}
							</p>
						</div>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart
									colors={colors}
									showHeading={true}
									total={graphData['Age18_24'].target}
									data={graphData['Age18_24']}
									type={'Moderna'}
								></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 25 e 49 anos</p>
								</div>
								<CustomBarChart
									colors={colors}
									total={graphData['Age25_49'].target}
									data={graphData['Age25_49']}
									type={'Moderna'}
								></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 50 e 59 anos</p>
								</div>
								<CustomBarChart
									colors={colors}
									showHeading={true}
									total={graphData['Age50_59'].target}
									data={graphData['Age50_59']}
									type={'Moderna'}
								></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 60 e 69 anos</p>
								</div>
								<CustomBarChart
									colors={colors}
									total={graphData['Age60_69'].target}
									data={graphData['Age60_69']}
									type={'Moderna'}
								></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 70 e 79 anos</p>
								</div>
								<CustomBarChart
									colors={colors}
									showHeading={true}
									total={graphData['Age70_79'].target}
									data={graphData['Age70_79']}
									type={'Moderna'}
								></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Com mais de 80 anos</p>
								</div>
								<CustomBarChart
									colors={colors}
									total={graphData['Age80+'].target}
									data={graphData['Age80+']}
									type={'Moderna'}
								></CustomBarChart>
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
