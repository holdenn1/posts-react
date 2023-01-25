import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';
import CountryInput from '../UI/Form/FormInput/InputCountry/InputCountry';

export default function CountryStep () {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>choose your country</TitleForm>
			<CountryInput/>
		</div>
	);
}
