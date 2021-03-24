import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { lineChartCommon, lineChartCommon2, RESIZE_TRESHOLD } from '../../constants';
import { formatNumber, hexToRgb } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { CustomCheckbox } from '../CustomCheckbox';
import styles from './../Card.module.scss';

export function LineRt({ statistics, colors, regiao }) {
	let casesData = statistics.getCases();
	let [loaded, setLoaded] = useState(false);
	let { valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();

	let { main, shades, tints, complements } = colors;
	let [currentRegiao, setCurrentRegiao] = useState(regiao ?? 'continente');
	let doses_map = {
		normal: ['total_vaccinations', 'people_vaccinated', 'people_fully_vaccinated'],
		per_hundred: ['total_vaccinations_per_hundred', 'people_vaccinated_per_hundred', 'people_fully_vaccinated_per_hundred'],
	};
	let [height, setHeight] = useState(400);
	let [toggleStats, setToggleStats] = useState({
		perHundred: true,
	});
	let [rtData, setRtData] = useState({});
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!loaded) return;
		statistics.getRtRegiao(currentRegiao).then((data) => setRtData(data));
	}, [currentRegiao]);

	useEffect(() => {
		console.log(rtData);
	}, [rtData]);

	useEffect(() => {
		statistics.getRtRegiao(currentRegiao).then((data) => {
			setRtData(data);
			setLoaded(true);
		});
	}, []);
	let numberFormatter = new Intl.NumberFormat();

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
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
					data: rtData.rt.map((el) => el.limite_superior_IC95),
					order: 3,
					yAxisID: 'rt',
				},

				{
					...lineChartCommon,
					label: 'R(t)',
					backgroundColor: main,
					borderColor: main,
					type: 'line',
					fill: false,
					data: rtData.rt.map((el) => el.rt_numero_de_reproducao),
					order: 2,
					yAxisID: 'rt',
				},

				{
					...lineChartCommon2,
					label: 'R(t) limite inferior',
					backgroundColor: 'white',
					borderColor: 'transparent',
					type: 'line',
					fill: false,
					data: rtData.rt.map((el) => el.limite_inferior_IC95),
					order: 1,
					yAxisID: 'rt',
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
		return {
			plugins: {
				datalabels: {
					display: false,
				},
			},
			legend: {
				position: 'bottom',
				align: 'start',
				labels: {
					filter: function (item, chart) {
						console.log();
						return !item.text.match('limite');
					},
				},
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
				},
			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,

							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						},
						display: false,
					},
					{
						id: 'rt',
						ticks: {
							beginAtZero: true,

							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 8 : 10,
						},
						display: true,
					},
				],
				xAxes: [
					{
						ticks: {
							maxTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
							minTicksLimit: window.innerWidth <= RESIZE_TRESHOLD ? 30 : 60,
						},
						stacked: true,
					},
				],
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
									active: currentRegiao === 'madeira',
								})}
								onClick={() => {
									setCurrentRegiao('madeira');
								}}
							>
								Madeira
							</button>
							<button
								className={classNames('toggle_button', {
									active: currentRegiao === 'acores',
								})}
								onClick={() => {
									setCurrentRegiao('acores');
								}}
							>
								Açores
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
