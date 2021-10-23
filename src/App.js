import React, { Component } from "react";
import NavBar from "./components/navBar";


class App extends Component {

  render() {
    return (
      <div className=".w-10/12 flex flex-wrap bg-gray-200">
        <NavBar />
        
      </div>
    );
  }
}

export default App;
