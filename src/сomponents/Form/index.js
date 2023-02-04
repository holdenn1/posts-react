import {Form, Formik} from 'formik';
import React from 'react';
import {useState} from 'react';
import {myFormContext} from './myFormContext';
import classNames from 'classnames';
import Buttons from '../UI/Form/Buttons/NavButtons/Buttons';
import signUpImg from './../../assets/img/icons/sign-up-64.png';
import styles from './styles.module.scss';
import EmailAndPasswordStep from './Steps/EmailAndPasswordStep/EmailAndPasswordStep';
import NameAndGenderStep from './Steps/NameAndGenderStep/NameAndGenderStep';
import BirthDateStep from './Steps/BirthDateStep/BirthDateStep';
import CountryStep from './Steps/CountryStep/CountryStep';
import HobbyStep from './Steps/HobbyStep/HobbyStep';
import AvatarStep from './Steps/AvatarStep/AvatarStep';
import validationSchema from "../../utils/schema/validationSchema";
import ErrorNoticeMassage from "../Errors/ErrorNoticeMassage";


export default function MainForm() {
  const [step, setStep] = useState(0);
  const [visibleForm, setVisibleForm] = useState(false);
  const [formData, setFormData] = useState({})
  const initialValues = {
    email: '',
    password: '',
    name: '',
    gender: '',
    birthDate: '',
    country: '',
    hobby: [],
    file: '',
  };

  const value = {
    visibleForm,
    setVisibleForm,
    step,
    setStep,

  };
  const renderSteps = (props) => {
    switch (step) {
      case 0: {
        return <EmailAndPasswordStep {...props} />;
      }
      case 1: {
        return <NameAndGenderStep {...props} />;
      }
      case 2: {
        return <BirthDateStep {...props} />;
      }
      case 3: {
        return <CountryStep {...props} />;
      }
      case 4: {
        return <HobbyStep {...props} />;
      }
      case 5: {
        return <AvatarStep {...props} />;
      }
      default:

        return null;

    }
  };


  const onSubmitForm = (values, resetForm) => {
    const data = {...formData, ...values};
    setFormData(data);
    setStep(step + 1)
    if (step === 5) {
      console.log(data)
      setVisibleForm(!visibleForm)
      setStep(0)
      resetForm()
    }
  }


  return (
    <>
      <myFormContext.Provider value={value}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => onSubmitForm(values, resetForm)}>
          {(props) => (

            <>
              <div

                className={classNames(styles.modal, {
                  [styles.modalActive]: visibleForm,
                })}
                onClick={() => setVisibleForm(!visibleForm)}
              >
                <Form
                  onSubmit={props.handleSubmit}
                  className={styles.form}
                  onClick={(e) => e.stopPropagation()}
                >
                {/*  {!props.isValid  && <ErrorNoticeMassage isValid={props.isValid}/>}*/}
                  {renderSteps(props)}
                  <Buttons formData={props} />
                </Form>
              </div>
              <img
                className={styles.signUpBtn}
                onClick={() => setVisibleForm(!visibleForm)}
                src={signUpImg}
                alt="#"
              />
            </>
          )}
        </Formik>
      </myFormContext.Provider>
    </>
  );
}
