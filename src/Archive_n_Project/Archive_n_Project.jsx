import React from "react";
import { Link } from "react-router-dom";
import "./Archive_n_Project.css";

import Image1 from "../Images/2024ProjectTeam.png";
import Hackathon_Placeholder from "../Images/Hackathon_Placeholder.png";
import ideathon from "../Images/ideathon.png";

const Archive_n_Project = () => {
  return (
    <div className="archive">
      <h1>Archive & Projects</h1>
      <p>Some projects and competition archives by our members</p>
      <p>To see more detailed archives and other projects / competitions, click below</p>
      <div className="archive-images">
        <img
          src= {Image1}
          alt="Our 2024 Project Team"
          className="archive-image"
        />
        <img
          src= {Hackathon_Placeholder}
          alt="Our annual Hackathons"
          className="archive-image"
        />
        <img
          src= {ideathon}
          alt="Our annual ideathon projects"
          className="archive-image"
        />
      </div>
      <Link to="/archive-projects" className="archivelink">
        Archives & Projects
      </Link>
    </div>
  );
};

export default Archive_n_Project;