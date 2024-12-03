import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li onClick={() => scrollToSection("about-us")}>About Us</li>
          <li onClick={() => scrollToSection("story")}>Story</li>
          <li onClick={() => scrollToSection("archive")}>Archive & Projects</li>
          <li onClick={() => scrollToSection("team")}>Team</li>
          <li onClick={() => scrollToSection("gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
