import React from "react";
import "./AboutUs.css";
import { ReactTyped } from "react-typed";

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <h2>
                Possibility to{" "}
                <ReactTyped
                    strings={["Reality"]}
                    typeSpeed={100}
                    backSpeed={80}
                    backDelay={5000}
                    startDelay={500}
                    loop
                />
            </h2>
            <p>Introducing LikeLion UW-Madison!</p>
            <p>Create, Collaborate, Conquer</p>
            <p>
                LikeLion UW-Madison is a supportive community dedicated to
                empowering individuals by providing the resources, mentorship,
                and collaborative environment needed to turn your unique ideas
                into impactful realities. We believe in nurturing creativity,
                fostering teamwork, and giving you the tools to transform your
                vision into a successful project.
            </p>
            <p>Let's bring your ideas to life, together!</p>
        </div>
    );
};

export default AboutUs;
