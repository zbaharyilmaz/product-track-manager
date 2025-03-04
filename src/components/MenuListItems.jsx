import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { btnStyle, selectedStyle } from "../styles/buttonStyles";

const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "DASHBOARD",
    url: "/stock",
    icon: icon("dashboard"),
  },
  {
    title: "FIRMS",
    url: "/stock/firms",
    icon: icon("firms"),
  },
  {
    title: "BRANDS",
    url: "/stock/brands",
    icon: icon("brands"),
  },
  {
    title: "PURCHASES",
    url: "/stock/purchases",
    icon: icon("purchases"),
  },
  {
    title: "SALES",
    url: "/stock/sales",
    icon: icon("sales"),
  },
  {
    title: "PRODUCTS",
    url: "/stock/products",
    icon: icon("products"),
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ bgcolor: "customColors.color2", height: "100vh" , color:"white"}}>
      <Toolbar />
      <List >
        {links.map((item, index) => (
          <ListItem key={item.title} >
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={item.url === location.pathname ? selectedStyle : btnStyle}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 3,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor: "white",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuListItems;

