import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import NetflixIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router-dom";

const MovieCard = ({img,title,rating,id}) => {
  console.log(useNavigate, "useNavigate")

  const navigate = useNavigate();
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
      {/* Top Poster */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="450"
          image={`https://image.tmdb.org/t/p/original${img}`}
          alt="The Wolf of Wall Street"
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
      </Box>

      {/* Bottom Content */}
      <CardContent sx={{ p: 2 }}>
        {/* Title + Info Icon */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <InfoOutlinedIcon fontSize="small" />
        </Box>

        {/* Genre */}
        {/* <Typography variant="body2" color="gray">
          {category}
        </Typography> */}

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
            onClick={()=> navigate(`/details/${id}`)}
          >
            View Details
          </Button>

          <Button
            variant="outlined"
            startIcon={<NetflixIcon />}
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