import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Style.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const DetaiPage1 = ({ movies }) => {
  let genrerList, genresArray;
  if (movies.genres) {
    genresArray = movies.genres;
    genrerList = genresArray.map((e) => e.name).join(",");
    console.log("genresList", genrerList);
  }
  return (
    <>
      <Card className="boder-box">
        <div
          className="_2Ke7Sf  picture-background _3Lykuc "
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f171e 50%, transparent 78%), linear-gradient(to top, #0f171e 20%, transparent 58%),url(https://www.filmmattersmagazine.com/wp-content/uploads/2017/10/Shabani-1.jpg)",
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
                    <Row>
                      <Col xs={8} md={8} className="">
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
                          <Col xs={12} md={1} className=" center-circle">
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
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <Card.Text>
                    Rentals include 30 days to start watching this video and 48
                    hours to finish once started.
                  </Card.Text>
                  <Card.Text className="">{movies.overview}</Card.Text>
                  <div className="">
                    <div style={{ color: "#6d7f8b" }}>Director :</div>
                    <div style={{ color: "#6d7f8b" }}>
                      Language : {movies.original_language}
                    </div>
                    <div style={{ color: "#6d7f8b" }}>Genres :{genrerList}</div>
                  </div>
                </div>
              </div>
            </Col>

            <div className="flex">
              <span class="term">
                By ordering or viewing, you agree to our
                <a href="/dv/tou/ref=atv_dp_terms">Terms</a>. Sold by Amazon.com
                Services LLC.
              </span>
              <div>
                <Row>
                  <Col xs={12} md={4} className="">
                    <Button variant="secondary ">Feedback</Button>
                  </Col>
                  <Col xs={12} md={4} className="">
                    <Button variant="secondary ">Feedback</Button>
                  </Col>
                  <Col xs={12} md={4} className="">
                    <Button variant="secondary ">Feedback</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default DetaiPage1;
