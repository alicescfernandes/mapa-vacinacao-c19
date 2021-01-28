import { Card } from './Card';
import CountTo from 'react-count-to';
import styles from './Card.module.scss';

export function Counter({ to, title, subtitle }) {
	return (
		<>
			<Card>
				<h2 className={styles.card_graph_title}>{title}</h2>
				<p className={styles.card_graph_subtitle}>{title}</p>
				<CountTo className={styles.counter} delay={10} to={to} speed={2000} />
			</Card>
		</>
	);
}
