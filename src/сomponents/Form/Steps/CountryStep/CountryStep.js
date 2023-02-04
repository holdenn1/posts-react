import React from 'react';
import styles from './../../styles.module.scss';
import aboutYouImg from './../../../../assets/img/bout-you-sign-up.png';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import FormContainer from '../../../UI/Form/FormContainer/FormContainer';
import CountryListContainer from '../../../UI/Form/CountryListContainer/CountryListContainer';
import SelectInline from '../../../UI/Form/FormInput/SelectInline/SelectInline';
import ErrorFormText from "../../../Errors/ErrorFormText";

export default function CountryStep(props) {
  const options = [
    {value: 'ukraine', text: 'ukraine'},
    {value: 'poland', text: 'poland'},
    {value: 'america', text: 'america'},
    {value: 'india', text: 'india'},
  ];

  return (
    <FormContainer>
      <img className={styles.formImg} src={aboutYouImg} alt=""/>
      <TitleForm>Choose your country</TitleForm>
      <CountryListContainer>
        {options.map(({value}) => {
          return (
            <div key={value}>
              <SelectInline
                name="country"
                value={value}
              />
            </div>
          )
        })}
      </CountryListContainer>
      {props.touched.country && props.errors.country ? <ErrorFormText>{props.errors.country}</ErrorFormText> : null}
    </FormContainer>
  );
}
