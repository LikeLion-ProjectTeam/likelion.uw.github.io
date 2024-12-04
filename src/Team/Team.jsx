import React, { useState, useRef } from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

import chaewon from "../Assets/Profile/chaewon.png";
import sijun from "../Assets/Profile/Sijun.png";
import youngjun from "../Assets/Profile/youngjun.png";
import taenam from "../Assets/Profile/taenam.png";
import sunghyeon from "../Assets/Profile/sunghyeon.png";
import sooa from "../Assets/Profile/sooa.png";
import seohee from "../Assets/Profile/seohee.png";
import nayun from "../Assets/Profile/nayun.png";
import hyoungwoo from "../Assets/Profile/hyoungwoo.png";
import hari from "../Assets/Profile/hari.png";
import beomseong from "../Assets/Profile/beomseong.png";

const Team = () => {
  const [activeTeam, setActiveTeam] = useState(null);
  const teamSectionRef = useRef(null);

  const teamMembers = {
    // 운영진 profile
    operation: [
      {
        name: "Beomseong Kim",
        major: "B.S. Data Science",
        year: "Senior",
        image: beomseong,
        linkedin: "https://www.linkedin.com/in/beomseong-kim/",
      },
      {
        name: "Hari Kang",
        major: "B.S. Computer Science",
        year: "Senior",
        image: hari,
        linkedin: "https://www.linkedin.com/in/hari-kang/",
      },
      {
        name: "Youngjun Jung",
        major: "B.S. Computer Science",
        year: "Junior",
        image: youngjun,
        linkedin: "https://www.linkedin.com/in/june121284/",
      },
    ],

    // computer science profile
    csTeam: [
      {
        name: "Taenam Kim",
        role: "Mentor",
        major: "B.S. Computer Science",
        year: "Senior",
        image: taenam,
        linkedin: "https://www.linkedin.com/in/taenamkim/",
      },
      {
        name: "Chaewon Yoo",
        role: "Front-End Developer",
        major: "B.S. Computer Science",
        year: "Junior",
        image: chaewon,
        linkedin: "https://www.linkedin.com/in/chaewon-rachel-yoo-26765a32b/",
      },
      {
        name: "Nayun Kang",
        role: "Full-Stack Developer",
        major: "B.S. Computer Science",
        year: "Senior",
        image: nayun,
        linkedin: "https://www.linkedin.com/in/nayun-kang-a7a535317/",
      },
      {
        name: "Seohee Choy",
        role: "Front-End Developer",
        major: "B.S. Computer Science",
        year: "Junior",
        image: seohee,
        linkedin: "https://www.linkedin.com/in/seohee-choy/",
      },
      {
        name: "Sijun Lee",
        role: "Back-End Developer",
        major: "B.S. Computer Science",
        year: "Sophomore",
        image: sijun,
        linkedin: "https://www.linkedin.com/in/sijun-lee-8321a920a/",
      },
      {
        name: "Sooa Cho",
        role: "Designer",
        major: "B.S. Graphic Design",
        year: "Junior",
        image: sooa,
        linkedin: "https://www.linkedin.com/in/cho-sooa-4005a0330/",
      },
      {
        name: "Sunghyeon Baek",
        role: "Front-End Developer",
        major: "B.S. Computer Science",
        year: "Junior",
        image: sunghyeon,
        linkedin: "https://www.linkedin.com/in/sean-baek?trk=contact-info",
      },
      {
        name: "Youngjun Jung",
        role: "Back-End Developer",
        major: "B.S. Computer Science",
        year: "Junior",
        image: youngjun,
        linkedin: "https://www.linkedin.com/in/june121284/",
      },
    ],

    // data science profile
    dsTeam: [
      {
        name: "Beomseong Kim",
        major: "B.S. Data Science",
        year: "Senior",
        image: beomseong,
        linkedin: "https://www.linkedin.com/in/beomseong-kim/",
      },
      {
        name: "Ikjoo Oh",
        major: "B.S. Data Science",
        year: "Junior",
        // image: ikjoo,
        // linkedin: "",
      },
      {
        name: "Yunji Lee",
        major: "B.S. Data Science",
        year: "Junior",
        // image: yunji,
        // linkedin: "",
      },
    ],

    // lecture profile
    lecTeam: [
      {
        name: "Hari Kang",
        major: "B.S. Data Science",
        year: "Senior",
        image: hari,
        linkedin: "https://www.linkedin.com/in/hari-kang/",
      },
      {
        name: "Hyoungwoo Kim",
        major: "B.S. Data Science",
        year: "Junior",
        image: hyoungwoo,
        linkedin: "https://www.linkedin.com/in/hyoungwoo-kim-a1b2b8240/",
      },
      {
        name: "Saean Shin",
        major: "B.S. Computer Science",
        year: "Junior",
        // image: saean,
        linkedin: "https://www.linkedin.com/in/saean-shin-ba93802b3/",
      },
    ],
  };
  const handleButtonClick = (team) => {
    setActiveTeam(team === activeTeam ? null : team);
  };

  return (
    <div className="team">
      <h1>Meet Our Team</h1>
      
      <div className="team-list">
        {teamMembers.operation.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h2 className="team-name">{member.name}</h2>
            {member.role && <p className="team-role">{member.role}</p>}
            <p className="team-school">
              {member.major} ({member.year})
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        ))}
      </div>

      <div className="team-buttons">
        {!activeTeam && (
          <>
            <button className="teamButton" onClick={() => handleButtonClick("csTeam")}>
              Computer Science Team
            </button>
            <button className="teamButton" onClick={() => handleButtonClick("dsTeam")}>
              Data Science Team
            </button>
            <button className="teamButton" onClick={() => handleButtonClick("lecTeam")}>
              Lecture Team
            </button>
          </>
        )}
        {activeTeam && (
          <button className="teamButton see-less" onClick={() => handleButtonClick(null)}>
            See Less
          </button>
        )}
      </div>

      {activeTeam && teamMembers[activeTeam] && (
        <div className="team-list" ref={teamSectionRef}>
          {teamMembers[activeTeam].map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h2 className="team-name">{member.name}</h2>
              {member.role && <p className="team-role">{member.role}</p>}
              <p className="team-school">
                {member.major} ({member.year})
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;

