import React from 'react'
import './ideacard.css';

const IdeaCard = () => {
  return (
         <div className="project-scope">
            <div className="heading-2">
              <span>
                <h1>Idea</h1>
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
            <div className="mockup-card-grid">
              <div className="mockup-btns">
                <i className="fa-regular fa-circle-xmark"></i>
                <i className="fa-solid fa-circle-minus"></i>
                <i className="fa-solid fa-table-columns"></i>
              </div>
              <div className="mockup-sidebar">
                <div className="sidebar-icon">
                  <i className="fa-regular fa-bell"></i>
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="sidebar-nav">
                  <div className="navbar-icons">
                    <div className="navbar-icon">
                      <i className="fa-regular fa-user"></i>
                      <span>User</span>
                    </div>
                    <div className="navbar-icon">
                      <i className="fa-solid fa-bullseye"></i>
                      <span>Goals</span>
                    </div>
                    <div className="navbar-icon">
                      <i className="fa-solid fa-wrench"></i>
                      <span>Tools</span>
                    </div>
                    <div className="navbar-icon">
                      <i className="fa-solid fa-gear"></i>
                      <span>Setting</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-list">
                <div className="mockup-list-row-1">
                  <i className="fa-regular fa-user"></i>
                  <span>Salman</span>
                </div>
                <div className="mockup-list-row-2">
                  <i className="fa-regular fa-user"></i>
                  <span>Jaffory</span>
                </div>
                <div className="mockup-list-row-3">
                  <i className="fa-regular fa-user"></i>
                  <span>Kamran</span>
                </div>
                <div className="mockup-list-row-4">
                  <i className="fa-regular fa-user"></i>
                  <span>Plenty Others</span>
                </div>
              </div>
            </div>
          </div> 
  )
}

export default IdeaCard