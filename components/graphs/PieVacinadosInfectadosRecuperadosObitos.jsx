import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { COLOR_1 } from '../../constants';
import { Card } from './../Card';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { formatNumber } from '../../utils';
export function PieVacinadosInfectadosRecuperadosObitos({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: valueCasesDiarios } = statistics.getDiariosCases();
	let vaccines = statistics.getRaw();
	let firstItem = valueCasesDiarios.reverse()[0];
	let { main, shades, tints, complements } = colors;
	const data = (canvas) => {
		return {
			labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos'],
			datasets: [
				{
					backgroundColor: [main, complements[0], complements[2], shades[2]],
					data: [vaccines[vaccines.length - 1].Inoculacao2_Ac, firstItem.Activos, firstItem.Recuperados, firstItem.Obitos],
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
						return `${label}: ${formatNumber(data)}`;
					},
				},
			},
		};
	};

	useEffect(() => {
		if (values.length > 0) {
			setLoading(false);
		}
	}, [values, labels]);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Pie plugins={[ChartDataLabels]} height={350} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
