import styles from './Card.module.scss';
import * as React from 'react';
export function Counter({ to, yesterday, title, subtitle, ps, colors, digits, suffix, tempo }) {
	if (!tempo) tempo = window.innerWidth <= 500 ? 'ontem' : 'no dia anterior';

	let numberFormatter = new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 2,
	});
	let difference = to - yesterday || 0;
	let [foreground] = colors;

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
					<span style={{ color: foreground }} className={styles.card_highlight}>
						{numberFormatter.format(to).replace(/,/gm, ' ')} {suffix ? suffix : ''}
					</span>

					{Math.abs(to - yesterday) > 0 ? (
						<>
							<p className={styles.card_subtitle}>
								<span style={{ color: foreground }} className={styles.card_subtitle_highlight}>
									{Math.sign(difference) == 1 ? '+' : '-'} {numberFormatter.format(Math.abs(difference)).replace(',', ' ')}
								</span>
								&nbsp; que {tempo}
							</p>
						</>
					) : (
						''
					)}

					{ps != null ? (
						<>
							<p className={styles.card_subtitle}>
								{ps.split('\n').map((el, idx) => (
									<React.Fragment key={idx}>
										{el} <br />
									</React.Fragment>
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
