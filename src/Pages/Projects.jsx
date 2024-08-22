import React, { useState, useEffect } from "react";
import projectsData from "../assets/data";
import "./projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
    const selectedProjectData = projectsData.find(
      (project) => project.id === currentIndex + 1
    );
    setSelectedProject(selectedProjectData);
  }, [currentIndex, projectsData]);

  const handleProjectChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  return (
    <>
      <div className="project-container" key={selectedProject.id}>
        <div className="project-header">
          <div className="project-logo">
            <h1 className="project-logo-glitch-1">M</h1>
            <h1 className="project-logo-glitch-2">M</h1>
            <h1 className="project-logo-glitch-3">M</h1>
            <h1>M</h1>
          </div>
          <ul className="list-items">
            <li> {selectedProject.title}</li>
            <li> {selectedProject.technology} </li>
            <li>Live</li>
          </ul>

          <ul className="list-items">
            <li>{selectedProject.gtihub}</li>
            <li>{selectedProject.email}</li>
          </ul>
        </div>

        <div className="project-body">
          <video
            src={selectedProject.videoUrl}
            typeof="mp4"
            width="320"
            height="240"
          />
        </div>
        <div className="project-footer">
          <ul className="list-items">
            <li>{selectedProject.date}</li>
          </ul>
          <div className="pagination">
            <ul className="list-items">
              <li>{selectedProject.id}</li>{" "}
            </ul>
            <div className="pagination-btn">
              <i
                className="fa-solid fa-arrow-right-long"
                onClick={handleProjectChange}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
