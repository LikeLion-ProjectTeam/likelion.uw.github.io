import React, { useState } from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

// Import all profile images
import chaewon from "../Assets/Profile/chaewon.png";
import sijun from "../Assets/Profile/sijun.png";
import youngjun from "../Assets/Profile/youngjun.png";
import taenam from "../Assets/Profile/taenam.png";
import sunghyeon from "../Assets/Profile/sunghyeon.png";
import sooa from "../Assets/Profile/sooa.png";
import seohee from "../Assets/Profile/seohee.png";
import nayun from "../Assets/Profile/nayun.png";
import hyoungwoo from "../Assets/Profile/hyoungwoo.png";
import hari from "../Assets/Profile/hari.png";
import beomseong from "../Assets/Profile/beomseong.png";
import saean from "../Assets/Profile/saean.png";

const Team = () => {
  const [activeTeam, setActiveTeam] = useState(null);
  
  const teamMembers = {
    operation: {
      title: "ADMINISTRATOR",
      roles: {
        President: [
          {
            name: "Beomseong Kim",
            major: "B.A. Data Science",
            year: "Senior",
            image: beomseong,
            linkedin: "https://www.linkedin.com/in/beomseong-kim/",
          },
        ],
        VicePresident: [
          {
            name: "Hari Kang",
            major: "B.S. Data Science",
            year: "Senior",
            image: hari,
            linkedin: "https://www.linkedin.com/in/hari-kang/",
          },
        ],
        BoardMember: [
          {
            name: "Youngjun Jeong",
            major: "B.S. Computer Science",
            year: "Junior",
            image: youngjun,
            linkedin: "https://www.linkedin.com/in/june121284/",
          },
          {
            name: "Sooa Cho",
            major: "B.S. Graphic Design",
            year: "Junior",
            image: sooa,
            linkedin: "https://www.linkedin.com/in/cho-sooa-4005a0330/",
          },
        ],
      },
    },
    csTeam: {
      title: "Computer Science Team",
      roles: {
        Mentor: [
          {
            name: "Taenam Kim",
            major: "B.S. Computer Science",
            year: "Senior",
            image: taenam,
            linkedin: "https://www.linkedin.com/in/taenamkim/",
          },
        ],
        FrontEnd: [
          {
            name: "Chaewon Yoo",
            major: "B.S. Computer Science",
            year: "Junior",
            image: chaewon,
            linkedin: "https://www.linkedin.com/in/chaewon-rachel-yoo-26765a32b/",
          },
          {
            name: "Seohee Choy",
            major: "B.S. Computer Science & Data Science",
            year: "Junior",
            image: seohee,
            linkedin: "https://www.linkedin.com/in/seohee-choy/",
          },
          {
            name: "Sunghyeon Baek",
            major: "B.S. Computer Science",
            year: "Junior",
            image: sunghyeon,
            linkedin: "https://www.linkedin.com/in/sean-baek?trk=contact-info",
          },
        ],
        BackEnd: [
          {
            name: "Sijun Lee",
            major: "B.S. Computer Science",
            year: "Sophomore",
            image: sijun,
            linkedin: "https://www.linkedin.com/in/sijun-lee-8321a920a/",
          },
          {
            name: "Youngjun Jeong",
            major: "B.S. Computer Science",
            year: "Junior",
            image: youngjun,
            linkedin: "https://www.linkedin.com/in/june121284/",
          },
        ],
        FullStack: [
          {
            name: "Nayun Kang",
            major: "B.S. Computer Science",
            year: "Senior",
            image: nayun,
            linkedin: "https://www.linkedin.com/in/nayun-kang-a7a535317/",
          },
        ],
        Designer: [
          {
            name: "Sooa Cho",
            major: "B.S. Graphic Design",
            year: "Junior",
            image: sooa,
            linkedin: "https://www.linkedin.com/in/cho-sooa-4005a0330/",
          },
        ],
      },
    },
    dsTeam: {
      title: "Data Science Team",
      members: [
        {
          name: "Beomseong Kim",
          major: "B.A. Data Science",
          year: "Senior",
          image: beomseong,
          linkedin: "https://www.linkedin.com/in/beomseong-kim/",
        },
        {
          name: "Ikjoo Oh",
          major: "B.S. Data Science",
          year: "Junior",
        },
        {
          name: "Yunji Lee",
          major: "B.S. Data Science",
          year: "Junior",
        },
      ],
    },
    lecTeam: {
      title: "Lecture Team",
      members: [
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
          image: saean,
          linkedin: "https://www.linkedin.com/in/saean-shin-ba93802b3/",
        },
      ],
    },
  };
  
  const handleTeamClick = (team) => {
    setActiveTeam(activeTeam === team ? null : team);
  };
  
  const getTeamTitle = (team) => {
    switch(team) {
      case "operation": return "Administrator";
      case "csTeam": return "Computer Science Team";
      case "dsTeam": return "Data Science Team";
      case "lecTeam": return "Lecture Team";
      default: return "";
    }
  };
  
  return (
    <div className="team">
    <h1>Meet Our Team</h1>
    
    <div className="team-horizontal-cards">
    {["operation", "csTeam", "dsTeam", "lecTeam"].map((team) => (
      <div
      key={team}
      className={`team-card ${activeTeam === team ? "active" : ""}`}
      onClick={() => handleTeamClick(team)}
      >
      <h2>{getTeamTitle(team)}</h2>
      </div>
    ))}
    </div>
    
    {activeTeam && teamMembers[activeTeam] && (
      <div className="team-tree-chart">
      {/* 하나의 Team Card */}
      <div className="team-card-root"> </div>
      {/* 멤버 카드 연결 */}
      <div className="role-container">
      {teamMembers[activeTeam].roles
        ? Object.entries(teamMembers[activeTeam].roles).map(([role, members]) => (
          <div key={role} className="team-role-horizontal">
            <div className="role-title">{role}</div>
            <div className="role-members-horizontal">
              {members.map((member, index) => (
                <div key={index} className="team-profile-card">
                  {member.image ? (
                    <img
                    src={member.image}
                    alt={member.name}
                    className="profile-photo"
                    />
                  ) : (
                    <div className="placeholder-photo">No Image</div>
                  )}
                  <h4>{member.name}</h4>
                  <p>
                    {member.major} ({member.year})
                  </p>
                  {member.linkedin && (
                    <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    >
                    <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
        : teamMembers[activeTeam].members.map((member, index) => (
          <div key={index} className="team-profile-card">
          {member.image ? (
            <img
            src={member.image}
            alt={member.name}
            className="profile-photo"
            />
          ) : (
            <div className="placeholder-photo">No Image</div>
          )}
          <h4>{member.name}</h4>
          <p>
          {member.major} ({member.year})
          </p>
          {member.linkedin && (
            <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
            >
            <FaLinkedin size={20} />
            </a>
          )}
          </div>
        ))}
        </div>
        </div>
      )}
      
      </div>
    );
  };
  
  export default Team;