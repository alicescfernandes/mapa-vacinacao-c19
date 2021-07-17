import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { RegiaoContext } from './context/regiao';
import styles from './Header.module.scss';
import { Notifications } from './Notifications';
import Bell from '../assets/bell.svg';
import Twitter from '../assets/twitter.svg';
import Plus from '../assets/plus.svg';

export function Header() {
	let [supportsNotifications, setSupportsNotifications] = useState(false);
	let [isSidebarOpen, setIsSidebarOpen] = useState(true);
	let regiao = useContext(RegiaoContext);
	let regioes = {
		portugal: {
			nome: '',
			tagline: 'Dados atualizados diariamente entre as 13h e as 14h',
		},
		madeira: {
			nome: ' - Madeira',
			tagline: 'Dados atualizados semanalmente',
		},
		acores: {
			nome: ' - Açores',
			tagline: 'Dados atualizados semanalmente',
		},
	};

	useEffect(() => {
		setSupportsNotifications('Notification' in window);
	}, []);

	function renderLocalInfo() {
		return (
			<ul>
				{regiao === 'portugal' && (
					<>
						<li>
							<a target="_blank" href="https://covid19.min-saude.pt/vacinacao/">
								<strong>Quando posso ser vacinado?</strong>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://pandemiaclara.sapo.pt/">
								<strong>Medidas de Desconfinamento</strong>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://quadradinhodocosta.pt/">
								<strong>Matriz de Risco</strong>
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
				{regiao === 'acores' && (
					<>
						<li>
							<a target="_blank" href="https://destinoseguro.azores.gov.pt/">
								Portal COVID-19 - Governo dos Açores
							</a>
						</li>
						<li>
							<a target="_blank" href="https://vacinacao-covid19.azores.gov.pt/">
								Portal Vacinação - Governo dos Açores
							</a>
						</li>
					</>
				)}
			</ul>
		);
	}

	return (
		<>
			<header className={`${styles.header} card-shadow`}>
				<Container className={styles.content}>
					<div className={styles.logo}>
						<h1>vacinação COVID 19 {regioes[regiao].nome} </h1>
						<p>{regioes[regiao].tagline}</p>
					</div>
					<nav className={`${styles.nav} ${styles.hide_mobile}`}>
						<ul>
							<li>
								<Link href="/">
									<a className={regiao === 'portugal' ? styles.highlight : ''}>Portugal</a>
								</Link>
							</li>
							<li>
								<Link href="/madeira">
									<a className={regiao === 'madeira' ? styles.highlight : ''}>Madeira</a>
								</Link>
							</li>
							<li>
								<Link href="/acores">
									<a className={regiao === 'acores' ? styles.highlight : ''}>Açores</a>
								</Link>
							</li>

							{supportsNotifications && (
								<li>
									<Notifications>
										<a href="#">Notificações</a>
									</Notifications>
								</li>
							)}
							<li>
								<a target="_blank" href="https://twitter.com/vacinacaocovid1">
									Twitter
								</a>
							</li>
						</ul>
					</nav>
				</Container>
			</header>
			<header className={`${styles.header} ${styles.header_mobile} card-shadow`}>
				<Container className={styles.content}>
					<nav className={`${styles.nav}  ${styles.hide_mobile}`}>
						<ul>
							<li>
								<span
									onClick={() => {
										setIsSidebarOpen(true);
									}}
								>
									<Plus width={25} height={25}></Plus>
									<span>Mais</span>
								</span>
							</li>
							{supportsNotifications && (
								<li>
									<Notifications>
										<a>
											<span>
												<Bell width={21} height={21}></Bell>
											</span>
										</a>
									</Notifications>
									<span>Notificações</span>
								</li>
							)}{' '}
							<li>
								{' '}
								<span>
									<Twitter width={25} height={25}></Twitter>
									<span>Twitter</span>
								</span>
							</li>
						</ul>
					</nav>
				</Container>
			</header>

			<div className={`${styles.submenu}`}>
				<Container className={styles.content}>
					<nav className={styles.nav}>{renderLocalInfo()}</nav>
				</Container>
			</div>
			<aside
				onClick={() => {
					setIsSidebarOpen(false);
				}}
				className={`${styles.sidemenu} ${isSidebarOpen ? styles.sidemenu_visible : ''}`}
			>
				<span className={styles.sidemenu_close}>✕</span>
				<div className={styles.sidemenu_container}>
					<h1>Mais dados</h1>
					<ul>
						<li>
							<Link href="/">
								<a className={regiao === 'portugal' ? styles.highlight : ''}>Portugal</a>
							</Link>
						</li>
						<li>
							<Link href="/madeira">
								<a className={regiao === 'madeira' ? styles.highlight : ''}>Madeira</a>
							</Link>
						</li>

						<li>
							<Link href="/acores">
								<a className={regiao === 'acores' ? styles.highlight : ''}>Açores</a>
							</Link>
						</li>
					</ul>
					<h1>Mais informação</h1>
					{renderLocalInfo()}
				</div>
			</aside>
		</>
	);
}
