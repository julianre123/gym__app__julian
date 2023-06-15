import React from "react";
import { Link } from "react-router-dom";
import banner__corner from "../../assets/Everest images/corner__service.svg";
import "./Tips.css";
import { TipsInfo } from "./TipsInfo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Tips = () => {
  return (
    <div className="tips">
      <div className="tips__text">
        <img src={banner__corner} alt="" />
        <h1>Read our tips and tricks</h1>
      </div>
      <Link to="/blog">View All Posts</Link>
      <div className="tips__items">
        {TipsInfo.map((item) => (
          <div className="tips__item" key={item.id}>
            <img src={item.image} alt="" />
            <div className="shadow">
              <div className="tips__item__container">
                <div className="tips__item__user">
                  <img src={item.userImage} alt="" />
                  <Link>{item.userName}</Link>
                </div>
                <p>{item.category}</p>
                <h2>{item.title}</h2>
              </div>
              <div className="services__item__btn tips__btn">
                <Link
                  to={`/blog-posts/${item.title}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Read More
                </Link>
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

export default Tips;
