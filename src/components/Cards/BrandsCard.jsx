import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../../hook/useStockCall";

export default function BrandCard({
  _id,
  name,
  image,
  setInitialState,
  handleOpen,
}) {
  const { deleteStockData } = useStockCall();

  return (
    <Card
    sx={{
      maxWidth: 345,
      height: 450,
      padding: "0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderColor: "secondary.second",
      borderWidth: 1,
      borderStyle: "solid",
      boxShadow: 3,
    }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ textTransform: "upperCase" }} component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 180, objectFit: "contain"}}
        image={image}
        component="img"
        title={name}
      />

      <CardActions disableSpacing>
      <DeleteIcon
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontSize: "1.5rem",
            "&:hover": {
              color: "customColors.color5",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => deleteStockData("brands", _id)}
        />
        <EditIcon
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontSize: "1.5rem",
            "&:hover": {
              color: "customColors.color3",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            setInitialState({ _id, name, image });
            handleOpen();
          }}
        />
  
      </CardActions>
    </Card>
  );
}
