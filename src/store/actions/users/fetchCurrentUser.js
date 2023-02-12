import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCurrentUser = createAsyncThunk(
  'currentUser/fetchCurrentUser',
  async function (id, { rejectWithValue}) {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${id}`
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data
    } catch (e) {
      return rejectWithValue('User is not a found');
    }
  }
)