import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../../hook/useStockCall";
import {btnStyle} from "../../styles/globalStyles";

export default function FirmsCard({ _id, name, image, phone, address }) {
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
        sx={{ height: 200, objectFit: "contain" }}
        image={image}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <DeleteForeverIcon
          sx={btnStyle}
          onClick={() => deleteStockData("firms", _id)}
        />
        <EditIcon />
      </CardActions>
    </Card>
  );
}
