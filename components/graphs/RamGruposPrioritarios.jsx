import { useEffect, useState } from 'react';
import { Card } from './../Card';
import { Col, Row } from 'react-bootstrap';
import cardStyles from './../Card.module.scss';
import ReactCountTo from 'react-count-to';

export function RamGruposPrioritarios({ statistics, colors }) {
	let [loading, setLoading] = useState(true);
	let [graphData, setGraphData] = useState({});

	useEffect(() => {
		statistics.getArquipelagoData().then((data) => {
			setGraphData(data[8]);
			setLoading(false);
		});
	}, []);

	let numberFormatter = new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 2,
	});

	const fn = (value) => <h2>{numberFormatter.format(value).replace(/,/gm, ' ')}</h2>;

	function renderGrupo(el) {
		if (!el.nome) return;
		return (
			<Col xs={12} lg={6}>
				<Row>
					<Col xs={12} lg={12}>
						<div className={cardStyles.ram_subchart}>
							<p>{el.nome}</p>
						</div>
					</Col>
					<Col xs={6} lg={6}>
						<div className={cardStyles.ram_subchart}>
							<h3>1º Dose</h3>
							<ReactCountTo digits={0} delay={1} from={0} to={el.dose_1} speed={800}>
								{fn}
							</ReactCountTo>
						</div>
					</Col>
					<Col xs={6} lg={6}>
						<div className={cardStyles.ram_subchart}>
							<h3>2º Dose</h3>
							<ReactCountTo digits={0} delay={1} from={0} to={el.dose_2} speed={800}>
								{fn}
							</ReactCountTo>
						</div>
					</Col>
				</Row>
			</Col>
		);
	}
	return (
		<Card allowOverflow={true}>
			<div>
				{!loading ? (
					<>
						<Row className={cardStyles.ram}>{Object.values(graphData.grupos).map(renderGrupo)}</Row>
					</>
				) : (
					''
				)}
			</div>
		</Card>
	);
}
