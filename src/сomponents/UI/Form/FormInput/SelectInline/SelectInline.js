import React from 'react';
import {useField} from 'formik'

export default function SelectInline(props) {
  const [field] = useField({...props, type: 'radio'});

  return <> <input
    id={props.value}
    type='radio'
    {...field}
    {...props}
  />
    <label htmlFor={props.value}>{props.value}</label>
  </>;
}
