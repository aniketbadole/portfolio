import React from "react";
import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import MainPage from "./MainPage";
const Navbar = () => {
  return (
    <nav>
      <a href="http://aniketbadole.com" id="logo">
        <img src={logo} alt="aniketbadole" />
      </a>

      <ul>
        {/* <li>
          <Link to="/about" className="about">
            <span className="aa">About me</span>
          </Link>
        </li> */}
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Projects
          </Link>

          {/* <a href="http://aniketbadole.com">
            <span className="aa">Projects</span>
          </a> */}
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Skills
          </Link>
          {/* <a href="http://aniketbadole.com">
            <span className="aa">GitHub</span>
          </a> */}
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Contact
          </Link>
          {/* <a href="http://aniketbadole.com">
            <span className="aa">Contact</span>
          </a> */}
        </li>
      </ul>
      <MainPage />
    </nav>
  );
};

export default Navbar;
