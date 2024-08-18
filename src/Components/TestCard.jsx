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
          <div className="test-snippet-card-body">
            <div className="snippet-one">
              <div className="code-header">
                <div className="code-header-btn"></div>
                <div className="code-header-btn"></div>
                <div className="code-header-btn"></div>
              </div>
              <div className="code-body-1">
                <pre>
                  <code>
                    <div className="code-line line-1">
                      <div className="code-header-btn"></div>
                      <span>user-site:~/ git push origin master</span>
                    </div>
                    <div className="code-line">
                      <span>Enumerating objects: 29, done.</span>
                    </div>
                    <div className="code-line">
                      <span>Counting objects: 100% (29/29), done.</span>
                    </div>
                    <div className="code-line">
                      <span>Delta compression using up to 4 threads</span>
                    </div>
                    <div className="code-line">
                      <span>Compressing objects: 100% (19/19), done.</span>
                    </div>
                    <div className="code-line">
                      <span>
                        Writing objects: 100% (19/19), 5.35 KiB | 1.78 MiB/s,
                        done.
                      </span>
                    </div>
                    <div className="code-line">
                      <span>
                        Total 19 (delta 12), reused 0 (delta 0), pack-reused 0
                      </span>
                    </div>
                    <div className="code-line">
                      <span>
                        remote: Resolving deltas: 100% (12/12), completed with 7
                        local object
                      </span>
                    </div>
                    <div className="code-line">
                      <span>aac2ee1..0d442c2 master - master</span>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
            <div className="snippet-two">
              <div className="snippet-two-header">
                <div className="snippet-two-btns">
                  <div className="code-header-btn window-red-btn"></div>
                  <div className="code-header-btn window-blue-btn"></div>
                  <div className="code-header-btn  window-green-btn"></div>
                </div>
                <div className="snippet-two-header-desc">site.com</div>
              </div>
              <div className="snippet-two-body">
                <div className="snippet-two-body-card">
                <h1>What you will build?</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
