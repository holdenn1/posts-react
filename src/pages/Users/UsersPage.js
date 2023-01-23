import React, { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../../сomponents/Footer/Footer';
import Header from '../../сomponents/Header/Header';
import Users from '../../сomponents/Main/Users';

export default function UsersPage() {
	const [visible, setVisible] = useState(false);
	const [inputAge, setInputAge] = useState('');
	const [findUsers, setFindUsers] = useState([]);
	const [showErrorMassage, setShowErrorMassage] = useState('');

	async function searchUsers() {
		try {
			const resoponse = await fetch(`http://localhost:3000/users`);
			const data = await resoponse.json();
			const searchUsersByAge = data.filter((data) => data.age == inputAge);
			setFindUsers(searchUsersByAge);
			setInputAge(' ');
			setVisible(false);
			if (searchUsersByAge.length == 0) {
				throw new Error();
			}
		} catch (error) {
			setShowErrorMassage('Users is not a found');
			setVisible(false);
		}
	}

	return (
		<>
			<Header
				title="Users"
				data={{
					inputAge,
					setInputAge,
					findUsers,
					searchUsers,
					visible,
					setVisible,
				}}
			/>
			<Users
				findUsers={findUsers}
				error={{ showErrorMassage, setShowErrorMassage }}
			/>
			<Footer />
		</>
	);
}
