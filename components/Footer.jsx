import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Footer.module.scss';

export function Footer() {
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
						<li>Ultima Atualização:</li>
					</ul>
				</p>
			</Container>
		</footer>
	);
	//
}
