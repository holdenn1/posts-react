import React from 'react';
import styles from './styles.module.scss';
import img from './../../assets/img/sign-up.webp';
import TitleForm from '../UI/Form/TitleForm/TitleForm';
import InputEmail from '../UI/Form/FormInput/InputEmail/InputEmail';
import InputPassword from '../UI/Form/FormInput/inputPassword/InputPassword';

export default function EmailAndPasswordStep() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={img} alt="" />
			<TitleForm>Fill in thr fields below</TitleForm>
			<InputEmail/>
			<InputPassword/>
		</div>
	);
}
