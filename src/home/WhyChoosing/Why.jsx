import React from "react";
import "./Why.css";
import { Link } from "react-router-dom";
import why__corner from "../../assets/Everest images/why__corner.svg";
import { WhyInfo } from "./WhyInfo";
const Why = () => {
  return (
    <div className="why__container">
      <div className="why">
        <div className="services__text why__text">
          <img src={why__corner} alt="" />
          <div className="services__text__text why__text__text">
            <h1>Why choosing me as your personal trainer</h1>
            <Link className="btn" to="/contact">
              Book A Class
            </Link>
          </div>
        </div>
        <div className="services__items why__items">
          {WhyInfo.map((item) => (
            <div key={item.id} className="why__item">
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

export default Why;
