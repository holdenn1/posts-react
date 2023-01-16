import React from 'react';
import styles from './Header.module.scss';


export default function Header(props) {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>{props.title}</h1>
		</header>
	);
}
