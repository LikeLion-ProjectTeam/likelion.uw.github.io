import React, { useState } from "react";
import Slider from "react-slick";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import "./Gallery.css";

import dotty from "../Assets/Gallery/dotty.jpg";
import kickoff from "../Assets/Gallery/kickoff.jpg";
import likelionus from "../Assets/Gallery/LikeLionUS.jpeg";
import logo from "../Assets/Gallery/logo.jpeg";
import lion from "../Assets/Gallery/lion.jpeg";

const images = [dotty, kickoff, likelionus, logo, lion];

const Gallery = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "slick-dots",
    };

    const [isPressed, setIsPressed] = useState(false);

    return (
        <div className="gallery">
            <div className="gallery-content">
                <Fade cascade fraction={0.2} damping={0.2} delay={100}>
                    <h1>Gallery</h1>

                    <div>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`Gallery item ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <Link
                        to="/Gallery_List"
                        className={`gallery-button ${
                            isPressed ? "pressed" : ""
                        }`}
                        onMouseDown={() => setIsPressed(true)}
                        onMouseUp={() => setIsPressed(false)}
                        onMouseLeave={() => setIsPressed(false)} // 마우스가 버튼 밖으로 나갈 경우 초기화
                    >
                        <span className="gallery-word">See more</span>
                    </Link>
                </Fade>
            </div>
        </div>
    );
};

export default Gallery;
