import React from 'react';
import styles from './Buttons.module.scss';

export default function NextButton({children, handleStep}) {
	return (
		<button type='submit' className={styles.nextBtn} onClick={handleStep}>
			{children}
		</button>
	);
}
