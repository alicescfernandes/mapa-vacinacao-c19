import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { lineChartCommon, RESIZE_TRESHOLD } from '../../constants';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { CustomCheckbox } from '../CustomCheckbox';
import styles from './../Card.module.scss';

export function BarVacinadosEu({ statistics, colors }) {
	let { labels, pt, eu } = statistics.getOwid();
	let { main, shades, tints, complements } = colors;

	let [activeDose, setActiveDose] = useState(0);
	let doses_map = {
		normal: ['total_vaccinations', 'new_1_doses', 'new_2_doses'],
		per_hundred: ['total_vaccinations_per_hundred', 'new_1_doses_per_hundred', 'new_2_doses_per_hundred'],
	};
	let [height, setHeight] = useState(400);
	let [toggleStats, setToggleStats] = useState({
		perHundred: true,
	});
	const canvasRef = useRef(null);

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');

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
			labels: labels,
			datasets: [
				{
					...lineChartCommon,
					label: 'Portugal',
					backgroundColor: main,
					borderColor: main,
					fill: false,

					data: pt.map((el) => {
						if (toggleStats.perHundred) {
							return el[doses_map.per_hundred[activeDose]];
						}
						return el[doses_map.normal[activeDose]];
					}),
				},
				{
					...lineChartCommon,
					label: 'União Europeia',
					fill: false,
					backgroundColor: complements[2],
					borderColor: complements[2],
					data: eu.map((el) => {
						if (toggleStats.perHundred) {
							return el[doses_map.per_hundred[activeDose]];
						}
						return el[doses_map.normal[activeDose]];
					}),
				},
			],
		};
	};
	let numberFormatter = new Intl.NumberFormat();
	const options = () => {
		return {
			plugins: {
				datalabels: {
					display: false,
				},
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
				intersect: true,
				callbacks: {
					title: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem[0].datasetIndex];
						return 'Dia ' + tooltipItem[0].label;
					},
					label: (tooltipItem, data) => {
						var label = data.datasets[tooltipItem.datasetIndex].label;
						return label + ': ' + parseFloat(tooltipItem.value).toFixed(2);
					},
				},
			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							callback: (value) => formatNumber(value, false),
						},
					},
				],
				xAxes: [
					{
						ticks: {
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
						},
					},
				],
			},
		};
	};

	return (
		<Card textLeft={true} allowOverflow={true}>
			<div className={[styles.card_scrollable].join(' ')}>
				<div className={'toggle_buttons'}>
					<p>
						<button
							className={classNames('toggle_button', {
								active: activeDose === 0,
							})}
							onClick={() => {
								setActiveDose(0);
							}}
						>
							Doses Totais
						</button>
						<button
							className={classNames('toggle_button', {
								active: activeDose === 1,
							})}
							onClick={() => {
								setActiveDose(1);
							}}
						>
							1ª Dose
						</button>
						<button
							className={classNames('toggle_button', {
								active: activeDose === 2,
							})}
							onClick={() => {
								setActiveDose(2);
							}}
						>
							2ª Dose
						</button>
					</p>
				</div>
				<CustomCheckbox
					styles={{ marginLeft: '50px' }}
					checked={toggleStats.perHundred}
					label={'Por cada 100 habitantes'}
					onChange={(checked) => {
						setToggleStats({
							perHundred: checked,
						});
					}}
				/>
			</div>

			<div>
				<Bar height={80} ref={canvasRef} options={options()} data={data} />
			</div>
		</Card>
	);
}
