import styles from './Card.module.scss';
import classNames from 'classnames';

export function Card({ children, allowOverflow, isUpdating }) {
	let className = classNames(styles.container, {});
	console.log(styles);
	return (
		<div className={styles.container}>
			<div className={`${styles.card_graph} ${isUpdating ? styles.card_graph_updated : ''} ${allowOverflow ? styles.card_chart : ''} card-shadow`}>{children}</div>
		</div>
	);
}
