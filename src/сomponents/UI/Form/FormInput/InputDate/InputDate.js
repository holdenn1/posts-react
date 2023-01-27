import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputeDate.module.scss';

export default function InputDate() {
	const { formData, setFormData } = useContext(formContext);
	const handleBirthDate = (e) => {
		setFormData({
			...formData,
			birthDate: e.target.value,
		});
	};
	return (
		<input
			type="date"
			className={styles.birthDate}
			value={formData.birthDate}
			onChange={handleBirthDate}
		/>
	);
}
