import {createSlice} from '@reduxjs/toolkit'
import {fetchUsers} from "../../actions/users/fetchUsers";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: '',
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.isLoading = true
      state.error = ''

    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = [...state.users, ...action.payload]

    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export default usersSlice.reducer