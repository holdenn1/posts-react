import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';

export default function Acquaintance() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<h3 className={styles.titleForm}>Let's start acquaintance!</h3>
			<input
				type="text"
				placeholder="Input your name"
				className={styles.inputForm}
			/>
			<h3 className={styles.titleForm}>Choose your gender</h3>
			<div className={styles.genderButtons}>
				<div className={styles.genderButtonsItem}>
					<input id="gender-male" type="radio" name="gender" value="male" />
					<label for="gender-male">Male</label>
				</div>
				<div className={styles.genderButtonsItem}>
					<input id="gender-female" type="radio" name="gender" value="female" />
					<label for="gender-female">Female</label>
				</div>
			</div>
		</div>
	);
}
