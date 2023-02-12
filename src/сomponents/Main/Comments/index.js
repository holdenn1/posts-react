import React, {useEffect, useRef} from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import CommentList from './CommentList';
import CurrentPost from './CurrentPost';
import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentPost} from "../../../store/actions/posts/fetchCurrentPost";
import {fetchComments} from "../../../store/actions/comments/fetchComments";

export default function Comments({postId}) {
  const limit = useRef(4).current
  const dispatch = useDispatch()
  const {post, currentPostError} = useSelector(state => state.currentPost)
  const {posts, isLoading, commentsError} = useSelector(state => state.comments)
  const observElement = useRef()
  const observer = new IntersectionObserver(loadMoreComments);
  const postComments = posts[postId] ? posts[postId] : []

  useEffect(() => {
    observer.observe(observElement.current)
    dispatch(fetchCurrentPost(postId))
    if (postComments.length && postComments.length % limit !== 0) {
      observer.disconnect();
    }
    return () => observer.disconnect()
  }, [postComments.length])


  function loadMoreComments([{isIntersecting}]) {
    if (isIntersecting && !isLoading) {
      dispatch(fetchComments({postId, limit}))
    }
  };

  return (
    <>
      <div className={styles.main}>
        <CurrentPost post={post} error={currentPostError}/>
        <CommentList comments={postComments} error={commentsError}/>
        {isLoading && <Spinner/>}
      </div>
      <div
        ref={observElement}
        style={{height: '20px', width: '100%'}}
      />
    </>
  );
}
