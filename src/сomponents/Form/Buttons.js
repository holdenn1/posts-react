import React from 'react';
import styles from './styles.module.scss';

export default function Buttons({ page, setPage, handleSubmit }) {
	return (
		<div className={styles.btnContainer}>
			{page > 0 && (
				<button className={styles.prevBtn} onClick={() => setPage(page - 1)}>
					Back
				</button>
			)}
			{page === 0 || page <= 4 ? (
				<button className={styles.nextBtn} onClick={handleSubmit}>
					Next
				</button>
			) : (
				<button className={styles.submitBtn}>Submit</button>
			)}
		</div>
	);
}
