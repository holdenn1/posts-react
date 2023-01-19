import React, { useEffect, useRef, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import User from './User';

export default function UserCard() {
	const [users, setUsers] = useState([]);
	const [limit, setLimit] = useState(8);
	const [isLoading, setIsLoading] = useState(false);
	const start = useRef(0);

	const lastElement = useRef();
	const observer = useRef();

	useEffect(() => {
		loadUsers();
	}, []);
	console.log(isLoading);

	async function loadUsers() {
		setIsLoading(true);
		const response = await fetch(
			`http://localhost:3000/users?_start=${start.current}&_limit=${limit}`
		);
		const data = await response.json();
		setUsers(data);
		setIsLoading(false);
	}

	/* 	useEffect(() => {
		if (isLoading) return;
		
		let loadMoreUsers = function (entries, observer) {
			if (entries[0].isIntersecting) {
				setLimit(limit + 8);
			}
		};
		observer.current = new IntersectionObserver(loadMoreUsers);
		observer.current.observe(lastElement.current);
	}, [isLoading]);
 */

	return (
		<>
			{isLoading && <Spinner />}
			<User users={users} />
			<div ref={lastElement} style={{ height: '20px', width: '100%' }}></div>
		</>
	);
}
