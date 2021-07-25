import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import "./Style.css";
// import Relate from "./DetailComp/Relate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const DetaiPage = () => {
  return (
    <>
      <Card>
        <div
          className="_2Ke7Sf  picture-background _3Lykuc "
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f171e 50%, transparent 58%), linear-gradient(to top, #0f171e 20%, transparent 58%),url(https://www.filmmattersmagazine.com/wp-content/uploads/2017/10/Shabani-1.jpg)",
          }}
        >
          <Card.Body className=" box1">
            <Col xs={12} md={8}>
              <div className="flex">
                <div>
                  <Card.Text className="test page-title">
                    Special title treatment
                  </Card.Text>
                  <div>
                    <div className="test">stars, ranking</div>
                    <Row>
                      <Col xs={8} md={8} className="test">
                        <Row className="test">
                          <Col xs={12} md={2} className="test">
                            <Button
                              variant="secondary"
                              className="button-color"
                            >
                              Rent HD 3$
                            </Button>
                          </Col>
                          <Col xs={12} md={2} className="test">
                            <Button
                              variant="secondary "
                              className="button-color"
                            >
                              Rent HD 3$
                            </Button>
                          </Col>
                          <Col xs={12} md={4} className="test">
                            <Button
                              variant="secondary "
                              className="button-color"
                            >
                              More purchase options
                            </Button>
                          </Col>
                          <Col xs={12} md={1} className="test center-circle">
                            <Button
                              variant="secondary "
                              className="button-color circle"
                            >
                              |>
                            </Button>
                          </Col>
                          <Col xs={12} md={1} className="test center-circle">
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
                  <Card.Text className="test">
                    When a mysterious 10-year-old boy turns up who claims to
                    live in the woods with a giant green dragon, a forest ranger
                    and an 11-year-old girl set out to learn the truth about
                    him. Directors David Lowery
                  </Card.Text>
                  <div className="test">
                    <Card.Text style={{ color: "#6d7f8b" }}>
                      Director :
                    </Card.Text>
                    <Card.Text style={{ color: "#6d7f8b" }}>
                      Director :
                    </Card.Text>
                    <Card.Text style={{ color: "#6d7f8b" }}>
                      Director :
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Col>

            <div className="flex">
              <Card.Text className="test">
                Rentals include 30 days to start watching this video and 48
                hours to finish once started.
              </Card.Text>
              <div>
                <Row>
                  <Col xs={12} md={4} className="test">
                    <FontAwesomeIcon
                      icon="fa-solid fa-share-nodes"
                      className="white"
                    />
                  </Col>
                  <Col xs={12} md={4} className="test">
                    {/* <FontAwesomeIcon icon="coffee" className="white" /> */}
                  </Col>
                  <Col xs={12} md={4} className="test">
                    <Button variant="secondary ">Feedback</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
      {/* <Relate /> */}
    </>
  );
};

export default DetaiPage;
