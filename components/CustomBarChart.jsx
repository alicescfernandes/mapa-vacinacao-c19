import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../utils';

export function CustomBarChart({ type, total, colors, data, showHeading }) {
	let { main, shades, tints, complements } = colors;

	const graphData = () => {
		return {
			labels: [type],
			datasets: [
				{
					label: '2ª Dose',
					type: 'horizontalBar',
					backgroundColor: main,
					data: [data[1]],
					stack: 'stack1',
				},

				{
					label: '1ª Dose',
					type: 'horizontalBar',
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
						return label + ': ' + formatNumber(parseInt(tooltipItem.value));
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
								return formatNumber(value);
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
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '80%', height: 80, overflow: 'hidden' }}>
				<HorizontalBar options={options()} data={graphData()}></HorizontalBar>
			</div>
		</>
	);
}
