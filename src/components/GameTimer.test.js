import React from "react";
import "../setupTests";
import { GameTimer } from "./GameTimer";

describe("<GameTimer />", () => {
  it("renders a div with an id of game-timer", () => {
    const wrapper = shallow(<GameTimer />);
    expect(wrapper.find("div#game-timer")).toHaveLength(1);
  });
});
