import { Card } from './Card';
import CountTo from 'react-count-to';
import styles from './Card.module.scss';

export function Counter({ to, title, subtitle }) {
	let numberFormatter = new Intl.NumberFormat();

	const fn = (value) => <span className={styles.counter}>{numberFormatter.format(value).replace(',', ' ')}</span>;
	return (
		<>
			<Card>
				<h2 className={styles.card_graph_title}>{title}</h2>
				<p className={styles.card_graph_subtitle}>{subtitle}</p>

				{to === null ? (
					<span className={styles.counter}>N/A</span>
				) : (
					<>
						<CountTo delay={5} to={to} speed={3000}>
							{fn}
						</CountTo>
						<p className={styles.card_graph_subtitle}>+123 que no dia anterior</p>
					</>
				)}
			</Card>
		</>
	);
}
