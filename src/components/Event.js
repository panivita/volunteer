import React from "react";
import Iframe from "react-iframe";
import { Container } from "react-bootstrap";
import "./custom.css";

export const Event = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <h2>Video about volunteer events Volunteers needed</h2>
      <p>
        Check the video below to get an empression of Volunteers needed events
        and how mush Volunteers means for us.
      </p>
      <Iframe
        className="video"
        url="https://www.youtube.com/embed/DdMzV7qT4WQ"
        title="Volunteering event"
      />
      <div className="footer-column">
        <h2>Next event</h2>
        <div className="map-responsive">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000.47096268958!2d12.523784393204277!3d55.67134422235241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen!5e0!3m2!1sen!2sdk!4v1604793407725!5m2!1sen!2sdk"
            width="400"
            height="250"
            frameborder="0"
            allowfullscreen=""
          />
        </div>
        <p>01.12.2020</p>
      </div>
    </Container>
  );
};
