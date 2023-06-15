import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

import orange__lines from "../assets/Everest images/services/orange__lines.svg";
import banner__corner from "../assets/Everest images/banner__corner.svg";
import { ServicesInfo } from "../home/Services/ServicesInfo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import why__corner from "../assets/Everest images/why__corner.svg";
import Questions from "../home/Questions/Questions";
import NewsLetter from "../home/Newsletter/NewsLetter";

const Services = () => {
  return (
    <div>
      <div className="home__banner about__banner services__banner">
        <div className="home__banner__content  services__content">
          <div className="home__banner__text about__text">
            <img
              src={banner__corner}
              alt=""
              className="about__corner services__corner"
            />
            <p>GET ACTIVE WITH EVEREST</p>
            <h1>Discover our services</h1>
          </div>
          <img src={orange__lines} alt="" className="orange__lines" />
        </div>
      </div>
      <div className="services__items services__items2">
        {ServicesInfo.map((item) => (
          <Link
            className="services__item"
            key={item.id}
            to={`/services/${item.name}`}
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
      <NewsLetter />
      <Questions />
    </div>
  );
};

export default Services;
