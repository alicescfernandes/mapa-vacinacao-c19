import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { ACORES_DICOS, grades, grades_pretty, RESIZE_TRESHOLD } from '../../constants';
import { formatNumber, getColor } from '../../utils';
import { Card } from '../Card';
import { populacao_residente_raa } from './../../data/generic.json';
import cardStyles from './../Card.module.scss';

export function RaaMapa({ statistics, colors }) {
	let [graphData, setGraphData] = useState();
	let [loaded, setLoaded] = useState(false);
	let { main, shades } = colors;

	const renderMap = async (map) => {
		const madeira = await fetch('/acores.geojson').then((r) => r.json());
		const madeiraMapa = L.map('map', {
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
		let layers = L.geoJSON(madeira, {
			onEachFeature: (feature, shape) => {
				let concelho = ACORES_DICOS[feature.properties.DicoShort];
				let data = graphData.concelhos[concelho];

				let percentagem_1 = (data.dose_1 / populacao_residente_raa[feature.properties.DicoShort].valor) * 100;
				let percentagem_2 = (data.dose_2 / populacao_residente_raa[feature.properties.DicoShort].valor) * 100;

				shape.bindPopup(
					`<p>
						<strong>${feature.properties.ILHA}</strong>
						<br>1ª Dose: ${formatNumber(data.dose_1)} (${percentagem_1.toFixed(2)}%)
						</br>2ª Dose: ${formatNumber(data.dose_2)} (${percentagem_2.toFixed(2)}%)
					</p>`
				);
				shape.on('click', () => {
					//console.log('click');
				});
			},

			style: function (feature) {
				let concelho = ACORES_DICOS[feature.properties.DicoShort];
				let data = graphData.concelhos[concelho];

				let percentagem = (data.dose_2 / populacao_residente_raa[feature.properties.DicoShort].valor) * 100;

				return { fillOpacity: 1, fillColor: getColor(percentagem), lineJoin: 'round', stroke: true, weight: 2, color: '#018b79' };
			},
		}).addTo(madeiraMapa);

		layers.eachLayer(function (layer) {
			layer.feature.properties.layerID = layer.feature.properties.DICOFRE;
		});

		madeiraMapa.fitBounds(layers.getBounds());
		madeiraMapa.setZoom(7.8);

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
		const data = () => {
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
			let dico = ACORES_DICOS[el.chave];
			let populacao_residente = populacao_residente_raa[dico].valor;
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
					y: {
						stacked: true,
						ticks: {
							beginAtZero: true,
						},
					},

					x: {
						stacked: false,
						ticks: {
							beginAtZero: true,
							stepSize: Math.round(populacao_residente / 5),
							callback: (value) => formatNumber(value, false),
						},
						max: populacao_residente,
					},
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
			setGraphData(data[data.length - 1]);

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
