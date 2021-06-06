import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { grades, grades_pretty, MADEIRA_DICOS, RESIZE_TRESHOLD } from '../../constants';
import { formatNumber, getColor } from '../../utils';
import { Card } from '../Card';
import { populacao_residente_ram } from './../../data/generic.json';
import cardStyles from './../Card.module.scss';

export function RamMapa({ statistics, colors }) {
	let [graphData, setGraphData] = useState();
	let [loaded, setLoaded] = useState(false);
	let { main, shades } = colors;

	const renderMap = async (map) => {
		const madeira = await fetch('/madeira.geojson').then((r) => r.json());
		const madeiraMapa = L.map('map', {
			zoomSnap: 0.1,
			doubleClickZoom: false,
			closePopupOnClick: false,
			dragging: false,
			zoomDelta: false,
			trackResize: false,
			touchZoom: false,
			scrollWheelZoom: false,
			zoomControl: false,
			draggable: false,
		});

		let layers = L.geoJSON(madeira, {
			onEachFeature: (feature, shape) => {
				let concelho = MADEIRA_DICOS[feature.properties.Dico];
				let data = graphData.concelhos[concelho];

				let percentagem_1 = (data.dose_1 / populacao_residente_ram[feature.properties.Dico].valor) * 100;
				let percentagem_2 = (data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;

				shape.bindPopup(
					`<p>
						<strong>${feature.properties.Municipio}</strong>
						<br>1ª Dose: ${formatNumber(data.dose_1)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${formatNumber(data.dose_2)} (${percentagem_2.toFixed(2)}%)
					</p>`
				);
				shape.on('click', () => {
					//console.log('click');
				});
			},

			style: function (feature) {
				let concelho = MADEIRA_DICOS[feature.properties.Dico];
				let data = graphData.concelhos[concelho];

				let percentagem = (data.dose_2 / populacao_residente_ram[feature.properties.Dico].valor) * 100;

				return { fillOpacity: 1, fillColor: getColor(percentagem), lineJoin: 'round', stroke: true, weight: 2, color: '#018b79' };
			},
		}).addTo(madeiraMapa);

		layers.eachLayer(function (layer) {
			layer.feature.properties.layerID = layer.feature.properties.DICOFRE;
		});

		madeiraMapa.fitBounds(layers.getBounds());
		madeiraMapa.setZoom(10);
		//Create legend
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

		legend.addTo(madeiraMapa);
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
				labels: [''],
				datasets: [
					{
						label: 'Total de vacinas administradas - 1ª Dose',
						borderColor: main,
						backgroundColor: main,
						stack: 'stack0',
						order: 2,
						data: [el.dose_1],
					},
					{
						label: 'Total de vacinas administradas - 2ª Dose',
						borderColor: shades[0],
						backgroundColor: shades[0],
						data: [el.dose_2],
						stack: 'stack0',
						order: 1,
					},
				],
			};

			return chartData;
		};

		const options = () => {
			let dico = MADEIRA_DICOS[el.chave];
			let populacao_residente = populacao_residente_ram[dico].valor;
			return {
				indexAxis: 'y',
				plugins: {
					datalabels: {
						display: false,
					},
					legend: {
						position: 'bottom',
						align: 'start',
						display: false,
					},
				},
				layout: { padding: { left: -12 } },

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
			<Col xs={12} lg={4}>
				<div className={cardStyles.ram_subchart_bar}>
					<h2 className={cardStyles.text_left}>{el.nome}</h2>
					<Bar height={window.innerWidth <= RESIZE_TRESHOLD ? 60 : 60} options={options()} data={data} />
				</div>
			</Col>
		);
	}

	useEffect(async () => {
		statistics.getArquipelagoData().then((data) => {
			setGraphData(data[12]);

			if (loaded === false) {
				setLoaded(true);
			}

			if (loaded === true) {
				renderMap();
			}
		});
	}, [loaded]);
	return loaded === true ? (
		<Card>
			<Row>
				<Col>
					<div id="map" style={{ height: '350px' }}></div>
				</Col>
			</Row>
			<Row style={{ marginTop: 15 }}>{Object.values(graphData.concelhos).map(renderGraph)}</Row>
			<Row>
				<div className={'legends'}>
					<p>
						<span className={'legend'}>
							<span style={{ backgroundColor: main }} className={'color_sample'}></span>1ª Dose
						</span>
						<span className={'legend'}>
							<span style={{ backgroundColor: shades[1] }} className={'color_sample'}></span>2ª Dose
						</span>
					</p>
				</div>
			</Row>
		</Card>
	) : (
		''
	);
}
//<Row>{renderGraph(graphData.concelhos.ribeira_brava)}</Row>
