import React from "react";
import "../styles/Header.css";

function Header({ activeSection, setActiveSection }) {
  const sections = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <header>
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
    </header>
  );
}

export default Header;
