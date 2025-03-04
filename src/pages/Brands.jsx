import React, { useState, useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import BrandsCard from "../components/Cards/BrandsCard";
import { Container, Typography } from "@mui/material";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import BrandModal from "./../components/Modal/BrandModal";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState, setInitialState] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    getStockData("brands");
  }, []);
  return (
    <Container>
      <Typography variant="h4" color="primary.main" gutterBottom mt={5}>
        BRANDS
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        mt={2}
        sx={{ bgcolor: "customColors.color2" }}
      >
        ADD BRANDS
      </Button>
      <Grid container spacing={2} mt={2}>
        {brands.map((firm, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}key={index}>
            <BrandsCard
              {...firm}
              setInitialState={setInitialState}
              handleOpen={handleOpen}
            />
          </Grid>
        ))}
      </Grid>

      {open && (
        <BrandModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Brands;
