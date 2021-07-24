import React from "react";
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const PublicNavBar = () => {
  return <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#">Amazing Prime</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#">Movies</Nav.Link>
      <Nav.Link href="#">TVs</Nav.Link>
      <NavDropdown title="Category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#">Latest</NavDropdown.Item>
        <NavDropdown.Item href="#">Popular</NavDropdown.Item>
        <NavDropdown.Item href="#">Top Rated</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Upcoming Movies</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#Login">Login</Nav.Link>
      <Nav.Link> | </Nav.Link>
      <Nav.Link href="#Register">
        Resgister
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  
</Navbar>

</>;
};

export default PublicNavBar;
