import { useState } from 'react';
import styles from './CustomCheckbox.module.scss';

export function CustomCheckbox({ onChange, label, checked, styles: propStyles }) {
	let [isChecked, setIsChecked] = useState(checked || false);
	function wrapper(el) {
		setIsChecked(el.target.checked);
		onChange(el.target.checked);
	}

	return (
		<label className={styles.container} style={{ ...propStyles }}>
			<input onChange={wrapper} type="checkbox" checked={isChecked} />
			<p>
				<span className={styles.checkmark}></span>
				<span className={styles.label}>{label}</span>
			</p>
		</label>
	);
}
