import React from "react";

const QuestionsItem = ({ question, answer, toggle, handleToggle, id }) => {
  return (
    <div
      className="question__item"
      onClick={() => handleToggle(id)}
      style={{ backgroundColor: id === toggle ? "#0a071b" : "white" }}
    >
      <div className="question__item__text">
        <p style={{ color: id === toggle ? "white" : "#0a071b" }}>{question}</p>
        <span style={{ color: id === toggle ? "white" : "#0a071b" }}>
          {id === toggle ? "x" : "+"}
        </span>
      </div>
      {id === toggle ? (
        <div
          className="toggle"
          style={{ color: id === toggle ? "#bcb8d0" : "#0a071b" }}
        >
          {answer}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionsItem;
