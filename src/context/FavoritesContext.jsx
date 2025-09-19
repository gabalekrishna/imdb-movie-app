import { createContext, useCallback, useEffect, useMemo, useState } from "react";
export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [favoritesTv, setFavoritesTv] = useState([])
    const [type, setType] = useState('movies');

    const fetchFavorites = useCallback(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/account/22243362/favorite/movies?language=en-US&page=1&sort_by=created_at.asc?`,{
                headers: {
                    accept: "application/json",
                    "content-type" : "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjJlMjQ2MjEwY2M5YmYyZDVjYWUwNjE2OTJkZDIwYyIsIm5iZiI6MTc1NTcxMTkzMy43MTI5OTk4LCJzdWIiOiI2OGE2MDliZGJjMmVhNWIwNmZkNTUwMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wosw5BpKEa63U6OUBBzjkLypb0mfH1zEZXDwq3oRFx4"
                  }
            })
            const data = await response.json();
            setFavorites(data.results);
        } catch(error){
            console.log("falied to fetch data");
        }
    },[])
    const fetchFavoritesTv = useCallback(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/account/22243362/favorite/tv?language=en-US&page=1&sort_by=created_at.asc?`,{
                headers: {
                    accept: "application/json",
                    "content-type" : "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjJlMjQ2MjEwY2M5YmYyZDVjYWUwNjE2OTJkZDIwYyIsIm5iZiI6MTc1NTcxMTkzMy43MTI5OTk4LCJzdWIiOiI2OGE2MDliZGJjMmVhNWIwNmZkNTUwMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wosw5BpKEa63U6OUBBzjkLypb0mfH1zEZXDwq3oRFx4"
                  }
            })
            const data = await response.json();
            setFavoritesTv(data.results);
        } catch(error){
            console.log("falied to fetch data");
        }
    },[])
    const movieCount = favorites.filter(item => item.media_type === 'movie').length;
    console.log(movieCount ,"movieCount")
    const favoriteCounts = useMemo(() => {
        console.log(favorites, "favorites in count")
        const movieCount = favorites.length;
        const tvCount = favorites.length;
        return { movieCount, tvCount };
    },[favorites]);

    useEffect(()=> {
        fetchFavorites();
        fetchFavoritesTv();
    },[type])
  console.log(type, "type from context")
    return (
        <FavoritesContext.Provider value={{favorites, favoritesTv,setType, favoriteCounts}}>
            {children}
        </FavoritesContext.Provider>
    )
}