import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../Form/formContext';
import styles from './Buttons.module.scss';

export default function SubmitButton({ children }) {
	const { visibleForm, setVisibleForm, setPage } = useContext(formContext);

	const handleSubmit = () => {
		setPage(0);
		setVisibleForm(!visibleForm);
	};
	return (
		<button className={styles.submitBtn} onClick={handleSubmit}>
			{children}
		</button>
	);
}
