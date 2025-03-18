import { Typography, Container, Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductsTable from "../components/TableAndChart/ProductsTable";
import useStockCall from "../hook/useStockCall";
import ProductModal from "../components/Modal/ProductModal";
import { useSelector } from "react-redux";

const Products = () => {
  const { getStockData, getProCatBrand } = useStockCall();
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
    getProCatBrand();

    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Container>
      <Typography variant="h4" color="primary.main" gutterBottom mt={5}>
        PRODUCTS
      </Typography>
      {loading ? (
        <Typography
          align="center"
          variant="h4"
          color="secondary.main"
        >
          Loading....
        </Typography>
      ) : error ? (
        <Typography align="center" variant="h4" color="secondary.main">
          Something went wrong...
        </Typography>
      ) : (
        <>
          <Button
            variant="contained"
            onClick={handleOpen}
            mt={2}
            sx={{ bgcolor: "customColors.color2" }}
          >
            ADD PRODUCT
          </Button>
          <Box sx={{ mt: 3 }}>
            <ProductsTable />
          </Box>
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
