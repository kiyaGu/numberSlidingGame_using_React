import React from "react";
import "../setupTests";
import {
  PuzzleContainer,
  GameTimer,
  ResetGameButton,
  ResultMessageBox
} from "./PuzzleContainer";
import TilesContainer from "./TilesContainer";

describe("PuzzleContainer", () => {
  it("should render Tiles, GameTimer, ResetGameButton and FinalResultMessageBox child components", () => {
    const wrapper = shallow(<PuzzleContainer />);
    expect(
      wrapper.containsAllMatchingElements([
        <TilesContainer />,
        <GameTimer />,
        <ResetGameButton />,
        <ResultMessageBox />
      ])
    );
  });
});
