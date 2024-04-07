import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Blog from "../blog/Blog";
import About from "../about/About";
function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
