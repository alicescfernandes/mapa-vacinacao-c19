import { useEffect, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import { Col, Row } from 'react-bootstrap';

let styles = {
	'labels-container': {
		display: 'inline-block',
		position: 'relative',
		//width: '15%',
		width: '0%',
		height: '126px',
		overflow: 'hidden',
		verticalAlign: 'top',
		padding: '15px 0px',
	},
	'labels-label': {
		textAlign: 'right',
		fontSize: '12px',
		marginBottom: '0px',
		lineHeight: 'calc(100px / 3)',
	},
	'graph-container': {
		display: 'inline-block',
		lineHeight: '40px',
		position: 'relative',
		width: '100%',
		height: 150,
		overflow: 'hidden',
	},
};

function CustomBarChart({ type, total, colors, data, showHeading }) {
	let { main, shades, tints } = colors;
	const graphData = (canvas) => {
		return {
			//labels: ['Inoculados', 'Óbitos Novos', 'cenas3'],
			datasets: [
				{
					label: 'Inoculados Totais Novos (Acumulado 7 dias)',
					type: 'horizontalBar',
					backgroundColor: main,

					data: [data['TOTAL_VAC_2']],
					stack: 'stack1',
				},
				{
					label: 'Casos Novos (Acumulado 7 dias)',
					type: 'horizontalBar',
					backgroundColor: tints[1],
					data: [data['casosNovos7Dias']],
					fill: false,
					stack: 'stack2',
				},
				{
					label: 'Óbitos Novos (Acumulado 7 dias)',
					type: 'horizontalBar',
					backgroundColor: shades[1],
					data: [data['obitosNovos7Dias']],
					stack: 'stack3',
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
					title: () => {
						return '';
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
							display: true,
						},
					},
				],
				xAxes: [
					{
						stacked: false,
						gridLines: {
							display: true,
						},

						ticks: {
							beginAtZero: true,
							display: true,
							max: 120_000,
							stepSize: 100_000 / 5,
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
			<div style={styles['labels-container']}>
				<p style={styles['labels-label']}>Inoculados</p>
				<p style={styles['labels-label']}>Casos Novos</p>
				<p style={styles['labels-label']}>Casos Recuperados</p>
			</div>

			<div style={styles['graph-container']}>
				<div style={{ height: '100%' }}>
					<HorizontalBar options={options()} data={graphData}></HorizontalBar>
				</div>
			</div>
		</>
	);
}

export function BarArs({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades, tints } = colors;
	const [snsData, setSNSData] = useState({});
	const [ars, setArs] = useState({});
	let graphData = {
		All: {},
		'ARS Alentejo': {},
		'ARS Algarve': {},
		'ARS Centro': {},
		'ARS Norte': {},
		'ARS Lisboa e Vale do Tejo': {},
		Madeira: {},
		Açores: {},
	};

	if (!loading) {
		//map the data
		for (let key in graphData) {
			let obj1 = Object.assign(graphData[key], snsData.filter((el) => el.REGION.replace('RA ', '') == key)[0]);
			let obj2 = ars[key];

			graphData[key] = { ...obj2, ...obj1 };
		}
	}

	useEffect(async () => {
		let d = await statistics.getTotalSNS();
		setSNSData(d);

		let arsD = await statistics.getTotalARS();
		setArs(arsD);
		setLoading(false);
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>
				{loading === false ? (
					<>
						{
							<div className={'legends'}>
								<p>
									<span className={'legend'}>
										<span style={{ backgroundColor: main }} className={'color_sample'}></span>Inoculados Novos
									</span>
									<span className={'legend'}>
										<span style={{ backgroundColor: tints[1] }} className={'color_sample'}></span>Casos Novos
									</span>
									<span className={'legend'}>
										<span style={{ backgroundColor: shades[1] }} className={'color_sample'}></span>Óbitos Novos
									</span>
								</p>
							</div>
						}
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Nacional</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={400} data={graphData['All']}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>{graphData['ARS Algarve'].REGION}</p>
								</div>
								<CustomBarChart colors={colors} data={graphData['ARS Algarve']} total={5000}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>{graphData['ARS Alentejo'].REGION}</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={400} data={graphData['ARS Alentejo']}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>{graphData['ARS Centro'].REGION}</p>
								</div>
								<CustomBarChart colors={colors} data={graphData['ARS Centro']} total={5000}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>{graphData['ARS Lisboa e Vale do Tejo'].REGION}</p>
								</div>
								<CustomBarChart
									colors={colors}
									showHeading={true}
									total={400}
									data={graphData['ARS Lisboa e Vale do Tejo']}
								></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>{graphData['ARS Norte'].REGION}</p>
								</div>
								<CustomBarChart colors={colors} data={graphData['ARS Norte']} total={5000}></CustomBarChart>
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
