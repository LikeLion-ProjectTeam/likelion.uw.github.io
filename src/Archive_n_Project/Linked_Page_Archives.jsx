import React, { useState } from "react";

const LinkedPageArchives = () => {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Section 1 */}
      <div>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => toggleSection("section1")}
        >
          {openSections.section1 ? "▼" : "▶"} Getting started: some foundational material
        </button>
        {openSections.section1 && (
          <ul>
            <li>1.1 About this chapter</li>
            <li>1.2 The Division Algorithm</li>
            <li>1.3 Prime factorizations</li>
            <li>1.4 Floor and ceiling functions
              <ul>
                <li>1.4.1 Computing the floor and ceiling functions</li>
                <li>1.4.2 Floor and ceiling functions</li>
                <li>1.4.3 Floor and ceiling functions applied</li>
              </ul>
            </li>
            <li>1.5 Logarithms and exponents</li>
            <li>1.6 Number representation (Optional)</li>
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

      {/* Section 3 */}
      <div>
        <button
          style={{ cursor: "pointer", marginTop: "10px" }}
          onClick={() => toggleSection("section3")}
        >
          {openSections.section3 ? "▼" : "▶"} Yet Another Section
        </button>
        {openSections.section3 && (
          <ul>
            <li>Details for yet another section...</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LinkedPageArchives;