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

  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [appError, setAppError] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
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
    if (trendingMovies === "") {
      // first time load the page
      setLoading(true);
      return;
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, [currentPage, totalPage]);

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
