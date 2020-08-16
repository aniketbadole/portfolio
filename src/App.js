import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
// import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Navbar />
      {/* <MainPage /> */}
      {/* <Router> */}
      <Projects />
      <About />
      <Projects />

      {/* </Router> */}
      <Footer />
    </div>
  );
}

export default App;
