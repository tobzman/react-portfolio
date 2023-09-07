import React, { useState } from "react";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import AboutMe from "./components/AboutMe.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/ Contact.js"; // Corrected import
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("About Me");

  // Define an array of section names
  const sections = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <div className="App">
      <Header />
      <Navigation
        sections={sections} // Pass the sections array as a prop
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "About Me" && <AboutMe />}
      {activeSection === "Portfolio" && <Portfolio />}
      {activeSection === "Contact" && <Contact />}
      {activeSection === "Resume" && <Resume />}

      <Footer />
    </div>
  );
}

export default App;
