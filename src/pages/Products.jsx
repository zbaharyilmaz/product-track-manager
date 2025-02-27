import { Button, Container, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../components/Table/ProductsTable";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import ProductModal from "../components/Modal/ProductModal";
import { useState } from "react";
const Products = () => {

  const [open, setOpen]= useState(false)
  const handleOpen=()=>setOpen(true)
  const handleClose=()=>setOpen(false)

  const[initialState, setInitialState]=useState({
    categoryId: "",
    brandId: "",
    name: "",
    })


  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("products");
    getStockData("brands");
    getStockData("categories");
  }, []);

  return(
  <Container>
    <Typography
      variant="h4"
      color="customColors.color1"
      align="center"
      gutterBottom
    >
      Products
    </Typography>
    <Button onClick={handleOpen} variant="contained">NEW PRODUCT</Button>
    <ProductsTable />

    {open && (
          <ProductModal
            open={open}
            handleClose={handleClose}
            initialState={initialState}
          />
        )}
  </Container>)
};

export default Products;
