import React from "react";
import { ReactComponent as Node } from "../assets/svg/nodejs.svg";
import { ReactComponent as ReactJS } from "../assets/svg/react.svg";
import { ReactComponent as Express } from "../assets/svg/express.svg";
import { ReactComponent as Bootstrap } from "../assets/svg/bootstrap.svg";
import { ReactComponent as Css } from "../assets/svg/css.svg";
import { ReactComponent as Git } from "../assets/svg/git.svg";
import { ReactComponent as GitHub } from "../assets/svg/github.svg";
import { ReactComponent as Heroku } from "../assets/svg/heroku.svg";
import { ReactComponent as Html } from "../assets/svg/html.svg";
import { ReactComponent as JavaScript } from "../assets/svg/javascript.svg";
import { ReactComponent as Mocha } from "../assets/svg/mocha.svg";
import { ReactComponent as MongoDb } from "../assets/svg/mongodb.svg";
import { ReactComponent as Npm } from "../assets/svg/npm.svg";
import { ReactComponent as Photoshop } from "../assets/svg/photoshop.svg";
import { ReactComponent as Psql } from "../assets/svg/psql.svg";
import { ReactComponent as Ruby } from "../assets/svg/ruby.svg";
import { ReactComponent as Wordpress } from "../assets/svg/wordpress.svg";

const Skills = () => {
  return (
    <div className="project-page" id="skills">
      <div className="container">
        <h1>Skills</h1>
        <p>“First, solve the problem. Then, write the code.” – John Johnson</p>
        <div id="svg">
          <div className="single-svg">
            <Node />
          </div>
          <div className="single-svg">
            <ReactJS />
          </div>
          <div className="single-svg">
            <Express />
          </div>
          <div className="single-svg">
            <Bootstrap />
          </div>
          <div className="single-svg">
            <Css />
          </div>
          <div className="single-svg">
            <Git />
          </div>
          <div className="single-svg">
            <GitHub />
          </div>
          <div className="single-svg">
            <Heroku />
          </div>
          <div className="single-svg">
            <Html />
          </div>
        </div>
        <div id="svg">
          <div className="single-svg">
            <JavaScript />
          </div>
          <div className="single-svg">
            <Mocha />
          </div>
          <div className="single-svg">
            <MongoDb />
          </div>
          <div className="single-svg">
            <Npm />
          </div>
          <div className="single-svg">
            <Photoshop />
          </div>
          <div className="single-svg">
            <Psql />
          </div>
          <div className="single-svg">
            <Ruby />
          </div>
          <div className="single-svg">
            <Wordpress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
