import React from 'react';
import { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputCountry.module.scss';

export default function CountryInput() {
	const countries = ['ukraine', 'poland', 'india', 'america'];
	const { formData, setFormData } = useContext(formContext);

	const handleCountry = (country) => {
		setFormData({
			...formData,
			country: country,
		});
	};

	return (
		<div className={styles.countryList}>
			{countries.map((country, inx) => {
				return (
					<div key={inx} className={styles.countryItem}>
						<input
							id={country}
							type="radio"
							name="country"
							value={country}
							checked={formData.country === country}
							onChange={() => handleCountry(country)}
						/>
						<label htmlFor={country} className={styles.countryLabel}>
							{country}
						</label>
					</div>
				);
			})}
		</div>
	);
}
