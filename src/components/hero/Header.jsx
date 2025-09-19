import React, { use, useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Avatar,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, login, logout } = useContext(AuthContext);
  // const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  console.log(user, "user from context");
  const account = "2425526";
  const navigate = useNavigate();
  const menuItems = [
    { label: "Movies", route: "/movies" },
    { label: "TV Shows", route: "/tv-shows" },
    { label: "People", route: "/people" },
    { label: "favorite", route: "/favorite" },
  ]
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#032541", boxShadow: "none", px: 2 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "white",
              letterSpacing: 1,
              cursor: "pointer",
            }}
          >
            TMDB
          </Typography>
          <Box display="flex" gap={3}>
          {
            menuItems.map((item)=> {
              return (
                <Button
                onClick={() => navigate(item.route)}
                >
                  {item.label}
                </Button>

              )
            })

          }
           
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          {/* Add icon */}
          <IconButton sx={{ color: "white" }}>
            <AddIcon />
          </IconButton>
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: "4px",
              px: 1,
              py: "2px",
              color: "white",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            EN
          </Box>
          <IconButton sx={{ color: "white" }}>
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: "crimson", fontWeight: "bold" }}>K</Avatar>
          <IconButton sx={{ color: "cyan" }} onClick={!setIsSearching}>
            <SearchIcon />
          </IconButton>
          
        </Box>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    
    </AppBar>
  );
};

export default Header;
