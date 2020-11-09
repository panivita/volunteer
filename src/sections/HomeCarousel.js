import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../images/slide1.jpg";
import Slide3 from "../images/slide3.jpg";
import "./custom.css";

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${Slide1})`,
          }}
        />
        <Carousel.Caption>
          <h3>Volunteering</h3>
          <p>Take care of children</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div
          className="d-block w-100"
          style={{
            backgroundImage:
              "url(" +
              "https://www.eurodiaconia.org/wordpress/wp-content/uploads/2015/11/iStock_000065986867_XXXLarge-2500x1827.jpg" +
              ")",
          }}
        />
        <Carousel.Caption>
          <h3>Volunteering</h3>
          <p>Find you role</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${Slide3})`,
          }}
        />
        <Carousel.Caption>
          <h3>Volunteering</h3>
          <p>Take care of animals</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
