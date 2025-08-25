import { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);


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

  const handleMovieDetails = async() => {
   
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${1061474}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const result = await response.json();
      console.log(result, "details movies  Movies");
      // setMovies(result.results); // <-- Important!
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    }
  }

  useEffect(() => {
    fetchPopularMovies();
    handleMovieDetails()
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay:true,
    // autoplaySpeed: 500,
  };
  return (
    <Box>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} img={movie.poster_path} title={movie.original_title} rating={movie.vote_average}/>
        ))}
      </Slider>
    </Box>
  );
};

export default TopMovies;
