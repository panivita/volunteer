import { Header } from "./components/Header";
import { HomeCarousel } from "./components/HomeCarousel";
import { Home } from "./components/Home";
import { FormComponent } from "./components/Form";
import { Event } from "./components/Event";
import { Footer } from "./components/Footer";
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
