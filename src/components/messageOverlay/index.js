import React from "react";
import "./style.css";

let MessageOverlay = function (props) {
  let className = props.trigger
    ? "display-1 text-center animated tada d-block"
    : "display-1 text-center d-none";
  return (
    <div className="mask  d-flex justify-content-center align-items-center">
      <h1 className={className}>{props.message}</h1>
    </div>
  );
};

export default MessageOverlay;
