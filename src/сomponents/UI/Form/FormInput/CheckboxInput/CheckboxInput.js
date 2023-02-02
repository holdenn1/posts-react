import {Field} from 'formik';
import React from 'react';

export default function CheckboxInput({
                                          options,
                                          name,
                                          ...props
                                        }) {

  const renderOption = ({hobby: currentHobby, select}) => {
    return (
      <div key={currentHobby}>
        <Field
          id={currentHobby}
          type='checkbox'
          name={name}
          value={currentHobby}
          {...props}
        />
        <label htmlFor={currentHobby}>{currentHobby}</label>
      </div>
    );
  };
  return <>{options.map(renderOption)}</>;
}
