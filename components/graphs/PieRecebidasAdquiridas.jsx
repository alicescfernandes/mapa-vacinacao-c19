import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber } from './../../utils';
export function PieRecebidasAdquiridas({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main } = colors;

	const data = (canvas) => {
		return {
			labels: ['Doses a Receber', 'Doses Recebidas'],
			datasets: [
				{
					backgroundColor: ['transparent', main],
					borderColor: [main, main],
					data: [statistics.encomendadas - statistics.recebidas, statistics.recebidas],
				},
			],
		};
	};
	const options = () => {
		return {
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					color: [main, 'white'],
					formatter: (value, chart) => {
						let sum = 0;

						if (value === statistics.encomendadas - statistics.recebidas) {
							sum = 1 - statistics.recebidas / statistics.encomendadas;
						}
						sum = sum * 100;
						if (sum > 10) {
							return `${formatNumber(value)} ( ${sum.toFixed(2)}% )`;
						}
						return '';
					},
				},
				legend: {
					position: 'bottom',
					align: 'start',
				},
			},
			onResize: (a, b, c) => {},

			animation: {
				duration: 1000,
			},
			tooltips: {
				callbacks: {
					label: function ({ index }, { datasets, labels }) {
						let label = labels[index];
						let data = datasets[0].data[index];
						if (label === 'Doses Adquiridas') {
							data = statistics.encomendadas;
						}
						return `${label}: ${formatNumber(data)}`;
					},
				},
			},
		};
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<Card allowOverflow={true} is_dynamic_scroll={false}>
			<div>{!loading ? <Pie plugins={[]} height={350} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
