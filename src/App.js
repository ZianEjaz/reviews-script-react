import React, { Component } from "react";
import NavBar from "./components/navBar";


class App extends Component {

  render() {
    return (
      <div className="w-full flex flex-wrap bg-gray-200 justify-center">
        <NavBar />
        
      </div>
    );
  }
}

export default App;
