import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hook/useStockCall";
import { useEffect } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { gridContentHeightSelector } from "@mui/x-data-grid/internals";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ handleClose, open ,initialState}) {
 
  const { categories , brands} = useSelector((state) => state.stock);
  const {createStockData,updateStockData}=useStockCall()

   const [info, setInfo] = useState(initialState);
  
    const handleChange = (e) => {
      setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (info._id) {
        //* id varsa edit işlemi
        updateStockData("products", info);
      } else {
        //* id yoksa create işlemi
        createStockData("products", info);
      }
      handleClose();
    };
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.categoryId}
                label="Category"
                onChange={handleChange}
                name="categoryId"
              >
                {categories.map((cate,index) => (
                  <MenuItem  key={cate._id}   value={cate._id}>{cate.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brands</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.brandId}
                label="Brands"
                onChange={handleChange}
                name="brandId"

              >
                {brands.map((brand,index) => (
                  <MenuItem  key={brand._id} value={brand._id}>{brand.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Product Name"
              id="image"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              name="name"
              required
            />
            <Button type="submit">SUBMIT FIRM</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
