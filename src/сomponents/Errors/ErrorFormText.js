import React from 'react';
import styles from './Errors.module.scss'
function ErrorFormText({children}) {
  return (
    <p className={styles.formTextError}>{children}</p>
  );
}

export default ErrorFormText;