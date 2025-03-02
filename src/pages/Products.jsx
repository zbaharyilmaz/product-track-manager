import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import React, { useState } from "react";
import ProductsTable from "../components/Table/ProductsTable";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import ProductModal from "../components/Modal/ProductModal";
import { useSelector } from "react-redux";

const Products = () => {
  const { getStockData ,getProCatBrand} = useStockCall();
  const { loading, error } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState, setInitialState] = useState({
    categoryId: "",
    brandId: "",
    name: "",
  });

  useEffect(() => {
    // getStockData("products");
    // getStockData("brands");
    // getStockData("categories");
    getProCatBrand()

  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Products
      </Typography>
      {loading ? (
        <Typography
          align="center"
          variant="h5"
          component="h3"
          color="secondary.second"
        >
          Loading....
        </Typography>
      ) : error ? (
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ) : (
        <>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ marginBottom: "1rem" }}
          >
            New Product
          </Button>

          <ProductsTable />

          {open && (
            <ProductModal
              open={open}
              handleClose={handleClose}
              initialState={initialState}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Products;
