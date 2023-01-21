import React, { useState } from 'react';
import styles from './Filter.module.scss';
import filterIcon from './../../img/icons/icons8-funnel-50.png';
export default function Filter() {
	const [visible, setVisible] = useState(false);
	const modalStyles = [styles.filter];
	if (visible) {
		modalStyles.push(styles.filterActive);
	}

	return (
		<>
			<div
				className={modalStyles.join(' ')}
				onClick={() => setVisible(!visible)}
			>
				<div
					className={styles.filtercontant}
					onClick={(e) => e.stopPropagation()}
				>
					<h3 className={styles.filterTitle}>Filter</h3>
					<input
						className={styles.filterInput}
						type="text"
						placeholder="Input age"
					/>
					<button className={styles.searchBtn} type="button">
						Search
					</button>
				</div>
			</div>
			<img
				className={styles.filterBtn}
				src={filterIcon}
				alt="#"
				onClick={() => setVisible(!visible)}
			/>
		</>
	);
}
