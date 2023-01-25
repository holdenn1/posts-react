import React from 'react'
import styles from './InputEmail.module.scss'

export default function InputEmail() {
	return (
		<input
				className={styles.inputForm}
				type="email"
				placeholder="Input your Email"
			/>
	)
}
