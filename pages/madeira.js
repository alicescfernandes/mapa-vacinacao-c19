import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VacinadosPorDia } from '../components/graphs/VacinadosPorDia';
import { Counter } from '../components/Counter';

import { NumeroTotalVacinados } from '../components/graphs/NumeroTotalVacinados';
import { format } from 'date-fns';
import { GooSpinner } from 'react-spinners-kit';
import { useData } from '../hooks/useData';
import styles from '../styles/Home.module.scss';
import { useColors } from '../hooks/useColors';
import cardStyles from '../components/Card.module.scss';
import json from './../data/last-update.json';
import { pt } from 'date-fns/locale';
import Plausible from 'plausible-tracker';
import { useRouter } from 'next/router';

import generic from './../data/generic.json';
import { Card } from '../components/Card';
import { PieVacinadosInfectadosRecuperadosObitos } from '../components/graphs/PieVacinadosInfectadosRecuperadosObitos';
import { PieSuscetiveisProporcao } from '../components/graphs/PieSuscetiveisProporcao';
import { LineRt } from '../components/graphs/LineRt';
import { RegiaoContext } from '../components/context/regiao';
// import { RamGruposPrioritarios } from '../components/graphs/RamGruposPrioritarios';
import { RamBarAdministradasPorFaixaEtaria } from '../components/graphs/RamBarAdministradasPorFaixaEtaria';
import { RamMapa } from '../components/graphs/RamMapa';
import LazyLoad from 'react-lazyload';

const plausible = Plausible({
	domain: 'vacinacaocovid19.pt',
	trackLocalhost: true,
});

export default function Home() {
	let { statistics, ready: dataReady } = useData({ regiao: 'madeira' });
	let [selectedItem, setSelectedItem] = useState({});
	let [updating, isUpdating] = useState(false);
	let [loaded, setLoaded] = useState(false);
	let beacons = {
		mid_page: false,
		end_page: false,
	};
	const router = useRouter();
	let numberFormatter = new Intl.NumberFormat('pt-PT');
	let [derivedNumbers, setDerivedNumbers] = useState({
		pessoasAVacinar: {
			current: 0,
		},
		percentagem: {
			current: 0,
		},
		percentagem_1d: {
			current: 0,
		},
	});

	function trackScrollEvents(e) {
		if (window.scrollY > 3576 && beacons.end_page === false) {
			beacons.end_page = true;
			plausible.trackEvent('end_page', { page: 'madeira' });
			return;
		}
		if (window.scrollY > 1657 && beacons.mid_page === false) {
			beacons.mid_page = true;
			plausible.trackEvent('mid_page', { page: 'madeira' });
			return;
		}
	}

	let startDate = new Date(json.dateMadeira);
	let [first, ...restDate] = format(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
		locale: pt,
	})
		.replace('-feira', '')
		.split('');

	function onSocketUpdate() {
		router.push('/');
	}

	let { colors, colors_v2 } = useColors();

	useEffect(() => {
		// Unconventional way of doing this
		window.addEventListener('socket_update', onSocketUpdate);
		window.addEventListener('scroll', trackScrollEvents);

		let timeout = window.setInterval(async () => {
			let data = await statistics.getSesaram();
			setSelectedItem(data);
		}, 60_000);

		return function () {
			// Unconventional way of doing this
			window.removeEventListener('socket_update', onSocketUpdate);
			window.removeEventListener('scroll', trackScrollEvents);
			window.clearInterval(timeout);
		};
	}, []);

	useEffect(() => {
		let object = {
			pessoasAVacinar: {
				current: numberFormatter.format(generic.populacao_ram.valor * 0.7 - selectedItem.dose_2),
			},
			percentagem: {
				current: (selectedItem.dose_2 / generic.populacao_ram.valor) * 100,
			},
			percentagem_1d: {
				current: (selectedItem.dose_1 / generic.populacao_ram.valor) * 100,
			},
		};
		setDerivedNumbers(object);
	}, [selectedItem]);

	useEffect(async () => {
		if (dataReady === false) return;
		let rawData = await statistics.getArquipelagoData();
		plausible.trackPageview();
		let data = await statistics.getSesaram();
		setSelectedItem(data);

		/* let { sum } = statistics?.getDosesRecebidasAcum();
		sum = sum.reverse()[0];
		let item = rawData.filter((el) => {
			return isSameDay(el.Data, new Date(json.dateSnsStart));
		});
		 */

		setLoaded(true);
	}, [dataReady]);

	//TODO: Share this markup
	let renderCounterGroupV2 = () => {
		let options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		let f = new Intl.DateTimeFormat('pt-PT', options);

		let horas = new Intl.DateTimeFormat('pt-PT', {
			hour: 'numeric',
			minute: 'numeric',
		});

		return (
			<>
				<Row className={styles.datepickerRow}>
					<Col style={{ textAlign: 'center' }}>
						<p className={cardStyles.card_subtitle_2}>
							Atualizado a {f.format(new Date(selectedItem.data))} às {horas.format(new Date(selectedItem.data))} <br />
						</p>
					</Col>
				</Row>
				<Row className="counterRow">
					<Col lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								tempo={'na semana anterior'}
								colors={colors}
								title="Doses totais"
								from={selectedItem?.total * 0.98}
								to={selectedItem?.total}
								yesterday={selectedItem?.total}
							></Counter>
						</Card>
					</Col>
					<Col lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								tempo={'na semana anterior'}
								colors={colors}
								title="Doses  - 1ª Inoculação"
								from={selectedItem?.dose_1 * 0.98}
								yesterday={selectedItem?.dose_1}
								to={selectedItem?.dose_1}
							></Counter>
						</Card>
					</Col>
					<Col lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								tempo={'na semana anterior'}
								colors={colors}
								title="Doses - 2ª Inoculação"
								from={selectedItem?.dose_2 * 0.98}
								to={selectedItem?.dose_2}
								yesterday={selectedItem?.dose_2}
							></Counter>
						</Card>
					</Col>

					<Col id="vacin1d" lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								tempo={'na semana anterior'}
								digits={2}
								suffix={'%'}
								colors={colors}
								title="População vacinada com pelo menos uma dose"
								from={0}
								to={derivedNumbers.percentagem_1d.current}
							></Counter>
						</Card>
					</Col>
					<Col id="vacin2d" lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								tempo={'na semana anterior'}
								digits={2}
								suffix={'%'}
								colors={colors}
								title="População totalmente vacinada"
								from={0}
								to={derivedNumbers.percentagem.current}
							></Counter>
						</Card>
					</Col>

					<Col id="vacinfase" lg={4} xs={6}>
						<Card type={'counter'}>
							<h2 style={{ marginBottom: '10px' }} className={cardStyles.card_title}>
								Plano de Vacinação
							</h2>

							<h1
								title="Consultar notas ou o plano de informação para mais informação"
								style={{ color: colors[0] }}
								className={cardStyles.card_highlight_2}
							>
								N/A
							</h1>

							<a target="_blank" href={'https://covidmadeira.pt/vacinacao/'} className={`${cardStyles.card_subtitle} ${styles.link}`}>
								+ info
							</a>
						</Card>
					</Col>
				</Row>
			</>
		);
	};

	return (
		<RegiaoContext.Provider value={'madeira'}>
			{loaded ? (
				<>
					{renderCounterGroupV2()}

					{/* <Row>
							<Col>
								<h2 className={styles.title}>Vacinação por grupos prioritários</h2>
								<h3 className={styles.subtitle}>Dados acumulados desde 31 de Dezembro de 2020 até 11 de Abril de 2021</h3>
								<hr />
								<RamGruposPrioritarios colors={colors_v2} statistics={statistics}></RamGruposPrioritarios>
							</Col>
						</Row> */}
					<Container className="container-fluid app">
						<Row>
							<Col>
								<h2 className={styles.title}>Número de vacinas administradas</h2>
								<hr />
								<NumeroTotalVacinados statistics={statistics} colors={colors}></NumeroTotalVacinados>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de vacinas administradas por Semana</h2>
								<hr />
								<VacinadosPorDia colors={colors_v2} statistics={statistics}></VacinadosPorDia>
							</Col>
						</Row>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Percentagem da população vacinada por faixa etária</h2>
									<hr />
									<RamBarAdministradasPorFaixaEtaria colors={colors_v2} statistics={statistics}></RamBarAdministradasPorFaixaEtaria>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} offset={300} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Vacinação por região</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados desde 31 de Dezembro de 2020 até{' '}
										{format(new Date(json.dateMadeira).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
										.
									</h3>
									<hr />
									<RamMapa colors={colors_v2} statistics={statistics}></RamMapa>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>
										<em>
											R<sub>t</sub>
										</em>{' '}
										na Região Autónoma da Madeira (desde 01/01/2021)
									</h2>
									<hr />
									<LineRt regiao={'madeira'} colors={colors_v2} statistics={statistics}></LineRt>
								</Col>
							</Row>
						</LazyLoad>

						{/*	<Row>
							<Col>
								<h2 className={styles.title}>
									Número de vacinas administradas por semana com o número de infectados e de recuperados nas últimas 5 semanas
								</h2>
								<hr />
								<LineVacinadosInfecoesRecuperados colors={colors_v2} statistics={statistics}></LineVacinadosInfecoesRecuperados>
							</Col>
					</Row>*/}
						<LazyLoad height={500} once>
							<Row>
								<Col lg={6} xs={12}>
									<h2 className={styles.title}>
										Proporção do número total de vacinas administradas com o número de infectados, recuperados e óbitos
									</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados desde 31 de Dezembro de 2020 até{' '}
										{format(new Date(json.dateMadeira), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
										, à exceção das doses administradas, cujo os ultimos dados disponíveis são de{' '}
										{format(new Date(json.dateMadeiraCases), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />
									<PieVacinadosInfectadosRecuperadosObitos
										colors={colors_v2}
										statistics={statistics}
									></PieVacinadosInfectadosRecuperadosObitos>
								</Col>
								<Col lg={6} xs={12}>
									<h2 className={styles.title}>
										Proporção do número total de vacinas administradas com o número de infectados, recuperados e óbitos e
										população suscetível
									</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados desde 31 de Dezembro de 2020 até{' '}
										{format(new Date(json.dateMadeira).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
										, à exceção das doses administradas, cujo os ultimos dados disponíveis são de{' '}
										{format(new Date(json.dateMadeiraCases).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />
									<PieSuscetiveisProporcao colors={colors_v2} statistics={statistics}></PieSuscetiveisProporcao>
								</Col>
							</Row>
						</LazyLoad>

						<Row>
							<Col xs={12} className={styles.sources_block}>
								<h2 className={styles.title}>Notas</h2>
								<p className={styles.text}>
									A percentagem de população vacinada foi calculada com base no número total de segundas doses administradas e com o
									&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html"
									>
										número de população da Região Autónoma da Madeira (dados da Direção Regional de Estatística da Madeira)
									</a>
									. Os{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120"
									>
										dados de cada região da Madeira
									</a>{' '}
									são dados provisórios de até 31/12 e foram retirados do PORDATA De acordo com o&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/"
									>
										Instituto Ricardo Jorge, será preciso imunizar entre 60% a 70% da população para se atingir a imunidade de
										grupo.
									</a>{' '}
									Os valores apresentados aqui foram calculados com uma percentagem de 70%.
								</p>
								<p className={styles.text}>
									A população suscetível a infeção foi calculada com base na população total menos a soma do número de óbitos, casos
									ativos, população infectada, vacinada e recuperada assumindo que casos de reinfeções são raros.{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										href="https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/"
										target=":blank"
									>
										Até 25/02 foram confirmados 57 casos de reinfecção com o novo coronavírus.
									</a>
								</p>

								{/*	<p className={styles.text}>
							A média de evolução de casos da União Europeia foi calculada com os números reportados por cada país, mesmo que alguns países não tenham ainda reportado para o dia de hoje. No gráfico de o numero total de vacinas administradas por dia de cada só são mostrados os dados que
							foram reportados por cada país, sendo que nem todos os paises reportam em simultâneo os dados.
						</p>*/}
							</Col>

							<Col xs={12} className={styles.sources_block}>
								<h2 className={styles.title}>Fontes</h2>
								<p className={styles.text}>
									Os dados apresentados são retirados dos boletins publicados pela&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://covidmadeira.pt/boletim-vacinacao-covid-19/"
									>
										Direção Regional de Saúde
									</a>
									. A atualização destes dados é semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus são
									retirados dos{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://covidmadeira.pt/ponto-de-situacao/"
									>
										pontos de situação
									</a>{' '}
									publicados pela mesma entidade
								</p>
							</Col>
						</Row>
					</Container>
				</>
			) : (
				<div style={{ display: 'block', width: 50, margin: 'auto ' }}>
					<GooSpinner size={50} color={colors_v2.main} />
				</div>
			)}
		</RegiaoContext.Provider>
	);
}
