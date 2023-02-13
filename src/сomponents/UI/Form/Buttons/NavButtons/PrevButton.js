import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../../utils/context/formContext';
import styles from './Buttons.module.scss';

export default function PrevButton({ children }) {
	const { step, setStep } = useContext(formContext);
	return (
		<button type='button'  className={styles.prevBtn} onClick={() => setStep(step - 1)}>
			{children}
		</button>
	);
}
