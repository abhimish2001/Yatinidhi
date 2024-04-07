import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>About Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box b1">
                <div className="img-box">
                  <img src="images/s1.jpg" alt=""></img>
                </div>
                <div className="detail-box">
                  <h5>STEEL PIPELINE (CGD & HYDROCARBON PROJECTS)</h5>
                  <p>
                    Elevate your CGD (City Gas Distribution) and hydrocarbon
                    projects with our expertise in steel pipeline installation.
                    Our meticulous craftsmanship ensures reliable and efficient
                    transportation of natural gas and hydrocarbons, powering
                    sustainable energy solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b2">
                <div className="img-box">
                  <img src="images/s2.jpg" alt=""></img>
                </div>
                <div className="detail-box">
                  <h5>TESTING AND COMMISSIONING (HYDRO & PNEUMATIC TESTING)</h5>
                  <p>
                    Unlock the full potential of your hydrocarbon projects with
                    our specialized testing and commissioning services. From
                    hydrostatic to pneumatic testing, our expert team ensures
                    rigorous quality checks for seamless operation and
                    compliance, guaranteeing the integrity and safety of your
                    pipelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b3">
                <div className="img-box">
                  <img src="images/s3.jpg" alt=""></img>
                </div>
                <div className="detail-box">
                  <h5>MDPE, HDPE & LMC (CGD & WATER PROJECTS)</h5>
                  <p>
                    Maximize the efficiency of your CGD (City Gas Distribution)
                    and water projects with our expertise in MDPE, HDPE, and LMC
                    installations. Our meticulous craftsmanship ensures the
                    seamless deployment of durable piping solutions, delivering
                    reliable distribution networks for gas and water, essential
                    for sustainable urban development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr class="rounded"></hr>
          <div className="row">
            <div className="col-lg-4">
              <div className="box b1">
                <div className="img-box">
                  <img src="images/s1.jpg" alt=""></img>
                </div>
                <div className="detail-box">
                  <h5>HIGHWAY PROJECTS</h5>
                  <p>
                    Revolutionize your highway projects with our comprehensive
                    services. From initial planning to meticulous execution, we
                    specialize in delivering efficient and sustainable solutions
                    tailored to your project needs. Trust our expertise to
                    enhance safety, minimize disruptions, and optimize the
                    performance of your highway infrastructure, driving progress
                    for communities and industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b2">
                <div className="img-box">
                  <img src="images/s2.jpg" alt=""></img>
                </div>
                <div className="detail-box">
                  <h5>METRO PROJECTS</h5>
                  <p>
                    Transform your metro projects with our unparalleled
                    expertise. From meticulous planning to flawless execution,
                    we specialize in delivering cutting-edge solutions tailored
                    to the unique demands of urban transportation. Count on us
                    to enhance efficiency, safety, and sustainability, ensuring
                    seamless connectivity and fostering the growth of modern
                    cities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b3">
                <div className="img-box">
                  <img src="images/s3.jpg" alt=""></img>
                </div>
                <div className="detail-box">
                  <h5>WATER PROJECTS</h5>
                  <p>
                    Empower your water projects with our comprehensive
                    solutions. From reservoir construction to distribution
                    network installation, we specialize in delivering
                    sustainable water infrastructure tailored to your needs.
                    With a focus on efficiency and reliability, our expertise
                    ensures access to clean water, promoting health and
                    prosperity for communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img_container">
                <div className="img-box">
                  <img src="images/a1.jpg" className="about_img1" alt="" />
                  <img src="images/a2.jpg" className="about_img2" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="detail-box">
                <div className="heading_container mt-0">
                  <h2>Our Mission</h2>
                </div>
                <p>
                  Our Mission is to continuously redefine quality and
                  performance, ensure seamless integration of all project
                  aspects, abide at all times by environmental safety measure
                  and create customer and employee trust & satisfaction in order
                  to scale new heights and drive growth. We aim to expand our
                  activities around the globe as we step up firmly in the
                  international arena.
                </p>

                <div className="heading_container mt-5">
                  <h2>Our Vision</h2>
                  <p>
                    Our vision is to set ineffaceable benchmarks in high-quality
                    services, financial growth, operational excellence and
                    customer retention through unflinching trust. To be one of
                    the most trusted and respected companies in world making
                    major contribution in Indian economic growth and emerge as
                    the largest equal opportunity employer. Yatinidhi
                    Constructions is dedicated towards implementation of highest
                    level of quality, safety and environmental protection
                    standards which would infuse and stimulate social
                    responsibility and ensure a better life for all associated
                    with us.
                  </p>
                </div>

                <div className="btn-box"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
