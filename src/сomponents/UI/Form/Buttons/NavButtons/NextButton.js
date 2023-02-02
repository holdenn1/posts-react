import React from 'react';
import styles from './Buttons.module.scss';

export default function NextButton({children, handleSubmit}) {
	return (
		<button type='submit' className={styles.nextBtn} onClick={handleSubmit}>
			{children}
		</button>
	);
}
