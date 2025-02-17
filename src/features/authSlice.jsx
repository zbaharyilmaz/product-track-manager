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
    fetchSuccess: (state, { payload }) => {
    
      state.currentUser = payload.data.username;
      state.token = payload.token;
      state.loading = false;
    },
    loginSuccess: (state, { payload }) => {
      console.log(payload);
      console.log(payload.data);
      state.currentUser = payload.user.username;
      state.token = payload.token;
      state.loading = false;
    },
    logoutSuccess: state => {
      state.currentUser = null;
      state.token = null;
    },
  },
});

export const { fetchStart, fetchFail, fetchSuccess, loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
