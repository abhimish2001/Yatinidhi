import React from "react";
import Testimonialbox from "./Testimonialbox";
import About from "./About";
import Blog from "./Blog";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Testimonialbox />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
