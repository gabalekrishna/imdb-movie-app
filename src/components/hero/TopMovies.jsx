import { useEffect } from "react";
import { useState } from "react"
import MovieCard from "../Card/MovieCard";




const TopMovies = () => {
   const [movies, setMovies] = useState([]);
   const fetchTopMovies = async() => {
      const data =await fetch("https://imdb236.p.rapidapi.com/api/imdb/top250-movies",{
        method: "GET",
        headers: {
            	"x-rapidapi-host": "imdb236.p.rapidapi.com",
	            "x-rapidapi-key" : "e22ee288b3mshbbbd1c6f16875aap1aa8fejsna8d5cda4aff3"
        },
      });
      const result = await data.json();
      setMovies(result)
   }
   useEffect(()=> {
    fetchTopMovies();
   },[])
  
    return (
        <div>
           {
            movies.map((movie,index)=> {
                return(
                    <div>
                       <MovieCard 
                       img={movie.thumbnails[0].url}
                       title={movie.originalTitle}
                        catogry={movie.genres[0]}
                       />
                    </div>
                )
            })
           }
           
        </div>
    )
}

export default TopMovies;