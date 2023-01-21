import React from 'react';
import UserCard from '../../UserCard';
import User from '../../UserCard/User';

import styles from './styles.module.scss';

export default function Users({ findUsers }) {
	return (
		<div className={styles.main}>
			{findUsers.length === 0 ? <UserCard /> : <User users={findUsers}/>}
		</div>
	);
}
