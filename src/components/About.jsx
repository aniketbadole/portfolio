import React, { Component } from "react";
import * as api from "../api";

class About extends Component {
  state = {
    cv: {},
  };
  render() {
    return (
      <div className="home-about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          delectus reiciendis blanditiis maxime architecto quidem, maiores
          consequatur dicta non fuga, recusandae, cumque facere excepturi
          numquam accusantium quae neque quia amet.
        </p>
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
