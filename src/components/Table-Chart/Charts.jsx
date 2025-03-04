"use client";
import { useSelector } from "react-redux";
import { AreaChart } from "@tremor/react";
import { Grid } from "@mui/material";

const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

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
  console.log("❗️sales", sales);
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
            // valueFormatter={(number: number) =>  `$${Intl.NumberFormat("us").format(number).toString()}` */}
            // onValueChange={(v) => console.log(v)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AreaChart
            className="h-80"
            data={purchasesData}
            colors={["purple-600"]}
            index="date"
            categories={["amount"]}
            // valueFormatter={(number: number) =>  `$${Intl.NumberFormat("us").format(number).toString()}` */}
            // onValueChange={(v) => console.log(v)}
          />
        </Grid>
      </Grid>
    </>
  );
};
