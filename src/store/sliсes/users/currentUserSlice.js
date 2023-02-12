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
      state.error = ''
    },
    [fetchCurrentUser.fulfilled]: (state, action) =>{
      state.user = [action.payload]
    },
    [fetchCurrentUser.rejected]: (state, action) =>{
      state.error = action.payload
    },
  }
})

export default currentUserSlice.reducer