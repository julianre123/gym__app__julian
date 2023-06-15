import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import banner__image from "../../assets/Everest images/home/banner/banner__image.png";
import banner__stars from "../../assets/Everest images/home/banner/banner__star.svg";
import banner__corner from "../../assets/Everest images/banner__corner.svg";
import first from "../../assets/Everest images/home/1st/1st.png";
import orange__lines from "../../assets/Everest images/home/1st/orange lines.svg";
const Banner = () => {
  return (
    <div className="home__banner">
      <div className="home__banner__content">
        <div className="home__banner__text">
          <img src={banner__corner} alt="" />
          <p>EVEREST TEAM</p>
          <h1>The ultimate online personal training plans!</h1>
          <div className="home__banner__text_btns">
            <Link className="btn__orange" to="/contact">
              Book A Class
            </Link>

            <Link className="btn" to="/about">
              About Me
            </Link>
          </div>
        </div>
        <div className="home__banner__img__wrapper">
          <div className="home__banner__image">
            <img src={banner__image} alt="" />
          </div>
        </div>
      </div>
      <div className="home__banner__stars">
        <div className="home__banner__star">
          <div className="star__container">
            <img src={banner__stars} alt="" />
          </div>
          <p>Affordable Training & Eating Plans</p>
        </div>
        <div className="home__banner__star">
          <div className="star__container">
            <img src={banner__stars} alt="" />
          </div>
          <p>14 Day Free Return on Purchase</p>
        </div>
        <div className="home__banner__star">
          <div className="star__container">
            <img src={banner__stars} alt="" />
          </div>
          <p>5 Star Rated Personal Trainer</p>
        </div>
      </div>
      <div className="home__first">
        <div className="home__first__image">
          <img src={first} alt="" />
          <img src={orange__lines} alt="" />
        </div>
        <div className="home__first__text">
          <h1>About Max Ganes?</h1>
          <p>
            Max gains refers to the optimal muscle and strength development
            achieved through effective training and nutrition. It involves
            progressive overload, proper exercise selection, and adequate
            recovery. By focusing on compound exercises, tracking progress, and
            providing tailored workout plans, your gym website app can help
            users maximize their gains and achieve their fitness goals.
          </p>
          <Link className="btn" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
