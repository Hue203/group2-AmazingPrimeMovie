import React from 'react' 
import Trending from '../../components/Trending'
import { useState } from 'react'
import { useEffect } from 'react'
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const TrendingPage = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    useEffect(()=>{
        const getData = async () => {
            try {
             let res = await fetch(`${baseUrl}/trending/all/week?api_key=${API_KEY}`)
             let data = await res.json() 
             console.log(data)
             setTrendingMovies(data.results)
         } catch (error) {
             console.log(error)
         }
     }
     getData()
    },[])
    return (
        
        <div>
           <Trending trendingMovies={trendingMovies} imgLink={imgLink} />
        </div>
    )
}

export default TrendingPage
