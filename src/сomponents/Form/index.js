/* eslint-disable default-case */
import React, { useState } from 'react';
import classNames from 'classnames';
import Buttons from './Buttons';
import EmailAndPasswordStep from './EmailAndPasswordStep';
import styles from './styles.module.scss';
import signUpImg from './../../assets/img/icons/sign-up-64.png';
import AcquaintanceStep from './AcquaintanceStep';
import AvatarStep from './AvatarStep';
import BirthDateStep from './BirthDateStep';
import CountryStep from './CountryStep';
import HobbyStep from './HobbyStep';
import { checkEmail } from './../../checkFormFields/checkEmail';
import { formContext } from './formContext';
import { checkPassword } from '../../checkFormFields/checkPassword';
import { checkOnEmptyRow } from '../../checkFormFields/checkName';
import { checkHobbies } from '../../checkFormFields/checkHobbies';
import ErrorNotice from '../Errors/ErrorNotice';

export default function Form() {
	const [page, setPage] = useState(0);
	const [visibleForm, setVisibleForm] = useState(false);
	const [errorVisible, setErrorVisible] = useState(false);
	const [errorNoticeText, setErrorNoticeText] = useState('');
	const initialData = {
		email: '',
		password: '',
		name: '',
		gender: null,
		birthDate: '',
		country: null,
		hobby: [
			{ hobby: 'music', select: false },
			{ hobby: 'books', select: false },
			{ hobby: 'soccer', select: false },
			{ hobby: 'cars', select: false },
			{ hobby: 'technologies', select: false },
			{ hobby: 'photo', select: false },
		],
		avatar: null,
		location: null,
	};
	const [formData, setFormData] = useState(initialData);
	const value = {
		visibleForm,
		setVisibleForm,
		setPage,
		formData,
		setFormData,
		errorVisible,
		setErrorVisible,
	};

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

	function showError(text) {
		return setErrorVisible(true), setErrorNoticeText(text);
	}

	function handleSubmit() {
		switch (page) {
			case 0:
				if (!checkEmail(formData.email)) {
					return showError('Enter a valid email');
				}
				if (!checkPassword(formData.password)) {
					return showError(
						'Password must contain at least six characters, at least one letter, one number and one special character'
					);
				} else {
					setPage(page + 1);
				}
				break;
			case 1:
				if (checkOnEmptyRow(formData.name)) {
					return showError('Name is requred field');
				}
				if (formData.gender == null) {
					return showError('Choose your gender please, this is requred field');
				} else {
					setPage(page + 1);
				}
				break;
			case 2:
				if (formData.birthDate.length === 0) {
					return showError('Please indicate your birthday');
				} else {
					setPage(page + 1);
				}
				break;
			case 3:
				if (formData.country == null) {
					return showError('Please select your country');
				} else {
					setPage(page + 1);
				}
				break;
			case 4:
				if (checkHobbies(formData.hobby).length < 3) {
					return showError('You must choose at least three hobbies');
				} else {
					setPage(page + 1);
				}
				break;
			case 5:
				if (formData.avatar == null) {
					return showError('Upload photo');
				} else {
					setPage(0);
					setVisibleForm(!visibleForm);
					console.log(formData);
					setFormData(initialData);
				}
				break;
		}
	}

	return (
		<>
			<formContext.Provider value={value}>
				<div
					className={classNames(styles.modal, {
						[styles.modalActive]: visibleForm,
					})}
					onClick={() => setVisibleForm(!visibleForm)}
				>
					<div className={styles.form} onClick={(e) => e.stopPropagation()}>
						{errorVisible && <ErrorNotice>{errorNoticeText}</ErrorNotice>}
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
