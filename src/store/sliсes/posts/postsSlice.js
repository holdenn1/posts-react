import {createSlice} from "@reduxjs/toolkit";
import {fetchPosts} from "../../actions/posts/fetchPosts";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    users: {},
    posts: [],
    isLoading: false,
    postsError: ''
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true
      state.error = ''
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = [...state.posts, ...action.payload.data]
      state.users = {...state.users, [action.payload.userId]: [...state.posts.filter(post => post.userId == action.payload.userId)]}
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false
      state.postsError = action.payload
    },
  }
})

export default postsSlice.reducer