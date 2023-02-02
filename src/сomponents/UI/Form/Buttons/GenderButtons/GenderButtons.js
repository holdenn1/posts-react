import React from 'react';
import styles from './GenderButtons.module.scss';
export default function GenderButtons({ children }) {
	return (
		<div className={styles.genderButtons}>
			<div className={styles.genderButtonsItem}>{children}</div>
		</div>
	);
}
