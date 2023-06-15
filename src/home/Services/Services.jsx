import React from "react";
import "./Services.css";
import banner__corner from "../../assets/Everest images/corner__service.svg";
import { ServicesInfo } from "./ServicesInfo";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Services = () => {
  return (
    <div className="services">
      <div className="services__text">
        <img src={banner__corner} alt="" />
        <div className="services__text__text">
          <h1>Services</h1>
          <p>
            Choose the class that suits you best and embark on a transformative
            journey towards a stronger, healthier you.
          </p>
        </div>
      </div>
      <div className="services__items">
        {ServicesInfo.map((item) => (
          <Link
            className="services__item"
            key={item.id}
            to={`services/${item.name}`}
          >
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="services__item__btn">
              <Link to={`/services/${item.name}`}>Learn More</Link>
              <span>
                <ArrowRightAltIcon style={{ fill: "#f58859" }} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
