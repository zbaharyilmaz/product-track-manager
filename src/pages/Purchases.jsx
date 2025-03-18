import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import React, { useState } from "react";
import PurchasesTable from "../components/TableAndChart/PurchasesTable";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import PurchasesModal from "../components/Modal/PurchasesModal";
import { useSelector } from "react-redux";

const Purchases = () => {
  const { getStockData, getPurcBrandPro } = useStockCall();
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
    getPurcBrandPro();

    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Container>
      <Typography variant="h4" color="primary.main" gutterBottom mt={5}>
        PURCHASES
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
        <Typography align="center" variant="h5"  color="secondary.main">
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
            Add Purchase
          </Button>

          <PurchasesTable
            handleOpen={handleOpen}
            setInitialState={setInitialState}
            mt={3}
          />

          {open && (
            <PurchasesModal
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

export default Purchases;
