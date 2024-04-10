import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Footer = () => {
  return (
    <footer className="bg-dark text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            to="#!"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link
            to="#!"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          <Link
            to="#!"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            role="button"
          >
            <i className="fab fa-google"></i>
          </Link>

          <Link
            to="#!"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          <Link
            to="#!"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </section>
      </div>

      <div
        className="text-center p-3 bg-dark text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright: Yatinidhi Construction Pvt Ltd
      </div>
    </footer>
  );
};

export default Footer;
