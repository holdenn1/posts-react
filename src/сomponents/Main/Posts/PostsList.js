import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';
import PageErrorText from "../../Errors/PageErrorText";

export default function PostsList({posts, error}) {

  return (
    <>
      {error.length > 0 ? (
        <PageErrorText>{error}</PageErrorText>
      ) : (
        <div className={styles.postsContainer}>
          {posts.map((item) => {
            return (
              <Link
                to={`/comments/${item.id}`}
                key={item.id}
                className={styles.postLink}>
                <div className={styles.postItem}>
                  <img src={item.photo} alt="" className={styles.postImg}></img>
                  <h3 className={styles.postTitle}>{item.title}</h3>
                  <p className={styles.postBody}>{item.body}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}

    </>
  );
}
