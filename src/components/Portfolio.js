import React from "react";
import Project from "../components/Project.js"; // You'll need to import the Project component
import "../styles/Portfolio.css";

function Portfolio() {
  // Sample data for projects (replace with your own project data)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      imageSrc: "https://example.com/project1.png",
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Project 2",
      imageSrc: "https://example.com/project2.png",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/yourusername/project2",
    },
    // Add more project objects as needed
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
