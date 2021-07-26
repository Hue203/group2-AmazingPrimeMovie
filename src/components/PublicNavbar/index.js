import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import "./style.css";
const PublicNavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="AmazingPrime" className="img-logo" />
          </Navbar.Brand>
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
                <NavDropdown.Item as={Link} to="/trending">
                  Trending
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/popular">
                  Popular
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowplaying">
                  NowPlaying
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/toprated">
                  Top Rated
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/nowplaying">
                  Genres
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PublicNavBar;
