import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={`${styles.header} card-shadow`}>
			<Container className={styles.content}>
				<div>
					<h1 className={styles.logo}>Plano de vacinação - COVID 19</h1>
				</div>
				<nav>
					<ul>
						<li>
							<Link href="/">Gráficos</Link>
						</li>
						<li>
							<a target="_blank" href="https://covid19estamoson.gov.pt/vacinacao-covid19/">
								Fases de Vacinação
							</a>
						</li>
						<li>
							<a target="_blank" href="https://pandemiaclara.sapo.pt/plano-de-vacinacao/">
								Quando posso ser vacinado?
							</a>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
	//
}
