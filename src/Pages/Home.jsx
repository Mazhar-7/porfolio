import React from "react";
import SideBar from "../Components/SideBar";

import  Projects  from "./Projects";
import "./home.css";

const Home = () => {
  return (
    <>
      <SideBar />
      <section id="home">
        <div className="home-container">
          <div className="blink-line"></div>
          <div className="blink-line"></div>
          <div className="blink-line"></div>
          <div className="blink-line"></div>
          <div className="home-intro">
            <h1>Assalam o alaikum</h1>
            <h3>Front End Developer</h3>
          </div>
        </div>
      </section>
      {/* <Steps /> */}
      <Projects />
    </>
  );
};

export default Home;
