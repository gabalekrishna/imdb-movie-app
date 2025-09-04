import React, { use, useContext, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Rating,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MovieIcon from "@mui/icons-material/Movie";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListIcon from "@mui/icons-material/List";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const MovieCard = ({ img, title, rating, id }) => {

  const user = useContext(UserContext)
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [favorite, setFavorite] = useState(false);
  const open = Boolean(anchorEl);

  const handleToggle = ()=>{
    setToggle(true)
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFavorite = async() => {
    try{
      const favoriteData = await fetch("https://api.themoviedb.org/3/account/22243362/favorite", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type" : "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjJlMjQ2MjEwY2M5YmYyZDVjYWUwNjE2OTJkZDIwYyIsIm5iZiI6MTc1NTcxMTkzMy43MTI5OTk4LCJzdWIiOiI2OGE2MDliZGJjMmVhNWIwNmZkNTUwMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wosw5BpKEa63U6OUBBzjkLypb0mfH1zEZXDwq3oRFx4"
        },
        body: JSON.stringify({
          media_id: id,
          media_type: "movie",
          favorite: !favorite
        })
      })
      const data = await favoriteData.json()
     if(favoriteData.ok){
      console.log("hello")
      setFavorite(!favorite);
      handleMenuClose()
     }else{
      console.log(data)
     }
      console.log(data, "favoriteData")
      
    } catch(e){
     console.log(e)
    }
    setFavorite(true)
  }

  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 3,
        bgcolor: "black",
        color: "white",
        overflow: "hidden",
        boxShadow: 5,
      }}
    >
      {/* Top Poster Section */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="450"
          image={`https://image.tmdb.org/t/p/original${img}`}
          alt={title}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
          }}
        >
          <BookmarkBorderIcon />
        
        </IconButton>
        
         <IconButton
          onClick={handleMenuClick}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
          }}
        >
          <MoreVertIcon />
        </IconButton> 
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: {
              bgcolor: "white",
              color: "black",
              mt: 1,
              borderRadius: 2,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListIcon fontSize="small" sx={{ mr: 1 }} />
            Add to list
          </MenuItem>
          <MenuItem onClick={handleFavorite}>
            <FavoriteBorderIcon fontSize="small" sx={{ mr: 1 }} />
            Favorite
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <BookmarkBorderIcon fontSize="small" sx={{ mr: 1 }} />
            Watchlist
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <StarBorderIcon fontSize="small" sx={{ mr: 1 }} />
            Your rating
          </MenuItem>
        </Menu>
      </Box>

      {/* Bottom Content */}
      <CardContent sx={{ p: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <InfoOutlinedIcon fontSize="small" />
        </Box>

        {/* Rating */}
        <Box display="flex" alignItems="center" mt={1} mb={2}>
          <Typography sx={{ color: "gold", mr: 0.5 }}>★</Typography>
          <Typography variant="body2">{rating}</Typography>
        </Box>

        {/* Buttons */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Button
            variant="contained"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              bgcolor: "#1976d2",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={() => navigate(`/details/${id}`)}
          >
            View Details
          </Button>

          <Button
            variant="outlined"
            startIcon={<MovieIcon />}
            sx={{
              borderColor: "red",
              color: "red",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Watch on Netflix
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;