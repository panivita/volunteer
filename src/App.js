import { Header } from "./sections/Header";
import { HomeCarousel } from "./sections/HomeCarousel";
import { Home } from "./sections/Home";
import { FormComponent } from "./sections/Form";
import { Event } from "./sections/Event";
import { Footer } from "./sections/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HomeCarousel />
      <Home />
      <FormComponent />
      <Event />
      <Footer />
    </>
  )
}

export default App;
