import React from 'react';
import styles from './Buttons.module.scss';

export default function NextButton({children, handleSubmit}) {
	return (
		<button className={styles.nextBtn} onClick={handleSubmit}>
			{children}
		</button>
	);
}
