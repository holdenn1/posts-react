import React from 'react';
import styles from './styles.module.scss';
import img from './../../assets/img/sign-up.webp';
export default function EmailAndPasswordStep() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={img} alt="" />
			<h3 className={styles.titleForm}>Fill in thr fields below</h3>
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
