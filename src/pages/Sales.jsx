import { Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import SalesTable from "../components/TableAndChart/SalesTable";
import SalesModal from "../components/Modal/SalesModal";
import { useSelector } from "react-redux";

const Sales = () => {
  const { getStockData, getSalesBrandPro } = useStockCall();
  const { loading, error } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [initialState, setInitialState] = useState({
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  });
  useEffect(() => {
    getSalesBrandPro();

    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Container>
      <Typography variant="h4" color="primary.main" gutterBottom mt={5}>
        SALES
      </Typography>
      {loading ? (
        <Typography align="center" variant="h4" color="secondary.main">
          Loading...
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
            mt={3}
            sx={{ bgcolor: "customColors.color2" }}
          >
            ADD SALE
          </Button>
          <SalesTable
            handleOpen={handleOpen}
            setInitialState={setInitialState}
            mt={3}
          />
          {open && (
            <SalesModal
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

export default Sales;
