import React, { useRef } from 'react';
import { useContext } from 'react';
import { checkOnEmptyRow } from '../../../../../checkFormFields/checkName';
import { formContext } from '../../../../Form/formContext';
import styles from './InputName.module.scss';
export default function InputName() {
	const { formData, setFormData } = useContext(formContext);
	const nameInput = useRef();

	const handleName = (e) => {
		if (checkOnEmptyRow(e.target.value)) {
			nameInput.current.style.borderBottom = '1px solid red';
		} else {
			nameInput.current.style.borderBottom = '1px solid rgb(149, 149, 149)';
		}
		setFormData({
			...formData,
			name: e.target.value,
		});
	};
	return (
		<input
			ref={nameInput}
			type="text"
			placeholder="Input your name"
			className={styles.inputForm}
			value={formData.name}
			onChange={handleName}
		/>
	);
}
