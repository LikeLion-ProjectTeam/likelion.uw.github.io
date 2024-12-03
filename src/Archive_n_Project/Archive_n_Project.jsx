import React from "react";
import "./Archive_n_Project.css";

const Archive_n_Project = () => {
  return (
    <div className="archive">
      <h1>Archive & Projects</h1>
      <p>Some projects and competition archives by our members</p>
      <p>To see more detailed archives and other projects / competitions, click below</p>
      <Link to="/archive-projects" className="archivelink">
        Archives & Projects 
      </Link>
    </div>
  );
};

export default Archive_n_Project;
