import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchSearchUsers = createAsyncThunk(
  'searchUsers/fetchSearchUsers',
  async function (inputAge,{rejectWithValue}){
    try {
      const response = await fetch(`http://localhost:3000/users`);
      const data = await response.json();
      const searchUsersByAge = data.filter((data) => data.age == inputAge);
      if (!response.ok || searchUsersByAge.length == 0) {
        throw new Error();
      }
      return searchUsersByAge
    }catch (e){
      return rejectWithValue('Users is not a found')
    }
  }
)