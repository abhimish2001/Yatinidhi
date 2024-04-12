import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "./Nav.css";

function Nav() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <header className="headerSection">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <img src="/logo.png" className="navbar-brand" alt="logo" />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>

              <div
                className="collapse navbar-collapse ml-auto"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/aboutus" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contactus" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
