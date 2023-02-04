import React, {useContext} from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import SubmitButton from './SubmitButton';
import {myFormContext} from '../../../../Form/myFormContext';
import styles from './Buttons.module.scss';

export default function Buttons() {
  const {step, setStep} = useContext(myFormContext);
  return (
    <div className={styles.btnContainer}>
      {step > 0 && <PrevButton>Back</PrevButton>}
      {step === 0 || step <= 4 ? (
        <NextButton >Next</NextButton>
      ) : (
        <SubmitButton setStep={setStep}>Submit</SubmitButton>
      )}
    </div>
  );
}
