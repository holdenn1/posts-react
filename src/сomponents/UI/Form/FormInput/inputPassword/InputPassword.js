import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputPassword.module.scss';

export default function InputPassword() {
	const { formData, setFormData } = useContext(formContext);

	const handlePassword = (e) => {
		setFormData({
			...formData,
			password: e.target.value,
		});
	};
	return (
		<input
			className={styles.inputForm}
			type="password"
			placeholder="Input your Password"
			value={formData.password}
			onChange={handlePassword}
		/>
	);
}
