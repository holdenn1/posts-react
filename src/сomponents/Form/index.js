import React, { useState } from 'react';
import Acquaintance from './Acquaintance';
import Avatar from './Avatar';
import BirthDate from './BirthDate';
import Buttons from './Buttons';
import Demands from './Demands';
import EmailAndPasswordStep from './EmailAndPasswordStep';
import Orientation from './Orientation';
import styles from './styles.module.scss';

export default function Form() {
	const modalStyles = [styles.modal];
	const [page, setPage] = useState(0);
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
			<div className={modalStyles.join(' ')}>
				<div className={styles.form}>
					{conditionalComponent()}
					<Buttons page={page} setPage={setPage} handleSubmit={handleSubmit} />
				</div>
			</div>
		</>
	);
}
