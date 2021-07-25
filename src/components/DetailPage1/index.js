import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Style.css";
import { Link } from "react-router-dom";
import StarRating from "react-bootstrap-star-rating";
import logo from "../../logo.png";
import { MDBContainer, MDBRating } from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const imgLink = process.env.REACT_APP_IMAGE;

const DetaiPage1 = ({ movies }) => {
  let genrerList, genresArray;
  if (movies.genres) {
    genresArray = movies.genres;
    genrerList = genresArray.map((e) => e.name).join(",");
    console.log("genresList", genrerList);
  }
  let producerList, producerArray;
  if (movies.production_companies) {
    producerArray = movies.production_companies;
    producerList = producerArray.map((e) => e.name).join(",");
    console.log("genresList", producerList);
  }
  let imageMovie;
  if (movies.backdrop_path) {
    imageMovie = imgLink + movies.backdrop_path;
    console.log(imageMovie);
  }
  return (
    <>
      <Card className="boder-box">
        <div
          className="_2Ke7Sf  picture-background _3Lykuc "
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f171e 40%, transparent 68%), linear-gradient(to top, #0f171e 10%, transparent 48%),url(" +
              imageMovie +
              ")",
          }}
        >
          <Card.Body className=" box1">
            <Col xs={12} md={8}>
              <div className="flex">
                <div>
                  <Card.Text className=" page-title">
                    {movies.original_title}
                  </Card.Text>
                  <div>
                    <div className="">Vote average: {movies.vote_average}</div>
                    <br></br>
                    <Row>
                      <Col xs={8} md={10} className="">
                        <Row className="">
                          <Col xs={12} md={2} className="">
                            <Button
                              variant="secondary"
                              className="button-color"
                            >
                              Rent HD 3$
                            </Button>
                          </Col>
                          <Col xs={12} md={2} className="">
                            <Button
                              variant="secondary "
                              className="button-color"
                            >
                              Rent HD 3$
                            </Button>
                          </Col>
                          <Col xs={12} md={4} className="">
                            <Button
                              variant="secondary "
                              className="button-color"
                            >
                              More purchase options
                            </Button>
                          </Col>
                          {/* <Col xs={12} md={1} className=" center-circle">
                            <Button
                              variant="secondary "
                              className="button-color circle"
                            >
                              |>
                            </Button>
                          </Col>
                          <Col xs={12} md={1} className=" center-circle">
                            <Button
                              variant="secondary "
                              className="button-color circle"
                            >
                              +
                            </Button>
                          </Col> */}
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <br></br>

                  <Row>
                    <Col xs={4} md={2} className="">
                      <img src={logo} alt="Logo" className="logo" />
                    </Col>
                    <Col xs={8} md={8} className=" center-circle">
                      <Card.Text>
                        Rentals include 30 days to start watching this video and
                        48 hours to finish once started.
                      </Card.Text>
                    </Col>
                  </Row>
                  <br></br>
                  <Card.Text className="">{movies.overview}</Card.Text>
                  <div className="">
                    <div style={{ color: "#6d7f8b" }}>Genres :{genrerList}</div>
                    <div style={{ color: "#6d7f8b" }}>
                      Language : {movies.original_language}
                    </div>
                    <div style={{ color: "#6d7f8b" }}>
                      {" "}
                      Producers :{producerList}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <br></br>
            <Row>
              <Col xs={12} md={12} className="">
                <span class="term">
                  By ordering or viewing, you agree to our
                  <a href="/dv/tou/ref=atv_dp_terms">Terms</a>. Sold by
                  Amazon.com Services LLC.
                </span>
              </Col>
            </Row>
            {/* <Row>
                    <Col xs={12} md={4} className="">
                      <img src={logo} alt="Logo" className="logoxs" />
                    </Col>
                    <Col xs={12} md={4} className="">
                      <img src={logo} alt="Logo" className="logoxs" />
                    </Col>
                    <Col xs={12} md={4} className="">
                      <img src={logo} alt="Logo" className="logoxs" />
                    </Col>
                  </Row> */}
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default DetaiPage1;
