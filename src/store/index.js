import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './sliсes/users/usersSlice'
import currentUserReducer from './sliсes/users/currentUserSlice'
import postsSlice from './sliсes/posts/postsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
    posts: postsSlice
  }
})