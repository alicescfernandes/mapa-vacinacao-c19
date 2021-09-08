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
			<div className={`${styles.footer} hide_mobile card-shadow`}>
				<Container className={`hide_mobile`} style={{ padding: '15px', display: 'block' }}>
					<Row>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Casos (DSSG-PT)</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f2.format(new Date(json.dateCases))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Vacina (DSSG-PT)s</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f2.format(new Date(json.dateVaccines))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Relatórios de Vacinação (DSSG-PT)</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f2.format(new Date(json.dateSns))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Dados RT</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f2.format(new Date(json.dateRt))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Relatórios ECDC</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f2.format(new Date(json.dateEcdc))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Dados OWID</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f2.format(new Date(json.dateOwid))}</p>
						</Col>
					</Row>
				</Container>
			</div>

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
