import {useField} from 'formik';
import React from 'react';


export default function CheckboxInput(props) {

  const [field] = useField({...props, type: 'checkbox'});

  return (
    <>
      <input
        id={props.value}
        type='checkbox'
        {...field}
        {...props}
      />
      <label htmlFor={props.value}>{props.value}</label>
    </>
  )
}
