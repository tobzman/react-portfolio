import React from "react";
import "../styles/Resume.css";
function Resume() {
  // Sample list of proficiencies (replace with your own)
  const proficiencies = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Handle bars",
    "Mysql",
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        You can download my resume by clicking the link below:
        <a
          href="https://example.com/your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </p>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
