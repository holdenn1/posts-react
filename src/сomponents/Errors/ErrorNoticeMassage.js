import React, {useEffect, useState} from 'react';
import styles from './Errors.module.scss'
import * as classNames from "classnames";

function ErrorNoticeMassage({isValid}) {
  const [errorVisible, setErrorVisible] = useState(false);

  console.log(isValid)
  return (
    errorVisible &&
    <div className={classNames(styles.notice)}>
      <p>Field check</p>
    </div>

  );
}

export default ErrorNoticeMassage;