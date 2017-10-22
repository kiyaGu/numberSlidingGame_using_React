import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  PuzzleContainer,
  Tiles,
  GameTimer,
  ResetGameButton,
  ResultMessageBox
} from "./PuzzleContainer";
configure({ adapter: new Adapter() });

describe("PuzzleContainer", () => {
  it("should render Tiles, GameTimer, ResetGameButton and FinalResultMessageBox child components", () => {
    const wrapper = shallow(<PuzzleContainer />);
    expect(
      wrapper.containsAllMatchingElements([
        <Tiles />,
        <GameTimer />,
        <ResetGameButton />,
        <ResultMessageBox />
      ])
    );
  });
});
