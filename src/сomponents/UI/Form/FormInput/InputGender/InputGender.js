import React from 'react'
import styles from './InputGender.module.scss'

export default function GenderInput() {
	return (
		<div className={styles.genderButtons}>
		<div className={styles.genderButtonsItem}>
			<input id="gender-male" type="radio" name="gender" value="male" />
			<label htmlFor="gender-male">Male</label>
		</div>
		<div className={styles.genderButtonsItem}>
			<input id="gender-female" type="radio" name="gender" value="female" />
			<label htmlFor="gender-female">Female</label>
		</div>
	</div>
	)
}
