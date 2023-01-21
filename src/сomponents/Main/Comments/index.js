import React, { Component, createRef } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import CommentList from './CommentLIst';
import CurrentPost from './CurrentPost';
import styles from './styles.module.scss';


class CommentsComponents extends Component {
	constructor() {
		super();
		this.state = {
			post: [],
			comments: [],
			isLoading: false,
		};
		this.lastElement = createRef();
		this.limit = 4;
		this.observer = new IntersectionObserver(this.loadMoreComments);
	}

	loadPost = async () => {
		const response = await fetch(
			`http://localhost:3000/posts/${this.props.id}`
		);
		const data = await response.json();
		this.setState({
			post: [data],
		});
	};

	loadComments = async () => {
		this.setState({
			isLoading: true,
		});
		const response = await fetch(
			`http://localhost:3000/comments?postId=${this.props.id}&_start=${this.state.comments.length}&_limit=${this.limit}`
		);
		const data = await response.json();
		this.setState({
			isLoading: false,
			comments: [...this.state.comments, ...data],
		});
		if (data.length < this.limit) {
			this.observer.disconnect();
		}
	};

	async componentDidMount() {
		this.setState({
			isLoading: true,
		});
		await this.loadPost();
		await this.loadComments();
		this.observer.observe(this.lastElement.current);
		this.setState({
			isLoading: false,
		});
	}

	componentWillUnmount() {
		this.observer.disconnect();
	}

	loadMoreComments = ([{ isIntersecting }]) => {
		if (isIntersecting && !this.state.isLoading) {
			this.loadComments();
			console.log(1)
		}
	};
	render() {
		return (
			<>
				<div className={styles.main}>
					<CurrentPost post={this.state.post} />
					<CommentList comments={this.state.comments} />
					{this.state.isLoading && <Spinner />}
				</div>
				<div
					ref={this.lastElement}
					style={{ height: '20px', width: '100%' }}
				></div>
			</>
		);
	}
}

export default function Comments() {
	const { id } = useParams();
	return <CommentsComponents id={id} />;
}