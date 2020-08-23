import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      {/* <MainPage /> */}
      <Projects />
      {/* <About />
      <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
