import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "react-scroll-up";

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
      <ScrollToTop showUnder={160}>
        <span className="scroll-button">▲</span>
      </ScrollToTop>
    </div>
  );
}

export default App;
