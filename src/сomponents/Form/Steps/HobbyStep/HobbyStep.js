import React from 'react';
import styles from './../../styles.module.scss';
import FormContainer from '../../../UI/Form/FormContainer/FormContainer';
import aboutYouImg from './../../../../assets/img/bout-you-sign-up.png';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import HobbyListContainer from '../../../UI/Form/HobbyListContainer/HobbyListContainer';
import CheckboxInput from '../../../UI/Form/FormInput/CheckboxInput/CheckboxInput';
import SelectInline from "../../../UI/Form/FormInput/SelectInline/SelectInline";
import GenderButtons from "../../../UI/Form/Buttons/GenderButtons/GenderButtons";

export default function HobbyStep({ values }) {
	const options = [
		{ hobby: 'music', select: false },
		{ hobby: 'books', select: false },
		{ hobby: 'soccer', select: false },
		{ hobby: 'cars', select: false },
		{ hobby: 'technologies', select: false },
		{ hobby: 'photo', select: false },
	];
	return (
		<FormContainer>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Choose your hobbies</TitleForm>
			<HobbyListContainer>
				{options.map(({hobby}) => {
					return(
						<div key={hobby}>
							<CheckboxInput
								name="hobby"
								value={hobby}
							/>

						</div>
					)
				})}

			</HobbyListContainer>
		</FormContainer>
	);
}
