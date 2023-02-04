import React from 'react';
import styles from './BirthDateInput.module.scss';
import {Field} from 'formik'

export default function BirthDateInput({
	name,
	value,
	handleChange,
	...props
}) {
	return (
		<Field
			type="date"
			name={name}
			value={value}
			className={styles.birthDate}
			{...props}

		/>
	);
}
