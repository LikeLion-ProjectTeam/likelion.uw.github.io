import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import Story from "./Story/Story";
import Archive_n_Project from "./Archive_n_Project/Archive_n_Project";
import ArchiveProjectsPage from "./Archive_n_Project/ArchiveProjectsPage";
import Team from "./Team/Team";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header outside of Routes to display on all pages */}
        <Header />
        <Routes>
          {/* Default Home Page */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          {/* Archive Projects Page */}
          <Route path="/archive-projects" element={<ArchiveProjectsPage />} />
          {/* Redirect unknown paths to Home Page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
