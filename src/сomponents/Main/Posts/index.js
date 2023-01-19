import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Link, useParams } from 'react-router-dom';
import CurrentUser from './CurrentUser';
import PostsList from './PostsList';
import Spinner from '../../Spinner/Spinner';

export default function Posts() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState([]);
	const [posts, setPosts] = useState([]);
	const [limit, setLimit] = useState(8);
	const start = useRef(0);

	useEffect(() => {
		fetch(`http://localhost:3000/users/${id}`)
			.then((response) => response.json())
			.then((data) => setUser([data]));
	}, [id]);

	useEffect(() => {
		loadPosts();
	}, []);

	async function loadPosts() {
		setIsLoading(true);
		const response = await fetch(
			`http://localhost:3000/posts?userId=${id}&_start=${start.current}&_limit=${limit}`
		);
		const data = await response.json();
		setPosts(data);
		setIsLoading(false);
	}

	return (
		<>
			<div className={styles.main}>
				{isLoading && <Spinner />}
				<CurrentUser user={user} />
				<PostsList posts={posts} />
			</div>
		</>
	);
}
