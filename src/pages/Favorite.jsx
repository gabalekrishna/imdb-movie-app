import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"
import { ToggleButton } from "@mui/material"



const Favorite = () => {
    const {favorites, setType, favoriteCounts} = useContext(FavoritesContext)
    console.log(favoriteCounts, "favorite from favorite page")

    return (
        <div>
            <h1>Favorite Page</h1>
            <ToggleButton onClick={()=> setType("movies")}>Movies ({favoriteCounts.movieCount})</ToggleButton>
            <ToggleButton onClick={()=> setType("tv")}>Tv Shows ({favoriteCounts.tvCount})</ToggleButton>
        </div>
    )
}

export default Favorite