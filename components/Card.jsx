import styles from './Card.module.scss';
import classNames from 'classnames';

export function Card({ children, type, allowOverflow, isUpdating, textLeft, classes, sticky, is_dynamic_scroll = true, is_fixed_scroll }) {
	let styles2 = {};
	styles2[styles.card_align_left] = textLeft;
	styles2[styles.card_graph_updated] = isUpdating;
	styles2[styles.card_chart] = allowOverflow;
	styles2[styles.card_sticky] = sticky;
	styles2[styles.card_counter] = type === 'counter';
	styles2[styles.card_fixed_scroll] = is_fixed_scroll && type !== 'counter';
	styles2[styles.card_dynamic_scroll] = is_dynamic_scroll && !is_fixed_scroll && type !== 'counter';

	let className = classNames(styles.card_graph, styles2);
	return (
		<div className={styles.container}>
			<div className={className}>{children}</div>
		</div>
	);
}
