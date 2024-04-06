import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header class="header_section">
        <div class="hero_bg_box">
          <img src="/images/architect.jpg" alt=""></img>
        </div>
        <div class="header_bottom">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container sticky-top">
              <a class="navbar-brand" href="index.html">
                <span>Yatinidhi</span>
              </a>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <Link to="/home" class="nav-link">
                      <strong>Home</strong>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/aboutus" class="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/blogpage" class="nav-link">
                      Blog
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/testimonial" class="nav-link">
                      Testimonial
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
