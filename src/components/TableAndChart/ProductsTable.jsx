import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../../hook/useStockCall";

const rows = [];

export default function ProductsTable() {
  const getRowId = (row) => {
    return row._id;
  };
  const { deleteStockData } = useStockCall((state) => state.stock);
  const { products } = useSelector((state) => state.stock);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.name}
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 120,
      editable: true,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 120,
      editable: true,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <DeleteIcon onClick={() => deleteStockData("products", params.id)} />
      ),
    },
  ];

  return (
    <Box sx={{ height: 500, width: "90%" }}>
      <DataGrid
        getRowId={getRowId}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
