import React from "react";
import { Link } from "react-router-dom";
import banner__image from "../assets/Everest images/About/banner__about.jpg";

import banner__corner from "../assets/Everest images/banner__corner.svg";

import orange__lines from "../assets/Everest images/home/1st/orange lines.svg";
const Banner = () => {
  return (
    <div className="home__banner about__banner">
      <div className="home__banner__content about__content">
        <div className="home__banner__text about__text">
          <img src={banner__corner} alt="" className="about__corner" />
          <p>ABOUT EVEREST</p>
          <h1>
            Discover the team behind our legendary gyms and fitness classes
          </h1>
          <div className="home__banner__text_btns about__text__btns">
            <Link className="btn__orange" to="/contact">
              Book A Class
            </Link>

            <Link className="btn" to="/about">
              About Me
            </Link>
          </div>
        </div>
      </div>

      <div className="home__first about__first">
        <div className="home__first__image about__first__image">
          <img src={banner__image} alt="" className="about__banner__image" />
          <img src={orange__lines} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
