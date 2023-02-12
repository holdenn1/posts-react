import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './sliсes/users/usersSlice'
import currentUserReducer from './sliсes/users/currentUserSlice'
import postsSliceReducer from './sliсes/posts/postsSlice'
import currentPostReducer from './sliсes/posts/currentPostSlice'
import commentsSliceReducer from './sliсes/commets/commentsSlice'
import searchUserReducer from './sliсes/search/searchUsersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
    posts: postsSliceReducer,
    currentPost: currentPostReducer,
    comments: commentsSliceReducer,
    search: searchUserReducer
  }
})