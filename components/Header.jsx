import { Container } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Notifications } from './Notifications';

export function Header() {
	console.log(styles);
	return (
		<>
			<header className={`${styles.header} card-shadow`}>
				<Container className={styles.content}>
					<div className={styles.logo}>
						<h1>vacinação COVID 19</h1>
						<p>Dados atualizados diariamente entre as 13h e as 14h</p>
					</div>
					<nav className={`${styles.nav}  ${styles.hide_mobile}`}>
						<ul>
							<li>
								<Notifications>
									<a className={`${styles.highlight}`} href="#">
										Notificações
									</a>
								</Notifications>
							</li>

							<li>
								<a className={`${styles.highlight}`} target="_blank" href="https://twitter.com/vacinacaocovid1">
									Twitter
								</a>
							</li>
							<li className={styles.hide_mobile}>
								<a target="_blank" href="https://covid19estamoson.gov.pt/vacinacao-covid19/">
									Portugal
								</a>
							</li>
							<li className={styles.hide_mobile}>
								<a target="_blank" href="https://covid19.min-saude.pt/vacinacao/">
									Madeira
								</a>
							</li>
						</ul>
					</nav>
				</Container>
			</header>
			<div className={`${styles.submenu} ${styles.hide_mobile}`}>
				<Container className={styles.content}>
					<nav className={styles.nav}>
						<ul>
							<li>
								<a target="_blank" href="https://covid19estamoson.gov.pt/vacinacao-covid19/">
									Fases de Vacinação
								</a>
							</li>
							<li>
								<a target="_blank" href="https://covid19.min-saude.pt/vacinacao/">
									Faço parte das listas de vacinação?
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
			</div>
		</>
	);
}
