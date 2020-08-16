import React, { Component } from "react";
import axios from "axios";

const baseURL = "https://gitconnected.com/v1/portfolio/aniketbadole";

const getProfile = () => {
  return axios.get(baseURL).then(({ data }) => {
    console.log(data);
    return data;
  });
};

class Projects extends Component {
  state = {
    cv: {},
  };
  render() {
    const { cv } = this.state;
    return (
      <div className="project-page">
        <div className="container">
          <h1>Projects</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            nobis optio eligendi quibusdam odio consequatur enim at et odit
            aliquid? Aliquid libero quis modi repellendus. Eligendi deleniti
            laudantium saepe voluptates!
          </p>
          <p>{cv.name}</p>
          <img src={cv.picture} alt="" srcset="" />
          {console.log(cv, "******")}
          <p>{cv.id}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    getProfile().then((data) => {
      this.setState({ cv: data.basics });
    });
  }
}

export default Projects;
