import React from 'react';
import PageErrorText from '../../Errors/PageErrorText';
import styles from './styles.module.scss';

export default function CurrentUser({ user, error }) {

	return (
		<>
			{error.length > 0 ? (
				<PageErrorText>{error}</PageErrorText>
			) : (
				user.map((item) => {
					return (
						<div key={item.id} className={styles.userContainer}>
							<img className={styles.userPhoto} src={item.photo} alt="" />
							<div className={styles.userInfo}>
								<h3 className={styles.userName}>{item.name}</h3>
								<h4 className={styles.userAge}>Age: {item.age}</h4>
								<p className={styles.userDescription}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
									nobis nihil sint cupiditate excepturi officia, eos
									perspiciatis doloribus tenetur quos, sequi quam accusantium.
									Est, quia? Itaque consectetur architecto ad ex.
								</p>
							</div>
						</div>
					);
				})
			)}
		</>
	);
}
