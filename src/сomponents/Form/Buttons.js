import React from 'react';
import styles from './styles.module.scss';

export default function Buttons({ page, setPage, handleSubmit }) {
	return (
		<div className={styles.btnContainer}>
			{page === 0 || page === 1 ? (
				<button className={styles.nextBtn} onClick={handleSubmit}>
					{' '}
					Next
				</button>
			) : (
				<button>Submit</button>
			)}
			{page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}
		</div>
	);
}
