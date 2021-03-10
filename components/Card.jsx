import styles from './Card.module.scss';
import classNames from 'classnames';

export function Card({ children, allowOverflow, isUpdating, textLeft }) {
	let styles2 = {};
	styles2[styles.card_align_left] = textLeft;
	styles2[styles.card_graph_updated] = isUpdating;
	styles2[styles.card_chart] = allowOverflow;
	let className = classNames(styles.card_graph, 'card-shadow', styles2);
	return (
		<div className={styles.container}>
			<div className={className}>{children}</div>
		</div>
	);
}
