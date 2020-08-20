import React from "react";
import ProjectBox from "./ProjectBox";

const ProjectList = (props) => {
  return (
    <div className="project-list">
      {props.projects.map((eachProject) => {
        return <ProjectBox {...eachProject} key={eachProject.id} />;
      })}
    </div>
  );
};

export default ProjectList;
