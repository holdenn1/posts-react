import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './sliсes/usersSlice'

export default configureStore({
  reducer:{
    users: usersReducer,
  }
})