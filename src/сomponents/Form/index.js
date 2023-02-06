import React,{useState} from 'react';
import {Form, Formik} from 'formik';
import {formContext} from '../../utils/context/formContext';
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

export default function MainForm() {
  const [step, setStep] = useState(0);
  const [visibleForm, setVisibleForm] = useState(false);
  const [formData, setFormData] = useState({})
  const currentValidationSchema = validationSchema[step]


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

  const handleSubmit = (values, resetForm) => {
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
      <formContext.Provider value={{
        visibleForm,
        setVisibleForm,
        step,
        setStep,

      }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            gender: '',
            birthDate: '',
            country: '',
            hobby: [],
            file: '',
          }}
          validationSchema={currentValidationSchema}
          onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}>
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
                  {renderSteps(props)}
                  <Buttons/>
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
      </formContext.Provider>
    </>
  );
}
