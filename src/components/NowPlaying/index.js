import React, { Component } from "react";
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css" ;
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./style.css";

const NowPlaying = ({ data, imgLink }) => {
  const settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 3000,
    fade: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <>
      <picture className="sliderNowPlaying">
        <Slider {...settings}>
          {data &&
            data.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="nowPlaying-img"
                  src={`${imgLink}${
                    movie?.poster_path == null
                      ? movie?.backdrop_path
                      : movie?.poster_path
                  }`}
                  alt={movie.title}
                />
              </Link>
            ))}
        </Slider>
      </picture>
    </>
  );
};

export default NowPlaying;
