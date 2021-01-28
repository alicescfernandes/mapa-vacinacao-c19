import styles from './Card.module.scss';

console.log({ styles });

export function Card({ children }) {
	return (
		<>
			<div className={`${styles.card_graph} card-shadow`}>{children}</div>
		</>
	);
}
