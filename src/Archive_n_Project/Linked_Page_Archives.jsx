import React, { useState } from "react";

import ecoboom from "../Images/ecoboom_thumbnail.jpeg";
import reconnection from "../Images/reconnection_thumbnail.jpeg";
import cozycottage from "../Images/cozycottage_thumbnail.jpeg";

const LinkedPageArchives = () => {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section1_1: false,
    section1_2: false,
    section1_1_1: false,
    section2: false,
    section2_1: false,
    section2_2: false,
    section2_1_1: false,
    section2_1_2: false,
    section2_1_3: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Projects */}
      <div
        style={{
          display: "inline-block",
          width: "80%",
          textAlign: "center",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Project Log Archives */}
        <button
          style={{
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            padding: "10px",
            border: "none",
            backgroundColor: "#ff6600",
            color: "white",
            borderRadius: "5px",
          }}
          onClick={() => toggleSection("section1")}
        >
          {openSections.section1 ? "▼" : "▶"} Project Log Archives
        </button>
        {openSections.section1 && (
          <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
            {/* Project Team 2024 */}
            <li style={{ marginBottom: "10px" }}>
              <button
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                }}
                onClick={() => toggleSection("section1_1")}
              >
                {openSections.section1_1 ? "▼" : "▶"} 2024 project team
              </button>
              {openSections.section1_1 && (
                <ul
                  style={{
                    listStyle: "none",
                    padding: "10px 20px",
                    textAlign: "left",
                  }}
                >
                  {/* Project Logs Dropdown */}
                  <li style={{ marginTop: "10px" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                        width: "90%",
                      }}
                      onClick={() => toggleSection("section1_1_1")}
                    >
                      {openSections.section1_1_1 ? "▼" : "▶"} Project Logs
                    </button>
                    {openSections.section1_1_1 && (
                      <ul
                        style={{
                          listStyle: "square",
                          padding: "10px 20px",
                          textAlign: "left",
                        }}
                      >
                        <li>
                          <a
                            href="https://docs.google.com/document/d/1i3FMGvnRdZVXKwzYlg366lQek-4Kb4-n13ioXTiXEYs/edit?tab=t.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#007bff",
                              textDecoration: "none",
                            }}
                          >
                            Project meeting logs (updated weekly)
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Project Team 2025 */}
            <li style={{ marginBottom: "10px" }}>
              <button
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                }}
                onClick={() => toggleSection("section1_2")}
              >
                {openSections.section1_2 ? "▼" : "▶"} 2025 project team
              </button>
              {openSections.section1_2 && (
                <ul
                  style={{
                    listStyle: "circle",
                    padding: "10px 20px",
                    textAlign: "left",
                  }}
                >
                  <li>TBD</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        {/* Annual Ideathons */}
        <button
          style={{
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            padding: "10px",
            border: "none",
            backgroundColor: "#ff6600",
            color: "white",
            borderRadius: "5px",
            marginTop: "20px",
          }}
          onClick={() => toggleSection("section2")}
        >
          {openSections.section2 ? "▼" : "▶"} Annual Ideathons
        </button>
        {openSections.section2 && (
          <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
            {/* Ideathon 2024 */}
            <li style={{ marginBottom: "10px" }}>
              <button
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                }}
                onClick={() => toggleSection("section2_1")}
              >
                {openSections.section2_1 ? "▼" : "▶"} 2024 Ideathon teams
              </button>
              {openSections.section2_1 && (
                <ul
                  style={{
                    listStyle: "none",
                    padding: "10px 20px",
                    textAlign: "left",
                  }}
                >
                  {/* Team 1 */}
                  <li style={{ marginTop: "10px" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                        width: "90%",
                      }}
                      onClick={() => toggleSection("section2_1_1")}
                    >
                      {openSections.section2_1_1 ? "▼" : "▶"} Team 1
                    </button>
                    {openSections.section2_1_1 && (
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "10px 20px",
                          textAlign: "left",
                        }}
                      >
                        <li style={{ marginBottom: "20px", textAlign: "center" }}>
                          <h3>EcoBoom</h3>
                          <h4>Team: EcoBadger</h4>
                          <h5>
                            Members: Leo Jeong, Alex Lee, Ikjoo Oh, Saean Shin,
                            Sean Baek
                          </h5>
                          <p>
                            Recycling-focused application including a reward
                            system, business partnerships, premium services, and
                            data insight.
                          </p>
                          <img
                            src={ecoboom}
                            alt="Project Image"
                            style={{
                              maxWidth: "50%",
                              height: "auto",
                              margin: "10px 0",
                            }}
                          />
                          <a
                            href="#"
                            style={{
                              display: "block",
                              marginTop: "10px",
                            }}
                          >
                            Learn More
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Team 2 */}
                  <li style={{ marginTop: "10px" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                        width: "90%",
                      }}
                      onClick={() => toggleSection("section2_1_2")}
                    >
                      {openSections.section2_1_2 ? "▼" : "▶"} Team 2
                    </button>
                    {openSections.section2_1_2 && (
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "10px 20px",
                          textAlign: "left",
                        }}
                      >
                        <li style={{ marginBottom: "20px", textAlign: "center" }}>
                          <h3>Reconnection 다시: 봄</h3>
                          <h4>Team: Moment</h4>
                          <h5>
                            Members: Beomseong Kim, Jim Kim, Yunji Lee, Hyoungwoo
                            Kim, Hari Kang
                          </h5>
                          <p>
                            An application tailored for career matching,
                            government assistance, and community/networking
                            services for senior citizens.
                          </p>
                          <p>
                            Frontend: React Native, Backend: Node.js, Database:
                            MongoDB
                          </p>
                          <img
                            src={reconnection}
                            alt="Project Image"
                            style={{
                              maxWidth: "50%",
                              height: "auto",
                              margin: "10px 0",
                            }}
                          />
                          <a
                            href="#"
                            style={{
                              display: "block",
                              marginTop: "10px",
                            }}
                          >
                            Learn More
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Team 3 */}
                  <li style={{ marginTop: "10px" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                        width: "90%",
                      }}
                      onClick={() => toggleSection("section2_1_3")}
                    >
                      {openSections.section2_1_3 ? "▼" : "▶"} Team 3
                    </button>
                    {openSections.section2_1_3 && (
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "10px 20px",
                          textAlign: "left",
                        }}
                      >
                        <li style={{ marginBottom: "20px", textAlign: "center" }}>
                          <h3>Cozy Cottage</h3>
                          <h4>Team: Unikun</h4>
                          <h5>
                            Members: Daniel Park, Chaewon Yoo, Seohee Choy, Nayun
                            Kang, Sooa Cho
                          </h5>
                          <p>
                            Mental health services utilizing AI, incorporating a
                            hexagonal model for diagnoses and treatment plans.
                          </p>
                          <img
                            src={cozycottage}
                            alt="Project Image"
                            style={{
                              maxWidth: "50%",
                              height: "auto",
                              margin: "10px 0",
                            }}
                          />
                          <a
                            href="#"
                            style={{
                              display: "block",
                              marginTop: "10px",
                            }}
                          >
                            Learn More
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Ideathon Team 2025 */}
            <li style={{ marginBottom: "10px" }}>
              <button
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                }}
                onClick={() => toggleSection("section2_2")}
              >
                {openSections.section2_2 ? "▼" : "▶"} 2025 ideathon teams 
              </button>
              {openSections.section2_2 && (
                <ul
                  style={{
                    listStyle: "circle",
                    padding: "10px 20px",
                    textAlign: "left",
                  }}
                >
                  <li>TBD</li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LinkedPageArchives;
