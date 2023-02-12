import {createSlice} from '@reduxjs/toolkit'
import {fetchUsers} from "../../actions/users/fetchUsers";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    userError: '',
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.isLoading = true
      state.userError = ''

    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = [...state.users, ...action.payload]

    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.userError = action.payload
    },
  }
})

export default usersSlice.reducer