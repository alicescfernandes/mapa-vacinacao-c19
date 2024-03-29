import { Pie } from 'react-chartjs-2';
import { Card } from './../Card';
import { formatNumber } from './../../utils';
export function PieSuscetiveisProporcao({ statistics, colors }) {
	let vaccines = statistics.getLastVaccineAvaliable();
	let lastCase = statistics.getLastCaseAvaliable();

	// let infetadosVacinados = vaccines.dose_2 - lastCase.confirmados;
	let vacinados_apenas_uma = Math.abs(vaccines.dose_1 - vaccines.dose_2);
	let populacao_suscetivel =
		lastCase.populacao - (vacinados_apenas_uma + vaccines.dose_2 + lastCase.ativos + lastCase.recuperados + lastCase.obitos);
	//let populacao_suscetivel = 10286300 - (vaccines[vaccines.length - 1].Inoculacao2_Ac + infetadosVacinados + firstItem.recuperados + firstItem.obitos);
	let { main, tints, shades, complements } = colors;

	const data = () => {
		return {
			//labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos', 'População suscetível'],
			labels: ['Vacinação Iniciada', 'Vacinação Completa', 'Casos Ativos', 'Casos Recuperados', 'Óbitos', 'População suscetível'],
			datasets: [
				{
					backgroundColor: [tints[1], main, complements[0], complements[2], shades[2], complements[1]],
					data: [vacinados_apenas_uma, vaccines.dose_2, lastCase.ativos, lastCase.recuperados, lastCase.obitos, populacao_suscetivel],
					//data: [vaccines.dose_2 , valueCasesDiarios.reverse()[0].ativos, valueCasesDiarios.reverse()[0].recuperados, valueCasesDiarios.reverse()[0].obitos, populacao_suscetivel],
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

						if (sum > 10) {
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
		<Card allowOverflow={true} is_dynamic_scroll={false}>
			<div>{<Pie plugins={[]} height={350} options={options()} data={data} />}</div>
		</Card>
	);
}
