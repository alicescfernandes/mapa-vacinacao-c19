import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber } from '../../utils';
export function PieVacinadosInfectadosRecuperadosObitos({ statistics, colors }) {
	let [loading, setLoading] = useState(false);

	let vaccines = statistics.getLastVaccineAvaliable();
	let lastCase = statistics.getLastCaseAvaliable();
	let { main, shades, complements } = colors;

	const data = (canvas) => {
		return {
			labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos'],
			datasets: [
				{
					backgroundColor: [main, complements[0], complements[2], shades[2]],
					data: [vaccines.dose_2, lastCase.ativos, lastCase.recuperados, lastCase.obitos],
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
						let sum = chart.dataset.data.reduce((prev, curr) => {
							return prev + curr;
						}, 0);
						sum = (value / sum) * 100;

						if (sum > 5) {
							return sum.toFixed(2) + '%';
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
						return `${label}: ${formatNumber(data)}`;
					},
				},
			},
		};
	};

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Pie plugins={[]} height={350} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
