import React from 'react'
import styles from './Buttons.module.scss'

export default function PrevButton({children, page, setPage}) {
	return (
		<button className={styles.prevBtn} onClick={() => setPage(page - 1)}>
					{children}
				</button>
	)
}
