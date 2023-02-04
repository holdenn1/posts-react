import React, {useContext} from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import SubmitButton from './SubmitButton';
import {myFormContext} from '../../../../Form/myFormContext';
import styles from './Buttons.module.scss';

export default function Buttons({formData }) {
  const {step, setStep} = useContext(myFormContext);
  const steps = ['EmailAndPasswordStep', 'NameAndGenderStep', 'BirthDateStep', 'CountryStep', 'HobbyStep', 'AvatarStep'];

  const handleStep = () => {
    setStep(step + 1)
  }

  return (
    <div className={styles.btnContainer}>
      {step > 0 && <PrevButton>Back</PrevButton>}
      {step === 0 || step <= 4 ? (
        <NextButton handleStep={handleStep}>Next</NextButton>
      ) : (
        <SubmitButton setStep={setStep}>Submit</SubmitButton>
      )}
    </div>
  );
}
