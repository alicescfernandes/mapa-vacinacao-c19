import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';
import json from './../data/last-update.json';

export function Footer() {
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};
	let f = new Intl.DateTimeFormat('pt-PT', options);
	return (
		<>
			<script src="/leaflet.js"></script>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/pusher/7.0.3/pusher.min.js"
				integrity="sha512-XVnzJolpkbYuMeISFQk6sQIkn3iYUbMX3f0STFUvT6f4+MZR6RJvlM5JFA2ritAN3hn+C0Bkckx2/+lCoJl3yg=="
				crossOrigin="anonymous"
			></script>
			{/*<script async defer data-domain="vacinacaocovid19.pt" src="https://plausible.io/js/plausible.js"></script>*/}
			<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
			<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js"></script>
			<footer className={`${styles.footer} card-shadow`}>
				<Container className={styles.content}>
					<ul>
						<li>
							<a target="_blank" href="https://twitter.com/vacinacaocovid1">
								Twitter
							</a>
						</li>
						<li>
							<a target="_blank" href="/api/vaccines">
								API
							</a>
						</li>

						<li>
							<a target="_blank" href="https://github.com/alicescfernandes/mapa-vacinacao-c19#embeds">
								Embeds
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
		</>
	);
	//
}
