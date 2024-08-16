import React from "react";
import SideBar from "../Components/SideBar";
import Steps from "./Steps";
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloremque tempore commodi aliquam, pariatur officia fuga impedit
              cupiditate maxime expedita vel nihil quasi eaque laudantium. Sint,
              ad iusto. Aut, odio?
            </p>
          </div>
        </div>
      </section>
      <Steps />
    </>
  );
};

export default Home;
