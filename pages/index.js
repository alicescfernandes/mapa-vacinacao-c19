import { Col, Container, Row } from 'react-bootstrap';

import { Card } from '../components/Card';

export default function Home() {
	return (
		<>
			<Container className="container-fluid app">
				<Row className="counterRow">
					<Col>
						<Card>
							<p>Este projeto já não está a ser mantido, e já não vai ser mais atualizado</p>
							<p>A quem acompanhou e participou, obrigado.</p>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
