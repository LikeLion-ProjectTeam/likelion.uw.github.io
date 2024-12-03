import React from "react";
import "./Story.css"; 
import { FaUniversity, FaRocket, FaHandshake } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const OurStory = () => {
    return (
        <div className="our-story">
            <div className="our-story-content">
                <h1 className="our-story-title">Our Story</h1>
                <Fade cascade damping={0.2}>
                    <div className="story-icons">
                        <div className="icon-box">
                            <FaUniversity className="icon" />
                            <p>Prestigious Universities</p>
                        </div>
                        <div className="icon-box">
                            <FaRocket className="icon" />
                            <p>Nationwide Expansion</p>
                        </div>
                        <div className="icon-box">
                            <FaHandshake className="icon" />
                            <p>Collaborative Partnerships</p>
                        </div>
                    </div>
                </Fade>
                <div className="story-text">
                    <Fade direction="up" delay={300}>
                        <p>
                            In 2017, LikeLion US collaborated with students from UCLA
                            and UC Berkeley to introduce the program. Over the following
                            years, we expanded nationwide, establishing chapters at some
                            of the most prestigious universities.
                        </p>
                        <p>
                            After years of beta testing at various institutions such as
                            Stanford, UCLA, UC Berkeley, NYU, the University of
                            Pennsylvania, Harvard, MIT, and the University of Washington,
                            LikeLion officially launched its first cohort in December
                            2021 in partnership with UC Berkeley students.
                        </p>
                        <p>
                            We believe that by lowering the financial and knowledge
                            barriers to entering the tech industry, we can bring
                            significant changes to the educational landscape in the United
                            States.
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Story;
