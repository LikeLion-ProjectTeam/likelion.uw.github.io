import React, { useState } from "react";

const LinkedPageArchives = () => {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section1_1: false,
    section1_2: false,
    section2: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle only the clicked section
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Projects */}
      <div>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => toggleSection("section1")}
        >
          {openSections.section1 ? "▼" : "▶"} Project Log Archives
        </button>
        {openSections.section1 && (
          <ul>
            {/* Project Team 2024 */}
            <li>
              <button
                style={{ cursor: "pointer", marginTop: "5px" }}
                onClick={() => toggleSection("section1_1")}
              >
                {openSections.section1_1 ? "▼" : "▶"} 2024 project team
              </button>
              {openSections.section1_1 && (
                <ul>
                  <li>2024/12/03 project team meeting log</li>
                  <li>그리고 이제 이런식으로 더 뭐 추가할 예정</li>
                </ul>
              )}
            </li>

            {/* Project Team 2025 */}
            <li>
              <button
                style={{ cursor: "pointer", marginTop: "5px" }}
                onClick={() => toggleSection("section1_2")}
              >
                {openSections.section1_2 ? "▼" : "▶"} 2025 project team
              </button>
              {openSections.section1_2 && (
                <ul>
                  <li>TBD</li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>

      {/* Section 2 */}
      <div>
        <button
          style={{ cursor: "pointer", marginTop: "10px" }}
          onClick={() => toggleSection("section2")}
        >
          {openSections.section2 ? "▼" : "▶"} Ideathon 2024 Projects
        </button>
        {openSections.section2 && (
          <ul>
            <li>
              <h3>Reconnection 다시: 봄</h3>
              <h4>Team: Moment</h4>
              <h5>Members: Leo Jeong, Alex Lee, Ikjoo Oh, Saean Shin, Sean Baek</h5>
              <p>An application tailored for career matching, government assistance, and community/networking services for senior citizens.</p>
              <p>Frontend: React Native, Backend: Node.js, Database: MongoDB</p>
              <img src="reconnectionthumbnail.jpeg" alt="Project Image" />
              <a href="#">Learn More</a>
            </li>

            <li>
              <h3>EcoBoom</h3>
              <h4>Team: EcoBadger</h4>
              <h5>Members: Beomseong Kim, Jim Kim, Yunji Lee, Hyoungwoo L</h5>
              <p>An application tailored for career matching, government assistance, and community/networking services for senior citizens.</p>
              <p>Frontend: React Native, Backend: Node.js, Database: MongoDB</p>
              <img src="reconnectionthumbnail.jpeg" alt="Project Image" />
              <a href="#">Learn More</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LinkedPageArchives;