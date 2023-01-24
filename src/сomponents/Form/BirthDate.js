import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';

export default function BirthDate() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<h3 className={styles.titleForm}>Enter date of birth</h3>
			<input type="date" className={styles.firthDate} />
		</div>
	);
}
