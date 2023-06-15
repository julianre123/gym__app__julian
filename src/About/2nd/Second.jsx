import React from "react";
import "./Second.css";
import { Link } from "react-router-dom";
import orange__lines from "../../assets/Everest images/home/1st/orange lines.svg";
import banner__corner from "../../assets/Everest images/banner__corner.svg";
import map from "../../assets/Everest images/About/map__image.png";
import map__pin from "../../assets/Everest images/About/map__pin.svg";
const Second = () => {
  return (
    <div className="about__second">
      <div className="about__second__container">
        <div className="about__second__text">
          <img src={banner__corner} alt="" />
          <h1>Why choosing me as your personal trainer</h1>
        </div>
        <img src={orange__lines} alt="" />
      </div>
      <div className="about__second__flex">
        <div className="about__second__flex__text">
          <h2>10+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about__second__flex__text">
          <h2>1.000</h2>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="about__second__flex__text">
          <h2>1.250</h2>
          <p>CLASSES TAUGHT</p>
        </div>
        <div className="about__second__flex__text">
          <h2>8.000</h2>
          <p>INSTAGRAM FOLLOWERS</p>
        </div>
      </div>
      <div className="about__second__map">
        <img src={map} alt="" />
        <img src={map__pin} alt="" />
        <div className="about__second__bg"></div>
      </div>
    </div>
  );
};

export default Second;
