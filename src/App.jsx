import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import AboutTeam from "./components/AboutTeam";
import AboutUs from "./components/AboutUs";
import ServicesMain from "./components/ServicesMain";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutTeam />
      <AboutUs />
      <ServicesMain />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
