import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import MainPage from "./MainPage";
const Navbar = () => {
  return (
    <nav>
      <a href="http://aniketbadole.com" id="logo">
        <img src={logo} alt="aniketbadole" />
      </a>

      <ul>
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
        </li>
      </ul>
      <MainPage />
    </nav>
  );
};

export default Navbar;
