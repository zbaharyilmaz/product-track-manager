import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    loading: false,
    error: false,
    token: null,
    firms: [],
    brands: [],
    products: [],
    purchases: [],
    sales: [],
    categories:[]
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
    stockSuccess: (state, { payload }) => {
      console.log("Payload", payload);
      state[payload.url] = payload.data.data;
      state.loading = false;
      state.error = false;
    },
    getProCatBrandSuccess:(state,{payload})=>{
      console.log("payload",payload);

    }
}});

export const { fetchStart, fetchFail, stockSuccess, getProCatBrandSuccess } = stockSlice.actions;
export default stockSlice.reducer;
