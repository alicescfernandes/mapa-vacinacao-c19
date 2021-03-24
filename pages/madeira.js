import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VacinadosPorDia } from '../components/graphs/VacinadosPorDia';
import { Counter } from '../components/Counter';
import { DatePickerButton } from '../components/DatePickerButton';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
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

//data
import generic from './../data/generic.json';
import fases from './../data/fases.json';
import { Card } from '../components/Card';
import { LineVacinadosInfecoesRecuperados } from '../components/graphs/LineVacinadosInfecoesRecuperados';
import { PieVacinadosInfectadosRecuperadosObitos } from '../components/graphs/PieVacinadosInfectadosRecuperadosObitos';
import { BarsVacinacaoArs } from '../components/graphs/BarsVacinacaoArs';
import { PieSuscetiveisProporcao } from '../components/graphs/PieSuscetiveisProporcao';
import { BarVacinasRecebidaDia } from '../components/graphs/BarVacinasRecebidaDia';
import { BarAdministradasPorFaixaEtaria } from '../components/graphs/BarAdministradasPorFaixaEtaria';
import { BarTotaisPorFaixaEtaria } from '../components/graphs/BarTotaisPorFaixaEtaria';
import { BarArs } from '../components/graphs/BarArs';
import { PieRecebidasAdquiridas } from '../components/graphs/PieRecebidasAdquiridas';
import { PieAdministradasDoses } from '../components/graphs/PieAdministradasDoses';
import { formatNumber, perHundred } from '../utils';
import { BarVacinasRecebidaDiaAcum } from '../components/graphs/BarVacinasRecebidaDiaAcum';
import { LineVacinadosEu } from '../components/graphs/LineVacinadosEu';
import { BarVacinadosEu } from '../components/graphs/BarVacinadosEu';
import { LineRt } from '../components/graphs/LineRt';

const plausible = Plausible({
	domain: 'vacinacaocovid19.pt',
	trackLocalhost: true,
});

export default function Home() {
	let { statistics, update: updateData, ready: dataReady, versioning } = useData();
	let rawData = statistics.getRaw();
	let [selectedItem, setSelectedItem] = useState({});
	let [previousItem, setPreviousItem] = useState({});
	let [updating, setUpdating] = useState(false);
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

	let { colors, colors_v2, setColors } = useColors();

	useEffect(() => {}, [versioning]);

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
		};
		setDerivedNumbers(object);
	}, [selectedItem]);

	useEffect(() => {
		if (dataReady === false) return;
		let rawData = statistics.getRaw();
		setSelectedItem(rawData[rawData.length - 1]);
		setPreviousItem(rawData[rawData.length - 2]);
		plausible.trackPageview();

		var pusher = new Pusher('4dd4d1d504254af64544', {
			cluster: 'eu',
		});

		var channel = pusher.subscribe('covid19');
		channel.bind('update', function (data) {
			updateData(data.type, data.data);
			setUpdating(true);
			setTimeout(() => {
				setUpdating(false);
			}, 1000);
		});

		let { sum } = statistics?.getDosesRecebidasAcum();
		sum = sum.reverse()[0];
		let item = rawData.filter((el) => {
			return isSameDay(el.Data, new Date(json.dateSnsStart));
		});
		setDoses({
			...doses,
			recebidas: sum,
			administradas: item[0].Vacinados_Ac,
			primeiras: item[0].Inoculacao1_Ac,
			segundas: item[0].Inoculacao2_Ac,
			data: format(new Date(json.dateSns).getTime(), 'dd/LL/yyyy', {
				locale: pt,
			}),
			dataLong: format(new Date(json.dateSns).getTime(), "dd 'de' LLLL 'de' yyyy", {
				locale: pt,
			}),
		});

		setLoaded(true);
	}, [dataReady]);
	return (
		<>
			<Metatags isUpdating={updating}></Metatags>
			<Header regiao="Madeira"></Header>

			<Container className="container-fluid app">
				{loaded ? (
					<>
						<Row>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										colors={colors}
										title="Número total de vacinas administradas"
										yesterday={previousItem?.Vacinados_Ac}
										from={previousItem?.Vacinados_Ac}
										to={selectedItem?.Vacinados_Ac}
									></Counter>
								</Card>
							</Col>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										colors={colors}
										title="Número de doses administradas - 1ª Dose"
										yesterday={previousItem?.Inoculacao1_Ac}
										from={previousItem?.Inoculacao1_Ac}
										to={selectedItem?.Inoculacao1_Ac}
									></Counter>
									<p style={{ marginTop: '10px' }} class={cardStyles.card_subtitle}>
										{perHundred(selectedItem?.Inoculacao1_Ac).toFixed(2)} doses administradas por cada 100 pessoas
										<br />
										{formatNumber(selectedItem?.Inoculacao1_Ac - selectedItem?.Inoculacao2_Ac)} pessoas inoculadas com a 1ª dose
									</p>
								</Card>
							</Col>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										colors={colors}
										title="Número de doses administradas - 2ª Dose"
										yesterday={previousItem?.Inoculacao2_Ac}
										from={previousItem?.Inoculacao2_Ac}
										to={selectedItem?.Inoculacao2_Ac}
									></Counter>

									<p style={{ marginTop: '10px' }} class={cardStyles.card_subtitle}>
										{perHundred(selectedItem?.Inoculacao2_Ac).toFixed(2)} doses administradas por cada 100 pessoas
										<br />
										{formatNumber(selectedItem?.Inoculacao2_Ac)} pessoas inoculadas com a 2ª dose
									</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col lg={4} xs={12}>
								<Card isUpdating={updating}>
									<Counter
										ps="Percentagem calculada com base no número total de segundas doses administradas"
										digits={2}
										suffix={'%'}
										colors={colors}
										title="Percentagem de população inoculada com a 2ª dose "
										from={derivedNumbers.percentagem.prev}
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
										from={70 - derivedNumbers.percentagem.prev}
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
								<h2 className={styles.title}>Número de vacinas administradas por Semana</h2>
								<hr />
								<VacinadosPorDia colors={colors} statistics={statistics}></VacinadosPorDia>
							</Col>
						</Row>
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
						<Row>
							<Col>
								<h2 className={styles.title}>Número de doses recebidas por semana</h2>
								<hr />
								<BarVacinasRecebidaDia colors={colors} statistics={statistics}></BarVacinasRecebidaDia>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de doses recebidas (acumulado)</h2>
								<hr />
								<BarVacinasRecebidaDiaAcum colors={colors} statistics={statistics}></BarVacinasRecebidaDiaAcum>
							</Col>
						</Row>
						<Row>
							<Col lg={6} xs={12}>
								<h2 className={styles.title}>Proporção de doses recebidas relativamente às doses adquiridas</h2>
								<h3 className={styles.subtitle}>
									Dados acumulados desde 21 de Dezembro de 2021 até{' '}
									{format(new Date(json.dateEcdc).getTime(), "dd 'de' LLLL 'de' yyyy", {
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
									{format(new Date(json.dateEcdc).getTime(), "dd 'de' LLLL 'de' yyyy", {
										locale: pt,
									})}
								</h3>
								<hr />

								<PieAdministradasDoses colors={colors_v2} statistics={doses}></PieAdministradasDoses>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Número de doses administradas por semana e faixa etária</h2>
								<hr />
								<BarAdministradasPorFaixaEtaria colors={colors_v2} statistics={statistics}></BarAdministradasPorFaixaEtaria>
							</Col>
						</Row>
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
						<Row>
							<Col>
								<h2 className={styles.title}>
									Número de vacinas administradas por dia com o número de infectados e de recuperados nos últimos 14 dias
								</h2>
								<hr />
								<LineVacinadosInfecoesRecuperados colors={colors_v2} statistics={statistics}></LineVacinadosInfecoesRecuperados>
							</Col>
						</Row>
						<Row>
							<Col lg={6} xs={12}>
								<h2 className={styles.title}>
									Proporção do número total de vacinas administradas com o número de infectados, recuperados e óbitos
								</h2>
								<hr />
								<PieVacinadosInfectadosRecuperadosObitos
									colors={colors_v2}
									statistics={statistics}
								></PieVacinadosInfectadosRecuperadosObitos>
							</Col>
							<Col lg={6} xs={12}>
								<h2 className={styles.title}>
									Proporção do número total de vacinas administradas com o número de infectados, recuperados e óbitos e população
									suscetível
								</h2>
								<hr />
								<PieSuscetiveisProporcao colors={colors_v2} statistics={statistics}></PieSuscetiveisProporcao>
							</Col>
						</Row>
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

								<BarsVacinacaoArs colors={colors_v2} statistics={statistics}></BarsVacinacaoArs>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2 className={styles.title}>Ponto de situação por ARS</h2>
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

						<Row>
							<Col xs={12} className={styles.sources_block}>
								<h2 className={styles.title}>Notas</h2>
								<p className={styles.text}>
									A percentagem de população vacinada foi calculada com base no número total de segundas doses administradas e com o
									&nbsp;
									<a className={styles.link} target="_blank" href="https://www.pordata.pt/Portugal">
										número de população de Portugal (dados do PORDATA)
									</a>
									. De acordo com o&nbsp;
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
										className={styles.link}
										href="https://www.sns.gov.pt/wp-content/uploads/2020/12/Plano_Vacinacao_COVID-19.pdf"
										target=":blank"
									>
										aqui
									</a>{' '}
									e{' '}
									<a className={styles.link} href="https://covid19.min-saude.pt/vacinacao/" target=":blank">
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
									<a className={styles.link} target="_blank" href="https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/">
										Monitorização do SNS da Direção-Geral da Saúde
									</a>
									&nbsp;e do sítio&nbsp;
									<a
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
									<a className={styles.link} href="https://www.ecdc.europa.eu/en" target="_blank">
										ECDC (European Centre for Disease Prevention and Control)
									</a>
									&nbsp; e são atualizados através dos&nbsp;
									<a className={styles.link} target="_blank" href="https://covid19-vaccine-report.ecdc.europa.eu/#6_Reported_data">
										relatórios publicados semanalmente.
									</a>
								</p>
								<p className={styles.text}>
									Os dados relativos à vacinação por ARS é tirada do portal sobre{' '}
									<a className={styles.link} href="https://covid19.min-saude.pt/" target="_blank">
										a COVID-19 da Direção-Geral da Saúde
									</a>
									&nbsp; e são atualizados através dos&nbsp;
									<a className={styles.link} target="_blank" href="https://covid19.min-saude.pt/relatorio-de-vacinacao/">
										relatórios publicados semanalmente.
									</a>
								</p>
								<p className={styles.text}>
									O número total de vacinas adquiridas anunciado pela Direção-Geral de Saúde foi divulgado através de um comunicado
									feito no sítio do Governo de Portugal, que{' '}
									<a
										className={styles.link}
										href="https://www.portugal.gov.pt/pt/gc22/comunicacao/comunicado?i=esclarecimento-sobre-compra-de-vacinas-contra-a-covid-19#:~:text=Neste%20momento%2C%20Portugal%20j%C3%A1%20conseguiu%20assegurar%20mais%20de%2031%20milh%C3%B5es%20de%20doses%20de%20vacinas%2C"
										target="_blank"
									>
										pode ser consultado aqui.
									</a>{' '}
									No dia 01 de Março de 2021, foi anunciado que o número total de vacinas adquiridas aumentou para 38 milhões de
									doses, num comunicado dirigido à imprensa que{' '}
									<a
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
									<a className={styles.link} target="_blank" href="https://ourworldindata.org/">
										Our World In Data
									</a>
									&nbsp; e estão disponíveis&nbsp;
									<a
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
									<a className={styles.link} target="_blank" href="https://ourworldindata.org/">
										Instituto Nacional Doutor Ricardo Jorge
									</a>
									&nbsp; e estão disponíveis&nbsp;
									<a
										className={styles.link}
										target="_blank"
										href="http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/"
									>
										nesta página.
									</a>
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
			{/*<script async defer data-domain="vacinacaocovid19.pt" src="https://plausible.io/js/plausible.js"></script>*/}
			<script src="https://js.pusher.com/7.0/pusher.min.js"></script>
			{/*<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>*/}
			<Footer></Footer>
		</>
	);
}
