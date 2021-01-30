import styles from './Card.module.scss';

export function Card({ children, allowOverflow }) {
	return (
		<>
			<div className={`${styles.card_graph} ${allowOverflow ? styles.card_chart : ''} card-shadow`}>{children}</div>
		</>
	);
}
