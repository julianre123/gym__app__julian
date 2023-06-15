import React from "react";
import { TeamInfo } from "./TeamInfo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import banner__corner from "../../assets/Everest images/corner__service.svg";
import { TipsInfo } from "../../home/tips/TipsInfo";
import "./Team.css";
const Team = () => {
  return (
    <div className="tips">
      <div className="tips__text">
        <img src={banner__corner} alt="" />
        <h1>Read our tips and tricks</h1>
      </div>
      <Link to="/contact">Book A Class</Link>
      <div className="tips__items">
        {TeamInfo.map((item) => (
          <div className="tips__item">
            <img src={item.image} alt="" />
            <div className="shadow">
              <div className="tips__item__container about__team__container">
                <div className="about__team__category">
                  <p>{item.category}</p>
                </div>
                <h2>{item.title}</h2>
                <p>{item.userName}</p>
                <ul>
                  <li>
                    <span>Over 10 years of experience</span>
                  </li>
                  <li>
                    <span>Coached 2.000+ people</span>
                  </li>
                  <li>
                    <span>Bachelors in nutrition</span>
                  </li>
                </ul>
              </div>
              <div className="services__item__btn tips__btn">
                <Link>Contact</Link>
                <span>
                  <ArrowRightAltIcon style={{ fill: "#f58859" }} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
