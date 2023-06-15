import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Why from "./WhyChoosing/Why";
import Clients from "./Clients/Clients";
import NewsLetter from "./Newsletter/NewsLetter";
import Clases from "./Clases/Clases";
import Tips from "./tips/Tips";
import Questions from "./Questions/Questions";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Services />
      <Why />
      <Clients />
      <NewsLetter />
      <Clases />
      <Tips />
      <Questions />
    </div>
  );
};

export default Home;
