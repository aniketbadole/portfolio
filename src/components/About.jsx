import React, { Component } from "react";
import * as api from "../api";

class About extends Component {
  state = {
    cv: {},
  };
  render() {
    const { cv } = this.state;
    return (
      <div className="project-page">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            delectus reiciendis blanditiis maxime architecto quidem, maiores
            consequatur dicta non fuga, recusandae, cumque facere excepturi
            numquam accusantium quae neque quia amet.
          </p>
          <p>{cv.name}</p>
          <p>{cv.id}</p>
          <img src={cv.picture} alt="" />
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

export default About;
