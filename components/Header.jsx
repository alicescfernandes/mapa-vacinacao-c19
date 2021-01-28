import { Container } from 'react-bootstrap';

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
						<li>Gráficos</li>
						<li>Fases de Vacinação</li>
						<li>Quando posso ser vacinado?</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
	//
}
