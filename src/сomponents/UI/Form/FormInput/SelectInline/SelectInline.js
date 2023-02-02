import React from 'react';
import {Field} from 'formik'

export default function SelectInline({
                                         name,
                                         options,
                                         ...props
                                       }) {
  const renderOption = ({value: currentValue, text}) => {
    return (
      <div key={currentValue}>
        <Field
          id={currentValue}
          type='radio'
          name={name}
          value={currentValue}
          {...props}
        />
        <label htmlFor={currentValue}>{text}</label>
      </div>
    );
  };

  return <>{options.map(renderOption)}</>;
}
