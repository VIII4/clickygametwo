import React from "react";
import "./style.css";

let ScoreBoard = function (props) {
  return (
    <>
      <div className="row text-center">
        <div className="col ">
          <h3 className="mr-2">Current Score: {props.score}</h3>
        </div>
        <div className="col">
          <h3>High Score: {props.highScore}</h3>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
