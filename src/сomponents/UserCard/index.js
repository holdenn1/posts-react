import React, { Component, createRef } from 'react';
import Spinner from '../Spinner/Spinner';
import User from './User';

export default class UserCard extends Component {
	constructor({error}) {
		super();
		this.state = {
			users: [],
			isLoading: false,
		};
		this.lastElement = createRef();
		this.limit = 8;
		this.observer = new IntersectionObserver(this.loadMoreUsers);
	}

	loadUsers = async () => {
		try{
			this.setState({
				isLoading: true,
			});
			const response = await fetch(
				`http://localhost:3000/users?_start=${this.state.users.length}&_limit=${this.limit}`
			);
			const data = await response.json();
			this.props.error.setShowErrorMassage('');
			this.setState({
				isLoading: false,
				users: [...this.state.users, ...data],
			});
			if (data.length < this.limit) {
				this.observer.disconnect();
			}
		}catch (error){
			this.props.error.setShowErrorMassage('Users is not a found');
			this.setState({
				isLoading: false,
			});
			console.error(error)
		}
	};

	async componentDidMount() {
		this.setState({
			isLoading: true,
		});
		await this.loadUsers();
		this.observer.observe(this.lastElement.current);
		this.setState({
			isLoading: false,
		});
	}

	componentWillUnmount() {
		this.observer.disconnect();
	}

	loadMoreUsers = ([{ isIntersecting }]) => {
		if (isIntersecting && !this.state.isLoading) {
			this.loadUsers();
		}
	};

	render() {
		return (
			<>
				<User users={this.state.users} error={this.props.error.showErrorMassage} />
				{this.state.isLoading && <Spinner />}
				<div
					ref={this.lastElement}
					style={{ height: '20px', width: '100%' }}
				></div>
			</>
		);
	}
}
