import { useState } from 'react';
import DatePicker from 'react-datepicker';

import styles from './DatePickerButton.module.scss';

import Arrow from '../assets/arrow.svg';

export function DatePickerButton({ minDate, maxDate }) {
	const [startDate, setStartDate] = useState(new Date());
	startDate.setMinutes(0);
	startDate.setMilliseconds(0);
	startDate.setSeconds(0);
	startDate.setHours(0);
	let options = {
		month: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	let f = new Intl.DateTimeFormat('pt-PT', options);
	console.log(startDate, minDate, startDate.getTime() == minDate);
	const ExampleCustomInput = ({ value, onClick }) => (
		<>
			<button
				className={styles.datepicker}
				disabled={startDate.getTime() <= minDate}
				onClick={() => {
					let prevDay = startDate.getTime() - 86400 * 1000;
					return setStartDate(new Date(prevDay));
				}}
			>
				<Arrow className={styles.svg} />
			</button>

			<button className={styles.datepicker} onClick={onClick}>
				Dia {f.format(startDate)}
			</button>
			<button
				className={styles.datepicker}
				disabled={startDate.getTime() >= maxDate}
				onClick={() => {
					let prevDay = startDate.getTime() + 86400 * 1000;
					return setStartDate(new Date(prevDay));
				}}
			>
				<Arrow className={styles.svg} />
			</button>
		</>
	);
	return <DatePicker minDate={minDate} maxDate={maxDate} selected={startDate} onChange={(date) => setStartDate(date)} customInput={<ExampleCustomInput />} />;
}
