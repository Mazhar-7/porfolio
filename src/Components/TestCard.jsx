import React from "react";
import "./testcard.css";

const TestCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="test-snippet-card">
          <div className="test-snippet-card-heading">
            <div className="heading-2">
              <span>
                <h1>Build</h1>
              </span>
            </div>
            <div className="decription">
              <div className="desc-p">
                <span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis magnam molestias illum ad aliquam repudiandae
                  </p>
                </span>
              </div>
            </div>
          </div>
      <div className="snippet-one">
      <div className="code-header">
            <div className="code-header-btn"></div>
            <div className="code-header-btn"></div>
            <div className="code-header-btn"></div>

          </div>
          <div className="code-body">
            <pre>
              <code>
              <div className="code-header-btn"> </div>
              <span>user-site:~/ git push</span>
              </code>
            </pre>
          </div>
      </div>
      <div className="snippet-two">
        <div className="snippet-two-btns"> Buttons </div>
        <div className="snippet-two-body"> BOdy</div>
      </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
