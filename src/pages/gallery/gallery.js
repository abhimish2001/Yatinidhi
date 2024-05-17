import React, { useEffect } from "react";
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "./gallery.css";

function Gallery() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
   
    <div className="container">

            <div className="heading_container heading_center">
            <h2 className=" wow animate__animated animate__fadeIn mb-5 mt-4 " >Gallery</h2>
          </div>
      <div className="row no-gutters mt-4 mb-5">
      <div className="col-md-4  wow animate__animated animate__fadeInBottomLeft ps-0 pe-0">
          <img src="images\highwayconstruction.jpg" alt="Highway construction" className="img-fluid" />
          
          <img src="images\steelpipelining.jpg" alt="Steelpipelining" className="img-fluid" />
       
        </div>
        <div className="col-md-4  wow animate__animated animate__fadeInUp  ps-0 pe-0 ">
          <img src="images\hdpe img.jpeg" alt="Hdpepipelining"    className="img-fluid" />
          
          
       
        </div>
        <div className="col-md-4  wow animate__animated animate__fadeInBottomRight  ps-0 pe-0">
          <img src="images\b2.jpg" alt="House Renovation" className="img-fluid" />
          
          <img src="images/b1.jpg" alt="House Renovation" className="img-fluid" />
       
        </div>
      </div>
    </div>
  );
}

export default Gallery;

