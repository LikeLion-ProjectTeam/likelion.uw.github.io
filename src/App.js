import React from "react";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import Story from "./OurStory/OurStory";
import Archive_n_Project from "./Archive_n_Project/Archive_n_Project";
import Team from "./Team/Team";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="archive">
        <Archive_n_Project />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
