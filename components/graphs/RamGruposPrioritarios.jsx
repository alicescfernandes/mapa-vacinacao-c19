import { useEffect, useRef, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import cardStyles from './../Card.module.scss';
import { da } from 'date-fns/locale';
import ReactCountTo from 'react-count-to';
let styles = {
	'vaccine-label': {
		textAlign: 'right',
		fontSize: '12px',
		lineHeight: '40px',
		margin: '0px',
	},
};
function CustomBarChart({ type, total, colors, data, showHeading }) {
	let { main, shades, tints, complements } = colors;

	const graphData = (canvas) => {
		return {
			labels: ['moderna', 'cenas', 'cenas'],
			datasets: [
				{
					label: '2ª Dose',
					type: 'horizontalBar',
					backgroundColor: main,
					data: [data.mod[1], data.com[1], data.az[1]],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					type: 'horizontalBar',
					backgroundColor: shades[1],
					data: [data.mod[0], data.com[0], data.az[0]],
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
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '19%', height: 150, overflow: 'hidden' }}>
				<p style={styles['vaccine-label']}>{type}</p>
				<p style={styles['vaccine-label']}>Pfizer/BioNTech</p>
				<p style={styles['vaccine-label']}>AstraZeneca</p>
			</div>
			<div
				style={{ display: 'inline-block', lineHeight: '40200', position: 'relative', width: '80%', height: 150, overflow: 'hidden' }}
				className={'scrollable'}
			>
				<div style={{ height: '100%' }}>
					<HorizontalBar options={options()} data={graphData}></HorizontalBar>
				</div>
			</div>
		</>
	);
}

export function RamGruposPrioritarios({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades } = colors;
	let [graphData, setGraphData] = useState({});

	useEffect(() => {
		statistics.getMadeiraData().then((data) => {
			setGraphData(data[data.length - 1]);
			setLoading(false);
		});
	}, []);

	let numberFormatter = new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 2,
	});

	const fn = (value) => <h2>{numberFormatter.format(value).replace(/,/gm, ' ')}</h2>;

	function renderGrupo(el) {
		if (!el.nome) return;
		return (
			<Col xs={12} lg={6}>
				<Row>
					<Col xs={12} lg={12}>
						<div className={cardStyles.ram_subchart}>
							<p>{el.nome}</p>
						</div>
					</Col>
					<Col xs={6} lg={6}>
						<div className={cardStyles.ram_subchart}>
							<h3>1º Dose</h3>
							<ReactCountTo digits={0} delay={1} from={0} to={el.dose_1} speed={800}>
								{fn}
							</ReactCountTo>
						</div>
					</Col>
					<Col xs={6} lg={6}>
						<div className={cardStyles.ram_subchart}>
							<h3>2º Dose</h3>
							<ReactCountTo digits={0} delay={1} from={0} to={el.dose_2} speed={800}>
								{fn}
							</ReactCountTo>
						</div>
					</Col>
				</Row>
			</Col>
		);
	}
	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<Row className={cardStyles.ram}>{Object.values(graphData.grupos).map(renderGrupo)}</Row>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	);
}
