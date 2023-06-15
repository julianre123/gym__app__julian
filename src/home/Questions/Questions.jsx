import React, { useState } from "react";
import "./Questions.css";
import banner__corner from "../../assets/Everest images/corner__service.svg";
import { QuestionsInfo } from "./QuestionsInfo";
import QuestionsItem from "./QuestionsItem";
const Questions = () => {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div className="tips questions">
      <div className="tips__text questions__text">
        <img src={banner__corner} alt="" />
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="questions__items">
        {QuestionsInfo.map((item) => (
          <QuestionsItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            toggle={toggle}
            handleToggle={handleToggle}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
