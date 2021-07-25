import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import logo from "../../logo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = ({ trendingMovies, imgLink }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
 

  return (
    <>
      
      <Container>
        <div className="d-flex">
          <img alt="prime" src={logo} height="28px" />
          <h5>Trending Now</h5>
          <a href="#.">See more</a>
        </div>
        <Slider {...settings}>
            {trendingMovies.map((movie) => (
              <div className="singleMovie flex">
                <div className="show">
                <img
                  className="trendingMovieImg"
                  src={`${imgLink}${movie.poster_path}`}
                  alt={`${movie.title}`}
                />
                </div>
                <div className="hide">
                  <h6>{movie.title ? movie.title : movie.name}</h6>
                </div>
              </div>))}

        </Slider>
        
          
      </Container>
    </>
  );
};

export default Trending;
