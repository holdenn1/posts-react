import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { checkPassword } from '../../../../../checkFormFields/checkPassword';
import { formContext } from '../../../../Form/formContext';
import styles from './InputPassword.module.scss';

export default function InputPassword() {
	const { formData, setFormData } = useContext(formContext);
	const passwordInput = useRef();
	const handlePassword = (e) => {
		if (!checkPassword(e.target.value)) {
			passwordInput.current.style.borderBottom = '1px solid red';
		} else {
			passwordInput.current.style.borderBottom = '1px solid rgb(149, 149, 149)';
		}
		setFormData({
			...formData,
			password: e.target.value,
		});
	};
	return (
		<input
			ref={passwordInput}
			className={styles.inputForm}
			type="password"
			placeholder="Input your Password"
			value={formData.password}
			onChange={handlePassword}
		/>
	);
}
