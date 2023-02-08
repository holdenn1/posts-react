import React from 'react';
import UsersList from '../../UsersList';
import styles from './styles.module.scss';

export default function Users({ findUsers , error}) {

	return (
		<div className={styles.main}>
		 <UsersList error={error} findUsers={findUsers}/>
		</div>
	);
}
