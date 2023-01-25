import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';
import InputName from '../UI/Form/FormInput/InputName/InputName';
import GenderInput from '../UI/Form/FormInput/InputGender/InputGender';

export default function AcquaintanceStep() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Let's start acquaintance!</TitleForm>
			<InputName />
			<TitleForm>Choose your gender</TitleForm>
			<GenderInput />
		</div>
	);
}
