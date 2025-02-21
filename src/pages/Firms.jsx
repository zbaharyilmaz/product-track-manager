import React from "react";
import { useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FirmsCard from "../components/Cards/FirmsCard";
import { GridOnSharp } from "@mui/icons-material";

const Firms = () => {
  const { getStockData } = useStockCall();
  const {}= useSelector((state) => state.stock);
  console.log("Firms", firms);
  useEffect(() => {
    getStockData();
  }, []);

  return (
    <Container>
    <Typography variant="h4" color="customColors.color1" align="center" gutterBottom>
      Firms
    </Typography>
    <Button variant="contained">NEW FIRM</Button>
    <Grid container spacing={2} mt={2}>
      {firms.map((firm,index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
          <FirmsCard {...firm} />
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default Firms;
