import React from "react";
import { Carousel } from "react-bootstrap";
import "./custom.css";

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "600px" }}
          src="https://cdn.pixabay.com/photo/2017/05/29/10/42/volunteers-2353427_960_720.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Volunteering</h3>
          <p>Take care of planet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src="https://www.eurodiaconia.org/wordpress/wp-content/uploads/2015/11/iStock_000065986867_XXXLarge-2500x1827.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Volunteering</h3>
          <p>Take care of people</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/04/13/13/13/volunteer-1326758_960_720.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Volunteering</h3>
          <p>
            Find you role
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
