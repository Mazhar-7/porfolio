import React, { useState, useEffect ,useRef,useLayoutEffect} from "react";
import projectsData from "../assets/data";
import "./projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState({});
  const [scrollHeight, setScrollHeight] = useState(0);
  const myElement = useRef(null);

// getting data of specific project on click
  useEffect(() => {
    const selectedProjectData = projectsData.find(
      (project) => project.id === currentIndex + 1
    );
    setSelectedProject(selectedProjectData);
  }, [currentIndex, projectsData]);

  //  Handle Scroll on window to get the position of scroll
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  //  Animate conditionally,   Debouncing FUnction For 
  // const debounce = (func, wait) => {
  //   let timeout;
  //   return function(...args) {
  //     const context = this;
  //     const later = function() {
  //       timeout = null;
  //       func.apply(context, args);
  //     };
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // };


  // const debouncedSetCurrentIndex = debounce(setCurrentIndex, 10000);

  useLayoutEffect(() => {
    console.log(`to check if it is still exist ${myElement.current} this scroll height ${scrollHeight}`); // Check if this is null
    if (scrollHeight === 530  && myElement.current) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);

    } 
    if(scrollHeight === 600 && myElement.current){
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
    if(scrollHeight === 700 && myElement.current){
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
  
  }, [scrollHeight]);

  // handling dynamically update data
  const handleProjectChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  return (
    <>
        <div className="project-container active" key={selectedProject.id}>
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
              <li><a href={selectedProject.live} target="_blank" >See Live</a></li>
            </ul>

            <ul className="list-items">
              <li><a href={selectedProject.gtihub} target="_blank">Github</a></li>
              <li>{selectedProject.email}</li>
            </ul>
          </div>

          <div className="project-body" ref={myElement}>
            <div className="project-body-card">
              <img src={selectedProject.imgUrl} alt=" This is Mockup website" width={672} height={336}/>
            </div>
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
