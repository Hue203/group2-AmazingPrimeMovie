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
      <Card className="_2Ke7Sf ">
        <Card.Body className=" box1">
          <div className="flex">
            <div>
              <Card.Title>Special title treatment</Card.Title>
              <div className="container flex test">
                <Button variant="primary">Go somewhere</Button>
                <Button variant="primary">Go somewhere</Button>
                <Button variant="primary">Go somewhere</Button>
              </div>
              <Card.Text>
                Rentals include 30 days to start watching this video and 48
                hours to finish once started.
              </Card.Text>
              <Card.Text>
                When a mysterious 10-year-old boy turns up who claims to live in
                the woods with a giant green dragon, a forest ranger and an
                11-year-old girl set out to learn the truth about him. Directors
                David Lowery
              </Card.Text>
              <Card.Text>Director :</Card.Text>
              <Card.Text>Director :</Card.Text>
              <Card.Text>Director :</Card.Text>
            </div>

            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/0d/a5/bd/0da5bd82b3071a3c92fe6bd70cd53ec4.jpg"
              style={{ width: "30vw" }}
            />
          </div>
          <Card.Text>
            Rentals include 30 days to start watching this video and 48 hours to
            finish once started.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetaiPage;
