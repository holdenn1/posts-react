import React from 'react';
import styles from './../../styles.module.scss';
import img from './../../../../assets/img/sign-up.webp';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import TextInput from '../../../UI/Form/FormInput/TextInput/TextInput';
import FormContainer from '../../../UI/Form/FormContainer/FormContainer';

export default function EmailAndPasswordStep(props) {

  return (
      <FormContainer>
        <img className={styles.formImg} src={img} alt=""/>
        <TitleForm>Fill in thr fields below</TitleForm>
        <TextInput
          type="email"
          name="email"
          placeholder="Input your email"
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Input your password"
        />
      </FormContainer>
  );
}

