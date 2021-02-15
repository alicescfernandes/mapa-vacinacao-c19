import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Counter } from '../../components/Counter';
import { DatePickerButton } from '../../components/DatePickerButton';
import { NumeroTotalVacinados } from '../../components/graphs/NumeroTotalVacinados';

import { VacinadosPorDia } from '../../components/graphs/VacinadosPorDia';

import { useData } from '../../hooks/useData';
import styles from '../../styles/Home.module.scss';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { useColors } from './../../hooks/useColors';
export default function Embed() {
	const router = useRouter();
	const { id, colors: queryColors } = router.query;
	let { colors, tints, shades, complement, setColors } = useColors();

	let { statistics, labels, values } = useData();
	let rawData = statistics.getRaw();
	let { valuesIn1, valuesIn2 } = statistics.getVacinadosAcum();

	let [selectedItem, setSelectedItem] = useState({});
	let [previousItem, setPreviousItem] = useState({});
	let [previousSelectedItem, setPreviousSelectedItem] = useState({});

	let [last, setLast] = useState({});
	let [first, setFirst] = useState({});
	let [loaded, setLoaded] = useState(false);

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
		setPreviousItem(rawData[rawData.length - 2]);
		setFirst(rawData[0]);
		setLoaded(true);
	}, []);

	useEffect(() => {
		if (queryColors != undefined) {
			setColors([...queryColors.map((c) => '#' + c)]);
		}
	}, [queryColors]);

	let content = (
		<Row>
			<Col>
				<p style={{ padding: '20px', textAlign: 'center' }}>A carregar...</p>
			</Col>
		</Row>
	);
	let css = `:root{
		--foreground:${colors[0]}
		}`;

	if (id) {
		switch (id) {
			case 'counter':
				content = (
					<>
						<>
							<style>{css}</style>
						</>
						<Row className={styles.datepickerRow}>
							<Col style={{ textAlign: 'center' }}>{loaded ? <DatePickerButton colors={colors} onDateSelect={onDateSelect} minDate={first.Data} maxDate={last.Data} /> : ''}</Col>
						</Row>
						<Row>
							<Col lg={4} xs={12}>
								<Counter colors={colors} title="Número total de vacinas administradas" subtitle="" yesterday={previousItem?.Vacinados_Ac} from={previousSelectedItem?.Vacinados_Ac || 0} to={selectedItem?.Vacinados_Ac}></Counter>
							</Col>
							<Col lg={4} xs={12}>
								<Counter colors={colors} title="Número de doses administradas - 1ª Dose" subtitle="Vacina Pfizer/BioNTech" yesterday={previousItem?.Inoculacao1_Ac} from={previousSelectedItem?.Inoculacao1_Ac || 0} to={selectedItem?.Inoculacao1_Ac}></Counter>
							</Col>
							<Col lg={4} xs={12}>
								<Counter colors={colors} title="Número de doses administradas - 2ª Dose" subtitle="Vacina Pfizer/BioNTech" yesterday={previousItem?.Inoculacao2_Ac} from={previousSelectedItem?.Inoculacao2_Ac || 0} to={selectedItem?.Inoculacao2_Ac}></Counter>
							</Col>
						</Row>
					</>
				);
				break;
			case 'line':
				content = (
					<>
						<NumeroTotalVacinados colors={colors} labels={labels} values={values} valuesIn1={valuesIn1} valuesIn2={valuesIn2}></NumeroTotalVacinados>
					</>
				);
				break;

			case 'bar':
				content = (
					<>
						<VacinadosPorDia colors={colors} labels={labels} values={values} statistics={statistics}></VacinadosPorDia>
					</>
				);
				break;
			default:
				content = <Error statusCode={404} />;
		}
	}
	return <>{content}</>;
	// <Footer></Footer>
}
