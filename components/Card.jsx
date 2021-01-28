import styles from './Card.module.scss';

export function Card({ children }) {
	return (
		<>
			<div className={`${styles.card_graph} card-shadow`}>{children}</div>
		</>
	);
}
