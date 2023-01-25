import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';

export default function Orientation() {

	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Chose your sexual orientation</TitleForm>
			<div className={styles.orientationList}>
				<div className={styles.orientationItem}>
					<input
						id="orientation-hetero"
						type="radio"
						name="orientation"
						value="heterosexual"
					/>
					<label htmlFor="orientation-hetero" className={styles.orientationLabel}>
						Heterosexual
					</label>
				</div>
				<div className={styles.orientationItem}>
					<input
						id="orientation-homo"
						type="radio"
						name="orientation"
						value="homosexual"
					/>
					<label htmlFor="orientation-homo" className={styles.orientationLabel}>
						Homosexual
					</label>
				</div>
				<div className={styles.orientationItem}>
					<input
						id="orientation-bi"
						type="radio"
						name="orientation"
						value="bisexual"
					/>
					<label htmlFor="orientation-bi" className={styles.orientationLabel}>
						Bisexual
					</label>
				</div>
				<div className={styles.orientationItem}>
					<input
						id="orientation-a"
						type="radio"
						name="orientation"
						value="asexual"
					/>
					<label htmlFor="orientation-a" className={styles.orientationLabel}>
						Asexual
					</label>
				</div>
			</div>
		</div>
	);
}
