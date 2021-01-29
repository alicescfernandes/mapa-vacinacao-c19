import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Counter } from '../components/Counter';
import { DatePickerButton } from '../components/DatePickerButton';
import { Header } from '../components/Header';
import { LineChart } from '../components/LineChart';
import { useData } from '../hooks/useData';
import styles from '../styles/Home.module.scss';
export default function Home() {
	let { statistics } = useData();
	let [last, setLast] = useState({});
	let [first, setFirst] = useState({});
	let [loaded, setLoaded] = useState(false);
	let rawData = statistics.getRaw();
	// console.log(JSON.parse(JSON.stringify(rawData)));
	useEffect(() => {
		setLast(rawData[rawData.length - 1]);
		setFirst(rawData[0]);
		setLoaded(true);
	}, []);
	return (
		<>
			<Header></Header>

			<Container>
				<Row className={styles.datepickerRow}>
					<Col style={{ textAlign: 'center' }}>{loaded ? <DatePickerButton onDateSelect={(d) => console.log(d)} minDate={first.Data} maxDate={last.Data} /> : ''}</Col>
				</Row>

				<Row>
					<Col lg={4} xs={12}>
						<Counter title="Numero total de vacinados" subtitle="Vacina Pfizer/BioNTech" to={last?.Vacinados_Ac}></Counter>
					</Col>
					<Col lg={4} xs={12}>
						<Counter title="Numero de vacinados - 1ª Dose" subtitle="Vacina Pfizer/BioNTech" to={last.Inoculacao2_Ac}></Counter>
					</Col>
					<Col lg={4} xs={12}>
						<Counter title="Numero de vacinados - 2ª Dose" subtitle="Vacina Pfizer/BioNTech" to={last.Inoculacao1_Ac}></Counter>
					</Col>
				</Row>

				<Row>
					<Col>
						<LineChart></LineChart>
					</Col>
				</Row>
				<script async defer data-domain="vacinacaocovid19.pt" src="https://plausible.io/js/plausible.js"></script>
			</Container>
		</>
	);
}
