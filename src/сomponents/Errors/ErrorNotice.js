import classNames from 'classnames';
import React from 'react';
import { useRef } from 'react';
import styles from './Errors.module.scss';
export default function ErrorNotice({
	children,
	errorVisible,
	setErrorVisible,
}) {
	const errMassage = useRef(null);
	if (errorVisible) {
		setTimeout(() => {
			errMassage.current.style.top = '-80px';
		}, 2000);
		setTimeout(() => {
			setErrorVisible(!errorVisible);
		}, 2200);
	}
	return (
		<div ref={errMassage} className={classNames(styles.errorNotice)}>
			<h3>{children}</h3>
		</div>
	);
}
