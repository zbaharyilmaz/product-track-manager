import React from "react";
import useStockCall from "../hook/useStockCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("brands");
  }, []);

  console.log("BRANDS:", brands);

  return <div>Brands</div>;
};

export default Brands;
