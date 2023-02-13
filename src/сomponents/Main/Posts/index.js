import React, {useEffect, useRef} from 'react';
import styles from './styles.module.scss';
import CurrentUser from './CurrentUser';
import PostsList from './PostsList';
import Spinner from '../../UI/Spinner/Spinner';
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../../store/actions/users/fetchCurrentUser";
import {fetchPosts} from "../../../store/actions/posts/fetchPosts";


export default function Posts({userId}) {
  const limit = useRef(4).current
  const {user, currentUserError} = useSelector(state => state.currentUser)
  const {users, isLoading, postsError} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const observElement = useRef()
  const observer = new IntersectionObserver(loadMorePosts);
  const userPosts = users[userId] ? users[userId] : []

  useEffect(() => {
    observer.observe(observElement.current)
    dispatch(fetchCurrentUser(userId))
    if (userPosts.length && userPosts.length % limit !== 0) {
      observer.disconnect();
    }
    return () => observer.disconnect()
  }, [userPosts.length])


  function loadMorePosts([{isIntersecting}]) {
    if (isIntersecting && !isLoading) {
      dispatch(fetchPosts({userId, limit}))
    }
  };

  return (
    <>
      <div className={styles.main}>
        <CurrentUser user={user} error={currentUserError}/>
        <PostsList posts={userPosts} error={postsError}/>
        {isLoading && <Spinner/>}
      </div>
      <div ref={observElement} className={styles.observedComponent}/>
    </>
  );
}
