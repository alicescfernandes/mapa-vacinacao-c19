import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
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

export function BarsVacinacaoArs({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades, tints, complements } = colors;
	let snsData = statistics.getTotalSNS();

	useEffect(() => {
		statistics.getTotalAdministredDosesByAgeByWeek().then((data) => {
			//setGraphData(data);
			setLoading(false);
		});
	}, []);
	const data = (canvas) => {
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
			labels: snsData.filter((el) => el.REGION != 'All').map((el) => el.REGION.replace('All', 'Nacional')),
			datasets: [
				{
					label: '1ª Dose',
					backgroundColor: main,
					data: snsData.filter((el) => el.REGION != 'All').map((el) => el.CUMUL_VAC_1),

					fill: false,
					stack: 'stack1',
				},
				{
					label: '2ª Dose',
					backgroundColor: tints[1],
					data: snsData.filter((el) => el.REGION != 'All').map((el) => el.CUMUL_VAC_2),
					stack: 'stack1',
				},
			],
		};
	};

	const options = () => {
		return {
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
				display: true,
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
							display: true,
							max: 300_000,
							stepSize: 300_000 / 5,
							callback: (value) => formatNumber(value, false),
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
						},
					},
				],
			},
		};
	};

	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<Row>
							<Col xs={12}>
								<Bar height={80} options={options()} data={data}></Bar>
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
