


import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DeatilsPage = () => {
    const { id } = useParams();
    const [detailsData, setDeatilsdata] = useState([]);
    const DetailsApiCall = async() => {
        try {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${id}?api_key=d22e246210cc9bf2d5cae061692dd20c&language=en-US`
            );
            const result = await response.json();
            setDeatilsdata(result); 
          } catch (error) {
            console.error("Failed to fetch popular movies:", error);
          }
    }
    useEffect(()=> {
     DetailsApiCall();
    },[])
    console.log(detailsData, "detailsdata")
  return (
    <div>
        <Typography variant='h2'>
            This is your details page {id}
        </Typography>
    </div>
  )
}
