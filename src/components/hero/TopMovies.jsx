import { useContext, useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../api/useFetch";

const TopMovies = ({type, data1}) => {
  const { user } = useContext(AuthContext)
  console.log(user, "userData")
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);

  // const fetchPopularMovies = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/${type}/popular?api_key=d22e246210cc9bf2d5cae061692dd20c&language=en-US`
  //     );
  //     const result = await response.json();
  //     console.log(result, "Popular Movies");
  //     setMovies(result.results); // <-- Important!
  //   } catch (error) {
  //     console.error("Failed to fetch popular movies:", error);
  //   }
  // };

  const data = useFetch(`https://api.themoviedb.org/3/${type}/popular?api_key=d22e246210cc9bf2d5cae061692dd20c&language=en-US`)
  console.log(data?.results, "data from useFetch")
  // setMovies(data || [])
  useEffect(()=> {
    if(data){
      setMovies(data)
    }
  },[data])

  

  // const handleMovieDetails = async() => {

  //   try {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${1061474}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  //     );
  //     const result = await response.json();
  //     console.log(result, "details movies  Movies");
  //     // setMovies(result.results); // <-- Important!
  //   } catch (error) {
  //     console.error("Failed to fetch popular movies:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchPopularMovies();
  //   // handleMovieDetails()
  // }, [type]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay:true,
    // autoplaySpeed: 500,
  };
  console.log(movies, "movies");
  return (
    <Box>
      <h1>User has been logdin: {user?.username} {user?.id}</h1>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            img={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            id={movie.id}
            data1={data1}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default TopMovies;
