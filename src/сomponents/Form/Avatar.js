import React from 'react'
import styles from './styles.module.scss';
import avatar from './../../assets/img/icons/avatar.webp'

export default function Avatar() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={avatar} alt="" />
			<h3 className={styles.titleForm}>Upload your photo</h3>
			<p className={styles.titleDescripton}>The photo must contain only your face</p>
		</div>
	)
}
