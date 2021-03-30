import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VacinadosPorDia } from '../components/graphs/VacinadosPorDia';
import { Counter } from '../components/Counter';

import { NumeroTotalVacinados } from '../components/graphs/NumeroTotalVacinados';
import { isSameDay, format, parseISO } from 'date-fns';
import { GooSpinner } from 'react-spinners-kit';
import { useData } from '../hooks/useData';
import styles from '../styles/Home.module.scss';
import { useColors } from '../hooks/useColors';
import { Metatags } from '../components/MetaTags';
import cardStyles from '../components/Card.module.scss';
import json from './../data/last-update.json';
import { pt } from 'date-fns/locale';
import Plausible from 'plausible-tracker';
import { useRouter } from 'next/router';
//data
import generic from './../data/generic.json';
import { Card } from '../components/Card';
import { PieVacinadosInfectadosRecuperadosObitos } from '../components/graphs/PieVacinadosInfectadosRecuperadosObitos';
import { PieSuscetiveisProporcao } from '../components/graphs/PieSuscetiveisProporcao';
import { formatNumber, perHundred } from '../utils';
import { LineRt } from '../components/graphs/LineRt';
import { RegiaoContext } from '../components/context/regiao';
import { RamGruposPrioritarios } from '../components/graphs/RamGruposPrioritarios';
import { RamBarAdministradasPorFaixaEtaria } from '../components/graphs/RamBarAdministradasPorFaixaEtaria';
import { RamMapa } from '../components/graphs/RamMapa';
import LazyLoad from 'react-lazyload';

const plausible = Plausible({
	domain: 'vacinacaocovid19.pt',
	trackLocalhost: true,
});

export default function Home() {
	let { statistics, update: updateData, ready: dataReady, versioning } = useData({ regiao: 'madeira' });
	let [selectedItem, setSelectedItem] = useState({});
	let [previousItem, setPreviousItem] = useState({});
	let [updating, setUpdating] = useState(false);
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
	});

	let [doses, setDoses] = useState({
		encomendadas: generic.doses.valor,
		recebidas: 0,
		administradas: 0,
		primeiras: 0,
		segundas: 0,
		data: '',
		dataLong: '',
	});

	function trackScrollEvents(e) {
		if (window.scrollY > 3576 && beacons.end_page === false) {
			beacons.end_page = true;
			plausible.trackEvent('end_page');
			return;
		}
		if (window.scrollY > 1657 && beacons.mid_page === false) {
			beacons.mid_page = true;
			plausible.trackEvent('mid_page');
			return;
		}
	}

	let startDate = new Date(json.dateMadeira);
	let [first, ...restDate] = format(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
		locale: pt,
	})
		.replace('-feira', '')
		.split('');

	let d = [first.toUpperCase(), ...restDate].join('');

	1; // Send to main route
	function onSocketUpdate() {
		router.push('/');
	}

	let { colors, colors_v2, setColors } = useColors();

	useEffect(() => {
		// Unconventional way of doing this
		window.addEventListener('socket_update', onSocketUpdate);
		window.addEventListener('scroll', trackScrollEvents);

		return function () {
			// Unconventional way of doing this
			window.removeEventListener('socket_update', onSocketUpdate);
			window.removeEventListener('scroll', trackScrollEvents);
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
		};
		setDerivedNumbers(object);
	}, [selectedItem]);

	useEffect(async () => {
		if (dataReady === false) return;
		let rawData = await statistics.getMadeiraData();
		plausible.trackPageview();
		let lastItem = rawData[rawData.length - 1];

		setSelectedItem(rawData[rawData.length - 1]);
		setPreviousItem(rawData[rawData.length - 2]);

		/* let { sum } = statistics?.getDosesRecebidasAcum();
		sum = sum.reverse()[0];
		let item = rawData.filter((el) => {
			return isSameDay(el.Data, new Date(json.dateSnsStart));
		});
		 */

		setDoses({
			recebidas: 0,
			administradas: lastItem.total,
			primeiras: lastItem.dose_1,
			segundas: lastItem.dose_2,
			data: '',
			dataLong: '',
		});
		setLoaded(true);
	}, [dataReady]);
	return (
		<RegiaoContext.Provider value={'madeira'}>
			<Container className="container-fluid app">
				{loaded ? (
					<>
						<Row>
							<Col>
								<h2 className={styles.datepicker_static}> {d} </h2>
							</Col>
						</Row>
						<Row className="counterRow">
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										colors={colors}
										tempo={'na semana'}
										title="Número total de vacinas administradas"
										yesterday={previousItem?.total}
										from={previousItem?.total}
										to={selectedItem?.total}
									></Counter>
								</Card>
							</Col>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										colors={colors}
										tempo={'na semana'}
										title="Número de doses administradas - 1ª Dose"
										yesterday={previousItem?.dose_1}
										from={previousItem?.dose_1}
										to={selectedItem?.dose_1}
									></Counter>
									<p style={{ marginTop: '10px' }} class={cardStyles.card_subtitle}>
										{perHundred(selectedItem?.dose_1, generic.populacao_ram.valor).toFixed(2)} doses administradas por cada 100
										pessoas
										<br />
										{formatNumber(selectedItem?.dose_1 - selectedItem?.dose_2)} pessoas inoculadas com a 1ª dose
									</p>
								</Card>
							</Col>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										colors={colors}
										tempo={'na 	semana'}
										title="Número de doses administradas - 2ª Dose"
										yesterday={previousItem?.dose_2}
										from={previousItem?.dose_2}
										to={selectedItem?.dose_2}
									></Counter>

									<p style={{ marginTop: '10px' }} class={cardStyles.card_subtitle}>
										{perHundred(selectedItem?.dose_2, generic.populacao_ram.valor).toFixed(2)} doses administradas por cada 100
										pessoas
										<br />
										{formatNumber(selectedItem?.dose_2)} pessoas inoculadas com a 2ª dose
									</p>
								</Card>
							</Col>
						</Row>
						<Row className="counterRow">
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										ps="Percentagem calculada com base no número total de segundas doses administradas"
										digits={2}
										suffix={'%'}
										colors={colors}
										title="Percentagem de população inoculada com a 2ª dose "
										from={0}
										to={derivedNumbers.percentagem.current}
									></Counter>
								</Card>
							</Col>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										ps={`Ou seja, será preciso vacinar totalmente mais ${derivedNumbers.pessoasAVacinar.current} pessoas para se atingir imuninade de grupo`}
										digits={2}
										suffix={'%'}
										colors={colors}
										title="Percentagem para atingir imunidade de grupo"
										from={0}
										to={70 - derivedNumbers.percentagem.current}
									></Counter>
								</Card>
							</Col>
							<Col lg={4} xs={12}>
								<Card>
									<h2 style={{ marginBottom: '10px' }} className={cardStyles.card_title}>
										Plano de Vacinação
									</h2>
									<p
										title="Consultar notas ou o plano de informação para mais informação"
										style={{ margin: '5px 0px' }}
										class={cardStyles.card_subtitle}
									>
										O plano de vacinação aplicado pela Madeira não divulga números a atingir.
									</p>

									<a
										target="_blank"
										href={'https://covidmadeira.pt/vacinacao/'}
										className={`${cardStyles.card_subtitle} ${styles.link}`}
									>
										Consultar plano de vacinação
									</a>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de vacinas administradas</h2>
								<hr />
								<NumeroTotalVacinados statistics={statistics} colors={colors}></NumeroTotalVacinados>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de vacinas administradas</h2>
								<hr />
								<VacinadosPorDia colors={colors} statistics={statistics}></VacinadosPorDia>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Vacinação por grupos prioritários</h2>
								<hr />
								<RamGruposPrioritarios colors={colors_v2} statistics={statistics}></RamGruposPrioritarios>
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
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Vacinação por região</h2>
									<h3 className={styles.subtitle}>Dados acumulados desde 31 de Dezembro de 2021 até 14 de março de 20210.</h3>
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
										na Região Autónoma da Madeira
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
										Dados acumulados desde 31 de Dezembro de 2021 até{' '}
										{format(new Date(json.dateMadeiraCases), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
										, à exceção das doses administradas, cujo os ultimos dados disponíveis são de{' '}
										{format(new Date(json.dateMadeira), "dd 'de' LLLL 'de' yyyy", {
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
										Dados acumulados desde 31 de Dezembro de 2021 até{' '}
										{format(new Date(json.dateMadeiraCases).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
										, à exceção das doses administradas, cujo os ultimos dados disponíveis são de{' '}
										{format(new Date(json.dateMadeira).getTime(), "dd 'de' LLLL 'de' yyyy", {
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
										className={styles.link}
										target="_blank"
										href="https://estatistica.madeira.gov.pt/download-now/social/popcondsoc-pt/demografia-pt/demografia-emfoco-pt/send/61-demografia-emfoco/12815-em-foco-2019.html"
									>
										número de população da Região Autónoma da Madeira (dados da Direção Regional de Estatística da Madeira)
									</a>
									. Os{' '}
									<a
										className={styles.link}
										target="_blank"
										href="https://www.pordata.pt/Municipios/Popula%c3%a7%c3%a3o+residente++estimativas+a+31+de+Dezembro-120"
									>
										dados de cada região da Madeira
									</a>{' '}
									são dados provisórios de até 31/12 e foram retirados do PORDATA De acordo com o&nbsp;
									<a
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
									<a className={styles.link} target="_blank" href="https://covidmadeira.pt/boletim-vacinacao-covid-19/">
										Direção Regional de Saúde
									</a>
									. A atualização destes dados é semanal. Os dados relativos aos casos confirmados pelo o novo coronavirus são
									retirados dos{' '}
									<a className={styles.link} target="_blank" href="https://covidmadeira.pt/ponto-de-situacao/">
										pontos de situação
									</a>{' '}
									publicados pela mesma entidade
								</p>
							</Col>
						</Row>
					</>
				) : (
					<div style={{ display: 'block', width: 50, margin: 'auto ' }}>
						<GooSpinner size={50} color={colors_v2.main} />
					</div>
				)}
			</Container>
		</RegiaoContext.Provider>
	);
}
