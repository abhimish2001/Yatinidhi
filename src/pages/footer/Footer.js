import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        {/* Social media links */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            role="button"
            aria-label="Facebook"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Improve security for _blank target links
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            role="button"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            href="https://www.google.com"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            role="button"
            aria-label="Google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            role="button"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            className="btn btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            role="button"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </div>

      {/* Copyright section */}
      <div
        className="text-center p-3 bg-dark"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} // Slight modification for better visibility
      >
        © 2024 Copyright: Yatinidhi Construction Pvt Ltd
      </div>
    </footer>
  );
};

export default Footer;
