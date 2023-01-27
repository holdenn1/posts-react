import React, { useState } from 'react';
import Buttons from './Buttons';
import EmailAndPasswordStep from './EmailAndPasswordStep';
import styles from './styles.module.scss';
import signUpImg from './../../assets/img/icons/sign-up-64.png';
import AcquaintanceStep from './AcquaintanceStep';
import AvatarStep from './AvatarStep';
import BirthDateStep from './BirthDateStep';
import CountryStep from './CountryStep';
import HobbyStep from './HobbyStep';
import avatar from './../../assets/img/icons/avatar.webp'
import { checkEmail } from './../../checkFormFields/checkEmail';
import { formContext } from './formContext';
import { checkPassword } from '../../checkFormFields/checkPassword';
export default function Form() {
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		name: '',
		gender: null,
		birthDate: '',
		country: null,
		hobby: [
			{hobby: 'music', select: false},
			{hobby: 'books', select: false},
			{hobby: 'soccer', select: false},
			{hobby: 'cars', select: false},
			{hobby: 'technologies', select: false},
			{hobby: 'photo', select: false},
		],
		avatar: null
	});
	const [visibleForm, setVisibleForm] = useState(false);
	const modalStyles = [styles.modal];

	const value = {
		visibleForm,
		setVisibleForm,
		setPage,
		formData,
		setFormData,
	};

	if (visibleForm) {
		modalStyles.push(styles.modalActive);
	}

	const conditionalComponent = () => {
		switch (page) {
			case 0:
				return <EmailAndPasswordStep />;
			case 1:
				return <AcquaintanceStep />;
			case 2:
				return <BirthDateStep />;
			case 3:
				return <CountryStep />;
			case 4:
				return <HobbyStep />;
			case 5:
				return <AvatarStep />;
			default:
				return <EmailAndPasswordStep />;
		}
	};

	function handleSubmit() {
		/* 	if (page === 0) {
			if (!checkEmail(formData.email)) {
				return alert('Test');
			}
			if(!checkPassword(formData.password)){
				return alert('Test2')
			}
		} */
		setPage(page + 1);
	}
	return (
		<>
			<formContext.Provider value={value}>
				<div
					className={modalStyles.join(' ')}
					onClick={() => setVisibleForm(!visibleForm)}
				>
					<div className={styles.form} onClick={(e) => e.stopPropagation()}>
						{conditionalComponent()}
						<Buttons
							page={page}
							setPage={setPage}
							handleSubmit={handleSubmit}
						/>
					</div>
				</div>
				<img
					className={styles.signUpBtn}
					onClick={() => setVisibleForm(!visibleForm)}
					src={signUpImg}
					alt="#"
				/>
			</formContext.Provider>
		</>
	);
}
