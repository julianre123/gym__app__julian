import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ServicesInfo } from "../home/Services/ServicesInfo";
import "./Services.css";
import { Link } from "react-router-dom";
import banner__corner__grey from "../assets/Everest images/corner__service.svg";
import duration__icon from "../assets/Everest images/services/Duration__Icon.svg";
import intensity__icon from "../assets/Everest images/services/Intensity__Icon.svg";
import equipment__icon from "../assets/Everest images/services/Equipment__Icon.svg";
import calendar__icon from "../assets/Everest images/services/Calendar__Icon.svg";
import banner__corner from "../assets/Everest images/banner__corner.svg";
import first from "../assets/Everest images/services/pilates/1st.png";
import orange__lines from "../assets/Everest images/home/1st/orange lines.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const ServiceItem = () => {
  const { service } = useParams();
  const product = ServicesInfo.find((product) => product.name === service);
  const {
    image,
    name,
    description,
    duration,
    intensity,
    equipment,
    days,
    about1,
    about2,
    about3,
    about4,
    about5,
    about6,
    about7,
  } = product;
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="home__banner about__banner">
        <div className="home__banner__content about__content">
          <div className="home__banner__text about__text service__item__text">
            <img src={banner__corner} alt="" className="about__corner" />
            <p>SERVICES</p>
            <h1>{name}</h1>
            <p>{description}</p>
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
          <div className="home__first__image about__first__image service__item__image">
            <img src={image} alt="" className="about__banner__image" />
            <img src={orange__lines} alt="" />
          </div>
        </div>
      </div>
      <div className="service__item__container">
        <div className="service__item__container__text">
          <h1>What is this class about?</h1>
          <p>{about1}</p>
          <br />
          <p>{about2}</p>
          <br />
          <p>{about3}</p>
          <br />
          <p>{about4}</p>
          <br />
          <p>{about5}</p>
          <br />
          <img src={first} alt="" />
          <p>{about6}</p>
          <br />
          <p>{about7}</p>
          <br />
        </div>
        <div className="hola">
          <div className="service__item__container__des">
            <h2>Class Details</h2>
            <div className="service__item__container__des__items">
              <div className="service__item__container__des__item">
                <img src={duration__icon} alt="" />
                <span>Duration :</span> <span>{duration}</span>
              </div>
              <div className="service__item__container__des__item">
                <img src={intensity__icon} alt="" />
                <span>Intensity :</span> <span>{intensity}</span>
              </div>
              <div className="service__item__container__des__item">
                <img src={equipment__icon} alt="" />
                <span>Equipment :</span> <span>{equipment}</span>
              </div>
              <div className="service__item__container__des__item">
                <img src={calendar__icon} alt="" />
                <span>Days / Time :</span> <span>{days}</span>
              </div>
            </div>
            <div className="btn__orange">
              <Link className="service__item__btn" to="/contact">
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="service__item__services">
        <div className="services service__item__services__container">
          <div className="services__text">
            <img src={banner__corner__grey} alt="" />
            <div className="services__text__text">
              <h1>Services</h1>
              <p>
                Choose the class that suits you best and embark on a
                transformative journey towards a stronger, healthier you.
              </p>
            </div>
          </div>

          <div className="services__items">
            {ServicesInfo.map((item) => (
              <Link
                className="services__item"
                key={item.id}
                to={`/services/${item.name}`}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
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
      </div>
    </div>
  );
};

export default ServiceItem;
