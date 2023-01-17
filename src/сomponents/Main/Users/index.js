import React from 'react';
import UserCard from '../../UserCard/UserCard';
import styles from './styles.module.scss';

export default function Users() {
	return (
		<div className={styles.main}>
			<UserCard />

		</div>
	);
}
