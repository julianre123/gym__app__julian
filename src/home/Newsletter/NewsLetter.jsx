import React from "react";
import "./NewsLetter.css";
import { Link } from "react-router-dom";
import why__corner from "../../assets/Everest images/why__corner.svg";
import orange__lines from "../../assets/Everest images/home/Waiting/orange__lines.svg";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <div className="services__text why__text news__text">
          <img src={why__corner} alt="" />
          <div className="services__text__text why__text__text news__text__text">
            <h1>What are you waiting for?</h1>
            <p>
              Signup to our newsletter to get a free 30 day meal plan. You will
              receive all guidance on what to eat, how to cook and how much to
              eat.
            </p>
            <Link className="btn__orange" to="/contact">
              Contact Me
            </Link>
            <img src={orange__lines} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
