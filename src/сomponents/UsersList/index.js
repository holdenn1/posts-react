import React, {useEffect, useRef} from 'react';
import Spinner from '../UI/Spinner/Spinner';
import User from './User';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../store/actions/users/fetchUsers";


function UsersList(props) {
  const limit = useRef(8).current
  const dispatch = useDispatch()
  const {users, isLoading, error} = useSelector(state => state.users)
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
      <User loadedUsers={users} findUsers={props.findUsers} error={error}/>
      {isLoading && <Spinner/>}
      <div
        ref={observElement}
        style={{height: '20px', width: '100%'}}
      />
    </>
  );
}

export default UsersList;