import React from 'react';
import NextButton from '../UI/Form/Buttons/NextButton';
import PrevButton from '../UI/Form/Buttons/PrevButton';
import SubmitButton from '../UI/Form/Buttons/SubmitButton';
import styles from './styles.module.scss';

export default function Buttons({ page, setPage, handleSubmit }) {
	return (
		<div className={styles.btnContainer}>
			{page > 0 && (
				<PrevButton page={page} setPage={setPage}>
					Back
				</PrevButton>
			)}
			{page === 0 || page <= 4 ? (
				<NextButton handleSubmit={handleSubmit}>Next</NextButton>
			) : (
				<SubmitButton>Submit</SubmitButton>
			)}
		</div>
	);
}
