import React, {useContext} from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import SubmitButton from './SubmitButton';
import {formContext} from '../../../../../utils/context/formContext';
import styles from './Buttons.module.scss';

export default function Buttons(props) {
  const {step, setStep} = useContext(formContext);

  return (
    <div className={styles.btnContainer}>
      {step > 0 && <PrevButton>Back</PrevButton>}
      {step === 0 || step <= 4 ? (
            <NextButton>Next</NextButton>
      ) : (
        <SubmitButton setStep={setStep}>Submit</SubmitButton>
      )}
    </div>
  );
}
