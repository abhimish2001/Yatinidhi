import React,{useEffect} from "react";
import WOW from 'wow.js';
import 'animate.css/animate.min.css';
import "./About.css";
import Fact from "../fact/Fact";


  

function About() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <div>
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 className=" wow animate__animated animate__fadeIn " >About Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-4  ">
              <div className="box b1 wow animate__animated animate__slideInLeft " data-wow-delay="0.3s">
                <div className="img-box">
                  <img src="images/s1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>STEEL PIPELINE (CGD & HYDROCARBON PROJECTS)</h5>
                  <p>{STEEL_PIPELINE_TEXT}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b2 wow animate__animated animate__slideInUp" data-wow-delay="0.3s">
                <div className="img-box">
                  <img src="images/s2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>TESTING AND COMMISSIONING (HYDRO & PNEUMATIC TESTING)</h5>
                  <p>{TESTING_AND_COMMISSIONING_TEXT}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b3  wow animate__animated animate__slideInRight" data-wow-delay="0.3s">
                <div className="img-box">
                  <img src="images/s3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>MDPE, HDPE & LMC (CGD & WATER PROJECTS)</h5>
                  <p>{MDPE_HDPE_LMC_TEXT}</p>
                </div>
              </div>
            </div>
          </div>
     
          <hr className="rounded" />
          <div className="row">
            <div className="col-lg-4">
              <div className="box b1  wow animate__animated animate__slideInLeft"data-wow-delay="0.3s">
                <div className="img-box">
                  <img src="images/s1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>HIGHWAY PROJECTS</h5>
                  <p>{HIGHWAY_PROJECTS_TEXT}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b2 wow animate__animated animate__slideInUp" data-wow-delay="0.3s">
                <div className="img-box">
                  <img src="images/s2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>METRO PROJECTS</h5>
                  <p>{METRO_PROJECTS_TEXT}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box b3 wow animate__animated animate__slideInRight"data-wow-delay="0.3s">
                <div className="img-box">
                  <img src="images/s3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>WATER PROJECTS</h5>
                  <p>{WATER_PROJECTS_TEXT}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fact/>

      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box wow animate__animated animate__slideInLeft" data-wow-delay="0.3s">
                  <img src="images/a1.jpg" className="about_img1" alt="" />
                  <img src="images/a2.jpg" className="about_img2" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container mt-0">
                  <h2 className=" wow animate__animated animate__slideInRight ">Our Mission</h2>
                </div>
                <p className=" wow animate__animated animate__slideInRight">{MISSION_TEXT}</p>

                <div className="heading_container mt-5">
                  <h2 className=" wow animate__animated animate__slideInRight ">Our Vision</h2>
                  <p className=" wow animate__animated animate__slideInRight">{VISION_TEXT}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </section>
        
       
    </div>
    
  );
}

export default About;

// Define constant variables for long texts
const STEEL_PIPELINE_TEXT =
  "Elevate your CGD (City Gas Distribution) and hydrocarbon projects with our expertise in steel pipeline installation. Our meticulous craftsmanship ensures reliable and efficient transportation of natural gas and hydrocarbons, powering sustainable energy solutions.";
const TESTING_AND_COMMISSIONING_TEXT =
  "Unlock the full potential of your hydrocarbon projects with our specialized testing and commissioning services. From hydrostatic to pneumatic testing, our expert team ensures rigorous quality checks for seamless operation and compliance, guaranteeing the integrity and safety of your pipelines.";
const MDPE_HDPE_LMC_TEXT =
  "Maximize the efficiency of your CGD (City Gas Distribution) and water projects with our expertise in MDPE, HDPE, and LMC installations. Our meticulous craftsmanship ensures the seamless deployment of durable piping solutions, delivering reliable distribution networks for gas and water, essential for sustainable urban development.";
const HIGHWAY_PROJECTS_TEXT =
  "Revolutionize your highway projects with our comprehensive services. From initial planning to meticulous execution, we specialize in delivering efficient and sustainable solutions tailored to your project needs. Trust our expertise to enhance safety, minimize disruptions, and optimize the performance of your highway infrastructure, driving progress for communities and industries.";
const METRO_PROJECTS_TEXT =
  "Transform your metro projects with our unparalleled expertise. From meticulous planning to flawless execution, we specialize in delivering cutting-edge solutions tailored to the unique demands of urban transportation. Count on us to enhance efficiency, safety, and sustainability, ensuring seamless connectivity and fostering the growth of modern cities.";
const WATER_PROJECTS_TEXT =
  "Empower your water projects with our comprehensive solutions. From reservoir construction to distribution network installation, we specialize in delivering sustainable water infrastructure tailored to your needs. With a focus on efficiency and reliability, our expertise ensures access to clean water, promoting health and prosperity for communities worldwide.";

// Define constant variables for mission and vision texts
const MISSION_TEXT =
  "Our Mission is to continuously redefine quality and performance, ensure seamless integration of all project aspects, abide at all times by environmental safety measure and create customer and employee trust & satisfaction in order to scale new heights and drive growth. We aim to expand our activities around the globe as we step up firmly in the international arena.";
const VISION_TEXT =
  "Our vision is to set ineffaceable benchmarks in high-quality services, financial growth, operational excellence and customer retention through unflinching trust. To be one of the most trusted and respected companies in world making major contribution in Indian economic growth and emerge as the largest equal opportunity employer. Yatinidhi Constructions is dedicated towards implementation of highest level of quality, safety and environmental protection standards which would infuse and stimulate social responsibility and ensure a better life for all associated with us.";
  