import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./Style.css";
const imgLink = process.env.REACT_APP_IMAGE;

const Relate = ({ relatedMovie }) => {
  let relatedMoviePic1, title1, text1;
  if (relatedMovie.results) {
    relatedMoviePic1 = imgLink + relatedMovie.results[0].backdrop_path;
    console.log("related", relatedMoviePic1);
    title1 = relatedMovie.results[0].title;
    text1 = relatedMovie.results[0].overview;
  }
  let relatedMoviePic2, title2, text2;
  if (relatedMovie.results) {
    relatedMoviePic2 = imgLink + relatedMovie.results[1].backdrop_path;
    console.log("related", relatedMoviePic2);
    title2 = relatedMovie.results[1].title;
    text2 = relatedMovie.results[1].overview;
  }
  let relatedMoviePic3, title3, text3;
  if (relatedMovie.results) {
    relatedMoviePic3 = imgLink + relatedMovie.results[2].backdrop_path;
    console.log("related", relatedMoviePic1);
    title3 = relatedMovie.results[2].title;
    text3 = relatedMovie.results[2].overview;
  }
  let relatedMoviePic4, title4, text4;
  if (relatedMovie.results) {
    relatedMoviePic4 = imgLink + relatedMovie.results[3].backdrop_path;
    console.log("related", relatedMoviePic1);
    title4 = relatedMovie.results[3].title;
    text4 = relatedMovie.results[3].overview;
  }
  return (
    <>
      <Row className="bg-color row-height ">
        <Col md={{ span: 4, offset: 5 }}>
          <Row>
            <Col xs={3} md={3} className="">
              Relate
            </Col>
            <Col xs={3} md={3} className="">
              Detail
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="flex">
        <div>
          <Card
            className="hover"
            style={{ height: "35rem", width: "30rem" }}
            bg="dark "
            text="light"
          >
            <Card.Img variant="top" src={relatedMoviePic1} />
            <Card.Body>
              <Card.Title>{title1}</Card.Title>
              <Card.Text>{text1}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card
            className="hover"
            style={{ height: "35rem", width: "30rem" }}
            bg="dark "
            text="light"
          >
            <Card.Img variant="top" src={relatedMoviePic4} />
            <Card.Body>
              <Card.Title>{title4}</Card.Title>
              <Card.Text>{text4}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            className="hover"
            style={{ height: "35rem", width: "30rem" }}
            bg="dark "
            text="light"
          >
            <Card.Img variant="top" src={relatedMoviePic2} />
            <Card.Body>
              <Card.Title>{title2}</Card.Title>
              <Card.Text>{text2}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            className="hover"
            style={{ height: "35rem", width: "30rem" }}
            bg="dark "
            text="light"
          >
            <Card.Img variant="top" src={relatedMoviePic3} />
            <Card.Body>
              <Card.Title>{title3}</Card.Title>
              <Card.Text>{text3}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Relate;
