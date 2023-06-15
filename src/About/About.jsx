import React, { useEffect } from "react";
import "./About.css";

import First from "./1st/first";
import Banner from "./Banner";
import Second from "./2nd/Second";
import Values from "./Values/Values";
import Team from "./Team/Team";
const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Banner />
      <First />
      <Second />
      <Values />
      <Team />
    </div>
  );
};

export default About;
