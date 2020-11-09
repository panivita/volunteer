import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import "./custom.css";

export const Header = () => {
  return (
    <Navbar expand="lg">
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto custom-nav" bsStyle="tabs">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#event">Events</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="200"
          height="120"
          className="d-inline-block align-top"
          alt="volonteer organization logo"
        />
      </Navbar.Brand>
        <Nav className="custom-nav">
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#volunteer">Volunteer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
