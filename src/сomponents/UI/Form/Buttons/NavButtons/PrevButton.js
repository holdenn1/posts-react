import React from 'react';
import { useContext } from 'react';
import { myFormContext } from '../../../../Form/myFormContext';
import styles from './Buttons.module.scss';

export default function PrevButton({ children }) {
	const { step, setStep } = useContext(myFormContext);
	return (
		<button type='button' type='button' className={styles.prevBtn} onClick={() => setStep(step - 1)}>
			{children}
		</button>
	);
}
