import {createSlice} from "@reduxjs/toolkit";
import {fetchSearchUsers} from "../../actions/search/fetchSearchUsers";

const searchUsersSlice = createSlice({
  name: 'searchUsers',
  initialState: {
    findUsers: [],
    searchError: ''
  },
  extraReducers:{
    [fetchSearchUsers.pending]: (state, action) => {
      state.searchError = ''
    },
    [fetchSearchUsers.pending]: (state, action) => {
      state.findUsers = action.payload
    },
    [fetchSearchUsers.pending]: (state, action) => {
      state.searchError = action.payload
    },
  }
})

export default searchUsersSlice.reducer