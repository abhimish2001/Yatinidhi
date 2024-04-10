import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <img src="images/sp.jpg" salt="" />
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
                      <div className="detail-box">
                        <h1>
                          Yatinidhi Construction <br />
                        </h1>
                        <h2>
                          <span className="text-warning">
                            Inception Quality Integrity
                          </span>
                        </h2>
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
