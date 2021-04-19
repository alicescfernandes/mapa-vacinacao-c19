import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { HorizontalBar } from 'react-chartjs-2';
import { RESIZE_TRESHOLD } from '../../constants';
import { formatNumber } from '../../utils';
import { Card } from '../Card';
import cardStyles from './../Card.module.scss';
import classNames from 'classnames';

function getColor(d) {
	if (d >= 80) {
		return '#01ae97';
	}

	if (d >= 60) {
		return '#4dc6b6';
	}

	if (d >= 40) {
		return '#80d7cb';
	}

	if (d >= 20) {
		return '#b3e7e0';
	}

	if (d >= 0) {
		return '#e6f7f5';
	}
}

export function ArsMapa({ statistics, colors }) {
	let [loaded, setLoaded] = useState(false);
	let { main, shades, tints } = colors;
	const [snsData, setSNSData] = useState({});
	const [mapLayers, setMapLayers] = useState(0);
	const [options, setOptions] = useState({
		current_dose: 2,
	});
	let layers2 = [];
	let graphData = {
		'ARS Alentejo': {},
		'ARS Algarve': {},
		'ARS Centro': {},
		'ARS Norte': {},
		'ARS Lisboa e Vale do Tejo': {},
		Outro: {},
	};

	if (loaded) {
		//map the data
		for (let key in graphData) {
			let obj1 = Object.assign(graphData[key], snsData.filter((el) => el.REGION.replace('RA ', '') == key)[0]);
			//let obj2 = ars[key];

			if (key in graphData) {
				graphData[key] = { ...obj1 };
			}
		}
	}

	const grades = [0, 20, 40, 60, 80];
	const grades_pretty = {
		0: '0% a 19%',
		20: '20% a 39%',
		40: '40% a 59%',
		60: '60% a 89%',
		80: '80% a 100%',
	};
	function layerStyle(feature) {
		let ars = feature.properties.ARS;
		let data = graphData[ars];

		let percentagem = parseFloat(data.COVER_1_VAC.replace(',', '.')) * 100; //(data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;
		if (options.current_dose === 2) {
			percentagem = parseFloat(data.COVER.replace(',', '.')) * 100; //(data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;
		}
		layers2.push(feature);
		return { fillOpacity: 1, fillColor: getColor(percentagem), lineJoin: 'round', stroke: true, weight: 2, color: '#018b79' };
	}
	const renderMap = async (map) => {
		const arsGeo = await fetch('/ars.geojson').then((r) => r.json());
		const arsMapa = L.map('mapaars', {
			zoomSnap: 0.1,
			doubleClickZoom: false,
			closePopupOnClick: false,
			dragging: false,
			zoomSnap: false,
			zoomDelta: false,
			trackResize: false,
			touchZoom: false,
			scrollWheelZoom: false,
			zoomControl: false,
			draggable: false,
		});
		arsMapa.dragging.disable();
		let layers = L.geoJSON(arsGeo, {
			onEachFeature: (feature, shape) => {
				let ars = feature.properties.ARS;
				let data = graphData[ars];

				let percentagem_1 = parseFloat(data.COVER_1_VAC.replace(',', '.')) * 100; //(data.dose_1 / populacao_residente_ram[feature.properties.Dico].valor) * 100;
				let percentagem_2 = parseFloat(data.COVER.replace(',', '.')) * 100; //(data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;

				shape.bindPopup(
					`<p>
						<strong>${feature.properties.Nome_Alternativo}</strong>
						<br>1ª Dose: ${formatNumber(400)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${formatNumber(200)} (${percentagem_2.toFixed(2)}%)
					</p>`
				);
				shape.on('click', () => {
					//console.log('click');
				});
			},

			style: layerStyle,
		}).addTo(arsMapa);
		//Create legend
		setMapLayers(layers);
		arsMapa.fitBounds(layers.getBounds());
		arsMapa.setZoom(6.5);
		var legend = L.control({ position: 'bottomleft' });

		legend.onAdd = function (map) {
			var div = L.DomUtil.create('div', 'info legend');

			for (var i = 0; i < grades.length; i++) {
				let grade = grades[i];
				let grade_pretty = grades_pretty[grade];
				div.innerHTML += `<p>
						<i style="background:${getColor(grades[i] + 1)}"></i>${grade_pretty}</p>`;
			}

			return div;
		};

		legend.addTo(arsMapa);
	};

	function renderGraph(el) {
		const data = (canvas, cenas) => {
			/* 	if (window.innerWidth <= RESIZE_TRESHOLD) {
				canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
			} else {
				canvas.parentNode.style.width = '100%';
			} */

			/* 	window.addEventListener('resize', () => {
				if (window.innerWidth <= RESIZE_TRESHOLD) {
					canvas.parentNode.style.width = RESIZE_TRESHOLD + 'px';
				} else {
					canvas.parentNode.style.width = '100%';
				}
			});
 */
			const chartData = {
				labels: [],
				datasets: [
					{
						label: 'Total de vacinas administradas - 1ª Dose',
						borderColor: main,
						backgroundColor: main,
						stack: 'stack0',
						order: 2,
						data: [el.CUMUL_VAC_1],
					},
					{
						label: 'Total de vacinas administradas - 2ª Dose',
						borderColor: shades[1],
						backgroundColor: shades[1],
						data: [el.CUMUL_VAC_2],
						stack: 'stack0',
						order: 1,
					},
				],
			};

			return chartData;
		};

		const options = () => {
			let populacao_residente = Math.floor(el.CUMUL_VAC_2 / parseFloat(el.COVER.replace(',', '.'))) || 100_000;
			return {
				plugins: {
					datalabels: {
						display: false,
					},
				},
				layout: { padding: { left: -12 } },
				legend: {
					position: 'bottom',
					align: 'start',
					display: false,
				},

				animation: {
					duration: 1000,
				},
				tooltips: {
					mode: 'index',
					intersect: false,

					callbacks: {
						title: (tooltipItem, data) => {
							return '';
						},
					},
				},
				scales: {
					yAxes: [
						{
							stacked: true,
							id: 'y-axis',
							ticks: {
								beginAtZero: true,
							},
						},
					],
					xAxes: [
						{
							stacked: false,
							ticks: {
								beginAtZero: true,
								max: populacao_residente,
								stepSize: Math.round(window.innerWidth <= RESIZE_TRESHOLD ? populacao_residente / 3 : populacao_residente / 6),
								callback: (value) => formatNumber(value, false),
							},
						},
					],
				},
			};
		};

		return (
			<Col xs={12} lg={6}>
				<div className={cardStyles.ram_subchart_bar}>
					<h2 className={cardStyles.text_left}>{el.REGION}</h2>
					<HorizontalBar height={window.innerWidth <= RESIZE_TRESHOLD ? 40 : 55} options={options()} data={data} />
				</div>
			</Col>
		);
	}

	useEffect(async () => {
		if (loaded === false) {
			setSNSData(await statistics.getTotalSNS());
			setLoaded(true);
		}

		if (loaded === true) {
			renderMap();
		}
	}, [loaded]);
	useEffect(() => {
		if (mapLayers) mapLayers.setStyle(layerStyle);
	}, [options.current_dose]);
	return loaded === true ? (
		<Card>
			<Row>
				<div className={'toggle_buttons hide_mobile'}>
					<p>
						<button
							className={classNames('toggle_button', {
								active: options.current_dose === 1,
							})}
							onClick={() => {
								setOptions({ current_dose: 1 });
							}}
						>
							1ª Dose
						</button>
						<button
							className={classNames('toggle_button', {
								active: options.current_dose === 2,
							})}
							onClick={() => {
								setOptions({ current_dose: 2 });
							}}
						>
							2ª Dose
						</button>
					</p>
				</div>
			</Row>

			<Row>
				<Col xs={0} lg={4} className={'hide_mobile'}>
					<div id="mapaars" style={{ height: '500px' }}></div>
				</Col>

				<Col xs={12} lg={8}>
					<div className={'legends'} style={{ paddingLeft: '10px' }}>
						<p>
							<span className={'legend'}>
								<span style={{ backgroundColor: main }} className={'color_sample'}></span>1ª Dose
							</span>
							<span className={'legend'}>
								<span style={{ backgroundColor: shades[1] }} className={'color_sample'}></span>2ª Dose
							</span>
						</p>
					</div>
					<Row>{Object.values(graphData).map(renderGraph)}</Row>
				</Col>
			</Row>
		</Card>
	) : (
		''
	);
}
//<Row>{renderGraph(graphData.concelhos.ribeira_brava)}</Row>
