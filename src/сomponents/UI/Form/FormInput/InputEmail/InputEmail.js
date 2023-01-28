import classNames from 'classnames';
import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { checkEmail } from '../../../../../checkFormFields/checkEmail';
import { formContext } from '../../../../Form/formContext';
import styles from './InputEmail.module.scss';

export default function InputEmail() {
	const { formData, setFormData } = useContext(formContext);
	const emailInput = useRef();

	const handleEmail = (e) => {
		if (!checkEmail(e.target.value)) {
			emailInput.current.style.borderBottom = '1px solid red';
		} else {
			emailInput.current.style.borderBottom = '1px solid rgb(149, 149, 149)';
		}
		setFormData({
			...formData,
			email: e.target.value,
		});
	};

	return (
		<input
			ref={emailInput}
			className={styles.inputForm}
			type="email"
			value={formData.email}
			onChange={handleEmail}
			placeholder="Input your Email"
		/>
	);
}
