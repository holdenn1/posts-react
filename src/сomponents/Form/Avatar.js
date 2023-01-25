import React from 'react'
import styles from './styles.module.scss';
import avatar from './../../assets/img/icons/avatar.webp'
import TitleForm from '../UI/Form/TitleForm/TitleForm';

export default function Avatar() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={avatar} alt="" />
			<TitleForm>Upload your photo</TitleForm>
			<p className={styles.titleDescripton}>The photo must contain only your face</p>
		</div>
	)
}
