import React from 'react';
import styles from './HobbyListContainer.module.scss';

export default function HobbyListContainer({children}) {
	return (
		<div className={styles.hobbiesList}>
			<div className={styles.hobby}>{children}</div>
		</div>
	);
}
