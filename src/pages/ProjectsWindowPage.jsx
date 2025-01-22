import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/ProjectsPage.css";

const ProjectsWindowPage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const projects = [
    {
      id: 1,
      src: "../src/images/135402.png",
      alt: "Project 3",
      text: "New Project 3",
      link: "https://github.com/Clarky13F/new-project-3",
    },
    {
      id: 2,
      src: "../src/images/Screenshot109.png",
      alt: "Eerie Papers",
      text: "Eerie Papers",
      link: "https://github.com/3lectricfly69/EeriePapers",
    },
    {
      id: 3,
      src: "../src/images/repo-screenshot.png",
      alt: "Local List",
      text: "Local List",
      link: "https://github.com/RPMcQuigg/Vandy-Project-01",
    },
    // Add more projects here
  ];

  const handleMouseEnter = (id) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="projectsPage">
      <Header />

      <div className="projectsGrid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="projectItem"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="clickableLink"
            >
              <img
                className="projectImage"
                src={project.src}
                alt={project.alt}
              />
            </a>
            {hoveredImage === project.id && (
              <div className="hoverText">{project.text}</div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsWindowPage;
