import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { constant } from "../locals/constant";

export default function Navbar() {
  return (
    <>
      <div class="hero_area">
        <div class="hero_bg_box">
          <img src="images/hero-bg.jpg" alt=""></img>
        </div>

        <header class="header_section">
          <div class="header_bottom">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg custom_nav-container">
                <a class="navbar-brand" href="index.html">
                  <span>{constant.yatinidhi}</span>
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

        <section class=" slider_section ">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="detail-box">
                        <h1>
                          {constant.Build_your_visions}<br></br>
                          <span>Creating reality</span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod magna aliqua. Ut enim ad minim
                          veniam
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1">
                            {" "}
                            Read more{" "}
                          </a>
                          <a href="" class="btn-2">
                            Get A Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="detail-box">
                        <h1>
                        {constant.Build_your_visions}<br></br>
                          <span>Creating reality</span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod magna aliqua. Ut enim ad minim
                          veniam
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1">
                            {" "}
                            Read more{" "}
                          </a>
                          <a href="" class="btn-2">
                            Get A Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="detail-box">
                        <h1>
                        {constant.Build_your_visions}<br></br>
                          <span>Creating reality</span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod magna aliqua. Ut enim ad minim
                          veniam
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1">
                            {" "}
                            Read more{" "}
                          </a>
                          <a href="" class="btn-2">
                            Get A Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container idicator_container">
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
