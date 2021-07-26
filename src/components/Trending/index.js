import React from "react";
import "./style.css";
import logo from "../../logo.png";
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = ({ trendingMovies, imgLink }) => {
  // const history = useHistory();
  // const getDetailPage = () => {
  //   history.push(`/movie/${movie.id}`);
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="content">
      <div className="d-flex">
        <img alt="prime" src={logo} height="28px" />
        <h5>Trending Now</h5>
        <a href="/trending">See more</a>
      </div>
      <Slider {...settings}>
        {trendingMovies.map((movie) => (
          <img
            className="movieImg"
            src={`${imgLink}${movie.poster_path}`}
            alt={`${movie.title}`}
            // onClick={getDetailPage}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
