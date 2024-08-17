import React from "react";
import './sidebar.css'

const SideBar = () => {
  return (
    <div>
      <section>
        <article>
          <nav className="nav-container">
            <div><span className="logo">M</span></div>
            <div className="navbar">
              <ul className="links">
                <li className="link"> <span><a href="#">Home</a></span>   </li>
                <li className="link"><span><a href="#">About</a></span>  </li>
                <li className="link" ><span><a href="#">Project</a></span>  </li>
              </ul>
            </div>
          </nav>
        </article>
      </section>
    </div>
  );
};

export default SideBar;
