import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';

export default function Acquaintance() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Let's start acquaintance!</TitleForm>
			<input
				type="text"
				placeholder="Input your name"
				className={styles.inputForm}
			/>
			<TitleForm>Choose your gender</TitleForm>
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
		</div>
	);
}
