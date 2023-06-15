import React from "react";
import "./Clients.css";
import { Link } from "react-router-dom";
import banner__corner from "../../assets/Everest images/corner__service.svg";
import { ClientInfo } from "./ClientInfo";
const Clients = () => {
  return (
    <div className="clients__container">
      <div className="why">
        <div className="services__text why__text">
          <img src={banner__corner} alt="" />
          <div className="services__text__text why__text__text clients__text__text">
            <h1>What my clients say about me?</h1>
            <Link className="btn clients__btn" to="/contact">
              Book A Class
            </Link>
          </div>
        </div>

        <div className="services__items clients__items">
          {ClientInfo.map((item) => (
            <div className="clients__item" key={item.id}>
              <p>{item.text}</p>
              <div className="clients__item__user">
                <div className="clients__item__user__img">
                  <img src={item.image} alt="" />
                </div>
                <div className="clients__item__text">
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="clients__items__bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
