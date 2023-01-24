import React, { useState } from 'react';
import Acquaintance from './Acquaintance';
import Buttons from './Buttons';
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
				return <Orientation />;
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
