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

export const Context = React.createContext();

export default function Form() {
	const [page, setPage] = useState(0);
	const [visibleForm, setVisibleForm] = useState(false);
	const modalStyles = [styles.modal];

	const value = {
		visibleForm,
		setVisibleForm,
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
		setPage(page + 1);
	}
	return (
		<>
			<Context.Provider value={value}>
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
			</Context.Provider>
		</>
	);
}
