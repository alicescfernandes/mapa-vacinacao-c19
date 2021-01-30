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
					<li>
						<a target="_blank" href="https://plausible.io/vacinacaocovid19.pt">
							Analytics
						</a>
					</li>
				</ul>
				<p className={styles.update}>Última Atualização: {f.format(new Date(json.date))}</p>
			</Container>
		</footer>
	);
	//
}
