import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { lineChartCommon, lineChartCommon2, RESIZE_TRESHOLD } from '../../constants';
import { hexToRgb } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import styles from './../Card.module.scss';

export function LineRt({ statistics, colors, regiao }) {
	let [loaded, setLoaded] = useState(false);

	let { main } = colors;
	let [currentRegiao, setCurrentRegiao] = useState(regiao ?? 'continente');

	let [rtData, setRtData] = useState({});
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!loaded) return;
		statistics.getRtRegiao(currentRegiao).then((data) => setRtData(data));
	}, [currentRegiao]);

	useEffect(() => {
		statistics.getRtRegiao(currentRegiao).then((data) => {
			setRtData(data);
			setLoaded(true);
		});
	}, []);

	const data = (canvas) => {
		const ctx = canvas?.getContext('2d');
		const gradient = ctx?.createLinearGradient(0, 0, 0, 400);
		let color = '';
		let { r, g, b } = hexToRgb(main);
		try {
			//See if supports transperancy
			gradient.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',30%)');
			color = 'rgba(' + r + ',' + g + ',' + b + ',30%)';
		} catch (e) {
			gradient.addColorStop(0, '#d9f3ef');
			color = '#d9f3ef';
		}

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
			labels: rtData.labels,
			datasets: [
				{
					...lineChartCommon2,
					label: 'R(t) limite superior',
					backgroundColor: color,
					borderColor: 'transparent',
					type: 'line',
					fill: '2', //fill until previous dataset
					data: rtData.rt.map((el) => el.limite_superior_IC95.toFixed(2)),
					order: 1,
				},

				{
					...lineChartCommon,
					label: 'R(t)',
					backgroundColor: main,
					borderColor: main,
					type: 'line',
					fill: false,
					data: rtData.rt.map((el) => el.rt_numero_de_reproducao.toFixed(2)),
					order: 2,
				},

				{
					...lineChartCommon2,
					label: 'R(t) limite inferior',
					backgroundColor: 'white',
					borderColor: 'transparent',
					type: 'line',
					fill: false,
					data: rtData.rt.map((el) => el.limite_inferior_IC95.toFixed(2)),
					order: 3,
				},

				/* 	{
					...lineChartCommon,
					fill: false,
					borderColor: complements[1],
					label: 'Casos Confirmados',
					backgroundColor: complements[1],
					pointBorderColor: complements[1],
					pointBackgroundColor: complements[1],
					pointHoverBackgroundColor: complements[1],
					pointHoverBorderColor: complements[1],
					data: casesData.filter((el) => el.Data >= 1609070400000).map((el) => el.ConfirmadosNovos),
					order: 4,
				}, */
				/* {
					...lineChartCommon,
					fill: false,
					borderColor: complements[2],
					label: 'Totalmente inoculados',
					backgroundColor: complements[2],
					pointBorderColor: complements[2],
					pointBackgroundColor: complements[2],
					pointHoverBackgroundColor: complements[2],
					pointHoverBorderColor: complements[2],
					data: valuesIn2,
					order: -1,
				}, */
			],
		};
	};
	const options = () => {
		let max = parseInt(Math.max(...rtData.rt.map((el) => el.limite_superior_IC95.toFixed(2))) + 1);
		let annotation_percentage = 1 / max;
		return {
			plugins: {
				datalabels: {
					display: false,
				},
				legend: {
					position: 'bottom',
					align: 'start',
					labels: {
						filter: function (item, chart) {
							return !item.text.match('limite');
						},
					},
				},
			},
			annotation: {
				annotations: [
					{
						type: 'line',
						mode: 'horizontal',
						scaleID: 'y-axis-0',
						value: annotation_percentage,
						borderColor: '#0A9DD1',
						borderWidth: 2,
						borderDash: [5, 5],

						label: {
							backgroundColor: 'rgba(0,0,0,0.0)',

							drawTime: 'afterDatasetsDraw',

							textAlign: 'left',
							fontColor: '#0A9DD1',
							position: 'left',
							xAdjust: 10,
							yAdjust: -10,
							fontSize: '13px',
							enabled: true,
							content: 'R(t) = 1',
						},
					},
				],
			},

			animation: {
				duration: 1000,
			},
			tooltips: {
				mode: 'index',
				intersect: true,
				callbacks: {
					title: (tooltipItem, data) => {
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				y: {
					type: 'linear',
					ticks: {
						beginAtZero: true,
						linear: {
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						},
					},
					max: max,
				},

				x: {
					ticks: {
						maxTicksLimit: 30,
						minTicksLimit: 30,
					},
				},
			},
		};
	};
	return (
		<Card textLeft={true} allowOverflow={true}>
			<div className={[styles.card_scrollable].join(' ')}>
				{regiao === undefined ? (
					<div className={'toggle_buttons'}>
						<p>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'continente',
								})}
								onClick={() => {
									setCurrentRegiao('continente');
								}}
							>
								Continente
							</button>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'nacional',
								})}
								onClick={() => {
									setCurrentRegiao('nacional');
								}}
							>
								Nacional
							</button>

							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'lvt',
								})}
								onClick={() => {
									setCurrentRegiao('lvt');
								}}
							>
								Lisboa e Vale do Tejo
							</button>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'algarve',
								})}
								onClick={() => {
									setCurrentRegiao('algarve');
								}}
							>
								Algarve
							</button>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'alentejo',
								})}
								onClick={() => {
									setCurrentRegiao('alentejo');
								}}
							>
								Alentejo
							</button>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'centro',
								})}
								onClick={() => {
									setCurrentRegiao('centro');
								}}
							>
								Centro
							</button>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'norte',
								})}
								onClick={() => {
									setCurrentRegiao('norte');
								}}
							>
								Norte
							</button>
						</p>
					</div>
				) : (
					<></>
				)}
			</div>

			<div>{loaded ? <Line height={80} ref={canvasRef} options={options()} data={data} /> : ''}</div>
		</Card>
	);
}
