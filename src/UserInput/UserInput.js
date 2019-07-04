import React, { Component } from "react";
// import "./Person.css";

const userInput = props => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default userInput;
