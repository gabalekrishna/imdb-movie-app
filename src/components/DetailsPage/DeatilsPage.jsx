import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  CardMedia,
  Chip,
  Divider,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";

export const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([])
  const [modalOpen, setModalOpen] = useState(false);


  
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    const handleVideos = async() => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        const data = await res.json();
        setVideos(data);
        console.log(data, "videos")
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails();
    handleVideos()
  }, [id]);
  console.log(videos?.results, "videos")

  

  const handleClose = () => {
    setModalOpen(false)
  }

  const trailerkey = () => {
    const trailer = videos.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube")
    return trailer ? trailer.key : null;
  }

  if (!movie) return <Typography>Loading...</Typography>;

  const getUserScore = (vote) => Math.round(vote * 10); // 7.8 => 78%

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#1c1c1c",
        color: "#fff",
        minHeight: "100vh",
        p: 4,
        gap: 4,
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT: Poster */}
      <Box sx={{ width: { xs: "100%", md: "25%" } }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          sx={{ borderRadius: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: "#00296b", "&:hover": { bgcolor: "#003f88" } }}
        >
          Available to Rent or Buy
        </Button>
      </Box>

      {/* RIGHT: Details */}
      <Box
        sx={{
          flex: 1,
          backdropFilter: "blur(6px)",
          p: 3,
          borderRadius: 2,
          bgcolor: "rgba(0,0,0,0.6)",
        }}
      >
        {/* Title */}
        <Typography variant="h4" fontWeight="bold">
          {movie.title}{" "}
          <span style={{ color: "gray" }}>
            ({new Date(movie.release_date).getFullYear()})
          </span>
        </Typography>

        {/* Sub details */}
        <Typography variant="body2" color="gray" mt={1}>
          {movie.release_date} • {movie.genres.map((g) => g.name).join(", ")} •{" "}
          {movie.runtime} mins
        </Typography>

        {/* Score + Emoji Vibe + Buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 2,
            flexWrap: "wrap",
          }}
        >
          <Chip
            label={`${getUserScore(movie.vote_average)}%`}
            sx={{
              bgcolor: "#1dd1a1",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "50%",
              width: 56,
              height: 56,
              fontSize: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />

          <Typography variant="body1">🤣 😍 🤯</Typography>

          <IconButton sx={{ color: "white" }}>
            <ListAltIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <BookmarkBorderIcon />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{ bgcolor: "#f39c12", "&:hover": { bgcolor: "#e67e22" } }}
            onClick={() => setModalOpen(true)}
          >
            Play Trailer
          </Button>
        </Box>

        {/* Tagline */}
        {movie.tagline && (
          <Typography variant="subtitle1" sx={{ mt: 3, fontStyle: "italic" }}>
            {movie.tagline}
          </Typography>
        )}

        {/* Overview */}
        <Typography variant="h6" mt={3}>
          Overview
        </Typography>
        <Typography variant="body2" color="gray">
          {movie.overview}
        </Typography>

        <Divider sx={{ my: 3, borderColor: "#444" }} />

        {/* Credits - Static since API doesn't return them directly */}
        <Box>
          <Typography variant="body1">
            <strong>Joseph Kosinski</strong>
            <br />
            Director, Story
          </Typography>
          <Typography variant="body1" mt={2}>
            <strong>Ehren Kruger</strong>
            <br />
            Screenplay, Story
          </Typography>
        </Box>
      </Box>
      {modalOpen && (
  <Dialog
    open={modalOpen}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
  >
    <DialogTitle>Trailer</DialogTitle>
    <DialogContent
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 aspect ratio
        }}
      >
        <iframe
          title="Trailer"
          src={`https://www.youtube.com/embed/${trailerkey()}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          allowFullScreen
        />
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
)}

    </Box>
  );
};
// https://www.youtube.com/embed/1RC_GIuShTQ
// hbPTIAQZtT4


// https://api.themoviedb.org/3/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc