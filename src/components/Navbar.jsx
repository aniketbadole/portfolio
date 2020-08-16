import React from "react";
import logo from "../assets/logo.png";
import { Link } from "@reach/router";
import MainPage from "./MainPage";
const Navbar = () => {
  return (
    <nav>
      <a href="http://aniketbadole.com" id="logo">
        <img src={logo} alt="aniketbadole" srcset="" />
      </a>

      <ul>
        <li>
          <Link to="/about" className="about">
            <span className="aa">About me</span>
          </Link>
        </li>
        <li>
          <a href="http://aniketbadole.com">
            <span className="aa">Projects</span>
          </a>
        </li>
        <li>
          <a href="http://aniketbadole.com">
            <span className="aa">GitHub</span>
          </a>
        </li>
        <li>
          <a href="http://aniketbadole.com">
            <span className="aa">Contact</span>
          </a>
        </li>
      </ul>
      <MainPage />
    </nav>
  );
};

export default Navbar;
