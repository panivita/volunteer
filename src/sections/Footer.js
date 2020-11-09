import React from "react";
import { Container } from "react-bootstrap";
import { Phone, Envelope } from "react-bootstrap-icons";
import "./custom.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <Container fluid="xl" id="contact">
        <ul className="contact-details">
          <li style={{ width: "40%" }}>© 2020 Victoria Kush</li>
          <li className="phone-info">
            <div className="phone-icon">
              <Phone />
            </div>
            <a href="tel:71465372" title="nummer of the phone">
              71 46 53 72
            </a>
          </li>
          <li className="email-info">
            <div className="email-icon">
              <Envelope />
            </div>
            <a
              href="mailto:victoria.v.kush@gmail.com?"
              title="e-mail"
              subject="subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              victoria.v.kush@gmail.com
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
