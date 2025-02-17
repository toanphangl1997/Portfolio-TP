import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Proficiency from "./Proficiency";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skill />

      {/* Education Section */}
      <Education />

      {/* Proficiency Section  */}
      <Proficiency />

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Portfolio;
