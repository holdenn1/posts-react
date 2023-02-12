import {createSlice} from "@reduxjs/toolkit";
import {fetchComments} from "../../actions/comments/fetchComments";

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    posts: {},
    comments: [],
    isLoading: false,
    commentsError: ''
  },
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.isLoading = true
      state.commentsError = ''
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = [...state.comments, ...action.payload.data]
      state.posts = {
        ...state.posts,
        [action.payload.postId]: [...state.comments.filter(comment => comment.postId == action.payload.postId)]
      }
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false
      state.commentsError = action.payload
    },
  }
})

export default commentsSlice.reducer