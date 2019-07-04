import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [{ userName: "Tony" }, { userName: "Helen" }]
  };

  changeNameHandler = event => {
    this.setState({
      users: [{ userName: "Isaac" }, { userName: event.target.value }]
    });
  };

  render() {
    const style = {
      color: "red",
      backgroundColor: "green"
    };

    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <UserInput style={style} changed={this.changeNameHandler} />
        <UserOutput userName={this.state.users[1].userName} />
        <UserOutput userName={this.state.users[1].userName} />
      </div>
    );
  }
}
export default App;
