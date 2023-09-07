import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("About Me");

  return (
    <div className="App">
      <Header />
      <Navigation
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
