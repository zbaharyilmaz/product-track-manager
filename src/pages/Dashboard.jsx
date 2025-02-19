import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useAuthCall from "../hook/useAuthCall";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";

const drawerWidth = 240;

function Dashboard(props) {
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
    { title: "Home", url: "home", icon: <HomeRoundedIcon /> },
    { title: "Dashboard", url: "", icon: <QueryStatsRoundedIcon /> },
    { title: "Firms", url: "firms", icon: <BusinessRoundedIcon /> },
    { title: "Brands", url: "brands", icon: <AddBusinessRoundedIcon /> },
    { title: "Purchases", url: "purchases", icon: <ShoppingCartRoundedIcon /> },
    { title: "Sales", url: "sales", icon: <SellRoundedIcon /> },
    { title: "Products", url: "products", icon: <CategoryRoundedIcon /> },
  ];

  const drawer = (
    <div>
      <List sx={{ marginTop: "75px" }}>
        {links.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigate(`${text.url}`)}
              sx={{
                border: "2px solid #ece9d7",
                margin: "5px",
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "primary.main",
                  scale: "1.05",
                },
                "&:hover *": {
                  color: "customColors.color5",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px", color: "primary.main" }}>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

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
          height: "100px",
          display: "flex",
          justifyContent: "center",
          borderRadius: " 5px",
          border: "2px solid secondary",
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "secondary.second",
              fontSize: "2rem",
            }}
          >
            PRODUCT TRACK MANAGER
          </Typography>
          <Button
            onClick={logout}
            sx={{
             
              color: "secondary.second",
              margin: "3px",
              borderRadius: "5px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "customColors.color4",
                backgroundColor: "customColors.color5",
                scale: "1.05",
              },
              "&:hover *": {
                color: "primary.main",
              },
            }}
          >
            Logout
            <LogoutIcon sx={{ margin: ".5rem", width: "25px" }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
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
          {drawer}
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
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
