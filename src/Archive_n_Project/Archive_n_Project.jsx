import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Archive_n_Project.css"; 


import Image1 from "../Images/2024ProjectTeam.jpg";
import Hackathon_Placeholder from "../Images/Hackathon_Placeholder.png";
import Ideathon from "../Images/ideathon_thumnail.jpeg";
import CS_Team from "../Images/2024ProjectTeam.jpg";
import DS_Team from "../Images/ideathon.png";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev-arrow"
    onClick={onClick}
    style={{ left: "-50px" }}
  >
    &#9664; {/* Left arrow symbol */}
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-next-arrow"
    onClick={onClick}
    style={{ right: "-50px" }}
  >
    &#9654; {/* Right arrow symbol */}
  </div>
);

const Archive_n_Project = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const projects = [
    { image: Image1, alt: "2024 Project Team", title: "2024 Project Team" },
    { image: Hackathon_Placeholder, alt: "Hackathon 2025", title: "Hackathon 2025" },
    { image: Ideathon, alt: "Ideathon 2024", title: "Ideathon 2024" },
    { image: CS_Team, alt: "CS Team", title: "CS Team" },
    { image: DS_Team, alt: "DS Team", title: "DS Team" },
  ];

  return (
    <div className="archive">
      <h1>Archive & Projects</h1>
      <p>Projects and competition archives of our members</p>
      
      {/* Slider Section */}
      <div className="archive-slider-container">
        <Slider {...sliderSettings} className="archive-slider">
          {projects.map((project, index) => (
            <div key={index} className="slider-item">
              <img src={project.image} alt={project.alt} className="slider-image" />
              <p className="slider-caption">{project.title}</p>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Link to archive & projects */}
      <Link to="/archive-projects" className="archivelink">
        View All Archives & Projects
      </Link>
    </div>
  );
};

export default Archive_n_Project;
