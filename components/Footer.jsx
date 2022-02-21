import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';
import json from './../data/last-update.json';
import cardStyles from '../components/Card.module.scss';

export function Footer({ last }) {
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};
	let f = new Intl.DateTimeFormat('pt-PT', options);
	let options2 = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	let f2 = new Intl.DateTimeFormat('pt-PT', options2);
	return (
		<>
			<footer className={`${styles.footer} card-shadow`}>
				<Container className={styles.content}>
					<ul>
						<li>
							<a target="_blank" href="/api/vaccines">
								API
							</a>
						</li>

						<li>
							<a target="_blank" href="https://github.com/alicescfernandes/mapa-vacinacao-c19">
								Código-Fonte
							</a>
						</li>
						<li>
							<a href="mailto:alicescfernandes+mapa@gmail.com">Contacto</a>
						</li>
					</ul>
					<p className={styles.update}>Última Atualização: {f.format(new Date(json.date))}</p>
				</Container>
			</footer>
		</>
	);
	//
}
