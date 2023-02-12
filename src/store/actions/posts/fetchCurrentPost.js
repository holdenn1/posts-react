import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCurrentPost = createAsyncThunk(
  'currentPost/fetchCurrentPost',
  async function (id, {rejectWithValue}) {
    try {

      const response = await fetch(`http://localhost:3000/posts/${id}`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data
    } catch (e) {
      return rejectWithValue('Post is not a found')
    }
  }
)