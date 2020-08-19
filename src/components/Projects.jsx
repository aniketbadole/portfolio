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

          {projects.map((eachProject) => {
            return (
              <div className="card" key={eachProject.id}>
                <img src={eachProject.image} alt="" />
                <h4>{eachProject.name}</h4>
                <p>
                  Votes: {eachProject.github} Comments: {eachProject.url}
                </p>
                <p>{eachProject.description}</p>
              </div>
            );
          })}
          {/* 
          <img src={projects.image} alt="" />
          <p>{projects.name}</p>
          <p>{projects.description}</p>
          <p>
            {projects.url}, {projects.github}
          </p>
          <span>{projects.tech}</span> */}
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
