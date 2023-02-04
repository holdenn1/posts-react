import React from 'react';
import FormContainer from '../../../UI/Form/FormContainer/FormContainer';
import BirthDateInput from '../../../UI/Form/FormInput/BirthDateInput/BirthDateInput';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import aboutYouImg from './../../../../assets/img/bout-you-sign-up.png';
import styles from './../../styles.module.scss';
import ErrorFormText from "../../../Errors/ErrorFormText";
export default function BirthDateStep({ values, handleChange, ...props }) {
	return (
		<FormContainer>
			<img className={styles.formImg} src={aboutYouImg} alt="" />
			<TitleForm>Enter date of birth</TitleForm>
			<BirthDateInput
				name="birthDate"
				value={values.birthDate}
				handleChange={handleChange}
			/>
			{props.touched.birthDate && props.errors.birthDate ? <ErrorFormText>{props.errors.birthDate}</ErrorFormText> : null}
		</FormContainer>
	);
}
