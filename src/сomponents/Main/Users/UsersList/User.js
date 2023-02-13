import React from 'react';
import styles from './UserCard.module.scss';
import {Link} from 'react-router-dom';
import PageErrorText from '../../../Errors/PageErrorText';
import {useSelector} from "react-redux";

export default function User({loadedUsers, userError}) {
  const {findUsers, searchError} = useSelector(state => state.search)
  const users = findUsers.length === 0 ? loadedUsers : findUsers
  const error = searchError.length === 0 ? userError : searchError
  return (
    <>
      {error.length > 0 ? (
        <PageErrorText>{error}</PageErrorText>
      ) : (
        users.map((item) => {
          return (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className={styles.container}
            >
              <img className={styles.avatar} src={item.photo} alt=""/>
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
