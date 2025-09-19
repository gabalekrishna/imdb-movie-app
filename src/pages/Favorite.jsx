import { useContext, useState } from "react";
// import { FavoritesContext } from "../../context/FavoritesContext";
import { Box, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, favoriteCounts, setType } = useContext(FavoritesContext);
  const [selectedType, setSelectedType] = useState("movies");

  const handleTypeChange = (event, newType) => {
    if (newType !== null) {
      setSelectedType(newType);
      setType(newType);
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        My Favorites
      </Typography>

      {/* Toggle Button Group */}
      <ToggleButtonGroup
        value={selectedType}
        exclusive
        onChange={handleTypeChange}
        sx={{
          marginBottom: "20px",
          "& .MuiToggleButton-root": {
            border: "1px solid #ccc",
            borderRadius: "20px",
            padding: "5px 15px",
            color: "#000",
          },
          "& .Mui-selected": {
            backgroundColor: "#d50000",
            color: "#fff",
          },
        }}
      >
        <ToggleButton value="movies">Movies ({favoriteCounts.movieCount})</ToggleButton>
        <ToggleButton value="tv">TV Shows ({favoriteCounts.tvCount})</ToggleButton>
      </ToggleButtonGroup>

      {/* Favorites List */}
      {favorites.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title || item.name}
            style={{
              width: "100px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
              marginRight: "20px",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title || item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", marginBottom: "10px" }}>
              {item.release_date || item.first_air_date}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", marginBottom: "10px" }}>
              {item.overview}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Favorites;