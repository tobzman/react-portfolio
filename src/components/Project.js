import React from "react";
import "../styles/Project.css";
function Project({ imageSrc, title, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
