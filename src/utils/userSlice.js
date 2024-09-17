import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state,action)=>{
      state = action.payload;
      return state;
    }
,
    removeUser: (state,action)=>{
      return null;
    },
    getUser:(state,action)=>{
      return state;
    }
  }
})

export const {addUser,removeUser,getUser} = userSlice.actions;
export default userSlice.reducer;