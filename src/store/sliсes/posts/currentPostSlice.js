import {createSlice} from "@reduxjs/toolkit";
import {fetchCurrentPost} from "../../actions/posts/fetchCurrentPost";

const currentPostSlice = createSlice({
  name: 'currentPost',
  initialState:{
    post: [],
    currentPostError: ''
  },
  extraReducers:{
    [fetchCurrentPost.pending]: (state, action) => {
      state.currentPostError = ''
    },
    [fetchCurrentPost.fulfilled]: (state, action) => {
      state.post = [action.payload]
    },
    [fetchCurrentPost.rejected]: (state, action) => {
      state.currentPostError = action.payload
    },
  }
})

export default currentPostSlice.reducer