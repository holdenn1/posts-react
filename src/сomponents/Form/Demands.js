import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';

export default function Demands() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<h3 className={styles.titleForm}>What are you looking for?</h3>
			<ul className={styles.demandsList}>
				<li>
					<input
						type="checkbox"
						name="demand"
						id="conversation"
						value="conversation"
					/>
					<label for="conversation">Conversation</label>
				</li>
				<li>
					<input type="checkbox" name="demand" id="flirt" value="flirt" />
					<label for="flirt">Flirt</label>
				</li>
				<li>
					<input
						type="checkbox"
						name="demand"
						id="find-friends"
						value="find-friends"
					/>
					<label for="find-friends">Find friends</label>
				</li>
				<li>
					<input
						type="checkbox"
						name="demand"
						id="find-love"
						value="find-love"
					/>
					<label for="find-love">Find love</label>
				</li>
				<li>
					<input type="checkbox" name="demand" id="date" value="date" />
					<label for="date">Go on a date</label>
				</li>
				<li>
					<input type="checkbox" name="demand" id="talk" value="talk" />
					<label for="talk">Hot talk</label>
				</li>
			</ul>
		</div>
	);
}
