import {createSlice} from "@reduxjs/toolkit";
import {fetchSearchUsers} from "../../actions/search/fetchSearchUsers";

const searchUsersSlice = createSlice({
  name: 'searchUsers',
  initialState: {
    findUsers: [],
    searchError: '',
    searching: false
  },
  extraReducers:{
    [fetchSearchUsers.pending]: (state, action) => {
      state.searching = true
      state.searchError = ''
    },
    [fetchSearchUsers.fulfilled]: (state, action) => {
      state.searching = false
      state.findUsers = action.payload
    },
    [fetchSearchUsers.rejected]: (state, action) => {
      state.searching = false
      state.searchError = action.payload

    },
  }
})

export default searchUsersSlice.reducer