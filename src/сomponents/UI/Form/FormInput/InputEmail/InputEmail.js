import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputEmail.module.scss';

export default function InputEmail() {
	const {formData, setFormData} = useContext(formContext);

	const handleEmail = (e) => {
		setFormData({
			...formData,
			email: e.target.value
		})
	};
	return (
		<input
			className={styles.inputForm}
			type="email"
			value={formData.email}
			onChange={handleEmail}
			placeholder="Input your Email"
		/>
	);
}
