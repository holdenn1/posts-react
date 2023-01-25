import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';

export default function BirthDate() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Enter date of birth</TitleForm>
			<input type="date" className={styles.firthDate} />
		</div>
	);
}
