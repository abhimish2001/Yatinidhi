import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "./Nav.css";

function Nav() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse

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
                onClick={() => setIsOpen(!isOpen)} // Toggle collapse state
                aria-controls="navbarSupportedContent"
                aria-expanded={isOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} // Add 'show' class based on state
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/contactus"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Contact Us
                    </NavLink>
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
