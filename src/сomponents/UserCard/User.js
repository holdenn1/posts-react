import React from 'react';
import styles from './UserCard.module.scss';
import { Link } from 'react-router-dom';
import ErrorText from '../Errors/ErrorText';

export default function User({ users, error }) {
	return (
		<>
			{error.length > 0 ? (
				<ErrorText>{error}</ErrorText>
			) : (
				users.map((item) => {
					return (
						<Link
							to={`/posts/${item.id}`}
							key={item.id}
							className={styles.container}
						>
							<img className={styles.avatar} src={item.photo} alt="" />
							<div className={styles.info}>
								<h3 className={styles.name}>{item.name}</h3>
								<h4 className={styles.age}>Age: {item.age}</h4>
								<p className={styles.site}>{item.website}</p>
							</div>
						</Link>
					);
				})
			)}
		</>
	);
}
