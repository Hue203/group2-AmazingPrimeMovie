import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Popular   from '../../components/PopularList';

const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const PopularList = () => {
    const [popularMovies, setpopularMovies] = useState([])
  useEffect(()=>{
        const getData = async () => {
            try {
             let res = await fetch(`${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
             let data = await res.json() 
             console.log(data)
             setpopularMovies(data.results)
         } catch (error) {
             console.log(error)
         }
     }
     getData()
  },[])

    return (
        <div>
            <Popular popularMovies={popularMovies} imgLink={imgLink} />
        </div>
    )
}

export default PopularList
