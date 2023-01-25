import React from 'react'
import styles from './InputCountry.module.scss'

export default function CountryInput() {
	return (
		<div className={styles.countryList}>
				<div className={styles.countryItem}>
					<input id="ukraine" type="radio" name="country" value="ukraine" />
					<label htmlFor="ukraine" className={styles.countryLabel}>
						Ukraine
					</label>
				</div>
				<div className={styles.countryItem}>
					<input id="poland" type="radio" name="country" value="poland" />
					<label htmlFor="poland" className={styles.countryLabel}>
						Poland
					</label>
				</div>
				<div className={styles.countryItem}>
					<input id="uk" type="radio" name="country" value="uk" />
					<label htmlFor="uk" className={styles.countryLabel}>
						United Kingdom
					</label>
				</div>
				<div className={styles.countryItem}>
					<input id="america" type="radio" name="country" value="america" />
					<label htmlFor="america" className={styles.countryLabel}>
						America
					</label>
				</div>
			</div>
	)
}
