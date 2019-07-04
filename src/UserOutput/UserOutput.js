import React, { Component } from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p> This is text 1 {props.userName}</p>
      <p> This is text 2</p>
    </div>
  );
};

export default userOutput;
