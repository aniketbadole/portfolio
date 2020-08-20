import React from "react";

const ProjectBox = ({
  name,
  description,
  url,
  github,
  image,
  tech,
  id,
  type,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{type}</p>
    </div>
  );
};

export default ProjectBox;
