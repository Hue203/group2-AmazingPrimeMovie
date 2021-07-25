import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PaginationBar from "../../components/PaginationBar";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./style.css";
import Trending from "../../components/Trending";
import NowPlaying from "../../components/NowPlaying";
import SearchForm from "../../components/\bSearchTest";

const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const TrendingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listMovie, setListMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [appError, setAppError] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getData = async () => {
    try {
      let res = await fetch(
        `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      );
      let data = await res.json();
      console.log(data);
      setTrendingMovies(data.results);
      setAppError("");
      setTotalPage(data.total_pages);
    } catch (error) {
      console.log(error);
      setAppError("erro", error.msg);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage}`;
      console.log("Searchurl", url);
      let res = await fetch(url);
      let data = await res.json();
      console.log("Searchmovie", data);
      setListMovie(data.results);
      setAppError("");
    } catch (error) {
      console.log("erro", error.msg);
      setAppError("erro", error.msg);
    }
  };
  useEffect(() => {
    if (listMovie === "") {
      setLoading(true);
      return;
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, [currentPage, searchTerm]);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log("searchTerm", searchTerm);
  return (
    <>
      {appError ? (
        <Alert key="1" variant="danger">
          {appError}
        </Alert>
      ) : (
        <></>
      )}
      {loading ? (
        <ClipLoader
          color="#2cfc03"
          loading={loading}
          css={override}
          size={300}
        />
      ) : (
        <div className="body">
          <div>
            <NowPlaying data={trendingMovies} imgLink={imgLink} />
          </div>
          {/* <SearchForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            searchTerm={searchTerm}
          /> */}
          <div>
            {totalPage > 1 ? (
              <PaginationBar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
              />
            ) : (
              ""
            )}
          </div>
          <div className="movie-container" id="playingnow">
            {trendingMovies &&
              trendingMovies.map((movie) => (
                <Link to={`/movie/${movie.id}`}>
                  <div className="movie">
                    <img
                      src={`${imgLink}${
                        movie?.poster_path == null
                          ? movie?.backdrop_path
                          : movie?.poster_path
                      }`}
                      alt={movie.title}
                      className="movie-img"
                    />
                    <div className="movie-info">
                      <p>
                        <strong>{movie.title}</strong>
                      </p>
                      <span>{movie.vote_average}</span>
                    </div>
                    <div className="movie-overview">
                      <h3>Overview:</h3>
                      <p>
                        {movie.overview.length <= 99
                          ? movie.overview
                          : movie.overview.slice(0, 99) + "..."}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TrendingPage;
