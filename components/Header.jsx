import Link from 'next/link';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { RegiaoContext } from './context/regiao';
import styles from './Header.module.scss';
import { Notifications } from './Notifications';

export function Header() {
	let regiao = useContext(RegiaoContext);
	let regioes = {
		continente: {
			nome: '',
			tagline: 'Dados atualizados diariamente entre as 13h e as 14h',
		},
		madeira: {
			nome: ' - Madeira',
			tagline: 'Dados atualizados semanalmente',
		},
		acores: {
			nome: ' - Açores',
			tagline: '',
		},
	};
	return (
		<>
			<header className={`${styles.header} card-shadow`}>
				<Container className={styles.content}>
					<div className={styles.logo}>
						<h1>vacinação COVID 19 {regioes[regiao].nome} </h1>
						<p>{regioes[regiao].tagline}</p>
					</div>
					<nav className={`${styles.nav}  ${styles.hide_mobile}`}>
						<ul>
							<li>
								<Link href="/">Portugal</Link>
							</li>
							<li>
								<Link href="/madeira">Madeira</Link>
							</li>
							<li>
								<Notifications>
									<a href="#">Notificações</a>
								</Notifications>
							</li>

							<li>
								<a target="_blank" href="https://twitter.com/vacinacaocovid1">
									Twitter
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
							{regiao === 'continente' && (
								<>
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
									<li>
										<a target="_blank" href="https://covid19.min-saude.pt/relatorio-de-vacinacao/">
											Relatórios de Vacinação
										</a>
									</li>
									<li>
										<a target="_blank" href="https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/">
											Ponto de Situação
										</a>
									</li>
								</>
							)}

							{regiao === 'madeira' && (
								<>
									<li>
										<a target="_blank" href="https://covidmadeira.pt/">
											Sitío oficial - Direção Regional de Saúde
										</a>
									</li>
									<li>
										<a target="_blank" href="https://covidmadeira.pt/ponto-de-situacao/">
											Ponto de Situação
										</a>
									</li>
								</>
							)}
						</ul>
					</nav>
				</Container>
			</div>
		</>
	);
}
