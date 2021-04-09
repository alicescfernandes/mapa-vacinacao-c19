import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import { RESIZE_TRESHOLD } from '../../constants';

export function BarsVacinacaoArs({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, tints } = colors;
	const [snsData, setSNSData] = useState({});

	const data = (canvas) => {
		if (window.innerWidth <= RESIZE_TRESHOLD) {
			canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
		} else {
			canvas.parentNode.style.width = '100%';
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth <= RESIZE_TRESHOLD) {
				canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
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
							maxTicksLimit: 7,
							minTicksLimit: 7,
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

	useEffect(async () => {
		setSNSData(await statistics.getTotalSNS());
		setLoading(false);
	}, []);
	return !loading === true ? (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<Bar height={80} options={options()} data={data}></Bar>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	) : (
		''
	);
}
