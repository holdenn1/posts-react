import React, { useState } from 'react';
import Footer from '../../сomponents/Footer/Footer';
import Header from '../../сomponents/Header/Header';
import Users from '../../сomponents/Main/Users';

export default function UsersPage() {
	const [visible, setVisible] = useState(false);
	const [inputAge, setInputAge] = useState('');
	const [findUsers, setFindUsers] = useState([]);

	async function searchUsers() {
		const resoponse = await fetch(`http://localhost:3000/users`);
		const data = await resoponse.json();
		const searchUsersByAge = data.filter((data) => data.age === inputAge);
		setFindUsers(searchUsersByAge);
		setInputAge(' ');
		setVisible(false);
	}
	return (
		<>
			<Header
				title="Users"
				props={{
					inputAge,
					setInputAge,
					findUsers,
					searchUsers,
					visible,
					setVisible,
				}}
			/>
			<Users findUsers={findUsers} />
			<Footer />
		</>
	);
}
