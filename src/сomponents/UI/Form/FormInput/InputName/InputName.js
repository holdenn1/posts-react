import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputName.module.scss';
export default function InputName() {
	const { formData, setFormData } = useContext(formContext);
	const handleName = (e) => {
		setFormData({
			...formData,
			name: e.target.value
		})
	}
	return (
		<input
			type="text"
			placeholder="Input your name"
			className={styles.inputForm}
			value={formData.name}
			onChange={handleName}
		/>
	);
}
