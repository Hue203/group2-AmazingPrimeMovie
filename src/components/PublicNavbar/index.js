import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const PublicNavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Amazing Prime </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">TV</Nav.Link>
              <NavDropdown title="Catagories" id="basic-nav-dropdown">
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Trending</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Top Rated
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Genres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PublicNavBar;
