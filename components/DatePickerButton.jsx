import React, {Component, useEffect, useState, createRef } from 'react';
import DatePicker from 'react-datepicker';

import styles from './DatePickerButton.module.scss';

import Arrow from '../assets/arrow.svg';

	
const ExampleCustomInput2 = ({ value, onClick }) => (
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


export function DatePickerButton({ minDate, maxDate, onDateSelect, colors }) {
	const [startDate, setStartDate] = useState(new Date(maxDate));
	startDate.setMinutes(0);
	startDate.setMilliseconds(0);
	startDate.setSeconds(0);
	startDate.setHours(0);
	let options = {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		weekday: 'long',
	};

	let f = new Intl.DateTimeFormat('pt', options);
	let [first, ...restDate] = f.format(startDate).replace('-feira', '').split('');
	let d = [first.toUpperCase(), ...restDate].join('');
	useEffect(() => {
		onDateSelect?.(startDate);
	}, [startDate]);

	useEffect(() => {
		setStartDate(new Date(maxDate));
	}, [maxDate]);

	class ExampleCustomInput extends Component {
		constructor(props){
			super(props)
		}
	
		render(){
			let { value, onClick } = this.props;
			return <>
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
