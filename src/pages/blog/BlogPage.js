import React from "react";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import "./Blog.css";

function BlogPage() {
  return (
    <>
      <Nav />
      <section class="blog_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>From Our Blog</h2>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 mx-auto">
              <div class="box">
                <div class="img-box">
                  <img src="images/b1.jpg" alt=""></img>
                </div>
                <div class="detail-box">
                  <h6 class="blog_date">21 December 2020</h6>
                  <h5>Optio exercitationem vitae quas quos</h5>
                  <p>
                    Dicta nobis, aperiam fugiat ea, vitae aliquid unde quidem
                    soluta provident enim harum aliquam veniam Delian veritatis,
                    voluptates perspiciatis
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mx-auto">
              <div class="box">
                <div class="img-box">
                  <img src="images/b2.jpg" alt=""></img>
                </div>
                <div class="detail-box">
                  <h6 class="blog_date">21 December 2020</h6>
                  <h5>Quidem placeat vitae aliquid quo sunt</h5>
                  <p>
                    Dicta nobis, aperiam fugiat ea, vitae aliquid unde quidem
                    soluta provident enim harum aliquam veniam Delian veritatis,
                    voluptates perspiciatis
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mx-auto">
              <div class="box">
                <div class="img-box">
                  <img src="images/b3.jpg" alt=""></img>
                </div>
                <div class="detail-box">
                  <h6 class="blog_date">21 December 2020</h6>
                  <h5>Dolores vel maiores voluptatem enim</h5>
                  <p>
                    Dicta nobis, aperiam fugiat ea, vitae aliquid unde quidem
                    soluta provident enim harum aliquam veniam Delian veritatis,
                    voluptates perspiciatis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
