import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    loading: false,
    error: false,
    token: null,
    firms: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    firmSuccess: (state, { payload }) => {
      console.log("Payload", payload);
      state.firms = payload.data;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { fetchStart, fetchFail, firmSuccess } = stockSlice.actions;
export default stockSlice.reducer;
