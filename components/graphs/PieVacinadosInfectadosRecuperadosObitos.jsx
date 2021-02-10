import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { COLOR_1 } from '../../constants';
import { Card } from './../Card';
import ChartDataLabels from 'chartjs-plugin-datalabels';
export function PieVacinadosInfectadosRecuperadosObitos({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { values, labels, valuesIn1, valuesIn2 } = statistics.getDiariosInoculacoes();
	let { values: valueCasesDiarios } = statistics.getDiariosCases();
	let vaccines = statistics.getRaw();
	let [height, setHeight] = useState(400);
	let { main, shades, tints, complements } = colors;

	const canvasRef = useRef(null);
	const data = (canvas) => {
		return {
			labels: ['Vacinados (com as duas doses)', 'Casos Ativos', 'Casos Recuperados', 'Óbitos'],
			datasets: [
				{
					backgroundColor: [main, tints[0], shades[0], shades[2]],
					data: [vaccines[vaccines.length - 1].Inoculacao2_Ac, valueCasesDiarios.reverse()[0].Activos, valueCasesDiarios.reverse()[0].Recuperados, valueCasesDiarios.reverse()[0].Obitos],
				},
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	const options = () => {
		return {
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
			},
			onResize: (a, b, c) => {
				if (window.innerWidth <= 800) {
					a.canvas.parentNode.style.width = '1000px';
				} else {
					a.canvas.parentNode.style.width = 'auto';
				}
			},
			legend: {
				position: 'bottom',
				align: 'start',
			},

			animation: {
				duration: 1000,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
		};
	};
	useEffect(() => {
		if (canvasRef?.current?.chartInstance?.canvas?.height > 0) {
			setHeight(canvasRef?.current?.chartInstance?.canvas?.height);
		}
	}, [canvasRef.current]);

	useEffect(() => {
		if (values.length > 0 && height > 0) {
			setLoading(false);
		}
	}, [values, labels, height]);

	return (
		<Card allowOverflow={true}>
			<div>{!loading ? <Pie plugins={[ChartDataLabels]} height={100} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
