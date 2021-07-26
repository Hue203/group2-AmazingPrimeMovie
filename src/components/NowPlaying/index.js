import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./style.css";

const NowPlaying = ({ data, imgLink }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: true,
  };
  return (
    <>
      <picture className="sliderNowPlaying">
        <Slider {...settings}>
          {data &&
            data.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <img
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
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
