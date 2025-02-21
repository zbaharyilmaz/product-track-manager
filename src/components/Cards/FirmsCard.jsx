import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function FirmsCard({ _id, name, image, phone, address }) {


  return (
    <Card sx={{ maxWidth: 345 , height: 450, padding: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <CardHeader title={
        <Typography variant="h6" sx={{textTransform:"upperCase"}} >
            {name}
        </Typography>
       
       } subheader={address} />
      <CardMedia component="img"   sx={{ height: 200, objectFit: "contain" }} image={image} alt="" />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
