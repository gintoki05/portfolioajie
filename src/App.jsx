import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Clients />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
};

export default App;
