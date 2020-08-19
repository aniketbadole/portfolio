import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      {/* <MainPage /> */}
      <Projects />
      {/* <About />
      <Projects /> */}

      <Footer />
    </div>
  );
}

export default App;
