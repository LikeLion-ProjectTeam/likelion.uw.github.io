import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
