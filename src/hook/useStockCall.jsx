import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);

      console.log(data);
      dispatch(stockSuccess({ url, data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);
      console.log(data);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(url, info);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData, createStockData };
};
export default useStockCall;
