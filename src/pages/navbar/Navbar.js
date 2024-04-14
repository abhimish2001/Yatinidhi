import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse

  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <img src="images/sp.jpg" alt="" />
        </div>

        <header className="header_section">
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
                  <ul className="navbar-nav ml-auto">
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

        <section className="slider_section">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div
                        className="detail-box wow animate__animated animate__slideInRight"
                        data-wow-delay="1s"
                      >
                        <h1>
                          Yatinidhi <br />
                        </h1>
                        <h3>
                          <span
                            className="text-warning wow animate__animated animate__slideInRight"
                            data-wow-delay="1s"
                          >
                            Inception Quality Integrity
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Navbar;
