import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header class="header_section">
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>YatiNidhi</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""></span>
            </button>

            <div
              class="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/aboutus" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/blogpage" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/testimonial" className="nav-link">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
