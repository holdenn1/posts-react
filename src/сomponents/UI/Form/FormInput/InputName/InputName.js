import React from 'react'
import styles from './InputName.module.scss'
export default function InputName() {
	return (
		<input
		type="text"
		placeholder="Input your name"
		className={styles.inputForm}
	/>
	)
}
