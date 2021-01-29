import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Footer.module.scss';
import json from './../data/last-update.json';

export function Footer() {
	let options = {
		month: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};
	let f = new Intl.DateTimeFormat('pt-PT', options);

	return (
		<footer className={`${styles.footer} card-shadow`}>
			<Container className={styles.content}>
				<p>
					<ul>
						<li>
							<a target="_blank" href="https://github.com/alicescfernandes/mapa-vacinacao-c19">
								Código-Fonte
							</a>
						</li>
						<li>
							<a href="mailto:alicescfernandes+mapa@gmail.com">Contacto</a>
						</li>
						<li>Ultima Atualização: {f.format(new Date(json.date))}</li>
					</ul>
				</p>
			</Container>
		</footer>
	);
	//
}
