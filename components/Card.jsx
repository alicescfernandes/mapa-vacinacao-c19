import styles from './Card.module.scss';

export function Card({ children, allowOverflow, isUpdating }) {
	return (
		<>
			<div className={`${styles.card_graph} ${isUpdating ? styles.card_graph_updated : ''} ${allowOverflow ? styles.card_chart : ''} card-shadow`}>{children}</div>
		</>
	);
}
