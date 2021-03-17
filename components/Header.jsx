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
						<li>
							<a target="_blank" href="https://covid19estamoson.gov.pt/vacinacao-covid19/">
								Fases de Vacinação
							</a>
						</li>
						<li>
							<a target="_blank" href="https://servicos.min-saude.pt/covid19/Login?ReturnUrl=%2fcovid19%2f%3fctx%3d6&ctx=6">
								Faço parte da lista da 1º fase de vacinação?
							</a>
						</li>
						<li>
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
