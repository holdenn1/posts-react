import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputGender.module.scss';

export default function GenderInput() {
	const gender = ['male', 'female'];
	const { formData, setFormData } = useContext(formContext);

	const handleGender = (gender) => {
		setFormData({
			...formData,
			gender: gender,
		});
	};
	return (
		<div className={styles.genderButtons}>
			{gender.map((gender, inx) => {
				return (
					<div key={inx} className={styles.genderButtonsItem}>
						<input
							id={gender}
							type="radio"
							name="gender"
							value={gender}
							checked={formData.gender === gender}
							onChange={() => handleGender(gender)}
						/>
						<label htmlFor={gender}>{gender}</label>
					</div>
				);
			})}
		</div>
	);
}
