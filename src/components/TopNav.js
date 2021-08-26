import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          UzScript
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100">
            <Nav.Link as={Link} to="/dashboard/learn">
              Learn
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/practice">
              Practice
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/make">
              Make Something
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-up" className="ml-0 ml-md-auto">
              sign up
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="d-none">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
