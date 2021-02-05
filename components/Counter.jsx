import { Card } from './Card';
import CountTo from 'react-count-to';
import styles from './Card.module.scss';

export function Counter({ from, to, yesterday, title, subtitle }) {
	let numberFormatter = new Intl.NumberFormat();
	let difference = to - yesterday || 0;
	const fn = (value) => <span className={styles.counter}>{numberFormatter.format(value).replace(',', ' ')}</span>;
	return (
		<>
			<Card>
				<h2 className={styles.card_graph_title}>{title}</h2>

				{to === null ? (
					<span className={styles.counter}>N/A</span>
				) : (
					<>
						<CountTo delay={1} from={from || 0} to={to || 0} speed={500}>
							{fn}
						</CountTo>

						{Math.abs(to - yesterday) > 0 ? (
							<>
								<p>
									<span className={styles.card_graph_subtitle_counter}>
										<span className={styles.card_graph_subtitle_counter}>
											{Math.sign(difference) == 1 ? '+' : '-'} {numberFormatter.format(Math.abs(difference)).replace(',', ' ')}
										</span>
									</span>
									&nbsp; que no dia anterior
								</p>
							</>
						) : (
							''
						)}
					</>
				)}
			</Card>
		</>
	);
}
