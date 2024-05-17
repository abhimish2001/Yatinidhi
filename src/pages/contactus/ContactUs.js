import React, { useState } from "react";
import { useEffect } from "react";
import WOW from "wow.js";
import "animate.css/animate.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";

function ContactUs() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Email sent successfully!");
        handleReset();
      } else {
        toast.error("Failed to send email: " + data.message);
      }
    } catch (error) {
      console.error("Failed to send email", error);
      toast.error("An error occurred while sending the email.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="content">
          <div className="left-side  b1 wow animate__animated animate__slideInLeft ">
            <div className="address details">
              <i className="bi bi-geo-alt-fill"></i>
              <div className="topic">Address</div>
              <div className="text-one fs-5 text-secondary">
                C-406, ROHINI APPT. GOMTI NAGAR EXT.
              </div>
              <div className="text-two fs-5 text-secondary">
                LUCKNOW | UP- 226010
              </div>
            </div>
            <div className="phone details">
              <i className="bi bi-telephone-fill"></i>
              <div className="topic">Phone</div>
              <div className="text-one fs-5 text-secondary">+91-8960042591</div>
              <div className="text-two fs-5 text-secondary">+91-9598433299</div>
            </div>
            <div className="email details">
              <i className="bi bi-envelope-fill"></i>
              <div className="topic">Email</div>
              <div className="text-one fs-5 text-secondary">
                yatinidhiconst@gmail.com
              </div>
            </div>
          </div>
          <div className="vl"></div>
          <div className="right-side  b1 wow animate__animated animate__slideInRight ">
            <div className="topic-text fs-3 mt-5">Send us a message</div>
            <p>Please fill out the details below to contact us</p>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button-group">
                <button
                  className="btn btn-secondary p-2 m-2"
                  type="submit"
                  disabled={
                    !formData.name || !formData.email || !formData.message
                  }
                >
                  Submit
                </button>
                <button
                  className="btn btn-secondary p-2 m-2"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}

export default ContactUs;
