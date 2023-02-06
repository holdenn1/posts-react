import React from 'react';
import styles from './TextInput.module.scss';
import {useField} from "formik";
import ErrorFormText from "../../../../Errors/ErrorFormText";
import * as classNames from "classnames";

export default function TextInput({...props}) {
  const [field, meta] = useField(props)
  return (
    <>
      <input
        type='name'
        className={classNames(styles.inputForm, {[styles.error]: meta.error}) }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <ErrorFormText>{meta.error}</ErrorFormText> : null}
    </>
  );
}
