import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VacinadosPorDia } from '../components/graphs/VacinadosPorDia';
import { Counter } from '../components/Counter';
import { DatePickerButton } from '../components/DatePickerButton';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { NumeroTotalVacinados } from '../components/graphs/NumeroTotalVacinados';
import { isSameDay, format } from 'date-fns';

import { useData } from '../hooks/useData';
import styles from '../styles/Home.module.scss';
import { useColors } from '../hooks/useColors';
import { Metatags } from '../components/MetaTags';
import cardStyles from '../components/Card.module.scss';

//data
import generic from './../data/generic.json';
import fases from './../data/fases.json';
import { Card } from '../components/Card';
import { LineVacinadosInfecoesRecuperados } from '../components/graphs/LineVacinadosInfecoesRecuperados';
import { PieVacinadosInfectadosRecuperadosObitos } from '../components/graphs/PieVacinadosInfectadosRecuperadosObitos';
import { PieSuscetiveisProporcao } from '../components/graphs/PieSuscetiveisProporcao';
import { BarVacinasRecebidaDia } from '../components/graphs/BarVacinasRecebidaDia';
import { BarAdministradasPorFaixaEtaria } from '../components/graphs/BarAdministradasPorFaixaEtaria';
import { BarTotaisPorFaixaEtaria } from '../components/graphs/BarTotaisPorFaixaEtaria';
import { trackPlausible } from '../utils';
import Plausible from 'plausible-tracker';

const plausible = Plausible({
	domain: 'vacinacaocovid19.pt',
	trackLocalhost: true,
});

export default function Home() {
	let { statistics, labels, values, update: updateData } = useData();
	let { valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();
	let rawData = statistics.getRaw();
	let [selectedItem, setSelectedItem] = useState({});
	let [previousItem, setPreviousItem] = useState({});
	let [previousSelectedItem, setPreviousSelectedItem] = useState({});
	let [updating, setUpdating] = useState(false);
	let [last, setLast] = useState({});
	let [first, setFirst] = useState({});
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

	let { colors, colors_v2, setColors } = useColors();
	function onDateSelect(d) {
		let item = rawData.filter((el, elIdx) => {
			console.log(isSameDay(el.Data, d.getTime()));
			if (isSameDay(el.Data, d.getTime())) {
				if (elIdx - 1 >= 0) {
					console.log(1);
					setPreviousItem(rawData[elIdx - 1]);
				} else {
					console.log(2);
					setPreviousItem(el);
				}
				return true;
			}
		});
		if (item.length > 0 && selectedItem.Data != item[0].Data) {
			setPreviousSelectedItem(selectedItem);
			setSelectedItem(item[0]);
		}
	}

	useEffect(() => {
		let rawData = statistics.getRaw();
		if (rawData[rawData.length - 1]?.Data != last.Data) {
			onDateSelect(new Date(rawData[rawData.length - 1].Data));
			setLast(rawData[rawData.length - 1]);
			setPreviousItem(rawData[rawData.length - 2]);
		}
	}, [values, loaded]);

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
		setLast(rawData[rawData.length - 1]);
		setSelectedItem(rawData[rawData.length - 1]);
		setPreviousItem(selectedItem);
		setFirst(rawData[0]);
		setLoaded(true);
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
		plausible.trackPageview();
	}, []);
	return (
		<>
			<Metatags isUpdating={updating}></Metatags>
			<Header></Header>
			<Row className={`card-shadow-bottom ${styles.alert}`}>
				<Col style={{ textAlign: 'center' }}>
					<p>
						Veja aqui os últimos números relacionados com a vacinação para a COVID-19. <br />
						Os dados são atualizados diariamente entre as 13h e as 14h, e este <em>dashboard</em> é atualizado ao minuto.
					</p>
				</Col>
			</Row>

			<Container className="container-fluid">
				<Row className={styles.datepickerRow}>
					<Col style={{ textAlign: 'center' }}>{loaded ? <DatePickerButton onDateSelect={onDateSelect} minDate={first.Data} maxDate={last.Data} /> : ''}</Col>
				</Row>
				<Row>
					<Col lg={4} xs={12}>
						<Card isUpdating={updating}>
							<Counter colors={colors} title="Número total de vacinas administradas" yesterday={previousItem?.Vacinados_Ac} from={previousSelectedItem?.Vacinados_Ac || 0} to={selectedItem?.Vacinados_Ac}></Counter>
						</Card>
					</Col>
					<Col lg={4} xs={12}>
						<Card isUpdating={updating}>
							<Counter colors={colors} title="Número de doses administradas - 1ª Dose" yesterday={previousItem?.Inoculacao1_Ac} from={previousSelectedItem?.Inoculacao1_Ac || 0} to={selectedItem?.Inoculacao1_Ac}></Counter>
						</Card>
					</Col>
					<Col lg={4} xs={12}>
						<Card isUpdating={updating}>
							<Counter colors={colors} title="Número de doses administradas - 2ª Dose" yesterday={previousItem?.Inoculacao2_Ac} from={previousSelectedItem?.Inoculacao2_Ac || 0} to={selectedItem?.Inoculacao2_Ac}></Counter>
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
							<h2 className={cardStyles.card_title}>Fase atual do plano de vacinação</h2>
							<h1 style={{ color: colors[0] }} className={cardStyles.card_highlight_2}>
								{fases.fases[fases.fase_atual].nome} de Vacinação
							</h1>
							<a target="_blank" href={fases.fases[fases.fase_atual].fontes[0].permalink} className={`${cardStyles.card_subtitle} ${styles.link}`}>
								Ver mais informação sobre o plano de vacinação
							</a>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className={styles.title}>Número vacinas administradas</h3>

						<NumeroTotalVacinados colors={colors} labels={labels} values={values} valuesIn1={valuesIn1} valuesIn2={valuesIn2}></NumeroTotalVacinados>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className={styles.title}>Número de vacinas administradas por dia</h3>
						<VacinadosPorDia colors={colors} labels={labels} values={values} statistics={statistics}></VacinadosPorDia>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className={styles.title}>Número de doses recebidas por semana </h3>
						<BarVacinasRecebidaDia colors={colors} labels={labels} values={values} statistics={statistics}></BarVacinasRecebidaDia>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className={styles.title}>Número de doses administradas por semana e faixa etária</h3>
						<BarAdministradasPorFaixaEtaria colors={colors_v2} statistics={statistics}></BarAdministradasPorFaixaEtaria>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className={styles.title}>Doses totais administradas por faixa etária</h3>
						<BarTotaisPorFaixaEtaria colors={colors_v2} statistics={statistics}></BarTotaisPorFaixaEtaria>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className={styles.title}>Número de vacinas administradas por dia com o número de infectados e de recuperados nos últimos 14 dias</h3>
						<LineVacinadosInfecoesRecuperados colors={colors_v2} statistics={statistics}></LineVacinadosInfecoesRecuperados>
					</Col>
				</Row>
				<Row>
					<Col lg={6} xs={12}>
						<h3 className={styles.title}>Proporção do número total de vacinas administradas com o número de infectados, recuperados e óbitos</h3>
						<PieVacinadosInfectadosRecuperadosObitos colors={colors_v2} labels={labels} values={values} statistics={statistics}></PieVacinadosInfectadosRecuperadosObitos>
					</Col>
					<Col lg={6} xs={12}>
						<h3 className={styles.title}>Proporção do número total de vacinas administradas com o número de infectados, recuperados e óbitos e população suscetível</h3>
						<PieSuscetiveisProporcao colors={colors_v2} labels={labels} values={values} statistics={statistics}></PieSuscetiveisProporcao>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className={styles.sources_block}>
						<h3 className={styles.title}>Notas</h3>
						<p className={styles.text}>
							A percentagem de população vacinada foi calculada com base no número total de segundas doses administradas e com o &nbsp;
							<a className={styles.link} target="_blank" href="https://www.pordata.pt/Portugal">
								número de população de Portugal (dados do PORDATA)
							</a>
							. De acordo com o&nbsp;
							<a className={styles.link} target="_blank" href="https://rr.sapo.pt/2020/08/24/pais/coronavirus-70-das-pessoas-imunizadas-sera-suficiente-para-criar-imunidade-de-grupo/noticia/204533/">
								Instituto Ricardo Jorge, será preciso imunizar entre 60% a 70% da população para se atingir a imunidade de grupo.
							</a>{' '}
							Os valores apresentados aqui foram calculados com uma percentagem de 70%.
						</p>
						<p className={styles.text}>
							A população suscetível a infeção foi calculada com base na população total menos a soma do número de óbitos, casos ativos, população infectada, vacinada e recuperada assumindo que casos de reinfeções são raros.{' '}
							<a className={styles.link} href="https://bnonews.com/index.php/2020/08/covid-19-reinfection-tracker/" target=":blank">
								Até 09/02 foram confirmados 49 casos de reinfecção com o novo coronavírus.
							</a>
						</p>
						{/*	<p className={styles.text}>
							A média de evolução de casos da União Europeia foi calculada com os números reportados por cada país, mesmo que alguns países não tenham ainda reportado para o dia de hoje. No gráfico de o numero total de vacinas administradas por dia de cada só são mostrados os dados que
							foram reportados por cada país, sendo que nem todos os paises reportam em simultâneo os dados.
						</p>*/}
					</Col>

					<Col xs={12} className={styles.sources_block}>
						<h3 className={styles.title}>Fontes</h3>
						<p className={styles.text}>
							Os dados apresentados são retirados do portal&nbsp;
							<a className={styles.link} target="_blank" href="https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/">
								Monitorização do SNS da Direção-Geral da Saúde
							</a>
							&nbsp;e do sítio&nbsp;
							<a className={styles.link} target="_blank" href="https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/">
								Ponto de Situação Direção-Geral da Saúde
							</a>
							. A atualização destes dados é diária.
							<br />
							Os dados relativos à distribuição das vacinas e administração das mesmas por grupo etária são disponibilizados pelo{' '}
							<a className={styles.link} href="https://www.ecdc.europa.eu/en" target="_blank">
								ECDC (European Centre for Disease Prevention and Control)
							</a>
							&nbsp; e são atualizados através dos&nbsp;
							<a className={styles.link} target="_blank" href="https://covid19-vaccine-report.ecdc.europa.eu/#6_Reported_data">
								relatórios publicados semanalmente.
							</a>
							{/* Os dados relativos à média da União Europeia são atualizados pelo&nbsp;
							<a className={styles.link} target="_blank" href="https://ourworldindata.org/">
								Our World In Data
							</a>
							&nbsp; e estão disponíveis&nbsp;
							<a className={styles.link} target="_blank" href="https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv">
								no repositório de Github
							</a> */}
						</p>
					</Col>
				</Row>
				{/*<script async defer data-domain="vacinacaocovid19.pt" src="https://plausible.io/js/plausible.js"></script>*/}
				<script src="https://js.pusher.com/7.0/pusher.min.js"></script>{' '}
			</Container>
			<Footer></Footer>
		</>
	);
}
