import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NowPlaying from "../../components/NowPlaying";
import TrendingList from "../TrendingList";
import DetaiPage from "../DetaiPage"
import PopularList from "../PopularList";
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  let url = `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US`;

  
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("res", data.results);
        setMovies(data.results);
      } catch (err) {
        console.log("Error", err.measege);
      }
    };
    getMovies();
  },[]);
  return (
    <>
      <NowPlaying data={movies} imgLink={imgLink} />
      <br></br>
      <TrendingList />
      <br></br>
      <PopularList />
      <br></br>
    </>
      

  );
};

export default HomePage;
