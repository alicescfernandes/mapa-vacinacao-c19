import { Col, Container, Row } from 'react-bootstrap';
import { Counter } from '../components/Counter';
import { DatePickerButton } from '../components/DatePickerButton';
import { Header } from '../components/Header';
import { LineChart } from '../components/LineChart';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<Header></Header>

			<Container>
				<Row className={styles.datepickerRow}>
					<Col style={{ textAlign: 'center' }}>
						<DatePickerButton minDate={1609027200000} maxDate={1611792000000} />
					</Col>
				</Row>

				<Row>
					<Col lg={4} xs={12}>
						<Counter title="Numero de vacinados" subtitle="Vacina Pfizer/BioNTech" to={244}></Counter>
					</Col>
					<Col lg={4} xs={12}>
						<Counter title="Numero de vacinados" subtitle="Vacina Pfizer/BioNTech" to={244}></Counter>
					</Col>
					<Col lg={4} xs={12}>
						<Counter title="Numero de vacinados" subtitle="Vacina Pfizer/BioNTech" to={244}></Counter>
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
