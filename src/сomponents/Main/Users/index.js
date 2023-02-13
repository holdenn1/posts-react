import React from 'react';
import styles from './styles.module.scss';
import UsersList from "./UsersList";

export default function Users() {

	return (
		<div className={styles.main}>
		<UsersList/>
		</div>
	);
}
