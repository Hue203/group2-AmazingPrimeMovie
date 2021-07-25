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

const Relate = () => {
  return (
    <>
      <Row className="bg-color row-height ">
        <Col md={{ span: 4, offset: 5 }}>
          <Row>
            <Col xs={3} md={3} className="test">
              Relate
            </Col>
            <Col xs={3} md={3} className="test">
              Detail
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Relate;
