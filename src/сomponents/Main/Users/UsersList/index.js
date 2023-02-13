import React, {useEffect, useRef} from 'react';
import Spinner from '../../../UI/Spinner/Spinner';
import User from './User';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../../store/actions/users/fetchUsers";
import styles from './UserCard.module.scss'


export default function UsersList() {
  const limit = useRef(8).current
  const dispatch = useDispatch()
  const {users, isLoading, userError} = useSelector(state => state.users)
  const {searching} = useSelector(state => state.search)
  const observElement = useRef()
  const observer = new IntersectionObserver(loadMoreUsers);


  useEffect(() => {
    observer.observe(observElement.current);
    if (users.length && users.length % limit !== 0) {
      observer.disconnect();
    }
    return () => observer.disconnect()
  }, [users.length])


  function loadMoreUsers([{isIntersecting}]) {
    if (isIntersecting && !isLoading) {
      dispatch(fetchUsers(limit))
    }
  };

  return (
    <>
      <User loadedUsers={users} userError={userError}/>
      {isLoading && <Spinner />}
      {!searching && <div ref={observElement} className={styles.observedComponent}/>}
    </>
  );
}

