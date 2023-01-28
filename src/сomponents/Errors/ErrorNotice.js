import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { formContext } from '../Form/formContext';
import styles from './Errors.module.scss';

export default function ErrorNotice({ children }) {
	const { errorVisible, setErrorVisible } = useContext(formContext);
	const errMassage = useRef();
	useEffect(() => {
		if (errorVisible) {
			setTimeout(() => {
				errMassage.current.style.top = '-80px';
			}, 2000);
		}
		if (errorVisible) {
			setTimeout(() => {
				setErrorVisible(!errorVisible);
			}, 2200);
		}
	},[])



	return (
		<div ref={errMassage} className={styles.errorNotice}>
			<h3>{children}</h3>
		</div>
	);
}
