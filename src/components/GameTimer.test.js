import React from "react";
import "../setupTests";
import { GameTimer } from "./GameTimer";
import ReactCountdownClock from "react-countdown-clock";

describe("<GameTimer />", () => {
  it("renders a <ReactCountdownClock> component", () => {
    const wrapper = mount(<GameTimer />);
    expect(wrapper.containsAllMatchingElements([<ReactCountdownClock />]));
  });
});
