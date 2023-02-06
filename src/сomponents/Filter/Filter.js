import React from 'react';
import styles from './Filter.module.scss';
import filterIcon from './../../assets/img/icons/icons8-funnel-50.png';
import classNames from 'classnames';

export default function Filter({ data }) {
	return (
		<>
			<div
				className={classNames(styles.filter, {
					[styles.filterActive]: data.visible,
				})}
				onClick={() => data.setVisible(!data.visible)}
			>
				<div
					className={styles.filterContent}
					onClick={(e) => e.stopPropagation()}
				>
					<h3 className={styles.filterTitle}>Filter</h3>
					<input
						value={data.inputAge}
						onChange={(e) => data.setInputAge(e.target.value)}
						className={styles.filterInput}
						type="text"
						placeholder="Input age"
					/>
					<button
						onClick={data.searchUsers}
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
				onClick={() => data.setVisible(!data.visible)}
			/>
		</>
	);
}
