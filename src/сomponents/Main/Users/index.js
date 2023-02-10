import React from 'react';
import UsersList from '../../UsersList';
import styles from './styles.module.scss';

export default function Users({ findUsers }) {

	return (
		<div className={styles.main}>
		 <UsersList findUsers={findUsers}/>
		</div>
	);
}
