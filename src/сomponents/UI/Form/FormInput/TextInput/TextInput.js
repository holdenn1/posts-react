import React from 'react';
import styles from './TextInput.module.scss';
import {useField} from "formik";
import ErrorFormText from "../../../../Errors/ErrorFormText";

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
      {meta.touched && meta.error ? <ErrorFormText>{meta.error}</ErrorFormText> : null}
    </>
  );
}
