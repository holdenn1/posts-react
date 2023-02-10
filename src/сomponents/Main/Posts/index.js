import React, { Component, createRef } from 'react';
import {  useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import CurrentUser from './CurrentUser';
import PostsList from './PostsList';
import Spinner from '../../UI/Spinner/Spinner';


class PostsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			posts: [],
			isLoading: false,
			errorMassage: ''
		};
		this.lastElement = createRef();
		this.limit = 4;
		this.observer = new IntersectionObserver(this.loadMorePosts);
	}

	loadUser = async () => {
		try{
			const response = await fetch(
				`http://localhost:3000/users/${this.props.id}`
			);
			const data = await response.json();
			this.setState({
				user: [data],
			});
		}catch(error){
			this.setState({
				errorMassage: 'User is not a found'
			})
			console.error(error)
		}

		
	};

	loadPosts = async () => {
		try{
			this.setState({
				isLoading: true,
			});
			const response = await fetch(
				`http://localhost:3000/posts?userId=${this.props.id}&_start=${this.state.posts.length}&_limit=${this.limit}`
			);
			const data = await response.json();
			this.setState({
				isLoading: false,
				posts: [...this.state.posts, ...data],
			});
			if (data.length < this.limit) {
				this.observer.disconnect();
			}
		}catch (error){
			this.setState({
				isLoading: false,
				errorMassage: 'Post is not a found',
			})
			console.error(error)
		}
		
	};

	async componentDidMount() {
		this.setState({
			isLoading: true,
		});
		await this.loadUser();
		await this.loadPosts();
		this.observer.observe(this.lastElement.current);
		this.setState({
			isLoading: false,
		});
	}

	componentWillUnmount() {
		this.observer.disconnect();
	}

	loadMorePosts = ([{ isIntersecting }]) => {
		if (isIntersecting && !this.state.isLoading) {
			this.loadPosts();
		}
	};

	render() {
		return (
			<>
				<div className={styles.main}>
					<CurrentUser user={this.state.user} error={this.state.errorMassage}/>
					<PostsList posts={this.state.posts} />
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

export default function Posts() {
	const { id } = useParams();
	return <PostsComponent id={id} />;
}


