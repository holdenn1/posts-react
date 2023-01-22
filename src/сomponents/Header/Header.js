import React from 'react';
import Filter from '../Filter/Filter';
import styles from './Header.module.scss';

export default function Header({ data, title }) {
	return (
		<header className={styles.header}>
			<a href="/" className={styles.title}>
				{title}
			</a>
			{data ? <Filter data={data} /> : ''}
		</header>
	);
}
