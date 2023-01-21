import React from 'react';
import Filter from '../Filter/Filter';
import styles from './Header.module.scss';

export default function Header({ props, title }) {
	return (
		<header className={styles.header}>
			<a href="/" className={styles.title}>
				{title}
			</a>
			{props ? <Filter props={props} /> : ''}
		</header>
	);
}
