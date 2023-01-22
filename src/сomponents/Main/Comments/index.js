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
			errorMassage: '',
		};
		this.lastElement = createRef();
		this.limit = 4;
		this.observer = new IntersectionObserver(this.loadMoreComments);
	}

	loadPost = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/posts/${this.props.id}`
			);
			const data = await response.json();
			this.setState({
				post: [data],
				
			});
		} catch (error) {
			this.setState({
				errorMassage: 'Post is not a found',
			})
			
		}
	};

	loadComments = async () => {
		try{
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
		}catch(error){
			this.setState({
				isLoading: false,
				errorMassage: 'Comments is not a found',
			})
			console.error(error)
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
		}
	};
	render() {
		return (
			<>
				<div className={styles.main}>
					<CurrentPost post={this.state.post} error={this.state.errorMassage}/>
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
