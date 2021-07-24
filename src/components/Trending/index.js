import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import './style.css'

const Trending = ({trendingMovies, imgLink}) => {
    return (
        
        <>
        <Container>
        <Carousel>
          {trendingMovies && trendingMovies.map((movie)=>
           <Carousel.Item interval={30000}>
          
           <img
             className="trendingMovieImg"
             src={`${imgLink}${movie.backdrop_path}`}
             alt={`${movie.title}`}
           />
           
           <Carousel.Caption>
             <h3>{movie.title}</h3>
             <h5>Watch Now! On Amazing Prime</h5>
           </Carousel.Caption>
         </Carousel.Item>
          )}
</Carousel>
     </Container>
        </>
    )
}

export default Trending
