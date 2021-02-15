import { useEffect, useRef, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { formatNumber } from '../../utils';
import { Card } from './../Card';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import { CustomBarChart } from '../CustomBarChart';
export function BarTotaisPorFaixaEtaria({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let { main, shades, tints, complements } = colors;
	let [height, setHeight] = useState(400);
	let [graphData, setGraphData] = useState({});
	let [activeDose, setActiveDose] = useState(1);
	const canvasRef = useRef(null);

	const dataModerna = {
		label: 'Moderna',
		datasets: {
			dose_1: {
				label: '1ª Dose',
				backgroundColor: main,
				data: 100,
			},
			dose_2: {
				label: '2ª Dose',
				backgroundColor: tints[2],
				data: 200,
			},
			total: {
				label: 'População-Alvo',
				backgroundColor: '#fff',
				data: 500,
			},
		},
	};

	useEffect(() => {
		statistics.getTotalAdministredDosesByAgeByWeek().then((data) => {
			setGraphData(data);
			setLoading(false);
		});
	}, []);

	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<div className={'subchart-data'}>
							<p>
								{' '}
								<span>
									<span style={{ backgroundColor: main }} className={'color_sample'}></span>1ª Dose
								</span>{' '}
								<span>
									<span style={{ backgroundColor: tints[2] }} className={'color_sample'}></span>2ª Dose
								</span>{' '}
								<span>
									<span style={{ backgroundColor: '#eeeeee' }} className={'color_sample'}></span>População-Alvo
								</span>
							</p>
						</div>

						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart showHeading={true} data={dataModerna}></CustomBarChart>
								<CustomBarChart showHeading={true} data={dataModerna}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart data={dataModerna}></CustomBarChart>
								<CustomBarChart data={dataModerna}></CustomBarChart>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart showHeading={true} data={dataModerna}></CustomBarChart>
								<CustomBarChart showHeading={true} data={dataModerna}></CustomBarChart>
							</Col>
							<Col xs={12} lg={6}>
								<div className={'subchart-data'}>
									<p>Entre os 18 e 24 anos</p>
								</div>
								<CustomBarChart data={dataModerna}></CustomBarChart>
								<CustomBarChart data={dataModerna}></CustomBarChart>
							</Col>
						</Row>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	);
}
