import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Animated } from "react-animated-css";

class App extends Component {

  render() {
    return (
      <div className="w-full h-screen flex flex-wrap bg-gray-200 justify-center">
        <Animated animationIn="animate__slideInUp">
        <NavBar />
        </Animated>
      </div>
    );
  }
}

export default App;
