import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const MovieCard = () => {
  const history = useHistory();

  const getDetailPage = () => {
    history.push(`/movie/${movie.id}`);
  };
  return (
    <>
      <Card style={{ width: "18rem" }} onClick={getDetailPage}></Card>
    </>
  );
};

export default MovieCard;
