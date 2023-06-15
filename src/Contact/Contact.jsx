import React, { useEffect } from "react";
import "./Contact.css";

import banner__corner from "../assets/Everest images/banner__corner.svg";
import map from "../assets/Everest images/About/map__image.png";
import map__pin from "../assets/Everest images/About/map__pin.svg";
import orange__lines from "../assets/Everest images/home/1st/orange lines.svg";
import Questions from "../home/Questions/Questions";
const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="home__banner about__banner contact__banner">
        <div className="home__banner__content about__content contact__content">
          <div className="home__banner__text about__text contact__text">
            <img src={banner__corner} alt="" className="about__corner" />
            <p>CONTACT ME</p>
            <h1>Get in touch today to schedule your call</h1>
          </div>
        </div>
        <div className="contact__form">
          <img src={orange__lines} alt="" />
          <h3>Let's get in touch!</h3>
          <div className="contact__form__names">
            <div className="first__name">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Whats your name?"
              />
            </div>
            <div className="first__name">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Whats your last name?"
              />
            </div>
          </div>
          <div className="contact__form__names">
            <div className="first__name">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Whats your email?"
              />
            </div>
            <div className="first__name">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Whats your Last number?"
              />
            </div>
          </div>
          <div className="contact__form__message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="btn__orange message__btn">Send Message</button>
        </div>
      </div>
      <div className="contact__map__container">
        <div className="contact__map__text">
          <p>(+54)3572 608-190</p>
          <p>julire2011@hotmail.com</p>
          <p>(+54)3572 608-190</p>
        </div>
        <div className="about__second__map contact__map">
          <img src={map} alt="" />
          <img src={map__pin} alt="" />
        </div>
      </div>
      <Questions />
    </div>
  );
};

export default Contact;
