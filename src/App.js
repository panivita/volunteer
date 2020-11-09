import { Header } from "./sections/Header";
import { HomeCarousel } from "./sections/HomeCarousel";
import { Home } from "./sections/Home";
import { FormComponent } from "./sections/Form";
import { Event } from "./sections/Event";
import { Footer } from "./sections/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#f1f1f1", padding: "0" }}>
        <Header />
        <HomeCarousel />
        <Home />
        <FormComponent />
        <Event />
        <Footer />
      </Container>
    </>
  );
}

export default App;
