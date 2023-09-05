import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img
          src="https://example.com/your-profile-image.jpg"
          alt="Your Name"
          className="profile-image"
        />
        <p>
          Hello! I'm Your Name, a passionate web developer with a love for
          creating interactive and user-friendly web applications. I have
          experience in...
          {/* Add a brief bio and information about your skills and interests */}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
