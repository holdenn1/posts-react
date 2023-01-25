import React from 'react';
import styles from './styles.module.scss';
import img from './../../assets/img/sign-up.webp';
import TitleForm from '../UI/Form/TitleForm/TitleForm';
export default function EmailAndPasswordStep() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={img} alt="" />
			<TitleForm>Fill in thr fields below</TitleForm>
			<input
				className={styles.inputForm}
				type="email"
				placeholder="Input your Email"
			/>
			<input
				className={styles.inputForm}
				type="password"
				placeholder="Input your Password"
			/>
		</div>
	);
}
