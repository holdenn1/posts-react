import React from 'react'
import styles from './TitleForm.module.scss'
export default function TitleForm({children}) {
	return (
		<h3 className={styles.titleForm}>{children}</h3>
	)
}
