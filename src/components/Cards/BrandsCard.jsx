import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnStyle } from "../../styles/globalStyles";
import useStockCall from "../../hook/useStockCall";


export default function BrandCard({ _id, name, image ,setInitialState ,handleOpen}) {

  const {deleteStockData}=useStockCall()
  
  return (
    <Card
      sx={{
        height: 390,
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image={image}
        component="img"
        title={name}
      />
    

      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        <EditIcon sx={btnStyle} onClick={()=>{setInitialState({_id,name,image});handleOpen()  }}  />
        <DeleteIcon sx={btnStyle}  onClick={()=>deleteStockData("brands",_id)}  />
      </CardActions>
    </Card>
  );
}
