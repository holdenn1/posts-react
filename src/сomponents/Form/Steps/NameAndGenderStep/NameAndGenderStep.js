import React from 'react';
import SelectInline from '../../../UI/Form/FormInput/SelectInline/SelectInline';
import FormContainer from './../../../UI/Form/FormContainer/FormContainer';
import TextInput from '../../../UI/Form/FormInput/TextInput/TextInput';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import aboutYouImg from './../../../../assets/img/bout-you-sign-up.png';
import styles from './../../styles.module.scss';
import GenderButtons from '../../../UI/Form/Buttons/GenderButtons/GenderButtons';
import ErrorFormText from "../../../Errors/ErrorFormText";

export default function NameAndGenderStep(props) {
  const options = [
    {value: 'male', text: 'male'},
    {value: 'female', text: 'female'},
  ];

  return (
      <FormContainer>
        <img className={styles.formImg} src={aboutYouImg} alt=""/>
        <TitleForm>Let's start acquaintance!</TitleForm>
        <TextInput
          name="name"
          placeholder="Input your name"

        />
        <TitleForm>Choose your gender</TitleForm>
        <GenderButtons>
          {options.map(({value}) => {
            return(
              <div key={value}>
                <SelectInline
                  name="gender"
                  value={value}
                />
              </div>
            )
          })}
        </GenderButtons>
        {props.touched.gender && props.errors.gender ? <ErrorFormText>{props.errors.gender}</ErrorFormText> : null}
      </FormContainer>
  );
}
