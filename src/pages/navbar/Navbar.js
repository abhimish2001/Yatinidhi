import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

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
                        data-wow-delay="0.3s"
                      >
                        <h1>
                          Yatinidhi <br />
                        </h1>
                        <h3>
                          <span className="text-warning">
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
