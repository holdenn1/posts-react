import React from 'react';
import styles from './Buttons.module.scss';

export default function NextButton({children}) {

	return (
		<button type='submit' className={styles.nextBtn} >
			{children}
		</button>
	);
}
