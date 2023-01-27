import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';
import InputHobby from '../UI/Form/FormInput/InputHobby/InputHobby';

export default function HobbyStep () {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Choose your hobbies</TitleForm>
			<InputHobby/>
		</div>
	);
}
