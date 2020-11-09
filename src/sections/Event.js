import React from "react";
import Iframe from "react-iframe";
import Logo from "../images/logo.png";
import { Container, Media } from "react-bootstrap";
import "./custom.css";

export const Event = () => {
  return (
    <Container style={{ textAlign: "center" }} fluid="xl" id="event">
      <h2 className="section-head">
        Video about volunteer events Volunteers needed
      </h2>
      <section className="logo-with-line">
        <div className="line-1"></div>
        <img src={Logo} alt="logo" className="logo-img" />
        <div className="line-2"></div>
      </section>
      <p className="video-info">
        Check the video below to get an empression of Volunteers needed events
        and how mush Volunteers means for us.
      </p>
      <Iframe
        className="video"
        url="https://www.youtube.com/embed/DdMzV7qT4WQ"
        title="Volunteering event"
      />
      <section className="next-event">
        <h2 className="next-event-head">Next event</h2>
        <p>01.12.2020</p>
      </section>
      <Media style={{ textAlign: "left" }}>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000.47096268958!2d12.523784393204277!3d55.67134422235241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen!5e0!3m2!1sen!2sdk!4v1604793407725!5m2!1sen!2sdk"
          frameborder="0"
          allowfullscreen=""
          className="map"
          width={164}
          height={164}
        />
        <Media.Body>
          <h3>Copenhagen volonteer event</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </Media.Body>
      </Media>
    </Container>
  );
};
