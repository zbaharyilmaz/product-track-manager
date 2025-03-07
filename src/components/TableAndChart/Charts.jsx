"use client";
import { useSelector } from "react-redux";
import { AreaChart } from "@tremor/react";
import { Grid } from "@mui/material";

export const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const salesData = sales.map((sale) => ({
    date: new Date(sale.createdAt).toLocaleString(),
    amount: sale.amount,
  }));
  const purchasesData = purchases.map((purchase) => ({
    date: new Date(purchase.createdAt).toLocaleString(),
    amount: purchase.amount,
  }));
  return (
    <>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={6}>
          <AreaChart
            className="h-80"
            data={salesData}
            index="date"
            colors={["green-700"]}
            categories={["amount"]}
            xAxisTitle="Date"
            yAxisTitle="Sale"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AreaChart
            className="h-80"
            data={purchasesData}
            colors={["purple-600"]}
            index="date"
            categories={["amount"]}
            xAxisTitle="Purchases"
            yAxisTitle="Date"
          />
        </Grid>
      </Grid>
    </>
  );
};
