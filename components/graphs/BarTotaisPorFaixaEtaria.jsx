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

	const data = (group) => {
		return {
			labels: ['Pfizer/BioNTech'],
			datasets: [
				{
					label: '2ª Dose',
					type: 'horizontalBar',
					backgroundColor: main,
					data: [200],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					type: 'horizontalBar',
					backgroundColor: shades[1],
					data: [300],
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
					display: true,
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
							display: true,
						},
						ticks: {
							display: true,
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
							max: 1000,
							stepSize: 1000 / 5,
						},
					},
				],
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
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age18_24'].target} data={graphData['Age18_24'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age18_24'].target} data={graphData['Age18_24'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 25 e 49 anos</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age25_49'].target} data={graphData['Age25_49'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age25_49'].target} data={graphData['Age25_49'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 50 e 59 anos</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age50_59'].target} data={graphData['Age50_59'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age50_59'].target} data={graphData['Age50_59'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 60 e 69 anos</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age60_69'].target} data={graphData['Age60_69'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age60_69'].target} data={graphData['Age60_69'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 70 e 79 anos</p>
								</div>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age70_79'].target} data={graphData['Age70_79'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} showHeading={true} total={graphData['Age70_79'].target} data={graphData['Age70_79'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Com mais de 80 anos</p>
								</div>
								<CustomBarChart colors={colors} total={graphData['Age80+'].target} data={graphData['Age80+'].mod} type={'Moderna'}></CustomBarChart>
								<CustomBarChart colors={colors} total={graphData['Age80+'].target} data={graphData['Age80+'].com} type={'Pfizer/BioNTech'}></CustomBarChart>
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
