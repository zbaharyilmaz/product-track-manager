import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, stockSuccess,getProCatBrandSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { useSelector } from "react-redux";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(url);
      console.log(data);
      dispatch(stockSuccess({ url, data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(url, info);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const updateStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${info._id}`, info);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProCatBrand = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getProCatBrandSuccess([
          products?.data?.data,
          categories?.data?.data,
          brands?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  const getPurcBrandPro = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [purchases, brands, products,firms] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
        axiosWithToken("firms"),
      ]);

      dispatch(
        getPurcBrandProSuccess([
          purchases?.data?.data,
          brands?.data?.data,
          products?.data?.data,
          firms?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  /* -------------------------------------------------------------------------- */
  const getSalesBrandPro = async () => {
    dispatch(fetchStart());

    try {
      const [sales, brands, products] = await Promise.all([
        axiosWithToken("sales"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
      ]);

      dispatch(
        getSalesBrandProSuccess([sales?.data?.data, brands?.data?.data, products?.data?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getStockData,
    deleteStockData,
    createStockData,
    updateStockData,
    getProCatBrand,
    getPurcBrandPro,
    getSalesBrandPro,
  };
};

export default useStockCall;