import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
    fetchSuccess: (state, {payload}) =>{
      console.log("Hi, success");
      console.log(payload);
      state.currentUser=payload.data.username;
      state.token=payload.data.token;
    },
    logoutSuccess: state=>{
      state.currentUser=null;
      state.token=null;
    }
  },
});

export const {
  fetchStart,
  fetchFail,
  fetchSuccess,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
