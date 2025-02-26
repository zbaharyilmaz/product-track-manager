import { Button, Container, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../components/Table/ProductsTable";

const Products = () => {
  return;
  <Container>
    <Typography
      variant="h4"
      color="customColors.color1"
      align="center"
      gutterBottom
    >
      Products
    </Typography>
    <Button variant="contained">NEW PRODUCT</Button>
    <ProductsTable />
  </Container>;
};

export default Products;
