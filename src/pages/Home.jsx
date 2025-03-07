import React, { useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import { Charts } from "../components/TableAndChart/Charts";
import { Container, Typography } from "@mui/material";
import KCard from "../components/Cards/KCard";

const Home = () => {
  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("sales");
    getStockData("purchases");
  }, []);

  return (
    <Container>
      <Typography variant="h4" color="primary.main" gutterBottom mt={5}>
        LATEST METRICS
      </Typography>
      <KCard />
      <Charts />
    </Container>
  );
};

export default Home;
