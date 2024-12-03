import React from "react";
import { Link } from "react-router-dom";
import "./Archive_n_Project.css";

import Image1 from "../Images/2024ProjectTeam.jpg";
import Hackathon_Placeholder from "../Images/Hackathon_Placeholder.png";
import Ideathon from "../Images/ideathon.png";

const Archive_n_Project = () => {
  return (
    <div className="archive">
      <h1>Archive & Projects</h1>
      <p>Some projects and competition archives by our members</p>
      <p>To see more detailed archives and other projects / competitions, click below:</p>
      
      {/* Sample images */}
      <div className="archive-images">
        <figure className="archive-item">
          <img src={Image1} alt="Our 2024 Project Team" className="archive-image" />
          <figcaption>Our 2024 Project Team</figcaption>
        </figure>
        <figure className="archive-item">
          <img src={Hackathon_Placeholder} alt="Our annual Hackathons" className="archive-image" />
          <figcaption>Our Annual Hackathons</figcaption>
        </figure>
        <figure className="archive-item">
          <img src={Ideathon} alt="Our annual ideathon projects" className="archive-image" />
          <figcaption>Our Annual Ideathon Projects</figcaption>
        </figure>
      </div>
      
      {/* Link to archive & projects */}
      <Link to="/archive-projects" className="archivelink">
        Archives & Projects
      </Link>
    </div>
  );
};

export default Archive_n_Project;
