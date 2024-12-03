import React from "react";
import "./AboutUs.css";
import { ReactTyped } from "react-typed";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <h1>About Us</h1>
                <div className="typed-container">
                    <h2>
                        <span className="highlight">Possibility</span> to{" "}
                        <ReactTyped
                            strings={["Reality"]}
                            typeSpeed={100}
                            backSpeed={80}
                            backDelay={5000}
                            startDelay={500}
                            loop
                            className="typed-text"
                        />
                    </h2>
                </div>
                <div className="description">
                    <p className="intro">Introducing LikeLion UW-Madison</p>
                    <h2 className="slogan">Create • Collaborate • Conquer</h2>
                    <p className="main-text">
                        LikeLion UW-Madison is a supportive community dedicated
                        to empowering individuals by providing the resources,
                        mentorship, and collaborative environment needed to turn
                        your unique ideas into impactful realities. We believe
                        in nurturing creativity, fostering teamwork, and giving
                        you the tools to transform your vision into a successful
                        project.
                    </p>
                    <p className="end-text">
                        Let's bring your ideas to life, together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
