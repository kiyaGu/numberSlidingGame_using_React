import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PuzzleContainer } from "./containers/PuzzleContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PuzzleContainer />
      </div>
    );
  }
}

export default App;
