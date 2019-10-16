import React from 'react';
import { Nav,Navbar, } from 'react-bootstrap';
import "../styles/navbar.css"
function Navigation() {
  return (
    <div className="Navbar">
  <Navbar className="py-4" bg="transparent" expand="lg">
  <Navbar.Brand href="#intro">Ahmed Raza</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navigation;
