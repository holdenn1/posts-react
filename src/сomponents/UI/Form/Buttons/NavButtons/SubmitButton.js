import React from 'react';
import styles from './Buttons.module.scss';

export default function SubmitButton({children}) {

  return (
    <button type='submit' className={styles.submitBtn}>
      {children}
    </button>
  );
}
