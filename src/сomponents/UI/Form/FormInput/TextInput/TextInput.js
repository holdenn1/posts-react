import classNames from 'classnames';
import React from 'react';
import styles from './TextInput.module.scss';
import {useField} from "formik";

export default function TextInput({...props}) {
  const [field, meta] = useField(props)
  return (
    <>
      <input
        type='name'
        className={styles.inputForm}
        {...field}
        {...props}
      />
    </>
  );
}
