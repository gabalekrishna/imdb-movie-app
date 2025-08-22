import { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import { Box, Typography } from "@mui/material";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      const result = await response.json();
      console.log(result, "Popular Movies");
      setMovies(result.results); // <-- Important!
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, padding: 2 }}>
      {movies.length === 0 ? (
        <Typography>Loading...</Typography>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} img={movie.poster_path}/>
        ))
      )}
    </Box>
  );
};

export default TopMovies;
