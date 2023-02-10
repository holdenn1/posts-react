import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function (limit, {getState, rejectWithValue}) {
    try {
      const usersStart = getState().users.users.length
      const
        response = await fetch(
          `http://localhost:3000/users?_start=${usersStart}&_limit=${limit}`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data
    } catch (e) {
      return rejectWithValue('Users is not a found');
    }
  }
)