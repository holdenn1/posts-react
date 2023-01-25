import React from 'react';
import styles from './styles.module.scss';
import aboutYouImg from './../../assets/img/bout-you-sign-up.png';
import TitleForm from '../UI/Form/TitleForm/TitleForm';

export default function Demands() {
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>What are you looking for?</TitleForm>
			<ul className={styles.demandsList}>
				<li>
					<input
						type="checkbox"
						name="demand"
						id="conversation"
						value="conversation"
					/>
					<label htmlFor="conversation">Conversation</label>
				</li>
				<li>
					<input type="checkbox" name="demand" id="flirt" value="flirt" />
					<label htmlFor="flirt">Flirt</label>
				</li>
				<li>
					<input
						type="checkbox"
						name="demand"
						id="find-friends"
						value="find-friends"
					/>
					<label htmlFor="find-friends">Find friends</label>
				</li>
				<li>
					<input
						type="checkbox"
						name="demand"
						id="find-love"
						value="find-love"
					/>
					<label htmlFor="find-love">Find love</label>
				</li>
				<li>
					<input type="checkbox" name="demand" id="date" value="date" />
					<label htmlFor="date">Go on a date</label>
				</li>
				<li>
					<input type="checkbox" name="demand" id="talk" value="talk" />
					<label htmlFor="talk">Hot talk</label>
				</li>
			</ul>
		</div>
	);
}
