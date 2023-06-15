import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";
import { TipsInfo } from "../home/tips/TipsInfo";
import banner__corner from "../assets/Everest images/banner__corner.svg";
import banner__image from "../assets/Everest images/blog/10 best exercises/banner.png";
import orange__lines from "../assets/Everest images/home/1st/orange lines.svg";
import { Link } from "react-router-dom";
import first from "../assets/Everest images/blog/10 best exercises/first.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Tips from "../home/tips/Tips";
const BlogItem = () => {
  const { name } = useParams();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const product = TipsInfo.find((product) => product.title === name);
  const {
    category,
    title,
    userImage,
    userName,
    blogInfo1,
    blogInfo2,
    blogInfo3,
    blogInfo4,
    blogInfo5,
    blogInfo6,
    blogInfo7,
    blogInfo8,
    blogInfo9,
    blogInfo10,
    blogInfo11,
    blogInfo12,
    userTrainer,
    trainerInfo,
  } = product;
  return (
    <div>
      <div className="home__banner about__banner">
        <div className="home__banner__content about__content">
          <div className="home__banner__text about__text blog__item__text">
            <img src={banner__corner} alt="" className="about__corner" />
            <p>{category}</p>
            <h1>{title}</h1>
            <div className="blog__item__user">
              <img src={userImage} alt="" />
              <p>{userName}</p>
            </div>
          </div>
        </div>

        <div className="home__first about__first">
          <div className="home__first__image about__first__image">
            <img src={banner__image} alt="" className="about__banner__image" />
            <img src={orange__lines} alt="" className="blog__item__orange" />
          </div>
        </div>
      </div>
      <div className="blog__item__container">
        <h1>{title}</h1>
        <p>{blogInfo1}</p>
        <br />
        <p>{blogInfo2}</p>
        <br />
        <p>{blogInfo3}</p>
        <br />
        <p>{blogInfo4}</p>
        <br />
        <img src={first} alt="" />
        <p>{blogInfo5}</p>
        <br />
        <p>{blogInfo6}</p>
        <br />
        <p>{blogInfo7}</p>
        <br />
        <p>{blogInfo8}</p>
        <br />
        <p>{blogInfo9}</p>
        <br />
        <p>{blogInfo10}</p>
        <br />
        <p>{blogInfo11}</p>
        <br />
        <p>{blogInfo12}</p>
        <br />
      </div>
      <div className="blog__item__user__container">
        <div className="blog__item__user__white">
          <div className="blog__item__user__info">
            <div className="blog__item__user__image">
              <img src={userImage} alt="" />
              <div className="blog__item__user__image__text">
                <h1>{userName}</h1>
                <p>{userTrainer}</p>
              </div>
            </div>
            <div className="blog__item__icons">
              <FacebookIcon
                fontSize="large"
                style={{ fill: "black", cursor: "pointer" }}
              />
              <InstagramIcon
                fontSize="large"
                style={{ fill: "black", cursor: "pointer" }}
              />
              <TwitterIcon
                fontSize="large"
                style={{ fill: "black", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="blog__item__user__text">
            <p>{trainerInfo}</p>
          </div>
        </div>
        <div className="blog__item__user__grey"></div>
      </div>
      <Tips />
    </div>
  );
};

export default BlogItem;
