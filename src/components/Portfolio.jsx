import React, { useState, useEffect } from "react";
import thumb from "../assets/thumbnail.jpg";
import "./portfolio.css";

const portfolio = [
  {
    name: "NCReddit",
    description:
      "NCReddit is a news aggregation web application build with React, Express and PostgreSQL.",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole/fe-nc-news",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 1,
    type: ["web-app", "all"],
  },
  {
    name: "Cabbed",
    description:
      "Cabbed is a cross platform mobile app made for cab drivers to compete against ride hailing apps",
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
    github: "https://github.com/aniketbadole/",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 3,
    type: ["web-app", "all"],
  },
  {
    name: "Cyknowsure Technologies",
    description: "Web portal for a digital marketing agency.",
    url: "https://cyknowsure.com",
    github: "https://github.com/aniketbadole/",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 4,
    type: ["web-app", "all"],
  },
  {
    name: "Hangman",
    description: "A fun little hangman game made using React",
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
    github: "https://github.com/aniketbadole",
    image: thumb,
    tech: ["React", "Express.JS", "PostgreSQL"],
    id: 6,
    type: ["graphic-design", "all"],
  },
  {
    name: "Kaitiaki Adventures",
    description: "Graphic design for New Zealand based Kaitaki Adventures",
    url: "https://ncreddit.netlify.app",
    github: "https://github.com/aniketbadole",
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
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nobis
        optio eligendi quibusdam odio
      </p>
      <div className="main">
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
        {/* <div className="project-list"> */}
        <ul class="cards">
          {projects.map((item) =>
            item.filtered === true ? (
              <li class="cards_item">
                <div className="card" key={item.name}>
                  <div className="card_image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{item.name}</h2>
                    <p className="card_text">{item.description}</p>
                    {/* <div className="links">
                      <a href={item.url}>Link</a>
                      <a href={item.github}>Source</a>
                    </div> */}
                    <button className="btn card_btn">Read More</button>
                  </div>
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
