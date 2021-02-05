import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BarChart } from '../components/BarChart';
import { Counter } from '../components/Counter';
import { DatePickerButton } from '../components/DatePickerButton';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LineChart } from '../components/LineChart';
import { useData } from '../hooks/useData';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import { useColors } from '../hooks/useColors';

import { Metatags } from '../components/MetaTags';
export default function Home() {
	let { statistics, labels, values } = useData();
	let { valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();
	let rawData = statistics.getRaw();

	let [selectedItem, setSelectedItem] = useState({});
	let [previousItem, setPreviousItem] = useState({});
	let [previousSelectedItem, setPreviousSelectedItem] = useState({});

	let [last, setLast] = useState({});
	let [first, setFirst] = useState({});
	let [loaded, setLoaded] = useState(false);

	let { colors, setColors } = useColors();
	function onDateSelect(d) {
		let item = rawData.filter((el, elIdx) => {
			if (el.Data == d.getTime()) {
				if (elIdx - 1 >= 0) {
					setPreviousItem(rawData[elIdx - 1]);
				} else {
					setPreviousItem(el);
				}
				return true;
			}
		});

		if (selectedItem.Data != item[0].Data) {
			setPreviousSelectedItem(selectedItem);
			setSelectedItem(item[0]);
		}
	}

	useEffect(() => {
		let rawData = statistics.getRaw();
		setLast(rawData[rawData.length - 1]);
		onDateSelect(new Date(rawData[rawData.length - 1].Data));
	}, [values]);

	useEffect(() => {
		setLast(rawData[rawData.length - 1]);
		setSelectedItem(rawData[rawData.length - 1]);
		setPreviousItem(selectedItem);
		setFirst(rawData[0]);
		setLoaded(true);
	}, []);
	return (
		<>
			<Metatags></Metatags>
			<Header></Header>
			<Row className={`card-shadow-bottom ${styles.alert}`}>
				<Col style={{ textAlign: 'center' }}>
					<p>
						Veja aqui os últimos números relacionados com a vacinação para a COVID-19. <br />
						Os dados são atualizados diariamente entre as 13h e as 14h, e este <em>dashboard</em> é atualizado a cada 5 minutos
					</p>
				</Col>
			</Row>

			<Container>
				<Row className={styles.datepickerRow}>
					<Col style={{ textAlign: 'center' }}>{loaded ? <DatePickerButton onDateSelect={onDateSelect} minDate={first.Data} maxDate={last.Data} /> : ''}</Col>
				</Row>

				<Row>
					<Col lg={4} xs={12}>
						<Counter title="Número total de vacinados" subtitle="" yesterday={previousItem?.Vacinados_Ac} from={previousSelectedItem?.Vacinados_Ac || 0} to={selectedItem?.Vacinados_Ac}></Counter>
					</Col>
					<Col lg={4} xs={12}>
						<Counter title="Número de vacinados - 1ª Dose" subtitle="Vacina Pfizer/BioNTech" yesterday={previousItem?.Inoculacao1_Ac} from={previousSelectedItem?.Inoculacao1_Ac || 0} to={selectedItem?.Inoculacao1_Ac}></Counter>
					</Col>
					<Col lg={4} xs={12}>
						<Counter title="Número de vacinados - 2ª Dose" subtitle="Vacina Pfizer/BioNTech" yesterday={previousItem?.Inoculacao2_Ac} from={previousSelectedItem?.Inoculacao2_Ac || 0} to={selectedItem?.Inoculacao2_Ac}></Counter>
					</Col>
				</Row>

				<Row>
					<Col>
						<h3 className={styles.title}>Número vacinas administradas</h3>

						<LineChart colors={colors} labels={labels} values={values} valuesIn1={valuesIn1} valuesIn2={valuesIn2}></LineChart>
					</Col>
				</Row>

				<Row>
					<Col>
						<h3 className={styles.title}>Número de vacinas administradas por dia</h3>
						<BarChart colors={colors} labels={labels} values={values} statistics={statistics}></BarChart>
					</Col>
				</Row>

				<Row>
					<Col className={styles.sources_block}>
						<h3 className={styles.title}>Fontes</h3>
						<p className={styles.text}>
							Os dados apresentados são retirados do portal{' '}
							<a className={styles.link} target="_blank" href="https://www.sns.gov.pt/monitorizacao-do-sns/vacinas-covid-19/">
								Monitorização do SNS da Direção-Geral da Saúde
							</a>{' '}
							e do sítio{' '}
							<a className={styles.link} target="_blank" href="https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/">
								Ponto de Situação Direção-Geral da Saúde
							</a>
							. A atualização destes dados é diária.
						</p>
					</Col>
				</Row>
				<script async defer data-domain="vacinacaocovid19.pt" src="https://plausible.io/js/plausible.js"></script>
			</Container>
			<Footer></Footer>
		</>
	);
}
