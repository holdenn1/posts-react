import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import CurrentUser from './CurrentUser';
import PostsList from './PostsList';
import Spinner from '../../Spinner/Spinner';

export default function Posts() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState([]);
	const [posts, setPosts] = useState([]);
	const limit = useRef(4);
	let page = useRef(1);

	const lastElement = useRef();
	const observer = useRef();

	useEffect(() => {
		fetch(`http://localhost:3000/users/${id}`)
			.then((response) => response.json())
			.then((data) => setUser([data]));
	}, [id]);

	useEffect(() => {
		loadPosts();
	}, []);

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		let loadMorePosts = function ([{ isIntersecting }]) {
			if (isIntersecting && page.current < 3) {
				page.current += 1;
				loadPosts();
			}
		};
		observer.current = new IntersectionObserver(loadMorePosts);
		observer.current.observe(lastElement.current);
		return () => {
			observer.current.disconnect();
		};
	}, [isLoading]);

	async function loadPosts() {
		setIsLoading(true);
		const response = await fetch(
			`http://localhost:3000/posts?userId=${id}&_limit=${limit.current}&_page=${page.current}`
		);
		const data = await response.json();
		console.log(data);
		setPosts([...posts, ...data]);
		setIsLoading(false);
	}

	return (
		<>
			<div className={styles.main}>
				<CurrentUser user={user} />
				<PostsList posts={posts} />
				{isLoading && <Spinner />}
			</div>
			<div ref={lastElement} style={{ height: '20px', width: '100%' }}></div>
		</>
	);
}
