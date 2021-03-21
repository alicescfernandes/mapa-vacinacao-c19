import { Container } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Notifications } from './Notifications';

export function Header() {
	return (
		<header className={`${styles.header} card-shadow`}>
			<Container className={styles.content}>
				<div>
					<h1 className={styles.logo}>vacinação COVID 19</h1>
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Notifications>
								<a className={styles.highlight} href="#">
									Notificações
								</a>
							</Notifications>
						</li>

						<li>
							<a className={styles.highlight} target="_blank" href="https://twitter.com/vacinacaocovid1">
								Twitter
							</a>
						</li>
						<li className={styles.hide_mobile}>
							<a target="_blank" href="https://covid19estamoson.gov.pt/vacinacao-covid19/">
								Fases de Vacinação
							</a>
						</li>
						<li className={styles.hide_mobile}>
							<a target="_blank" href="https://covid19.min-saude.pt/vacinacao/">
								Faço parte das listas de vacinação?
							</a>
						</li>
						<li className={styles.hide_mobile}>
							<a target="_blank" href="https://pandemiaclara.sapo.pt/plano-de-vacinacao">
								Quando posso ser vacinado?
							</a>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
}
