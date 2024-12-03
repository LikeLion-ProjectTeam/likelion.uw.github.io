import React from "react";
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

const Team = () => {
  const teamMembers = [
    {
      name: "김태남",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Senior",
      image: taenam,
      linkedin: "https://www.linkedin.com/in/taenamkim/",
    },
    {
      name: "정영준",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Junior",
      image: youngjun,
      linkedin: "https://www.linkedin.com/in/june121284/",
    },
    {
      name: "백성현",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Junior",
      image: sunghyeon,
      linkedin: "https://www.linkedin.com/in/sean-baek?trk=contact-info",
    },
    {
      name: "조수아",
      school: "UW-Madison",
      major: "B.S. Graphic Design",
      year: "Junior",
      image: sooa,
      linkedin: "https://www.linkedin.com/in/cho-sooa-4005a0330/",
    },
    {
      name: "이시준",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Sophomore",
      image: sijun,
      linkedin: "https://www.linkedin.com/in/sijun-lee-8321a920a/",
    },
    {
      name: "유채원",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Junior",
      image: chaewon,
      linkedin: "https://www.linkedin.com/in/chaewon-rachel-yoo-26765a32b/",
    },
    {
      name: "최서희",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Junior",
      image: seohee,
      linkedin: "https://www.linkedin.com/in/seohee-choy/",
    },
    {
      name: "강나윤",
      school: "UW-Madison",
      major: "B.S. Computer Science",
      year: "Senior",
      image: nayun,
      linkedin: "https://www.linkedin.com/in/nayun-kang-a7a535317/",
    },
  ];

  return (
    <div className="team">
      <h1>Meet Our Team</h1>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
            <p className="team-school">
              {member.school} - {member.major} ({member.year})
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
    </div>
  );
};

export default Team;
