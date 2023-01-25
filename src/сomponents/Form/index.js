import React, { useState } from 'react';
import Acquaintance from './Acquaintance';
import Avatar from './Avatar';
import BirthDate from './BirthDate';
import Buttons from './Buttons';
import Demands from './Demands';
import EmailAndPasswordStep from './EmailAndPasswordStep';
import Orientation from './Orientation';
import styles from './styles.module.scss';
import signUpImg from './../../assets/img/icons/sign-up-64.png';

export const Context = React.createContext()

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
				return <Acquaintance />;
			case 2:
				return <BirthDate />;
			case 3:
				return <Orientation />;
			case 4:
				return <Demands />;
			case 5:
				return <Avatar />;
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
