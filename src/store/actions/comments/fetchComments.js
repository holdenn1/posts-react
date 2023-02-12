import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async function ({postId, limit}, {getState, rejectWithValue}) {
    try {
      const commentsStart = getState().comments.posts[postId] ? getState().comments.posts[postId] : []
      const response = await fetch(
        `http://localhost:3000/comments?postId=${postId}&_start=${commentsStart.length}&_limit=${limit}`
      );
      if (!response.ok) {
        throw new Error()
      }
      const data = await response.json();
      return {data, postId}
    } catch (e) {
      return rejectWithValue('Comments is not a found')
    }
  }
)