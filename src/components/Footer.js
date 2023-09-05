import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {/* Add other links or contact information here */}
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}

export default Footer;
