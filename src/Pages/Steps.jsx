import React from "react";
import "./steps.css";
import CodeSnippet from "../Components/CodeSnippet";
import TechIcons from "../Components/TechIcons";
import IdeaCard from "../Components/IdeaCard";
import TestCard from "../Components/TestCard";

const Steps = () => {
  return (
    <>
      <section>
        <div className="container">        
          <div className="features-grid">
            <div className="b"><IdeaCard /></div>
            <div className="c">
    
              <CodeSnippet />
            </div>
            <div className="d">
            <TestCard />
            </div>
            <div className="e">  <TechIcons /></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
