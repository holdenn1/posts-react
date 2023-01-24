import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';

export default function Orientation() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<h3 className={styles.titleForm}>Chose your sexual orientation</h3>
			<div className={styles.orientationList}>
				<div className={styles.orientationItem}>
					<input
						id="orientation-hetero"
						type="radio"
						name="orientation"
						value="heterosexual"
					/>
					<label for="orientation-hetero" className={styles.orientationLabel}>
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
					<label for="orientation-homo" className={styles.orientationLabel}>
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
					<label for="orientation-bi" className={styles.orientationLabel}>
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
					<label for="orientation-a" className={styles.orientationLabel}>
						Asexual
					</label>
				</div>
			</div>
		</div>
	);
}
