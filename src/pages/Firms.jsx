import React, { useState, useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FirmsCard from "../components/Cards/FirmsCard";
import FirmModal from "../components/Modal/FirmModal";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStockData("firms");
  }, []);
  const [initialState, setInitialState] = useState({
    name: "",
    phone: "",
    image: "",
  });
  return (
    <Container>
      <Typography variant="h4" color="primary.main" gutterBottom mt={5}>
        FIRMS
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        mt={2}
        sx={{ bgcolor: "customColors.color2" }}
      >
        ADD FIRM
      </Button>
      <Grid container spacing={2} mt={2}>
        {firms.map((firm, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <FirmsCard
              {...firm}
              setInitialState={setInitialState}
              handleOpen={handleOpen}
            />
          </Grid>
        ))}
      </Grid>
      <FirmModal
        open={open}
        handleClose={handleClose}
        initialState={initialState}
      />
    </Container>
  );
};

export default Firms;
