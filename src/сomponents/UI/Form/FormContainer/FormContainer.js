import React from 'react'
import styles from './FormContainer.module.scss'
export default function FormContainer({children}) {
	return (
		<div className={styles.formContainer}>
			{children}
		</div>
	)
}
