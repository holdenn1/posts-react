import React from 'react';
import styles from './Buttons.module.scss';

export default function SubmitButton({ children, handleSubmit }) {
	return (
		<button className={styles.submitBtn} onClick={handleSubmit}>
			{children}
		</button>
	);
}
