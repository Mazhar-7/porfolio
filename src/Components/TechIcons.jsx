import React from "react";
import "./techicons.css";

const TechIcons = () => {
  return (
    <div className="container-techicons">
        <div className="techicons-head">
        <div className="heading-2">
        <span>
          <h1>Integrations</h1>
        </span>
      </div>
      <div className="decription">
        <div className="desc-p">
          <span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              magnam molestias illum ad aliquam repudiandae
            </p>
          </span>
        </div>
      </div>
        </div>

      <div className="techicons-wrapper">
        <div className="icons">
          <div className="react">
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="github">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="javascript">
            <i className="fa-brands fa-square-js"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechIcons;
