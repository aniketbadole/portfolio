import React, { useState, useEffect } from "react";
import thumb from "../assets/thumbnail.jpg";

const portfolio = [
  {
    name: "NCReddit",
    description:
      "NCReddit is a news aggregation web application build with React. It is a fully responsive app which provides a list of articles, comments and users.",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 1,
    type: ["web-app", "all"],
  },
  {
    name: "Cabbed",
    description: "Cabbed is a cross platform mobile app ",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 2,
    type: ["mobile-app", "all"],
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
    type: ["web-app", "all"],
  },
  {
    name: "Cyknowsure Technologies",
    description: "Web portal for a digital marketing agency.",
    url: "https://cyknowsure.com",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 4,
    type: ["web-app", "all"],
  },
  {
    name: "Hangman",
    description: "A hangman game based on React",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 5,
    type: ["game", "all"],
  },
  {
    name: "Hobbiton Tours",
    description: "Graphic Design for New Zealand based Hobbiton Tours",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 6,
    type: ["graphic-design", "all"],
  },
  {
    name: "Kaitaki Adventures",
    description: "Graphic design for New Zealand based Kaitaki Adventures",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 7,
    type: ["graphic-design", "all"],
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.type.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <div className="project-page" id="projects">
      <div className="container">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nobis
          optio eligendi quibusdam odio
        </p>
        <button active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </button>
        <button
          active={filter === "web-app"}
          onClick={() => setFilter("web-app")}
        >
          Web Apps
        </button>
        <button
          active={filter === "mobile-app"}
          onClick={() => setFilter("mobile-app")}
        >
          Mobile Apps
        </button>
        <button active={filter === "game"} onClick={() => setFilter("game")}>
          Games
        </button>
        <button
          active={filter === "graphic-design"}
          onClick={() => setFilter("graphic-design")}
        >
          Graphic Design
        </button>
        {/* </div> */}
        <div className="project-list">
          {projects.map((item) =>
            item.filtered === true ? (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.type}</p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
