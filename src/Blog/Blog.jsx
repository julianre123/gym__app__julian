import React, { useEffect } from "react";
import "./Blog.css";
import orange__lines from "../assets/Everest images/services/orange__lines.svg";
import banner__corner from "../assets/Everest images/banner__corner.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { TipsInfo } from "../home/tips/TipsInfo";

const Blog = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="home__banner about__banner services__banner blog__banner">
        <div className="home__banner__content about__content">
          <div className="home__banner__text about__text">
            <p>FITNESS INSIGHTS</p>
            <h1>Latest Blogs & News</h1>
          </div>
          <img src={orange__lines} alt="" className="orange__lines" />
        </div>
      </div>
      <div className="tips__items blog__items">
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
                <Link to={`/blog-posts/${item.title}`}>Read More</Link>
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

export default Blog;
