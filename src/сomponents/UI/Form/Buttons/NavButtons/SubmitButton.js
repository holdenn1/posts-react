import React from 'react';
import styles from './Buttons.module.scss';

export default function SubmitButton({ children, handleSubmit ,setStep }) {

	return (
		<button type='submit' className={styles.submitBtn} onClick={handleSubmit}>
			{children}
		</button>
	);
}
