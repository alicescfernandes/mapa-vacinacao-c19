import { Col, Container, Row } from 'react-bootstrap';
import { Counter } from '../components/Counter';
import { Header } from '../components/Header';
import { LineChart } from '../components/LineChart';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<Header></Header>

			<Container>
				<Row>
					<Col>
						<p>date counter</p>
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
			</Container>
		</>
	);
}
