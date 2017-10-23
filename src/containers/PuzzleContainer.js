import React, { Component } from "react";
import TilesContainer from "./TilesContainer";
class PuzzleContainer extends Component {
  render() {
    return (
      <div>
        <TilesContainer />
        <GameTimer />
        <ResetGameButton />
        <ResultMessageBox />
      </div>
    );
  }
}

const GameTimer = () => {
  return null;
};

const ResetGameButton = () => {
  return null;
};

const ResultMessageBox = () => {
  return null;
};
export { PuzzleContainer, GameTimer, ResetGameButton, ResultMessageBox };
