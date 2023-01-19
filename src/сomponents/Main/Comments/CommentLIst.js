import React from 'react';
import styles from './styles.module.scss';

export default function CommentList({ comments }) {
	return (
		<>
			{' '}
			{comments.map((comment) => {
				return (
					<div key={comment.id} className={styles.commentsContainer}>
						<div className={styles.commentItem}>
							<h3 className={styles.commentEmail}>{comment.email}</h3>
							<p className={styles.comment}>{comment.body}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
