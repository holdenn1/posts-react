import React from 'react';
import styles from './styles.module.scss';
import PageErrorText from "../../Errors/PageErrorText";

export default function CommentList({comments, error}) {
  return (
    <>
      {error.length > 0 ? (
        <PageErrorText>{error}</PageErrorText>
      ) : (
        comments.map((comment) => {
          return (
            <div key={comment.id} className={styles.commentsContainer}>
              <div className={styles.commentItem}>
                <h3 className={styles.commentEmail}>{comment.email}</h3>
                <p className={styles.comment}>{comment.body}</p>
              </div>
            </div>
          );
        })
      )
      }
    </>
  );
}
