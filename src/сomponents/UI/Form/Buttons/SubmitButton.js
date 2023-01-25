import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../Form';
import styles from './Buttons.module.scss';

export default function SubmitButton({ children }) {
	const { visibleForm, setVisibleForm } = useContext(Context);
	return (
		<button
			className={styles.submitBtn}
			onClick={() => setVisibleForm(!visibleForm)}
		>
			{children}
		</button>
	);
}
