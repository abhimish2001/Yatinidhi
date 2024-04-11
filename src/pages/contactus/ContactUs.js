import React, { useState } from "react";
import "./Contact.css";
import Footer from "../footer/Footer";

function ContactUs() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
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
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="bi bi-geo-alt-fill"></i>
              <div className="topic">Address</div>
              <div className="text-one fs-5">
                C-406 , ROHINI APPT. GOMTI NAGAR EXT.
              </div>
              <div className="text-two fs-5">LUCKNOW | UP- 226010</div>
            </div>
            <div className="phone details">
              <i className="bi bi-telephone-fill"></i>
              <div className="topic">Phone</div>
              <div className="text-one fs-5">+91-8960042591 </div>
              <div className="text-two fs-5">+91-9598433299</div>
            </div>
            <div className="email details">
              <i className="bi bi-envelope-at-fill"></i>
              <div className="topic">Email</div>
              <div className="text-one fs-5">yatinidhiconst@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text fs-3 mt-5">Send us a message</div>
            <p>Please fill out the details below to contact us</p>

            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xqkvgbpp"
              target="_blank"
              method="POST"
            >
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
              <button
                className="bg-dark text-light p-2 m-2"
                type="submit"
                disabled={
                  !formData.name || !formData.email || !formData.message
                }
              >
                Submit
              </button>
              <button
                className="bg-dark text-light p-2 m-2"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
