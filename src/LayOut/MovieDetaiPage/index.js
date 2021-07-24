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

const DetaiPage = () => {
  return (
    <>
      <Card className="_2Ke7Sf _3Lykuc">
        <Card.Body className=" box1">
          <div className="flex">
            <div>
              <Card.Title className="test">Special title treatment</Card.Title>
              <div>
                <div className="test">stars, ranking</div>
                <Row>
                  <Col xs={8} md={6} className="test">
                    <Row className="test">
                      <Col xs={12} md={2} className="test">
                        <Button variant="primary" className="button-color">
                          Rent HD 3$
                        </Button>
                      </Col>
                      <Col xs={12} md={2} className="test">
                        <Button variant="primary " className="button-color">
                          Rent HD 3$
                        </Button>
                      </Col>
                      <Col xs={12} md={4} className="test">
                        <Button variant="primary " className="button-color">
                          More purchase options
                        </Button>
                      </Col>
                      <Col xs={12} md={2} className="test">
                        <Button
                          variant="primary "
                          className="button-color circle"
                        >
                          |>
                        </Button>
                      </Col>
                      <Col xs={12} md={2} className="test">
                        <Button
                          variant="primary "
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
                When a mysterious 10-year-old boy turns up who claims to live in
                the woods with a giant green dragon, a forest ranger and an
                11-year-old girl set out to learn the truth about him. Directors
                David Lowery
              </Card.Text>
              <div className="test">
                <Card.Text>Director :</Card.Text>
                <Card.Text>Director :</Card.Text>
                <Card.Text>Director :</Card.Text>
              </div>
            </div>
            <Card.Img
              className=" center"
              variant="top"
              src="https://i.pinimg.com/564x/0d/a5/bd/0da5bd82b3071a3c92fe6bd70cd53ec4.jpg"
              style={{ width: "30vw" }}
            />
          </div>
          <div className="flex">
            <Card.Text className="test">
              Rentals include 30 days to start watching this video and 48 hours
              to finish once started.
            </Card.Text>
            <div>
              <Row>
                <Col xs={12} md={4} className="test">
                  <Button variant="primary">Share</Button>
                </Col>
                <Col xs={12} md={4} className="test">
                  <Button variant="primary ">Write review</Button>
                </Col>
                <Col xs={12} md={4} className="test">
                  <Button variant="primary ">Feedback</Button>
                </Col>
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetaiPage;
