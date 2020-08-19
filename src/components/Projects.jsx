import React, { Component } from "react";
import * as api from "../api";
import thumb from "../assets/thumbnail.jpg";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "NCReddit",
        description:
          "NCReddit is a news aggregation web application build with React. It is a fully responsive app which provides a list of articles, comments and users.",
        url: "https://ncreddit.netlify.app",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 1,
      },
      {
        name: "Cabbed",
        description: "Cabbed is a cross platform mobile app ",
        url: "https://ncreddit.netlify.app",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 2,
      },
      {
        name: "GBIS",
        description:
          "A web project for a college. Includes a backend to fetch student data which is rendered on to the admin panel",
        url: "https://ncreddit.netlify.app",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 3,
      },
      {
        name: "Cyknowsure Technologies",
        description: "Web portal for a digital marketing agency.",
        url: "https://cyknowsure.com",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 4,
      },
      {
        name: "Hangman",
        description: "A hangman game based on React",
        url: "https://ncreddit.netlify.app",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 5,
      },
      {
        name: "Hobbiton Tours",
        description: "Graphic Design for New Zealand based Hobbiton Tours",
        url: "https://ncreddit.netlify.app",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 6,
      },
      {
        name: "Kaitaki Adventures",
        description: "Graphic design for New Zealand based Kaitaki Adventures",
        url: "https://ncreddit.netlify.app",
        github: "https://github.com/aniketbadole/fe-nc-news",
        image: thumb,
        tech: ["React", "Express.JS", "PostgreSQL"],
        id: 7,
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <div className="project-page">
        <div className="container">
          <h1>Projects</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            nobis optio eligendi quibusdam odio
          </p>
        </div>
        <div className="grid">
          {projects.map((eachProject) => {
            return (
              <div
                className="card"
                key={eachProject.id}
                style={{ backgroundImage: `url(${eachProject.image})` }}
              >
                {/* <img src={eachProject.image} alt="" /> */}
                <h4>{eachProject.name}</h4>
                <p>{eachProject.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    api.getProfile().then((data) => {
      this.setState({ cv: data.basics });
    });
  }
}

export default Projects;
