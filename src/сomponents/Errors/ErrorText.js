import React from 'react';
import styles from './Errors.module.scss';

export default function ErrorText(props) {
	return <p className={styles.textError}> {props.children}</p>;
}
