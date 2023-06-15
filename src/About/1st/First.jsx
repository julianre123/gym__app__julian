import React from "react";
import "./First.css";
import banner__corner from "../../assets/Everest images/corner__service.svg";
import First from "../../assets/Everest images/About/about max ganes/1st.jpg";
import Second from "../../assets/Everest images/About/about max ganes/2nd.jpg";
import lines from "../../assets/Everest images/About/about max ganes/grey__lines.svg";
const first = () => {
  return (
    <div className="tips about__first">
      <div className="tips__text first__about__text">
        <img src={banner__corner} alt="" />
        <h1>About Max Gains</h1>
      </div>
      <div className="about__first__container">
        <div className="about__first__container__img one">
          <img src={First} alt="" />
          <img src={lines} alt="" />
        </div>
        <div className="about__first__container__img two">
          <img src={Second} alt="" />
          <img src={lines} alt="" />
        </div>
        <div className="about__first__text">
          <p>
            At Everest, we are on a mission to empower individuals to unleash
            their full potential when it comes to muscle and strength
            development. Our commitment to your success drives us to provide a
            comprehensive range of services and support that goes beyond
            traditional training programs.
          </p>
          <br />
          <p>
            Our meticulously designed training programs are customized to your
            unique goals, body type, and fitness level. We take into account
            factors such as your training history, mobility, and any specific
            considerations to create a program that is perfectly tailored to
            your needs. With a focus on progressive overload, we ensure that
            each workout challenges you appropriately, pushing your limits and
            stimulating maximum gains.
          </p>
          <br />
          <p>
            But we don't stop there. We understand that achieving your desired
            results is not just about the time you spend in the gym. That's why
            we offer personalized nutrition guidance to optimize your diet and
            fuel your body for optimal performance and recovery. Our team of
            nutrition experts will work closely with you to develop a nutrition
            plan that supports your goals, taking into account your dietary
            preferences, food sensitivities, and lifestyle factors.
          </p>
          <br />
          <p>
            To ensure that you stay on track and motivated, we provide ongoing
            support and accountability. Our trainers are not just there to guide
            you through your workouts, but also to provide encouragement,
            motivation, and guidance every step of the way. We celebrate your
            achievements, big or small, and adjust your program as needed to
            keep you progressing towards your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default first;
