import React from "react";
import "../setupTests";
import { PuzzleContainer } from "./PuzzleContainer";
import { TilesContainer } from "./TilesContainer";
import { ResetGameButton } from "../components/ResetGameButton";
import { GameTimer } from "../components/GameTimer";
import { ResultMessageBox } from "../components/ResultMessageBox";

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
