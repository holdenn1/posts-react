import React from 'react';
import PageErrorText from '../../Errors/PageErrorText';
import styles from './styles.module.scss';

export default function CurrentPost({ post, error }) {
	return (
		<>
			{error.length > 0 ? (
				<PageErrorText>{error}</PageErrorText>
			) : (
				post.map((post) => {
					return (
						<div key={post.id} className={styles.postContainer}>
							<img src={post.photo} alt="" className={styles.postImg} />
							<div className={styles.postInfo}>
								<h3 className={styles.postTitle}>{post.title}</h3>
								<p className={styles.postBody}>{post.body}</p>
							</div>
						</div>
					);
				})
			)}
		</>
	);
}
