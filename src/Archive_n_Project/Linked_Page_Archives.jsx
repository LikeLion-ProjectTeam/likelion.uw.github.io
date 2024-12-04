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
      [section]: !prev[section],
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
              <button
                style={{ cursor: "pointer", marginTop: "5px" }}
                onClick={() => toggleSection("section1_1")}
              >
                {openSections.section1_2 ? "▼" : "▶"} 2025 project team 
              </button>
              {openSections.section1_1 && (
                <ul>
                  <li> TBD</li>
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
          {openSections.section2 ? "▼" : "▶"} Another Section
        </button>
        {openSections.section2 && (
          <ul>
            <li>Details for another section...</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LinkedPageArchives;
