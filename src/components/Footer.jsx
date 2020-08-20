import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const year = new Date();

const Footer = () => {
  return (
    <footer>
      <p className="left">
        Copyright &copy; {year.getFullYear()} Aniket Badole.
      </p>

      <div className="right">
        <ul>
          <li>
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0)"
              borderWidth="5"
              borderStyle="solid"
              icon="twitter"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="27%"
              url="https://twitter.com/b_aniket"
              size="16"
            />
          </li>
          <li>
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0)"
              borderWidth="5"
              borderStyle="solid"
              icon="linkedin"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="27%"
              url="https://linkedin.com/in/aniketbadole"
              size="16"
            />
          </li>
          <li>
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0)"
              borderWidth="5"
              borderStyle="solid"
              icon="github"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="27%"
              url="https://github.com/aniketbadole"
              size="16"
            />
          </li>
          <li>
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0)"
              borderWidth="5"
              borderStyle="solid"
              icon="instagram"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="27%"
              url="https://instagram.com/b_aniket"
              size="16"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
