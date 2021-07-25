import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NowPlaying from "../../components/NowPlaying";
import TrendingList from "../TrendingList";

const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  let url = `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}S`;

  
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
  }, [page]);


  
  return (
    <>
      <NowPlaying data={movies} imgLink={imgLink} />
      <br></br>
      <TrendingList />
    </>
  );
};

export default HomePage;
