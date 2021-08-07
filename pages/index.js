import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VacinadosPorDia } from '../components/graphs/VacinadosPorDia';
import { Counter } from '../components/Counter';
import { NumeroTotalVacinados } from '../components/graphs/NumeroTotalVacinados';
import { isSameDay, format, subDays, compareAsc } from 'date-fns';
import { GooSpinner } from 'react-spinners-kit';
import { useData } from '../hooks/useData';
import styles from '../styles/Home.module.scss';
import { useColors } from '../hooks/useColors';

import cardStyles from '../components/Card.module.scss';
import json from './../data/last-update.json';
import { pt } from 'date-fns/locale';
import Plausible from 'plausible-tracker';
import LazyLoad from 'react-lazyload';
//data
import generic from './../data/generic.json';
import fases from './../data/fases.json';
import { Card } from '../components/Card';
import { LineVacinadosInfecoesRecuperados } from '../components/graphs/LineVacinadosInfecoesRecuperados';
import { PieVacinadosInfectadosRecuperadosObitos } from '../components/graphs/PieVacinadosInfectadosRecuperadosObitos';
// import { BarsVacinacaoArs } from '../components/graphs/BarsVacinacaoArs';
import { PieSuscetiveisProporcao } from '../components/graphs/PieSuscetiveisProporcao';
import { BarVacinasRecebidaDia } from '../components/graphs/BarVacinasRecebidaDia';
import { BarAdministradasPorFaixaEtaria } from '../components/graphs/BarAdministradasPorFaixaEtaria';
import { BarTotaisPorFaixaEtaria } from '../components/graphs/BarTotaisPorFaixaEtaria';
// import { BarArs } from '../components/graphs/BarArs';
import { PieRecebidasAdquiridas } from '../components/graphs/PieRecebidasAdquiridas';
import { PieAdministradasDoses } from '../components/graphs/PieAdministradasDoses';
import { BarVacinasRecebidaDiaAcum } from '../components/graphs/BarVacinasRecebidaDiaAcum';
import { LineVacinadosEu } from '../components/graphs/LineVacinadosEu';
import { BarVacinadosEu } from '../components/graphs/BarVacinadosEu';
import { LineAdministradasPorFaixaEtaria } from '../components/graphs/LineAdministradasPorFaixaEtaria';
import { LineRt } from '../components/graphs/LineRt';
import { RegiaoContext } from '../components/context/regiao';
import { ArsMapa } from '../components/graphs/ArsMapa';
const plausible = Plausible({
	domain: 'vacinacaocovid19.pt',
	trackLocalhost: true,
});

export default function Home() {
	let { statistics, update: updateData, ready: dataReady, versioning } = useData({ regiao: 'portugal' });
	let rawData = statistics.getRaw();
	let [selectedItem, setSelectedItem] = useState({});
	let [previousItem, setPreviousItem] = useState({});
	let beacons = {
		mid_page: false,
		end_page: false,
	};
	let [previousSelectedItem, setPreviousSelectedItem] = useState({});
	let [currentDate, setCurrentDate] = useState('');
	let [updating, setUpdating] = useState(false);
	let [last, setLast] = useState({});
	let [loaded, setLoaded] = useState(false);

	let numberFormatter = new Intl.NumberFormat('pt-PT');
	let [derivedNumbers, setDerivedNumbers] = useState({
		pessoasAVacinar: {
			prev: 0,
			current: 0,
		},
		percentagem: {
			prev: 0,
			current: 0,
		},
		percentagem_1d: {
			prev: 0,
			current: 0,
		},
	});
	//TODO: Move this to the hook
	let [doses, setDoses] = useState({
		encomendadas: generic.doses.valor,
		recebidas: 0,
		administradas: 0,
		primeiras: 0,
		segundas: 0,
		data: '',
		dataLong: '',
	});

	let { colors, colors_v2 } = useColors();
	function onSocketUpdate({ data }) {
		updateData(data.type, data.data);
		setUpdating(true);
		setTimeout(() => {
			setUpdating(false);
		}, 1000);
	}

	function updateCurrentDate(d) {
		let prev_d = subDays(d, 1);
		if (compareAsc(d, new Date('2021-03-30')) >= 1) {
			setCurrentDate(
				format(prev_d, 'dd/LL/yyyy', {
					locale: pt,
				}) + ' 23:59'
			);
		} else {
			setCurrentDate(
				format(d, 'dd/LL/yyyy', {
					locale: pt,
				}) + ' 00:00'
			);
		}

		if (isSameDay(d, new Date(1616716800000))) {
			//26 is an exception...
			setCurrentDate(
				format(d, 'dd/LL/yyyy', {
					locale: pt,
				}) + ' 13:00'
			);
		}
	}
	function onDateSelect(d) {
		let item = rawData.filter((el, elIdx) => {
			if (isSameDay(el.Data, d.getTime())) {
				if (elIdx - 1 >= 0) {
					setPreviousItem(rawData[elIdx - 1]);
				} else {
					setPreviousItem(el);
				}
				return true;
			}
		});
		if (item.length > 0 && selectedItem.Data != item[0].Data) {
			setPreviousSelectedItem(selectedItem);
			setSelectedItem(item[0]);
		}
		let prev_d = subDays(d, 1);
		if (compareAsc(d, new Date('2021-03-30')) >= 1) {
			setCurrentDate(
				format(prev_d, 'dd/LL/yyyy', {
					locale: pt,
				}) + ' 23:59'
			);
		} else {
			setCurrentDate(
				format(d, 'dd/LL/yyyy', {
					locale: pt,
				}) + ' 00:00'
			);
		}

		if (isSameDay(d, new Date(1616716800000))) {
			//26 is an exception...
			setCurrentDate(
				format(d, 'dd/LL/yyyy', {
					locale: pt,
				}) + ' 13:00'
			);
		}
	}
	useEffect(() => {
		let rawData = statistics.getRaw();
		if (rawData[rawData.length - 1]?.Data != last.Data) {
			onDateSelect(new Date(rawData[rawData.length - 1].Data));
			setLast(rawData[rawData.length - 1]);
			setPreviousItem(rawData[rawData.length - 2]);
		}
	}, [versioning]);

	useEffect(() => {
		let object = {
			pessoasAVacinar: {
				prev: derivedNumbers.pessoasAVacinar.current,
				current: numberFormatter.format(generic.populacao.valor * 0.7 - selectedItem.Inoculacao2_Ac),
			},
			percentagem: {
				prev: derivedNumbers.percentagem.current,
				current: (selectedItem.Inoculacao2_Ac / generic.populacao.valor) * 100,
			},
			percentagem_1d: {
				prev: derivedNumbers.percentagem.current,
				current: (selectedItem.Inoculacao1_Ac / generic.populacao.valor) * 100,
			},
		};
		setDerivedNumbers(object);
		if (selectedItem.Data) {
			updateCurrentDate(new Date(selectedItem.Data));
		}
	}, [selectedItem]);

	useEffect(async () => {
		if (dataReady === false) return;
		let rawData = statistics.getRaw();
		setLast(rawData[rawData.length - 1]);
		setSelectedItem(rawData[rawData.length - 1]);
		setPreviousItem(rawData[rawData.length - 2]);
		plausible.trackPageview();

		let { RECEIVED: sum, CUMUL_VAC_LEAST: least, CUMUL_VAC_COMPLETE: complete, CUMUL: total } = await statistics?.getTotalSNSRecebidas();
		setDoses({
			...doses,
			recebidas: sum,
			administradas: total,
			iniciada: least,
			completa: complete,
			data: format(new Date(json.dateSns).getTime(), 'dd/LL/yyyy', {
				locale: pt,
			}),
			dataLong: format(new Date(json.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
				locale: pt,
			}),
		});
		setLoaded(true);
	}, [dataReady]);

	function trackScrollEvents(e) {
		if (window.scrollY > 5580 && beacons.end_page === false) {
			beacons.end_page = true;
			plausible.trackEvent('end_page', { page: 'index' });
			return;
		}
		if (window.scrollY > 1657 && beacons.mid_page === false) {
			beacons.mid_page = true;
			plausible.trackEvent('mid_page', { page: 'index' });
			return;
		}
	}

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

	let renderCounterGroupV2 = () => {
		let options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		let f = new Intl.DateTimeFormat('pt-PT', options);

		return (
			<>
				<Container className="hide_mobile container-fluid" style={{ margin: '15px auto', display: 'block' }}>
					<Row>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Casos (DSSG-PT)</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f.format(new Date(json.dateCases))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Vacinas</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f.format(new Date(last.Data))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Relatórios de Vacinação</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f.format(new Date(json.dateSns))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Dados RT</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f.format(new Date(json.dateRt))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Relatórios ECDC</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f.format(new Date(json.dateEcdc))}</p>
						</Col>
						<Col>
							<p className={cardStyles.card_subtitle}>
								<strong>Dados OWID</strong>
							</p>
							<p className={cardStyles.card_subtitle}>Dados até {f.format(new Date(json.dateOwid))}</p>
						</Col>
					</Row>
				</Container>
				<Row className={styles.datepickerRow}>
					<Col style={{ textAlign: 'center' }}>
						<p className={cardStyles.card_subtitle_2}>
							Atualizado a {f.format(new Date(last.Data))} <br />
							Dados até {currentDate} para Portugal Continental
							<br />
							Percentagens calculadas com base na população de Portugal Continental
						</p>
					</Col>
				</Row>
				<Row className="counterRow">
					<Col lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								colors={colors}
								title="Doses totais"
								yesterday={previousItem?.Vacinados_Ac}
								from={previousSelectedItem?.Vacinados_Ac || selectedItem?.Vacinados_Ac * 0.98}
								to={selectedItem?.Vacinados_Ac}
							></Counter>
						</Card>
					</Col>
					<Col lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								colors={colors}
								title="1ª Inoculação e Unidose"
								yesterday={previousItem?.Inoculacao1_Ac}
								from={previousSelectedItem?.Inoculacao1_Ac || selectedItem?.Inoculacao1_Ac * 0.98}
								to={selectedItem?.Inoculacao1_Ac}
							></Counter>
						</Card>
					</Col>
					<Col lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								colors={colors}
								title="2ª Inoculação"
								yesterday={previousItem?.Inoculacao2_Ac}
								from={previousSelectedItem?.Inoculacao2_Ac || selectedItem?.Inoculacao2_Ac * 0.98}
								to={selectedItem?.Inoculacao2_Ac}
							></Counter>
						</Card>
					</Col>

					<Col id="vacin1d" lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								digits={2}
								suffix={'%'}
								colors={colors}
								title="População vacinada com pelo menos uma dose"
								from={derivedNumbers.percentagem_1d.prev}
								to={derivedNumbers.percentagem_1d.current}
							></Counter>
						</Card>
					</Col>
					<Col id="vacin2d" lg={4} xs={6}>
						<Card type={'counter'} isUpdating={updating}>
							<Counter
								digits={2}
								suffix={'%'}
								colors={colors}
								title="População totalmente vacinada"
								from={derivedNumbers.percentagem.prev}
								to={derivedNumbers.percentagem.current}
							></Counter>
						</Card>
					</Col>

					<Col id="vacinfase" lg={4} xs={6}>
						<Card type={'counter'}>
							<h2 style={{ marginBottom: '10px' }} className={cardStyles.card_title}>
								Autoagendamento (por idade)
							</h2>

							<h1
								title="Consultar notas ou o plano de informação para mais informação"
								style={{ color: colors[0] }}
								className={cardStyles.card_highlight_2}
							>
								{fases.fases[fases.fase_atual].nome} <span className={'hide_mobile'}>anos</span>
							</h1>

							<a
								rel="noopener noreferrer"
								target="_blank"
								href={fases.fases[fases.fase_atual].fontes[0].permalink}
								className={`${cardStyles.card_subtitle} ${styles.link}`}
							>
								Portal de autoagendamento
							</a>
						</Card>
					</Col>
				</Row>
			</>
		);
	};

	return (
		<RegiaoContext.Provider value={'portugal'}>
			{loaded ? (
				<>
					{renderCounterGroupV2()}
					<Container className="container-fluid app">
						<Row>
							<Col>
								<h2 className={styles.title}>Número de vacinas administradas - Portugal Continental</h2>
								<hr />
								<NumeroTotalVacinados statistics={statistics} colors={colors}></NumeroTotalVacinados>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de vacinas administradas por dia - Portugal Continental</h2>
								<h3 className={styles.subtitle}>
									A linha de stock de vacinas apresentada abaixo é uma estimativa com base nos dados do Centro Europeu de Controlo
									de Doenças. Para calcular este valor, assumimos que todas as entregas são recebidas na Segunda-Feira, mesmo que
									logisticamente não se verifique.
								</h3>
								<hr />
								<VacinadosPorDia colors={colors_v2} statistics={statistics}></VacinadosPorDia>
							</Col>
						</Row>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Percentagem da população vacinada por faixa etária</h2>
									<hr />
									<LineAdministradasPorFaixaEtaria colors={colors_v2} statistics={statistics}></LineAdministradasPorFaixaEtaria>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Evolução do programa de vacinação por ARS</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados deste 21 de Dezembro de 2021 até{' '}
										{format(new Date(json.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />
									<ArsMapa statistics={statistics} colors={colors_v2} />
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
										por região (desde 01/01/2021)
									</h2>
									<h3 className={styles.subtitle}>Nem todas as regiões apresentam dados no mesmo período temporal</h3>
									<hr />
									<LineRt colors={colors_v2} statistics={statistics}></LineRt>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Número de doses recebidas por semana</h2>
									<hr />
									<BarVacinasRecebidaDia colors={colors} statistics={statistics}></BarVacinasRecebidaDia>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Número de doses recebidas (acumulado)</h2>
									<hr />
									<BarVacinasRecebidaDiaAcum colors={colors} statistics={statistics}></BarVacinasRecebidaDiaAcum>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col lg={6} xs={12}>
									<h2 className={styles.title}>Proporção de doses recebidas relativamente às doses adquiridas</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados desde 21 de Dezembro de 2021 até{' '}
										{format(new Date(json.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />

									<PieRecebidasAdquiridas colors={colors_v2} statistics={doses}></PieRecebidasAdquiridas>
								</Col>
								<Col lg={6} xs={12}>
									<h2 className={styles.title}>Proporção de doses administradas relativamente às doses recebidas</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados desde 21 de Dezembro de 2021 até{' '}
										{format(new Date(json.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />
									<PieAdministradasDoses colors={colors_v2} statistics={doses}></PieAdministradasDoses>
								</Col>
							</Row>
						</LazyLoad>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de doses administradas por semana e faixa etária</h2>
								<hr />
								<BarAdministradasPorFaixaEtaria colors={colors_v2} statistics={statistics}></BarAdministradasPorFaixaEtaria>
							</Col>
						</Row>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Doses totais administradas por faixa etária</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados deste 21 de Dezembro de 2021 até{' '}
										{format(new Date(json.dateEcdc).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />

									<BarTotaisPorFaixaEtaria colors={colors_v2} statistics={statistics}></BarTotaisPorFaixaEtaria>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>
										Número de vacinas administradas por dia com o número de infectados e de recuperados nos últimos 30 dias
									</h2>
									<hr />
									<LineVacinadosInfecoesRecuperados colors={colors_v2} statistics={statistics}></LineVacinadosInfecoesRecuperados>
								</Col>
							</Row>
						</LazyLoad>
						<LazyLoad height={500} once>
							<Row>
								<Col lg={6} xs={12}>
									<h2 className={styles.title}>
										Proporção do número total de vacinas administradas com o número de infectados, <br />
										recuperados e óbito
									</h2>
									<hr />
									<PieVacinadosInfectadosRecuperadosObitos
										colors={colors_v2}
										statistics={statistics}
									></PieVacinadosInfectadosRecuperadosObitos>
								</Col>
								<Col lg={6} xs={12}>
									<h2 className={styles.title}>
										Proporção do número total de vacinas administradas com o número de infectados, recuperados <br /> óbitos e
										população suscetível
									</h2>
									<hr />
									<PieSuscetiveisProporcao colors={colors_v2} statistics={statistics}></PieSuscetiveisProporcao>
								</Col>
							</Row>
						</LazyLoad>
						{/* <LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Análise por ARS</h2>
									<h3 className={styles.subtitle}>
										Dados acumulados relativos à semana de{' '}
										{format(new Date(json.dateSnsStart).getTime(), "dd 'de' LLLL", {
											locale: pt,
										})}{' '}
										até{' '}
										{format(new Date(json.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
											locale: pt,
										})}
									</h3>
									<hr />

									<BarArs colors={colors_v2} statistics={statistics}></BarArs>
								</Col>
							</Row>
						</LazyLoad> */}
						<LazyLoad height={500} once>
							<Row>
								<Col>
									<h2 className={styles.title}>Número de vacinas administradas em Portugal mais Ilhas e na União Europeia</h2>
									<hr />
									<LineVacinadosEu colors={colors_v2} statistics={statistics}></LineVacinadosEu>
								</Col>
							</Row>
							<Row>
								<Col>
									<h2 className={styles.title}>
										Número de vacinas administradas por dia em Portugal mais Ilhas e na União Europeia
									</h2>
									<hr />
									<BarVacinadosEu colors={colors_v2} statistics={statistics}></BarVacinadosEu>
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
										href="https://www.pordata.pt/Municipios/Popula%C3%A7%C3%A3o+residente+total+e+por+grandes+grupos+et%C3%A1rios-390"
									>
										número de população de Portugal Continetal (dados do PORDATA)
									</a>
									. De acordo com o&nbsp;
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
										className={styles.link}
										href="https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/"
										target=":blank"
									>
										Até 25/02 foram confirmados 57 casos de reinfecção com o novo coronavírus.
									</a>
								</p>

								<p className={styles.text}>
									No início da campanha de vacinação foi anunciadas que ia haver 3 fases de vacinação, e que a primeria iria ser
									dividida em duas partes. A partir de Dezembro iriam ser administradas vacinas a Profissionais de saúde envolvidos
									na prestação de cuidados a doentes, profissionais das forças armadas, forças de segurança e serviços críticos,
									profissionais e residentes em ERPIs e instituições similares e profissionais e utentes da RNCCI. <br />A partir de
									Fevereiro iriam ser administradas vacinas a pessoas com mais de 50 ano, e com Insuficiência cardíaca, Doença
									coronária, Insuficiência renal (TFG menor que 60ml/min) ou com doença respiratória crónica. <br />
									<br />
									Para a segunda fase está previsto vacinar pessoas com 65 ou mais anos com ou sem patologias que não tenham sido
									vacinadas previamente e pessoas entre os 50 e os 64 anos com pelo menos uma das seguintes patologias descritas no
									plano de vacinação. Mais informação sobre o plano de vacinação pode ser consultada{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										href="https://www.sns.gov.pt/wp-content/uploads/2020/12/Plano_Vacinacao_COVID-19.pdf"
										target=":blank"
									>
										aqui
									</a>{' '}
									e{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										href="https://covid19.min-saude.pt/vacinacao/"
										target=":blank"
									>
										aqui
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
									Os dados apresentados são retirados do portal&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/"
									>
										Monitorização do SNS da Direção-Geral da Saúde
									</a>
									&nbsp;e do sítio&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/"
									>
										Ponto de Situação da Direção-Geral da Saúde
									</a>
									. A atualização destes dados é diária.
									<br />
									Os dados relativos à distribuição das vacinas e administração das mesmas por grupo etária são disponibilizados
									pelo{' '}
									<a rel="noopener noreferrer" className={styles.link} href="https://www.ecdc.europa.eu/en" target="_blank">
										ECDC (European Centre for Disease Prevention and Control)
									</a>
									&nbsp; e são atualizados através dos&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://covid19-vaccine-report.ecdc.europa.eu/#6_Reported_data"
									>
										relatórios publicados semanalmente.
									</a>
								</p>
								<p className={styles.text}>
									Os dados relativos à vacinação por ARS é tirada do portal sobre{' '}
									<a rel="noopener noreferrer" className={styles.link} href="https://covid19.min-saude.pt/" target="_blank">
										a COVID-19 da Direção-Geral da Saúde
									</a>
									&nbsp; e são atualizados através dos&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://covid19.min-saude.pt/relatorio-de-vacinacao/"
									>
										relatórios publicados semanalmente.
									</a>
								</p>
								<p className={styles.text}>
									O número total de vacinas adquiridas anunciado pela Direção-Geral de Saúde foi divulgado através de um comunicado
									feito no sítio do Governo de Portugal, que{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										href="https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C"
										target="_blank"
									>
										pode ser consultado aqui.
									</a>{' '}
									No dia 01 de Março de 2021, foi anunciado que o número total de vacinas adquiridas aumentou para 38 milhões de
									doses, num comunicado dirigido à imprensa que{' '}
									<a
										rel="noopener noreferrer"
										className={styles.link}
										href="https://www.rtp.pt/noticias/pais/portugal-vai-comprar-38-milhoes-de-vacinas-contra-a-covid-19_a1300900#:~:text=Portugal%20vai%20comprar%2038%20milh%C3%B5es%20de%20vacinas%20contra%20a%20Covid-19"
										target="_blank"
									>
										pode ser consultado aqui.
									</a>
									&nbsp;Como base para as contas, assumimos que Portugal adquiriu 38 milhões de doses.
								</p>
								<p className={styles.text}>
									Os dados relativos à vacinação na União Europeia são atualizados pelo&nbsp;
									<a rel="noopener noreferrer" className={styles.link} target="_blank" href="https://ourworldindata.org/">
										Our World In Data
									</a>
									&nbsp; e estão disponíveis&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv"
									>
										no repositório de Github
									</a>
									. Os dados relativos ao{' '}
									<em>
										R<sub>t</sub>{' '}
									</em>
									são atualizados pelo&nbsp;
									<a rel="noopener noreferrer" className={styles.link} target="_blank" href="https://ourworldindata.org/">
										Instituto Nacional Doutor Ricardo Jorge
									</a>
									&nbsp; e estão disponíveis&nbsp;
									<a
										rel="noopener noreferrer"
										className={styles.link}
										target="_blank"
										href="http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/"
									>
										nesta página.
									</a>
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

Home.whyDidYouRender = true;
