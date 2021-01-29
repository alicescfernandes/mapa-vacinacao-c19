import { Card } from './Card';
import CountTo from 'react-count-to';
import styles from './Card.module.scss';

export function Counter({ from, to, yesterday, title, subtitle }) {
	let numberFormatter = new Intl.NumberFormat();
	let difference = to - yesterday;
	const fn = (value) => <span className={styles.counter}>{numberFormatter.format(value).replace(',', ' ')}</span>;
	const subcounter = (value) => (
		<span className={styles.card_graph_subtitle_counter}>
			{Math.sign(difference) == 1 ? '+' : '-'} {numberFormatter.format(Math.abs(difference)).replace(',', ' ')}
		</span>
	);
	return (
		<>
			<Card>
				<h2 className={styles.card_graph_title}>{title}</h2>
				<p className={styles.card_graph_subtitle}>{subtitle}</p>

				{to === null ? (
					<span className={styles.counter}>N/A</span>
				) : (
					<>
						<CountTo delay={1} from={from} to={to} speed={500}>
							{fn}
						</CountTo>

						{Math.abs(to - yesterday) > 0 ? (
							<>
								<p>
									<span className={styles.card_graph_subtitle_counter}>
										<CountTo delay={1} from={from} to={to} speed={500}>
											{subcounter}
										</CountTo>{' '}
									</span>
									que no dia anterior
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
