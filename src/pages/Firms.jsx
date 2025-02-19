import React from "react";
import { useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import FirmsCard from "./../components/FirmsCard";

const Firms = () => {
  const { getFirms } = useStockCall();

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      Firms
      <FirmsCard />
    </div>
  );
};

export default Firms;
