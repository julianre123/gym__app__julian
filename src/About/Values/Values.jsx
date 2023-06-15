import React from "react";
import "./Values.css";
import { WhyInfo } from "../../home/WhyChoosing/WhyInfo";
import { Link } from "react-router-dom";
import why__corner from "../../assets/Everest images/corner__service.svg";
const Values = () => {
  return (
    <div className="why__container about__values__container">
      <div className="why">
        <div className="services__text why__text">
          <img src={why__corner} alt="" />
          <div className="services__text__text why__text__text about__values__text__text">
            <h1>Why choosing me as your personal trainer</h1>
            <Link className="btn" to="/contact">
              Book A Class
            </Link>
          </div>
        </div>
        <div className="services__items why__items">
          {WhyInfo.slice(0, 3).map((item) => (
            <div key={item.id} className="why__item about__values__item">
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
