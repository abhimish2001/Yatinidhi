import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Blog from "../blog/Blog";
import About from "../about/About";
import TestimonialBox from "../testimonial/TestimonialBox";
function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Blog />
      <TestimonialBox />
      <Footer />
    </>
  );
}

export default Home;
