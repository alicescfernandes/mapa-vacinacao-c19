import { Col, Container, Row } from 'react-bootstrap';
import { Counter } from '../components/Counter';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<Header></Header>

			<Container>
				<Row>
					<Col>
						<p>fases</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
