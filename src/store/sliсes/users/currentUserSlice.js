import {createSlice} from "@reduxjs/toolkit";
import {fetchCurrentUser} from "../../actions/users/fetchCurrentUser";

const currentUserSlice = createSlice({
  name:'currentUser',
  initialState:{
    user:[],
    currentUserError:''
  },
  extraReducers:{
    [fetchCurrentUser.pending]: (state, action) =>{
      state.currentUserError = ''
    },
    [fetchCurrentUser.fulfilled]: (state, action) =>{
      state.user = [action.payload]
    },
    [fetchCurrentUser.rejected]: (state, action) =>{
      state.currentUserError = action.payload
    },
  }
})

export default currentUserSlice.reducer