import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../../hook/useStockCall";

export default function FirmsCard({
  _id,
  name,
  image,
  phone,
  address,
  handleOpen,
  setInitialState,
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
      <CardHeader
        title={
          <Typography variant="h6" sx={{ textTransform: "upperCase" }}>
            {name}
          </Typography>
        }
        subheader={address}
      />
      <CardMedia
        component="img"
        sx={{ height: 180, objectFit: "contain" }}
        image={image}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <DeleteIcon
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontSize: "1.5rem",
            "&:hover": {
              color: "customColors.color3",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => deleteStockData("firms", _id)}
        />
        <EditIcon
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontSize: "1.5rem",
            "&:hover": {
              color: "customColors.color5",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            setInitialState({ _id, name, image, phone, address });
            handleOpen();
          }}
        />
      </CardActions>
    </Card>
  );
}
