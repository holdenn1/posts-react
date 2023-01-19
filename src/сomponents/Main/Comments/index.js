import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import CommentList from './CommentLIst';
import CurrentPost from './CurrentPost';
import styles from './styles.module.scss';

export default function Comments() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComents] = useState([]);
	const [limit, setLimit] = useState(8);
	const start = useRef(0);

	useEffect(() => {
		fetch(`http://localhost:3000/posts/${id}`)
			.then((response) => response.json())
			.then((data) => setPost([data]));
	}, [id]);

	useEffect(() => {
		loadComments();
	}, []);

	async function loadComments() {
		setIsLoading(true);
		const response = await fetch(
			`http://localhost:3000/comments?postId=${id}&_start=${start.current}&_limit=${limit}`
		);
		const data = await response.json();
		setComents(data);
		setIsLoading(false);
	}
	console.log(comments);
	return (
		<>
			<div className={styles.main}>
				{isLoading && <Spinner />}
				<CurrentPost post={post} />
				<CommentList comments={comments} />
			</div>
		</>
	);
}
