import React from "react";

function Footer() {
  return (
    <>
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                <a
                  className="navbar-brand"
                  href="/ 3
                        qs da]?"
                >
                  <span>YatiNidhi</span>
                </a>
                <p>
                  Libero minus ab reprehenderit atque cum praesentium placeat
                  quos est enim facere cumque. Numquam pariatur alias
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Link</h5>
                <ul>
                  <li>
                    <a href="">Dolor sit amet, consectetur</a>
                  </li>
                  <li>
                    <a href="">Magna aliqua. Ut enim ad</a>
                  </li>
                  <li>
                    <a href="">Minim veniam placeat</a>
                  </li>
                  <li>
                    <a href="">Quisdotempor incididunt</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Contact Us</h5>
              </div>
              <div className="info_contact">
                <a href="" className="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Lorem ipsum dolor sit amet,</span>
                </a>
                <a href="" className="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call : +01 1234567890</span>
                </a>
                <a href="" className="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>yatinidhi@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
                <h5>Newsletter</h5>
                <form action="#">
                  <input type="email" placeholder="Enter your email"></input>
                  <button>Subscribe</button>
                </form>
                <div className="social_box">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="container-fluid footer_section">
          <p>
            &copy;{" "}
            <span id="currentYear">
              {" "}
              All Rights Reserved by Yatinidhi Constructions Pvt Ltd{" "}
            </span>
          </p>
        </footer>

        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/custom.js"></script>
      </section>
    </>
  );
}

export default Footer;
