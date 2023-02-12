import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function({userId, limit}, {getState, rejectWithValue}){
    try {
      const postsStart = getState().posts.users[userId] ? getState().posts.users[userId] : [];
      const response = await fetch(
        `http://localhost:3000/posts?userId=${userId}&_start=${postsStart.length}&_limit=${limit}`
      );
      if (!response.ok){
        throw new Error()
      }
      const data = await response.json();
      return {data, userId}
    }catch (e){
      return rejectWithValue('Post is not a found')
    }
  }
)