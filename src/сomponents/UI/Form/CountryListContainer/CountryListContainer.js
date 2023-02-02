import React from 'react'
import styles from './CountryListContainer.module.scss'

export default function CountryListContainer({children}) {
	return (
		<div className={styles.countryList}>
				<div className={styles.countryItem}>{children}</div>
		</div>
	)
}
