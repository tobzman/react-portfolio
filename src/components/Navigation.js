import React from "react";
import "../styles/Navigation.css";

function Navigation({ sections, activeSection, setActiveSection }) {
  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={section === activeSection ? "active" : ""}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
