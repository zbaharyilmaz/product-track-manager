import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useAuthCall from "../hook/useAuthCall";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuListItems from "./../components/MuiListItems";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { logout } = useAuthCall();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const links = [
    {
      title: "Dashboard",
      url: "",
      icon: "public/assets/navbar/ic_analytics.svg",
    },
    { title: "Firms", url: "firms", icon: "public/assets/navbar/firms.svg" },
    {
      title: "Products",
      url: "products",
      icon: "public/assets/navbar/ic_cart.svg",
    },
    {
      title: "Purchases",
      url: "purchases",
      icon: "public/assets/navbar/purchase.svg",
    },
    { title: "Sales", url: "sales", icon: "public/assets/navbar/sales.svg" },
    { title: "Brands", url: "brands", icon: "public/assets/navbar/brand.svg" },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {links.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigate(`${text.url}`)}
              sx={{
                color: "secondary.main",
                borderRadius: "1rem",
                transition: "all 0.7s ease-in-out ",
                "&:hover": {
                  backgroundColor: "secondary.second",
                  color: "white",
                },
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  mask: `url(${text.icon}) no-repeat center`,
                  backgroundColor: "currentColor",
                  mr: 2,
                }}
              ></Box>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "secondary.main",
          borderRadius: "10px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Stock App
          </Typography>
          <Button
            color="inherit"
            onClick={logout}
            sx={{
              "&:hover": {
                backgroundColor: "secondary.second",
                color: "white",
                "& .MuiSvgIcon-root": {
                  color: "red",
                },
              },
            }}
          >
            Logout
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* {drawer} */}
          <MenuListItems />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {/* {drawer} */}
          <MenuListItems />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Buraya içerik gelecek */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
