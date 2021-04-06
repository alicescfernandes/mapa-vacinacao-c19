import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from './../Card';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { formatNumber } from './../../utils';
export function PieAdministradasDoses({ statistics, colors }) {
	let [loading, setLoading] = useState(true);

	let { main, shades } = colors;

	const data = (canvas) => {
		return {
			labels: ['Doses Adminstradas - 1ª Inoculação', 'Doses Adminstradas - 2ª Inoculação', 'Doses por administrar'],
			datasets: [
				{
					backgroundColor: [main, shades[0], shades[1]],
					data: [statistics.primeiras, statistics.segundas, statistics.recebidas - statistics.administradas],
				},
			],
		};
	};
	const options = () => {
		return {
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					color: 'white',
					formatter: (value, chart) => {
						let sum = 0;
						if (value === statistics.primeiras) {
							sum = statistics.primeiras / statistics.recebidas;
						}

						if (value === statistics.segundas) {
							sum = statistics.segundas / statistics.recebidas;
						}

						if (value === statistics.recebidas - statistics.administradas) {
							sum = 1 - statistics.administradas / statistics.recebidas;
						}

						sum = sum * 100;

						if (sum > 10) {
							return sum.toFixed(2) + '%';
						}
						return '';
					},
				},
			},
			onResize: (a, b, c) => {},
			legend: {
				position: 'bottom',
				align: 'start',
			},

			animation: {
				duration: 1000,
			},
			tooltips: {
				callbacks: {
					label: function ({ index }, { datasets, labels }) {
						let label = labels[index];
						let data = datasets[0].data[index];
						if (label === 'Doses Recebidas') {
							data = statistics.recebidas;
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
		<Card allowOverflow={true}>
			<div>{!loading ? <Pie plugins={[ChartDataLabels]} height={350} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
