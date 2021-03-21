import React, { Component, useEffect, useState, createRef } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import styles from './DatePickerButton.module.scss';

import Arrow from '../assets/arrow.svg';
import { pt } from 'date-fns/locale';

export function DatePickerButton({ minDate, maxDate, onDateSelect, colors }) {
	const [startDate, setStartDate] = useState(new Date(maxDate));

	let [first, ...restDate] = format(startDate, "eeee, dd 'de' LLLL 'de' yyyy", {
		locale: pt,
	})
		.replace('-feira', '')
		.split('');

	let d = [first.toUpperCase(), ...restDate].join('');
	useEffect(() => {
		onDateSelect?.(new Date(startDate));
	}, [startDate]);

	useEffect(() => {
		setStartDate(new Date(maxDate));
	}, [maxDate]);

	class ExampleCustomInput extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			let { value, onClick } = this.props;
			return (
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

					<button style={{ width: 300 }} className={styles.datepicker} onClick={onClick}>
						{d}
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
		}
	}

	return (
		<DatePicker
			minDate={minDate}
			maxDate={maxDate}
			selected={startDate}
			onChange={(date) => {
				setStartDate(date);
			}}
			customInput={<ExampleCustomInput></ExampleCustomInput>}
		/>
	);
}
