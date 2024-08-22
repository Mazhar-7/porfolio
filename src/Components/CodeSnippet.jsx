import React from "react";
import "./codesnippet.css";

const CodeSnippet = () => {
  return (
    <>
      <div className="card-container">
        <div className="code-snippet-card">
          <div className="code-snippet-card-header">
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
          <div className="code-snippet-card-body">
            <div className="code-header">
              <i className="fa-brands fa-react"></i>
              <h4>app/users/page.jsx</h4>
            </div>
            <div className="code-body">
              <pre>
                <code>
                  {/* line 1  */}
                  <div className="line"> 
                    <span className="red">{`export`}</span>
                    <span>{` `}</span>
                    <span className="red">{`default`}</span>
                    <span>{` `}</span>
                    <span className="red">{`async`}</span>
                    <span>{` `}</span>
                    <span className="red">{`function`}</span>
                    <span>{` `}</span>
                    <span className="blue">{`Page`}</span>
                    <span className="white">{`( )`}</span>
                    <span>{` `}</span>
                    <span className="white">{`{`}</span>
                    <span>{` `}</span>
                  </div>
                  {/* line 2 */}
                  <div className="line">
                    <span className="red">{`return`}</span>
                    <span>{` `}</span>
                    <span className="white">{`(`}</span>
                  </div>
                  {/* line 3 */}

                  <div className="line">
                    <span className="blue">{`<>`}</span>
                    <span>{` `}</span>
                  </div>

                  <div className="line">
                    <span className="blue">{`<h1>`}</span>
                    <span className="white">{`Users`}</span>
                    <span className="blue">{`</h1>`}</span>
                  </div>

                  <div className="line">
                    {" "}
                    <span className="blue">{`<ul>`}</span>
                    <span>{` `}</span>
                  </div>

                  <div className="line">
                    <span className="white">{`{`}</span>
                    <span className="white">{`data`}</span>
                    <span>{`.`}</span>
                    <span className="blue">{`map`}</span>
                    <span className="white">{`(`}</span>
                    <span className="white">{`user`}</span>
                    <span>{` `}</span>
                    <span className="white">{`= > (`}</span>
                    <span>{` `}</span>
                  </div>

                  <div className="line">
                    <span className="blue">{`<li`}</span>
                    <span>{` `}</span>
                    <span className="green">{`key`}</span>
                    <span className="blue">{`= {`}</span>
                    <span className="white">{`user.id`}</span>
                    <span className="blue">{`}`}</span>
                    <span className="blue">{`>`}</span>
                    <span>{` `}</span>
                    <span className="white">{`user.name `}</span>
                    <span>{` `}</span>
                    <span className="blue">{`</li>`}</span>
                    <span>{` `}</span>
                  </div>
                  <div className="line">
                    {" "}
                    <span>{`)}`}</span>
                    <span>{` `}</span>
                  </div>
                  <div className="line">
                    <span className="blue">{`</ul>`}</span>
                  </div>
                  <div className="line">
                    <span className="blue">{`</>`}</span>
                  </div>
                  <div className="line">
                    <span>{`);`}</span>
                  </div>
                  <div className="line">
                    <span>{`}`}</span>
                  </div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeSnippet;
