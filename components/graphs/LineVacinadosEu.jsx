import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { lineChartCommon, RESIZE_TRESHOLD } from '../../constants';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { CustomCheckbox } from '../CustomCheckbox';
import styles from './../Card.module.scss';
import { useCanvasResizer } from '../../hooks/useCanvasResizer';

export function LineVacinadosEu({ statistics, colors }) {
	const [owidData, setOwidData] = useState({ labels: '', pt: '', eu: '' });
	const [loaded, setLoaded] = useState(loaded);
	let { main, complements } = colors;

	let [activeDose, setActiveDose] = useState(0);
	let doses_map = {
		normal: ['total_vaccinations', 'people_vaccinated', 'people_fully_vaccinated'],
		per_hundred: ['total_vaccinations_per_hundred', 'people_vaccinated_per_hundred', 'people_fully_vaccinated_per_hundred'],
	};
	let [toggleStats, setToggleStats] = useState({
		perHundred: true,
	});

	let { setCanvasNode } = useCanvasResizer();

	const data = (canvas) => {
		setCanvasNode(canvas.parentNode);

		return {
			labels: owidData.labels,
			datasets: [
				{
					...lineChartCommon,
					label: 'Portugal',
					backgroundColor: main,
					borderColor: main,
					type: 'line',
					fill: false,
					data: owidData.pt.map((el) => {
						if (toggleStats.perHundred) {
							return el[doses_map.per_hundred[activeDose]];
						}
						return el[doses_map.normal[activeDose]];
					}),
				},
				{
					...lineChartCommon,
					label: 'União Europeia',
					type: 'line',
					fill: false,
					backgroundColor: complements[2],
					borderColor: complements[2],
					data: owidData.eu.map((el) => {
						if (toggleStats.perHundred) {
							return el[doses_map.per_hundred[activeDose]];
						}
						return el[doses_map.normal[activeDose]];
					}),
				},
			],
		};
	};
	const options = () => {
		return {
			plugins: {
				datalabels: {
					display: false,
				},
				legend: {
					position: 'bottom',
					align: 'start',
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
						return 'Dia ' + tooltipItem[0].label;
					},
				},
			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: false,
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

	useEffect(async () => {
		let { labels, pt, eu } = await statistics.getOwid();
		setOwidData({ labels, pt, eu });
		setLoaded(true);
	}, []);

	return loaded === true ? (
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
				<Line height={80} options={options()} data={data} />
			</div>
		</Card>
	) : (
		<></>
	);
}
