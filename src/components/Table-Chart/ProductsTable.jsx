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
      field: "categoryId",
      headerName: "Category",
      width: 150,
      editable: true,
      valueGetter: (value) => value.name,
    },
    {
      field: "name",
      headerName: "Name",
      width: 110,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      width: 110,
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
    <Box sx={{ height: 500, width: "90%"  }}>
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
