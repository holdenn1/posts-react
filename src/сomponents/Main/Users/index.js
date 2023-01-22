import React from 'react';
import UserCard from '../../UserCard';
import User from '../../UserCard/User';

import styles from './styles.module.scss';

export default function Users({ findUsers , error}) {
	
	return (
		<div className={styles.main}>
			{findUsers.length === 0 ? <UserCard error={error}/> : <User users={findUsers} error={error}/>}
		</div>
	);
}
