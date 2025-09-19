import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Search = () => {
     const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState();
   
    const handleSearch = async() => {
        const response =await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=2`,{
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjJlMjQ2MjEwY2M5YmYyZDVjYWUwNjE2OTJkZDIwYyIsIm5iZiI6MTc1NTcxMTkzMy43MTI5OTk4LCJzdWIiOiI2OGE2MDliZGJjMmVhNWIwNmZkNTUwMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wosw5BpKEa63U6OUBBzjkLypb0mfH1zEZXDwq3oRFx4`,
                accept: 'application/json'
            }
        })
        const result = await response.json();
        setSearchResult(result);
    }

    console.log(searchResult, "searchResult")


    return (

        <Box>
            <TextField 
            placeholder="Search..."
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" onClick={handleSearch}>Search</Button>
            <h4>{search}</h4>
            {
               <ul>
                {
                    searchResult?.results?.map((item)=> {
                        return (
                            <li onClick={()=> {navigate(`/details/${item.id}`)}} style={{cursor: "pointer"}}>
                                {item.original_title}
                            </li>
                        )
                    })
                }
               </ul>
            }

        </Box>
    )


}


export default Search;