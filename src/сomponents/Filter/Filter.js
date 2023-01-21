import React from 'react';
import styles from './Filter.module.scss';
import filterIcon from './../../img/icons/icons8-funnel-50.png';

export default function Filter({props}) {
	const modalStyles = [styles.filter];

	if (props.visible) {
		modalStyles.push(styles.filterActive);
	}

	return (
		<>
			<div
				className={modalStyles.join(' ')}
				onClick={() =>props.setVisible(!props.visible)}
			>
				<div
					className={styles.filtercontant}
					onClick={(e) => e.stopPropagation()}
				>
					<h3 className={styles.filterTitle}>Filter</h3>
					<input
						value={props.inputAge}
						onChange={(e) => props.setInputAge(+e.target.value)}
						className={styles.filterInput}
						type="text"
						placeholder="Input age"
					/>
					<button
						onClick={props.searchUsers}
						className={styles.searchBtn}
						type="button"
					>
						Search
					</button>
				</div>
			</div>
			<img
				className={styles.filterBtn}
				src={filterIcon}
				alt="#"
				onClick={() => props.setVisible(!props.visible)}
			/>
		</>
	);
}
