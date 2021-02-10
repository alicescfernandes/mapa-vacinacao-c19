import { Card } from './Card';
import CountTo from 'react-count-to';
import styles from './Card.module.scss';
import { useEffect, useState } from 'react';

export function Counter({ from, to, yesterday, title, subtitle, ps, colors, digits, suffix }) {
	if (!digits) {
		digits = 0;
	}
	let numberFormatter = new Intl.NumberFormat();
	let difference = to - yesterday || 0;
	let [foreground] = colors;
	const fn = (value) => (
		<span style={{ color: foreground }} className={styles.card_highlight}>
			{numberFormatter.format(value).replace(',', ' ')} {suffix ? suffix : ''}
		</span>
	);

	return (
		<>
			{title == '' ? '' : <h2 className={styles.card_title}>{title}</h2>}

			{subtitle == '' ? <div style={{ height: 20 }} /> : <p className={styles.card_subtitle}>{subtitle}</p>}
			{to === null ? (
				<span className={styles.card_highlight} style={{ color: foreground }}>
					N/A
				</span>
			) : (
				<>
					<CountTo digits={digits} delay={1} from={from || 0} to={to || 0} speed={500}>
						{fn}
					</CountTo>

					{Math.abs(to - yesterday) > 0 ? (
						<>
							<p className={styles.card_subtitle}>
								<span style={{ color: foreground }} className={styles.card_subtitle_highlight}>
									{Math.sign(difference) == 1 ? '+' : '-'} {numberFormatter.format(Math.abs(difference)).replace(',', ' ')}
								</span>
								&nbsp; que no dia anterior
							</p>
						</>
					) : (
						''
					)}

					{ps != null ? (
						<>
							<p className={styles.card_subtitle}>
								{ps.split('\n').map((el) => (
									<>
										{el} <br />
									</>
								))}
							</p>
						</>
					) : (
						''
					)}
				</>
			)}
		</>
	);
}
