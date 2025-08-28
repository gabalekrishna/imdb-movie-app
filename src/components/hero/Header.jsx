import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
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
            {["Movies", "TV Shows", "People", "More"].map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {item}
              </Button>
            ))}
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
          <IconButton sx={{ color: "cyan" }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
