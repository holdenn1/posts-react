import React from 'react'
import styles from './InputPassword.module.scss'

export default function InputPassword() {
	return (
		<input
				className={styles.inputForm}
				type="password"
				placeholder="Input your Password"
			/>
	)
}
