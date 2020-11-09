import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../images/logo.png";
import "./custom.css";

export const Home = () => {
  return (
    <Container style={{ textAlign: "center" }} fluid="xl" id="home">
      <h1 className="welcome-info">
        Welcome to Volunteer Program "Volunteers needed"
      </h1>
      <section className="logo-with-line">
        <div className="line-1"></div>
        <img src={Logo} alt="logo" className="logo-img" />
        <div className="line-2"></div>
      </section>
      <p className="decription-info">
        The Volunteers needed platform provides opportunities for many local and
        international volunteer opportunities in the Middle East and North
        Africa, all of which provide participants with valuable experience that
        they can benefit from in the future. Volunteers needed seeks to offer
        volunteer opportunities at organizations such as the United Nations,
        UNICEF, UNESCO, and other international peace organizations that may
        include activities such as volunteering with refugees, volunteering
        abroad, volunteering online, and much more.
      </p>
    </Container>
  );
};
